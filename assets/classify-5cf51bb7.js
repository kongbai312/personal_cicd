import{d as E,a as B,n as b,N as C,u as k,q as p,o as O,S as m,aj as W,b as z,c as I,e as A,A as j,f as L,a7 as D,_ as N}from"./index-78d51c59.js";import{a as R}from"./index-c1c06b90.js";import"./axios-4d564c32.js";import"./_commonjsHelpers-725317a4.js";const T={class:"classify_container"},$=E({__name:"classify",setup(q){const h=B();let n=b(()=>h.themeStatus);const r=C("$echarts"),x=k();let l=p([]),c=p(),g=[],_=[],d=["#00ffff","#409B5C","#006ced","#ffe000","#ffa800","#ff5b00","#ff3000"];const w=async()=>{let s=await R();S(s.data)};let t;O(async()=>{await w(),t||(t=r.init(document.getElementById("echart_main"))),t.setOption(e.value),t.on("click",s=>{let a=s.name.split(" ")[0];x.push(`/labelList/${a}`)})});const S=s=>{s.forEach(a=>{a.tags.forEach(o=>{let y=l.value.findIndex(v=>v.name===o);if(y!==-1)l.value[y].value++;else{let v={name:o,value:1};l.value.push(v)}})}),c.value=l.value.reduce((a,o)=>a+o.value,0);for(let a=0;a<l.value.length;a++){let o=l.value[a].name+"  "+l.value[a].value;_.push(o),g.push({value:l.value[a].value,name:o,itemStyle:{borderWidth:0,borderRadius:10,shadowBlur:10,borderColor:d[a],shadowColor:d[a]}},{value:c.value/100,name:"",itemStyle:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}})}};let f=[{name:"",type:"pie",clockwise:!1,radius:["50%","70%"],center:["30%","50%"],emphasis:{scale:!1},label:{show:!1},data:g}],e=p({backgroundColor:n.value?"#021425":"#fff",title:{text:"总文章数",subtext:c,textStyle:{color:"#19E1E3",fontSize:18,padding:[0,0,25,0]},subtextStyle:{fontSize:28,fontWeight:"bolder",color:"#19E1E3"},x:"27%",y:"45%"},color:d,tooltip:{show:!0},legend:{icon:"rect",itemWidth:16,itemHeight:8,itemStyle:{borderWidth:3},orient:"vertical",data:_,right:"10%",top:"center",align:"left",textStyle:{color:n.value?"#fff":"#111",fontSize:16,padding:[0,0,0,10]},itemGap:20},toolbox:{show:!1},series:f});m(()=>n.value,()=>{e.value.backgroundColor=n.value?"#021425":"#fff",e.value.legend.textStyle.color=n.value?"#fff":"#111",t.setOption(e.value)});let u=b(()=>h.isOpen);m(()=>u.value,async()=>{await t.dispose(),t=r.init(document.getElementById("echart_main")),t.setOption(e.value),i.value<=450&&(e.value.title.x=u.value?"35%":"40%",await t.dispose(),t=r.init(document.getElementById("echart_main")),t.setOption(e.value))});const{width:i}=W();return m(()=>i.value,async()=>{i.value>375&&i.value<=992&&(i.value<=800?(e.value.legend.orient="horizontal",e.value.legend.top="5%",e.value.legend.right="auto",e.value.title.x="44%",f[0].center=["50%","50%"],i.value<=450&&(e.value.title.x=u.value?"35%":"40%")):(e.value.legend.orient="vertical",e.value.legend.top="center",e.value.legend.right="5%",e.value.title.x="34%",f[0].center=["40%","50%"]),t&&await t.dispose(),D(()=>{t=r.init(document.getElementById("echart_main")),t.setOption(e.value)}))},{immediate:!0}),(s,a)=>(z(),I("div",T,[A("div",{id:"echart_main",class:j({opened:!L(u)})},null,2)]))}});const V=N($,[["__scopeId","data-v-8aaed014"]]);export{V as default};