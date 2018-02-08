
const DIR_BY_ENV = process.env.NODE_ENV === 'production'
  ? 'prod-build'
  : 'test-build';


module.exports.DIR_BY_ENV = DIR_BY_ENV;
