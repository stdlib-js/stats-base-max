// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).max=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?l:c;var p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})};var d=function(e){return e!=e},b=Number.POSITIVE_INFINITY;var y=function(e){return 0===e&&1/e===b},s=d,v=y;var m=function(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(n=r[o=t<0?(1-e)*t:0],i=1;i<e;i++){if(a=r[o+=t],s(a))return a;(a>n||a===n&&v(a))&&(n=a)}return n},j=d,g=y;var h=function(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(o=r[a=n],u=1;u<e;u++){if(i=r[a+=t],j(i))return i;(i>o||i===o&&g(i))&&(o=i)}return o},w=m;return p(w,"ndarray",h),w}));
//# sourceMappingURL=bundle.js.map
