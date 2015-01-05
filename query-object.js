/**
 * query-object
 * Copyright © 2015 Fernando Fleury | MIT license | https://github.com/fernandofleury/query-object
 */

(function(root, factory) {
  if (typeof define === 'function') {
    define(['queryObject'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.queryObject = factory();
  }
})(this, function() {
  'use strict';

  var queryObject = {};

  queryObject.destroy = function() {
    document.location.search = '';
  };

  queryObject.get = function() {
    var qs = document.location.search,
      obj = {},
      parts, key, value;

    if (!qs) {
      return {};
    }

    qs = qs.replace(/^\?/, '');

    qs.split('&').forEach(function(item) {
      parts = item.replace(/\+/g, '').split('=');
      key = parts[0];
      value = parts[1];

      key = decodeURIComponent(key);
      value = (value === undefined ? null : decodeURIComponent(value));

      obj[key] = value;
    });

    return obj;
  };

  queryObject.set = function(obj) {
    var str = '';

    if (!obj) {
      return;
    }

    Object.keys(obj).forEach(function(key) {
      if (obj[key]) {
        str += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
      } else {
        str += encodeURIComponent(key);
      }
      str += '&';
    });

    document.location.search = str.slice(0, -1);
  };

  queryObject.add = function(obj) {
    var qs = queryObject.get(),
      props;

    if (!obj) {
      return;
    }

    for (props in obj) {
      qs[props] = obj[props];
    }

    queryObject.set(qs);
  };

  queryObject.remove = function(remove) {
    var qs = queryObject.get();

    if (Array.isArray(remove)) {
      remove.forEach(function(index) {
        delete qs[index];
      });
    } else {
      delete qs[remove];
    }

    queryObject.set(qs);
  };

  return queryObject;
});