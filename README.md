# query-object

Easy url query string manipulation via Objects (using JavaScript)


## Getting Started

Simply place the query-object.js on your html file and you are good to go.
The query-object operates under queryObject name, with the following methods:


### get();
Returns the current query string;

```javascript
// url: http://localhost.com?foo=bar
queryObject.get();
// returns {foo: "bar"}
```

### set(Object);
Accepts an object to set the query string (it will remove the current query string)

```javascript
queryObject.set({bar: "bar", foo: "foo"});
// url: http://localhost.com?bar=bar&foo=foo
```

### add(Object);
Adds a new property to the current query string;

```javascript
queryObject.add({baz: "baz"});
// url: http://localhost.com?bar=bar&foo=foo&baz=baz
```

### remove(String or Array);
Removes a property or an array of properties based on the parameter.

```javascript
queryObject.remove("foo");
// url http://localhost.com?bar=bar&baz=baz
```

### destroy();
Clears the current query string

```javascript
queryObject.destroy();
// url: http://localhost.com?
```

## Support

queryObject works on Chrome, Firefox, Safari, Opera and IE 9+ (All tested).
In fact its really easy to provide a fallback for it, all you have to do is replace the forEach and Object.key functions.

## License

[MIT License](http://mit-license.org/)
