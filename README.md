# query-object

A lightweight lib to work with query strings (1kb uglified)


## Install
You can install via npm or via Bower, query-object is also provided as AMD if you use requireJS:

```javascript
npm install query-object
bower install query-object
```

## API

### useHistory (boolean)
Defines the usage of HTML5HistoryAPI for all methods. 
DEFAULT: false

```javascript
queryObject.useHistory = true;
```

### setContext()
High-convenience test method to set current context since we can't reload using old location.search during tests

```javascript
fakeContext = {};
fakeContext.location = {};
queryObject.setContext(fakeContext);
// returns the new context;
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
