import{d as w,s as y,o as L,b as e,c as n,y as c,f as m,e as t,w as p,Z as h,ae as u,i as f,C as a,D as C,ab as g,p as B,g as E,_ as T}from"./index-db3bc910.js";import{E as V}from"./el-card-fd86bda8.js";import{E as N}from"./el-image-viewer-6aa38c3a.js";import{_ as S}from"./pr_headerImg-3c38523d.js";import{e as z}from"./index-2cf6b76b.js";import"./throttle-d9a145ec.js";import"./debounce-abb2d009.js";import"./index-c818adb1.js";import"./position-650cd6ba.js";import"./scroll-e59f85c1.js";import"./axios-9cbf0d09.js";import"./_commonjsHelpers-725317a4.js";const D=""+new URL("bigV-e1c9d3d0.png",import.meta.url).href,i=o=>(B("data-v-afb5027e"),o=o(),E(),o),A={class:"talk_container"},j={class:"talk_content"},F={class:"talkItem"},M={class:"talkItem_header"},R={class:"header_content"},U={class:"name"},Z=i(()=>t("img",{class:"nameImg",src:D,alt:""},null,-1)),q={class:"createTime"},G={class:"talkItem_content"},H={class:"text"},J={key:0,class:"imgBox"},K={class:"discord"},O={class:"discordItem"},P=i(()=>t("i",{class:"iconfont icon-dianzan"},null,-1)),Q={class:"discordItem"},W=i(()=>t("i",{class:"iconfont icon-pinglun"},null,-1)),X=w({__name:"talk",setup(o){let v="https://img-baofun.zhhainiao.com/fs/bfec7f6af878a00db3eca7706ae983aa.jpg",l=y();const k=async()=>{let r=await z();l.value=r.data.reverse()};return L(()=>{k()}),(r,Y)=>{const I=S,_=N,d=V;return e(),n("div",A,[c(I,{img:m(v),titleArr:["说","说"]},null,8,["img"]),t("div",j,[c(d,{shadow:"hover",class:"talkList"},{default:p(()=>[(e(!0),n(h,null,u(m(l),s=>(e(),f(d,{shadow:"hover",class:"talkItem_elCard",key:s.id},{default:p(()=>[t("div",F,[t("div",M,[c(_,{fit:"cover",class:"headerImg",src:s.avatar,alt:""},null,8,["src"]),t("div",R,[t("div",U,[t("span",null,a(s.name),1),Z]),t("span",q,a(s.createTime),1)])]),t("div",G,[t("span",H,a(s.text),1),s.imageList.length>0?(e(),n("div",J,[(e(!0),n(h,null,u(s.imageList,(x,b)=>(e(),f(_,{lazy:"",fit:"cover",class:"imgItem",src:x,"preview-src-list":s.imageList,"initial-index":b,alt:""},null,8,["src","preview-src-list","initial-index"]))),256))])):C("",!0),t("div",K,[t("span",O,[P,g(a(s.like),1)]),t("span",Q,[W,g(a(s.comment),1)])])])])]),_:2},1024))),128))]),_:1})])])}}});const dt=T(X,[["__scopeId","data-v-afb5027e"]]);export{dt as default};