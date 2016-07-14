var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'redux-test-utils',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015', 'stage-0']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
