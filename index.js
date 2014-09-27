'use strict';

module.exports = (function() {
  var number = new Number(0);
  return _extended(number);
})();

function _extended(number) {
  number.second      = _bind(_addMs, number, 1e3, 1);
  number.seconds     = _bind(_addMs, number, 1e3);
  number.minute      = _bind(_addMs, number, 6e4, 1);
  number.minutes     = _bind(_addMs, number, 6e4);
  number.hour        = _bind(_addMs, number, 36e5, 1);
  number.hours       = _bind(_addMs, number, 36e5);
  number.day         = _bind(_addMs, number, 864e5, 1);
  number.days        = _bind(_addMs, number, 864e5);
  return number;
}

function _addMs(multiplier, value) {
  var _value = multiplier * (value);
  var number = new Number(this + _value);
  return _extended(number);
}

function _bind(fn, ctx) {
  var _args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var args = Array.prototype.slice.call(arguments, 0);
    return fn.apply(ctx, _args.concat(args));
  };
}
