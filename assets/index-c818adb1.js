import{q as e,cl as o,$ as u}from"./index-db3bc910.js";const i=["class","style"],E=/^on[A-Z]/,f=(c={})=>{const{excludeListeners:l=!1,excludeKeys:t}=c,a=e(()=>((t==null?void 0:t.value)||[]).concat(i)),s=u();return s?e(()=>{var n;return o(Object.entries((n=s.proxy)==null?void 0:n.$attrs).filter(([r])=>!a.value.includes(r)&&!(l&&E.test(r))))}):e(()=>({}))};export{f as u};