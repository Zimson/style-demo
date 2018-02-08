
const gulp  = require('gulp');
const del   = require('del');
const paths = require('../gulp.paths-config');


gulp.task('clean:all', () => {
  return del(paths.del.all);
});
