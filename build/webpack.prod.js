const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css'
  })],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      }]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  // cheap 不要包含列信息 只需要行信息，同时不要对loader里面的代码生成source-map
  devtool: 'cheap-module-source-map',
}

module.exports = merge(baseConfig, prodConfig)