// webpack.production.js
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common')

// 使用 webpack-merge 合并配置对象
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'eval'
})
