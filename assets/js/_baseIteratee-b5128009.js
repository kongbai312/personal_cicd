import{S as _,k as g}from"./_Uint8Array-ff998874.js";import{b as p,h as l,a as y}from"./isEqual-1147e249.js";import{bJ as C,c3 as E,c4 as O,bA as b,b$ as m,bi as I}from"./index-88c893b2.js";var L=1,c=2;function d(n,r,e,i){var t=e.length,o=t,A=!i;if(n==null)return!o;for(n=Object(n);t--;){var f=e[t];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++t<o;){f=e[t];var u=f[0],s=n[u],a=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new _;if(i)var h=i(s,a,u,n,r,R);if(!(h===void 0?p(a,s,L|c,i,R):h))return!1}}return!0}function P(n){return n===n&&!C(n)}function D(n){for(var r=g(n),e=r.length;e--;){var i=r[e],t=n[i];r[e]=[i,t,P(t)]}return r}function M(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function G(n){var r=D(n);return r.length==1&&r[0][2]?M(r[0][0],r[0][1]):function(e){return e===n||d(e,n,r)}}var w=1,F=2;function S(n,r){return E(n)&&P(r)?M(O(n),r):function(e){var i=b(e,n);return i===void 0&&i===r?l(e,n):p(r,i,w|F)}}function $(n){return function(r){return r==null?void 0:r[n]}}function x(n){return function(r){return m(r,n)}}function K(n){return E(n)?$(O(n)):x(n)}function q(n){return typeof n=="function"?n:n==null?y:typeof n=="object"?I(n)?S(n[0],n[1]):G(n):K(n)}export{q as b};
