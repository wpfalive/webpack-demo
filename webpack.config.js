const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 20480,
        }
      }
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        // 借助file-loader, 把这些文件从src移动到dist目录下
        loader: 'file-loader',
      }
    },{
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
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      dry: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '**'],
      verbose: true,
    }),
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
  }
}