import{d as a,N as r,b as m,c as _,e as t,_ as d}from"./index-c3ebc188.js";const l=""+new URL("朱博艺-前端开发工程师-13760171072-b021213f.pdf",import.meta.url).href,i={class:"resume_container"},p=a({__name:"resume",setup(u){const{showPopup:o}=r("globalMethods"),c=async()=>{o().warn("即将下载作者的简历");let s="朱博艺-前端开发工程师-13760171072.pdf";const e=document.createElement("a");e.href=l,e.setAttribute("download",s),e.click(),window.URL.revokeObjectURL(e.href)},n=async()=>{let s="https://docs.qq.com/pdf/DR29EaFRaVmtMeXBS";window.open(s)};return(s,e)=>(m(),_("div",i,[t("div",{class:"resumeItem",onClick:c},"下载"),t("div",{class:"resumeItem",onClick:n},"在线预览")]))}});const w=d(p,[["__scopeId","data-v-69279042"]]);export{w as default};