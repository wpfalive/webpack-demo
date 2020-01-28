const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  // cheap 不要包含列信息 只需要行信息，同时不要对loader里面的代码生成source-map
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    // hotOnly: true
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // modules: true, // 用于 import style from 'index.scss'这样的模块化css
          }
        },
        'sass-loader',
        'postcss-loader',
      ],
    }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // optimization: {
  //   usedExports: true
  // },
}

module.exports = merge(baseConfig, devConfig)
