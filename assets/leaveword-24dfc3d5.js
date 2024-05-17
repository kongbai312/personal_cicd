import{b as V,c as F,e as g,B as q,r as G,d as K,s as m,q as v,S as U,o as $,W as J,aN as O,X as Q,a8 as Y,aj as Z,y as ee,w as te,f as L,af as X,z as H,aR as ne,aF as ae,G as se,C as P,p as le,g as oe,_ as ue}from"./index-14bc0a0e.js";import{g as de}from"./getIp-fac79d79.js";import{b as ie}from"./index-a2a12d73.js";import{h as re}from"./index-c1c06b90.js";import"./request-8d10ec2f.js";import"./axios-4d564c32.js";import"./_commonjsHelpers-725317a4.js";var D=K({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","dm-over","dm-out","update:danmus"],setup(n,{emit:u,slots:_}){let d=m(document.createElement("div")),a=m(document.createElement("div"));const f=m(0),w=m(0);let C=0;const E=m(0),x=m(0),p=m(0),S=m(!1),i=m(!1),c=m({}),l=function(s,o,e="modelValue",t){return v({get:()=>s[e],set:b=>{o(`update:${e}`,t?t(b):b)}})}(n,u,"danmus"),r=U({channels:v(()=>n.channels||E.value),autoplay:v(()=>n.autoplay),loop:v(()=>n.loop),useSlot:v(()=>n.useSlot),debounce:v(()=>n.debounce),randomChannel:v(()=>n.randomChannel)}),h=U({height:v(()=>x.value),fontSize:v(()=>n.fontSize),speeds:v(()=>n.speeds),top:v(()=>n.top),right:v(()=>n.right)});function R(){T(),n.isSuspend&&function(){let s=[];a.value.addEventListener("mouseover",o=>{let e=o.target;e.className.includes("dm")||(e=e.closest(".dm")||e),e.className.includes("dm")&&(s.includes(e)||(u("dm-over",{el:e}),e.classList.add("pause"),s.push(e)))}),a.value.addEventListener("mouseout",o=>{let e=o.target;e.className.includes("dm")||(e=e.closest(".dm")||e),e.className.includes("dm")&&(u("dm-out",{el:e}),e.classList.remove("pause"),s.forEach(t=>{t.classList.remove("pause")}),s=[])})}(),r.autoplay&&A()}function T(){if(f.value=d.value.offsetWidth,w.value=d.value.offsetHeight,f.value===0||w.value===0)throw new Error("获取不到容器宽高")}function A(){i.value=!1,C||(C=setInterval(()=>function(){if(!i.value&&l.value.length)if(p.value>l.value.length-1){const s=a.value.children.length;r.loop&&(s<p.value&&(u("list-end"),p.value=0),z())}else z()}(),r.debounce))}function z(s){const o=r.loop?p.value%l.value.length:p.value,e=s||l.value[o];let t=document.createElement("div");r.useSlot?t=function(b,y){return O({render:()=>Q("div",{},[_.dm&&_.dm({danmu:b,index:y})])}).mount(document.createElement("div"))}(e,o).$el:(t.innerHTML=e,t.setAttribute("style",n.extraStyle),t.style.fontSize=`${h.fontSize}px`,t.style.lineHeight=`${h.fontSize}px`),t.classList.add("dm"),a.value.appendChild(t),t.style.opacity="0",Y(()=>{h.height||(x.value=t.offsetHeight),r.channels||(E.value=Math.floor(w.value/(h.height+h.top)));let b=function(y){let B=[...Array(r.channels).keys()];r.randomChannel&&(B=B.sort(()=>.5-Math.random()));for(let k of B){const I=c.value[k];if(!I||!I.length)return c.value[k]=[y],y.addEventListener("animationend",()=>c.value[k].splice(0,1)),k%r.channels;for(let N=0;N<I.length;N++){const M=j(I[N])-10;if(M<=.88*(y.offsetWidth-I[N].offsetWidth)||M<=0)break;if(N===I.length-1)return c.value[k].push(y),y.addEventListener("animationend",()=>c.value[k].splice(0,1)),k%r.channels}}return-1}(t);if(b>=0){const y=t.offsetWidth,B=h.height;t.classList.add("move"),t.dataset.index=`${o}`,t.style.opacity="1",t.style.top=b*(B+h.top)+"px",t.style.width=y+h.right+"px",t.style.setProperty("--dm-scroll-width",`-${f.value+y}px`),t.style.left=`${f.value}px`,t.style.animationDuration=f.value/h.speeds+"s",t.addEventListener("animationend",()=>{Number(t.dataset.index)!==l.value.length-1||r.loop||u("play-end",t.dataset.index),a.value&&a.value.removeChild(t)}),p.value++}else a.value.removeChild(t)})}function j(s){const o=s.offsetWidth||parseInt(s.style.width),e=s.getBoundingClientRect().right||a.value.getBoundingClientRect().right+o;return a.value.getBoundingClientRect().right-e}function W(){clearInterval(C),C=0,p.value=0}return $(()=>{R()}),J(()=>{W()}),{container:d,dmContainer:a,hidden:S,paused:i,danmuList:l,getPlayState:function(){return!i.value},resize:function(){T();const s=a.value.getElementsByClassName("dm");for(let o=0;o<s.length;o++){const e=s[o];e.style.setProperty("--dm-scroll-width",`-${f.value+e.offsetWidth}px`),e.style.left=`${f.value}px`,e.style.animationDuration=f.value/h.speeds+"s"}},play:A,pause:function(){i.value=!0},stop:function(){c.value={},a.value.innerHTML="",i.value=!0,S.value=!1,W()},show:function(){S.value=!1},hide:function(){S.value=!0},reset:function(){x.value=0,R()},add:function(s){if(p.value===l.value.length)return l.value.push(s),l.value.length-1;{const o=p.value%l.value.length;return l.value.splice(o,0,s),o+1}},push:function(s){return l.value.push(s),l.value.length-1},insert:z}}});const me={ref:"container",class:"vue-danmaku"};(function(n,u){u===void 0&&(u={});var _=u.insertAt;if(n&&typeof document<"u"){var d=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",_==="top"&&d.firstChild?d.insertBefore(a,d.firstChild):d.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}})(`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 100;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`),D.render=function(n,u,_,d,a,f){return V(),F("div",me,[g("div",{ref:"dmContainer",class:q(["danmus",{show:!n.hidden},{paused:n.paused}])},null,2),G(n.$slots,"default")],512)},D.__file="src/lib/Danmaku.vue";const ce=n=>(le("data-v-a92ead91"),n=n(),oe(),n),ve={class:"leaveword_container"},pe=["src"],fe={class:"danmuItem_text"},he={class:"leaveword_box"},ye=ce(()=>g("div",{class:"leaveword_title"},"留言板",-1)),ge={class:"leaveword_inputBox"},_e=K({__name:"leaveword",setup(n){const u=m(),_=async()=>{let i=await re();u.value=i.data,x.value.play()};$(()=>{_()});let d=m(),a=m(!1);const f=()=>{a.value=!0},w=Z();let C=v(()=>w.userInfo);const E=async()=>{var i;if(!((i=w.userInfo.position)!=null&&i.ip)){let c=await de();w.setUserPosition(c)}};$(async()=>{await E()});let x=m(),p=m();const S=()=>{var i;p.value=x.value.add({id:u.value.length+1,name:`${(i=C.value.position)==null?void 0:i.address}用户`,text:d.value,avatar:ie(2)}),d.value="",a.value=!1};return(i,c)=>(V(),F("div",ve,[ee(L(D),{ref_key:"danmuRef",ref:x,danmus:L(u),"onUpdate:danmus":c[0]||(c[0]=l=>X(u)?u.value=l:null),class:"danmu_style",top:6,isSuspend:"",useSlot:""},{dm:te(({index:l,danmu:r})=>[g("div",{class:q(["danmuItem",{danmuItem_active:l===L(p)}])},[g("img",{class:"danmuItem_img",src:r.avatar},null,8,pe),g("span",fe,P(r.name)+"："+P(r.text),1)],2)]),_:1},8,["danmus"]),g("div",he,[ye,g("div",ge,[H(g("input",{class:"leaveword_input",onKeyup:ae(S,["enter"]),placeholder:"留下你的足迹吧！",onFocus:f,"onUpdate:modelValue":c[1]||(c[1]=l=>X(d)?d.value=l:d=l),clearable:""},null,544),[[ne,L(d)]]),H(g("div",{class:"leaveword_sent",onClick:S},"发送",512),[[se,L(a)]])])])]))}});const Ie=ue(_e,[["__scopeId","data-v-a92ead91"]]);export{Ie as default};
