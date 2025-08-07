
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
    'index.csr.html': {size: 16569, hash: '5027e699268c4719f2dda5614697c0c2667fed79e5a74b6da59037ead2758a90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 16971, hash: '6012b1160786b6ab7a3ea737d68121316e7b07e070d0174624b8e3ceeca53399', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52613, hash: '0c4991a989a53816cf40d9ddeea705729fa6325687408cd28309dc1e211cf4a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 44866, hash: '8b38c5c5d467f18f1938a8d1d4eb829f2ad911746cc12ea91e59520378c6e8c1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'technology/index.html': {size: 38220, hash: '7c2682dc3e0fd6bf8d53fb2bf6ca995a51ba7c2b215ef24b21cc91ba4761031b', text: () => import('./assets-chunks/technology_index_html.mjs').then(m => m.default)},
    'market/index.html': {size: 48891, hash: 'cc216dc4ff17042818b61c4fba60d7f9776c948db46a82ebf8876af7296bd777', text: () => import('./assets-chunks/market_index_html.mjs').then(m => m.default)},
    'styles-LPMAKFVM.css': {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/styles-LPMAKFVM_css.mjs').then(m => m.default)}
  },
};
