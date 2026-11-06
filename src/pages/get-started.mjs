import { rooms, tiers } from '../../data/collections.mjs';
import { site } from '../../data/site.mjs';
import { esc, pageHero } from '../layout.mjs';

export default function () {
  return {
    path: '/get-started/',
    title: 'Get started',
    description:
      'Join the Rethink Renovations early list or tell us about your Winnipeg bathroom, kitchen or basement project.',
    body: `
${pageHero({
  title: 'Get started',
  lede: 'Tell us about your project. We will follow up with final selections, pricing and available start dates as collections open.',
  img: 'handover',
  alt: 'Homeowner and contractor shaking hands beside a hard hat',
})}

<section class="section">
  <div class="wrap form-layout">
    <form class="lead-form form-card" method="post" action="${esc(site.formEndpoint)}" data-email="${esc(site.email)}" novalidate>
      <fieldset>
        <legend>Which rooms?</legend>
        <div class="choice-row">
          ${rooms.map((r) => `<label class="choice"><input type="checkbox" name="rooms" value="${r.name}"><span>${r.name}</span></label>`).join('')}
          <label class="choice"><input type="checkbox" name="rooms" value="Something else"><span>Something else</span></label>
        </div>
      </fieldset>

      <div class="field">
        <label for="collection">Collection you are leaning toward</label>
        <select id="collection" name="collection">
          <option value="Not sure yet">Not sure yet</option>
          ${tiers.map((t) => `<option value="${t.name}">${t.name}</option>`).join('')}
        </select>
      </div>

      <div class="field">
        <label for="timing">When would you like to start?</label>
        <select id="timing" name="timing">
          <option value="Just exploring">Just exploring</option>
          <option value="Within 3 months">Within 3 months</option>
          <option value="3 to 6 months">3 to 6 months</option>
          <option value="6 months or more">6 months or more</option>
        </select>
      </div>

      <div class="field-pair">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" name="name" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required>
        </div>
      </div>

      <div class="field-pair">
        <div class="field">
          <label for="phone">Phone <span class="optional">optional</span></label>
          <input id="phone" name="phone" type="tel" autocomplete="tel">
        </div>
        <div class="field">
          <label for="area">Neighbourhood or postal code</label>
          <input id="area" name="area" autocomplete="postal-code">
        </div>
      </div>

      <div class="field">
        <label for="message">Anything we should know? <span class="optional">optional</span></label>
        <textarea id="message" name="message" rows="5"></textarea>
      </div>

      <input type="text" name="_gotcha" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
      <p class="form-status" role="status" aria-live="polite"></p>
      <button class="btn btn-primary" type="submit">Join the early list</button>
    </form>

    <aside class="form-aside">
      <h2>What happens next</h2>
      <ol class="mini-steps">
        <li>We confirm we received your details.</li>
        <li>When your collection opens, we send final selections and pricing.</li>
        <li>If it is a fit, we book a site visit to measure.</li>
      </ol>
      <p class="muted">We only use your details to contact you about your renovation.</p>
    </aside>
  </div>
</section>`,
  };
}
