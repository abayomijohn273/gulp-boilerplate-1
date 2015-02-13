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

Whole documentation for the build system can be found in the [`gulp/README.md`](https://github.com/whatwedo/gulp-boilerplate/blob/develop/gulp/README.md).

## Contribution

**We don't merge contributions for this project** since it reflects our internal workflow. This is only a fork from another repository, so we guess you could take a look at the original source.
