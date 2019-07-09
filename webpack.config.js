const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
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
            // modules: true,
          }
        },
        'sass-loader',
        'postcss-loader',
      ],
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
  }
}