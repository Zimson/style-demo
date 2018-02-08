
const gulp    = require('gulp');
const server  = require('browser-sync').create();
const plugins = require('../gulp.plugin-config');


gulp.task('dist-serve', (done) => {
  server.init(plugins.browserSyncDist);
  done();
});
