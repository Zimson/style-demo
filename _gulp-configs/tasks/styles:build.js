
const gulp         = require('gulp');
const plugins      = require('../gulp.plugin-config');
const paths       = require('../gulp.paths-config');
const autoprefixer = require('autoprefixer');
const $            = require('gulp-load-plugins')();


gulp.task('styles:build', () => {
  return gulp.src(paths.src.scss)
    .pipe($.plumber())
    .pipe($.sass.sync(plugins.scssConfig)
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer(plugins.autoprefixerConfig)
    ]))
    .pipe($.csso())
    .pipe($.plumber.stop())
    .pipe(gulp.dest(paths.build.styles));
});
