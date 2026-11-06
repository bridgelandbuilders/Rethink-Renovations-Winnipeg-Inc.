// Original line drawings used on the site.
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
