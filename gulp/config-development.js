var fs   = require('fs');
var gutil = require('gulp-util');

var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    open: false,
    files: [
    dest + "/**",
    // Exclude Map files
    "!" + dest + "/**.map"
    ]
  },
  stylus: {
    src: src + "/stylus/**", // files which are watched for changes, but not compiled directly
    main: src + "/stylus/*.{styl, stylus}", // files which are compiled with all their decendants
    dest: dest,
    options: {
      compress: false,
      sourcemap: {
        inline: true,
        sourceRoot: '.',
        basePath: dest
      }
    }
  },
  autoprefixer: {
    browsers: ['last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
    cascade: false
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  substituter: {
    enabled: true,
    cdn: '',
    js: '<script src="{cdn}/{file}"></script>',
    css: '<link rel="stylesheet" href="{cdn}/{file}">'
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './src/javascript/app.js',
      dest: dest,
      outputName: 'app.js'
    }/*, {
      entries: './src/javascript/head.coffee',
      dest: dest,
      outputName: 'head.js'
    }*/]
  }
};
