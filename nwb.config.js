module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'GitHubFeed',
    jsNext: true,
    umd: true
  }
}
