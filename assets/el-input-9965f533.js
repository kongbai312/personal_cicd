import{au as ke,s as N,aG as X,U as Z,bT as je,as as Ke,$ as Ue,aI as we,k as We,b6 as Ye,a1 as ae,N as Se,a2 as Ge,b8 as qe,Y as oe,d as Fe,b9 as Xe,l as Ze,q as p,h as Ce,bG as Je,bU as Qe,bV as _e,a7 as et,a5 as tt,a8 as P,b1 as Ie,o as at,n as ot,a9 as nt,b as f,c as S,D as m,Z as ne,B as b,f as t,r as Y,e as V,i as I,w as A,ay as G,E as H,m as se,y as st,b5 as lt,A as it,ax as rt,C as q,az as ut,j as dt,a6 as ze,I as ct}from"./index-d2b4de26.js";import{U as le}from"./index-6ab34334.js";import{u as pt}from"./index-401663dd.js";import{u as ft,a as vt}from"./use-form-item-38570057.js";import{u as mt,a as ht}from"./use-form-common-props-f0a678e4.js";const bt=()=>ke&&/firefox/i.test(window.navigator.userAgent),yt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o);function gt(o){const v=N();function u(){if(o.value==null)return;const{selectionStart:i,selectionEnd:r,value:d}=o.value;if(i==null||r==null)return;const y=d.slice(0,Math.max(0,i)),c=d.slice(Math.max(0,r));v.value={selectionStart:i,selectionEnd:r,value:d,beforeTxt:y,afterTxt:c}}function a(){if(o.value==null||v.value==null)return;const{value:i}=o.value,{beforeTxt:r,afterTxt:d,selectionStart:y}=v.value;if(r==null||d==null||y==null)return;let c=i.length;if(i.endsWith(d))c=i.length-d.length;else if(i.startsWith(r))c=r.length;else{const x=r[y-1],w=i.indexOf(x,y-1);w!==-1&&(c=w+1)}o.value.setSelectionRange(c,c)}return[u,a]}function xt(o,{afterFocus:v,beforeBlur:u,afterBlur:a}={}){const i=Ue(),{emit:r}=i,d=X(),y=N(!1),c=l=>{y.value||(y.value=!0,r("focus",l),v==null||v())},x=l=>{var T;Ke(u)&&u(l)||l.relatedTarget&&((T=d.value)!=null&&T.contains(l.relatedTarget))||(y.value=!1,r("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return Z(d,l=>{l&&l.setAttribute("tabindex","-1")}),je(d,"click",w),{wrapperRef:d,isFocused:y,handleFocus:c,handleBlur:x}}let g;const wt=`
  height:0 !important;
  visibility:hidden !important;
  ${bt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,St=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Ct(o){const v=window.getComputedStyle(o),u=v.getPropertyValue("box-sizing"),a=Number.parseFloat(v.getPropertyValue("padding-bottom"))+Number.parseFloat(v.getPropertyValue("padding-top")),i=Number.parseFloat(v.getPropertyValue("border-bottom-width"))+Number.parseFloat(v.getPropertyValue("border-top-width"));return{contextStyle:St.map(d=>`${d}:${v.getPropertyValue(d)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:u}}function Ee(o,v=1,u){var a;g||(g=document.createElement("textarea"),document.body.appendChild(g));const{paddingSize:i,borderSize:r,boxSizing:d,contextStyle:y}=Ct(o);g.setAttribute("style",`${y};${wt}`),g.value=o.value||o.placeholder||"";let c=g.scrollHeight;const x={};d==="border-box"?c=c+r:d==="content-box"&&(c=c-i),g.value="";const w=g.scrollHeight-i;if(we(v)){let l=w*v;d==="border-box"&&(l=l+i+r),c=Math.max(l,c),x.minHeight=`${l}px`}if(we(u)){let l=w*u;d==="border-box"&&(l=l+i+r),c=Math.min(l,c)}return x.height=`${c}px`,(a=g.parentNode)==null||a.removeChild(g),g=void 0,x}const It=We({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>Ge({})},autofocus:{type:Boolean,default:!1},...qe(["ariaLabel"])}),zt={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Et=["role"],kt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Ft=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Pt=Fe({name:"ElInput",inheritAttrs:!1}),Vt=Fe({...Pt,props:It,emits:zt,setup(o,{expose:v,emit:u}){const a=o,i=Xe(),r=Ze(),d=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e}),y=p(()=>[a.type==="textarea"?re.b():s.b(),s.m(ie.value),s.is("disabled",E.value),s.is("exceed",Te.value),{[s.b("group")]:r.prepend||r.append,[s.bm("group","append")]:r.append,[s.bm("group","prepend")]:r.prepend,[s.m("prefix")]:r.prefix||a.prefixIcon,[s.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:U.value&&_.value,[s.b("hidden")]:a.type==="hidden"},i.class]),c=p(()=>[s.e("wrapper"),s.is("focus",Q.value)]),x=pt({excludeKeys:p(()=>Object.keys(d.value))}),{form:w,formItem:l}=ft(),{inputId:T}=vt(a,{formItemContext:l}),ie=mt(),E=ht(),s=Ce("input"),re=Ce("textarea"),L=X(),C=X(),J=N(!1),B=N(!1),O=N(!1),ue=N(),D=X(a.inputStyle),k=p(()=>L.value||C.value),{wrapperRef:Pe,isFocused:Q,handleFocus:j,handleBlur:K}=xt(k,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ie()))}}),de=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),R=p(()=>(l==null?void 0:l.validateState)||""),ce=p(()=>R.value&&Je[R.value]),Ve=p(()=>O.value?Qe:_e),Ne=p(()=>[i.style]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),z=p(()=>et(a.modelValue)?"":String(a.modelValue)),U=p(()=>a.clearable&&!E.value&&!a.readonly&&!!z.value&&(Q.value||J.value)),_=p(()=>a.showPassword&&!E.value&&!a.readonly&&!!z.value&&(!!z.value||Q.value)),F=p(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!E.value&&!a.readonly&&!a.showPassword),ee=p(()=>z.value.length),Te=p(()=>!!F.value&&ee.value>Number(a.maxlength)),Be=p(()=>!!r.suffix||!!a.suffixIcon||U.value||a.showPassword||F.value||!!R.value&&de.value),[Re,$e]=gt(L);tt(C,e=>{if(Me(),!F.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const $=()=>{const{type:e,autosize:n}=a;if(!(!ke||e!=="textarea"||!C.value))if(n){const h=ze(n)?n.minRows:void 0,W=ze(n)?n.maxRows:void 0,xe=Ee(C.value,h,W);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:Ee(C.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})($),M=()=>{const e=k.value,n=a.formatter?a.formatter(z.value):z.value;!e||e.value===n||(e.value=n)},te=async e=>{Re();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!B.value){if(n===z.value){M();return}u(le,n),u("input",n),await P(),M(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),B.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,W=h[h.length-1]||"";B.value=!yt(W)},he=e=>{u("compositionend",e),B.value&&(B.value=!1,te(e))},Ae=()=>{O.value=!O.value,be()},be=async()=>{var e;await P(),(e=k.value)==null||e.focus()},He=()=>{var e;return(e=k.value)==null?void 0:e.blur()},Le=e=>{J.value=!1,u("mouseleave",e)},Oe=e=>{J.value=!0,u("mouseenter",e)},ye=e=>{u("keydown",e)},De=()=>{var e;(e=k.value)==null||e.select()},ge=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return Z(()=>a.modelValue,()=>{var e;P(()=>$()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ie()))}),Z(z,()=>M()),Z(()=>a.type,async()=>{await P(),M(),$()}),at(()=>{!a.formatter&&a.parser,M(),P($)}),ot({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},p(()=>!!a.label)),v({input:L,textarea:C,ref:k,textareaStyle:pe,autosize:nt(a,"autosize"),focus:be,blur:He,select:De,clear:ge,resizeTextarea:$}),(e,n)=>(f(),S("div",se(t(d),{class:t(y),style:t(Ne),role:e.containerRole,onMouseenter:Oe,onMouseleave:Le}),[m(" input "),e.type!=="textarea"?(f(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(f(),S("div",{key:0,class:b(t(s).be("group","prepend"))},[Y(e.$slots,"prepend")],2)):m("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Pe,class:b(t(c))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(f(),S("span",{key:0,class:b(t(s).e("prefix"))},[V("span",{class:b(t(s).e("prefix-inner"))},[Y(e.$slots,"prefix"),e.prefixIcon?(f(),I(t(H),{key:0,class:b(t(s).e("icon"))},{default:A(()=>[(f(),I(G(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),V("input",se({id:t(T),ref_key:"input",ref:L,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(K)&&t(K)(...h)),onChange:fe,onKeydown:ye}),null,16,kt),m(" suffix slot "),t(Be)?(f(),S("span",{key:1,class:b(t(s).e("suffix"))},[V("span",{class:b(t(s).e("suffix-inner"))},[!t(U)||!t(_)||!t(F)?(f(),S(ne,{key:0},[Y(e.$slots,"suffix"),e.suffixIcon?(f(),I(t(H),{key:0,class:b(t(s).e("icon"))},{default:A(()=>[(f(),I(G(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(U)?(f(),I(t(H),{key:1,class:b([t(s).e("icon"),t(s).e("clear")]),onMousedown:it(t(rt),["prevent"]),onClick:ge},{default:A(()=>[st(t(lt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(_)?(f(),I(t(H),{key:2,class:b([t(s).e("icon"),t(s).e("password")]),onClick:Ae},{default:A(()=>[(f(),I(G(t(Ve))))]),_:1},8,["class"])):m("v-if",!0),t(F)?(f(),S("span",{key:3,class:b(t(s).e("count"))},[V("span",{class:b(t(s).e("count-inner"))},q(t(ee))+" / "+q(e.maxlength),3)],2)):m("v-if",!0),t(R)&&t(ce)&&t(de)?(f(),I(t(H),{key:4,class:b([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(R)==="validating")])},{default:A(()=>[(f(),I(G(t(ce))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(f(),S("div",{key:1,class:b(t(s).be("group","append"))},[Y(e.$slots,"append")],2)):m("v-if",!0)],64)):(f(),S(ne,{key:1},[m(" textarea "),V("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:t(re).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(E),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label||e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(j)&&t(j)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(K)&&t(K)(...h)),onChange:fe,onKeydown:ye}),null,16,Ft),t(F)?(f(),S("span",{key:0,style:ut(ue.value),class:b(t(s).e("count"))},q(t(ee))+" / "+q(e.maxlength),7)):m("v-if",!0)],64))],16,Et))}});var Nt=dt(Vt,[["__file","input.vue"]]);const Ht=ct(Nt);export{Ht as E,yt as i,xt as u};
