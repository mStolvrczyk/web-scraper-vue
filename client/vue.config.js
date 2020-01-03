const webpack = require('webpack')
const path = require('path')

function getApiUrl () {
  switch (process.env.NODE_ENV) {
    case 'production': {
      return './api'
    }
    default: {
      return './api'
    }
  }
}

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ]
}

module.exports = {
  configureWebpack: {
    ...require('./webpack.config'),
    plugins: [
      new webpack.DefinePlugin({
        'process.env.API_BASE_URL': JSON.stringify(getApiUrl())
      })
    ]
  },
  outputDir: path.resolve(__dirname, 'dist', 'client')
}
