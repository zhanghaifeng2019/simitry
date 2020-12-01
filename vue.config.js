module.exports = {
  publicPath: '.',
  lintOnSave: true,
  productionSourceMap: false,
  pluginOptions: {
    critical: {
      width: 375,
      height: 812,
    },
  },
  configureWebpack: require('./config/webpack.config'),
};
