var fs = require('fs');
var gutil = require('gulp-util');
var args = require('yargs').argv;
var gulpif = require('gulp-if');
var extend = require('node.extend');

var config = require('./config-development.js');

var hasUserConfig = fs.existsSync('./gulp/config-user.js');
var hasProductionConfig = fs.existsSync('./gulp/config-production.js');
var isProductionEnv = args.env === 'production';

if (hasUserConfig) {
  var userConfig = require('./config-user.js');
  var mergedUserConfig = extend(true, {}, config, userConfig);
  config = extend(true, {}, mergedUserConfig);
}

if (hasProductionConfig && isProductionEnv) {
  var prodConfig = require('./config-production.js');
  var mergedProdConfig = extend(true, {}, config, prodConfig);
  config = extend(true, {}, mergedProdConfig);
}

module.exports = config;
