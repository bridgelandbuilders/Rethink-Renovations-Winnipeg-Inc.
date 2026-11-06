import { rooms, tiers } from '../../data/collections.mjs';
import { swatches } from '../layout.mjs';

export default function () {
  return {
    path: '/design-standards/',
    title: 'Design standards',
    description:
      'How Rethink Renovations designs its bathroom, kitchen and basement collections with a professional interior designer.',
    body: `
<section class="page-hero">
  <div class="wrap">
    <h1>Design standards</h1>
    <p class="lede">A package is only as good as the decisions behind it. Ours are made by a professional designer, once, and carefully, so every renovation starts from a result that works.</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <h2>What our standards cover</h2>
      <dl class="def-list">
        <div><dt>Material combinations</dt><dd>Tile, counters, cabinetry and fixtures chosen to work together.</dd></div>
        <div><dt>Colour palettes</dt><dd>Coordinated sets that look current now and age well.</dd></div>
        <div><dt>Collection differences</dt><dd>Clear, meaningful steps between Essential, Select and Signature.</dd></div>
        <div><dt>Buildability</dt><dd>Details reviewed for how they install and how they hold up.</dd></div>
      </dl>
    </div>
    <div class="standards-board standards-board-tall" aria-hidden="true">
      ${rooms
        .map((r) =>
          tiers.map((t) => `<div><span>${r.name} ${t.name}</span>${swatches(r.packages[t.id].palette, 'swatches swatches-lg')}</div>`).join('')
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section section-tint" id="design-partner">
  <div class="wrap">
    <div class="partner">
      <div class="partner-photo" aria-hidden="true"><img src="/assets/img/mark.png" alt="" width="128" height="128"></div>
      <div>
        <h2>Our Founding Design Partner</h2>
        <p>We are partnering with a Winnipeg interior designer to set the design language for our first collections. Their profile, design philosophy and portfolio will appear here when the collections launch.</p>
        <p class="muted">Are you a designer interested in this role? <a href="/get-started/?topic=designer">Get in touch</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Need design beyond a package?</h2>
      <p>For custom projects, whole-home design, colour consultation or furniture selection, we can introduce you to our design partner.</p>
    </div>
    <a class="btn btn-primary" href="/get-started/">Tell us about your project</a>
  </div>
</section>`,
  };
}
