/* globals should, it, describe */

'use strict';

/**
 * Dependencies
 */
var toMs = require('..');

// End dependencies

describe('to-ms', function () {
  it('should be a function', function() {
    toMs.should.be.a.Function;
  });
  describe('seconds()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.seconds('60');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(60 * 1000);
    });
  });
  describe('minutes()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.minutes('60');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(60 * 60 * 1000);
    });
  });
  describe('hours()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.hours('24');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(24 * 60 * 60 * 1000);
    });
  });
  describe('days()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.days('7');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(7 * 24 * 60 * 60 * 1000);
    });
  });
});
