'use strict';
var queryObject = {};

queryObject.strip = function (str) {
  return str.replace(/^\?/, '');
};

queryObject.destroy = function() {
  window.location.search = '';
}

queryObject.get = function() {
  var qs = window.location.search,
  obj = {},
  parts, key, val;

  if(!qs) {
    return {};
  }

  qs = queryObject.strip(qs);

  qs.split('&').forEach(function(item){
    parts = item.replace(/\+/g, '').split('='),
    key = parts[0],
    val = parts[1];

    key = decodeURIComponent(key);
    val = val === undefined ? null : decodeURIComponent(val);

    obj[key] = val;
  });

  return obj;
}

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