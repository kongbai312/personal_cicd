import{b_ as q,bH as W,bi as ye,b$ as Ce,c0 as xe,c1 as Se,b4 as le,X,aH as Y,aA as P,i as w,q as k,aL as U,S as ae,b0 as ne,a7 as te,Z as oe,s as O,al as I,ba as A,a5 as Ve,bz as Z,d as L,n as ue,h as R,b as x,j as se,w as ie,e as J,B as C,f as i,z as N,c as S,ae as F,A as z,c2 as D,r as K,Y as Le,aa as re,C as de,D as M,ax as be,k as H,ay as Be,l as Ee,a0 as $e,U as Ie,aN as we,I as Ne,ab as ce}from"./index-b79c19bf.js";import{U as G}from"./index-940e034d.js";import{a as Fe,u as Q}from"./use-form-common-props-567fcc0d.js";import{u as j,a as ve}from"./use-form-item-45f47f7d.js";import{a as ze,h as De,i as Ge}from"./isEqual-a66cfa64.js";import{u as T}from"./index-87c6373a.js";import{j as Te,a as Pe}from"./_Uint8Array-b14802f0.js";function Ue(e,l,o){switch(o.length){case 0:return e.call(l);case 1:return e.call(l,o[0]);case 2:return e.call(l,o[0],o[1]);case 3:return e.call(l,o[0],o[1],o[2])}return e.apply(l,o)}var Oe=800,Ae=16,Me=Date.now;function Re(e){var l=0,o=0;return function(){var a=Me(),s=Ae-(a-o);if(o=a,s>0){if(++l>=Oe)return arguments[0]}else l=0;return e.apply(void 0,arguments)}}function Ke(e){return function(){return e}}var He=q?function(e,l){return q(e,"toString",{configurable:!0,enumerable:!1,value:Ke(l),writable:!0})}:ze;const je=He;var qe=Re(je);const We=qe;var _=Math.max;function Xe(e,l,o){return l=_(l===void 0?e.length-1:l,0),function(){for(var a=arguments,s=-1,b=_(a.length-l,0),c=Array(b);++s<b;)c[s]=a[l+s];s=-1;for(var n=Array(l+1);++s<l;)n[s]=a[s];return n[l]=o(c),Ue(e,this,n)}}var ee=W?W.isConcatSpreadable:void 0;function Ye(e){return ye(e)||Te(e)||!!(ee&&e&&e[ee])}function me(e,l,o,a,s){var b=-1,c=e.length;for(o||(o=Ye),s||(s=[]);++b<c;){var n=e[b];l>0&&o(n)?l>1?me(n,l-1,o,a,s):Pe(s,n):a||(s[s.length]=n)}return s}function Ze(e){var l=e==null?0:e.length;return l?me(e,1):[]}function Je(e){return We(Xe(e,void 0,Ze),e+"")}function Qe(e,l,o){for(var a=-1,s=l.length,b={};++a<s;){var c=l[a],n=Ce(e,c);o(n,c)&&xe(b,Se(c,e),n)}return b}function _e(e,l){return Qe(e,l,function(o,a){return De(e,a)})}var el=Je(function(e,l){return e==null?{}:_e(e,l)});const ll=el,fe={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:le,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},he={[G]:e=>X(e)||Y(e)||P(e),change:e=>X(e)||Y(e)||P(e)},B=Symbol("checkboxGroupContextKey"),al=({model:e,isChecked:l})=>{const o=w(B,void 0),a=k(()=>{var b,c;const n=(b=o==null?void 0:o.max)==null?void 0:b.value,f=(c=o==null?void 0:o.min)==null?void 0:c.value;return!U(n)&&e.value.length>=n&&!l.value||!U(f)&&e.value.length<=f&&l.value});return{isDisabled:Fe(k(()=>(o==null?void 0:o.disabled.value)||a.value)),isLimitDisabled:a}},nl=(e,{model:l,isLimitExceeded:o,hasOwnLabel:a,isDisabled:s,isLabeledByFormItem:b})=>{const c=w(B,void 0),{formItem:n}=j(),{emit:f}=oe();function m(t){var d,p,v,u;return[!0,e.trueValue,e.trueLabel].includes(t)?(p=(d=e.trueValue)!=null?d:e.trueLabel)!=null?p:!0:(u=(v=e.falseValue)!=null?v:e.falseLabel)!=null?u:!1}function r(t,d){f("change",m(t),d)}function h(t){if(o.value)return;const d=t.target;f("change",m(d.checked),t)}async function g(t){o.value||!a.value&&!s.value&&b.value&&(t.composedPath().some(v=>v.tagName==="LABEL")||(l.value=m([!1,e.falseValue,e.falseLabel].includes(l.value)),await te(),r(l.value,t)))}const V=k(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return ae(()=>e.modelValue,()=>{V.value&&(n==null||n.validate("change").catch(t=>ne()))}),{handleChange:h,onClickRoot:g}},tl=e=>{const l=O(!1),{emit:o}=oe(),a=w(B,void 0),s=k(()=>U(a)===!1),b=O(!1),c=k({get(){var n,f;return s.value?(n=a==null?void 0:a.modelValue)==null?void 0:n.value:(f=e.modelValue)!=null?f:l.value},set(n){var f,m;s.value&&I(n)?(b.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&n.length>(a==null?void 0:a.max.value)&&n.length>c.value.length,b.value===!1&&((m=a==null?void 0:a.changeEvent)==null||m.call(a,n))):(o(G,n),l.value=n)}});return{model:c,isGroup:s,isLimitExceeded:b}},ol=(e,l,{model:o})=>{const a=w(B,void 0),s=O(!1),b=k(()=>A(e.value)?e.label:e.value),c=k(()=>{const r=o.value;return P(r)?r:I(r)?Ve(b.value)?r.map(Z).some(h=>Ge(h,b.value)):r.map(Z).includes(b.value):r!=null?r===e.trueValue||r===e.trueLabel:!!r}),n=Q(k(()=>{var r;return(r=a==null?void 0:a.size)==null?void 0:r.value}),{prop:!0}),f=Q(k(()=>{var r;return(r=a==null?void 0:a.size)==null?void 0:r.value})),m=k(()=>!!l.default||!A(b.value));return{checkboxButtonSize:n,isChecked:c,isFocused:s,checkboxSize:f,hasOwnLabel:m,actualValue:b}},ke=(e,l)=>{const{formItem:o}=j(),{model:a,isGroup:s,isLimitExceeded:b}=tl(e),{isFocused:c,isChecked:n,checkboxButtonSize:f,checkboxSize:m,hasOwnLabel:r,actualValue:h}=ol(e,l,{model:a}),{isDisabled:g}=al({model:a,isChecked:n}),{inputId:V,isLabeledByFormItem:t}=ve(e,{formItemContext:o,disableIdGeneration:r,disableIdManagement:s}),{handleChange:d,onClickRoot:p}=nl(e,{model:a,isLimitExceeded:b,hasOwnLabel:r,isDisabled:g,isLabeledByFormItem:t});return(()=>{function u(){var E,$;I(a.value)&&!a.value.includes(h.value)?a.value.push(h.value):a.value=($=(E=e.trueValue)!=null?E:e.trueLabel)!=null?$:!0}e.checked&&u()})(),T({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>s.value&&A(e.value))),T({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.trueLabel)),T({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},k(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:t,isChecked:n,isDisabled:g,isFocused:c,checkboxButtonSize:f,checkboxSize:m,hasOwnLabel:r,model:a,actualValue:h,handleChange:d,onClickRoot:p}},ul=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],sl=["id","indeterminate","disabled","value","name","tabindex"],il=L({name:"ElCheckbox"}),rl=L({...il,props:fe,emits:he,setup(e){const l=e,o=ue(),{inputId:a,isLabeledByFormItem:s,isChecked:b,isDisabled:c,isFocused:n,checkboxSize:f,hasOwnLabel:m,model:r,actualValue:h,handleChange:g,onClickRoot:V}=ke(l,o),t=R("checkbox"),d=k(()=>[t.b(),t.m(f.value),t.is("disabled",c.value),t.is("bordered",l.border),t.is("checked",b.value)]),p=k(()=>[t.e("input"),t.is("disabled",c.value),t.is("checked",b.value),t.is("indeterminate",l.indeterminate),t.is("focus",n.value)]);return(v,u)=>(x(),se(be(!i(m)&&i(s)?"span":"label"),{class:C(i(d)),"aria-controls":v.indeterminate?v.controls:null,onClick:i(V)},{default:ie(()=>{var E,$;return[J("span",{class:C(i(p))},[v.trueValue||v.falseValue||v.trueLabel||v.falseLabel?N((x(),S("input",{key:0,id:i(a),"onUpdate:modelValue":u[0]||(u[0]=y=>F(r)?r.value=y:null),class:C(i(t).e("original")),type:"checkbox",indeterminate:v.indeterminate,name:v.name,tabindex:v.tabindex,disabled:i(c),"true-value":(E=v.trueValue)!=null?E:v.trueLabel,"false-value":($=v.falseValue)!=null?$:v.falseLabel,onChange:u[1]||(u[1]=(...y)=>i(g)&&i(g)(...y)),onFocus:u[2]||(u[2]=y=>n.value=!0),onBlur:u[3]||(u[3]=y=>n.value=!1),onClick:u[4]||(u[4]=z(()=>{},["stop"]))},null,42,ul)),[[D,i(r)]]):N((x(),S("input",{key:1,id:i(a),"onUpdate:modelValue":u[5]||(u[5]=y=>F(r)?r.value=y:null),class:C(i(t).e("original")),type:"checkbox",indeterminate:v.indeterminate,disabled:i(c),value:i(h),name:v.name,tabindex:v.tabindex,onChange:u[6]||(u[6]=(...y)=>i(g)&&i(g)(...y)),onFocus:u[7]||(u[7]=y=>n.value=!0),onBlur:u[8]||(u[8]=y=>n.value=!1),onClick:u[9]||(u[9]=z(()=>{},["stop"]))},null,42,sl)),[[D,i(r)]]),J("span",{class:C(i(t).e("inner"))},null,2)],2),i(m)?(x(),S("span",{key:0,class:C(i(t).e("label"))},[K(v.$slots,"default"),v.$slots.default?M("v-if",!0):(x(),S(Le,{key:0},[re(de(v.label),1)],64))],2)):M("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var dl=H(rl,[["__file","checkbox.vue"]]);const bl=["name","tabindex","disabled","true-value","false-value"],cl=["name","tabindex","disabled","value"],vl=L({name:"ElCheckboxButton"}),ml=L({...vl,props:fe,emits:he,setup(e){const l=e,o=ue(),{isFocused:a,isChecked:s,isDisabled:b,checkboxButtonSize:c,model:n,actualValue:f,handleChange:m}=ke(l,o),r=w(B,void 0),h=R("checkbox"),g=k(()=>{var t,d,p,v;const u=(d=(t=r==null?void 0:r.fill)==null?void 0:t.value)!=null?d:"";return{backgroundColor:u,borderColor:u,color:(v=(p=r==null?void 0:r.textColor)==null?void 0:p.value)!=null?v:"",boxShadow:u?`-1px 0 0 0 ${u}`:void 0}}),V=k(()=>[h.b("button"),h.bm("button",c.value),h.is("disabled",b.value),h.is("checked",s.value),h.is("focus",a.value)]);return(t,d)=>{var p,v;return x(),S("label",{class:C(i(V))},[t.trueValue||t.falseValue||t.trueLabel||t.falseLabel?N((x(),S("input",{key:0,"onUpdate:modelValue":d[0]||(d[0]=u=>F(n)?n.value=u:null),class:C(i(h).be("button","original")),type:"checkbox",name:t.name,tabindex:t.tabindex,disabled:i(b),"true-value":(p=t.trueValue)!=null?p:t.trueLabel,"false-value":(v=t.falseValue)!=null?v:t.falseLabel,onChange:d[1]||(d[1]=(...u)=>i(m)&&i(m)(...u)),onFocus:d[2]||(d[2]=u=>a.value=!0),onBlur:d[3]||(d[3]=u=>a.value=!1),onClick:d[4]||(d[4]=z(()=>{},["stop"]))},null,42,bl)),[[D,i(n)]]):N((x(),S("input",{key:1,"onUpdate:modelValue":d[5]||(d[5]=u=>F(n)?n.value=u:null),class:C(i(h).be("button","original")),type:"checkbox",name:t.name,tabindex:t.tabindex,disabled:i(b),value:i(f),onChange:d[6]||(d[6]=(...u)=>i(m)&&i(m)(...u)),onFocus:d[7]||(d[7]=u=>a.value=!0),onBlur:d[8]||(d[8]=u=>a.value=!1),onClick:d[9]||(d[9]=z(()=>{},["stop"]))},null,42,cl)),[[D,i(n)]]),t.$slots.default||t.label?(x(),S("span",{key:2,class:C(i(h).be("button","inner")),style:Be(i(s)?i(g):void 0)},[K(t.$slots,"default",{},()=>[re(de(t.label),1)])],6)):M("v-if",!0)],2)}}});var pe=H(ml,[["__file","checkbox-button.vue"]]);const fl=Ee({modelValue:{type:$e(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:le,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),hl={[G]:e=>I(e),change:e=>I(e)},kl=L({name:"ElCheckboxGroup"}),pl=L({...kl,props:fl,emits:hl,setup(e,{emit:l}){const o=e,a=R("checkbox"),{formItem:s}=j(),{inputId:b,isLabeledByFormItem:c}=ve(o,{formItemContext:s}),n=async m=>{l(G,m),await te(),l("change",m)},f=k({get(){return o.modelValue},set(m){n(m)}});return Ie(B,{...ll(we(o),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:n}),ae(()=>o.modelValue,()=>{o.validateEvent&&(s==null||s.validate("change").catch(m=>ne()))}),(m,r)=>{var h;return x(),se(be(m.tag),{id:i(b),class:C(i(a).b("group")),role:"group","aria-label":i(c)?void 0:m.label||"checkbox-group","aria-labelledby":i(c)?(h=i(s))==null?void 0:h.labelId:void 0},{default:ie(()=>[K(m.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ge=H(pl,[["__file","checkbox-group.vue"]]);const Bl=Ne(dl,{CheckboxButton:pe,CheckboxGroup:ge});ce(pe);ce(ge);export{Bl as E,me as b,Ze as f,Xe as o,We as s};
