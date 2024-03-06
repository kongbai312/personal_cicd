import{ar as de,o as oe,a3 as fe,V as me,x as H,ae as ve,O as pe,h as x,as as ye,at as te,M as G,S as W,au as ge,K as he,av as be,L as Ce,aw as j,l as Z,a0 as U,d as z,y as L,r as _,W as we,N as Ee,v as _e,i as Q,q as $,b as B,c as Y,e as P,B as I,f as o,C as Ie,w as E,j as X,ax as ke,E as De,D as K,ay as se,k as ae,az as Me,aA as Se,aB as Be,s as T,aC as Te,aD as Le,a7 as $e,Z as Ae,$ as J,n as Fe,U as Oe,z as Pe,m as ze,am as Ne,G as Re,T as Ve,H as Ye,I as Ue,p as je,g as qe,_ as He}from"./index-88c893b2.js";import{E as We}from"./el-image-viewer-8083e051.js";import{P as q}from"./vnode-17d6e61f.js";import{F as Xe,i as Ke,E as xe}from"./focus-trap-caeefd4b.js";import{U as ne,u as ee}from"./index-c1dce05c.js";import{g as Ze}from"./scroll-cbf38af8.js";import{u as Ge}from"./index-c5b508ec.js";const Qe=(...e)=>t=>{e.forEach(l=>{de(l)?l(t):l.value=t})},Je=(e,t,l,u)=>{let s={offsetX:0,offsetY:0};const c=m=>{const d=m.clientX,p=m.clientY,{offsetX:y,offsetY:b}=s,f=e.value.getBoundingClientRect(),r=f.left,w=f.top,A=f.width,N=f.height,F=document.documentElement.clientWidth,R=document.documentElement.clientHeight,V=-r+y,O=-w+b,k=F-r-A+y,D=R-w-N+b,C=a=>{let v=y+a.clientX-d,g=b+a.clientY-p;u!=null&&u.value||(v=Math.min(Math.max(v,V),k),g=Math.min(Math.max(g,O),D)),s={offsetX:v,offsetY:g},e.value&&(e.value.style.transform=`translate(${H(v)}, ${H(g)})`)},M=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",M)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",c)},n=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",c)};oe(()=>{fe(()=>{l.value?i():n()})}),me(()=>{n()})},eo=(e,t={})=>{ve(e)||pe("[useLockscreen]","You need to pass a ref param to this function");const l=t.ns||x("popup"),u=ye(()=>l.bm("parent","hidden"));if(!te||G(document.body,u.value))return;let s=0,c=!1,i="0";const n=()=>{setTimeout(()=>{Ce(document==null?void 0:document.body,u.value),c&&document&&(document.body.style.width=i)},200)};W(e,m=>{if(!m){n();return}c=!G(document.body,u.value),c&&(i=document.body.style.width),s=Ze(l.namespace.value);const d=document.documentElement.clientHeight<document.body.scrollHeight,p=ge(document.body,"overflowY");s>0&&(d||p==="scroll")&&c&&(document.body.style.width=`calc(100% - ${s}px)`),he(document.body,u.value)}),be(()=>n())},le=e=>{if(!e)return{onClick:j,onMousedown:j,onMouseup:j};let t=!1,l=!1;return{onClick:i=>{t&&l&&e(i),t=l=!1},onMousedown:i=>{t=i.target===i.currentTarget},onMouseup:i=>{l=i.target===i.currentTarget}}},oo=Z({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:U([String,Array,Object])},zIndex:{type:U([String,Number])}}),to={click:e=>e instanceof MouseEvent},so="overlay";var ao=z({name:"ElOverlay",props:oo,emits:to,setup(e,{slots:t,emit:l}){const u=x(so),s=m=>{l("click",m)},{onClick:c,onMousedown:i,onMouseup:n}=le(e.customMaskEvent?void 0:s);return()=>e.mask?L("div",{class:[u.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:i,onMouseup:n},[_(t,"default")],q.STYLE|q.CLASS|q.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[_(t,"default")])}});const no=ao,ie=Symbol("dialogInjectionKey"),re=Z({center:Boolean,alignCenter:Boolean,closeIcon:{type:Ee},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),lo={close:()=>!0},io=["aria-level"],ro=["aria-label"],co=["id"],uo=z({name:"ElDialogContent"}),fo=z({...uo,props:re,emits:lo,setup(e){const t=e,{t:l}=_e(),{Close:u}=Me,{dialogRef:s,headerRef:c,bodyId:i,ns:n,style:m}=Q(ie),{focusTrapRef:d}=Q(Xe),p=$(()=>[n.b(),n.is("fullscreen",t.fullscreen),n.is("draggable",t.draggable),n.is("align-center",t.alignCenter),{[n.m("center")]:t.center}]),y=Qe(d,s),b=$(()=>t.draggable),f=$(()=>t.overflow);return Je(s,c,b,f),(r,w)=>(B(),Y("div",{ref:o(y),class:I(o(p)),style:se(o(m)),tabindex:"-1"},[P("header",{ref_key:"headerRef",ref:c,class:I([o(n).e("header"),{"show-close":r.showClose}])},[_(r.$slots,"header",{},()=>[P("span",{role:"heading","aria-level":r.ariaLevel,class:I(o(n).e("title"))},Ie(r.title),11,io)]),r.showClose?(B(),Y("button",{key:0,"aria-label":o(l)("el.dialog.close"),class:I(o(n).e("headerbtn")),type:"button",onClick:w[0]||(w[0]=A=>r.$emit("close"))},[L(o(De),{class:I(o(n).e("close"))},{default:E(()=>[(B(),X(ke(r.closeIcon||o(u))))]),_:1},8,["class"])],10,ro)):K("v-if",!0)],2),P("div",{id:o(i),class:I(o(n).e("body"))},[_(r.$slots,"default")],10,co),r.$slots.footer?(B(),Y("footer",{key:0,class:I(o(n).e("footer"))},[_(r.$slots,"footer")],2)):K("v-if",!0)],6))}});var mo=ae(fo,[["__file","dialog-content.vue"]]);const vo=Z({...re,appendToBody:Boolean,appendTo:{type:U(String),default:"body"},beforeClose:{type:U(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),po={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ne]:e=>Se(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},yo=(e,t)=>{var l;const s=Ae().emit,{nextZIndex:c}=Be();let i="";const n=ee(),m=ee(),d=T(!1),p=T(!1),y=T(!1),b=T((l=e.zIndex)!=null?l:c());let f,r;const w=Te("namespace",Le),A=$(()=>{const h={},S=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(h[`${S}-margin-top`]=e.top),e.width&&(h[`${S}-width`]=H(e.width))),h}),N=$(()=>e.alignCenter?{display:"flex"}:{});function F(){s("opened")}function R(){s("closed"),s(ne,!1),e.destroyOnClose&&(y.value=!1)}function V(){s("close")}function O(){r==null||r(),f==null||f(),e.openDelay&&e.openDelay>0?{stop:f}=J(()=>M(),e.openDelay):M()}function k(){f==null||f(),r==null||r(),e.closeDelay&&e.closeDelay>0?{stop:r}=J(()=>a(),e.closeDelay):a()}function D(){function h(S){S||(p.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(h):k()}function C(){e.closeOnClickModal&&D()}function M(){te&&(d.value=!0)}function a(){d.value=!1}function v(){s("openAutoFocus")}function g(){s("closeAutoFocus")}function ce(h){var S;((S=h.detail)==null?void 0:S.focusReason)==="pointer"&&h.preventDefault()}e.lockScroll&&eo(d);function ue(){e.closeOnPressEscape&&D()}return W(()=>e.modelValue,h=>{h?(p.value=!1,O(),y.value=!0,b.value=Ke(e.zIndex)?c():b.value++,$e(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):d.value&&k()}),W(()=>e.fullscreen,h=>{t.value&&(h?(i=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=i)}),oe(()=>{e.modelValue&&(d.value=!0,y.value=!0,O())}),{afterEnter:F,afterLeave:R,beforeLeave:V,handleClose:D,onModalClick:C,close:k,doClose:a,onOpenAutoFocus:v,onCloseAutoFocus:g,onCloseRequested:ue,onFocusoutPrevented:ce,titleId:n,bodyId:m,closed:p,style:A,overlayDialogStyle:N,rendered:y,visible:d,zIndex:b}},go=["aria-label","aria-labelledby","aria-describedby"],ho=z({name:"ElDialog",inheritAttrs:!1}),bo=z({...ho,props:vo,emits:po,setup(e,{expose:t}){const l=e,u=Fe();Ge({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},$(()=>!!u.title));const s=x("dialog"),c=T(),i=T(),n=T(),{visible:m,titleId:d,bodyId:p,style:y,overlayDialogStyle:b,rendered:f,zIndex:r,afterEnter:w,afterLeave:A,beforeLeave:N,handleClose:F,onModalClick:R,onOpenAutoFocus:V,onCloseAutoFocus:O,onCloseRequested:k,onFocusoutPrevented:D}=yo(l,c);Oe(ie,{dialogRef:c,headerRef:i,bodyId:p,ns:s,rendered:f,style:y});const C=le(R),M=$(()=>l.draggable&&!l.fullscreen);return t({visible:m,dialogContentRef:n}),(a,v)=>(B(),X(Ye,{to:a.appendTo,disabled:a.appendTo!=="body"?!1:!a.appendToBody},[L(Ve,{name:"dialog-fade",onAfterEnter:o(w),onAfterLeave:o(A),onBeforeLeave:o(N),persisted:""},{default:E(()=>[Pe(L(o(no),{"custom-mask-event":"",mask:a.modal,"overlay-class":a.modalClass,"z-index":o(r)},{default:E(()=>[P("div",{role:"dialog","aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:o(d),"aria-describedby":o(p),class:I(`${o(s).namespace.value}-overlay-dialog`),style:se(o(b)),onClick:v[0]||(v[0]=(...g)=>o(C).onClick&&o(C).onClick(...g)),onMousedown:v[1]||(v[1]=(...g)=>o(C).onMousedown&&o(C).onMousedown(...g)),onMouseup:v[2]||(v[2]=(...g)=>o(C).onMouseup&&o(C).onMouseup(...g))},[L(o(xe),{loop:"",trapped:o(m),"focus-start-el":"container",onFocusAfterTrapped:o(V),onFocusAfterReleased:o(O),onFocusoutPrevented:o(D),onReleaseRequested:o(k)},{default:E(()=>[o(f)?(B(),X(mo,ze({key:0,ref_key:"dialogContentRef",ref:n},a.$attrs,{center:a.center,"align-center":a.alignCenter,"close-icon":a.closeIcon,draggable:o(M),overflow:a.overflow,fullscreen:a.fullscreen,"show-close":a.showClose,title:a.title,"aria-level":a.headerAriaLevel,onClose:o(F)}),Ne({header:E(()=>[a.$slots.title?_(a.$slots,"title",{key:1}):_(a.$slots,"header",{key:0,close:o(F),titleId:o(d),titleClass:o(s).e("title")})]),default:E(()=>[_(a.$slots,"default")]),_:2},[a.$slots.footer?{name:"footer",fn:E(()=>[_(a.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,go)]),_:3},8,["mask","overlay-class","z-index"]),[[Re,o(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Co=ae(bo,[["__file","dialog.vue"]]);const wo=Ue(Co);const Eo=""+new URL("../jpg/wechat-8ba79a1e.jpg",import.meta.url).href,_o=""+new URL("../jpg/qq-2b03b122.jpg",import.meta.url).href,Io=e=>(je("data-v-5086d833"),e=e(),qe(),e),ko=Io(()=>P("span",{class:"contactDialog_header"},"添加作者联系",-1)),Do={class:"contactDialog_container"},Mo=z({__name:"pr_contactDialog",props:{activeIcon:{},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const l=t,u=s=>{l("update:modelValue",!1),s()};return(s,c)=>{const i=We,n=wo;return B(),Y("div",null,[L(n,{modelValue:s.modelValue,class:"contactDialog","show-close":!1,center:"","before-close":u},{header:E(()=>[ko]),default:E(()=>[P("div",Do,[L(i,{src:s.activeIcon&&s.activeIcon==="qq"?o(_o):o(Eo),class:"wechatImg",fit:"contain"},null,8,["src"])])]),_:1},8,["modelValue"])])}}});const Oo=He(Mo,[["__scopeId","data-v-5086d833"]]);export{no as E,Oo as _,po as a,wo as b,vo as d,yo as u};
