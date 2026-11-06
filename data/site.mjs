// Site-wide settings. Fill in the blanks before launch — see README.md.

export const site = {
  name: 'Rethink Renovations',
  legalName: 'Rethink Renovations Winnipeg Inc.',
  tagline: 'Renovation should be easier.',
  city: 'Winnipeg',
  region: 'Manitoba',

  // Full domain without trailing slash, e.g. 'https://rethinkrenovations.ca'.
  // When set, canonical links, Open Graph URLs and sitemap.xml are generated.
  siteUrl: '',

  // Public contact details. Leave blank to hide them from the site.
  email: '',
  phone: '',

  // Form backend for the Get Started form (e.g. a Formspree endpoint:
  // 'https://formspree.io/f/xxxxxxx'). Until it is set, the form opens the
  // visitor's email app addressed to `email` above.
  formEndpoint: '',

  // Review/staging copy: hides the site from search engines and shows a
  // "design preview" message on the form. Set to false for the live site.
  staging: true,

  // Shown site-wide while collections are being finalised. Set to '' at launch.
  previewNotice:
    'Our first collections are being finalised with our Founding Design Partner. Join the early list to see final selections and pricing first.',
};

export const nav = [
  { href: '/collections/', label: 'Collections' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/design-standards/', label: 'Design standards' },
  { href: '/about/', label: 'About' },
];
