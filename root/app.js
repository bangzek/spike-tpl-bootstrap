const htmlStandards = require('reshape-standard')
const calc = require('postcss-calc')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.NODE_ENV

function css (options) {
  const plugins = [
    calc(options.calc),
    autoprefixer(options.autoprefixer)
  ]

  // add cssnano if minify config present
  if (options.minify) plugins.push(require('cssnano')(options.cssnano))

  return {plugins}
}

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.scss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  module: {
    rules: [{
      test: /\.scss/,
      use: [{
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          precision: 6
        }
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),
  postcss: css({
    minify: env === 'production',
    autoprefixer: {
      browsers: [
        //
        // Official browser support policy:
        // https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
        //
        'Chrome >= 45', // Exact version number here is kinda arbitrary
        'Firefox ESR',
        // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
        // NOT the Edge app version shown in Edge's "About" screen.
        // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
        // See also https://github.com/Fyrd/caniuse/issues/1928
        'Edge >= 12',
        'Explorer >= 10',
        // Out of leniency, we prefix these 1 version further back than the official policy.
        'iOS >= 9',
        'Safari >= 9',
        // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
        'Android >= 4.4',
        'Opera >= 30'
      ]
    }
  }),
  babel: jsStandards()
}
