
const gulp    = require('gulp');
const server  = require('browser-sync').create();
const plugins = require('../gulp.plugin-config');



gulp.task('dev-serve', (done) => {
  server.init(plugins.browserSyncDev);
  done();
});

module.exports.server = server;
