/* jshint -W053 */

"use strict";

module.exports = toMs(new Number(0));

function toMs(number) {
  number.second = addMs.bind(number, 1e3, 1);
  number.seconds = addMs.bind(number, 1e3);
  number.minute = addMs.bind(number, 6e4, 1);
  number.minutes = addMs.bind(number, 6e4);
  number.hour = addMs.bind(number, 36e5, 1);
  number.hours = addMs.bind(number, 36e5);
  number.day = addMs.bind(number, 864e5, 1);
  number.days = addMs.bind(number, 864e5);
  number.week = addMs.bind(number, 6048e5, 1);
  number.weeks = addMs.bind(number, 6048e5);
  number.year = addMs.bind(number, 31536e6, 1);
  number.years = addMs.bind(number, 31536e6);
  return number;
}

function addMs(unit, val = 0) {
  // the previous value
  const a = this

  // unit times the multiplier
  const b = unit * (+val);

  // add them together
  return toMs(new Number(a + b));
}
