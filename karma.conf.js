var webpack = require('webpack');
var commonConfig = require('./webpack/karma-common.conf.js');

module.exports = function (config) {
  config.set(commonConfig);
  config.reporters = ['progress', 'notify'];
  config.notifyReporter = {
    reportEachFailure: true, // Default: false, Will notify on every failed sepc
    reportSuccess: true, // Default: true, Will notify when a suite was successful
  };
  config.customLaunchers = {
    chrome_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox'],
    };
  };
  if (process.env.CIRCLECI) {
    config.browsers = ['chrome_ci'];
  }
};
