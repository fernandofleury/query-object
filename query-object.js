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
   * @param {object} new env
   * @return {object} new env
   */
  _self._setEnv = function(env) {
    _env = env || _env;
    return _env;
  };

  /**
   * clear the current query string
   * @return {undefined}
   */
  _self.clear = function() {
    _env.location.search = '';
  };

  /**
   * return the current query string
   * @return {object}
   */
  _self.get = function() {
    return _env.location.search;
  };

  // returning factory instance
  return _self;
});