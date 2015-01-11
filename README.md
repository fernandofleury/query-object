# query-object

[![Build Status](https://travis-ci.org/fernandofleury/query-object.svg?branch=master)](https://travis-ci.org/fernandofleury/query-object)

A lightweight lib to work with query strings (1kb uglified)


## Install
You can install via npm or via Bower, query-object is also provided as AMD if you use requireJS:

```javascript
npm install query-object
bower install query-object
```

## API

### useHistory
Defines the usage of HTML5HistoryAPI for modifier methods.
DEFAULT: false

```javascript
queryObject.useHistory = true;
```

### setContext(object)
High-convenience test method to set current context since we can't reload using old location.search during tests. Returns the new context.

```javascript
fakeContext = {};
fakeContext.location = {};

queryObject.setContext(fakeContext);
// returns {}
``` 

### clear()
Clears the current query string

```javascript
queryObject.clear();
// returns undefined
```

### get(string|array)
Returns the current query string as a key/value object. If an array was provided then an object with the matched keys will be returned, otherwise a string or undefined will be returned.

```javascript
// ?foo=foo&bar=bar&baz

queryObject.get();
// returns {foo: 'foo', bar: 'bar', baz: undefined}

queryObject.get('foo');
// returns {foo: 'foo'}

queryObject.get(['foo', 'bar']);
// returns {foo: 'foo', bar: 'bar'}
```

### set(object)
Sets the query string. Returns the new query string if an object was provided, otherwise returns undefined.

```javascript
queryObject.set({foo: 'foo'});
// returns 'foo=foo';
```


### add(object)
Adds the provided object to the current query string. Returns the new query string if an object was provided, otherwise returns undefined.

```javascript
// ?foo=foo

queryObject.add({bar: 'bar'});
// returns 'foo=foo&bar=bar'
```

### remove(string|array)
Removes the current property or propeties of the current query string. Returns the new query string or undefined if the param isn't provided as expected.

```javascript
// ?foo=foo&bar=bar&baz

queryObject.remove('baz');
// retuns 'foo=foo&bar=bar'

queryObject.remove(['foo', 'bar']);
// returns ''
```

### has(string)
Checks for a property on the query string. Returns a boolean based on the existance of the property. If no property is provided, or the property isn't a string, undefined is returned.

```javascript
// ?foo

queryObject.has('foo');
// returns true

queryObject.has('bar');
// returns false
```

## Browser Support
<table>
  <tbody>
    <tr>
      <td><img src="http://ie.microsoft.com/testdrive/ieblog/2010/Sep/16_UserExperiencesEvolvingthebluee_23.png" height="40"></td>
      <td><img src="http://img3.wikia.nocookie.net/__cb20120330024137/logopedia/images/d/d7/Google_Chrome_logo_2011.svg" height="40"></td>
      <td><img src="http://media.idownloadblog.com/wp-content/uploads/2014/06/Safari-logo-OS-X-Yosemite.png" height="40"></td>
      <td><img src="http://th09.deviantart.net/fs71/200H/f/2013/185/e/b/firefox_2013_vector_icon_by_thegoldenbox-d6bxsye.png" height="40"></td>
      <td><img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Opera_browser_logo_2013.png" height="40"></td>

    </tr>
    <tr>
      <td align="center">9+</td>
      <td align="center">✓</td>
      <td align="center">✓</td>
      <td align="center">✓</td>
      <td align="center">✓</td>
    </tr>
  </tbody>
</table>

## License

[MIT License](http://mit-license.org/)
