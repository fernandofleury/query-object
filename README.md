# query-object

[![CircleCI](https://img.shields.io/circleci/project/github/fernandofleury/query-object.svg)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A lightweight lib to work with query strings (< 1kb uglified & gzipped)

**Please note this small/opinionated does not support Arrays[], for those scenarios there are other libraries who can handle it pretty well!**

## Install
```javascript
npm install --save query-object
```

## API

The v3 has a totally new and simpler API. All previous methods from v2 has been deprecated in favor of parse/stringify:

### parse(querystring: string)
Returns the current query string as a key/value object.

```javascript
const queryObject = require('queryObject')

queryObject.parse('?foo=foo&bar=bar&baz')
// returns {foo: 'foo', bar: 'bar', baz: null}

queryObject.parse('?foo=foo');
// returns {foo: 'foo'}
```

### stringify(params: object)
Returns a new string based on the provided object.

```javascript
const queryObject = require('queryObject')

queryObject.stringify({ foo: 'foo' })
// returns 'foo=foo'

queryObject.stringify({ foo: 'foo', bar: null })
// returns 'foo=foo&bar'
```

## License
[MIT License](http://mit-license.org/)
