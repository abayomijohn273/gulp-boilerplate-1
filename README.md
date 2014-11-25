gulp-boilerplate
============

Starter Gulp + Browserify project with some common tasks and workflows we use at [whatwedo](https://whatwedo.ch). Read the original blog posts of the gulp-starter for more context, which is the base project we forked [blog post](http://viget.com/extend/gulp-browserify-starter-faq), and check out the origin [Wiki](https://github.com/greypants/gulp-starter/wiki) for some good background knowledge.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [Stylus](http://learnboost.github.io/stylus/)
- [CoffeeScript](http://coffeescript.org/) (with source maps!)
- [jQuery](http://jquery.com/) (from npm)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- [Autoprefixer](https://github.com/postcss/autoprefixer) for automatically CSS Vendor Prefixes
- [Substituter](https://github.com/madebysource/gulp-substituter)
- Image optimization
- Error Notifications in Notification Center
- Non common-js vendor code (like a jQuery plugin)

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```

### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed.

```
gulp
```

This will run the `watch` gulp task defined in `gulp/tasks/watch.js`, which does the following:
- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `build` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.
- `build` includes the following tasks: `['browserify', 'stylus', 'images', 'markup', 'copy']`

### Build before going live

```
gulp --env production
```

This will run the `watch` task with the settings from the config-production.js which does following:

- Build to the `dist` folder
- Compress styles and scripts

### Configuration
All paths and plugin settings have been abstracted into a centralized config object in `gulp/config-development.js`. Adapt the paths and settings to the structure and needs of your project. If you want to adjust the build process for production ready files, edit the `config-production.js`.
