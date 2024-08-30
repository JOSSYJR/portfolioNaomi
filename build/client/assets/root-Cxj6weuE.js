import{r as n,j as e}from"./jsx-runtime-DexIYAB0.js";import{a as D,t as F,T as X,G as Z,b as ee}from"./image-BEhxrdLd.js";import{E as te}from"./error-RQ3IpIZa.js";import{V as se}from"./visually-hidden-DEe2ugKV.js";import{c as ne,B as V,I,g as ae,b as oe,m as z,a as re,n as ie,t as q}from"./heading-0TtGio0L.js";import{u as le}from"./useScrollToHash-C4ZhDZj9.js";import{u as ce}from"./useWindowSize-mzNSXuUf.js";import{c as v}from"./config-CmmmZji6.js";import{c as me,u as G,h as he,j as ue,k as de,L as T,n as J,o as ge,q as fe,M as W,s as U,O as pe,S as Y,b as ve}from"./components-Baj1kt73.js";import"./decoder-text-EXfoW_qo.js";import"./use-spring-DfxOLirH.js";import"./index-C1nQuyem.js";/**
 * @remix-run/react v2.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let R="positions";function K({getKey:t,...s}){let{isSpaMode:a}=me(),i=G(),o=he();ue({getKey:t,storageKey:R});let l=n.useMemo(()=>{if(!t)return null;let r=t(i,o);return r!==i.key?r:null},[]);if(a)return null;let m=((r,p)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let k=JSON.parse(sessionStorage.getItem(r)||"{}")[p||window.history.state.key];typeof k=="number"&&window.scrollTo(0,k)}catch(x){console.error(x),sessionStorage.removeItem(r)}}).toString();return n.createElement("script",de({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(R)}, ${JSON.stringify(l)})`}}))}const xe="_monogram_1jhi1_3",je="_highlight_1jhi1_13",H={monogram:xe,highlight:je},_e=n.forwardRef(({highlight:t,className:s,...a},i)=>{const l=`${n.useId()}monogram-clip`;return e.jsxs("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",width:80,height:80,viewBox:"0 0 300 300",className:ne(H.monogram,s),ref:i,...a,children:[e.jsx("defs",{children:e.jsxs("clipPath",{id:l,children:[e.jsx("path",{d:"M101 97.5v12.4l33.8.3 33.8.3 4.1 2.7c5.7 3.7 8.8 10.3 7.8 16.6-.5 3.6-1.6 5.6-4.9 8.8-5.6 5.7-9.5 6.6-27.6 6.2l-15-.3V215h13.2l-.4-22.4c-.2-12.4-.3-22.4-.2-22.3.1.1 5.2 6.5 11.3 14.2 6.1 7.7 14.1 17.7 17.8 22.2l6.7 8.3h16.8c9.2 0 16.8-.4 16.8-.9s-.7-1.4-1.6-2.1c-.8-.8-4.8-5.6-8.7-10.7-4-5.2-8.8-11.4-10.7-13.8-1.9-2.4-6.3-7.9-9.7-12.2l-6.1-8 6.1-2.8c7.4-3.6 15.6-11.4 18.9-18 4.9-9.7 5.6-24.7 1.6-35-2.7-7-9.9-15.5-17.3-20.3-9-5.9-11.2-6.2-50.7-6.2H101v12.5zm75.2-7.8c.6.7 1.9 1.3 2.8 1.3 2.8 0 12.3 7 16.1 11.9 6.3 8.1 7.9 12.2 8.2 21.3.3 12.8-1.1 18.3-7.1 26.1-3.1 4.1-14.5 12.6-16.9 12.7-.5 0-1.6 1.2-2.6 2.5-1.8 2.5-1.8 2.6 2 8.3 2.1 3.1 4.5 6.6 5.4 7.7 1 1.1 3.4 4.1 5.5 6.6 2.2 2.5 6.4 7.9 9.4 11.8 3 4 6.1 7.9 6.8 8.7 1.9 2-1.4 2.5-13.3 2.2l-10-.3-9.3-11.5c-5.1-6.3-10.2-12.8-11.5-14.4-7.6-9.7-13-15.6-14.5-15.6-4.4.1-4.7 1-5.2 21.2-.5 19.1-.5 19.3-2.7 19.6l-2.3.3v-29.8c0-21.9.3-30.2 1.2-31.1.8-.8 5.6-1.2 15.2-1.2 12.1 0 14.5-.3 18.2-2.1 6.3-3 11.1-8.8 11.9-14.4 1.6-10.4-2.3-17.7-12-22.5l-6-2.9-29.9-.1c-16.4 0-30.3-.3-30.7-.6-1.1-.6-1.2-15.8-.2-16.8.4-.4 16.4-.6 35.5-.4 26.1.2 35 .6 36 1.5z"}),e.jsx("path",{d:"M101 167.5V215h23v-95h-23v47.5zm18.9-43c.8.8.4 84.2-.4 85.5-.9 1.5-13.2 1.2-14.2-.3-.4-.6-.9-20.2-1-43.4l-.2-42.2 2.2-.5c2.8-.6 12.7.1 13.6.9zM133 127v7h12.7l-.1-7-.1-7H133v7zm8.5 0c0 3.8-3.9 3.5-4.3-.3-.3-2.5 0-2.8 2-2.5 1.7.2 2.3.9 2.3 2.8zM129.1 230.1c-16.5.9-19.1 1.3-17.4 3 1.9 1.9 44.3 3.2 68 2 19.8-.9 25.2-1.8 22.5-3.5-1.4-.8-37.2-2.6-48.7-2.4-4.9 0-15.9.5-24.4.9z"})]})}),e.jsx("rect",{clipPath:`url(#${l})`,width:"100%",height:"100%"}),t&&e.jsx("g",{clipPath:`url(#${l})`,children:e.jsx("rect",{className:H.highlight,width:"100%",height:"100%"})})]})}),be="_toggle_h91zx_3",ke="_inner_h91zx_33",ye="_icon_h91zx_49",w={toggle:be,inner:ke,icon:ye},we=({menuOpen:t,...s})=>e.jsx(V,{iconOnly:!0,className:w.toggle,"aria-label":"Menu","aria-expanded":t,...s,children:e.jsxs("div",{className:w.inner,children:[e.jsx(I,{className:w.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(I,{className:w.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),Ne="_toggle_y3n84_3",Se="_circle_y3n84_57",Te="_mask_y3n84_107",Ie="_path_y3n84_143",j={toggle:Ne,circle:Se,mask:Te,path:Ie},O=({isMobile:t,...s})=>{const a=n.useId(),{toggleTheme:i}=D(),o=`${a}theme-toggle-mask`;return e.jsx(V,{iconOnly:!0,className:j.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...s,children:e.jsxs("svg",{"aria-hidden":!0,className:j.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:o,children:[e.jsx("circle",{className:j.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:j.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:j.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:j.circle,mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})},A=[{label:"Projects",pathname:"/#project-1"},{label:"Details",pathname:"/#details"},{label:"Contact",pathname:"/contact"}],Le=[{label:"Twitter",url:`https://twitter.com/${v.twitter}`,icon:"twitter"},{label:"Github",url:`https://github.com/${v.github}`,icon:"github"},{label:"LinkedIn",url:`https://linkedin.com/in/${v.linkedin}`,icon:"linkedin"}],Me="_navbar_1qbli_3",$e="_logo_1qbli_53",Ce="_nav_1qbli_3",Ee="_navList_1qbli_101",ze="_navLink_1qbli_117",qe="_navIcons_1qbli_203",Re="_navIconLink_1qbli_251",He="_navIcon_1qbli_203",Oe="_mobileNav_1qbli_293",Ae="_mobileNavLink_1qbli_353",g={navbar:Me,logo:$e,nav:Ce,navList:Ee,navLink:ze,navIcons:qe,navIconLink:Re,navIcon:He,mobileNav:Oe,mobileNavLink:Ae},Pe=()=>{const[t,s]=n.useState(),[a,i]=n.useState(!1),[o,l]=n.useState(),{theme:m}=D(),r=G(),p=ce(),x=n.useRef(),k=p.width<=ae.mobile||p.height<=696,L=le();n.useEffect(()=>{s(`${r.pathname}${r.hash}`)},[r]),n.useEffect(()=>{!o||r.pathname!=="/"||(s(`${r.pathname}${o}`),L(o,()=>l(null)))},[r.pathname,L,o]),n.useEffect(()=>{const c=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:y}=window;let _=[],b=[];const Q=(d,f,u)=>!(d.bottom-u<f.top||d.top-u>f.bottom),E=()=>{for(const d of b)d.element.dataset.theme=""},N=()=>{const d=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!d)return;_=Array.from(d).map(u=>({element:u,top:u.offsetTop,bottom:u.offsetTop+u.offsetHeight}));const{scrollY:f}=window;E();for(const u of _)if(!(u.top-f>y||u.bottom-f<0))for(const S of b)Q(u,S,f)?S.element.dataset.theme=h:S.element.dataset.theme=""};return m==="light"&&(b=Array.from(c).map(d=>{const f=d.getBoundingClientRect();return{element:d,top:f.top,bottom:f.bottom}}),document.addEventListener("scroll",N),N()),()=>{document.removeEventListener("scroll",N),E()}},[m,p,r.key]);const M=(c="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return c===h?"page":""},$=c=>{const h=c.currentTarget.href.split("#")[1];l(null),h&&r.pathname==="/"&&(l(`#${h}`),c.preventDefault())},C=c=>{$(c),a&&i(!1)};return e.jsxs("header",{className:g.navbar,ref:x,children:[e.jsx(T,{unstable_viewTransition:!0,prefetch:"intent",to:r.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:g.logo,"aria-label":`${v.name}, ${v.role}`,onClick:C,children:e.jsx(_e,{highlight:!0})}),e.jsx(we,{onClick:()=>i(!a),menuOpen:a}),e.jsxs("nav",{className:g.nav,children:[e.jsx("div",{className:g.navList,children:A.map(({label:c,pathname:h})=>e.jsx(T,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:g.navLink,"aria-current":M(h),onClick:$,children:c},c))}),e.jsx(P,{desktop:!0})]}),e.jsx(oe,{unmount:!0,in:a,timeout:z(q.base.durationL),children:({visible:c,nodeRef:h})=>e.jsxs("nav",{className:g.mobileNav,"data-visible":c,ref:h,children:[A.map(({label:y,pathname:_},b)=>e.jsx(T,{unstable_viewTransition:!0,prefetch:"intent",to:_,className:g.mobileNavLink,"data-visible":c,"aria-current":M(_),onClick:C,style:re({transitionDelay:ie(Number(z(q.base.durationS))+b*50)}),children:y},y)),e.jsx(P,{}),e.jsx(O,{isMobile:!0})]})}),!k&&e.jsx(O,{"data-navbar-item":!0})]})},P=({desktop:t})=>e.jsx("div",{className:g.navIcons,children:Le.map(({label:s,url:a,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:g.navIconLink,"aria-label":s,href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(I,{className:g.navIcon,icon:i})},s))}),Be="_progress_brpaj_3",De={progress:Be};function Fe(){const[t,s]=n.useState(!1),[a,i]=n.useState(!1),{state:o}=J(),l=n.useRef(),m=n.useRef(0);return n.useEffect(()=>{clearTimeout(m.current),o!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[o,t]),n.useEffect(()=>{if(!l.current)return;const r=new AbortController;return o!=="idle"?s(!1):(Promise.all(l.current.getAnimations({subtree:!0}).map(p=>p.finished)).then(()=>{r.signal.aborted||s(!0)}),()=>{r.abort()})},[o]),e.jsx("div",{className:De.progress,"data-status":o,"data-visible":a,"data-complete":t,ref:l})}const Ve="_container_1g4r3_3",Ge="_skip_1g4r3_23",B={container:Ve,skip:Ge},at=()=>[{rel:"preload",href:Z,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:ee,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/R-logo.ico"},{rel:"icon",href:"/r-icon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/public/logo.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/public/logo.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function ot(){var l;let{canonicalUrl:t,theme:s}=ge();const a=fe(),{state:i}=J();(l=a.formData)!=null&&l.has("theme")&&(s=a.formData.get("theme"));function o(m){a.submit({theme:m||(s==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return n.useEffect(()=>{console.info(`${v.ascii}
`,`Taking a peek huh? Check out the source code: ${v.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:s==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:s==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(W,{}),e.jsx(U,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":s,children:[e.jsxs(X,{theme:s,toggleTheme:o,children:[e.jsx(Fe,{}),e.jsx(se,{showOnFocus:!0,as:"a",className:B.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(Pe,{}),e.jsx("main",{id:"main-content",className:B.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(pe,{})})]}),e.jsx(K,{}),e.jsx(Y,{})]})]})}function rt(){const t=ve();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(W,{}),e.jsx(U,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(te,{error:t}),e.jsx(K,{}),e.jsx(Y,{})]})]})}export{rt as ErrorBoundary,ot as default,at as links};
