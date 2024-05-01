"use strict";var s=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var o=s(function(k,f){
var y=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-positive-zero/dist');function P(u,r,v){var t,a,e,i;if(u<=0)return NaN;if(u===1||v===0)return r[0];for(v<0?a=(1-u)*v:a=0,t=r[a],i=1;i<u;i++){if(a+=v,e=r[a],y(e))return e;(e>t||e===t&&l(e))&&(t=e)}return t}f.exports=P
});var x=s(function(w,q){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist');function R(u,r,v,t){var a,e,i,n;if(u<=0)return NaN;if(u===1||v===0)return r[t];for(e=t,a=r[e],n=1;n<u;n++){if(e+=v,i=r[e],Z(i))return i;(i>a||i===a&&O(i))&&(a=i)}return a}q.exports=R
});var p=s(function(z,m){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=o(),g=x();b(c,"ndarray",g);m.exports=c
});var h=p();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
