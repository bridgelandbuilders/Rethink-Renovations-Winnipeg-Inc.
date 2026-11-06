// Builds the static site into ./dist. No dependencies: `node build.mjs`.
import { mkdir, rm, writeFile, cp, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { layout } from './src/layout.mjs';
import { site } from './data/site.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');

await rm(out, { recursive: true, force: true });
await cp(join(root, 'public'), out, { recursive: true });

const pages = [];
const pageDir = join(root, 'src', 'pages');
for (const file of (await readdir(pageDir)).filter((f) => f.endsWith('.mjs')).sort()) {
  const mod = await import(pathToFileURL(join(pageDir, file)).href);
  const result = mod.default();
  pages.push(...(Array.isArray(result) ? result : [result]));
}

for (const page of pages) {
  const file = page.path === '/404' ? join(out, '404.html') : join(out, page.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, layout(page));
}

if (site.staging) {
  await writeFile(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
} else if (site.siteUrl) {
  const urls = pages
    .filter((p) => p.path !== '/404')
    .map((p) => `  <url><loc>${site.siteUrl}${p.path}</loc></url>`)
    .join('\n');
  await writeFile(
    join(out, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.siteUrl}/sitemap.xml\n`);
} else {
  await writeFile(join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');
}

console.log(`Built ${pages.length} pages into dist/`);
