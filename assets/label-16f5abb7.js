import{d as y,q as x,o as k,a as E,n as v,u as w,b as n,c as d,x as A,w as i,Y as C,ad as I,f as p,i as M,aa as B,B as L,_ as S}from"./index-f972153d.js";import{E as D}from"./el-card-257e26a7.js";/* empty css               */import{a as N}from"./index-b7707c8f.js";import{E as T}from"./index-3363adfd.js";import"./axios-4d564c32.js";import"./_commonjsHelpers-725317a4.js";import"./use-form-common-props-c0a10bdd.js";import"./constants-84857360.js";const V={class:"label_container"},$=y({__name:"label",setup(j){let l=["","success","info","danger","warning"],c=x([]);const _=async()=>{let a=await N();u(a.data)},u=a=>{let r=[];a.forEach(t=>{t.tags.forEach(o=>{r.findIndex(g=>g===o)===-1&&r.push(o)})});let e,s;r.forEach(t=>{if(e=Math.round(Math.random()*(l.length-1)),e===s)for(;e===s;)e=Math.round(Math.random()*(l.length-1));let o={type:l[e],label:t};c.value.push(o),s=e})};k(()=>{_()});const f=E();let m=v(()=>f.themeStatus);const h=w(),b=a=>{h.push(`/labelList/${a}`)};return(a,r)=>{const e=T,s=D;return n(),d("div",V,[A(s,{shadow:"hover",class:"label_elCard"},{default:i(()=>[(n(!0),d(C,null,I(p(c),t=>(n(),M(e,{key:t.label,type:t.type,size:"large",effect:p(m)?"dark":"plain",class:"tagItem",onClick:o=>b(t.label)},{default:i(()=>[B(L(t.label),1)]),_:2},1032,["type","effect","onClick"]))),128))]),_:1})])}}});const K=S($,[["__scopeId","data-v-fa45dc50"]]);export{K as default};
