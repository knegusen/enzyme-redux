var path = require('path');
var webpack = require('webpack');

module.exports = {

  basePath: './',

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
