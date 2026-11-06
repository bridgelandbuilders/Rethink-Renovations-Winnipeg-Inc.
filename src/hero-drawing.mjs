// Original hero illustration: a kitchen elevation drawn like a construction
// drawing, coloured with each collection's palette from data/collections.mjs.
import { rooms, tiers } from '../data/collections.mjs';
import { esc } from './layout.mjs';

const kitchen = rooms.find((r) => r.id === 'kitchen');

// Which palette entry fills which part of the drawing, per collection.
const ROLE_MAP = {
  essential: { upper: 0, lower: 0, counter: 1, splash: 2, hw: 3, floor: 4 },
  select: { upper: 0, lower: 0, counter: 1, splash: 2, hw: 3, floor: 4 },
  signature: { upper: 1, lower: 0, counter: 2, splash: 2, hw: 3, floor: 4 },
};

const KEY = [
  { n: 1, label: 'Cabinets', roles: ['lower', 'upper'], chip: 'lower' },
  { n: 2, label: 'Countertop', roles: ['counter'], chip: 'counter' },
  { n: 3, label: 'Backsplash', roles: ['splash'], chip: 'splash' },
  { n: 4, label: 'Hardware', roles: ['hw'], chip: 'hw' },
  { n: 5, label: 'Flooring', roles: ['floor'], chip: 'floor' },
];

const pal = (tier, role) => kitchen.packages[tier].palette[ROLE_MAP[tier][role]];

function tierStyles() {
  return tiers
    .map((t) => {
      const vars = Object.keys(ROLE_MAP[t.id]).map((role) => `--${role}:${pal(t.id, role).hex}`).join(';');
      return `.drawing[data-tier="${t.id}"]{${vars}}`;
    })
    .join('');
}

const shaker = (x, y, w, h, inset = 7) =>
  `<rect class="ln" x="${x}" y="${y}" width="${w}" height="${h}"/><rect class="ln ln-thin" x="${x + inset}" y="${y + inset}" width="${w - inset * 2}" height="${h - inset * 2}"/>`;
const pullV = (x, y) => `<rect class="hw" x="${x}" y="${y}" width="3" height="22" rx="1.5"/>`;
const pullH = (x, y) => `<rect class="hw" x="${x}" y="${y}" width="24" height="3" rx="1.5"/>`;

function svg() {
  // Floor planks
  let planks = '';
  for (let row = 0; row < 2; row++) {
    const y = 428 + row * 12;
    for (let x = 40 + (row ? 23 : 0); x < 600; x += 46) planks += `<line class="joint" x1="${x}" y1="${y}" x2="${x}" y2="${y + 12}"/>`;
  }

  // Lower cabinet run: x 60–580, y 304–418
  const lower = [
    shaker(60, 304, 140, 30, 5), pullH(118, 317),
    shaker(60, 334, 70, 84), pullV(120, 348), shaker(130, 334, 70, 84), pullV(137, 348),
    shaker(200, 304, 55, 36, 5), pullH(216, 320), shaker(200, 340, 55, 39, 5), pullH(216, 357), shaker(200, 379, 55, 39, 5), pullH(216, 396),
    shaker(255, 304, 65, 114), pullV(310, 318), shaker(320, 304, 65, 114), pullV(327, 318),
    `<rect class="ln" x="385" y="304" width="60" height="114"/><rect class="hw" x="395" y="312" width="40" height="3" rx="1.5"/>`,
    shaker(445, 304, 135, 36, 5), pullH(500, 320), shaker(445, 340, 135, 39, 5), pullH(500, 357), shaker(445, 379, 135, 39, 5), pullH(500, 396),
  ].join('');

  const upper = [
    shaker(70, 80, 85, 125), pullV(146, 178), shaker(155, 80, 85, 125), pullV(161, 178),
    shaker(400, 80, 85, 125), pullV(476, 178), shaker(485, 80, 85, 125), pullV(491, 178),
  ].join('');

  const keynote = (n, x, y) =>
    `<g class="keynote"><circle cx="${x}" cy="${y}" r="13"/><text x="${x}" y="${y + 5}">${n}</text></g>`;

  return `<svg class="drawing-svg" viewBox="0 0 640 480" role="img" aria-labelledby="drawing-title">
  <title id="drawing-title">Drawing of a kitchen wall: upper and lower cabinets, countertop, tile backsplash, window above the sink and plank flooring</title>
  <defs>
    <pattern id="subway" width="24" height="12" patternUnits="userSpaceOnUse">
      <path d="M0 11.5H24M12 0V11.5" class="joint"/><path d="M0 0V0" />
    </pattern>
    <pattern id="subway2" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M0 11.5H24M0 23.5H24M12 0V11.5M0 12V23.5M24 12V23.5" class="joint"/>
    </pattern>
  </defs>

  <line class="ceiling" x1="30" y1="30" x2="610" y2="30"/>
  <rect class="wall" x="40" y="30" width="560" height="398"/>

  <rect class="m-splash" x="60" y="205" width="520" height="87"/>
  <rect x="60" y="205" width="520" height="87" fill="url(#subway2)"/>

  <rect class="ln glass" x="255" y="85" width="130" height="120"/>
  <rect class="ln ln-thin glass-pane" x="262" y="92" width="55" height="106"/>
  <rect class="ln ln-thin glass-pane" x="323" y="92" width="55" height="106"/>
  <path class="glare" d="M272 180 L300 104 M284 186 L306 126 M333 180 L361 104"/>
  <rect class="ln sill" x="248" y="205" width="144" height="6"/>

  <g class="m-upper">${upper}</g>
  <path class="faucet" d="M313 292 V262 Q313 248 327 248 Q339 248 339 260 V266"/>
  <rect class="ln m-counter" x="50" y="292" width="540" height="12"/>
  <g class="m-lower">${lower}</g>
  <rect class="kick" x="66" y="418" width="508" height="10"/>
  <rect class="ln m-floor" x="40" y="428" width="560" height="24"/>
  ${planks}

  <g class="dim">
    <path d="M60 58 H580 M60 50 V66 M580 50 V66"/>
    <text x="320" y="50">10'-0"</text>
    <path d="M22 30 V428 M14 30 H30 M14 428 H30"/>
    <text x="0" y="0" transform="translate(14 229) rotate(-90)">8'-0"</text>
    <path d="M616 292 V428 M608 292 H624 M608 428 H624"/>
    <text x="0" y="0" transform="translate(632 360) rotate(-90)">36"</text>
  </g>

  ${keynote(1, 112, 142)}${keynote(2, 470, 298)}${keynote(3, 150, 250)}${keynote(4, 512, 358)}${keynote(5, 560, 440)}
</svg>`;
}

function keyList() {
  return KEY.map((k) => {
    const labels = tiers
      .map((t) => {
        const names = [...new Set(k.roles.map((r) => pal(t.id, r).name))].join(' with ');
        return `<span class="drawing-label" data-t="${t.id}">${esc(names)}</span>`;
      })
      .join('');
    return `<li><span class="drawing-n" aria-hidden="true">${k.n}</span><span class="drawing-chip" style="background:var(--${k.chip})"></span><span class="drawing-role">${k.label}</span>${labels}</li>`;
  }).join('');
}

export function heroDrawing() {
  return `
<figure class="drawing" data-tier="essential">
  <style>${tierStyles()}</style>
  <figcaption class="drawing-head">
    <span>Kitchen elevation</span>
    <span class="drawing-shown" aria-live="polite">${tiers
      .map((t) => `<span class="drawing-label" data-t="${t.id}">${t.name} collection</span>`)
      .join('')}</span>
  </figcaption>
  ${svg()}
  <div class="drawing-tabs" role="group" aria-label="Show the kitchen in a collection">
    ${tiers.map((t, i) => `<button type="button" data-tier-btn="${t.id}" aria-pressed="${i === 0}">${t.name}</button>`).join('')}
  </div>
  <ol class="drawing-key">${keyList()}</ol>
</figure>`;
}

// Original floor-plan drawing for the Accessibility tile.
export function accessibilityDrawing() {
  return `<svg class="plan-svg" viewBox="0 0 300 200" role="img" aria-labelledby="a11y-plan-title">
  <title id="a11y-plan-title">Floor plan of an accessible bathroom with a wheelchair turning circle, grab bars and a curbless shower</title>
  <path class="plan-wall" d="M30 14 H270 V150 H128 M84 150 H30 Z"/>
  <path class="plan-door" d="M84 150 A44 44 0 0 1 128 106 M128 106 V150"/>
  <rect class="plan-fix" x="42" y="22" width="26" height="18" rx="2"/>
  <ellipse class="plan-fix" cx="55" cy="54" rx="13" ry="16"/>
  <path class="plan-bar" d="M76 24 V64 M34 76 H70"/>
  <rect class="plan-fix" x="110" y="20" width="56" height="22" rx="2"/>
  <ellipse class="plan-fix" cx="138" cy="31" rx="12" ry="6"/>
  <rect class="plan-shower" x="196" y="18" width="70" height="128"/>
  <path class="plan-drain" d="M204 30 V134"/>
  <path class="plan-bar" d="M262 40 V110 M214 22 H252"/>
  <rect class="plan-fix" x="244" y="118" width="18" height="22" rx="2"/>
  <circle class="plan-turn" cx="132" cy="92" r="46"/>
  <path class="plan-dim" d="M86 92 H178 M86 87 V97 M178 87 V97"/>
  <text class="plan-text" x="132" y="86">5'-0" turning</text>
  <text class="plan-text plan-text-sm" x="231" y="160">Curbless shower</text>
</svg>`;
}
