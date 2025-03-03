
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ggc/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5002, hash: '979153b3006ef736018d80ea94f15e2359cd23b045dfd9856ccd559d5d4df477', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'b129ef739130f2fd518837cb02b5bb8573bffa8b7173602cbf11f78f20344a37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-INVQDECK.css': {size: 232216, hash: 'xUkkk9T4YDk', text: () => import('./assets-chunks/styles-INVQDECK_css.mjs').then(m => m.default)}
  },
};
