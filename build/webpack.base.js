const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    // main: './src/index.js'
    main: './src/foo.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
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
    }, {
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // async-只对异步引入的库进行代码分割 all-同步和异步引入的库都进行分割 initial对同步引入的库做代码分割
      minSize: 30000, // 引入的库大于 30kb，才会做代码分割 
      // // minRemainingSize: 0,
      // maxSize: 50000, // 如果打包lodash 1mb, 那么打包时会尝试对着1mb的code进行二次拆分。但是一般lodash这样的库是无法再次进行拆分的，所以即便配置了maxSize，打包出来的也还是一个1mb的库。因此一般不需要配置maxSize
      minChunks: 1, // 当一个模块被引用了至少多少次时，才使用代码分割 
      maxAsyncRequests: 6, // 同时加载的模块数最多是几个。 如果引入了10个类库，那么网页打开同时要加载10个资源。那么在打包前5个库会生成5个js文件，如果超过了5个，就不会再做代码分割了。
      maxInitialRequests: 4, // 入口文件做代码分割，最多分割出4个js文件，超出的不会做代码分割。
      automaticNameDelimiter: '~', // 文件名中间的连接符
      // automaticNameMaxLength: 30,
      // name: false, // 使cacheGroups中的filename有效
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 一个库放在哪个组，是根据priority来决定的。值越大，优先级越高
          // filename: 'vendors.js'
        },
        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          // filename: 'commono.js',
        },
      }
    }
  },
  output: {
    // publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  }
}