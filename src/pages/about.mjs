import { comingNext } from '../../data/collections.mjs';
import { esc, photo, pageHero } from '../layout.mjs';
import { accessibilityDrawing } from '../hero-drawing.mjs';

export default function () {
  const tiles = comingNext
    .map((c) =>
      c.photo
        ? `<li class="tile">${photo(c.photo, c.alt)}<span>${esc(c.name)}</span></li>`
        : `<li class="tile tile-plain">${accessibilityDrawing()}<span>${esc(c.name)}</span></li>`
    )
    .join('');

  return {
    path: '/about/',
    title: 'About',
    description:
      'Rethink Renovations Winnipeg Inc. is building a different kind of renovation company: designed packages that make renovating easier to understand, choose, price and complete.',
    body: `
${pageHero({
  title: 'A different kind of renovation company',
  lede: 'Rethink Renovations Winnipeg Inc. treats a renovation less like a blank page and more like a well-designed product.',
  img: 'team',
  alt: 'Renovation crew and homeowner reviewing plans on a job site',
})}

<section class="section">
  <div class="wrap split">
    <div>
      <h2 class="display">Why packages</h2>
      <span class="ruler" aria-hidden="true"></span>
      <p class="section-intro">Most homeowners do not want to make two hundred decisions. They want a room that looks good, works well and costs what they expected.</p>
      <p>So instead of approaching every renovation as a completely custom project, we design collections in advance. Each one is easier to understand, select, price and build.</p>
    </div>
    <div class="callout callout-dark blueprint">
      <h2>What we believe</h2>
      <ul class="check-list check-list-light">
        <li>You should know what is included before work starts.</li>
        <li>Good design should not depend on hiring a designer for every project.</li>
        <li>Design choices should be practical to build.</li>
        <li>A clear scope makes for a calmer renovation.</li>
      </ul>
    </div>
  </div>
</section>

<section class="section section-concrete">
  <div class="wrap">
    <div class="section-head section-head-row">
      <div>
        <h2 class="display">Where we are going</h2>
        <span class="ruler" aria-hidden="true"></span>
      </div>
      <p>Bathrooms, kitchens and basements come first. After that, we plan to add more rooms to the system.</p>
    </div>
    <ul class="tiles">${tiles}</ul>
  </div>
</section>

<section class="cta-band">
  ${photo('plans-handshake', '', { cls: 'cta-bg' })}
  <div class="wrap cta-inner">
    <h2 class="display">Planning a renovation in Winnipeg?</h2>
    <p>Tell us about your project. We will be in touch as collections open.</p>
    <a class="btn btn-bronze" href="/get-started/">Get started</a>
  </div>
</section>`,
  };
}
