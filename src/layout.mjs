import { site, nav } from '../data/site.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const priceLabel = (price) =>
  price == null ? 'Pricing at launch' : `From $${Number(price).toLocaleString('en-CA')}`;

export const swatches = (palette, cls = 'swatches') =>
  `<ul class="${cls}" aria-label="Illustrative palette">${palette
    .map((p) => `<li style="--c:${p.hex}"><span class="visually-hidden">${esc(p.name)}</span></li>`)
    .join('')}</ul>`;

// Intrinsic sizes of the photos in public/assets/img/photos (prevents layout shift).
const PHOTO_SIZES = {
  bathroom: [800, 534], kitchen: [800, 534], 'basement-flooring': [1200, 800],
  blueprints: [1200, 799], selections: [1200, 800], 'site-visit': [1200, 800], 'build-cabinets': [1200, 771],
  handover: [1200, 800], designer: [1200, 801], 'hero-site-team': [2000, 1333], 'site-worker': [1200, 800], 'site-scaffold': [1200, 800],
  'plans-handshake': [1800, 1200], laundry: [1200, 900], mudroom: [1200, 788], 'home-office': [1095, 730],
  'aging-in-place': [1200, 633], 'main-floor': [1120, 746], 'home-exterior': [1182, 788],
};

export const photo = (name, alt = '', { cls = '', eager = false } = {}) => {
  const [w, h] = PHOTO_SIZES[name] || [1200, 800];
  return `<img src="/assets/img/photos/${name}.jpg" alt="${esc(alt)}" width="${w}" height="${h}"${
    cls ? ` class="${cls}"` : ''
  }${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
};

// Navy blueprint page header with a framed photo on the right.
export const pageHero = ({ title, lede, img, alt = '', crumb = '', extra = '' }) => `
<section class="page-hero blueprint">
  <div class="wrap page-hero-inner">
    <div class="page-hero-copy">
      ${crumb}
      <h1>${title}</h1>
      <span class="dim-line" aria-hidden="true"></span>
      <p class="lede">${lede}</p>
      ${extra}
    </div>
    <figure class="framed">${photo(img, alt, { eager: true })}</figure>
  </div>
</section>`;

function header(path) {
  const links = nav
    .map((n) => {
      const current = path.startsWith(n.href) ? ' aria-current="page"' : '';
      return `<li><a href="${n.href}"${current}>${esc(n.label)}</a></li>`;
    })
    .join('');
  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="${esc(site.name)} home">
      <img src="/assets/img/mark.png" alt="" width="40" height="40">
      <span class="brand-name">Rethink<span>Renovations</span></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${links}</ul>
      <a class="btn btn-primary btn-small" href="/get-started/">Get started</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const contact = [
    site.email && `<a href="mailto:${esc(site.email)}">${esc(site.email)}</a>`,
    site.phone && `<a href="tel:${esc(site.phone.replace(/[^+\d]/g, ''))}">${esc(site.phone)}</a>`,
  ]
    .filter(Boolean)
    .join('<br>');
  return `
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <img src="/assets/img/logo-light.png" alt="${esc(site.legalName)}" width="164" height="157">
    </div>
    <div>
      <h2 class="footer-heading">Collections</h2>
      <ul>
        <li><a href="/collections/bathroom/">Bathroom</a></li>
        <li><a href="/collections/kitchen/">Kitchen</a></li>
        <li><a href="/collections/basement/">Basement</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer-heading">Company</h2>
      <ul>
        <li><a href="/how-it-works/">How it works</a></li>
        <li><a href="/design-standards/">Design standards</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/get-started/">Get started</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer-heading">Winnipeg, Manitoba</h2>
      <p>${contact || 'Renovations for Winnipeg homes.'}</p>
    </div>
  </div>
  <div class="wrap footer-base">
    <p>© ${new Date().getFullYear()} ${esc(site.legalName)}</p>
  </div>
</footer>`;
}

export function layout({ path, title, description, body, bodyClass = '' }) {
  const fullTitle = path === '/' ? `${site.name} | Packaged renovations in ${site.city}` : `${title} | ${site.name}`;
  const url = site.siteUrl ? site.siteUrl + path : '';
  const notice = site.previewNotice
    ? `<div class="preview-notice"><div class="wrap"><p>${esc(site.previewNotice)} <a href="/get-started/">Join the early list</a></p></div></div>`
    : '';
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.legalName,
    areaServed: `${site.city}, ${site.region}`,
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: 'MB', addressCountry: 'CA' },
    ...(site.siteUrl && { url: site.siteUrl, logo: site.siteUrl + '/assets/img/logo-dark.png' }),
    ...(site.email && { email: site.email }),
    ...(site.phone && { telephone: site.phone }),
  };
  return `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${url ? `<link rel="canonical" href="${url}">\n<meta property="og:url" content="${url}">` : ''}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
${site.siteUrl ? `<meta property="og:image" content="${site.siteUrl}/assets/img/logo-dark.png">` : ''}
<meta name="theme-color" content="#16263a">
${site.staging ? '<meta name="robots" content="noindex, nofollow">' : ''}
<script>document.documentElement.classList.add('js')</script>
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/montserrat-latin-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/figtree-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/styles.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body class="${bodyClass}">
${header(path)}
${notice}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}
