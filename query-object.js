/**
 * query-object
 * Copyright © 2015 Fernando Fleury | MIT license | https://github.com/fernandofleury/query-object
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.queryObject = factory();
  }
})(this, function() {
  'use strict';

  /**
   * queryObject factory instance
   * @type {Object}
   */
  var _self = {},
    _ctx = _ctx || window;

  /**
   * Defines the usage of HTML5HistoryAPI for all methods
   */
  _self.useHistory = false;

  /**
   * High-convenience test method to set current context since we can't reload using old location.search during tests
   * @param {Object} new context
   * @returns {Object} new context
   */
  _self._setContext = function(ctx) {
    _ctx = ctx || _ctx;
    return _ctx;
  };

  /**
   * Clears the current query string
   * @returns {undefined}
   */
  _self.clear = function() {
    if(_self.useHistory) {
      history.pushState(null, document.title, location.href.indexOf('?') ? location.href.substr(0, location.href.indexOf('?')) : location.href);
      return;
    }
    _ctx.location.search = '';
    return;
  };

  /**
   * Returns the current query string as a key/value object
   * @param  {String|Array} Accepts an array of keys or a string of a single key.
   * @returns {Object|String|Undefined} If an array was provided then an object with the matched keys will be returned, otherwise a string or undefined will be returned.
   */
  _self.get = function(key) {
    if (!_ctx.location.search) {
      return;
    }

    var query = _ctx.location.search.substring(1).split('&'),
      obj = {};

    query.forEach(function(param) {
      param = param.replace(/%20|\+/g, ' ').split('=');
      obj[decodeURIComponent(param[0])] = (param[1] ? decodeURIComponent(param[
        1]) : undefined);
    });

    if (Array.isArray(key)) {
      var temp = {};
      key.forEach(function(key) {
        if (obj.hasOwnProperty(key)) {
          temp[key] = obj[key];
        }
      });

      return temp;
    }

    if (key) {
      return obj[key] || undefined;
    }

    return obj;
  };


  /**
   * Sets the query string
   * @param {Object, String|Object} Object to set the new query string.
   * @returns {String|Undefined} Returns the new query string if an object was provided, otherwise returns undefined.
   */
  _self.set = function(obj) {
    if (!obj || typeof obj !== 'object') {
      return;
    }

    var query = _self.objectToQueryString(obj),
      href = location.href,
      prop;

    if (_self.useHistory) {
      href = href.indexOf('?') ? href.substr(0, href.indexOf('?')) : href;
      history.pushState(null, document.title, href + '?' + query);
      return query;
    }

    return (_ctx.location.search = query);
  };

  /**
   * Adds the provided object to the current query string
   * @param {Object} The object to be added.
   * @returns {String|Undefined} Returns the new query string if an object was provided, otherwise returns undefined.
   */
  _self.add = function(obj) {
    if (!obj || typeof obj !== 'object') {
      return;
    }
    var query = _self.get(),
      prop;

    for (prop in obj) {
      query[prop] = obj[prop];
    }

    return _self.set(query);
  };


  /**
   * Removes the current property or propeties of the current query string
   * @param  {String|Array} A string or an array of properties to be removed.
   * @returns {String|Undefined} Returns the new query string or undefined if the param isn't provided as expected.
   */
  _self.remove = function(param) {
    if (!param || !param.length) {
      return;
    }
    var query = _self.get();

    if (Array.isArray(param)) {
      param.forEach(function(param) {
        delete query[param];
      });
    }

    if (typeof param === 'string') {
      delete query[param];
    }

    return _self.set(query);
  };

  /**
   * Checks for a property on the query string
   * @param  {String} The property to be checked.
   * @returns {Boolean|Undefined} Returns a boolean based on the existance of the property. If no property is provided, or the property isn't a string, undefined is returned.
   */
  _self.has = function(prop) {
    if (!prop || typeof prop !== 'string') {
      return;
    }
    var query = _self.get() || {};
    return query.hasOwnProperty(prop);
  };

  _self.objectToQueryString = function (a) {
    var prefix, s, add, name, r20, output;
    s = [];
    r20 = /%20/g;
    add = function (key, value) {
      // If value is a function, invoke it and return its value
      value = ( typeof value == 'function' ) ? value() : ( value == null ? "" : value );
      if (value) {
        s[ s.length ] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
      } else {
        s[ s.length ] = encodeURIComponent(key);
      }
    };
    if (a instanceof Array) {
      for (name in a) {
        add(name, a[name]);
      }
    } else {
      for (prefix in a) {
        _self.buildParams(prefix, a[ prefix ], add);
      }
    }
    output = s.join("&").replace(r20, "+");
    return output;
  };

  _self.buildParams = function(prefix, obj, add) {
    var name, i, l, rbracket;
    rbracket = /\[\]$/;
    if (obj instanceof Array) {
      for (i = 0, l = obj.length; i < l; i++) {
        if (rbracket.test(prefix)) {
          add(prefix, obj[i]);
        } else {
          _self.buildParams(prefix + "[" + ( typeof obj[i] === "object" ? i : "" ) + "]", obj[i], add);
        }
      }
    } else if (typeof obj == "object") {
      // Serialize object item.
      for (name in obj) {
        _self.buildParams(prefix + "[" + name + "]", obj[ name ], add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  };

  // returning factory instance
  return _self;
});
