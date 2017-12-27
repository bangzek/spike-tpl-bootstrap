const optimize = require('spike-optimize')

module.exports = {
  devtool: false,
  afterSpikePlugins: [...optimize({
    scopeHosting: true,
    aggressiveSplitting: false,
    minify: true
  })]
}
