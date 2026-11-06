export default function () {
  return {
    path: '/404',
    title: 'Page not found',
    description: 'This page could not be found.',
    body: `
<section class="page-hero blueprint page-hero-solo">
  <div class="wrap">
    <h1>This page is not here</h1>
    <p class="lede">The link may be out of date. Start from the collections or the home page.</p>
    <div class="actions">
      <a class="btn btn-primary" href="/collections/">See the collections</a>
      <a class="btn btn-ghost" href="/">Go to the home page</a>
    </div>
  </div>
</section>`,
  };
}
