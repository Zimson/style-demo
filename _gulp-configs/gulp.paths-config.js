const DIR_BY_ENV = require('./root-config').DIR_BY_ENV;


module.exports = {

  // input
  src: {
    js: [
      'src/js/Widget.jsx'
    ],
    pug: [
      'src/*.pug'
    ],
    pug_watch: [
      'src/*.pug'
    ],
    scss: 'src/styles/main.scss',
    scss_watch: [
      'src/styles/**/**.scss',
      '!src/js/components/base.scss'
    ],
    images: 'src/assets/img/**/*.{png,jpg,gif,svg}'
  },

  // build paths
  build: {
    all    : `${DIR_BY_ENV}/`,
    styles : `${DIR_BY_ENV}/assets/css/`,
    js     : `${DIR_BY_ENV}/assets/js`,
    img    : `${DIR_BY_ENV}/assets/img/`,
    html   : `${DIR_BY_ENV}/`
  },

  // paths for delete
  del: {
    all: '${DIR_BY_ENV}/'
  }
};
