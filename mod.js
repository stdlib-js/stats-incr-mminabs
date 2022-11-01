// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(t,r)||a.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=f):t[r]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,l.get),p&&i&&i.call(t,r,l.set),t};function f(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var _=p()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[s],i=s,r=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[s]=e:delete t[s],n}:function(t){return b.call(t)},m=Number,d=m.prototype.toString;var g=p();function h(t){return"object"==typeof t&&(t instanceof m||(g?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function j(t){return c(t)||h(t)}f(j,"isPrimitive",c),f(j,"isObject",h);var w=Number.POSITIVE_INFINITY,O=m.NEGATIVE_INFINITY,S=Math.floor;function T(t){return t<w&&t>O&&S(r=t)===r;var r}function A(t){return c(t)&&T(t)}function E(t){return h(t)&&T(t.valueOf())}function F(t){return A(t)||E(t)}function I(t){return A(t)&&t>0}function N(t){return E(t)&&t.valueOf()>0}function P(t){return I(t)||N(t)}function V(t){return Math.abs(t)}function k(t){return t!=t}function G(t){return 0===t&&1/t===O}f(F,"isPrimitive",A),f(F,"isObject",E),f(P,"isPrimitive",I),f(P,"isObject",N);var M="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var C="function"==typeof Float64Array?Float64Array:void 0;var Y=function(){var t,r,e;if("function"!=typeof x)return!1;try{r=new x([1,3.14,-3.14,NaN]),e=r,t=(M&&e instanceof Float64Array||"[object Float64Array]"===_(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};function R(t){var r;if(!I(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0eE8T",t));return r=function(t){var r,e,n,o;if(!I(t))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+t+"`.");return r=new Y(t),e=w,o=-1,n=0,function(i){var u,a;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%t,n<t)n+=1,(k(i)||i<e||i===e&&G(i))&&(e=i);else if(k(i)||i<e)e=i;else if(r[o]===e&&i>e||k(r[o])){for(e=i,a=0;a<t;a++)if(a!==o){if(k(u=r[a])){e=u;break}(u<e||u===e&&G(u))&&(e=u)}}else if(r[o]===e&&i===e&&0===i)if(G(i))e=i;else if(G(r[o]))for(e=i,a=0;a<t;a++)if(a!==o&&G(r[a])){e=r[a];break}return r[o]=i,e}}(t),function(t){if(0===arguments.length)return r();return r(V(t))}}export{R as default};
//# sourceMappingURL=mod.js.map
