import{l as me,a0 as P,a1 as pe,aH as ce,d as se,cm as ve,cn as Ie,co as _e,v as ge,h as ye,aB as ze,s as b,cp as Le,aF as Se,q as g,S as ue,a7 as we,o as be,b as w,j as de,y as u,w as z,e as y,B as d,f as e,ay as fe,A as Ce,D as L,E as N,F as Ee,c as E,Y as te,aJ as Ne,Q as xe,cq as Oe,bs as Te,ax as $e,cr as Ae,cs as Be,ad as Ve,z as Me,G as Re,r as ae,T as Ye,H as De,k as ke,J as A,bM as B,ct as Xe,I as he,b5 as Fe,at as H,C as He,m as Pe,bY as je,X as Ke,cu as qe}from"./index-88c893b2.js";import{t as ie}from"./throttle-9af60687.js";import{u as We}from"./index-9792e87f.js";import{i as Ge}from"./position-b8052de6.js";import{a as Je}from"./scroll-cbf38af8.js";const Ze=me({urlList:{type:P(Array),default:()=>pe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:P(String)}}),Qe={close:()=>!0,switch:m=>ce(m),rotate:m=>ce(m)},Ue=["src","crossorigin"],ea=se({name:"ElImageViewer"}),aa=se({...ea,props:Ze,emits:Qe,setup(m,{expose:x,emit:f}){var V;const c=m,p={CONTAIN:{name:"contain",icon:ve(Ie)},ORIGINAL:{name:"original",icon:ve(_e)}},{t:ne}=ge(),l=ye("image-viewer"),{nextZIndex:M}=ze(),S=b(),C=b([]),O=Le(),k=b(!0),r=b(c.initialIndex),T=Se(p.CONTAIN),n=b({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),R=b((V=c.zIndex)!=null?V:M()),oe=g(()=>{const{urlList:t}=c;return t.length<=1}),j=g(()=>r.value===0),K=g(()=>r.value===c.urlList.length-1),Y=g(()=>c.urlList[r.value]),le=g(()=>[l.e("btn"),l.e("prev"),l.is("disabled",!c.infinite&&j.value)]),q=g(()=>[l.e("btn"),l.e("next"),l.is("disabled",!c.infinite&&K.value)]),D=g(()=>{const{scale:t,deg:s,offsetX:o,offsetY:h,enableTransition:_}=n.value;let v=o/t,I=h/t;switch(s%360){case 90:case-270:[v,I]=[I,-v];break;case 180:case-180:[v,I]=[-v,-I];break;case 270:case-90:[v,I]=[-I,v];break}const $={transform:`scale(${t}) rotate(${s}deg) translate(${v}px, ${I}px)`,transition:_?"transform .3s":""};return T.value.name===p.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$});function X(){W(),f("close")}function re(){const t=ie(o=>{switch(o.code){case A.esc:c.closeOnPressEscape&&X();break;case A.space:U();break;case A.left:ee();break;case A.up:i("zoomIn");break;case A.right:a();break;case A.down:i("zoomOut");break}}),s=ie(o=>{const h=o.deltaY||o.deltaX;i(h<0?"zoomIn":"zoomOut",{zoomRate:c.zoomRate,enableTransition:!1})});O.run(()=>{B(document,"keydown",t),B(document,"wheel",s)})}function W(){O.stop()}function G(){k.value=!1}function J(t){k.value=!1,t.target.alt=ne("el.image.error")}function Z(t){if(k.value||t.button!==0||!S.value)return;n.value.enableTransition=!1;const{offsetX:s,offsetY:o}=n.value,h=t.pageX,_=t.pageY,v=ie($=>{n.value={...n.value,offsetX:s+$.pageX-h,offsetY:o+$.pageY-_}}),I=B(document,"mousemove",v);B(document,"mouseup",()=>{I()}),t.preventDefault()}function Q(){n.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function U(){if(k.value)return;const t=Xe(p),s=Object.values(p),o=T.value.name,_=(s.findIndex(v=>v.name===o)+1)%t.length;T.value=p[t[_]],Q()}function F(t){const s=c.urlList.length;r.value=(t+s)%s}function ee(){j.value&&!c.infinite||F(r.value-1)}function a(){K.value&&!c.infinite||F(r.value+1)}function i(t,s={}){if(k.value)return;const{minScale:o,maxScale:h}=c,{zoomRate:_,rotateDeg:v,enableTransition:I}={zoomRate:c.zoomRate,rotateDeg:90,enableTransition:!0,...s};switch(t){case"zoomOut":n.value.scale>o&&(n.value.scale=Number.parseFloat((n.value.scale/_).toFixed(3)));break;case"zoomIn":n.value.scale<h&&(n.value.scale=Number.parseFloat((n.value.scale*_).toFixed(3)));break;case"clockwise":n.value.deg+=v,f("rotate",n.value.deg);break;case"anticlockwise":n.value.deg-=v,f("rotate",n.value.deg);break}n.value.enableTransition=I}return ue(Y,()=>{we(()=>{const t=C.value[0];t!=null&&t.complete||(k.value=!0)})}),ue(r,t=>{Q(),f("switch",t)}),be(()=>{var t,s;re(),(s=(t=S.value)==null?void 0:t.focus)==null||s.call(t)}),x({setActiveItem:F}),(t,s)=>(w(),de(De,{to:"body",disabled:!t.teleported},[u(Ye,{name:"viewer-fade",appear:""},{default:z(()=>[y("div",{ref_key:"wrapper",ref:S,tabindex:-1,class:d(e(l).e("wrapper")),style:fe({zIndex:R.value})},[y("div",{class:d(e(l).e("mask")),onClick:s[0]||(s[0]=Ce(o=>t.hideOnClickModal&&X(),["self"]))},null,2),L(" CLOSE "),y("span",{class:d([e(l).e("btn"),e(l).e("close")]),onClick:X},[u(e(N),null,{default:z(()=>[u(e(Ee))]),_:1})],2),L(" ARROW "),e(oe)?L("v-if",!0):(w(),E(te,{key:0},[y("span",{class:d(e(le)),onClick:ee},[u(e(N),null,{default:z(()=>[u(e(Ne))]),_:1})],2),y("span",{class:d(e(q)),onClick:a},[u(e(N),null,{default:z(()=>[u(e(xe))]),_:1})],2)],64)),L(" ACTIONS "),y("div",{class:d([e(l).e("btn"),e(l).e("actions")])},[y("div",{class:d(e(l).e("actions__inner"))},[u(e(N),{onClick:s[1]||(s[1]=o=>i("zoomOut"))},{default:z(()=>[u(e(Oe))]),_:1}),u(e(N),{onClick:s[2]||(s[2]=o=>i("zoomIn"))},{default:z(()=>[u(e(Te))]),_:1}),y("i",{class:d(e(l).e("actions__divider"))},null,2),u(e(N),{onClick:U},{default:z(()=>[(w(),de($e(e(T).icon)))]),_:1}),y("i",{class:d(e(l).e("actions__divider"))},null,2),u(e(N),{onClick:s[3]||(s[3]=o=>i("anticlockwise"))},{default:z(()=>[u(e(Ae))]),_:1}),u(e(N),{onClick:s[4]||(s[4]=o=>i("clockwise"))},{default:z(()=>[u(e(Be))]),_:1})],2)],2),L(" CANVAS "),y("div",{class:d(e(l).e("canvas"))},[(w(!0),E(te,null,Ve(t.urlList,(o,h)=>Me((w(),E("img",{ref_for:!0,ref:_=>C.value[h]=_,key:o,src:o,style:fe(e(D)),class:d(e(l).e("img")),crossorigin:t.crossorigin,onLoad:G,onError:J,onMousedown:Z},null,46,Ue)),[[Re,h===r.value]])),128))],2),ae(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ta=ke(aa,[["__file","image-viewer.vue"]]);const sa=he(ta),na=me({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:P([String,Object])},previewSrcList:{type:P(Array),default:()=>pe([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:P(String)}}),oa={load:m=>m instanceof Event,error:m=>m instanceof Event,switch:m=>ce(m),close:()=>!0,show:()=>!0},la=["src","loading","crossorigin"],ra={key:0},ia=se({name:"ElImage",inheritAttrs:!1}),ca=se({...ia,props:na,emits:oa,setup(m,{emit:x}){const f=m;let V="";const{t:c}=ge(),p=ye("image"),ne=Fe(),l=We(),M=b(),S=b(!1),C=b(!0),O=b(!1),k=b(),r=b(),T=H&&"loading"in HTMLImageElement.prototype;let n,R;const oe=g(()=>[p.e("inner"),Y.value&&p.e("preview"),C.value&&p.is("loading")]),j=g(()=>ne.style),K=g(()=>{const{fit:a}=f;return H&&a?{objectFit:a}:{}}),Y=g(()=>{const{previewSrcList:a}=f;return Array.isArray(a)&&a.length>0}),le=g(()=>{const{previewSrcList:a,initialIndex:i}=f;let t=i;return i>a.length-1&&(t=0),t}),q=g(()=>f.loading==="eager"?!1:!T&&f.loading==="lazy"||f.lazy),D=()=>{H&&(C.value=!0,S.value=!1,M.value=f.src)};function X(a){C.value=!1,S.value=!1,x("load",a)}function re(a){C.value=!1,S.value=!0,x("error",a)}function W(){Ge(k.value,r.value)&&(D(),Z())}const G=qe(W,200,!0);async function J(){var a;if(!H)return;await we();const{scrollContainer:i}=f;je(i)?r.value=i:Ke(i)&&i!==""?r.value=(a=document.querySelector(i))!=null?a:void 0:k.value&&(r.value=Je(k.value)),r.value&&(n=B(r,"scroll",G),setTimeout(()=>W(),100))}function Z(){!H||!r.value||!G||(n==null||n(),r.value=void 0)}function Q(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function U(){Y.value&&(R=B("wheel",Q,{passive:!1}),V=document.body.style.overflow,document.body.style.overflow="hidden",O.value=!0,x("show"))}function F(){R==null||R(),document.body.style.overflow=V,O.value=!1,x("close")}function ee(a){x("switch",a)}return ue(()=>f.src,()=>{q.value?(C.value=!0,S.value=!1,Z(),J()):D()}),be(()=>{q.value?J():D()}),(a,i)=>(w(),E("div",{ref_key:"container",ref:k,class:d([e(p).b(),a.$attrs.class]),style:fe(e(j))},[S.value?ae(a.$slots,"error",{key:0},()=>[y("div",{class:d(e(p).e("error"))},He(e(c)("el.image.error")),3)]):(w(),E(te,{key:1},[M.value!==void 0?(w(),E("img",Pe({key:0},e(l),{src:M.value,loading:a.loading,style:e(K),class:e(oe),crossorigin:a.crossorigin,onClick:U,onLoad:X,onError:re}),null,16,la)):L("v-if",!0),C.value?(w(),E("div",{key:1,class:d(e(p).e("wrapper"))},[ae(a.$slots,"placeholder",{},()=>[y("div",{class:d(e(p).e("placeholder"))},null,2)])],2)):L("v-if",!0)],64)),e(Y)?(w(),E(te,{key:2},[O.value?(w(),de(e(sa),{key:0,"z-index":a.zIndex,"initial-index":e(le),infinite:a.infinite,"zoom-rate":a.zoomRate,"min-scale":a.minScale,"max-scale":a.maxScale,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:F,onSwitch:ee},{default:z(()=>[a.$slots.viewer?(w(),E("div",ra,[ae(a.$slots,"viewer")])):L("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):L("v-if",!0)],64)):L("v-if",!0)],6))}});var ua=ke(ca,[["__file","image.vue"]]);const ga=he(ua);export{ga as E};
