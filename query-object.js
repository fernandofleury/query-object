/**
 * query-object
 * Copyright © 2015 Fernando Fleury | MIT license | https://github.com/fernandofleury/query-object
 */

(function(root, factory) {
  if (typeof define === 'function') {
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
      return {};
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

  // returning factory instance
  return _self;
});