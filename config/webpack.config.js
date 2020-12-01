const path = require('path');
const Module = require('./module');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: Module.split(path.resolve(__dirname, '../package.json')),
    },
  },
  plugins: [
    new ImageminPlugin(require('./imagemin.config')),
    // new StylelintPlugin({
    //   files: ['**/*.vue'],
    // }),
  ],
};
