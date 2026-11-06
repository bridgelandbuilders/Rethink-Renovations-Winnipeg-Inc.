import { rooms, tiers } from '../../data/collections.mjs';
import { swatches, photo, pageHero } from '../layout.mjs';

export default function () {
  return {
    path: '/design-standards/',
    title: 'Design standards',
    description:
      'How Rethink Renovations designs its bathroom, kitchen and basement collections with a professional interior designer.',
    body: `
${pageHero({
  title: 'Design standards',
  lede: 'A package is only as good as the decisions behind it. Ours are made by a professional designer, once, and carefully, so every renovation starts from a result that works.',
  img: 'designer',
  alt: 'Designer reviewing drawings at a work table',
})}

<section class="section">
  <div class="wrap split">
    <div>
      <h2 class="display">What our standards cover</h2>
      <span class="ruler" aria-hidden="true"></span>
      <dl class="def-list">
        <div><dt>Material combinations</dt><dd>Tile, counters, cabinetry and fixtures chosen to work together.</dd></div>
        <div><dt>Colour palettes</dt><dd>Coordinated sets that look current now and age well.</dd></div>
        <div><dt>Collection differences</dt><dd>Clear, meaningful steps between Essential, Select and Signature.</dd></div>
        <div><dt>Buildability</dt><dd>Details reviewed for how they install and how they hold up.</dd></div>
      </dl>
    </div>
    <div class="spec-sheet" aria-label="All nine collection palettes">
      <p class="spec-sheet-title">Collection palettes</p>
      <div class="standards-board standards-board-tall">
        ${rooms
          .map((r) =>
            tiers.map((t) => `<div><span>${r.name} ${t.name}</span>${swatches(r.packages[t.id].palette, 'swatches')}</div>`).join('')
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

<section class="section blueprint" id="design-partner">
  <div class="wrap partner">
    <div class="partner-photo" aria-hidden="true"><img src="/assets/img/logo-light.png" alt="" width="164" height="157"></div>
    <div>
      <h2 class="display">Our Founding Design Partner</h2>
      <span class="ruler ruler-light" aria-hidden="true"></span>
      <p>We are partnering with a Winnipeg interior designer to set the design language for our first collections. Their profile, design philosophy and portfolio will appear here when the collections launch.</p>
      <p class="muted-light">Are you a designer interested in this role? <a href="/get-started/?topic=designer">Get in touch</a>.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split split-media">
    <figure class="framed framed-left">${photo('blueprints', 'Floor plans with material and colour samples')}</figure>
    <div>
      <h2 class="display">Need design beyond a package?</h2>
      <span class="ruler" aria-hidden="true"></span>
      <p class="section-intro">For custom projects, whole-home design, colour consultation or furniture selection, we can introduce you to our design partner.</p>
      <a class="btn btn-primary" href="/get-started/">Tell us about your project</a>
    </div>
  </div>
</section>`,
  };
}
