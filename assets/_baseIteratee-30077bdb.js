import{S as h,k as M}from"./_Uint8Array-d83b655d.js";import{b as E}from"./isEqual-d0f802a7.js";import{bR as c,cd as O,ce as P,bF as l,cf as y,cg as C,b_ as b,bS as d}from"./index-db3bc910.js";var m=1,I=2;function L(n,r,e,t){var i=e.length,o=i,A=!t;if(n==null)return!o;for(n=Object(n);i--;){var f=e[i];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<o;){f=e[i];var u=f[0],s=n[u],a=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new h;if(t)var p=t(s,a,u,n,r,R);if(!(p===void 0?E(a,s,m|I,t,R):p))return!1}}return!0}function _(n){return n===n&&!c(n)}function D(n){for(var r=M(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,_(i)]}return r}function g(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function F(n){var r=D(n);return r.length==1&&r[0][2]?g(r[0][0],r[0][1]):function(e){return e===n||L(e,n,r)}}var G=1,S=2;function w(n,r){return O(n)&&_(r)?g(P(n),r):function(e){var t=l(e,n);return t===void 0&&t===r?y(e,n):E(r,t,G|S)}}function x(n){return function(r){return r==null?void 0:r[n]}}function K(n){return function(r){return C(r,n)}}function N(n){return O(n)?x(P(n)):K(n)}function q(n){return typeof n=="function"?n:n==null?b:typeof n=="object"?d(n)?w(n[0],n[1]):F(n):N(n)}export{q as b};
