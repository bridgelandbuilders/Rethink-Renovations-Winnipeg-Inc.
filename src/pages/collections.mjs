import { rooms, tiers } from '../../data/collections.mjs';
import { esc, swatches, priceLabel, photo, pageHero } from '../layout.mjs';

function overview() {
  const rows = rooms
    .map(
      (r) => `
    <article class="room-feature">
      <a class="room-feature-media" href="/collections/${r.id}/" tabindex="-1" aria-hidden="true">${photo(r.photo, r.photoAlt)}</a>
      <div class="room-feature-copy">
        <h2 class="display"><a href="/collections/${r.id}/">${r.name}</a></h2>
        <span class="ruler" aria-hidden="true"></span>
        <p>${esc(r.intro)}</p>
        <p class="muted">${esc(r.goodFor)}</p>
        <ul class="tier-links">
          ${tiers
            .map(
              (t) => `<li><a href="/collections/${r.id}/#${t.id}">${swatches(r.packages[t.id].palette)}<span>${t.name}</span></a></li>`
            )
            .join('')}
        </ul>
      </div>
    </article>`
    )
    .join('');

  return {
    path: '/collections/',
    title: 'Collections',
    description:
      'Bathroom, kitchen and basement renovation collections in Winnipeg. Each room comes in three collections: Essential, Select and Signature.',
    body: `
${pageHero({
  title: 'Collections',
  lede: 'Each room comes in three collections. The difference is in the materials, the details and how much the layout can change.',
  img: 'kitchen',
  alt: 'White kitchen with a large island, pendant lights and wood flooring',
})}

<section class="tier-strip">
  <div class="wrap">
    <dl class="tier-key">
      ${tiers.map((t, i) => `<div><dt><span class="tier-level" aria-hidden="true">${'<i></i>'.repeat(i + 1)}</span>${t.name}</dt><dd>${esc(t.summary)}</dd></div>`).join('')}
    </dl>
  </div>
</section>

<section class="section">
  <div class="wrap room-features">${rows}</div>
</section>

<section class="cta-band">
  ${photo('plans-handshake', '', { cls: 'cta-bg' })}
  <div class="wrap cta-inner">
    <h2 class="display">Not sure which collection fits?</h2>
    <p>Tell us about your space and budget, and we will point you to the right starting point.</p>
    <a class="btn btn-bronze" href="/get-started/">Get started</a>
  </div>
</section>`,
  };
}

function roomPage(r) {
  const headCells = tiers
    .map((t, i) => {
      const pkg = r.packages[t.id];
      return `<th scope="col" id="${t.id}" data-col="${t.id}">
        <span class="tier-level" aria-hidden="true">${'<i></i>'.repeat(i + 1)}</span>
        <span class="t-name">${t.name}</span>
        <span class="t-price">${priceLabel(pkg.price)}</span>
        ${swatches(pkg.palette, 'swatches swatches-lg')}
      </th>`;
    })
    .join('');

  const bodyRows = r.categories
    .map(
      (cat, i) => `<tr><th scope="row">${esc(cat)}</th>${tiers
        .map((t) => `<td data-col="${t.id}">${esc(r.packages[t.id].includes[i])}</td>`)
        .join('')}</tr>`
    )
    .join('');

  const paletteNames = tiers
    .map(
      (t) => `<div class="palette-list" data-col="${t.id}">
      <h3>${t.name} palette</h3>
      <ul>${r.packages[t.id].palette
        .map((p) => `<li><span class="chip" style="--c:${p.hex}"></span>${esc(p.name)}</li>`)
        .join('')}</ul>
    </div>`
    )
    .join('');

  const others = rooms.filter((o) => o.id !== r.id);

  return {
    path: `/collections/${r.id}/`,
    title: `${r.name} renovation collections`,
    description: `${r.name} renovations in Winnipeg in three collections: Essential, Select and Signature. Compare what is included in each.`,
    body: `
${pageHero({
  title: r.name,
  lede: esc(r.intro),
  img: r.photo,
  alt: r.photoAlt,
  crumb: '<p class="crumb"><a href="/collections/">Collections</a></p>',
  extra: `<p class="hero-note">${esc(r.goodFor)}</p>`,
})}

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2 class="display">Compare the collections</h2>
      <span class="ruler" aria-hidden="true"></span>
    </div>
    <div class="tier-switch" role="tablist" aria-label="Show collection" hidden>
      ${tiers.map((t, i) => `<button type="button" role="tab" data-show="${t.id}" aria-selected="${i === 0}">${t.name}</button>`).join('')}
    </div>
    <div class="compare-wrap" data-active="essential">
      <table class="compare">
        <caption class="visually-hidden">What each ${r.name.toLowerCase()} collection includes</caption>
        <thead><tr><td></td>${headCells}</tr></thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>
    <div class="palettes" data-active="essential">${paletteNames}</div>
    <p class="matrix-note">Palettes and inclusions are illustrative while collections are finalised with our design partner. Final selections may change.</p>
  </div>
</section>

<section class="section section-concrete">
  <div class="wrap split">
    <div>
      <h2 class="display">What affects your final price</h2>
      <span class="ruler" aria-hidden="true"></span>
      <ul class="check-list">
        <li>The size of the room</li>
        <li>What we find behind walls and under floors</li>
        <li>Plumbing or electrical changes beyond the package</li>
        <li>Any personal upgrades you add</li>
      </ul>
    </div>
    <div class="callout">
      <h2>Start with a ${r.name.toLowerCase()} collection</h2>
      <p>Tell us which collection interests you. We will follow up with final selections, pricing and next steps.</p>
      <a class="btn btn-primary" href="/get-started/?room=${r.id}">Get started with a ${r.name.toLowerCase()}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2 class="display">Other rooms</h2>
      <span class="ruler" aria-hidden="true"></span>
    </div>
    <div class="room-cards room-cards-2">
      ${others
        .map(
          (o) => `<a class="room-card" href="/collections/${o.id}/">${photo(o.photo, o.photoAlt)}<div class="room-card-body"><h3>${o.name}</h3><p>${esc(o.goodFor)}</p></div></a>`
        )
        .join('')}
    </div>
  </div>
</section>`,
  };
}

export default function () {
  return [overview(), ...rooms.map(roomPage)];
}
