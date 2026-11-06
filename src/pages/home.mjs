import { rooms, tiers, comingNext } from '../../data/collections.mjs';
import { esc, swatches, photo } from '../layout.mjs';
import { steps } from './how-it-works.mjs';

export default function () {
  const head = tiers
    .map((t) => `<div class="m-head" data-col="${t.id}"><h3>${t.name}</h3><p>${esc(t.summary)}</p></div>`)
    .join('');

  const rows = rooms
    .map((r) => {
      const cells = tiers
        .map((t) => {
          const pkg = r.packages[t.id];
          return `<a class="m-cell" data-row="${r.id}" data-col="${t.id}" href="/collections/${r.id}/#${t.id}">
          ${swatches(pkg.palette)}
          <span class="m-cell-label">${r.name} <strong>${t.name}</strong></span>
        </a>`;
        })
        .join('');
      return `<a class="m-room" data-row="${r.id}" href="/collections/${r.id}/"><span>${r.name}</span></a>${cells}`;
    })
    .join('');

  const roomCards = rooms
    .map(
      (r) => `
    <a class="room-card" href="/collections/${r.id}/">
      ${photo(r.photo, r.photoAlt)}
      <div class="room-card-body">
        <h3>${r.name}</h3>
        <p>${esc(r.goodFor)}</p>
        <span class="room-card-tiers">${tiers.map((t) => `<span>${t.name}</span>`).join('')}</span>
      </div>
    </a>`
    )
    .join('');

  const compare = [
    ['Scope', 'Defined after several site visits and revisions', 'Starts from a package with a clear list of what is included'],
    ['Price', 'Often unclear until the quote arrives', 'Each package has a published starting price'],
    ['Design', 'Up to you, or a separate designer to hire', 'Finishes chosen together by a professional designer'],
    ['Selections', 'Hundreds of choices, one item at a time', 'Coordinated palettes, with room to personalise'],
    ['Schedule', 'Set once every decision is made', 'Planned around a known scope from the start'],
  ]
    .map(
      ([k, a, b]) => `<div class="cmp-row"><h3>${k}</h3><p class="cmp-old">${a}</p><p class="cmp-new">${b}</p></div>`
    )
    .join('');

  const stepPhotos = [
    ['blueprints', 'Floor plans, wood samples and colour swatches on a table'],
    ['site-visit', 'Renovation team reviewing plans with a homeowner on site'],
    ['selections', 'Couple comparing backsplash tile in their kitchen'],
    ['build-cabinets', 'Installer levelling a new kitchen cabinet'],
  ];
  const stepCards = steps
    .slice(0, 4)
    .map(
      (s, i) => `<li class="step-card">
      <div class="step-media">${photo(stepPhotos[i][0], stepPhotos[i][1])}<span class="step-num">${String(i + 1).padStart(2, '0')}</span></div>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
    </li>`
    )
    .join('');

  const tiles = comingNext
    .map((c) =>
      c.photo
        ? `<li class="tile">${photo(c.photo, c.alt)}<span>${esc(c.name)}</span></li>`
        : `<li class="tile tile-plain"><span>${esc(c.name)}</span></li>`
    )
    .join('');

  return {
    path: '/',
    title: 'Home',
    description:
      'Bathroom, kitchen and basement renovations in Winnipeg, offered as designed packages: Essential, Select and Signature. Know what is included before work begins.',
    bodyClass: 'page-home',
    body: `
<section class="hero">
  ${photo('hero-renovation', '', { cls: 'hero-bg', eager: true })}
  <div class="hero-shade blueprint-lines" aria-hidden="true"></div>
  <div class="wrap hero-inner">
    <h1 class="hero-title"><span>Renovation</span> <span>should be</span> <span>easier.</span></h1>
    <div class="hero-measure" aria-hidden="true"><span class="dim-line dim-line-long"></span><span class="hero-measure-label">3 rooms &times; 3 collections</span></div>
    <p class="lede">Bathroom, kitchen and basement renovations in Winnipeg, designed as packages. Pick a room, choose a collection, and know what you are getting before work begins.</p>
    <div class="actions">
      <a class="btn btn-bronze" href="/collections/">Explore the collections</a>
      <a class="btn btn-outline-light" href="/get-started/">Join the early list</a>
    </div>
  </div>
</section>

<section class="matrix-section">
  <div class="wrap">
    <div class="matrix-panel">
      <div class="matrix" role="group" aria-label="Choose a room and collection">
        <div class="m-corner"><h2>Choose your starting point</h2></div>
        ${head}
        ${rows}
      </div>
    </div>
    <p class="matrix-note">Palettes are illustrative while collections are finalised.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head section-head-row">
      <div>
        <h2 class="display">Three rooms to start</h2>
        <span class="ruler" aria-hidden="true"></span>
      </div>
      <p>Each room is a complete renovation package, from demolition to final clean-up, in three collections.</p>
    </div>
    <div class="room-cards">${roomCards}</div>
  </div>
</section>

<section class="section section-concrete">
  <div class="wrap split split-media">
    <figure class="framed framed-left">${photo('selections', 'Couple comparing backsplash tile in their kitchen')}</figure>
    <div>
      <h2 class="display">What a package changes</h2>
      <span class="ruler" aria-hidden="true"></span>
      <p class="section-intro">Most renovations start as a blank page. Ours start from a plan that has already been designed, priced and checked for buildability.</p>
      <div class="cmp">${compare}</div>
    </div>
  </div>
</section>

<section class="section blueprint">
  <div class="wrap">
    <div class="section-head section-head-row">
      <div>
        <h2 class="display">How it works</h2>
        <span class="ruler ruler-light" aria-hidden="true"></span>
      </div>
      <p>Four steps from first visit to finished room, with the scope set before work begins.</p>
    </div>
    <ol class="step-cards">${stepCards}</ol>
    <a class="btn btn-outline-light" href="/how-it-works/">See the full process</a>
  </div>
</section>

<section class="section">
  <div class="wrap split split-media">
    <div>
      <h2 class="display">Designed once, carefully</h2>
      <span class="ruler" aria-hidden="true"></span>
      <p class="section-intro">Every collection is developed with a professional interior designer who sets the standards behind it: which materials belong together, how each collection differs, and which details hold up on a real job site.</p>
      <div class="standards-board">
        ${tiers.map((t) => `<div><span>${t.name}</span>${swatches(rooms[1].packages[t.id].palette, 'swatches swatches-lg')}</div>`).join('')}
      </div>
      <a class="btn btn-primary" href="/design-standards/">About our design standards</a>
    </div>
    <div class="collage">
      <figure class="framed">${photo('designer', 'Designer reviewing drawings at a work table')}</figure>
      <figure class="collage-inset">${photo('blueprints', 'Floor plans with material and colour samples')}</figure>
    </div>
  </div>
</section>

<section class="section section-concrete">
  <div class="wrap">
    <div class="section-head section-head-row">
      <div>
        <h2 class="display">Coming next</h2>
        <span class="ruler" aria-hidden="true"></span>
      </div>
      <p>Once the first three rooms are in place, we plan to add collections for more of the home.</p>
    </div>
    <ul class="tiles">${tiles}</ul>
  </div>
</section>

<section class="cta-band">
  ${photo('plans-handshake', '', { cls: 'cta-bg' })}
  <div class="wrap cta-inner">
    <h2 class="display">Be first to see the collections</h2>
    <p>Join the early list for final selections, pricing and the first available start dates.</p>
    <a class="btn btn-bronze" href="/get-started/">Join the early list</a>
  </div>
</section>`,
  };
}
