
const gulp    = require('gulp');
const plugins = require('../gulp.plugin-config');
const paths   = require('../gulp.paths-config');
const $       = require('gulp-load-plugins')();


gulp.task('images', () => {
  return gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.build.img))
});
