
const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.paths-config');
const $       = require('gulp-load-plugins')();
const server  = require('./dev-serve').server;


gulp.task('html', () => {
  return gulp.src(paths.src.pug)
    .pipe($.plumber())
    .pipe($.pug(plugins.pugConfig))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(paths.build.html));
});
