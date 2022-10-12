const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: path.join(__dirname, 'src', 'app.tsx'),
  devServer: {
    hot: true,
    open: true
  },
  // 并行压缩
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 2 // number | boolean
      })
    ]
  },
  // 最小化监听
  watchOptions: {
    ignored: /node_modules/
  },
  // 按需编译
  experiments: {
    lazyCompilation: true
  },
  // cache: {
  //   type: 'filesystem'
  // },
  // 跳过无需编译的包
  module: {
    noParse: /lodash|react|antd/
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="app" />
  </body>
</html>
    `
    }),
    new ForkTsCheckerWebpackPlugin(),
    // eslint plugin
    new ESLintPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        // type 属性适用于 Webpack5，旧版本可使用 file-loader
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              // 只在生产环境开启
              disable: process.env.NODE_ENV === 'development',
              // jpeg 压缩配置
              mozjpeg: {
                quality: 80
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024
            }
          }
        ]
      },
      // {
      //   test: /\.svg$/i,
      //   use: ['raw-loader']
      // },
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic'
              }
            ],
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic'
              }
            ]
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 添加 autoprefixer 插件
                plugins: [require('autoprefixer')]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 添加 autoprefixer 插件
                plugins: [require('autoprefixer')]
              }
            }
          }
        ]
      }
    ]
  }
}

// 环境配置
const envConfig = {
  development: {
    devtool: 'source-map'
  },
  production: {
    devtool: 'eval'
  }
}

module.exports = smp.wrap(function (e, v) {
  return {
    ...envConfig[v.mode],
    ...config
  }
})
