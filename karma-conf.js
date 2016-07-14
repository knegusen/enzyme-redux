module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: [
      'jasmine'
    ],

    files: [
      './karma-files.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'karma-files.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config.karma.js'),

    plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-webpack', 'karma-sourcemap-loader'],

    colors: true,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};