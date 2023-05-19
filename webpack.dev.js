const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
//Tambhakan Library
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9090,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
  //Tambahkan Plugin CleanWebpack
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
