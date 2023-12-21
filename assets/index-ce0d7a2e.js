import{r as i,d as S,g as C,b as A,H as D}from"./react-769d75c9.js";import{R as T,a as k,b as N}from"./recoil-709b3ce0.js";import{c as V,a as z,R as c,b as w}from"./reactRouter-6d34f4b4.js";import{g as F,o as W}from"./fbAuth-9e87268e.js";import{r as B,v as H}from"./fbApp-26a327c1.js";import{g as M}from"./fbStore-ed2d4d67.js";import{g as $}from"./fbStorage-a10cdba0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();var b={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U=i,q=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,K=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function P(t,r,n){var a,o={},s=null,p=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(a in r)G.call(r,a)&&!Q.hasOwnProperty(a)&&(o[a]=r[a]);if(t&&t.defaultProps)for(a in r=t.defaultProps,r)o[a]===void 0&&(o[a]=r[a]);return{$$typeof:q,type:t,key:s,ref:p,props:o,_owner:K.current}}y.Fragment=Y;y.jsx=P;y.jsxs=P;b.exports=y;var e=b.exports,_={},E=S;_.createRoot=E.createRoot,_.hydrateRoot=E.hydrateRoot;const J="modulepreload",X=function(t){return"/ReOpenSG/"+t},g={},l=function(r,n,a){if(!n||n.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=X(s),s in g)return;g[s]=!0;const p=s.endsWith(".css"),j=p?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const f=o[m];if(f.href===s&&(!p||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${j}`))return;const u=document.createElement("link");if(u.rel=p?"stylesheet":J,p||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),p)return new Promise((m,f)=>{u.addEventListener("load",m),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>r())},Z=i.lazy(()=>l(()=>import("./RootLayout-dab4d505.js"),["assets/RootLayout-dab4d505.js","assets/react-769d75c9.js","assets/react-toastify.esm-14b5f136.js","assets/reactRouter-6d34f4b4.js","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/RootLayout-38f89cad.css","assets/ReactToastify-93d8b085.css"])),ee=i.lazy(()=>l(()=>import("./About-24c3e9e3.js"),["assets/About-24c3e9e3.js","assets/react-769d75c9.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/reactRouter-6d34f4b4.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/About-43e076de.css"])),te=i.lazy(()=>l(()=>import("./Home-3836eef3.js"),["assets/Home-3836eef3.js","assets/react-769d75c9.js","assets/reactRouter-6d34f4b4.js","assets/v4-4a60fe23.js","assets/swiper-3a8fde48.js","assets/swiper-24b2bd94.js","assets/swiper-816446ca.css","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Home-e68c211b.css"])),re=i.lazy(()=>l(()=>import("./History-af21aa7e.js"),["assets/History-af21aa7e.js","assets/react-769d75c9.js","assets/swiper-3a8fde48.js","assets/swiper-24b2bd94.js","assets/swiper-816446ca.css","assets/index-01931935.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/reactRouter-6d34f4b4.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/History-34e3735d.css"])),se=i.lazy(()=>l(()=>import("./Team-55ca28fc.js"),["assets/Team-55ca28fc.js","assets/react-769d75c9.js","assets/reactRouter-6d34f4b4.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Team-845f0f03.css"])),oe=i.lazy(()=>l(()=>import("./Location-99a4e3fe.js"),["assets/Location-99a4e3fe.js","assets/react-769d75c9.js","assets/reactRouter-6d34f4b4.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Location-c164cec6.css"])),ie=i.lazy(()=>l(()=>import("./Solutions-3d0561b7.js"),["assets/Solutions-3d0561b7.js","assets/react-769d75c9.js","assets/index-01931935.js","assets/aos-67deea6a.js","assets/aos-73168167.css","assets/reactRouter-6d34f4b4.js","assets/v4-4a60fe23.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Solutions-e5c9d630.css"])),R=i.lazy(()=>l(()=>import("./MachinesDevices-151fb06f.js"),["assets/MachinesDevices-151fb06f.js","assets/react-769d75c9.js","assets/reactRouter-6d34f4b4.js","assets/v4-4a60fe23.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/MachinesDevices-b3fd5799.css"])),ne=i.lazy(()=>l(()=>import("./Library-f15d1581.js"),["assets/Library-f15d1581.js","assets/react-769d75c9.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/recoil-709b3ce0.js","assets/reactRouter-6d34f4b4.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Library-a85b2371.css"])),ae=i.lazy(()=>l(()=>import("./Industries-adbf6202.js"),["assets/Industries-adbf6202.js","assets/react-769d75c9.js","assets/index-01931935.js","assets/aos-67deea6a.js","assets/aos-73168167.css","assets/reactRouter-6d34f4b4.js","assets/v4-4a60fe23.js","assets/TitleSection-98ecc3bf.js","assets/TitleSection-18185cfb.css","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Industries-fccfa6cf.css"])),ce=i.lazy(()=>l(()=>import("./Contact-fd0ac532.js"),["assets/Contact-fd0ac532.js","assets/react-769d75c9.js","assets/react-toastify.esm-14b5f136.js","assets/v4-4a60fe23.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/recoil-709b3ce0.js","assets/reactRouter-6d34f4b4.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Contact-0cbf52f8.css"])),le=i.lazy(()=>l(()=>import("./Community-999b06e9.js"),["assets/Community-999b06e9.js","assets/react-769d75c9.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-toastify.esm-14b5f136.js","assets/recoil-709b3ce0.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/reactRouter-6d34f4b4.js","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/fbAuth-9e87268e.js","assets/fbStorage-a10cdba0.js"])),pe=i.lazy(()=>l(()=>import("./CommunityDetail-140318c2.js"),["assets/CommunityDetail-140318c2.js","assets/react-769d75c9.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/reactRouter-6d34f4b4.js","assets/fbStorage-a10cdba0.js","assets/react-toastify.esm-14b5f136.js","assets/recoil-709b3ce0.js","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/fbAuth-9e87268e.js","assets/ReactToastify-93d8b085.css"])),ue=i.lazy(()=>l(()=>import("./CommunityForm-6f7c210b.js"),["assets/CommunityForm-6f7c210b.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-769d75c9.js","assets/react-toastify.esm-14b5f136.js","assets/fbStorage-a10cdba0.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/reactRouter-6d34f4b4.js","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js"])),me=i.lazy(()=>l(()=>import("./CommunityEdit-6a387b06.js"),["assets/CommunityEdit-6a387b06.js","assets/react-769d75c9.js","assets/CommunityForm-6f7c210b.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-toastify.esm-14b5f136.js","assets/fbStorage-a10cdba0.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/reactRouter-6d34f4b4.js","assets/recoil-709b3ce0.js","assets/fbAuth-9e87268e.js"])),de=i.lazy(()=>l(()=>import("./Admin-3f9633d9.js"),["assets/Admin-3f9633d9.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/react-769d75c9.js","assets/react-toastify.esm-14b5f136.js","assets/recoil-709b3ce0.js","assets/BannerSection-6641d653.js","assets/BannerSection-fc8007db.css","assets/reactRouter-6d34f4b4.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Admin-7ef60464.css"])),fe=V(z(e.jsxs(c,{path:"/",element:e.jsx(Z,{}),children:[e.jsx(c,{index:!0,element:e.jsx(te,{})}),e.jsx(c,{path:"/about",element:e.jsx(ee,{})}),e.jsx(c,{path:"/history",element:e.jsx(re,{})}),e.jsx(c,{path:"/team",element:e.jsx(se,{})}),e.jsx(c,{path:"/location",element:e.jsx(oe,{})}),e.jsx(c,{path:"/solutions/:id",element:e.jsx(ie,{})}),e.jsx(c,{path:"/machines/:id",element:e.jsx(R,{})}),e.jsx(c,{path:"/devices/:id",element:e.jsx(R,{})}),e.jsx(c,{path:"/industries/:id",element:e.jsx(ae,{})}),e.jsx(c,{path:"/library",element:e.jsx(ne,{})}),e.jsx(c,{path:"/contact",element:e.jsx(ce,{})}),e.jsx(c,{path:"/community",element:e.jsx(le,{})}),e.jsx(c,{path:"/community/:id",element:e.jsx(pe,{})}),e.jsx(c,{path:"/community/write",element:e.jsx(ue,{})}),e.jsx(c,{path:"/community/:id/edit",element:e.jsx(me,{})}),e.jsx(c,{path:"/admin",element:e.jsx(de,{})})]})));T({key:"authState",default:null,dangerouslyAllowMutability:!0});const ye=T({key:"isLoggedInState",default:!1});var _e="firebase",xe="10.7.1";/**
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
 */B(_e,xe,"app");const he={apiKey:"AIzaSyDdv3MC6IfWVpSfC669xQZVNexbjFRyXho",authDomain:"opensg1-ee3ab.firebaseapp.com",projectId:"opensg1-ee3ab",storageBucket:"opensg1-ee3ab.appspot.com",messagingSenderId:"546259459574",appId:"1:546259459574:web:06d2357bad40cac2913bd7",measurementId:"G-0M43LNNLQW"},x=H(he),Ae=M(x),De=$(x),je=F(x);var O={exports:{}},ve="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ee=ve,ge=Ee;function I(){}function L(){}L.resetWarningCache=I;var Re=function(){function t(a,o,s,p,j,v){if(v!==ge){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function r(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:L,resetWarningCache:I};return n.PropTypes=n,n};O.exports=Re();var d=O.exports;const ke=C(d);function h({size:t,message:r,colors:n}){const a={display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"#000"};return e.jsx("div",{style:a,children:e.jsxs("svg",{width:t,height:t,display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",children:[e.jsx("title",{children:r}),e.jsxs("circle",{cx:"80",cy:"50",r:"5",fill:n[0],children:[e.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"80;35.00000000000001"}),e.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"50;75.98076211353316"}),e.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#0071E3;#3fa9f5"})]}),e.jsxs("circle",{cx:"35",cy:"75.981",r:"5",fill:n[1],children:[e.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"35.00000000000001;34.999999999999986"}),e.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"75.98076211353316;24.019237886466847"}),e.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#3fa9f5;#0b6399"})]}),e.jsxs("circle",{cx:"35",cy:"24.019",r:"5",fill:n[2],children:[e.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"34.999999999999986;80"}),e.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"24.019237886466847;49.99999999999999"}),e.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#0b6399;#0071E3"})]})]})})}h.propTypes={size:d.PropTypes.number,message:d.PropTypes.string,colors:d.PropTypes.arrayOf(d.PropTypes.string)};h.defaultProps={size:300,message:"로딩 중...",colors:["#93dbe9","#689cc5","#5e6fa3"]};function Te(){const t=k(ye);return i.useEffect(()=>{const r=W(je,n=>{t(!!n)});return()=>r()},[t]),e.jsx(i.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(w,{router:fe})})}_.createRoot(document.getElementById("root")).render(e.jsx(A.StrictMode,{children:e.jsx(N,{children:e.jsx(D,{children:e.jsx(Te,{})})})}));export{ke as P,je as a,Ae as d,ye as i,e as j,d as p,De as s};
