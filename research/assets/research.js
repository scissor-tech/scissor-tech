'use strict';
// The pages remain fully readable and navigable without JavaScript.
// Open data disclosures when directly addressed by a copied anchor.
if (location.hash.startsWith('#figure-data-')) {
  const panel = document.getElementById(location.hash.slice(1));
  if (panel instanceof HTMLDetailsElement) panel.open = true;
}
