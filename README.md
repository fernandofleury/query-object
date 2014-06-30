# query-object

Easy query-string manipulation via Objects (using JavaScript)


## Getting Started

Simply place the query-object.js on your html file and you are good to go.
The query-object operates under queryObject name, with the following methods:

```javascript
queryObject.get();
// returns the current query-string;

queryObject.set(Object);
// accepts an object to set (it will remove the current query-string) the query-string

queryObject.add(Object);
// adds a new property to the current query-string;

queryObject.remove(String or Array);
// removes a property or an array of properties based on the parameter.

queryObject.destroy();
// removes the current query-string;
```

## Support

queryObject works Chrome, Firefox, Safari, Opera and IE 10+ (All tested).
In fact its really easy to provide a fallback for it, all you have to do is replace the forEach and Object.key functions.

## License

[MIT License](http://mit-license.org/)
