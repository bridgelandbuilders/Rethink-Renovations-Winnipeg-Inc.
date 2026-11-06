export const steps = [
  {
    title: 'Choose a room and collection',
    short: 'Compare Essential, Select and Signature and pick a starting point.',
    long: 'Browse the collections online and compare what each one includes. You do not need to decide everything now. A starting point is enough.',
  },
  {
    title: 'Site visit and measure',
    short: 'We visit, measure and confirm the package fits your space.',
    long: 'We visit your home, measure the room and check the conditions behind the walls and under the floor that affect the work. If your space needs something the package does not cover, we tell you before you commit.',
  },
  {
    title: 'Confirm selections and your quote',
    short: 'Choose from coordinated options and receive a written quote.',
    long: 'Choose your finishes from the options within your collection. Each set is designed to work together. You receive a written quote and scope based on the package and your measurements.',
  },
  {
    title: 'Build',
    short: 'Our team renovates to a schedule set before work begins.',
    long: 'Because the scope is defined up front, materials can be ordered early and the schedule set before demolition. You get regular updates while the work is underway.',
  },
  {
    title: 'Walkthrough and handover',
    short: 'We walk through the finished room with you.',
    long: 'When the work is complete, we walk through the room together, address anything that needs attention and hand over care information for your new finishes.',
  },
];

export default function () {
  return {
    path: '/how-it-works/',
    title: 'How it works',
    description:
      'How a Rethink Renovations package works, from choosing a collection to the final walkthrough of your Winnipeg bathroom, kitchen or basement.',
    body: `
<section class="page-hero">
  <div class="wrap">
    <h1>How it works</h1>
    <p class="lede">A renovation built from a defined package has fewer surprises. Here is what happens from first click to finished room.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <ol class="steps steps-long">
      ${steps
        .map(
          (s, i) => `<li><span class="step-num">${i + 1}</span><div><h2>${s.title}</h2><p>${s.long}</p></div></li>`
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="section section-tint">
  <div class="wrap split">
    <div>
      <h2>When you need more than a package</h2>
      <p>Some projects need custom design: moving walls, a whole-home refresh or a room we do not offer yet. We can introduce you to our design partner for work beyond a standard package.</p>
    </div>
    <div>
      <h2>Questions about your space?</h2>
      <p>Tell us about your home and we will let you know which collection is the best fit.</p>
      <a class="btn btn-primary" href="/get-started/">Get started</a>
    </div>
  </div>
</section>`,
  };
}
