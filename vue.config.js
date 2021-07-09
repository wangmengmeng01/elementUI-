const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
        .set('@', resolve('src'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
}
