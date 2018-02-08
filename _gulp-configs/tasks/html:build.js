
const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.paths-config');
const $       = require('gulp-load-plugins')();


gulp.task('html:build', () => {
  return gulp.src(paths.src.pug)
    .pipe($.plumber())
    .pipe($.pug(plugins.pugConfig))
    .pipe($.img64())
    .pipe($.htmlmin(plugins.htmlminConfig))
    .pipe($.size(plugins.sizeConfig))
    .pipe($.plumber.stop())
    .pipe(gulp.dest(paths.build.html));
});
