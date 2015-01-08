/**
 * query-object
 * Copyright © 2015 Fernando Fleury | MIT license | https://github.com/fernandofleury/query-object
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['query-object'], factory);
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
    _env = _env || window;

  /**
   * TODO HTML5HistoryAPI definition
   */
  _self.useHistory = false;

  /**
   * High-convenience test method to set current context since we can't reload during tests
   * @param {Object} new env
   * @returns {Object} new env
   */
  _self._setEnv = function(env) {
    _env = env || _env;
    return _env;
  };

  /**
   * Clears the current query string
   * @returns {undefined}
   */
  _self.clear = function(prop) {
    _env.location.search = '';
  };

  /**
   * Returns the current query string as a key/value object
   * @param  {String|Array} Accepts an array of keys or a string of a single key.
   * @returns {Object|String|Undefined} If an array was provided then an object with the matched keys will be returned, otherwise a string or undefined will be returned.
   */
  _self.get = function(key) {
    if (!_env.location.search) {
      return;
    }

    var query = _env.location.search.substring(1).split('&'),
      obj = {};

    query.forEach(function(param) {
      param = param.replace(/%20/g, ' ').split('=');
      obj[decodeURIComponent(param[0])] = (param[1] ? decodeURIComponent(param[1]) : undefined);
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
   * @param {Object} Object to set the new query string.
   * @returns {String|Undefined} Returns the new query string if an object was provided, otherwise returns undefined.
   */
  _self.set = function(obj) {
    if (!obj || typeof obj !== 'object') {
      return;
    }

    var query = '',
      prop;

    for (prop in obj) {
      query += encodeURIComponent(prop);
      if (obj[prop]) {
        query += '=' + encodeURIComponent(obj[prop]);
      }
      query += '&';
    }

    return (_env.location.search = query.slice(0, -1));
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
   * @return {String|Undefined} Returns the new query string or undefined if the param isn't provided as expected.
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

  _self.has = function(prop) {
    if (!prop || typeof prop !== 'string') {
      return;
    }
    var query = _self.get();
    return query.hasOwnProperty(prop);
  };

  // returning factory instance
  return _self;
});