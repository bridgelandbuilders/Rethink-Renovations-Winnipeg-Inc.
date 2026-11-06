import { comingNext } from '../../data/collections.mjs';
import { esc } from '../layout.mjs';

export default function () {
  return {
    path: '/about/',
    title: 'About',
    description:
      'Rethink Renovations Winnipeg Inc. is building a different kind of renovation company: designed packages that make renovating easier to understand, choose, price and complete.',
    body: `
<section class="page-hero">
  <div class="wrap">
    <h1>A different kind of renovation company</h1>
    <p class="lede">Rethink Renovations Winnipeg Inc. treats a renovation less like a blank page and more like a well-designed product.</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <h2>Why packages</h2>
      <p>Most homeowners do not want to make two hundred decisions. They want a room that looks good, works well and costs what they expected.</p>
      <p>So instead of approaching every renovation as a completely custom project, we design collections in advance. Each one is easier to understand, select, price and build.</p>
    </div>
    <div>
      <h2>What we believe</h2>
      <ul class="plain-list">
        <li>You should know what is included before work starts.</li>
        <li>Good design should not depend on hiring a designer for every project.</li>
        <li>Design choices should be practical to build.</li>
        <li>A clear scope makes for a calmer renovation.</li>
      </ul>
    </div>
  </div>
</section>

<section class="section section-tint">
  <div class="wrap split">
    <div>
      <h2>Where we are going</h2>
      <p>Bathrooms, kitchens and basements come first. After that, we plan to add more rooms to the system.</p>
    </div>
    <ul class="next-list">${comingNext.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>Planning a renovation in Winnipeg?</h2>
    <p>Tell us about your project. We will be in touch as collections open.</p>
    <a class="btn btn-bronze" href="/get-started/">Get started</a>
  </div>
</section>`,
  };
}
