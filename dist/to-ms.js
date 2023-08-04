(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toMs = f()}})(function(){var define,module,exports;module={exports:(exports={})};
/* jshint -W053 */

'use strict';

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
  const previousValue = this;

  // unit times the multiplier
  const unitTimesMultiplier = unit * +val;

  // add them together
  return toMs(new Number(previousValue + unitTimesMultiplier));
}

return module.exports;});

