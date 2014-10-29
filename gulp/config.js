var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
    dest + "/**",
    // Exclude Map files
    "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/sass/*.{sass, scss}",
    dest: dest,
    options: {
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../sass'
    }
  },
  stylus: {
    src: src + "/stylus/*.{styl, stylus}",
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