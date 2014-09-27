# toMs

[![Build Status](https://travis-ci.org/shuvalov-anton/to-ms.svg)](https://travis-ci.org/shuvalov-anton/to-ms)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/to-ms/badges/gpa.svg)](https://codeclimate.com/github/shuvalov-anton/to-ms)

Simple and human friendly ms implementation with awesome chaining. Thanks to @subzey for sketch :D

## Install

```
npm install to-ms
```

## Examples

```js
var toMs = require('to-ms');

setTimeout(
  function () {
    /* do something */
  }, toMs
    .hour()
    .minutes(15)
    .seconds(30)
);
```

## Chaining

All methods are chainable. I mean, you can pretty simple write something like this:

```js
var ms = toMs
  .days(30)
  .hours(10)
  .minutes(30)
  .seconds(45);
```

## Methods

- `toMs.second()`
- `toMs.seconds(Number)`
- `toMs.minute()`
- `toMs.minutes(Number)`
- `toMs.hour()`
- `toMs.hours(Number)`
- `toMs.day()`
- `toMs.days(Number)`
