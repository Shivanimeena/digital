
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/market"
  },
  {
    "renderMode": 2,
    "route": "/technology"
  },
  {
    "renderMode": 2,
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16565, hash: 'fc2bd52b1ba9aa38b79d1c32fbcceda9912444d0201022f2bca860f2ef008f2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16968, hash: '90edfbe1f312236837bb406e9e1a6977a517a8603ae9f16c3c9088621e815cee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'technology/index.html': {size: 38216, hash: '29224aa2e4dc8744864e6361c818abf40680d32419ab19c2e208af00e8b8102f', text: () => import('./assets-chunks/technology_index_html.mjs').then(m => m.default)},
    'index.html': {size: 52609, hash: '60ec7b947ef97a76692610b2b8a2ed0648bf2b3ffe5b3b19a9b94e035c770904', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 44862, hash: 'd8edb24c7f5dac8bef9176fa862982fece477a886c2e444f360c2621afef8c6e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'market/index.html': {size: 48887, hash: '38e6208f6777c1c519d4f67a965e554f6e9bcb7b02fbf73a8772f954a9b15db6', text: () => import('./assets-chunks/market_index_html.mjs').then(m => m.default)},
    'styles-LPMAKFVM.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/styles-LPMAKFVM_css.mjs').then(m => m.default)}
  },
};
