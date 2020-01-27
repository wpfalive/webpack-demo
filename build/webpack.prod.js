const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prodConfig = {
  mode: 'production',
  // cheap 不要包含列信息 只需要行信息，同时不要对loader里面的代码生成source-map
  devtool: 'cheap-module-source-map',
}

module.exports = merge(baseConfig, prodConfig)