import{k as F,g as C,s as _,a as N,b as K,c as j,n as u,d as E,i as R,S as v,e as H}from"./_Uint8Array-ff998874.js";import{bH as m,bI as B,bJ as J,bi as W,bK as Y}from"./index-88c893b2.js";import{c as T,k as p,g as q,a as M,b as Q,d as V,e as X,i as Z}from"./_initCloneObject-8d76f815.js";function k(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}function z(e,t){return e&&T(t,F(t),e)}function ee(e,t){return e&&T(t,p(t),e)}function te(e,t){return T(e,C(e),t)}var re=Object.getOwnPropertySymbols,ne=re?function(e){for(var t=[];e;)N(t,C(e)),e=q(e);return t}:_;const x=ne;function ae(e,t){return T(e,x(e),t)}function oe(e){return K(e,p,x)}var se=Object.prototype,ce=se.hasOwnProperty;function ie(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&ce.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function be(e,t){var n=t?M(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var ge=/\w*$/;function fe(e){var t=new e.constructor(e.source,ge.exec(e));return t.lastIndex=e.lastIndex,t}var I=m?m.prototype:void 0,O=I?I.valueOf:void 0;function ye(e){return O?Object(O.call(e)):{}}var ue="[object Boolean]",Te="[object Date]",le="[object Map]",je="[object Number]",pe="[object RegExp]",Ae="[object Set]",de="[object String]",$e="[object Symbol]",Se="[object ArrayBuffer]",me="[object DataView]",Ie="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",he="[object Int16Array]",Fe="[object Int32Array]",Ce="[object Uint8Array]",Ee="[object Uint8ClampedArray]",Be="[object Uint16Array]",Me="[object Uint32Array]";function xe(e,t,n){var o=e.constructor;switch(t){case Se:return M(e);case ue:case Te:return new o(+e);case me:return be(e,n);case Ie:case Oe:case we:case he:case Fe:case Ce:case Ee:case Be:case Me:return Q(e,n);case le:return new o;case je:case de:return new o(e);case pe:return fe(e);case Ae:return new o;case $e:return ye(e)}}var Le="[object Map]";function Ue(e){return B(e)&&j(e)==Le}var w=u&&u.isMap,Pe=w?E(w):Ue;const De=Pe;var Ge="[object Set]";function _e(e){return B(e)&&j(e)==Ge}var h=u&&u.isSet,Ne=h?E(h):_e;const Ke=Ne;var Re=1,ve=2,He=4,L="[object Arguments]",Je="[object Array]",We="[object Boolean]",Ye="[object Date]",qe="[object Error]",U="[object Function]",Qe="[object GeneratorFunction]",Ve="[object Map]",Xe="[object Number]",P="[object Object]",Ze="[object RegExp]",ke="[object Set]",ze="[object String]",et="[object Symbol]",tt="[object WeakMap]",rt="[object ArrayBuffer]",nt="[object DataView]",at="[object Float32Array]",ot="[object Float64Array]",st="[object Int8Array]",ct="[object Int16Array]",it="[object Int32Array]",bt="[object Uint8Array]",gt="[object Uint8ClampedArray]",ft="[object Uint16Array]",yt="[object Uint32Array]",r={};r[L]=r[Je]=r[rt]=r[nt]=r[We]=r[Ye]=r[at]=r[ot]=r[st]=r[ct]=r[it]=r[Ve]=r[Xe]=r[P]=r[Ze]=r[ke]=r[ze]=r[et]=r[bt]=r[gt]=r[ft]=r[yt]=!0;r[qe]=r[U]=r[tt]=!1;function l(e,t,n,o,g,s){var a,f=t&Re,y=t&ve,D=t&He;if(n&&(a=g?n(e,o,g,s):n(e)),a!==void 0)return a;if(!J(e))return e;var A=W(e);if(A){if(a=ie(e),!f)return V(e,a)}else{var b=j(e),d=b==U||b==Qe;if(R(e))return X(e,f);if(b==P||b==L||d&&!g){if(a=y||d?{}:Z(e),!f)return y?ae(e,ee(a,e)):te(e,z(a,e))}else{if(!r[b])return g?e:{};a=xe(e,b,f)}}s||(s=new v);var $=s.get(e);if($)return $;s.set(e,a),Ke(e)?e.forEach(function(c){a.add(l(c,t,n,c,e,s))}):De(e)&&e.forEach(function(c,i){a.set(i,l(c,t,n,i,e,s))});var G=D?y?oe:H:y?p:F,S=A?void 0:G(e);return k(S||e,function(c,i){S&&(i=c,c=e[i]),Y(a,i,l(c,t,n,i,e,s))}),a}export{l as b};
