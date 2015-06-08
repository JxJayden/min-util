min-util
===

[![Build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-util.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-util
[downloads-image]: http://img.shields.io/npm/dm/min-util.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-util
[david-image]: http://img.shields.io/david/chunpu/min-util.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-util

[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Mini Javascript Util Lib

Installation
---

```sh
npm i min-util
```

Usage
---

```js
var _ = require('min-util')
```

Inspired by [lodash](https://github.com/lodash/lodash) and [underscore](https://github.com/jashkenas/underscore)

#### Type Check

`_.is` equals [min-is](https://github.com/chunpu/min-is)

```js
assert(_.is.arraylike({0: 'foo', length: 1}))
```

#### Array like

- `_.each`
- `_.map`
- `_.filter`
- `_.findIndex`
- `_.find`
- `_.some`
- `_.every`
- `_.slice`
- `_.indexOf`
- `_.has`
- `_.uniq`
- `_.reduce`
- `_.only`
- `_.flatten`
- `_.union`
- `_.difference`
- `_.without`
- `_.asyncMap` just like async.map

#### String

- `_.trim`
- `_.indexOf`
- `_.tostr`
- `_.camelCase`
- `_.capitalize`
- `_.decapitalize`
- `_.has`
- `_.capitalize`

#### Object

- `_.extend`
- `_.keys`
- `_.mapObject`
- `_.create`
- `_.inherits`

#### Function

- `_.bind`

#### Other

- `_.noop`
- `_.now`
- `_.identity` return arguments[0]

Support
---

- all browsers even `IE6+`
- node.js

Try
---

Try in [console](http://chunpu.github.io/min-util/browser), exports as `util`

License
---

[![License][license-image]][license-url]

[travis-image]: https://img.shields.io/travis/chunpu/min-util.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunpu/min-util
[coveralls-image]: https://img.shields.io/coveralls/chunpu/min-util/gh-pages.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chunpu/min-util
[gittip-image]: https://img.shields.io/gittip/chunpu.svg?style=flat-square
[gittip-url]: https://www.gittip.com/chunpu/
[license-image]: http://img.shields.io/npm/l/min-util.svg?style=flat-square
[license-url]: #
