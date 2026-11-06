# Rethink Renovations Winnipeg Inc. — website

The public website for Rethink Renovations: packaged bathroom, kitchen and basement renovations in Winnipeg, each offered in three collections (Essential, Select, Signature).

It is a plain static site produced by a small build script with no dependencies. Requires Node 18 or newer.

```bash
npm run build     # writes the site to dist/
npm run preview   # builds, then serves dist/ at http://localhost:3000
```

## Where things live

| To change… | Edit |
| --- | --- |
| Package inclusions, palettes, prices | `data/collections.mjs` |
| Email, phone, domain, form endpoint, preview banner | `data/site.mjs` |
| Page copy | `src/pages/*.mjs` (one file per page; `collections.mjs` makes all room pages) |
| Header, footer, `<head>` tags | `src/layout.mjs` |
| Styles / behaviour | `public/assets/css/styles.css`, `public/assets/js/main.js` |
| Logo, favicon, fonts | `public/assets/img/`, `public/favicon.png`, `public/assets/fonts/` |
| Photos | `public/assets/img/photos/` (add new ones to `PHOTO_SIZES` in `src/layout.mjs`) |

Prices: set `price: 18500` on a package to show "From $18,500"; leave `null` to show "Pricing at launch".

## Before launch

1. **Form** — create a form endpoint (for example at formspree.io) and paste its URL into `formEndpoint` in `data/site.mjs`. Until then, the form opens the visitor's email app addressed to `email`; if both are blank it shows "not connected".
2. **Contact** — fill in `email` and `phone` in `data/site.mjs` (shown in the footer and used in search-engine data).
3. **Domain** — set `siteUrl` (e.g. `https://rethinkrenovations.ca`) to generate canonical links and `sitemap.xml`.
4. **Collections** — replace the draft inclusions and palettes with the final selections from the Founding Design Partner, and add the designer's profile on `src/pages/design-standards.mjs`.
5. **Preview banner** — set `previewNotice` to `''` once collections are final.

## Deploying on Vercel

Import this repository in Vercel. `vercel.json` already sets the build command (`npm run build`) and output folder (`dist`). Any static host works the same way.

Photos come from the Founding Design Partner proposal; confirm the stock licence covers website use, and swap in photos of completed Rethink projects as they become available.

Fonts: Montserrat and Figtree, self-hosted under the SIL Open Font License (see `public/assets/fonts/`).
