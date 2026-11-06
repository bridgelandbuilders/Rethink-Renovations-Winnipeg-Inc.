// Every package on the site comes from this file.
// Edit inclusions, palettes and prices here, then run `npm run build`.
//
// price: leave null to show "Pricing at launch". Use a number (CAD) to show
// "From $X" — e.g. price: 18500.

export const tiers = [
  {
    id: 'essential',
    name: 'Essential',
    summary: 'Durable, well-chosen finishes that keep the project simple and the budget firm.',
  },
  {
    id: 'select',
    name: 'Select',
    summary: 'Upgraded materials and details where you notice them every day.',
  },
  {
    id: 'signature',
    name: 'Signature',
    summary: 'Premium finishes and feature details for a room that feels custom.',
  },
];

export const rooms = [
  {
    id: 'bathroom',
    photo: 'bathroom',
    photoAlt: 'Bright bathroom with a freestanding tub, marble-look wall and glass shower',
    name: 'Bathroom',
    plural: 'Bathrooms',
    intro:
      'A complete bathroom renovation, from demolition to final caulk line, with every finish chosen to work together.',
    goodFor: 'Main bathrooms, ensuites and powder rooms in most Winnipeg homes.',
    categories: [
      'Layout',
      'Shower or tub',
      'Wall tile',
      'Flooring',
      'Vanity and top',
      'Fixtures and hardware',
      'Lighting and ventilation',
      'Mirror and accessories',
    ],
    packages: {
      essential: {
        price: null,
        palette: [
          { name: 'Matte white tile', hex: '#f1f0ec' },
          { name: 'Warm grey grout', hex: '#b9b5ad' },
          { name: 'Oak-look vanity', hex: '#c4a27c' },
          { name: 'Polished chrome', hex: '#cfd4d8' },
          { name: 'Charcoal floor', hex: '#4a4c4f' },
        ],
        includes: [
          'Keeps your existing layout and plumbing locations',
          'Tub with tiled surround, or shower base with tiled walls',
          'Large-format ceramic tile in a curated colour set',
          'Porcelain floor tile',
          'Ready-made vanity with integrated top',
          'Chrome fixture set',
          'New vanity light and quiet exhaust fan',
          'Framed mirror, towel bar and toilet roll holder',
        ],
      },
      select: {
        price: null,
        palette: [
          { name: 'Soft white zellige-look', hex: '#ebe7df' },
          { name: 'Greige porcelain', hex: '#a9a196' },
          { name: 'Walnut vanity', hex: '#7a5638' },
          { name: 'Brushed nickel', hex: '#a7a59f' },
          { name: 'Slate accent', hex: '#3e4a55' },
        ],
        includes: [
          'Existing layout with minor changes, such as a wider shower',
          'Tiled shower with niche and glass panel',
          'Porcelain wall tile with a feature wall',
          'Large-format porcelain floor tile',
          'Furniture-style vanity with quartz top',
          'Brushed fixture set with pressure-balance valve',
          'Layered lighting and humidity-sensing fan',
          'Recessed medicine cabinet or backlit mirror',
        ],
      },
      signature: {
        price: null,
        palette: [
          { name: 'Marble-look porcelain', hex: '#e9e6e1' },
          { name: 'Deep green feature tile', hex: '#2f4a42' },
          { name: 'Rift oak vanity', hex: '#b08b62' },
          { name: 'Brushed brass', hex: '#b8955a' },
          { name: 'Ink floor', hex: '#1f2a33' },
        ],
        includes: [
          'Layout changes reviewed for your space',
          'Curbless walk-in shower with linear drain and frameless glass',
          'Premium tile with a designed feature',
          'Heated floor under large-format porcelain',
          'Custom or wall-hung vanity with quartz top',
          'Premium fixture set, thermostatic valve and handheld shower',
          'Designed lighting plan, including a dimmable vanity light',
          'Backlit mirror and coordinated accessories',
        ],
      },
    },
  },
  {
    id: 'kitchen',
    photo: 'kitchen',
    photoAlt: 'White kitchen with a large island, pendant lights and wood flooring',
    name: 'Kitchen',
    plural: 'Kitchens',
    intro:
      'A kitchen renovation built around how you cook and gather, with cabinets, counters and lighting selected as one system.',
    goodFor: 'Galley, L-shaped and U-shaped kitchens, with or without an island.',
    categories: [
      'Layout',
      'Cabinets',
      'Countertops',
      'Backsplash',
      'Sink and faucet',
      'Hardware',
      'Lighting',
      'Flooring',
    ],
    packages: {
      essential: {
        price: null,
        palette: [
          { name: 'White shaker cabinet', hex: '#f3f2ee' },
          { name: 'Grey-veined laminate', hex: '#d6d3cd' },
          { name: 'White subway tile', hex: '#f6f5f1' },
          { name: 'Matte black pull', hex: '#26282b' },
          { name: 'Natural oak-look floor', hex: '#b58f66' },
        ],
        includes: [
          'Keeps your existing layout',
          'Shaker-style cabinets in a choice of curated colours',
          'Durable laminate countertops',
          'Ceramic subway tile backsplash',
          'Stainless undermount-style sink and pull-down faucet',
          'Coordinated pulls and knobs',
          'LED ceiling lights',
          'Luxury vinyl plank flooring',
        ],
      },
      select: {
        price: null,
        palette: [
          { name: 'Sage cabinet', hex: '#8f9c8a' },
          { name: 'White quartz', hex: '#eeece8' },
          { name: 'Handmade-look tile', hex: '#dcd6cb' },
          { name: 'Brushed nickel', hex: '#a7a59f' },
          { name: 'Hickory-look floor', hex: '#94704f' },
        ],
        includes: [
          'Existing layout with improvements, such as a new island or pantry wall',
          'Shaker or slab cabinets with soft-close drawers and organisers',
          'Quartz countertops',
          'Porcelain or handmade-look backsplash to the underside of uppers',
          'Undermount sink and upgraded faucet',
          'Designer hardware',
          'Under-cabinet lighting plus pot lights',
          'Wide-plank luxury vinyl or laminate flooring',
        ],
      },
      signature: {
        price: null,
        palette: [
          { name: 'Navy cabinet', hex: '#22344a' },
          { name: 'Rift oak island', hex: '#b08b62' },
          { name: 'Calacatta-look quartz', hex: '#efedea' },
          { name: 'Brushed brass', hex: '#b8955a' },
          { name: 'Engineered oak floor', hex: '#a17b55' },
        ],
        includes: [
          'Layout changes reviewed for your space',
          'Two-tone cabinetry to the ceiling with full organisers',
          'Premium quartz with waterfall or mitred edge option',
          'Full-height slab or feature tile backsplash',
          'Workstation sink and premium faucet',
          'Premium hardware in a coordinated finish',
          'Designed lighting with pendants and dimmers',
          'Engineered hardwood flooring',
        ],
      },
    },
  },
  {
    id: 'basement',
    photo: 'basement-flooring',
    photoAlt: 'Installer fitting new plank flooring',
    name: 'Basement',
    plural: 'Basements',
    intro:
      'A finished basement that adds real living space, with insulation, lighting and finishes planned for a Manitoba basement.',
    goodFor: 'Family rooms, guest suites and home offices in unfinished or dated basements.',
    categories: [
      'Layout',
      'Walls and insulation',
      'Ceiling',
      'Flooring',
      'Lighting',
      'Doors and trim',
      'Feature',
      'Paint',
    ],
    packages: {
      essential: {
        price: null,
        palette: [
          { name: 'Soft white walls', hex: '#efeee9' },
          { name: 'Light grey vinyl plank', hex: '#b6b2aa' },
          { name: 'White trim', hex: '#f7f7f4' },
          { name: 'Satin nickel', hex: '#b3b1ab' },
          { name: 'Charcoal accent', hex: '#4a4c4f' },
        ],
        includes: [
          'Open-concept living area',
          'Framing, insulation and vapour barrier on exterior walls',
          'Drywall ceiling',
          'Waterproof luxury vinyl plank flooring',
          'LED pot lights',
          'Hollow-core doors and simple trim profile',
          'One feature wall in an accent colour',
          'Two-colour paint scheme',
        ],
      },
      select: {
        price: null,
        palette: [
          { name: 'Warm white walls', hex: '#ece8e0' },
          { name: 'Oak-look plank', hex: '#b08e6a' },
          { name: 'Greige trim', hex: '#c9c2b6' },
          { name: 'Matte black', hex: '#26282b' },
          { name: 'Slate built-in', hex: '#3e4a55' },
        ],
        includes: [
          'Living area plus one room, such as a bedroom or office',
          'Framing, insulation and vapour barrier, with sound insulation between rooms',
          'Drywall ceiling with bulkheads finished cleanly',
          'Waterproof plank with upgraded underlay',
          'Pot lights on dimmers with zoned switching',
          'Solid-core doors and upgraded trim',
          'Built-in media wall or storage nook',
          'Designed colour palette',
        ],
      },
      signature: {
        price: null,
        palette: [
          { name: 'Plaster white', hex: '#e8e4dc' },
          { name: 'Engineered oak', hex: '#a17b55' },
          { name: 'Navy millwork', hex: '#22344a' },
          { name: 'Brushed brass', hex: '#b8955a' },
          { name: 'Stone wet bar top', hex: '#d9d5cf' },
        ],
        includes: [
          'Fully planned layout, which can include a guest suite',
          'Framing, insulation, vapour barrier and sound insulation throughout',
          'Drywall ceiling with designed lighting layout',
          'Premium engineered or luxury plank flooring',
          'Layered lighting with pot lights, sconces and dimmers',
          'Solid-core doors and premium trim package',
          'Wet bar or custom built-ins',
          'Designed colour palette with feature finishes',
        ],
      },
    },
  },
];

export const comingNext = [
  { name: 'Laundry rooms', photo: 'laundry', alt: 'Laundry room with front-load washer and dryer and open shelving' },
  { name: 'Mudrooms', photo: 'mudroom', alt: 'Mudroom with built-in bench, hooks and storage baskets' },
  { name: 'Main-floor renovations', photo: 'main-floor', alt: 'Bright home entrance with tiled walkway' },
  { name: 'Home offices', photo: 'home-office', alt: 'Home office with a wood desk and open shelving' },
  { name: 'Accessibility packages', photo: null, alt: '' },
  { name: 'Aging-in-place packages', photo: 'aging-in-place', alt: 'Older couple at a kitchen table with a laptop' },
];
