import{r as i,d as S,g as C,b as A,H as D}from"./react-801b4781.js";import{R as T,a as k,b as N}from"./recoil-4e5adcc1.js";import{c as V,a as z,R as n,b as w}from"./reactRouter-560c2f4d.js";import{g as F,o as W}from"./fbAuth-9e87268e.js";import{r as B,v as H}from"./fbApp-26a327c1.js";import{g as M}from"./fbStore-ed2d4d67.js";import{g as $}from"./fbStorage-a10cdba0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();var b={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U=i,q=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,K=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function P(t,r,c){var l,o={},s=null,p=null;c!==void 0&&(s=""+c),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(l in r)G.call(r,l)&&!Q.hasOwnProperty(l)&&(o[l]=r[l]);if(t&&t.defaultProps)for(l in r=t.defaultProps,r)o[l]===void 0&&(o[l]=r[l]);return{$$typeof:q,type:t,key:s,ref:p,props:o,_owner:K.current}}y.Fragment=Y;y.jsx=P;y.jsxs=P;b.exports=y;var e=b.exports,f={},E=S;f.createRoot=E.createRoot,f.hydrateRoot=E.hydrateRoot;const J="modulepreload",X=function(t){return"/ReOpenSG/"+t},R={},a=function(r,c,l){if(!c||c.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(c.map(s=>{if(s=X(s),s in R)return;R[s]=!0;const p=s.endsWith(".css"),j=p?'[rel="stylesheet"]':"";if(!!l)for(let m=o.length-1;m>=0;m--){const _=o[m];if(_.href===s&&(!p||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${j}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":J,p||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),p)return new Promise((m,_)=>{u.addEventListener("load",m),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>r())},Z=i.lazy(()=>a(()=>import("./RootLayout-8feaa17c.js"),["assets/RootLayout-8feaa17c.js","assets/react-801b4781.js","assets/react-toastify.esm-41251aa7.js","assets/reactRouter-560c2f4d.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-716c7930.js","assets/animations-3550a792.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/ReactToastify-93d8b085.css"])),ee=i.lazy(()=>a(()=>import("./About-a6b63ce7.js"),["assets/About-a6b63ce7.js","assets/react-801b4781.js","assets/aos-716c7930.js","assets/TitleSection-fbd279c2.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/reactRouter-560c2f4d.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),te=i.lazy(()=>a(()=>import("./Home-ea8faaf9.js"),["assets/Home-ea8faaf9.js","assets/react-801b4781.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/reactRouter-560c2f4d.js","assets/v4-4a60fe23.js","assets/swiper-3bb95d97.js","assets/swiper-32e88757.js","assets/swiper-816446ca.css","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/aos-73168167.css"])),re=i.lazy(()=>a(()=>import("./History-7d6320fa.js"),["assets/History-7d6320fa.js","assets/react-801b4781.js","assets/swiper-3bb95d97.js","assets/swiper-32e88757.js","assets/swiper-816446ca.css","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/index-d3354687.js","assets/TitleSection-fbd279c2.js","assets/aos-716c7930.js","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/reactRouter-560c2f4d.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/History-3a5b0a22.css"])),se=i.lazy(()=>a(()=>import("./Team-f8624182.js"),["assets/Team-f8624182.js","assets/react-801b4781.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-716c7930.js","assets/reactRouter-560c2f4d.js","assets/v4-4a60fe23.js","assets/TitleSection-fbd279c2.js","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),oe=i.lazy(()=>a(()=>import("./Location-3c8271ed.js"),["assets/Location-3c8271ed.js","assets/react-801b4781.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/TitleSection-fbd279c2.js","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/reactRouter-560c2f4d.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),ie=i.lazy(()=>a(()=>import("./Solutions-324d6649.js"),["assets/Solutions-324d6649.js","assets/react-801b4781.js","assets/aos-716c7930.js","assets/index-d3354687.js","assets/solutionsData-27e867ae.js","assets/TitleSection-fbd279c2.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/v4-4a60fe23.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),g=i.lazy(()=>a(()=>import("./MachinesDevices-000a2138.js"),["assets/MachinesDevices-000a2138.js","assets/react-801b4781.js","assets/aos-716c7930.js","assets/reactRouter-560c2f4d.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/v4-4a60fe23.js","assets/TitleSection-fbd279c2.js","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),ne=i.lazy(()=>a(()=>import("./Library-b98e6667.js"),["assets/Library-b98e6667.js","assets/react-801b4781.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/reactRouter-560c2f4d.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),ae=i.lazy(()=>a(()=>import("./Industries-85d34aee.js"),["assets/Industries-85d34aee.js","assets/react-801b4781.js","assets/aos-716c7930.js","assets/index-d3354687.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/reactRouter-560c2f4d.js","assets/v4-4a60fe23.js","assets/solutionsData-27e867ae.js","assets/TitleSection-fbd279c2.js","assets/aos-73168167.css","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),ce=i.lazy(()=>a(()=>import("./Contact-5f0d7a75.js"),["assets/Contact-5f0d7a75.js","assets/react-801b4781.js","assets/emailConfig-9bb141b9.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/v4-4a60fe23.js","assets/react-toastify.esm-41251aa7.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),le=i.lazy(()=>a(()=>import("./Community-d7d4041a.js"),["assets/Community-d7d4041a.js","assets/react-801b4781.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-toastify.esm-41251aa7.js","assets/recoil-4e5adcc1.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/fbAuth-9e87268e.js","assets/fbStorage-a10cdba0.js"])),pe=i.lazy(()=>a(()=>import("./CommunityDetail-c029d760.js"),["assets/CommunityDetail-c029d760.js","assets/react-801b4781.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/reactRouter-560c2f4d.js","assets/fbStorage-a10cdba0.js","assets/react-toastify.esm-41251aa7.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/ReactToastify-93d8b085.css"])),ue=i.lazy(()=>a(()=>import("./CommunityForm-4ded9ade.js"),["assets/CommunityForm-4ded9ade.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-801b4781.js","assets/react-toastify.esm-41251aa7.js","assets/fbStorage-a10cdba0.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js"])),me=i.lazy(()=>a(()=>import("./CommunityEdit-4170c51a.js"),["assets/CommunityEdit-4170c51a.js","assets/react-801b4781.js","assets/CommunityForm-4ded9ade.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-toastify.esm-41251aa7.js","assets/fbStorage-a10cdba0.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js"])),de=i.lazy(()=>a(()=>import("./Admin-df59ffec.js"),["assets/Admin-df59ffec.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/react-801b4781.js","assets/react-toastify.esm-41251aa7.js","assets/recoil-4e5adcc1.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),_e=i.lazy(()=>a(()=>import("./ContactFail-df621775.js"),["assets/ContactFail-df621775.js","assets/react-801b4781.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/NoticeContent-83749e5b.js","assets/reactRouter-560c2f4d.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),ye=i.lazy(()=>a(()=>import("./ContactSuccess-31141718.js"),["assets/ContactSuccess-31141718.js","assets/react-801b4781.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/NoticeContent-83749e5b.js","assets/reactRouter-560c2f4d.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),fe=i.lazy(()=>a(()=>import("./ContactRe-24ece883.js"),["assets/ContactRe-24ece883.js","assets/react-801b4781.js","assets/emailConfig-9bb141b9.js","assets/styles.module-e08373b8.js","assets/styles-db24e90c.css","assets/v4-4a60fe23.js","assets/react-toastify.esm-41251aa7.js","assets/BannerSection-46ce339d.js","assets/aos-716c7930.js","assets/aos-73168167.css","assets/reactRouter-560c2f4d.js","assets/recoil-4e5adcc1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js"])),xe=V(z(e.jsxs(n,{path:"/",element:e.jsx(Z,{}),children:[e.jsx(n,{index:!0,element:e.jsx(te,{})}),e.jsx(n,{path:"/about",element:e.jsx(ee,{})}),e.jsx(n,{path:"/history",element:e.jsx(re,{})}),e.jsx(n,{path:"/team",element:e.jsx(se,{})}),e.jsx(n,{path:"/location",element:e.jsx(oe,{})}),e.jsx(n,{path:"/solutions/:id",element:e.jsx(ie,{})}),e.jsx(n,{path:"/machines/:id",element:e.jsx(g,{})}),e.jsx(n,{path:"/devices/:id",element:e.jsx(g,{})}),e.jsx(n,{path:"/industries/:id",element:e.jsx(ae,{})}),e.jsx(n,{path:"/library",element:e.jsx(ne,{})}),e.jsx(n,{path:"/contact",element:e.jsx(ce,{})}),e.jsx(n,{path:"/contact/success",element:e.jsx(ye,{})}),e.jsx(n,{path:"/contact/fail",element:e.jsx(_e,{})}),e.jsx(n,{path:"/contact/retry",element:e.jsx(fe,{})}),e.jsx(n,{path:"/community",element:e.jsx(le,{})}),e.jsx(n,{path:"/community/:id",element:e.jsx(pe,{})}),e.jsx(n,{path:"/community/write",element:e.jsx(ue,{})}),e.jsx(n,{path:"/community/:id/edit",element:e.jsx(me,{})}),e.jsx(n,{path:"/admin",element:e.jsx(de,{})})]})));T({key:"authState",default:null,dangerouslyAllowMutability:!0});const he=T({key:"isLoggedInState",default:!1});var je="firebase",ve="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B(je,ve,"app");const Ee={apiKey:"AIzaSyDdv3MC6IfWVpSfC669xQZVNexbjFRyXho",authDomain:"opensg1-ee3ab.firebaseapp.com",projectId:"opensg1-ee3ab",storageBucket:"opensg1-ee3ab.appspot.com",messagingSenderId:"546259459574",appId:"1:546259459574:web:06d2357bad40cac2913bd7",measurementId:"G-0M43LNNLQW"},x=H(Ee),Ne=M(x),Ve=$(x),Re=F(x);var O={exports:{}},ge="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Te=ge,be=Te;function I(){}function L(){}L.resetWarningCache=I;var Pe=function(){function t(l,o,s,p,j,v){if(v!==be){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function r(){return t}var c={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:L,resetWarningCache:I};return c.PropTypes=c,c};O.exports=Pe();var d=O.exports;const ze=C(d);function h({size:t,message:r,colors:c}){const l={display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"#000"};return e.jsx("div",{style:l,children:e.jsxs("svg",{width:t,height:t,display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",children:[e.jsx("title",{children:r}),e.jsxs("circle",{cx:"80",cy:"50",r:"5",fill:c[0],children:[e.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"80;35.00000000000001"}),e.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"50;75.98076211353316"}),e.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#0071E3;#3fa9f5"})]}),e.jsxs("circle",{cx:"35",cy:"75.981",r:"5",fill:c[1],children:[e.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"35.00000000000001;34.999999999999986"}),e.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"75.98076211353316;24.019237886466847"}),e.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#3fa9f5;#0b6399"})]}),e.jsxs("circle",{cx:"35",cy:"24.019",r:"5",fill:c[2],children:[e.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"34.999999999999986;80"}),e.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"24.019237886466847;49.99999999999999"}),e.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#0b6399;#0071E3"})]})]})})}h.propTypes={size:d.PropTypes.number,message:d.PropTypes.string,colors:d.PropTypes.arrayOf(d.PropTypes.string)};h.defaultProps={size:300,message:"로딩 중...",colors:["#93dbe9","#689cc5","#5e6fa3"]};function Oe(){const t=k(he);return i.useEffect(()=>{const r=W(Re,c=>{t(!!c)});return()=>r()},[t]),e.jsx(i.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(w,{router:xe})})}f.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(N,{children:e.jsx(D,{children:e.jsx(Oe,{})})})}));export{ze as P,Re as a,Ne as d,he as i,e as j,d as p,Ve as s};
