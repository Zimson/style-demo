
const gulp         = require('gulp');
const plugins      = require('../gulp.plugin-config');
const paths        = require('../gulp.paths-config');
const autoprefixer = require('autoprefixer');
const $            = require('gulp-load-plugins')();


gulp.task('styles', () => {
  return gulp.src(paths.src.scss)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync(plugins.scssConfig)
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer(plugins.autoprefixerConfig)
    ]))
    .pipe($.sourcemaps.write())
    .pipe($.plumber.stop())
    .pipe(gulp.dest(paths.build.styles))
});
