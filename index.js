module.exports = process.env.MS_COV
  ? require('./lib-cov/ms')
  : require('./lib/ms');
