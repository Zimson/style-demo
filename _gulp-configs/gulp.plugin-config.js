const DIR_BY_ENV = require('./root-config').DIR_BY_ENV;

const browserSyncDev = {
  server: {
    baseDir: `./test-build`,
    routes: {
      'assets/': './test-build/assets/'
    }
  },
  tunnel: false,
  host: 'localhost',
  port: 9300,
  logPrefix: "Frontend_Dev"
};

const browserSyncDist = {
  server: {
    baseDir: `./${DIR_BY_ENV}`
  },
  tunnel: false,
  host: 'localhost',
  port: 9301,
  logPrefix: "Frontend_Build"
};

const pugConfig = {
  pretty: true
};

const scssConfig = {
  outputStyle: 'expanded',
  precision: 10,
  includePaths: [
    '.'
  ]
};

const autoprefixerConfig = {
  browsers: [
    'last 3 versions',
    '> 1%'
  ]
};


const imageminConfig = {
  interlaced: true,
  progressive: true,
  optimizationLevel: 3,
  svgoPlugins: [{removeViewBox: true}]
};


const sizeConfig = {
  gzip: true
};


const htmlminConfig = {
  collapseWhitespace: true
};


module.exports = {
  browserSyncDev,
  browserSyncDist,
  pugConfig,
  scssConfig,
  autoprefixerConfig,
  imageminConfig,
  sizeConfig,
  htmlminConfig
};
