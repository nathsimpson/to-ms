module.exports = process.env.COV
  ? require('./lib-cov/ms')
  : require('./lib/ms');
