var path = require('path');
var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    resolve: {
      extensions: ['', '.js', '.json']
    },
    module: {
      loaders: [
        { test: /\.json$/, loader: 'json' }
      ]
    }
  });

  var babelCompiler = wallaby.compilers.babel({
    babel: require('babel-core'),
    presets: ['es2015', 'stage-0', 'react']
  });

  return {
    files: [
      { pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false },
      { pattern: 'src/**/*.js*', load: false },
      { pattern: 'src/**/__tests__/**/*Spec.js*', ignore: true }
    ],

    tests: [
      { pattern: 'src/**/__tests__/**/*Spec.js*', load: false }
    ],

    compilers: {
      '**/*.js*': babelCompiler
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};



