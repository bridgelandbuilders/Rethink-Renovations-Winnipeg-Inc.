import { photo, pageHero } from '../layout.mjs';

export const steps = [
  {
    title: 'Choose a room and collection',
    short: 'Compare Essential, Select and Signature and pick a starting point.',
    long: 'Browse the collections online and compare what each one includes. You do not need to decide everything now. A starting point is enough.',
    img: 'blueprints',
    alt: 'Floor plans, wood samples and colour swatches on a table',
  },
  {
    title: 'Site visit and measure',
    short: 'We visit, measure and confirm the package fits your space.',
    long: 'We visit your home, measure the room and check the conditions behind the walls and under the floor that affect the work. If your space needs something the package does not cover, we tell you before you commit.',
    img: 'site-visit',
    alt: 'Renovation team reviewing plans with a homeowner on site',
  },
  {
    title: 'Confirm selections and your quote',
    short: 'Choose from coordinated options and receive a written quote.',
    long: 'Choose your finishes from the options within your collection. Each set is designed to work together. You receive a written quote and scope based on the package and your measurements.',
    img: 'selections',
    alt: 'Couple comparing backsplash tile in their kitchen',
  },
  {
    title: 'Build',
    short: 'Our team renovates to a schedule set before work begins.',
    long: 'Because the scope is defined up front, materials can be ordered early and the schedule set before demolition. You get regular updates while the work is underway.',
    img: 'build-cabinets',
    alt: 'Installer levelling a new kitchen cabinet',
  },
  {
    title: 'Walkthrough and handover',
    short: 'We walk through the finished room with you.',
    long: 'When the work is complete, we walk through the room together, address anything that needs attention and hand over care information for your new finishes.',
    img: 'handover',
    alt: 'Homeowner and contractor shaking hands beside a hard hat',
  },
];

export default function () {
  return {
    path: '/how-it-works/',
    title: 'How it works',
    description:
      'How a Rethink Renovations package works, from choosing a collection to the final walkthrough of your Winnipeg bathroom, kitchen or basement.',
    body: `
${pageHero({
  title: 'How it works',
  lede: 'A renovation built from a defined package has fewer surprises. Here is what happens from first click to finished room.',
  img: 'site-scaffold',
  alt: 'Site supervisor reviewing plans in front of scaffolding',
})}

<section class="section">
  <div class="wrap">
    <ol class="timeline">
      ${steps
        .map(
          (s, i) => `<li class="timeline-step">
        <span class="timeline-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="timeline-copy"><h2>${s.title}</h2><p>${s.long}</p></div>
        <figure class="timeline-media">${photo(s.img, s.alt)}</figure>
      </li>`
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="section section-concrete">
  <div class="wrap split">
    <div>
      <h2 class="display">When you need more than a package</h2>
      <span class="ruler" aria-hidden="true"></span>
      <p>Some projects need custom design: moving walls, a whole-home refresh or a room we do not offer yet. We can introduce you to our design partner for work beyond a standard package.</p>
    </div>
    <div class="callout">
      <h2>Questions about your space?</h2>
      <p>Tell us about your home and we will let you know which collection is the best fit.</p>
      <a class="btn btn-primary" href="/get-started/">Get started</a>
    </div>
  </div>
</section>`,
  };
}
