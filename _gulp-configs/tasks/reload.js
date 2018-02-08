
const gulp   = require('gulp');
const server = require('./dev-serve').server;

function reloadTask(done) {
  server.reload();
  done();
}


gulp.task('reload', reloadTask);
