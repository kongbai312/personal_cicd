import{bR as p,c2 as O,bT as y,ch as x}from"./index-db3bc910.js";import{h as v,e as m,j as w,o as P,U as u}from"./_Uint8Array-d83b655d.js";var i=Object.create,b=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const A=b;function N(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function R(e,n,r,t){var h=!r;r||(r={});for(var a=-1,g=n.length;++a<g;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),h?O(r,o,s):y(r,o,s)}return r}function C(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var T=Object.prototype,U=T.hasOwnProperty;function I(e){if(!p(e))return C(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!U.call(e,t))||r.push(t);return r}function q(e){return m(e)?w(e,!0):I(e)}var K=P(Object.getPrototypeOf,Object);const L=K;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,B=f&&f.exports===d,l=B?x.Buffer:void 0,c=l?l.allocUnsafe:void 0;function D(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function E(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function F(e,n){var r=n?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function G(e){return typeof e.constructor=="function"&&!v(e)?A(L(e)):{}}export{E as a,F as b,R as c,N as d,D as e,L as g,G as i,q as k};
