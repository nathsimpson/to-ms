# toMs ⏲

A simple and human-friendly millisecond conversion util with awesome chaining.

## Install

```
npm install to-ms
// or
yarn add to-ms
```

## Examples

```js
var toMs = require('to-ms');

setTimeout(function () {
  /* do something */
}, toMs.hour(1).minutes(15).seconds(30));
```

## Chaining

All methods are chainable, and easy to use.

```js
var ms = toMs.days(30).hours(10).minutes(30).seconds(45);
```

## Browser Support

Just use `window.toMs`. To support legacy browsers you must use [ES5-Shim][2].

[2]: https://github.com/es-shims/es5-shim

## Methods

- `toMs.second()`
- `toMs.seconds(Number)`
- `toMs.minute()`
- `toMs.minutes(Number)`
- `toMs.hour()`
- `toMs.hours(Number)`
- `toMs.day()`
- `toMs.days(Number)`
- `toMs.week()`
- `toMs.weeks(Number)`
- `toMs.year()`
- `toMs.years(Number)`

## Acknowledgements

This package was previously owned and maintained by [Shuvalov Anton](https://github.com/A).
