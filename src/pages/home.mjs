import { rooms, tiers, comingNext } from '../../data/collections.mjs';
import { esc, swatches } from '../layout.mjs';
import { steps } from './how-it-works.mjs';

export default function () {
  const head = tiers
    .map(
      (t) => `<div class="m-head" data-col="${t.id}"><h3>${t.name}</h3><p>${esc(t.summary)}</p></div>`
    )
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

  const stepList = steps
    .slice(0, 4)
    .map((s, i) => `<li><span class="step-num">${i + 1}</span><h3>${s.title}</h3><p>${s.short}</p></li>`)
    .join('');

  return {
    path: '/',
    title: 'Home',
    description:
      'Bathroom, kitchen and basement renovations in Winnipeg, offered as designed packages: Essential, Select and Signature. Know what is included before work begins.',
    bodyClass: 'page-home',
    body: `
<section class="hero">
  <div class="wrap">
    <div class="hero-copy">
      <h1>Renovation should be easier.</h1>
      <div>
      <p class="lede">Rethink Renovations offers bathroom, kitchen and basement renovations in Winnipeg as designed packages. Pick a room, choose a collection, and know what you are getting before work begins.</p>
      <div class="actions">
        <a class="btn btn-bronze" href="/collections/">Explore the collections</a>
        <a class="btn btn-ghost" href="/get-started/">Join the early list</a>
      </div>
      </div>
    </div>

    <div class="matrix" role="group" aria-label="Choose a room and collection">
      <div class="m-corner"><p>Three rooms.<br>Three collections.</p></div>
      ${head}
      ${rows}
    </div>
    <p class="matrix-note">Palettes are illustrative while collections are finalised.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>What a package changes</h2>
      <p>Most renovations start as a blank page. Ours start from a plan that has already been designed, priced and tested for buildability.</p>
    </div>
    <div class="cmp" role="table" aria-label="Typical renovation compared with a Rethink package">
      <div class="cmp-row cmp-labels" role="presentation"><span></span><p>Typical renovation</p><p>Rethink package</p></div>
      ${compare}
    </div>
  </div>
</section>

<section class="section section-tint">
  <div class="wrap">
    <div class="section-head">
      <h2>How it works</h2>
      <p>Four steps from first visit to finished room.</p>
    </div>
    <ol class="steps">${stepList}</ol>
    <p><a class="text-link" href="/how-it-works/">See the full process</a></p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <h2>Designed once, carefully</h2>
      <p>Every collection is developed with a professional interior designer who sets the standards behind it: which materials belong together, how each collection differs, and which details hold up on a real job site.</p>
      <p>You get a designed result without starting from scratch.</p>
      <p><a class="text-link" href="/design-standards/">About our design standards</a></p>
    </div>
    <div class="standards-board" aria-hidden="true">
      ${tiers.map((t) => `<div><span>${t.name}</span>${swatches(rooms[0].packages[t.id].palette, 'swatches swatches-lg')}</div>`).join('')}
    </div>
  </div>
</section>

<section class="section section-tint">
  <div class="wrap split">
    <div>
      <h2>Coming next</h2>
      <p>Once the first three rooms are in place, we plan to add collections for more of the home.</p>
    </div>
    <ul class="next-list">${comingNext.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>Be first to see the collections</h2>
    <p>Join the early list for final selections, pricing and the first available start dates.</p>
    <a class="btn btn-bronze" href="/get-started/">Join the early list</a>
  </div>
</section>`,
  };
}
