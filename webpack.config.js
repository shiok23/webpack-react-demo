const path = require('path')
// 生成 htmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 并行压缩
const TerserPlugin = require('terser-webpack-plugin')
// fork 线程 check ts type
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// eslint 优化 plugins
const ESLintPlugin = require('eslint-webpack-plugin')
// 构建时间
const smp = new SpeedMeasurePlugin()
// 压缩 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 性能分析
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: path.join(__dirname, 'src', 'app.tsx'),
  devServer: {
    hot: true,
    open: true
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
    new MiniCssExtractPlugin(),
    new StatoscopeWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        // type 属性适用于 Webpack5，旧版本可使用 file-loader
        exclude: /node_modules/,
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        use: ['raw-loader']
      },
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
    devtool: 'source-map',
    // 最小化监听
    watchOptions: {
      ignored: /node_modules/
    },
    // // 按需编译
    // experiments: {
    //   lazyCompilation: true
    // },
    // 并行压缩
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
      minimize: false,
      concatenateModules: false,
      usedExports: false,
      minimizer: [
        new TerserPlugin({
          parallel: 2 // number | boolean
        })
      ]
    }
  },
  production: {
    devtool: 'eval',
    cache: {
      type: 'filesystem'
    },
    optimization: {
      splitChunks: {
        // 设定引用次数超过 2 的模块才进行分包
        minChunks: 2
      },
      minimize: true,
      minimizer: [
        '...',
        new HtmlMinimizerPlugin({
          minimizerOptions: {
            // 折叠 Boolean 型属性
            collapseBooleanAttributes: true,
            // 使用精简 `doctype` 定义
            useShortDoctype: true
            // ...
          }
        }),
        new TerserPlugin({
          parallel: 5 // number | boolean
        })
      ]
    }
  }
}

module.exports = smp.wrap(function (e, v) {
  return {
    ...envConfig[v.mode],
    ...config
  }
})
