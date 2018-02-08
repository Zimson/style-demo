
const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.paths-config');
const $       = require('gulp-load-plugins')();


gulp.task('images:build', () => {
  return gulp.src(paths.src.images)
    .pipe($.imagemin(plugins.imageminConfig))
    .pipe($.size(plugins.sizeConfig))
    .pipe(gulp.dest(paths.build.img))
});
