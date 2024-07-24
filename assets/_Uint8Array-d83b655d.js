import{cs as l,ch as i,ct as U,c4 as D,bQ as L,c1 as m,cu as F,bS as k,c3 as G,b$ as K,cv as _,cw as y,ci as W,bO as R,cx as c}from"./index-db3bc910.js";var q=l(i,"WeakMap");const v=q;function N(t){return t!=null&&U(t.length)&&!D(t)}var H=Object.prototype;function Q(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||H;return t===e}function Y(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}function Z(){return!1}var E=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=E&&typeof module=="object"&&module&&!module.nodeType&&module,J=w&&w.exports===E,$=J?i.Buffer:void 0,X=$?$.isBuffer:void 0,tt=X||Z;const et=tt;var rt="[object Arguments]",at="[object Array]",nt="[object Boolean]",ot="[object Date]",st="[object Error]",it="[object Function]",ct="[object Map]",ut="[object Number]",pt="[object Object]",ft="[object RegExp]",gt="[object Set]",bt="[object String]",yt="[object WeakMap]",lt="[object ArrayBuffer]",dt="[object DataView]",Tt="[object Float32Array]",vt="[object Float64Array]",ht="[object Int8Array]",jt="[object Int16Array]",At="[object Int32Array]",mt="[object Uint8Array]",_t="[object Uint8ClampedArray]",wt="[object Uint16Array]",$t="[object Uint32Array]",a={};a[Tt]=a[vt]=a[ht]=a[jt]=a[At]=a[mt]=a[_t]=a[wt]=a[$t]=!0;a[rt]=a[at]=a[lt]=a[nt]=a[dt]=a[ot]=a[st]=a[it]=a[ct]=a[ut]=a[pt]=a[ft]=a[gt]=a[bt]=a[yt]=!1;function xt(t){return L(t)&&U(t.length)&&!!a[m(t)]}function St(t){return function(r){return t(r)}}var z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=z&&typeof module=="object"&&module&&!module.nodeType&&module,Ot=g&&g.exports===z,T=Ot&&F.process,Pt=function(){try{var t=g&&g.require&&g.require("util").types;return t||T&&T.binding&&T.binding("util")}catch{}}();const x=Pt;var S=x&&x.isTypedArray,Mt=S?St(S):xt;const Ct=Mt;var It=Object.prototype,Bt=It.hasOwnProperty;function Ut(t,r){var e=k(t),n=!e&&G(t),u=!e&&!n&&et(t),p=!e&&!n&&!u&&Ct(t),f=e||n||u||p,d=f?Y(t.length,String):[],V=d.length;for(var o in t)(r||Bt.call(t,o))&&!(f&&(o=="length"||u&&(o=="offset"||o=="parent")||p&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||K(o,V)))&&d.push(o);return d}function kt(t,r){return function(e){return t(r(e))}}var Et=kt(Object.keys,Object);const zt=Et;var Vt=Object.prototype,Dt=Vt.hasOwnProperty;function Lt(t){if(!Q(t))return zt(t);var r=[];for(var e in Object(t))Dt.call(t,e)&&e!="constructor"&&r.push(e);return r}function Ft(t){return N(t)?Ut(t):Lt(t)}function Gt(){this.__data__=new _,this.size=0}function Kt(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function Wt(t){return this.__data__.get(t)}function Rt(t){return this.__data__.has(t)}var qt=200;function Nt(t,r){var e=this.__data__;if(e instanceof _){var n=e.__data__;if(!y||n.length<qt-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new W(n)}return e.set(t,r),this.size=e.size,this}function b(t){var r=this.__data__=new _(t);this.size=r.size}b.prototype.clear=Gt;b.prototype.delete=Kt;b.prototype.get=Wt;b.prototype.has=Rt;b.prototype.set=Nt;function Ht(t,r){for(var e=-1,n=t==null?0:t.length,u=0,p=[];++e<n;){var f=t[e];r(f,e,t)&&(p[u++]=f)}return p}function Qt(){return[]}var Yt=Object.prototype,Zt=Yt.propertyIsEnumerable,O=Object.getOwnPropertySymbols,Jt=O?function(t){return t==null?[]:(t=Object(t),Ht(O(t),function(r){return Zt.call(t,r)}))}:Qt;const Xt=Jt;function te(t,r,e){var n=r(t);return k(t)?n:R(n,e(t))}function ge(t){return te(t,Ft,Xt)}var ee=l(i,"DataView");const h=ee;var re=l(i,"Promise");const j=re;var ae=l(i,"Set");const A=ae;var P="[object Map]",ne="[object Object]",M="[object Promise]",C="[object Set]",I="[object WeakMap]",B="[object DataView]",oe=c(h),se=c(y),ie=c(j),ce=c(A),ue=c(v),s=m;(h&&s(new h(new ArrayBuffer(1)))!=B||y&&s(new y)!=P||j&&s(j.resolve())!=M||A&&s(new A)!=C||v&&s(new v)!=I)&&(s=function(t){var r=m(t),e=r==ne?t.constructor:void 0,n=e?c(e):"";if(n)switch(n){case oe:return B;case se:return P;case ie:return M;case ce:return C;case ue:return I}return r});const be=s;var pe=i.Uint8Array;const ye=pe;export{b as S,ye as U,be as a,te as b,St as c,ge as d,N as e,Ct as f,Xt as g,Q as h,et as i,Ut as j,Ft as k,x as n,kt as o,Qt as s};