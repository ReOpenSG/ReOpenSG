import{r as s,d as g,b as L}from"./react-t7nT_heO.js";import{R as x,a as A,b as T}from"./recoil-Y9BdFwrk.js";import{c as b,a as P,R as n,b as D}from"./reactRouter-Jh5tb--W.js";import{g as O,o as V}from"./fbAuth-Cks-JP-t.js";import{r as S,v as C}from"./fbApp-WBmmrZ2E.js";import{g as z}from"./fbStore-ITQ65Lcc.js";import{g as N}from"./fbStorage-DidXJKWr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function _(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=_(o);fetch(o.href,t)}})();var R={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=s,M=Symbol.for("react.element"),k=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,F=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function v(l,r,_){var c,o={},t=null,i=null;_!==void 0&&(t=""+_),r.key!==void 0&&(t=""+r.key),r.ref!==void 0&&(i=r.ref);for(c in r)B.call(r,c)&&!U.hasOwnProperty(c)&&(o[c]=r[c]);if(l&&l.defaultProps)for(c in r=l.defaultProps,r)o[c]===void 0&&(o[c]=r[c]);return{$$typeof:M,type:l,key:t,ref:i,props:o,_owner:F.current}}p.Fragment=k;p.jsx=v;p.jsxs=v;R.exports=p;var e=R.exports,E={},y=g;E.createRoot=y.createRoot,E.hydrateRoot=y.hydrateRoot;const W="modulepreload",$=function(l){return"/"+l},I={},a=function(r,_,c){if(!_||_.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(_.map(t=>{if(t=$(t),t in I)return;I[t]=!0;const i=t.endsWith(".css"),j=i?'[rel="stylesheet"]':"";if(!!c)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===t&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${j}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":W,i||(m.as="script",m.crossOrigin=""),m.href=t,document.head.appendChild(m),i)return new Promise((u,d)=>{m.addEventListener("load",u),m.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r()).catch(t=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t})};var K={VITE_API_KEY:"AIzaSyDdv3MC6IfWVpSfC669xQZVNexbjFRyXho",VITE_AUTH_DOMAIN:"opensg1-ee3ab.firebaseapp.com",VITE_PROJECT_ID:"opensg1-ee3ab",VITE_STORAGE_BUCKET:"opensg1-ee3ab.appspot.com",VITE_MESSAGE_SENDER_ID:"546259459574",VITE_APP_ID:"1:546259459574:web:06d2357bad40cac2913bd7",VITE_MEASUREMENT_ID:"G-0M43LNNLQW",VITE_EMAIL_SERVICE_ID:"opensg",VITE_EMAIL_TEMPLATE_ID:"opensg",VITE_EMAIL_API_KEY:"aDu8XkJ0TqEoFFdIN",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const q=s.lazy(()=>a(()=>import("./RootLayout-kR83c8g3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),G=s.lazy(()=>a(()=>import("./About-yotuBo9c.js"),__vite__mapDeps([12,1,4,13,14,5,3,6,7,8,9,15]))),Q=s.lazy(()=>a(()=>import("./Home-2TYmTjFE.js"),__vite__mapDeps([16,1,3,4,17,18,19,20,5,6,7,8,9,21]))),H=s.lazy(()=>a(()=>import("./History-3ojAKdF-.js"),__vite__mapDeps([22,1,18,19,20,4,23,13,14,5,3,6,7,8,9,24]))),J=s.lazy(()=>a(()=>import("./Team--WvIN5VQ.js"),__vite__mapDeps([25,1,4,3,13,14,5,6,7,8,9,26]))),X=s.lazy(()=>a(()=>import("./Location-3na0vQhe.js"),__vite__mapDeps([27,1,4,3,13,14,5,6,7,8,9,28]))),Y=s.lazy(()=>a(()=>import("./Solutions-DRqNUTHp.js"),__vite__mapDeps([29,1,23,30,3,4,17,13,14,5,6,7,8,9,31]))),h=s.lazy(()=>a(()=>import("./MachinesDevices-uO_5H2g_.js"),__vite__mapDeps([32,1,4,3,17,13,14,5,6,7,8,9,33]))),Z=s.lazy(()=>a(()=>import("./Library-443x32HH.js"),__vite__mapDeps([34,1,4,35,36,5,3,6,7,8,9,37]))),ee=s.lazy(()=>a(()=>import("./Industries-hrenbIpP.js"),__vite__mapDeps([38,1,23,4,3,17,30,13,14,5,6,7,8,9,39]))),te=s.lazy(()=>a(()=>import("./Contact-4WQ8KNqU.js"),__vite__mapDeps([40,1,2,4,17,35,36,5,3,6,7,8,9,41]))),oe=s.lazy(()=>a(()=>import("./Community-HdekFyEe.js"),__vite__mapDeps([42,1,8,7,2,5,35,4,36,3,43,44,6,9]))),re=s.lazy(()=>a(()=>import("./CommunityDetail--PnIYiVY.js"),__vite__mapDeps([45,1,35,4,36,8,7,3,9,2,5,43,44,6,11]))),se=s.lazy(()=>a(()=>import("./CommunityForm-HJs2-TZ1.js"),__vite__mapDeps([46,8,7,1,2,9,4,35,36,43,44,3,5,6]))),ne=s.lazy(()=>a(()=>import("./CommunityEdit-286P7pNp.js"),__vite__mapDeps([47,1,46,8,7,2,9,4,35,36,43,44,3,5,6]))),ie=s.lazy(()=>a(()=>import("./Admin-Vl62R9qN.js"),__vite__mapDeps([48,6,7,1,2,5,35,4,36,3,8,9,49]))),ae=b(P(e.jsxs(n,{path:"/",element:e.jsx(q,{}),children:[e.jsx(n,{index:!0,element:e.jsx(Q,{})}),e.jsx(n,{path:"/about",element:e.jsx(G,{})}),e.jsx(n,{path:"/history",element:e.jsx(H,{})}),e.jsx(n,{path:"/team",element:e.jsx(J,{})}),e.jsx(n,{path:"/location",element:e.jsx(X,{})}),e.jsx(n,{path:"/solutions/:id",element:e.jsx(Y,{})}),e.jsx(n,{path:"/machines/:id",element:e.jsx(h,{})}),e.jsx(n,{path:"/devices/:id",element:e.jsx(h,{})}),e.jsx(n,{path:"/industries/:id",element:e.jsx(ee,{})}),e.jsx(n,{path:"/library",element:e.jsx(Z,{})}),e.jsx(n,{path:"/contact",element:e.jsx(te,{})}),e.jsx(n,{path:"/community",element:e.jsx(oe,{})}),e.jsx(n,{path:"/community/:id",element:e.jsx(re,{})}),e.jsx(n,{path:"/community/write",element:e.jsx(se,{})}),e.jsx(n,{path:"/community/:id/edit",element:e.jsx(ne,{})}),e.jsx(n,{path:"/admin",element:e.jsx(ie,{})})]})),{basename:K.PUBLIC_URL});x({key:"authState",default:null,dangerouslyAllowMutability:!0});const ce=x({key:"isLoggedInState",default:!1});var le="firebase",_e="10.7.1";/**
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
 */S(le,_e,"app");const me={apiKey:"AIzaSyDdv3MC6IfWVpSfC669xQZVNexbjFRyXho",authDomain:"opensg1-ee3ab.firebaseapp.com",projectId:"opensg1-ee3ab",storageBucket:"opensg1-ee3ab.appspot.com",messagingSenderId:"546259459574",appId:"1:546259459574:web:06d2357bad40cac2913bd7",measurementId:"G-0M43LNNLQW"},f=C(me),ve=z(f),je=N(f),ue=O(f);function de(){const l=A(ce);return s.useEffect(()=>{const r=V(ue,_=>{l(!!_)});return()=>r()},[l]),e.jsx(D,{router:ae})}E.createRoot(document.getElementById("root")).render(e.jsx(L.StrictMode,{children:e.jsx(T,{children:e.jsx(de,{})})}));export{ue as a,ve as d,ce as i,e as j,je as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RootLayout-kR83c8g3.js","assets/react-t7nT_heO.js","assets/react-toastify.esm-7xZ-A944.js","assets/reactRouter-Jh5tb--W.js","assets/index-Nafxz_UV.js","assets/recoil-Y9BdFwrk.js","assets/fbAuth-Cks-JP-t.js","assets/fbApp-WBmmrZ2E.js","assets/fbStore-ITQ65Lcc.js","assets/fbStorage-DidXJKWr.js","assets/RootLayout-BZRrRq33.css","assets/ReactToastify-Tu_maNMg.css","assets/About-yotuBo9c.js","assets/TitleSection-UI9ND7N5.js","assets/TitleSection-N5doZ7bB.css","assets/About-DiCUvaR1.css","assets/Home-2TYmTjFE.js","assets/v4-yQnnJER4.js","assets/swiper-jDYfAjBv.js","assets/swiper-X5HiyiWn.js","assets/swiper-I65Ue0ij.css","assets/Home-03h6oVgr.css","assets/History-3ojAKdF-.js","assets/index-aNt93lqF.js","assets/History-t8oug2ZK.css","assets/Team--WvIN5VQ.js","assets/Team-ofb5APPW.css","assets/Location-3na0vQhe.js","assets/Location-Z52jtt0n.css","assets/Solutions-DRqNUTHp.js","assets/solutionsData-uoK5eNt0.js","assets/Solutions-4W4yBMKD.css","assets/MachinesDevices-uO_5H2g_.js","assets/MachinesDevices-1RnyLOo6.css","assets/Library-443x32HH.js","assets/BannerSection-TYV_TVPj.js","assets/BannerSection-sKjJakbA.css","assets/Library--ef0LoLf.css","assets/Industries-hrenbIpP.js","assets/Industries-8H2vOhxl.css","assets/Contact-4WQ8KNqU.js","assets/Contact-UJxrPCVA.css","assets/Community-HdekFyEe.js","assets/Community.module-RTKzumna.js","assets/Community-lU3ugx9Y.css","assets/CommunityDetail--PnIYiVY.js","assets/CommunityForm-HJs2-TZ1.js","assets/CommunityEdit-286P7pNp.js","assets/Admin-Vl62R9qN.js","assets/Admin-THYz6zU7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}