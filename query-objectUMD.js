!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.queryObject=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var queryObject = {};
 
queryObject.strip = function (str) {
  return str.replace(/^\?/, '');
};
 
queryObject.destroy = function() {
  window.location.search = '';
};
 
queryObject.get = function() {
  var qs = window.location.search,
  obj = {},
  parts, key, value;
 
  if(!qs) {
    return {};
  }
 
  qs = queryObject.strip(qs);
 
  qs.split('&').forEach(function(item){
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
 
  Object.keys(obj).forEach(function(key){
    if(obj[key]) {
      str += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    } else {
      str += encodeURIComponent(key);
    }
    str += '&';
  });
 
  window.location.search = str.slice(0, -1);
};
 
queryObject.add = function(obj) {
  var qs = queryObject.get(),
  props;
 
  for (props in obj) {
    qs[props] = obj[props];
  }
 
  queryObject.set(qs);
};
 
queryObject.remove = function(remove) {
  var qs = queryObject.get();
 
  if(Array.isArray(remove)) {
    remove.forEach(function(index) {
      delete qs[index];
    });
  } else {
    delete qs[remove];
  }
 
  queryObject.set(qs);
};

module.exports = queryObject;
},{}]},{},[1])
(1)
});