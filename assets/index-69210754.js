import{_ as v}from"./pr_headerImg-3c38523d.js";import{d as m,ak as k,u as y,s as C,b as a,c as _,y as s,w as d,f as l,Z as w,ae as N,i as I,e as c,C as j,_ as u}from"./index-db3bc910.js";import{E}from"./el-card-fd86bda8.js";import{E as B,a as $}from"./el-carousel-item-20489022.js";import"./index-43d1d8be.js";import"./vnode-3ff49818.js";import"./throttle-d9a145ec.js";import"./debounce-abb2d009.js";const R=[{id:1,title:"说 说",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b1a.jpg",path:"/talk",index:0},{id:2,title:"相 册",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b75.jpg",path:"/album",index:1},{id:3,title:"留 言",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b34.jpg",path:"/leaveword",index:2},{id:4,title:"留 言 板",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b64.jpg",path:"/feedback",index:3},{id:5,title:"上 传",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076b02.jpg",path:"/load",index:4},{id:6,title:"网 站",img:"https://pic.imgdb.cn/item/64cdf4701ddac507cc076ab0.jpg",path:"/web",index:5}],z={class:"relaxNarbar_container"},S=["onClick"],V=["src"],A={class:"carouselItem_text"},D=m({__name:"relaxNarbar",setup(g){const{width:i}=k(),p=y();let o=C(0);const n=(t,r)=>{o.value=t},h=(t,r)=>{r===o.value&&p.push(t)};return(t,r)=>{const b=$,f=B,x=E;return a(),_("div",z,[s(x,{shadow:"hover",class:"relaxNarbar_elCard"},{default:d(()=>[s(f,{onChange:n,trigger:"click",type:"card",autoplay:!1,class:"relaxNarbar_carousel",arrow:"always",direction:l(i)<=450?"vertical":"horizontal"},{default:d(()=>[(a(!0),_(w,null,N(l(R),e=>(a(),I(b,{class:"carouselItem",key:e.id},{default:d(()=>[c("div",{class:"carouselItem_content",onClick:Z=>h(e.path,e.index)},[c("img",{class:"carouselItem_img",src:e.img,alt:""},null,8,V),c("div",A,j(e.title),1)],8,S)]),_:2},1024))),128))]),_:1},8,["direction"])]),_:1})])}}});const F=u(D,[["__scopeId","data-v-12104b39"]]),J={class:"relax_container"},L={class:"relax_content"},W=m({__name:"index",setup(g){let i="https://pic.imgdb.cn/item/64c09d9f1ddac507cc807523.jpg";return(p,o)=>{const n=v;return a(),_("div",J,[s(n,{titleArr:["休","闲"],img:l(i)},null,8,["img"]),c("div",L,[s(F)])])}}});const T=u(W,[["__scopeId","data-v-2596bfce"]]);export{T as default};