!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){const r=t(1),o=t(2);e.exports={parse:r,stringify:o}},function(e,n){e.exports=((e="")=>{let n={};if(!(e=e.replace(/^\?/,"")))return n;const t=e.split("&"),r=t.length;for(let e=0;e<r;e++){let[r,o]=t[e].replace(/%20|\+/g," ").split("=");n[decodeURIComponent(r)]=o?decodeURIComponent(o):null}return n})},function(e,n){e.exports=((e={})=>{let n="";for(let t in e)n+=encodeURIComponent(t),e.hasOwnProperty(t)&&e[t]&&(n+="="+encodeURIComponent(e[t])),n+="&";return n.slice(0,-1)})}]);
