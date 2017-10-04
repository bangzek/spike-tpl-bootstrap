const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const htmlStandards = require('reshape-standard')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const env = process.env.SPIKE_ENV

function css (options) {
  const plugins = [
    autoprefixer(options.autoprefixer)
  ]

  // add cssnano if minify config present
  if (options.minify) plugins.push(require('cssnano')(options.cssnano))

  return {plugins}
}

function locals (ctx) {
  return {
    pageId: pageId(ctx),
    foo: 'bar'
  }
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
    parser: sugarml,
    locals: locals,
    minify: env === 'production'
  }),
  postcss: css({
    minify: env === 'production'
  }),
  babel: jsStandards()
}
