exports.configure = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'production',
    message: 'Would you like a production config file?',
    type: 'confirm',
    default: true
  }
]

exports.after = (util, config) => {
  if (!config.production) util.target.remove('app.production.js')
}
