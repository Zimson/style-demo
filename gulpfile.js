'use strict';

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const paths = require('./_gulp-configs/gulp.paths-config');
const server = require('./_gulp-configs/tasks/dev-serve').server;
const hub = new HubRegistry(['./_gulp-configs/tasks/*.js']);


gulp.registry(hub);
// ----------------------------------------------------------


// watchers, wrapped in common function
function watchTask() {

  // for style
  gulp.watch(paths.src.scss_watch, gulp.series('styles', 'reload'));

  // for templates
  gulp.watch(paths.src.pug_watch, gulp.series('html', 'reload'));

  // for images
  gulp.watch(paths.src.images)
    .on('all', () => {
      server.reload();
    });
}
// ------------------------------------------------


gulp.task('default', gulp.series(
  gulp.parallel(
    'html',
    'styles',
    'images',
    'js'
  ),
  'dev-serve',
  watchTask
  )
);
// --------------------------------------------------------------


// build-production
gulp.task('build:prod', gulp.series(
  'clean:all',
  gulp.parallel(
    'html:build',
    'styles:build',
    'js:build',
    'images:build'
  )
));
// --------------------------------------------------------------


// test-build
gulp.task('build:test', gulp.series(
  'clean:all',
  gulp.parallel(
    'html:build',
    'styles:build',
    'js:build',
    'images:build'
  )
));
// --------------------------------------------------------------


// server
gulp.task('dist:serve', gulp.series('dist-serve'));
