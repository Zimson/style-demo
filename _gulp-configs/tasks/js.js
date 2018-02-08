
const gulp          = require('gulp');
const paths         = require('../gulp.paths-config');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');
const webpackConfig = require('../../webpack.config');
const server        = require('./dev-serve').server;
const $             = require('gulp-load-plugins')();


gulp.task('js', (done) => {
  return gulp.src(paths.src.js)
    .pipe($.plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.build.js))
    .on('data', () => {
      server.reload();
      done();
    });
});
