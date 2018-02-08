
const gulp          = require('gulp');
const paths         = require('../gulp.paths-config');
const plugins       = require('../gulp.plugin-config');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');
const webpackConfig = require('../../webpack.config');
const $             = require('gulp-load-plugins')();
const named         = require('vinyl-named');


gulp.task('js:build', () => {
  return webpackStream(webpackConfig, webpack)
    .pipe($.plumber())
    .pipe(named())
    .pipe($.plumber.stop())
    .pipe($.size(plugins.sizeConfig))
    .pipe(gulp.dest(paths.build.js));
});
