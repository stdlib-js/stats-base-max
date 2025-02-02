"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=c(function(C,f){
var P=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-positive-zero/dist');function d(e,r,t,s){var u,v,n,a,i,o;if(u=r.data,v=r.accessors[0],e===1||t===0)return v(u,s);for(a=s,n=v(u,a),o=1;o<e;o++){if(a+=t,i=v(u,a),P(i))return i;(i>n||i===n&&b(i))&&(n=i)}return n}f.exports=d
});var q=c(function(D,m){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),k=x();function O(e,r,t,s){var u,v,n,a,i;if(e<=0)return NaN;if(n=j(r),n.accessorProtocol)return k(e,n,t,s);if(e===1||t===0)return r[s];for(v=s,u=r[v],i=1;i<e;i++){if(v+=t,a=r[v],Z(a))return a;(a>u||a===u&&g(a))&&(u=a)}return u}m.exports=O
});var p=c(function(E,y){
var R=require('@stdlib/strided-base-stride2offset/dist'),h=q();function w(e,r,t){return h(e,r,t,R(e,t))}y.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=p(),A=q();z(l,"ndarray",A);module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
