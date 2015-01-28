var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var argv = require('yargs').argv;
//var gulpif = require('gulp-if');
var reload = require('browser-sync').reload;
var sourcemaps = require('gulp-sourcemaps');

var handleErrors = require('../../util/handleErrors');
var config = require('../../config').stylus;
var autoprefixerConfig = require('../../config').autoprefixer;

gulp.task('stylus', function() {
  // TODO: Move to config
  var minifyOptions = {
    prod: {
      keepSpecialComments: 1
    }
  };

  return gulp.src(config.main)
  .pipe(plumber())
  .pipe(stylus(config.options))
  .pipe(gulp.dest(config.dest))
  .pipe(autoprefixer(autoprefixerConfig))
  //.pipe(gulpif(argv.prod, minifycss(minifyOptions.prod)))
  //.pipe(sourcemaps.init({loadMaps: true }))
  //.pipe(sourcemaps.write('.', { includeConent: false,  sourceRoot: '.' }))
  .pipe(gulp.dest(config.dest))
  .pipe(reload({
    stream: true
  }))
  .on('error', handleErrors);
});
