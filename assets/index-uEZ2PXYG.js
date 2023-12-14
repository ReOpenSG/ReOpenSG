import{r as A,d as vm,b as z,g as Tm}from"./react-t7nT_heO.js";import{R as Yu,a as Na,b as wm,c as Em}from"./extra-Y9wuK8-d.js";import{L as zs,u as Hs,S as xm,O as Sm,N as en,a as Ws,b as Gs,c as Im,d as bm,R as xe,e as Am}from"./reactRouter-MHKJllhp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var Ju={exports:{}},_i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=A,Pm=Symbol.for("react.element"),Rm=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Nm=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Om={key:!0,ref:!0,__self:!0,__source:!0};function Zu(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)km.call(e,s)&&!Om.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:Pm,type:t,key:i,ref:o,props:r,_owner:Nm.current}}_i.Fragment=Rm;_i.jsx=Zu;_i.jsxs=Zu;Ju.exports=_i;var c=Ju.exports,$o={},sc=vm;$o.createRoot=sc.createRoot,$o.hydrateRoot=sc.hydrateRoot;var rc={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ed=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Dm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),s.push(n[d],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ed(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new Mm;const f=i<<2|a>>4;if(s.push(f),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lm=function(t){const e=ed(t);return td.encodeByteArray(e,!0)},zr=function(t){return Lm(t).replace(/\./g,"")},nd=function(t){try{return td.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const jm=()=>Vm().__FIREBASE_DEFAULTS__,Fm=()=>{if(typeof process>"u"||typeof rc>"u")return;const t=rc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Um=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nd(t[1]);return e&&JSON.parse(e)},Oa=()=>{try{return jm()||Fm()||Um()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sd=t=>{var e,n;return(n=(e=Oa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rd=t=>{const e=sd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},id=()=>{var t;return(t=Oa())===null||t===void 0?void 0:t.config},od=t=>{var e;return(e=Oa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ad(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[zr(JSON.stringify(n)),zr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function qm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hm(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Km="FirebaseError";class yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Km,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Qm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yt(r,a,s)}}function Qm(t,e){return t.replace(Xm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xm=/\{\$([^}]+)}/g;function Ym(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ic(i)&&ic(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ic(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jm(t,e){const n=new Zm(t,e);return n.subscribe.bind(n)}class Zm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");eg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ao),r.error===void 0&&(r.error=ao),r.complete===void 0&&(r.complete=ao);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ao(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function le(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sg(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ng(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ng(t){return t===Jt?void 0:t}function sg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const ig={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},og=Z.INFO,ag={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},lg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ag[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=og,this._logHandler=lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ig[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const cg=(t,e)=>e.some(n=>t instanceof n);let oc,ac;function ug(){return oc||(oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dg(){return ac||(ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ld=new WeakMap,qo=new WeakMap,cd=new WeakMap,lo=new WeakMap,Ma=new WeakMap;function hg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ld.set(n,t)}).catch(()=>{}),Ma.set(e,t),e}function fg(t){if(qo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qo.set(t,e)}let zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pg(t){zo=t(zo)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(co(this),e,...n);return cd.set(s,e.sort?e.sort():[e]),Bt(s)}:dg().includes(t)?function(...e){return t.apply(co(this),e),Bt(ld.get(this))}:function(...e){return Bt(t.apply(co(this),e))}}function gg(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&fg(t),cg(t,ug())?new Proxy(t,zo):t)}function Bt(t){if(t instanceof IDBRequest)return hg(t);if(lo.has(t))return lo.get(t);const e=gg(t);return e!==t&&(lo.set(t,e),Ma.set(e,t)),e}const co=t=>Ma.get(t);function yg(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Bt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Bt(o.result),l.oldVersion,l.newVersion,Bt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _g=["get","getKey","getAll","getAllKeys","count"],vg=["put","add","delete","clear"],uo=new Map;function lc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_g.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return uo.set(e,i),i}pg(t=>({...t,get:(e,n,s)=>lc(e,n)||t.get(e,n,s),has:(e,n)=>!!lc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Tg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ho="@firebase/app",cc="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ln=new Da("@firebase/app"),Eg="@firebase/app-compat",xg="@firebase/analytics-compat",Sg="@firebase/analytics",Ig="@firebase/app-check-compat",bg="@firebase/app-check",Ag="@firebase/auth",Cg="@firebase/auth-compat",Pg="@firebase/database",Rg="@firebase/database-compat",kg="@firebase/functions",Ng="@firebase/functions-compat",Og="@firebase/installations",Dg="@firebase/installations-compat",Mg="@firebase/messaging",Lg="@firebase/messaging-compat",Vg="@firebase/performance",jg="@firebase/performance-compat",Fg="@firebase/remote-config",Ug="@firebase/remote-config-compat",Bg="@firebase/storage",$g="@firebase/storage-compat",qg="@firebase/firestore",zg="@firebase/firestore-compat",Hg="firebase",Wg="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Wo="[DEFAULT]",Gg={[Ho]:"fire-core",[Eg]:"fire-core-compat",[Sg]:"fire-analytics",[xg]:"fire-analytics-compat",[bg]:"fire-app-check",[Ig]:"fire-app-check-compat",[Ag]:"fire-auth",[Cg]:"fire-auth-compat",[Pg]:"fire-rtdb",[Rg]:"fire-rtdb-compat",[kg]:"fire-fn",[Ng]:"fire-fn-compat",[Og]:"fire-iid",[Dg]:"fire-iid-compat",[Mg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Vg]:"fire-perf",[jg]:"fire-perf-compat",[Fg]:"fire-rc",[Ug]:"fire-rc-compat",[Bg]:"fire-gcs",[$g]:"fire-gcs-compat",[qg]:"fire-fst",[zg]:"fire-fst-compat","fire-js":"fire-js",[Hg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Wr=new Map,Go=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Go.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Go.set(e,t);for(const n of Wr.values())Kg(n,t);return!0}function vi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Qg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new Ks("app","Firebase",Qg);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Xg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const yn=Wg;function ud(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw $t.create("bad-app-name",{appName:String(r)});if(n||(n=id()),!n)throw $t.create("no-options");const i=Wr.get(r);if(i){if(Hr(n,i.options)&&Hr(s,i.config))return i;throw $t.create("duplicate-app",{appName:r})}const o=new rg(r);for(const l of Go.values())o.addComponent(l);const a=new Xg(n,s,o);return Wr.set(r,a),a}function La(t=Wo){const e=Wr.get(t);if(!e&&t===Wo&&id())return ud();if(!e)throw $t.create("no-app",{appName:t});return e}function ut(t,e,n){var s;let r=(s=Gg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}cn(new zt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Yg="firebase-heartbeat-database",Jg=1,Ss="firebase-heartbeat-store";let ho=null;function dd(){return ho||(ho=yg(Yg,Jg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}}).catch(t=>{throw $t.create("idb-open",{originalErrorMessage:t.message})})),ho}async function Zg(t){try{return await(await dd()).transaction(Ss).objectStore(Ss).get(hd(t))}catch(e){if(e instanceof yt)ln.warn(e.message);else{const n=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function uc(t,e){try{const s=(await dd()).transaction(Ss,"readwrite");await s.objectStore(Ss).put(e,hd(t)),await s.done}catch(n){if(n instanceof yt)ln.warn(n.message);else{const s=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(s.message)}}}function hd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ry(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ty}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dc(),{heartbeatsToSend:s,unsentEntries:r}=sy(this._heartbeatsCache.heartbeats),i=zr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dc(){return new Date().toISOString().substring(0,10)}function sy(t,e=ey){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),hc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hc(t){return zr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function iy(t){cn(new zt("platform-logger",e=>new Tg(e),"PRIVATE")),cn(new zt("heartbeat",e=>new ny(e),"PRIVATE")),ut(Ho,cc,t),ut(Ho,cc,"esm2017"),ut("fire-js","")}iy("");function Va(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oy=fd,pd=new Ks("auth","Firebase",fd());/**
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
 */const Gr=new Da("@firebase/auth");function ay(t,...e){Gr.logLevel<=Z.WARN&&Gr.warn(`Auth (${yn}): ${t}`,...e)}function Nr(t,...e){Gr.logLevel<=Z.ERROR&&Gr.error(`Auth (${yn}): ${t}`,...e)}/**
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
 */function rt(t,...e){throw ja(t,...e)}function dt(t,...e){return ja(t,...e)}function ly(t,e,n){const s=Object.assign(Object.assign({},oy()),{[e]:n});return new Ks("auth","Firebase",s).create(e,{appName:t.name})}function ja(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return pd.create(t,...e)}function B(t,e,...n){if(!t)throw ja(e,...n)}function wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nr(e),new Error(e)}function bt(t,e){t||wt(e)}/**
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
 */function Ko(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cy(){return fc()==="http:"||fc()==="https:"}function fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cy()||qm()||"connection"in navigator)?navigator.onLine:!0}function dy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=$m()||zm()}get(){return uy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fa(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class md{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fy=new Xs(3e4,6e4);function _n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kt(t,e,n,s,r={}){return gd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),md.fetch()(yd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function gd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hy),e);try{const r=new my(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pr(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ly(t,d,u);rt(t,d)}}catch(r){if(r instanceof yt)throw r;rt(t,"network-request-failed",{message:String(r)})}}async function Ti(t,e,n,s,r={}){const i=await Kt(t,e,n,s,r);return"mfaPendingCredential"in i&&rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Fa(t.config,r):`${t.config.apiScheme}://${r}`}function py(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class my{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dt(this.auth,"network-request-failed")),fy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=dt(t,e,s);return r.customData._tokenResponse=n,r}function pc(t){return t!==void 0&&t.enterprise!==void 0}class gy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return py(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yy(t,e){return Kt(t,"GET","/v2/recaptchaConfig",_n(t,e))}/**
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
 */async function _y(t,e){return Kt(t,"POST","/v1/accounts:delete",e)}async function vy(t,e){return Kt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ty(t,e=!1){const n=le(t),s=await n.getIdToken(e),r=Ua(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:fs(fo(r.auth_time)),issuedAtTime:fs(fo(r.iat)),expirationTime:fs(fo(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fo(t){return Number(t)*1e3}function Ua(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const r=nd(n);return r?JSON.parse(r):(Nr("Failed to decode base64 JWT payload"),null)}catch(r){return Nr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wy(t){const e=Ua(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yt&&Ey(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ey({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Kr(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Is(t,vy(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?by(i.providerUserInfo):[],a=Iy(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _d(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Sy(t){const e=le(t);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Iy(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function by(t){return t.map(e=>{var{providerId:n}=e,s=Va(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Ay(t,e){const n=await gd(t,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=yd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",md.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cy(t,e){return Kt(t,"POST","/v2/accounts:revokeToken",_n(t,e))}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ay(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new bs;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function kt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Va(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ty(this,e)}reload(){return Sy(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Is(this,_y(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,d;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:w,isAnonymous:S,providerData:R,stsTokenManager:j}=n;B(v&&j,e,"internal-error");const O=bs.fromJSON(this.name,j);B(typeof v=="string",e,"internal-error"),kt(h,e.name),kt(f,e.name),B(typeof w=="boolean",e,"internal-error"),B(typeof S=="boolean",e,"internal-error"),kt(p,e.name),kt(m,e.name),kt(_,e.name),kt(g,e.name),kt(y,e.name),kt(E,e.name);const P=new rn({uid:v,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:S,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:O,createdAt:y,lastLoginAt:E});return R&&Array.isArray(R)&&(P.providerData=R.map(C=>Object.assign({},C))),g&&(P._redirectEventId=g),P}static async _fromIdTokenResponse(e,n,s=!1){const r=new bs;r.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Kr(i),i}}/**
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
 */const mc=new Map;function Et(t){bt(t instanceof Function,"Expected a class definition");let e=mc.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vd.type="NONE";const gc=vd;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class Pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Or(this.userKey,r.apiKey,i),this.fullPersistenceKey=Or("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Pn(Et(gc),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Et(gc);const o=Or(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const h=rn._fromJSON(e,d);u!==i&&(a=h),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Pn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Pn(i,e,s))}}/**
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
 */function yc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sd(e))return"Blackberry";if(Id(e))return"Webos";if(Ba(e))return"Safari";if((e.includes("chrome/")||wd(e))&&!e.includes("edge/"))return"Chrome";if(xd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Td(t=Ve()){return/firefox\//i.test(t)}function Ba(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wd(t=Ve()){return/crios\//i.test(t)}function Ed(t=Ve()){return/iemobile/i.test(t)}function xd(t=Ve()){return/android/i.test(t)}function Sd(t=Ve()){return/blackberry/i.test(t)}function Id(t=Ve()){return/webos/i.test(t)}function wi(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Py(t=Ve()){var e;return wi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ry(){return Hm()&&document.documentMode===10}function bd(t=Ve()){return wi(t)||xd(t)||Id(t)||Sd(t)||/windows phone/i.test(t)||Ed(t)}function ky(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ad(t,e=[]){let n;switch(t){case"Browser":n=yc(Ve());break;case"Worker":n=`${yc(Ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ny{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Oy(t,e={}){return Kt(t,"GET","/v2/passwordPolicy",_n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Dy=6;class My{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Dy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ly{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _c(this),this.idTokenSubscription=new _c(this),this.beforeStateQueue=new Ny(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?le(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oy(this),n=new My(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Cy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ay(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wn(t){return le(t)}class _c{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jm(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Vy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Cd(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Vy().appendChild(s)})}function jy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Fy="https://www.google.com/recaptcha/enterprise.js?render=",Uy="recaptcha-enterprise",By="NO_RECAPTCHA";class $y{constructor(e){this.type=Uy,this.auth=Wn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{yy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new gy(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;pc(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(By)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&pc(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Cd(Fy+a).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function vc(t,e,n,s=!1){const r=new $y(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Tc(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await vc(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vc(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function qy(t,e){const n=vi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return r;rt(r,"already-initialized")}return n.initialize({options:e})}function zy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Hy(t,e,n){const s=Wn(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Pd(e),{host:o,port:a}=Wy(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Gy()}function Pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wy(t){const e=Pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:wc(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:wc(o)}}}function wc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $a{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,n){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function Ky(t,e){return Kt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Qy(t,e){return Ti(t,"POST","/v1/accounts:signInWithPassword",_n(t,e))}/**
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
 */async function Xy(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}async function Yy(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",_n(t,e))}/**
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
 */class As extends $a{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new As(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new As(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,n,"signInWithPassword",Qy);case"emailLink":return Xy(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tc(e,s,"signUpPassword",Ky);case"emailLink":return Yy(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rn(t,e){return Ti(t,"POST","/v1/accounts:signInWithIdp",_n(t,e))}/**
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
 */const Jy="http://localhost";class un extends $a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Va(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new un(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:Jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
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
 */function Zy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e_(t){const e=is(os(t)).link,n=e?is(os(e)).deep_link_id:null,s=is(os(t)).deep_link_id;return(s?is(os(s)).link:null)||s||n||e||t}class qa{constructor(e){var n,s,r,i,o,a;const l=is(os(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Zy((r=l.mode)!==null&&r!==void 0?r:null);B(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=e_(e);try{return new qa(n)}catch{return null}}}/**
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
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=qa.parseLink(n);return B(s,"argument-error"),As._fromEmailAndCode(e,s.code,s.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ys extends Rd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ot extends Ys{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class Dt extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return un._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Dt.credential(n,s)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
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
 */class Mt extends Ys{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class Lt extends Ys{constructor(){super("twitter.com")}static credential(e,n){return un._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Lt.credential(n,s)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await rn._fromIdTokenResponse(e,s,r),o=Ec(s);return new Mn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ec(s);return new Mn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ec(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qr extends yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Qr(e,n,s,r)}}function kd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(t,i,e,s):i})}async function t_(t,e,n=!1){const s=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function n_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Is(t,kd(s,r,e,t),n);B(i.idToken,s,"internal-error");const o=Ua(i.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),Mn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(s,"user-mismatch"),i}}/**
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
 */async function Nd(t,e,n=!1){const s="signIn",r=await kd(t,s,e),i=await Mn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function s_(t,e){return Nd(Wn(t),e)}/**
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
 */async function r_(t){const e=Wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function i_(t,e,n){return s_(le(t),Gn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&r_(t),s})}/**
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
 */function o_(t,e){return le(t).setPersistence(e)}function a_(t,e,n,s){return le(t).onIdTokenChanged(e,n,s)}function l_(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function c_(t,e,n,s){return le(t).onAuthStateChanged(e,n,s)}function u_(t){return le(t).signOut()}const Xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Od{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function d_(){const t=Ve();return Ba(t)||wi(t)}const h_=1e3,f_=10;class Dd extends Od{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=d_()&&ky(),this.fallbackToPolling=bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Ry()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,f_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dd.type="LOCAL";const p_=Dd;/**
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
 */class Md extends Od{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Md.type="SESSION";const za=Md;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function m_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ei(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await m_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ei.receivers=[];/**
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
 */function Ha(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class g_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ha("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ht(){return window}function y_(t){ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ld(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function __(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function T_(){return Ld()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vd="firebaseLocalStorageDb",w_=1,Yr="firebaseLocalStorage",jd="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xi(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function E_(){const t=indexedDB.deleteDatabase(Vd);return new Js(t).toPromise()}function Qo(){const t=indexedDB.open(Vd,w_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Yr,{keyPath:jd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Yr)?e(s):(s.close(),await E_(),e(await Qo()))})})}async function xc(t,e,n){const s=xi(t,!0).put({[jd]:e,value:n});return new Js(s).toPromise()}async function x_(t,e){const n=xi(t,!1).get(e),s=await new Js(n).toPromise();return s===void 0?null:s.value}function Sc(t,e){const n=xi(t,!0).delete(e);return new Js(n).toPromise()}const S_=800,I_=3;class Fd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>I_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ld()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ei._getInstance(T_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await __(),!this.activeServiceWorker)return;this.sender=new g_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qo();return await xc(e,Xr,"1"),await Sc(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>xc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>x_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xi(r,!1).getAll();return new Js(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fd.type="LOCAL";const b_=Fd;new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function A_(t,e){return e?Et(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Wa extends $a{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function C_(t){return Nd(t.auth,new Wa(t),t.bypassAuthState)}function P_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),n_(n,new Wa(t),t.bypassAuthState)}async function R_(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),t_(n,new Wa(t),t.bypassAuthState)}/**
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
 */class Ud{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C_;case"linkViaPopup":case"linkViaRedirect":return R_;case"reauthViaPopup":case"reauthViaRedirect":return P_;default:rt(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k_=new Xs(2e3,1e4);class bn extends Ud{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k_.get())};e()}}bn.currentPopupAction=null;/**
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
 */const N_="pendingRedirect",Dr=new Map;class O_ extends Ud{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const s=await D_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D_(t,e){const n=V_(e),s=L_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function M_(t,e){Dr.set(t._key(),e)}function L_(t){return Et(t._redirectPersistence)}function V_(t){return Or(N_,t.config.apiKey,t.name)}async function j_(t,e,n=!1){const s=Wn(t),r=A_(s,e),o=await new O_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const F_=10*60*1e3;class U_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bd(t);default:return!1}}/**
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
 */async function $_(t,e={}){return Kt(t,"GET","/v1/projects",e)}/**
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
 */const q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z_=/^https?/;async function H_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $_(t);for(const n of e)try{if(W_(n))return}catch{}rt(t,"unauthorized-domain")}function W_(t){const e=Ko(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!z_.test(n))return!1;if(q_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const G_=new Xs(3e4,6e4);function bc(){const t=ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function K_(t){return new Promise((e,n)=>{var s,r,i;function o(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(dt(t,"network-request-failed"))},timeout:G_.get()})}if(!((r=(s=ht().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ht().gapi)===null||i===void 0)&&i.load)o();else{const a=jy("iframefcb");return ht()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},Cd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Mr=null,e})}let Mr=null;function Q_(t){return Mr=Mr||K_(t),Mr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const X_=new Xs(5e3,15e3),Y_="__/auth/iframe",J_="emulator/auth/iframe",Z_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tv(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fa(e,J_):`https://${t.config.authDomain}/${Y_}`,s={apiKey:e.apiKey,appName:t.name,v:yn},r=ev.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Qs(s).slice(1)}`}async function nv(t){const e=await Q_(t),n=ht().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:tv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=ht().setTimeout(()=>{i(o)},X_.get());function l(){ht().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rv=500,iv=600,ov="_blank",av="http://localhost";class Ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lv(t,e,n,s=rv,r=iv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sv),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ve().toLowerCase();n&&(a=wd(u)?ov:n),Td(u)&&(e=e||av,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(Py(u)&&a!=="_self")return cv(e||"",a),new Ac(null);const h=window.open(e||"",a,d);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Ac(h)}function cv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const uv="__/auth/handler",dv="emulator/auth/handler",hv=encodeURIComponent("fac");async function Cc(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yn,eventId:r};if(e instanceof Rd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ym(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(i||{}))o[d]=h}if(e instanceof Ys){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${hv}=${encodeURIComponent(l)}`:"";return`${fv(t)}?${Qs(a).slice(1)}${u}`}function fv({config:t}){return t.emulator?Fa(t,dv):`https://${t.authDomain}/${uv}`}/**
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
 */const po="webStorageSupport";class pv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=za,this._completeRedirectFn=j_,this._overrideRedirectResult=M_}async _openPopup(e,n,s,r){var i;bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cc(e,n,s,Ko(),r);return lv(e,o,Ha())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Cc(e,n,s,Ko(),r);return y_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(bt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nv(e),s=new U_(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(po,{type:po},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[po];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bd()||Ba()||wi()}}const mv=pv;var Pc="@firebase/auth",Rc="1.5.1";/**
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
 */class gv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _v(t){cn(new zt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ad(t)},u=new Ly(s,r,i,l);return zy(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cn(new zt("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(s=>new gv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(Pc,Rc,yv(t)),ut(Pc,Rc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const vv=5*60,Tv=od("authIdTokenMaxAge")||vv;let kc=null;const wv=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Tv)return;const r=n==null?void 0:n.token;kc!==r&&(kc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ev(t=La()){const e=vi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qy(t,{popupRedirectResolver:mv,persistence:[b_,p_,za]}),s=od("authTokenSyncURL");if(s){const i=wv(s);l_(n,i,()=>i(n.currentUser)),a_(n,o=>i(o))}const r=sd("auth");return r&&Hy(n,`http://${r}`),n}_v("Browser");function $d(t){var e,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=$d(t[e]))&&(s&&(s+=" "),s+=n);else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}function jt(){for(var t,e,n=0,s="";n<arguments.length;)(t=arguments[n++])&&(e=$d(t))&&(s&&(s+=" "),s+=e);return s}const ps=t=>typeof t=="number"&&!isNaN(t),dn=t=>typeof t=="string",ze=t=>typeof t=="function",Lr=t=>dn(t)||ze(t)?t:null,mo=t=>A.isValidElement(t)||dn(t)||ze(t)||ps(t);function xv(t,e,n){n===void 0&&(n=300);const{scrollHeight:s,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=s+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)})})}function Si(t){let{enter:e,exit:n,appendPosition:s=!1,collapse:r=!0,collapseDuration:i=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:d,nodeRef:h,isIn:f}=o;const p=s?`${e}--${l}`:e,m=s?`${n}--${l}`:n,_=A.useRef(0);return A.useLayoutEffect(()=>{const g=h.current,y=p.split(" "),E=v=>{v.target===h.current&&(g.dispatchEvent(new Event("d")),g.removeEventListener("animationend",E),g.removeEventListener("animationcancel",E),_.current===0&&v.type!=="animationcancel"&&g.classList.remove(...y))};g.classList.add(...y),g.addEventListener("animationend",E),g.addEventListener("animationcancel",E)},[]),A.useEffect(()=>{const g=h.current,y=()=>{g.removeEventListener("animationend",y),r?xv(g,d,i):d()};f||(u?y():(_.current=1,g.className+=` ${m}`,g.addEventListener("animationend",y)))},[f]),z.createElement(z.Fragment,null,a)}}function Nc(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Ze={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(s=>s!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},mr=t=>{let{theme:e,type:n,...s}=t;return z.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...s})},go={info:function(t){return z.createElement(mr,{...t},z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return z.createElement(mr,{...t},z.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return z.createElement(mr,{...t},z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return z.createElement(mr,{...t},z.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return z.createElement("div",{className:"Toastify__spinner"})}};function Sv(t){const[,e]=A.useReducer(p=>p+1,0),[n,s]=A.useState([]),r=A.useRef(null),i=A.useRef(new Map).current,o=p=>n.indexOf(p)!==-1,a=A.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:p=>i.get(p)}).current;function l(p){let{containerId:m}=p;const{limit:_}=a.props;!_||m&&a.containerId!==m||(a.count-=a.queue.length,a.queue=[])}function u(p){s(m=>p==null?[]:m.filter(_=>_!==p))}function d(){const{toastContent:p,toastProps:m,staleId:_}=a.queue.shift();f(p,m,_)}function h(p,m){let{delay:_,staleId:g,...y}=m;if(!mo(p)||function(L){return!r.current||a.props.enableMultiContainer&&L.containerId!==a.props.containerId||i.has(L.toastId)&&L.updateId==null}(y))return;const{toastId:E,updateId:v,data:w}=y,{props:S}=a,R=()=>u(E),j=v==null;j&&a.count++;const O={...S,style:S.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(L=>{let[k,q]=L;return q!=null})),toastId:E,updateId:v,data:w,closeToast:R,isIn:!1,className:Lr(y.className||S.toastClassName),bodyClassName:Lr(y.bodyClassName||S.bodyClassName),progressClassName:Lr(y.progressClassName||S.progressClassName),autoClose:!y.isLoading&&(P=y.autoClose,C=S.autoClose,P===!1||ps(P)&&P>0?P:C),deleteToast(){const L=Nc(i.get(E),"removed");i.delete(E),Ze.emit(4,L);const k=a.queue.length;if(a.count=E==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),k>0){const q=E==null?a.props.limit:1;if(k===1||q===1)a.displayedToast++,d();else{const J=q>k?k:q;a.displayedToast=J;for(let te=0;te<J;te++)d()}}else e()}};var P,C;O.iconOut=function(L){let{theme:k,type:q,isLoading:J,icon:te}=L,pe=null;const Re={theme:k,type:q};return te===!1||(ze(te)?pe=te(Re):A.isValidElement(te)?pe=A.cloneElement(te,Re):dn(te)||ps(te)?pe=te:J?pe=go.spinner():(ie=>ie in go)(q)&&(pe=go[q](Re))),pe}(O),ze(y.onOpen)&&(O.onOpen=y.onOpen),ze(y.onClose)&&(O.onClose=y.onClose),O.closeButton=S.closeButton,y.closeButton===!1||mo(y.closeButton)?O.closeButton=y.closeButton:y.closeButton===!0&&(O.closeButton=!mo(S.closeButton)||S.closeButton);let M=p;A.isValidElement(p)&&!dn(p.type)?M=A.cloneElement(p,{closeToast:R,toastProps:O,data:w}):ze(p)&&(M=p({closeToast:R,toastProps:O,data:w})),S.limit&&S.limit>0&&a.count>S.limit&&j?a.queue.push({toastContent:M,toastProps:O,staleId:g}):ps(_)?setTimeout(()=>{f(M,O,g)},_):f(M,O,g)}function f(p,m,_){const{toastId:g}=m;_&&i.delete(_);const y={content:p,props:m};i.set(g,y),s(E=>[...E,g].filter(v=>v!==_)),Ze.emit(4,Nc(y,y.props.updateId==null?"added":"updated"))}return A.useEffect(()=>(a.containerId=t.containerId,Ze.cancelEmit(3).on(0,h).on(1,p=>r.current&&u(p)).on(5,l).emit(2,a),()=>{i.clear(),Ze.emit(3,a)}),[]),A.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(p){const m=new Map,_=Array.from(i.values());return t.newestOnTop&&_.reverse(),_.forEach(g=>{const{position:y}=g.props;m.has(y)||m.set(y,[]),m.get(y).push(g)}),Array.from(m,g=>p(g[0],g[1]))},containerRef:r,isToastActive:o}}function Oc(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Dc(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Iv(t){const[e,n]=A.useState(!1),[s,r]=A.useState(!1),i=A.useRef(null),o=A.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=A.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:d,onClick:h,closeOnClick:f}=t;function p(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",E),document.addEventListener("touchmove",y),document.addEventListener("touchend",E);const S=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=Oc(w.nativeEvent),o.y=Dc(w.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(w){if(o.boundingRect){const{top:S,bottom:R,left:j,right:O}=o.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=j&&o.x<=O&&o.y>=S&&o.y<=R?g():_()}}function _(){n(!0)}function g(){n(!1)}function y(w){const S=i.current;o.canDrag&&S&&(o.didMove=!0,e&&g(),o.x=Oc(w),o.y=Dc(w),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function E(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",E);const w=i.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return r(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}A.useEffect(()=>{a.current=t}),A.useEffect(()=>(i.current&&i.current.addEventListener("d",_,{once:!0}),ze(t.onOpen)&&t.onOpen(A.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;ze(w.onClose)&&w.onClose(A.isValidElement(w.children)&&w.children.props)}),[]),A.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||g(),window.addEventListener("focus",_),window.addEventListener("blur",g)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",g))}),[t.pauseOnFocusLoss]);const v={onMouseDown:p,onTouchStart:p,onMouseUp:m,onTouchEnd:m};return l&&u&&(v.onMouseEnter=g,v.onMouseLeave=_),f&&(v.onClick=w=>{h&&h(w),o.canCloseOnClick&&d()}),{playToast:_,pauseToast:g,isRunning:e,preventExitTransition:s,toastRef:i,eventHandlers:v}}function qd(t){let{closeToast:e,theme:n,ariaLabel:s="close"}=t;return z.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:r=>{r.stopPropagation(),e(r)},"aria-label":s},z.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},z.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function bv(t){let{delay:e,isRunning:n,closeToast:s,type:r="default",hide:i,className:o,style:a,controlledProgress:l,progress:u,rtl:d,isIn:h,theme:f}=t;const p=i||l&&u===0,m={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(m.transform=`scaleX(${u})`);const _=jt("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":d}),g=ze(o)?o({rtl:d,type:r,defaultClassName:_}):jt(_,o);return z.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:g,style:m,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&s()}})}const Av=t=>{const{isRunning:e,preventExitTransition:n,toastRef:s,eventHandlers:r}=Iv(t),{closeButton:i,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:d,closeToast:h,transition:f,position:p,className:m,style:_,bodyClassName:g,bodyStyle:y,progressClassName:E,progressStyle:v,updateId:w,role:S,progress:R,rtl:j,toastId:O,deleteToast:P,isIn:C,isLoading:M,iconOut:L,closeOnClick:k,theme:q}=t,J=jt("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":k}),te=ze(m)?m({rtl:j,position:p,type:u,defaultClassName:J}):jt(J,m),pe=!!R||!a,Re={closeToast:h,type:u,theme:q};let ie=null;return i===!1||(ie=ze(i)?i(Re):A.isValidElement(i)?A.cloneElement(i,Re):qd(Re)),z.createElement(f,{isIn:C,done:P,position:p,preventExitTransition:n,nodeRef:s},z.createElement("div",{id:O,onClick:l,className:te,...r,style:_,ref:s},z.createElement("div",{...C&&{role:S},className:ze(g)?g({type:u}):jt("Toastify__toast-body",g),style:y},L!=null&&z.createElement("div",{className:jt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},L),z.createElement("div",null,o)),ie,z.createElement(bv,{...w&&!pe?{key:`pb-${w}`}:{},rtl:j,theme:q,delay:a,isRunning:e,isIn:C,closeToast:h,hide:d,type:u,style:v,className:E,controlledProgress:pe,progress:R||0})))},Ii=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Cv=Si(Ii("bounce",!0));Si(Ii("slide",!0));Si(Ii("zoom"));Si(Ii("flip"));const Xo=A.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:s,isToastActive:r}=Sv(t),{className:i,style:o,rtl:a,containerId:l}=t;function u(d){const h=jt("Toastify__toast-container",`Toastify__toast-container--${d}`,{"Toastify__toast-container--rtl":a});return ze(i)?i({position:d,rtl:a,defaultClassName:h}):jt(h,Lr(i))}return A.useEffect(()=>{e&&(e.current=s.current)},[]),z.createElement("div",{ref:s,className:"Toastify",id:l},n((d,h)=>{const f=h.length?{...o}:{...o,pointerEvents:"none"};return z.createElement("div",{className:u(d),style:f,key:`container-${d}`},h.map((p,m)=>{let{content:_,props:g}=p;return z.createElement(Av,{...g,isIn:r(g.toastId),style:{...g.style,"--nth":m+1,"--len":h.length},key:`toast-${g.key}`},_)}))}))});Xo.displayName="ToastContainer",Xo.defaultProps={position:"top-right",transition:Cv,autoClose:5e3,closeButton:qd,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let yo,Zt=new Map,as=[],Pv=1;function zd(){return""+Pv++}function Rv(t){return t&&(dn(t.toastId)||ps(t.toastId))?t.toastId:zd()}function ms(t,e){return Zt.size>0?Ze.emit(0,t,e):as.push({content:t,options:e}),e.toastId}function Jr(t,e){return{...e,type:e&&e.type||t,toastId:Rv(e)}}function gr(t){return(e,n)=>ms(e,Jr(t,n))}function X(t,e){return ms(t,Jr("default",e))}X.loading=(t,e)=>ms(t,Jr("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),X.promise=function(t,e,n){let s,{pending:r,error:i,success:o}=e;r&&(s=dn(r)?X.loading(r,n):X.loading(r.render,{...n,...r}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,h,f)=>{if(h==null)return void X.dismiss(s);const p={type:d,...a,...n,data:f},m=dn(h)?{render:h}:h;return s?X.update(s,{...p,...m}):X(m.render,{...p,...m}),f},u=ze(t)?t():t;return u.then(d=>l("success",o,d)).catch(d=>l("error",i,d)),u},X.success=gr("success"),X.info=gr("info"),X.error=gr("error"),X.warning=gr("warning"),X.warn=X.warning,X.dark=(t,e)=>ms(t,Jr("default",{theme:"dark",...e})),X.dismiss=t=>{Zt.size>0?Ze.emit(1,t):as=as.filter(e=>t!=null&&e.options.toastId!==t)},X.clearWaitingQueue=function(t){return t===void 0&&(t={}),Ze.emit(5,t)},X.isActive=t=>{let e=!1;return Zt.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},X.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(s,r){let{containerId:i}=r;const o=Zt.get(i||yo);return o&&o.getToast(s)}(t,e);if(n){const{props:s,content:r}=n,i={delay:100,...s,...e,toastId:e.toastId||t,updateId:zd()};i.toastId!==t&&(i.staleId=t);const o=i.render||r;delete i.render,ms(o,i)}},0)},X.done=t=>{X.update(t,{progress:1})},X.onChange=t=>(Ze.on(4,t),()=>{Ze.off(4,t)}),X.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},X.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ze.on(2,t=>{yo=t.containerId||t,Zt.set(yo,t),as.forEach(e=>{Ze.emit(0,e.content,e.options)}),as=[]}).on(3,t=>{Zt.delete(t.containerId||t),Zt.size===0&&Ze.off(0).off(1).off(5)});var Hd={exports:{}},kv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Nv=kv,Ov=Nv;function Wd(){}function Gd(){}Gd.resetWarningCache=Wd;var Dv=function(){function t(s,r,i,o,a,l){if(l!==Ov){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Gd,resetWarningCache:Wd};return n.PropTypes=n,n};Hd.exports=Dv();var x=Hd.exports;const T=Tm(x),Mv="XjEN",Lv="KDHV",Vv="aJv3",jv="_0efm",Fv="ZqHC",Uv="_2cvG",Ln={linkName:Mv,tooltip:Lv,accordionItemSmall:Vv,accrodioItemLarge:jv,arrowDefault:Fv,arrowDown:Uv};function N({linkName:t,linkAddress:e,tooltip:n}){return c.jsx("li",{children:c.jsxs(zs,{to:e,className:Ln.linkName,children:[c.jsx("span",{className:Ln.tooltip,children:n}),t]})})}N.propTypes={linkName:T.string.isRequired,tooltip:T.string,linkAddress:T.string.isRequired};N.defaultProps={tooltip:""};function Kd({sitemapRef:t}){return c.jsx("div",{className:"mobile:hidden absolute left-0 top-[80px] w-full",ref:t,children:c.jsxs("ul",{className:"flex flex-row justify-center gap-open-3xl py-open-gutter-desktop -bg--openfoundation-primary",children:[c.jsxs("li",{className:"px-open-md py-open-sm text-open-font-xl font-open-heading",children:["About Us",c.jsxs("ul",{className:"flex flex-col gap-open-md py-open-xl text-open-font-large font-open-paragraph border-t-[1px] -border--openfoundation-secondary",children:[c.jsx(N,{linkName:"회사개요",linkAddress:"/about"}),c.jsx(N,{linkName:"연혁",linkAddress:"/history"}),c.jsx(N,{linkName:"직무소개",linkAddress:"/team"}),c.jsx(N,{linkName:"오시는길",linkAddress:"/location"})]})]}),c.jsxs("li",{className:"px-open-md py-open-sm text-open-font-xl font-open-heading",children:["Products",c.jsx("div",{className:"",children:c.jsxs("ul",{className:"flex flex-row gap-open-xl py-open-xl text-open-font-large font-open-label border-t-[1px] -border--openfoundation-secondary",children:[c.jsxs("li",{children:["Solutions",c.jsxs("ul",{className:"font-open-paragraph flex flex-col pt-open-lg gap-open-lg",children:[c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Equipment Control System",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"ACS/FMS",tooltip:"AGV Control System / Fleet Management System",linkAddress:"solutions/ACS"}),c.jsx(N,{linkName:"OCS",tooltip:"OHT Control System",linkAddress:"solutions/OCS"}),c.jsx(N,{linkName:"SCS",tooltip:"Stocker Control System",linkAddress:"solutions/SCS"}),c.jsx(N,{linkName:"CCS",tooltip:"Conveyor Control System",linkAddress:"solutions/CCS"}),c.jsx(N,{linkName:"IDX Controller",tooltip:"Index Control System",linkAddress:"solutions/IDX Controller"})]})]}),c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Smart Tools",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"Map Designer",linkAddress:"solutions/Map Designer"}),c.jsx(N,{linkName:"ACS Simulator",tooltip:"AGV Control System Simulator",linkAddress:"solutions/ACS Simulator"}),c.jsx(N,{linkName:"SCS Simulator",tooltip:"Stocker Control System Simulator",linkAddress:"solutions/SCS Simulator"})]})]}),c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Monitoring Solution",c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:c.jsx(N,{linkName:"AIMS",tooltip:"Advanced Integrated Monitoring Solution",linkAddress:"solutions/AIMS"})})]}),c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Comm Driver",c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:c.jsx(N,{linkName:"Open HSMS",linkAddress:"solutions/Open HSMS"})})]})]})]}),c.jsxs("li",{children:["Smart Machine",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph",children:[c.jsx(N,{linkName:"AGV - Lift Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - Conveyor Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - Fork-Lift Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - 협동 Robot 탑재 Type",linkAddress:"/"})]})]}),c.jsxs("li",{children:["Smart Device",c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph",children:c.jsx(N,{linkName:"Microsoft Hololens 2",linkAddress:"/"})})]}),c.jsxs("li",{className:"text-[#FFE500]",children:["Industries",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"반도체",linkAddress:"/industries/semiconductor"}),c.jsx(N,{linkName:"디스플레이",linkAddress:"/industries/display"}),c.jsx(N,{linkName:"자동차",linkAddress:"/"}),c.jsx(N,{linkName:"2차전지",linkAddress:"/industries/port"}),c.jsx(N,{linkName:"항만",linkAddress:"/industries/semiconductor"})]})]})]})})]}),c.jsxs("li",{className:"px-open-md py-open-sm text-open-font-xl font-open-heading",children:["Support",c.jsxs("ul",{className:"flex flex-col gap-open-md py-open-xl text-open-font-large font-open-paragraph border-t-[1px] -border--openfoundation-secondary",children:[c.jsx(N,{linkName:"커뮤니티",linkAddress:"/community"}),c.jsx(N,{linkName:"라이브러리",linkAddress:"/library"}),c.jsx(N,{linkName:"고객문의",linkAddress:"/contact"})]})]})]})})}Kd.propTypes={sitemapRef:T.shape({current:T.instanceOf(Element)}).isRequired};function Yo({down:t}){return c.jsx("svg",{className:t?Ln.arrowDown:Ln.arrowDefault,width:"22",height:"12",viewBox:"0 0 26 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{id:"Vector 421",d:"M25 14L13 2L0.999999 14",stroke:"white",strokeWidth:"2"})})}Yo.propTypes={down:T.bool.isRequired};function We({title:t,children:e,small:n}){const[s,r]=A.useState(!1),i=()=>{r(!s)};return c.jsxs("li",{className:n?Ln.accordionItemSmall:Ln.accordionItemLarge,children:[c.jsxs("div",{className:"flex flex-row items-center gap-open-gutter-mobile",children:[c.jsx("button",{type:"button",onClick:i,children:t}),s?c.jsx(Yo,{}):c.jsx(Yo,{down:!0})]}),s&&c.jsx("ul",{children:e})]})}We.propTypes={title:T.string.isRequired,children:T.node.isRequired,small:T.bool};We.defaultProps={small:!1};function Qd({sitemapRef:t}){return c.jsx("div",{className:"tablet:hidden desktop:hidden absolute left-0 top-[80px] w-full h-[500px] overflow-scroll",ref:t,children:c.jsxs("ul",{className:"flex flex-col justify-center gap-open-lg -bg--openfoundation-primary px-open-gutter-mobile py-open-gutter-mobile text-open-font-xl font-open-heading",children:[c.jsx(We,{title:"About Us",children:c.jsxs("ul",{className:"flex flex-col gap-open-md py-open-lg text-open-font-large font-open-paragraph",children:[c.jsx(N,{linkName:"회사개요",linkAddress:"/about"}),c.jsx(N,{linkName:"연혁",linkAddress:"/history"}),c.jsx(N,{linkName:"직무소개",linkAddress:"/team"}),c.jsx(N,{linkName:"오시는길",linkAddress:"/location"})]})}),c.jsx(We,{title:"Products",children:c.jsxs("ul",{className:"flex flex-col gap-open-lg py-open-lg text-open-font-large font-open-label",children:[c.jsx(We,{title:"Solutions",small:!0,children:c.jsxs("ul",{className:"font-open-paragraph flex flex-col pt-open-lg gap-open-lg text-[#3FA9F5] text-open-font-medium",children:[c.jsx(We,{title:"Equipment Control System",children:c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"ACS/FMS",tooltip:"AGV Control System / Fleet Management System",linkAddress:"solutions/ACS"}),c.jsx(N,{linkName:"OCS",tooltip:"OHT Control System",linkAddress:"solutions/OCS"}),c.jsx(N,{linkName:"SCS",tooltip:"Stocker Control System",linkAddress:"solutions/SCS"}),c.jsx(N,{linkName:"CCS",tooltip:"Conveyor Control System",linkAddress:"solutions/CCS"}),c.jsx(N,{linkName:"IDX Controller",tooltip:"Index Control System",linkAddress:"solutions/IDX Controller"})]})}),c.jsx(We,{title:"Smart Tools",children:c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"Map Designer",linkAddress:"solutions/Map Designer"}),c.jsx(N,{linkName:"ACS Simulator",tooltip:"AGV Control System Simulator",linkAddress:"solutions/ACS Simulator"}),c.jsx(N,{linkName:"SCS Simulator",tooltip:"Stocker Control System Simulator",linkAddress:"solutions/SCS Simulator"})]})}),c.jsx(We,{title:"Monitoring Solution",children:c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:c.jsx(N,{linkName:"AIMS",tooltip:"Advanced Integrated Monitoring Solution",linkAddress:"solutions/AIMS"})})}),c.jsx(We,{title:"Comm Driver",children:c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:c.jsx(N,{linkName:"Open HSMS",linkAddress:"solutions/Open HSMS"})})})]})}),c.jsx(We,{title:"Smart Machine",small:!0,children:c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph",children:[c.jsx(N,{linkName:"AGV - Lift Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - Conveyor Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - Fork-Lift Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - 협동 Robot 탑재 Type",linkAddress:"/"})]})}),c.jsx(We,{title:"Smart Device",small:!0,children:c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph",children:c.jsx(N,{linkName:"Microsoft Hololens 2",linkAddress:"/"})})}),c.jsx(We,{title:"Industries",small:!0,children:c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"반도체",linkAddress:"/industries/semiconductor"}),c.jsx(N,{linkName:"디스플레이",linkAddress:"/industries/display"}),c.jsx(N,{linkName:"자동차",linkAddress:"/"}),c.jsx(N,{linkName:"2차전지",linkAddress:"/industries/port"}),c.jsx(N,{linkName:"항만",linkAddress:"/industries/semiconductor"})]})})]})}),c.jsx(We,{title:"Support",children:c.jsxs("ul",{className:"flex flex-col gap-open-md py-open-xl text-open-font-large font-open-paragraph",children:[c.jsx(N,{linkName:"커뮤니티",linkAddress:"/community"}),c.jsx(N,{linkName:"라이브러리",linkAddress:"/library"}),c.jsx(N,{linkName:"고객문의",linkAddress:"/contact"})]})})]})})}Qd.propTypes={sitemapRef:T.shape({current:T.instanceOf(Element)}).isRequired};function Bv(){const[t,e]=A.useState(null),n=A.useRef(null),s=o=>{e(o)},r=()=>{e(null)},i=Hs();return A.useEffect(()=>{r()},[i]),A.useEffect(()=>{if(t){const o=n.current,a=o.querySelectorAll("[href]"),l=a[0],u=a[a.length-1],d=f=>{f.key==="Tab"&&(f.shiftKey&&document.activeElement===l?(f.preventDefault(),u.focus()):!f.shiftKey&&document.activeElement===u&&(f.preventDefault(),l.focus()))},h=f=>{f.key==="Escape"&&e(null)};return o.addEventListener("keydown",d),o.addEventListener("keydown",h),()=>{o.removeEventListener("keydown",d),o.removeEventListener("keydown",h)}}},[t,e]),c.jsxs("header",{role:"banner",className:"fixed flex justify-between items-center w-full py-open-lg px-open-margin-mobile tablet:px-open-gutter-desktop desktop:px-open-4xl -bg--openfoundation-primary -text--openfoundation-secondary font-open-font text-open-font-large font-open-paragraph h-[80px] z-10",children:[c.jsx("h1",{className:"sr-only",children:"오픈에스지"}),c.jsx("nav",{className:"flex",children:c.jsxs("ul",{className:"flex justify-center items-center gap-open-gutter-mobile desktop:gap-open-gutter-desktop",children:[c.jsx("li",{children:c.jsx(zs,{className:"px-open-md py-open-sm",to:"/",children:c.jsx("img",{src:"/src/assets/header_opensg.png",alt:"오픈에스지",width:100})})}),t!=="Sitemap"&&c.jsxs("li",{className:"px-open-md py-open-sm mobile:hidden",onMouseEnter:()=>s("AboutUs"),children:[c.jsx("button",{type:"button",onClick:()=>s("AboutUs"),children:"About Us"}),t==="AboutUs"&&c.jsx("div",{className:"absolute left-0 top-[80px] w-full backdrop-blur-[2px]",ref:n,onMouseLeave:r,children:c.jsxs("ul",{className:"flex flex-col gap-open-md py-open-xl -bg--openfoundation-primary opacity-80 tablet:pl-[150px] desktop:pl-[214px]",children:[c.jsx(N,{linkName:"회사개요",linkAddress:"/about"}),c.jsx(N,{linkName:"연혁",linkAddress:"/history"}),c.jsx(N,{linkName:"직무소개",linkAddress:"/team"}),c.jsx(N,{linkName:"오시는길",linkAddress:"/location"})]})})]}),t!=="Sitemap"&&c.jsxs("li",{className:"px-open-md py-open-sm mobile:hidden",onMouseEnter:()=>s("Products"),children:[c.jsx("button",{type:"button",onClick:()=>s("Products"),children:"Products"}),t==="Products"&&c.jsx("div",{className:"absolute left-0 top-[80px] w-full backdrop-blur-[2px]",ref:n,onMouseLeave:r,children:c.jsxs("ul",{className:"flex flex-row gap-open-xl px-open-xl py-open-xl text-open-font-large font-open-label -bg--openfoundation-primary opacity-80 tablet:pl-[280px] desktop:pl-[362px]",children:[c.jsxs("li",{children:["Solutions",c.jsxs("ul",{className:"font-open-paragraph flex flex-col pt-open-lg gap-open-lg",children:[c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Equipment Control System",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"ACS/FMS",tooltip:"AGV Control System / Fleet Management System",linkAddress:"solutions/ACS"}),c.jsx(N,{linkName:"OCS",tooltip:"OHT Control System",linkAddress:"solutions/OCS"}),c.jsx(N,{linkName:"SCS",tooltip:"Stocker Control System",linkAddress:"solutions/SCS"}),c.jsx(N,{linkName:"CCS",tooltip:"Conveyor Control System",linkAddress:"solutions/CCS"}),c.jsx(N,{linkName:"IDX Controller",tooltip:"Index Control System",linkAddress:"solutions/IDX Controller"})]})]}),c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Smart Tools",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"Map Designer",linkAddress:"solutions/Map Designer"}),c.jsx(N,{linkName:"ACS Simulator",tooltip:"AGV Control System Simulator",linkAddress:"solutions/ACS Simulator"}),c.jsx(N,{linkName:"SCS Simulator",tooltip:"Stocker Control System Simulator",linkAddress:"solutions/SCS Simulator"})]})]}),c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Monitoring Solution",c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:c.jsx(N,{linkName:"AIMS",tooltip:"Advanced Integrated Monitoring Solution",linkAddress:"solutions/AIMS"})})]}),c.jsxs("li",{className:"text-[#3FA9F5] text-open-font-medium ",children:["Comm Driver",c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary",children:c.jsx(N,{linkName:"Open HSMS",linkAddress:"solutions/Open HSMS"})})]})]})]}),c.jsxs("li",{children:["Smart Machine",c.jsxs("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph",children:[c.jsx(N,{linkName:"AGV - Lift Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - Conveyor Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - Fork-Lift Type",linkAddress:"/"}),c.jsx(N,{linkName:"AGV - 협동 Robot 탑재 Type",linkAddress:"/"})]})]}),c.jsxs("li",{children:["Smart Device",c.jsx("ul",{className:"flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph",children:c.jsx(N,{linkName:"Microsoft Hololens 2",linkAddress:"/"})})]}),c.jsx("div",{className:"w-[1px] -bg--openfoundation-secondary"}),c.jsxs("li",{className:"text-[#FFE500]",children:["Industries",c.jsxs("ul",{className:"flex flex-col items-center pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph -text--openfoundation-secondary",children:[c.jsx(N,{linkName:"반도체",linkAddress:"/industries/semiconductor"}),c.jsx(N,{linkName:"디스플레이",linkAddress:"/industries/display"}),c.jsx(N,{linkName:"자동차",linkAddress:"/"}),c.jsx(N,{linkName:"2차전지",linkAddress:"/industries/port"}),c.jsx(N,{linkName:"항만",linkAddress:"/industries/semiconductor"})]})]})]})})]}),t!=="Sitemap"&&c.jsxs("li",{className:"px-open-md py-open-sm mobile:hidden",onMouseEnter:()=>s("Support"),children:[c.jsx("button",{type:"button",onClick:()=>s("Support"),children:"Support"}),t==="Support"&&c.jsx("div",{className:"absolute left-0 top-[80px] w-full backdrop-blur-[2px]",ref:n,onMouseLeave:r,children:c.jsxs("ul",{className:"flex flex-col gap-open-md px-open-xl py-open-xl text-open-font-large -bg--openfoundation-primary opacity-80 tablet:pl-[390px] desktop:pl-[495px]",children:[c.jsx(N,{linkName:"커뮤니티",linkAddress:"/community"}),c.jsx(N,{linkName:"라이브러리",linkAddress:"/library"}),c.jsx(N,{linkName:"고객문의",linkAddress:"/contact"})]})})]})]})}),c.jsxs("ul",{className:"flex justify-center items-center gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop",children:[c.jsx("li",{className:"flex justify-center items-center px-open-md py-open-sm text-open-font-medium",children:c.jsx("button",{type:"button",children:"KOR"})}),c.jsx("li",{className:"flex justify-center items-center",children:t==="Sitemap"?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>s(null),children:c.jsx("img",{src:"/src/assets/header_close.svg",alt:"사이트맵 닫기"})}),c.jsx(Kd,{sitemapRef:n}),c.jsx(Qd,{sitemapRef:n})]}):c.jsx("button",{type:"button",onClick:()=>s("Sitemap"),children:c.jsx("img",{src:"/src/assets/header_hamburger.svg",alt:"사이트맵"})})})]})]})}const $v="Zcdr",qv="bhnL",zv="QneN",Hv="bgex",Wv="_8BLC",Gv="Tuc-",Kv="t0Mw",Qv="JEoo",Xv="lKOh",Yv="GZaN",et={contactUsWrapper:$v,link:qv,container:zv,inner:Hv,content:Wv,title:Gv,text:Kv,officeWrapper:Qv,info:Xv,copyright:Yv};function Jv(){return c.jsxs("svg",{viewBox:"0 0 158 158",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-[79px] h-[79px] tablet:w-[158px] tablet:h-[158px] desktop:w-[158px] desktop:h-[158px]",children:[c.jsx("circle",{cx:"79",cy:"79",r:"79",transform:"rotate(90 79 79)",fill:"#151F2D"}),c.jsx("path",{d:"M110.601 78.9984L63.2006 106.365L63.2006 51.632L110.601 78.9984Z",fill:"white"})]})}function Zv(){return c.jsx("section",{className:et.contactUsWrapper,children:c.jsx(zs,{to:"/contact",className:et.link,children:c.jsx("div",{className:et.container,children:c.jsxs("div",{className:et.inner,children:[c.jsxs("div",{className:et.content,children:[c.jsx("h3",{className:et.title,children:"Contact Us"}),c.jsx("p",{className:et.text,children:"OPENSG의 전문 엔지니어들과 미래를 열어 보세요"})]}),c.jsx(Jv,{})]})})})})}function eT(){return c.jsxs("section",{className:et.officeWrapper,children:[c.jsx("h3",{className:"sr-only",children:"회사정보"}),c.jsxs("address",{className:`${et.info} ${et.text}`,children:[c.jsx("span",{children:"경기도 화성시 동탄첨단산업1로 51-9 M타워 1201호"}),c.jsxs("div",{className:"flex gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop",children:[c.jsx(zs,{to:"tel:031-373-2612",children:"T. 031-373-2612"}),c.jsx("span",{children:"F. 031-377-2615"})]})]}),c.jsx("small",{className:`${et.copyright} ${et.text}`,children:"Copyright ©OpenSG, All rights reserved."})]})}function tT(){return c.jsxs("footer",{children:[c.jsx("h2",{className:"sr-only",children:"Footer"}),c.jsx(Zv,{}),c.jsx(eT,{})]})}function nT(){return c.jsxs(c.Fragment,{children:[c.jsx(Bv,{}),c.jsxs("main",{className:"flex justify-center mx-auto font-open-font pt-[80px]",children:[c.jsx(xm,{}),c.jsx(Sm,{})]}),c.jsx(tT,{}),c.jsx(Xo,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}function sT(){return c.jsx("div",{children:"About"})}function rT(){return c.jsxs("section",{className:"w-full flex justify-center mx-auto py-open-4xl tablet:py-open-5xl desktop:py-open-5xl -bg--openfoundation-black max-w-[1320px]",children:[c.jsxs("div",{className:"w-full flex flex-col items-center tablet:items-stretch desktop:items-stretch  gap-open-xl tablet:gap-open-3xl desktop:gap-open-3xl ",children:[c.jsxs("h3",{className:"block -text--openfoundation-white font-open-heading text-open-font-xxl tablet:text-open-font-xxxl desktop:text-open-font-xxxl",children:["OPEN Your Future",c.jsx("br",{}),"with ",c.jsx("span",{className:`inline-block
          bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2`,children:"OpenSG"})]}),c.jsxs("small",{className:" -text--openfoundation-white  font-open-paragraph text-open-font-small tablet:text-open-font-large desktop:text-open-font-large",children:["고객에게 열려있는 기업, 고객의 미래를 여는 기업",c.jsx("br",{}),"OpenSG 가 고객과 함께 미래로 가는 길을 엽니다"]})]}),c.jsx("div",{className:"hidden tablet:block desktop:block",children:"이미지"})]})}function iT(){return c.jsxs("section",{className:"flex flex-col justify-center items-center py-open-4xl tablet:py-open-5xl desktop:py-open-5xl gap-open-4xl tablet:gap-open-5xl desktop:gap-open-5xl",children:[c.jsxs("div",{className:"flex flex-col items-center -text--openfoundation-white gap-open-lg tablet:gap-open-xl desktop:gap-open-xl",children:[c.jsx("p",{className:"font-open-highlight text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl",children:"Explore OpenSG"}),c.jsx("h3",{className:"font-open-heading text-open-font-xl tablet:text-open-font-xxxl desktop:text-open-font-xxxl",children:"OPENSG의 세계관을 만나보세요"})]}),c.jsx("div",{children:"태그 캔버스"})]})}function oT(){const[t,e]=A.useState(null),n=s=>{e(s)};return c.jsxs("section",{className:"hidden mx-auto flex-col items-center tablet:flex desktop:flex gap-open-5xl pt-open-6xl tablet:pt-open-7xl desktop:pt-open-7xl -text--openfoundation-white max-w-[1320px]",children:[c.jsxs("div",{className:"w-full flex justify-between",children:[c.jsx("h3",{className:"font-open-heading tablet:text-open-font-xxl desktop:text-open-font-xxl",children:"OPEN Solutions"}),c.jsxs("ul",{className:"flex justify-center items-center gap-open-lg font-open-highlight tablet:text-open-font-small desktop:text-open-font-medium",children:[c.jsx("li",{children:c.jsx("button",{type:"button",onClick:()=>n(0),className:`px-open-gutter-mobile py-open-sm rounded-3xl ${t===0?"-bg--open-accent-accent-2":""}`,children:"AIMS"})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:()=>n(1),className:`px-open-gutter-mobile py-open-sm rounded-3xl ${t===1?"-bg--open-accent-accent-2":""}`,children:"ACS"})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:()=>n(2),className:`px-open-gutter-mobile py-open-sm rounded-3xl ${t===2?"-bg--open-accent-accent-2":""}`,children:"CCS"})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:()=>n(3),className:`px-open-gutter-mobile py-open-sm rounded-3xl ${t===3?"-bg--open-accent-accent-2":""}`,children:"SCS"})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:()=>n(4),className:`px-open-gutter-mobile py-open-sm rounded-3xl ${t===4?"-bg--open-accent-accent-2":""}`,children:"IDX"})}),c.jsx("li",{children:c.jsx("button",{type:"button",onClick:()=>n(5),className:`px-open-gutter-mobile py-open-sm rounded-3xl ${t===5?"-bg--open-accent-accent-2":""}`,children:"OCS"})})]})]}),c.jsxs("div",{className:"w-full flex justify-between gap-open-4xl",children:[c.jsxs("div",{className:"w-[240px] flex flex-col items-start gap-open-3xl",children:[c.jsx("h4",{className:"font-open-heading tablet:text-open-font-xxl desktop:text-open-font-xxxl",children:"AIMS"}),c.jsxs("p",{className:"font-open-paragraph tablet:text-open-font-medium desktop:text-open-font-large",children:["AIMS 에 관한 간략한 설명을 작성하는 란입니다. AIMS 에 관한 간략한 설명을 작성하는 란입니다. AIMS 에 관한 간략한 설명을 작성하는 란입니다."," "]}),c.jsx("button",{type:"button",className:"font-open-label tablet:text-open-font-medium desktop:text-open-font-large",children:"Learn More >"})]}),c.jsx("div",{className:"flex justify-center items-center tablet:w-[700px] desktop:w-[900px] h-[600px]",children:"이미지"})]})]})}function aT(){return c.jsxs("section",{className:"w-full flex flex-col items-center px-open-gutter-mobile py-open-5xl tablet:items-stretch desktop:items-stretch mx-auto gap-open-2xl tablet:gap-open-4xl desktop:gap-open-4xl  -text--openfoundation-white tablet:py-open-7xl desktop:py-open-7xl max-w-[1320px]",children:[c.jsx("h3",{className:"font-open-heading text-start text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl",children:"Open Products"}),c.jsxs("div",{className:"w-full flex justify-center tablet:justify-between desktop:justify-between max-w-[1320px]",children:[c.jsxs("div",{className:`text-center tablet:text-left desktop:text-left font-open-heading text-open-font-xxxl inline-block
          bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2`,children:[c.jsx("p",{children:"스마트 자동화의"}),c.jsx("p",{children:"모든 것."})]}),c.jsxs("p",{className:"hidden tablet:flex desktop:flex flex-col font-open-label text-end text-open-font-medium tablet:text-open-font-large desktop:text-open-font-large",children:[c.jsxs("span",{className:"flex flex-col -text--open-gray-400",children:[c.jsx("span",{children:"기획부터 시뮬레이션까지 "}),c.jsx("span",{children:"솔루션부터 디바이스까지"})]}),c.jsxs("span",{className:"flex flex-col",children:[c.jsx("span",{children:"스마트 자동화에 필요한 모든 것,"}),c.jsx("span",{children:"OpenSG 가 함께합니다."})," "]})]})]}),c.jsxs("div",{className:"flex flex-col gap-open-gutter-mobile tablet:gap-open-2xl desktop:gap-open-2xl",children:[c.jsx(_o,{}),c.jsx(_o,{}),c.jsx(_o,{})]})]})}function _o(){return c.jsxs("div",{className:"w-full flex justify-between items-center gap-open-4xl p-open-2xl tablet:p-open-4xl desktop:px-open-5xl desktop:py-open-4xl -bg--open-gray-950 rounded-[30px]",children:[c.jsxs("div",{className:"flex flex-col items-center tablet:items-start desktop:items-start gap-open-xl",children:[c.jsxs("h4",{className:"flex tablet:flex-col desktop:flex-col gap-open-sm font-open-label text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxxl",children:[c.jsx("span",{children:"Open"}),c.jsx("span",{children:"Solutions"})]}),c.jsxs("div",{className:"flex flex-col items-center tablet:items-start desktop:items-start gap-open-lg",children:[c.jsx("p",{className:"font-open-paragraph text-open-font-medium desktop:text-open-font-large",children:"OpenSG 솔루션에 관한 짧은 소개를 작성하는 란"}),c.jsx("button",{type:"button",className:"font-open-label text-open-font-medium desktop:text-open-font-large",children:"Learn More >"})]})]}),c.jsx("div",{className:"hidden tablet:w-[300px] desktop:w-[400px] text-center",children:"이미지"})]})}function lT(){return c.jsxs("section",{className:"flex flex-col ml-auto gap-open-3xl tablet:gap-open-5xl desktop:gap-open-5xl py-open-5xl tablet:py-open-7xl desktop:py-open-7xl pl-open-gutter-mobile tablet:pl-open-margin-desktop desktop:pl-open-8xl",children:[c.jsxs("div",{className:"flex flex-col gap-open-3xl tablet:gap-open-5xl desktop:gap-open-5xl",children:[c.jsx("h3",{className:"-text--openfoundation-black font-open-heading text-start text-open-font-xl tablet:text-open-font-xxl desktop:text-open-font-xxl",children:"Industries"}),c.jsxs("div",{className:"flex flex-col  gap-open-lg",children:[c.jsx("p",{className:`max-w-[287px] tablet:max-w-full desktop:max-w-full flex tablet:flex-col font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl  desktop:text-open-font-xxxxl
          bg-clip-text
        text-transparent bg-gradient-to-r -from--open-accent-accent-1 -to--open-accent-accent-2`,children:"다양한 산업군에서 빛나는 OpenSG"}),c.jsx("small",{className:"font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl",children:"OpenSG 제품의 무한한 가능성을 경험하세요."})]})]}),c.jsx("div",{className:"h-[288px] tablet:h-[650px] desktop:h-[650px] w-full bg-black"})]})}function cT(){return c.jsxs("section",{className:"flex flex-col py-open-3xl tablet:py-open-7xl desktop:py-open-7xl pl-open-gutter-mobile tablet:pl-open-margin-desktop desktop:pl-open-8xl gap-open-2xl tablet:gap-open-5xl desktop:gap-open-5xl",children:[c.jsx("h3",{className:"sr-only",children:"Partner"}),c.jsxs("div",{className:"flex flex-col gap-open-xl",children:[c.jsxs("p",{className:"flex flex-col desktop:flex-row font-open-heading text-open-font-xxl tablet:text-open-font-xxxxl desktop:text-open-font-xxxxl max-w[265px] tablet:max-w-full desktop:max-w-full ",children:[c.jsx("span",{children:"최고기업들이 선택한 "}),c.jsx("span",{children:"OpenSG"})]}),c.jsxs("small",{className:"flex flex-col font-open-paragraph text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl",children:[c.jsx("span",{children:"최정상 기업들과 함께한 경험으로,"}),c.jsx("span",{children:"고객사가 찾는 최적의 솔루션을 제공합니다"})]})]}),c.jsx("div",{children:"스와이퍼"})]})}function uT(){return c.jsxs("section",{className:"mb-open-5xl w-full h-full",children:[c.jsx("h2",{className:"sr-only",children:"메인 페이지"}),c.jsxs("div",{className:`w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile -bg--openfoundation-black
      `,children:[c.jsx(rT,{}),c.jsx(iT,{}),c.jsx(oT,{}),c.jsx(aT,{})]}),c.jsxs("div",{className:`w-full h-full -bg--openfoundation-white
      `,children:[c.jsx(lT,{}),c.jsx(cT,{})]})]})}function Mc(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Ga(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Mc(e[n])&&Mc(t[n])&&Object.keys(e[n]).length>0&&Ga(t[n],e[n])})}const Xd={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Kn(){const t=typeof document<"u"?document:{};return Ga(t,Xd),t}const dT={document:Xd,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function He(){const t=typeof window<"u"?window:{};return Ga(t,dT),t}function hT(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function fT(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Vn(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Tt(){return Date.now()}function pT(t){const e=He();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function mT(t,e){e===void 0&&(e="x");const n=He();let s,r,i;const o=pT(t);return n.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(r==="none"?"":r)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=i.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?r=i.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),e==="y"&&(n.WebKitCSSMatrix?r=i.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function yr(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function gT(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Ge(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const s=n<0||arguments.length<=n?void 0:arguments[n];if(s!=null&&!gT(s)){const r=Object.keys(Object(s)).filter(i=>e.indexOf(i)<0);for(let i=0,o=r.length;i<o;i+=1){const a=r[i],l=Object.getOwnPropertyDescriptor(s,a);l!==void 0&&l.enumerable&&(yr(t[a])&&yr(s[a])?s[a].__swiper__?t[a]=s[a]:Ge(t[a],s[a]):!yr(t[a])&&yr(s[a])?(t[a]={},s[a].__swiper__?t[a]=s[a]:Ge(t[a],s[a])):t[a]=s[a])}}}return t}function _r(t,e,n){t.style.setProperty(e,n)}function Yd(t){let{swiper:e,targetPosition:n,side:s}=t;const r=He(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const u=n>i?"next":"prev",d=(f,p)=>u==="next"&&f>=p||u==="prev"&&f<=p,h=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(f*Math.PI)/2;let m=i+p*(n-i);if(d(m,n)&&(m=n),e.wrapperEl.scrollTo({[s]:m}),d(m,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(h)};h()}function Ka(t){return t.querySelector(".swiper-slide-transform")||t.shadowRoot&&t.shadowRoot.querySelector(".swiper-slide-transform")||t}function xt(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function Zr(t){try{console.warn(t);return}catch{}}function ei(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:hT(e)),n}function yT(t,e){const n=[];for(;t.previousElementSibling;){const s=t.previousElementSibling;e?s.matches(e)&&n.push(s):n.push(s),t=s}return n}function _T(t,e){const n=[];for(;t.nextElementSibling;){const s=t.nextElementSibling;e?s.matches(e)&&n.push(s):n.push(s),t=s}return n}function Ft(t,e){return He().getComputedStyle(t,null).getPropertyValue(e)}function Lc(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function vT(t,e){const n=[];let s=t.parentElement;for(;s;)e?s.matches(e)&&n.push(s):n.push(s),s=s.parentElement;return n}function TT(t,e){function n(s){s.target===t&&(e.call(t,s),t.removeEventListener("transitionend",n))}e&&t.addEventListener("transitionend",n)}function Vc(t,e,n){const s=He();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let vo;function wT(){const t=He(),e=Kn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function Jd(){return vo||(vo=wT()),vo}let To;function ET(t){let{userAgent:e}=t===void 0?{}:t;const n=Jd(),s=He(),r=s.navigator.platform,i=e||s.navigator.userAgent,o={ios:!1,android:!1},a=s.screen.width,l=s.screen.height,u=i.match(/(Android);?[\s\/]+([\d.]+)?/);let d=i.match(/(iPad).*OS\s([\d_]+)/);const h=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let m=r==="MacIntel";const _=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&m&&n.touch&&_.indexOf(`${a}x${l}`)>=0&&(d=i.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),u&&!p&&(o.os="android",o.android=!0),(d||f||h)&&(o.os="ios",o.ios=!0),o}function xT(t){return t===void 0&&(t={}),To||(To=ET(t)),To}let wo;function ST(){const t=He();let e=!1;function n(){const s=t.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(n()){const s=String(t.navigator.userAgent);if(s.includes("Version/")){const[r,i]=s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=r<16||r===16&&i<2}}return{isSafari:e||n(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function IT(){return wo||(wo=ST()),wo}function bT(t){let{swiper:e,on:n,emit:s}=t;const r=He();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(h=>{o=r.requestAnimationFrame(()=>{const{width:f,height:p}=e;let m=f,_=p;h.forEach(g=>{let{contentBoxSize:y,contentRect:E,target:v}=g;v&&v!==e.el||(m=E?E.width:(y[0]||y).inlineSize,_=E?E.height:(y[0]||y).blockSize)}),(m!==f||_!==p)&&a()})}),i.observe(e.el))},u=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},d=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",d)})}function AT(t){let{swiper:e,extendParams:n,on:s,emit:r}=t;const i=[],o=He(),a=function(d,h){h===void 0&&(h={});const f=o.MutationObserver||o.WebkitMutationObserver,p=new f(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const _=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(_):o.setTimeout(_,0)});p.observe(d,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),i.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=vT(e.hostEl);for(let h=0;h<d.length;h+=1)a(d[h])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},u=()=>{i.forEach(d=>{d.disconnect()}),i.splice(0,i.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",l),s("destroy",u)}var CT={on(t,e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const r=n?"unshift":"push";return t.split(" ").forEach(i=>{s.eventsListeners[i]||(s.eventsListeners[i]=[]),s.eventsListeners[i][r](e)}),s},once(t,e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function r(){s.off(t,r),r.__emitterProxy&&delete r.__emitterProxy;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];e.apply(s,o)}return r.__emitterProxy=e,s.on(t,r,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const s=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[s](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(s=>{typeof e>"u"?n.eventsListeners[s]=[]:n.eventsListeners[s]&&n.eventsListeners[s].forEach((r,i)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&n.eventsListeners[s].splice(i,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,s;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],n=i.slice(1,i.length),s=t):(e=i[0].events,n=i[0].data,s=i[0].context||t),n.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(u=>{u.apply(s,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(u=>{u.apply(s,n)})}),t}};function PT(){const t=this;let e,n;const s=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=s.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=s.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(Ft(s,"padding-left")||0,10)-parseInt(Ft(s,"padding-right")||0,10),n=n-parseInt(Ft(s,"padding-top")||0,10)-parseInt(Ft(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function RT(){const t=this;function e(C,M){return parseFloat(C.getPropertyValue(t.getDirectionLabel(M))||0)}const n=t.params,{wrapperEl:s,slidesEl:r,size:i,rtlTranslate:o,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,u=l?t.virtual.slides.length:t.slides.length,d=xt(r,`.${t.params.slideClass}, swiper-slide`),h=l?t.virtual.slides.length:d.length;let f=[];const p=[],m=[];let _=n.slidesOffsetBefore;typeof _=="function"&&(_=n.slidesOffsetBefore.call(t));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(t));const y=t.snapGrid.length,E=t.slidesGrid.length;let v=n.spaceBetween,w=-_,S=0,R=0;if(typeof i>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*i:typeof v=="string"&&(v=parseFloat(v)),t.virtualSize=-v,d.forEach(C=>{o?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(_r(s,"--swiper-centered-offset-before",""),_r(s,"--swiper-centered-offset-after",""));const j=n.grid&&n.grid.rows>1&&t.grid;j?t.grid.initSlides(d):t.grid&&t.grid.unsetSlides();let O;const P=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(C=>typeof n.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<h;C+=1){O=0;let M;if(d[C]&&(M=d[C]),j&&t.grid.updateSlide(C,M,d),!(d[C]&&Ft(M,"display")==="none")){if(n.slidesPerView==="auto"){P&&(d[C].style[t.getDirectionLabel("width")]="");const L=getComputedStyle(M),k=M.style.transform,q=M.style.webkitTransform;if(k&&(M.style.transform="none"),q&&(M.style.webkitTransform="none"),n.roundLengths)O=t.isHorizontal()?Vc(M,"width",!0):Vc(M,"height",!0);else{const J=e(L,"width"),te=e(L,"padding-left"),pe=e(L,"padding-right"),Re=e(L,"margin-left"),ie=e(L,"margin-right"),$e=L.getPropertyValue("box-sizing");if($e&&$e==="border-box")O=J+Re+ie;else{const{clientWidth:ym,offsetWidth:_m}=M;O=J+te+pe+Re+ie+(_m-ym)}}k&&(M.style.transform=k),q&&(M.style.webkitTransform=q),n.roundLengths&&(O=Math.floor(O))}else O=(i-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(O=Math.floor(O)),d[C]&&(d[C].style[t.getDirectionLabel("width")]=`${O}px`);d[C]&&(d[C].swiperSlideSize=O),m.push(O),n.centeredSlides?(w=w+O/2+S/2+v,S===0&&C!==0&&(w=w-i/2-v),C===0&&(w=w-i/2-v),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),R%n.slidesPerGroup===0&&f.push(w),p.push(w)):(n.roundLengths&&(w=Math.floor(w)),(R-Math.min(t.params.slidesPerGroupSkip,R))%t.params.slidesPerGroup===0&&f.push(w),p.push(w),w=w+O+v),t.virtualSize+=O+v,S=O,R+=1}}if(t.virtualSize=Math.max(t.virtualSize,i)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(s.style.width=`${t.virtualSize+v}px`),n.setWrapperSize&&(s.style[t.getDirectionLabel("width")]=`${t.virtualSize+v}px`),j&&t.grid.updateWrapperSize(O,f),!n.centeredSlides){const C=[];for(let M=0;M<f.length;M+=1){let L=f[M];n.roundLengths&&(L=Math.floor(L)),f[M]<=t.virtualSize-i&&C.push(L)}f=C,Math.floor(t.virtualSize-i)-Math.floor(f[f.length-1])>1&&f.push(t.virtualSize-i)}if(l&&n.loop){const C=m[0]+v;if(n.slidesPerGroup>1){const M=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),L=C*n.slidesPerGroup;for(let k=0;k<M;k+=1)f.push(f[f.length-1]+L)}for(let M=0;M<t.virtual.slidesBefore+t.virtual.slidesAfter;M+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+C),p.push(p[p.length-1]+C),t.virtualSize+=C}if(f.length===0&&(f=[0]),v!==0){const C=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");d.filter((M,L)=>!n.cssMode||n.loop?!0:L!==d.length-1).forEach(M=>{M.style[C]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let C=0;m.forEach(L=>{C+=L+(v||0)}),C-=v;const M=C-i;f=f.map(L=>L<=0?-_:L>M?M+g:L)}if(n.centerInsufficientSlides){let C=0;if(m.forEach(M=>{C+=M+(v||0)}),C-=v,C<i){const M=(i-C)/2;f.forEach((L,k)=>{f[k]=L-M}),p.forEach((L,k)=>{p[k]=L+M})}}if(Object.assign(t,{slides:d,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){_r(s,"--swiper-centered-offset-before",`${-f[0]}px`),_r(s,"--swiper-centered-offset-after",`${t.size/2-m[m.length-1]/2}px`);const C=-t.snapGrid[0],M=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(L=>L+C),t.slidesGrid=t.slidesGrid.map(L=>L+M)}if(h!==u&&t.emit("slidesLengthChange"),f.length!==y&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),p.length!==E&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const C=`${n.containerModifierClass}backface-hidden`,M=t.el.classList.contains(C);h<=n.maxBackfaceHiddenSlides?M||t.el.classList.add(C):M&&t.el.classList.remove(C)}}function kT(t){const e=this,n=[],s=e.virtual&&e.params.virtual.enabled;let r=0,i;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>s?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const a=e.activeIndex+i;if(a>e.slides.length&&!s)break;n.push(o(a))}else n.push(o(e.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const a=n[i].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function NT(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(t.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-n-t.cssOverflowAdjustment()}function OT(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:s,rtlTranslate:r,snapGrid:i}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;r&&(o=t),s.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<s.length;l+=1){const u=s[l];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=s[0].swiperSlideOffset);const h=(o+(n.centeredSlides?e.minTranslate():0)-d)/(u.swiperSlideSize+a),f=(o-i[0]+(n.centeredSlides?e.minTranslate():0)-d)/(u.swiperSlideSize+a),p=-(o-d),m=p+e.slidesSizesGrid[l],_=p>=0&&p<=e.size-e.slidesSizesGrid[l];(p>=0&&p<e.size-1||m>1&&m<=e.size||p<=0&&m>=e.size)&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l),s[l].classList.add(n.slideVisibleClass)),_&&s[l].classList.add(n.slideFullyVisibleClass),u.progress=r?-h:h,u.originalProgress=r?-f:f}}function DT(t){const e=this;if(typeof t>"u"){const d=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*d||0}const n=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:i,isEnd:o,progressLoop:a}=e;const l=i,u=o;if(s===0)r=0,i=!0,o=!0;else{r=(t-e.minTranslate())/s;const d=Math.abs(t-e.minTranslate())<1,h=Math.abs(t-e.maxTranslate())<1;i=d||r<=0,o=h||r>=1,d&&(r=0),h&&(r=1)}if(n.loop){const d=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[d],p=e.slidesGrid[h],m=e.slidesGrid[e.slidesGrid.length-1],_=Math.abs(t);_>=f?a=(_-f)/m:a=(_+m-p)/m,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:i,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),i&&!l&&e.emit("reachBeginning toEdge"),o&&!u&&e.emit("reachEnd toEdge"),(l&&!i||u&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}function MT(){const t=this,{slides:e,params:n,slidesEl:s,activeIndex:r}=t,i=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=h=>xt(s,`.${n.slideClass}${h}, swiper-slide${h}`)[0];e.forEach(h=>{h.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,u,d;if(i)if(n.loop){let h=r-t.virtual.slidesBefore;h<0&&(h=t.virtual.slides.length+h),h>=t.virtual.slides.length&&(h-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${h}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.filter(h=>h.column===r)[0],d=e.filter(h=>h.column===r+1)[0],u=e.filter(h=>h.column===r-1)[0]):l=e[r];l&&(l.classList.add(n.slideActiveClass),o?(d&&d.classList.add(n.slideNextClass),u&&u.classList.add(n.slidePrevClass)):(d=_T(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=e[0]),d&&d.classList.add(n.slideNextClass),u=yT(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=e[e.length-1]),u&&u.classList.add(n.slidePrevClass))),t.emitSlidesClasses()}const Vr=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,s=e.closest(n());if(s){let r=s.querySelector(`.${t.params.lazyPreloaderClass}`);!r&&t.isElement&&(s.shadowRoot?r=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(r=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Eo=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Jo=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const s=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),r=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,u)=>o+s+u)),t.slides.forEach((l,u)=>{a.includes(l.column)&&Eo(t,u)});return}const i=r+s-1;if(t.params.rewind||t.params.loop)for(let o=r-e;o<=i+e;o+=1){const a=(o%n+n)%n;(a<r||a>i)&&Eo(t,a)}else for(let o=Math.max(r-e,0);o<=Math.min(i+e,n-1);o+=1)o!==r&&(o>i||o<r)&&Eo(t,o)};function LT(t){const{slidesGrid:e,params:n}=t,s=t.rtlTranslate?t.translate:-t.translate;let r;for(let i=0;i<e.length;i+=1)typeof e[i+1]<"u"?s>=e[i]&&s<e[i+1]-(e[i+1]-e[i])/2?r=i:s>=e[i]&&s<e[i+1]&&(r=i+1):s>=e[i]&&(r=i);return n.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function VT(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:r,activeIndex:i,realIndex:o,snapIndex:a}=e;let l=t,u;const d=p=>{let m=p-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=LT(e)),s.indexOf(n)>=0)u=s.indexOf(n);else{const p=Math.min(r.slidesPerGroupSkip,l);u=p+Math.floor((l-p)/r.slidesPerGroup)}if(u>=s.length&&(u=s.length-1),l===i&&!e.params.loop){u!==a&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===i&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const h=e.grid&&r.grid&&r.grid.rows>1;let f;if(e.virtual&&r.virtual.enabled&&r.loop)f=d(l);else if(h){const p=e.slides.filter(_=>_.column===l)[0];let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(p),0)),f=Math.floor(m/r.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?f=parseInt(p,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:f,previousIndex:i,activeIndex:l}),e.initialized&&Jo(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function jT(t,e){const n=this,s=n.params;let r=t.closest(`.${s.slideClass}, swiper-slide`);!r&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${s.slideClass}, swiper-slide`)&&(r=a)});let i=!1,o;if(r){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===r){i=!0,o=a;break}}if(r&&i)n.clickedSlide=r,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}s.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var FT={updateSize:PT,updateSlides:RT,updateAutoHeight:kT,updateSlidesOffset:NT,updateSlidesProgress:OT,updateProgress:DT,updateSlidesClasses:MT,updateActiveIndex:VT,updateClickedSlide:jT};function UT(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:s,translate:r,wrapperEl:i}=e;if(n.virtualTranslate)return s?-r:r;if(n.cssMode)return r;let o=mT(i,t);return o+=e.cssOverflowAdjustment(),s&&(o=-o),o||0}function BT(t,e){const n=this,{rtlTranslate:s,params:r,wrapperEl:i,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=s?-t:t:l=t,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,r.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:r.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let d;const h=n.maxTranslate()-n.minTranslate();h===0?d=0:d=(t-n.minTranslate())/h,d!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function $T(){return-this.snapGrid[0]}function qT(){return-this.snapGrid[this.snapGrid.length-1]}function zT(t,e,n,s,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),s===void 0&&(s=!0);const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const l=i.minTranslate(),u=i.maxTranslate();let d;if(s&&t>l?d=l:s&&t<u?d=u:d=t,i.updateProgress(d),o.cssMode){const h=i.isHorizontal();if(e===0)a[h?"scrollLeft":"scrollTop"]=-d;else{if(!i.support.smoothScroll)return Yd({swiper:i,targetPosition:-d,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(d),n&&(i.emit("beforeTransitionStart",e,r),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(d),n&&(i.emit("beforeTransitionStart",e,r),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(f){!i||i.destroyed||f.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var HT={getTranslate:UT,setTranslate:BT,minTranslate:$T,maxTranslate:qT,translateTo:zT};function WT(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function Zd(t){let{swiper:e,runCallbacks:n,direction:s,step:r}=t;const{activeIndex:i,previousIndex:o}=e;let a=s;if(a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${r}`),n&&i!==o){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function GT(t,e){t===void 0&&(t=!0);const n=this,{params:s}=n;s.cssMode||(s.autoHeight&&n.updateAutoHeight(),Zd({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function KT(t,e){t===void 0&&(t=!0);const n=this,{params:s}=n;n.animating=!1,!s.cssMode&&(n.setTransition(0),Zd({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var QT={setTransition:WT,transitionStart:GT,transitionEnd:KT};function XT(t,e,n,s,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:d,activeIndex:h,rtlTranslate:f,wrapperEl:p,enabled:m}=i;if(i.animating&&a.preventInteractionOnTransition||!m&&!s&&!r)return!1;const _=Math.min(i.params.slidesPerGroupSkip,o);let g=_+Math.floor((o-_)/i.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const y=-l[g];if(a.normalizeSlideIndex)for(let v=0;v<u.length;v+=1){const w=-Math.floor(y*100),S=Math.floor(u[v]*100),R=Math.floor(u[v+1]*100);typeof u[v+1]<"u"?w>=S&&w<R-(R-S)/2?o=v:w>=S&&w<R&&(o=v+1):w>=S&&(o=v)}if(i.initialized&&o!==h&&(!i.allowSlideNext&&(f?y>i.translate&&y>i.minTranslate():y<i.translate&&y<i.minTranslate())||!i.allowSlidePrev&&y>i.translate&&y>i.maxTranslate()&&(h||0)!==o))return!1;o!==(d||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(y);let E;if(o>h?E="next":o<h?E="prev":E="reset",f&&-y===i.translate||!f&&y===i.translate)return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(y),E!=="reset"&&(i.transitionStart(n,E),i.transitionEnd(n,E)),!1;if(a.cssMode){const v=i.isHorizontal(),w=f?y:-y;if(e===0){const S=i.virtual&&i.params.virtual.enabled;S&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),S&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[v?"scrollLeft":"scrollTop"]=w})):p[v?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1})}else{if(!i.support.smoothScroll)return Yd({swiper:i,targetPosition:w,side:v?"left":"top"}),!0;p.scrollTo({[v?"left":"top"]:w,behavior:"smooth"})}return!0}return i.setTransition(e),i.setTranslate(y),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,s),i.transitionStart(n,E),e===0?i.transitionEnd(n,E):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(w){!i||i.destroyed||w.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,E))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function YT(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this,i=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=t;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(i){const f=o*r.params.grid.rows;a=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=r.getSlideIndexByData(o);const l=i?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:u}=r.params;let d=r.params.slidesPerView;d==="auto"?d=r.slidesPerViewDynamic():(d=Math.ceil(parseFloat(r.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let h=l-a<d;if(u&&(h=h||a<Math.ceil(d/2)),h){const f=u?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?a+1:a-l+1,slideRealIndex:f==="next"?r.realIndex:void 0})}if(i){const f=o*r.params.grid.rows;o=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,n,s)}),r}function JT(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const s=this,{enabled:r,params:i,animating:o}=s;if(!r)return s;let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<i.slidesPerGroupSkip?1:a,u=s.virtual&&i.virtual.enabled;if(i.loop){if(o&&!u&&i.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,t,e,n)}),!0}return i.rewind&&s.isEnd?s.slideTo(0,t,e,n):s.slideTo(s.activeIndex+l,t,e,n)}function ZT(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const s=this,{params:r,snapGrid:i,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=s;if(!l)return s;const d=s.virtual&&r.virtual.enabled;if(r.loop){if(u&&!d&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const h=a?s.translate:-s.translate;function f(y){return y<0?-Math.floor(Math.abs(y)):Math.floor(y)}const p=f(h),m=i.map(y=>f(y));let _=i[m.indexOf(p)-1];if(typeof _>"u"&&r.cssMode){let y;i.forEach((E,v)=>{p>=E&&(y=v)}),typeof y<"u"&&(_=i[y>0?y-1:y])}let g=0;if(typeof _<"u"&&(g=o.indexOf(_),g<0&&(g=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(g=g-s.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),r.rewind&&s.isBeginning){const y=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(y,t,e,n)}else if(r.loop&&s.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(g,t,e,n)}),!0;return s.slideTo(g,t,e,n)}function ew(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const s=this;return s.slideTo(s.activeIndex,t,e,n)}function tw(t,e,n,s){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=.5);const r=this;let i=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const u=r.snapGrid[a],d=r.snapGrid[a+1];l-u>(d-u)*s&&(i+=r.params.slidesPerGroup)}else{const u=r.snapGrid[a-1],d=r.snapGrid[a];l-u<=(d-u)*s&&(i-=r.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,r.slidesGrid.length-1),r.slideTo(i,t,e,n)}function nw(){const t=this,{params:e,slidesEl:n}=t,s=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let r=t.clickedIndex,i;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;i=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=t.getSlideIndex(xt(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Vn(()=>{t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=t.getSlideIndex(xt(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Vn(()=>{t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}var sw={slideTo:XT,slideToLoop:YT,slideNext:JT,slidePrev:ZT,slideReset:ew,slideToClosest:tw,slideToClickedSlide:nw};function rw(t){const e=this,{params:n,slidesEl:s}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{xt(s,`.${n.slideClass}, swiper-slide`).forEach((h,f)=>{h.setAttribute("data-swiper-slide-index",f)})},i=e.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(i?n.grid.rows:1),a=e.slides.length%o!==0,l=i&&e.slides.length%n.grid.rows!==0,u=d=>{for(let h=0;h<d;h+=1){const f=e.isElement?ei("swiper-slide",[n.slideBlankClass]):ei("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(f)}};if(a){if(n.loopAddBlankSlides){const d=o-e.slides.length%o;u(d),e.recalcSlides(),e.updateSlides()}else Zr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(n.loopAddBlankSlides){const d=n.grid.rows-e.slides.length%n.grid.rows;u(d),e.recalcSlides(),e.updateSlides()}else Zr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function iw(t){let{slideRealIndex:e,slideTo:n=!0,direction:s,setTranslate:r,activeSlideIndex:i,byController:o,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:h,slidesEl:f,params:p}=l,{centeredSlides:m}=p;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){n&&(!p.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=h,l.emit("loopFix");return}let _=p.slidesPerView;_==="auto"?_=l.slidesPerViewDynamic():(_=Math.ceil(parseFloat(p.slidesPerView,10)),m&&_%2===0&&(_=_+1));const g=p.slidesPerGroupAuto?_:p.slidesPerGroup;let y=g;y%g!==0&&(y+=g-y%g),y+=p.loopAdditionalSlides,l.loopedSlides=y;const E=l.grid&&p.grid&&p.grid.rows>1;u.length<_+y?Zr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):E&&p.grid.fill==="row"&&Zr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],w=[];let S=l.activeIndex;typeof i>"u"?i=l.getSlideIndex(u.filter(k=>k.classList.contains(p.slideActiveClass))[0]):S=i;const R=s==="next"||!s,j=s==="prev"||!s;let O=0,P=0;const C=E?Math.ceil(u.length/p.grid.rows):u.length,L=(E?u[i].column:i)+(m&&typeof r>"u"?-_/2+.5:0);if(L<y){O=Math.max(y-L,g);for(let k=0;k<y-L;k+=1){const q=k-Math.floor(k/C)*C;if(E){const J=C-q-1;for(let te=u.length-1;te>=0;te-=1)u[te].column===J&&v.push(te)}else v.push(C-q-1)}}else if(L+_>C-y){P=Math.max(L-(C-y*2),g);for(let k=0;k<P;k+=1){const q=k-Math.floor(k/C)*C;E?u.forEach((J,te)=>{J.column===q&&w.push(te)}):w.push(q)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),j&&v.forEach(k=>{u[k].swiperLoopMoveDOM=!0,f.prepend(u[k]),u[k].swiperLoopMoveDOM=!1}),R&&w.forEach(k=>{u[k].swiperLoopMoveDOM=!0,f.append(u[k]),u[k].swiperLoopMoveDOM=!1}),l.recalcSlides(),p.slidesPerView==="auto"?l.updateSlides():E&&(v.length>0&&j||w.length>0&&R)&&l.slides.forEach((k,q)=>{l.grid.updateSlide(q,k,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),n){if(v.length>0&&j){if(typeof e>"u"){const k=l.slidesGrid[S],J=l.slidesGrid[S+O]-k;a?l.setTranslate(l.translate-J):(l.slideTo(S+O,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-J,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-J))}else if(r){const k=E?v.length/p.grid.rows:v.length;l.slideTo(l.activeIndex+k,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&R)if(typeof e>"u"){const k=l.slidesGrid[S],J=l.slidesGrid[S-P]-k;a?l.setTranslate(l.translate-J):(l.slideTo(S-P,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-J,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-J))}else{const k=E?w.length/p.grid.rows:w.length;l.slideTo(l.activeIndex-k,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=h,l.controller&&l.controller.control&&!o){const k={slideRealIndex:e,direction:s,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...k,slideTo:q.params.slidesPerView===p.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...k,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView?n:!1})}l.emit("loopFix")}function ow(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const s=[];t.slides.forEach(r=>{const i=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[i]=r}),t.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{n.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var aw={loopCreate:rw,loopFix:iw,loopDestroy:ow};function lw(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function cw(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var uw={setGrabCursor:lw,unsetGrabCursor:cw};function dw(t,e){e===void 0&&(e=this);function n(s){if(!s||s===Kn()||s===He())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(t);return!r&&!s.getRootNode?null:r||n(s.getRootNode().host)}return n(e)}function jc(t,e,n){const s=He(),{params:r}=t,i=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return i&&(n<=o||n>=s.innerWidth-o)?i==="prevent"?(e.preventDefault(),!0):!1:!0}function hw(t){const e=this,n=Kn();let s=t;s.originalEvent&&(s=s.originalEvent);const r=e.touchEventsData;if(s.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==s.pointerId)return;r.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(r.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){jc(e,s,s.targetTouches[0].pageX);return}const{params:i,touches:o,enabled:a}=e;if(!a||!i.simulateTouch&&s.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let l=s.target;if(i.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in s&&s.which===3||"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;const u=!!i.noSwipingClass&&i.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;u&&s.target&&s.target.shadowRoot&&d&&(l=d[0]);const h=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,f=!!(s.target&&s.target.shadowRoot);if(i.noSwiping&&(f?dw(h,l):l.closest(h))){e.allowClick=!0;return}if(i.swipeHandler&&!l.closest(i.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const p=o.currentX,m=o.currentY;if(!jc(e,s,p))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,r.touchStartTime=Tt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(r.allowThresholdMove=!1);let _=!0;l.matches(r.focusableElements)&&(_=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const g=_&&e.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||g)&&!l.isContentEditable&&s.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function fw(t){const e=Kn(),n=this,s=n.touchEventsData,{params:r,touches:i,rtlTranslate:o,enabled:a}=n;if(!a||!r.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(R=>R.identifier===s.touchId)[0],!u||u.identifier!==s.touchId)return}else u=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",l);return}const d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper){i.startX=d,i.startY=h;return}if(!n.allowTouchMove){l.target.matches(s.focusableElements)||(n.allowClick=!1),s.isTouched&&(Object.assign(i,{startX:d,startY:h,currentX:d,currentY:h}),s.touchStartTime=Tt());return}if(r.touchReleaseOnEdges&&!r.loop){if(n.isVertical()){if(h<i.startY&&n.translate<=n.maxTranslate()||h>i.startY&&n.translate>=n.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(d<i.startX&&n.translate<=n.maxTranslate()||d>i.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,n.allowClick=!1;return}s.allowTouchCallbacks&&n.emit("touchMove",l),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=d,i.currentY=h;const f=i.currentX-i.startX,p=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(typeof s.isScrolling>"u"){let R;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?s.isScrolling=!1:f*f+p*p>=25&&(R=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,s.isScrolling=n.isHorizontal()?R>r.touchAngle:90-R>r.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(s.startMoving=!0),s.isScrolling){s.isTouched=!1;return}if(!s.startMoving)return;n.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=n.isHorizontal()?f:p,_=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;r.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),i.diff=m,m*=r.touchRatio,o&&(m=-m,_=-_);const g=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=_>0?"prev":"next";const y=n.params.loop&&!r.cssMode,E=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!s.isMoved){if(y&&E&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const R=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(R)}s.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&g!==n.touchesDirection&&y&&E&&Math.abs(m)>=1){Object.assign(i,{startX:d,startY:h,currentX:d,currentY:h,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}n.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=m+s.startTranslate;let w=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),m>0?(y&&E&&!v&&s.allowThresholdMove&&s.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(w=!1,r.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+m)**S))):m<0&&(y&&E&&!v&&s.allowThresholdMove&&s.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(r.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(w=!1,r.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-m)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(m)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,s.currentTranslate=s.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}function pw(t){const e=this,n=e.touchEventsData;let s=t;s.originalEvent&&(s=s.originalEvent);let r;if(s.type==="touchend"||s.type==="touchcancel"){if(r=[...s.changedTouches].filter(S=>S.identifier===n.touchId)[0],!r||r.identifier!==n.touchId)return}else{if(n.touchId!==null||s.pointerId!==n.pointerId)return;r=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:u,enabled:d}=e;if(!d||!o.simulateTouch&&s.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",s),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=Tt(),f=h-n.touchStartTime;if(e.allowClick){const S=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(S&&S[0]||s.target,S),e.emit("tap click",s),f<300&&h-n.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(n.lastClickTime=Tt(),Vn(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(o.followFinger?p=l?e.translate:-e.translate:p=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-e.maxTranslate()&&!e.params.loop;let _=0,g=e.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const R=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[S+R]<"u"?(m||p>=u[S]&&p<u[S+R])&&(_=S,g=u[S+R]-u[S]):(m||p>=u[S])&&(_=S,g=u[u.length-1]-u[u.length-2])}let y=null,E=null;o.rewind&&(e.isBeginning?E=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(y=0));const v=(p-u[_])/g,w=_<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(f>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?y:_+w):e.slideTo(_)),e.swipeDirection==="prev"&&(v>1-o.longSwipesRatio?e.slideTo(_+w):E!==null&&v<0&&Math.abs(v)>o.longSwipesRatio?e.slideTo(E):e.slideTo(_))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(_+w):e.slideTo(_):(e.swipeDirection==="next"&&e.slideTo(y!==null?y:_+w),e.swipeDirection==="prev"&&e.slideTo(E!==null?E:_))}}function Fc(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:i}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=r,t.allowSlideNext=s,t.params.watchOverflow&&i!==t.snapGrid&&t.checkOverflow()}function mw(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function gw(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:s}=t;if(!s)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let r;const i=t.maxTranslate()-t.minTranslate();i===0?r=0:r=(t.translate-t.minTranslate())/i,r!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function yw(t){const e=this;Vr(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function _w(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const eh=(t,e)=>{const n=Kn(),{params:s,el:r,wrapperEl:i,device:o}=t,a=!!s.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",t.onTouchStart,{passive:!1}),r[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[l]("click",t.onClick,!0),s.cssMode&&i[l]("scroll",t.onScroll),s.updateOnWindowResize?t[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fc,!0):t[u]("observerUpdate",Fc,!0),r[l]("load",t.onLoad,{capture:!0})};function vw(){const t=this,{params:e}=t;t.onTouchStart=hw.bind(t),t.onTouchMove=fw.bind(t),t.onTouchEnd=pw.bind(t),t.onDocumentTouchStart=_w.bind(t),e.cssMode&&(t.onScroll=gw.bind(t)),t.onClick=mw.bind(t),t.onLoad=yw.bind(t),eh(t,"on")}function Tw(){eh(this,"off")}var ww={attachEvents:vw,detachEvents:Tw};const Uc=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Ew(){const t=this,{realIndex:e,initialized:n,params:s,el:r}=t,i=s.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const o=t.getBreakpoint(i,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in i?i[o]:void 0)||t.originalParams,u=Uc(t,s),d=Uc(t,l),h=s.enabled;u&&!d?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),t.emitContainerClasses()):!u&&d&&(r.classList.add(`${s.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(y=>{if(typeof l[y]>"u")return;const E=s[y]&&s[y].enabled,v=l[y]&&l[y].enabled;E&&!v&&t[y].disable(),!E&&v&&t[y].enable()});const f=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||f),m=s.loop;f&&n&&t.changeDirection(),Ge(t.params,l);const _=t.params.enabled,g=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),h&&!_?t.disable():!h&&_&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),n&&(p?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!m&&g?(t.loopCreate(e),t.updateSlides()):m&&!g&&t.loopDestroy()),t.emit("breakpoint",l)}function xw(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let s=!1;const r=He(),i=e==="window"?r.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:i*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];e==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(s=l):u<=n.clientWidth&&(s=l)}return s||"max"}var Sw={setBreakpoint:Ew,getBreakpoint:xw};function Iw(t,e){const n=[];return t.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&n.push(e+r)}):typeof s=="string"&&n.push(e+s)}),n}function bw(){const t=this,{classNames:e,params:n,rtl:s,el:r,device:i}=t,o=Iw(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:s},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),r.classList.add(...e),t.emitContainerClasses()}function Aw(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var Cw={addClasses:bw,removeClasses:Aw};function Pw(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:s}=n;if(s){const r=t.slides.length-1,i=t.slidesGrid[r]+t.slidesSizesGrid[r]+s*2;t.isLocked=t.size>i}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Rw={checkOverflow:Pw},Zo={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function kw(t,e){return function(s){s===void 0&&(s={});const r=Object.keys(s)[0],i=s[r];if(typeof i!="object"||i===null){Ge(e,s);return}if(t[r]===!0&&(t[r]={enabled:!0}),r==="navigation"&&t[r]&&t[r].enabled&&!t[r].prevEl&&!t[r].nextEl&&(t[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&t[r]&&t[r].enabled&&!t[r].el&&(t[r].auto=!0),!(r in t&&"enabled"in i)){Ge(e,s);return}typeof t[r]=="object"&&!("enabled"in t[r])&&(t[r].enabled=!0),t[r]||(t[r]={enabled:!1}),Ge(e,s)}}const xo={eventsEmitter:CT,update:FT,translate:HT,transition:QT,slide:sw,loop:aw,grabCursor:uw,events:ww,breakpoints:Sw,checkOverflow:Rw,classes:Cw},So={};let Qa=class vt{constructor(){let e,n;for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?n=r[0]:[e,n]=r,n||(n={}),n=Ge({},n),e&&!n.el&&(n.el=e);const o=Kn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const d=[];return o.querySelectorAll(n.el).forEach(h=>{const f=Ge({},n,{el:h});d.push(new vt(f))}),d}const a=this;a.__swiper__=!0,a.support=Jd(),a.device=xT({userAgent:n.userAgent}),a.browser=IT(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(d=>{d({params:n,swiper:a,extendParams:kw(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Ge({},Zo,l);return a.params=Ge({},u,So,n),a.originalParams=Ge({},a.params),a.passedParams=Ge({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(d=>{a.on(d,a.params.on[d])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:s}=this,r=xt(n,`.${s.slideClass}, swiper-slide`),i=Lc(r[0]);return Lc(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:s}=e;e.slides=xt(n,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const s=this;e=Math.min(Math.max(e,0),1);const r=s.minTranslate(),o=(s.maxTranslate()-r)*e+r;s.translateTo(o,typeof n>"u"?0:n),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(s=>{const r=e.getSlideClasses(s);n.push({slideEl:s,classNames:r}),e.emit("_slideClass",s,r)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const s=this,{params:r,slides:i,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=s;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let h=i[u]?i[u].swiperSlideSize:0,f;for(let p=u+1;p<i.length;p+=1)i[p]&&!f&&(h+=i[p].swiperSlideSize,d+=1,h>l&&(f=!0));for(let p=u-1;p>=0;p-=1)i[p]&&!f&&(h+=i[p].swiperSlideSize,d+=1,h>l&&(f=!0))}else if(e==="current")for(let h=u+1;h<i.length;h+=1)(n?o[h]+a[h]-o[u]<l:o[h]-o[u]<l)&&(d+=1);else for(let h=u-1;h>=0;h-=1)o[u]-o[h]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Vr(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const o=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(o.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}s.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const s=this,r=s.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(i=>{e==="vertical"?i.style.width="":i.style.height=""}),s.emit("changeDirection"),n&&s.update()),s}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let s=e||n.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=n,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const r=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):xt(s,r())[0];return!o&&n.params.createElements&&(o=ei("div",n.params.wrapperClass),s.append(o),xt(s,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:s,wrapperEl:o,slidesEl:n.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:n.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||Ft(s,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||Ft(s,"direction")==="rtl"),wrongRTL:Ft(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const r=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(i=>{i.complete?Vr(n,i):i.addEventListener("load",o=>{Vr(n,o.target)})}),Jo(n),n.initialized=!0,Jo(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const s=this,{params:r,el:i,wrapperEl:o,slides:a}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),n&&(s.removeClasses(),i.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),e!==!1&&(s.el.swiper=null,fT(s)),s.destroyed=!0),null}static extendDefaults(e){Ge(So,e)}static get extendedDefaults(){return So}static get defaults(){return Zo}static installModule(e){vt.prototype.__modules__||(vt.prototype.__modules__=[]);const n=vt.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>vt.installModule(n)),vt):(vt.installModule(e),vt)}};Object.keys(xo).forEach(t=>{Object.keys(xo[t]).forEach(e=>{Qa.prototype[e]=xo[t][e]})});Qa.use([bT,AT]);const th=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function hn(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function kn(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>n.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:hn(e[s])&&hn(t[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?t[s]=e[s]:kn(t[s],e[s]):t[s]=e[s]})}function nh(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function sh(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function rh(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function ih(t){t===void 0&&(t="");const e=t.split(" ").map(s=>s.trim()).filter(s=>!!s),n=[];return e.forEach(s=>{n.indexOf(s)<0&&n.push(s)}),n.join(" ")}function Nw(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function Ow(t){let{swiper:e,slides:n,passedParams:s,changedParams:r,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}=t;const u=r.filter(P=>P!=="children"&&P!=="direction"&&P!=="wrapperClass"),{params:d,pagination:h,navigation:f,scrollbar:p,virtual:m,thumbs:_}=e;let g,y,E,v,w,S,R,j;r.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(g=!0),r.includes("controller")&&s.controller&&s.controller.control&&d.controller&&!d.controller.control&&(y=!0),r.includes("pagination")&&s.pagination&&(s.pagination.el||l)&&(d.pagination||d.pagination===!1)&&h&&!h.el&&(E=!0),r.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||a)&&(d.scrollbar||d.scrollbar===!1)&&p&&!p.el&&(v=!0),r.includes("navigation")&&s.navigation&&(s.navigation.prevEl||o)&&(s.navigation.nextEl||i)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const O=P=>{e[P]&&(e[P].destroy(),P==="navigation"?(e.isElement&&(e[P].prevEl.remove(),e[P].nextEl.remove()),d[P].prevEl=void 0,d[P].nextEl=void 0,e[P].prevEl=void 0,e[P].nextEl=void 0):(e.isElement&&e[P].el.remove(),d[P].el=void 0,e[P].el=void 0))};r.includes("loop")&&e.isElement&&(d.loop&&!s.loop?S=!0:!d.loop&&s.loop?R=!0:j=!0),u.forEach(P=>{if(hn(d[P])&&hn(s[P]))Object.assign(d[P],s[P]),(P==="navigation"||P==="pagination"||P==="scrollbar")&&"enabled"in s[P]&&!s[P].enabled&&O(P);else{const C=s[P];(C===!0||C===!1)&&(P==="navigation"||P==="pagination"||P==="scrollbar")?C===!1&&O(P):d[P]=s[P]}}),u.includes("controller")&&!y&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),r.includes("children")&&n&&m&&d.virtual.enabled?(m.slides=n,m.update(!0)):r.includes("virtual")&&m&&d.virtual.enabled&&(n&&(m.slides=n),m.update(!0)),r.includes("children")&&n&&d.loop&&(j=!0),g&&_.init()&&_.update(!0),y&&(e.controller.control=d.controller.control),E&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(d.pagination.el=l),h.init(),h.render(),h.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(d.scrollbar.el=a),p.init(),p.updateSize(),p.setTranslate()),w&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=e.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=e.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),e.el.appendChild(o))),i&&(d.navigation.nextEl=i),o&&(d.navigation.prevEl=o),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=s.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=s.allowSlidePrev),r.includes("direction")&&e.changeDirection(s.direction,!1),(S||j)&&e.loopDestroy(),(R||j)&&e.loopCreate(),e.update()}function Dw(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},s={},r={};kn(n,Zo),n._emitClasses=!0,n.init=!1;const i={},o=th.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?hn(t[l])?(n[l]={},r[l]={},kn(n[l],t[l]),kn(r[l],t[l])):(n[l]=t[l],r[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?s[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:i[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:r,rest:i,events:s}}function Mw(t,e){let{el:n,nextEl:s,prevEl:r,paginationEl:i,scrollbarEl:o,swiper:a}=t;nh(e)&&s&&r&&(a.params.navigation.nextEl=s,a.originalParams.navigation.nextEl=s,a.params.navigation.prevEl=r,a.originalParams.navigation.prevEl=r),sh(e)&&i&&(a.params.pagination.el=i,a.originalParams.pagination.el=i),rh(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function Lw(t,e,n,s,r){const i=[];if(!e)return i;const o=l=>{i.indexOf(l)<0&&i.push(l)};if(n&&s){const l=s.map(r),u=n.map(r);l.join("")!==u.join("")&&o("children"),s.length!==n.length&&o("children")}return th.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(hn(t[l])&&hn(e[l])){const u=Object.keys(t[l]),d=Object.keys(e[l]);u.length!==d.length?o(l):(u.forEach(h=>{t[l][h]!==e[l][h]&&o(l)}),d.forEach(h=>{t[l][h]!==e[l][h]&&o(l)}))}else t[l]!==e[l]&&o(l)}),i}const Vw=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function ti(){return ti=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ti.apply(this,arguments)}function oh(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function ah(t){const e=[];return z.Children.toArray(t).forEach(n=>{oh(n)?e.push(n):n.props&&n.props.children&&ah(n.props.children).forEach(s=>e.push(s))}),e}function jw(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return z.Children.toArray(t).forEach(s=>{if(oh(s))e.push(s);else if(s.props&&s.props.slot&&n[s.props.slot])n[s.props.slot].push(s);else if(s.props&&s.props.children){const r=ah(s.props.children);r.length>0?r.forEach(i=>e.push(i)):n["container-end"].push(s)}else n["container-end"].push(s)}),{slides:e,slots:n}}function Fw(t,e,n){if(!n)return null;const s=d=>{let h=d;return d<0?h=e.length+d:h>=e.length&&(h=h-e.length),h},r=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:o}=n,a=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,u=[];for(let d=a;d<l;d+=1)d>=i&&d<=o&&u.push(e[s(d)]);return u.map((d,h)=>z.cloneElement(d,{swiper:t,style:r,key:`slide-${h}`}))}function gs(t,e){return typeof window>"u"?A.useEffect(t,e):A.useLayoutEffect(t,e)}const Bc=A.createContext(null),Uw=A.createContext(null),ea=A.forwardRef(function(t,e){let{className:n,tag:s="div",wrapperTag:r="div",children:i,onSwiper:o,...a}=t===void 0?{}:t,l=!1;const[u,d]=A.useState("swiper"),[h,f]=A.useState(null),[p,m]=A.useState(!1),_=A.useRef(!1),g=A.useRef(null),y=A.useRef(null),E=A.useRef(null),v=A.useRef(null),w=A.useRef(null),S=A.useRef(null),R=A.useRef(null),j=A.useRef(null),{params:O,passedParams:P,rest:C,events:M}=Dw(a),{slides:L,slots:k}=jw(i),q=()=>{m(!p)};Object.assign(O.on,{_containerClasses(ie,$e){d($e)}});const J=()=>{Object.assign(O.on,M),l=!0;const ie={...O};if(delete ie.wrapperClass,y.current=new Qa(ie),y.current.virtual&&y.current.params.virtual.enabled){y.current.virtual.slides=L;const $e={cache:!1,slides:L,renderExternal:f,renderExternalUpdate:!1};kn(y.current.params.virtual,$e),kn(y.current.originalParams.virtual,$e)}};g.current||J(),y.current&&y.current.on("_beforeBreakpoint",q);const te=()=>{l||!M||!y.current||Object.keys(M).forEach(ie=>{y.current.on(ie,M[ie])})},pe=()=>{!M||!y.current||Object.keys(M).forEach(ie=>{y.current.off(ie,M[ie])})};A.useEffect(()=>()=>{y.current&&y.current.off("_beforeBreakpoint",q)}),A.useEffect(()=>{!_.current&&y.current&&(y.current.emitSlidesClasses(),_.current=!0)}),gs(()=>{if(e&&(e.current=g.current),!!g.current)return y.current.destroyed&&J(),Mw({el:g.current,nextEl:w.current,prevEl:S.current,paginationEl:R.current,scrollbarEl:j.current,swiper:y.current},O),o&&o(y.current),()=>{y.current&&!y.current.destroyed&&y.current.destroy(!0,!1)}},[]),gs(()=>{te();const ie=Lw(P,E.current,L,v.current,$e=>$e.key);return E.current=P,v.current=L,ie.length&&y.current&&!y.current.destroyed&&Ow({swiper:y.current,slides:L,passedParams:P,changedParams:ie,nextEl:w.current,prevEl:S.current,scrollbarEl:j.current,paginationEl:R.current}),()=>{pe()}}),gs(()=>{Vw(y.current)},[h]);function Re(){return O.virtual?Fw(y.current,L,h):L.map((ie,$e)=>z.cloneElement(ie,{swiper:y.current,swiperSlideIndex:$e}))}return z.createElement(s,ti({ref:g,className:ih(`${u}${n?` ${n}`:""}`)},C),z.createElement(Uw.Provider,{value:y.current},k["container-start"],z.createElement(r,{className:Nw(O.wrapperClass)},k["wrapper-start"],Re(),k["wrapper-end"]),nh(O)&&z.createElement(z.Fragment,null,z.createElement("div",{ref:S,className:"swiper-button-prev"}),z.createElement("div",{ref:w,className:"swiper-button-next"})),rh(O)&&z.createElement("div",{ref:j,className:"swiper-scrollbar"}),sh(O)&&z.createElement("div",{ref:R,className:"swiper-pagination"}),k["container-end"]))});ea.displayName="Swiper";const ta=A.forwardRef(function(t,e){let{tag:n="div",children:s,className:r="",swiper:i,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:u,...d}=t===void 0?{}:t;const h=A.useRef(null),[f,p]=A.useState("swiper-slide"),[m,_]=A.useState(!1);function g(w,S,R){S===h.current&&p(R)}gs(()=>{if(typeof u<"u"&&(h.current.swiperSlideIndex=u),e&&(e.current=h.current),!(!h.current||!i)){if(i.destroyed){f!=="swiper-slide"&&p("swiper-slide");return}return i.on("_slideClass",g),()=>{i&&i.off("_slideClass",g)}}}),gs(()=>{i&&h.current&&!i.destroyed&&p(i.getSlideClasses(h.current))},[i]);const y={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},E=()=>typeof s=="function"?s(y):s,v=()=>{_(!0)};return z.createElement(n,ti({ref:h,className:ih(`${f}${r?` ${r}`:""}`),"data-swiper-slide-index":l,onLoad:v},d),o&&z.createElement(Bc.Provider,{value:y},z.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},E(),a&&!m&&z.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&z.createElement(Bc.Provider,{value:y},E(),a&&!m&&z.createElement("div",{className:"swiper-lazy-preloader"})))});ta.displayName="SwiperSlide";function $c(t){let{swiper:e,extendParams:n,on:s,emit:r}=t;const i=He();n({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let o,a=Tt(),l;const u=[];function d(v){let j=0,O=0,P=0,C=0;return"detail"in v&&(O=v.detail),"wheelDelta"in v&&(O=-v.wheelDelta/120),"wheelDeltaY"in v&&(O=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(j=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(j=O,O=0),P=j*10,C=O*10,"deltaY"in v&&(C=v.deltaY),"deltaX"in v&&(P=v.deltaX),v.shiftKey&&!P&&(P=C,C=0),(P||C)&&v.deltaMode&&(v.deltaMode===1?(P*=40,C*=40):(P*=800,C*=800)),P&&!j&&(j=P<1?-1:1),C&&!O&&(O=C<1?-1:1),{spinX:j,spinY:O,pixelX:P,pixelY:C}}function h(){e.enabled&&(e.mouseEntered=!0)}function f(){e.enabled&&(e.mouseEntered=!1)}function p(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&Tt()-a<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&Tt()-a<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),r("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),r("scroll",v.raw)),a=new i.Date().getTime(),!1)}function m(v){const w=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&w.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&w.releaseOnEdges)return!0;return!1}function _(v){let w=v,S=!0;if(!e.enabled||v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const R=e.params.mousewheel;e.params.cssMode&&w.preventDefault();let j=e.el;e.params.mousewheel.eventsTarget!=="container"&&(j=document.querySelector(e.params.mousewheel.eventsTarget));const O=j&&j.contains(w.target);if(!e.mouseEntered&&!O&&!R.releaseOnEdges)return!0;w.originalEvent&&(w=w.originalEvent);let P=0;const C=e.rtlTranslate?-1:1,M=d(w);if(R.forceToAxis)if(e.isHorizontal())if(Math.abs(M.pixelX)>Math.abs(M.pixelY))P=-M.pixelX*C;else return!0;else if(Math.abs(M.pixelY)>Math.abs(M.pixelX))P=-M.pixelY;else return!0;else P=Math.abs(M.pixelX)>Math.abs(M.pixelY)?-M.pixelX*C:-M.pixelY;if(P===0)return!0;R.invert&&(P=-P);let L=e.getTranslate()+P*R.sensitivity;if(L>=e.minTranslate()&&(L=e.minTranslate()),L<=e.maxTranslate()&&(L=e.maxTranslate()),S=e.params.loop?!0:!(L===e.minTranslate()||L===e.maxTranslate()),S&&e.params.nested&&w.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const k={time:Tt(),delta:Math.abs(P),direction:Math.sign(P),raw:v};u.length>=2&&u.shift();const q=u.length?u[u.length-1]:void 0;if(u.push(k),q?(k.direction!==q.direction||k.delta>q.delta||k.time>q.time+150)&&p(k):p(k),m(k))return!0}else{const k={time:Tt(),delta:Math.abs(P),direction:Math.sign(P)},q=l&&k.time<l.time+500&&k.delta<=l.delta&&k.direction===l.direction;if(!q){l=void 0;let J=e.getTranslate()+P*R.sensitivity;const te=e.isBeginning,pe=e.isEnd;if(J>=e.minTranslate()&&(J=e.minTranslate()),J<=e.maxTranslate()&&(J=e.maxTranslate()),e.setTransition(0),e.setTranslate(J),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!te&&e.isBeginning||!pe&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:k.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(o),o=void 0,u.length>=15&&u.shift();const Re=u.length?u[u.length-1]:void 0,ie=u[0];if(u.push(k),Re&&(k.delta>Re.delta||k.direction!==Re.direction))u.splice(0);else if(u.length>=15&&k.time-ie.time<500&&ie.delta-k.delta>=1&&k.delta<=6){const $e=P>0?.8:.2;l=k,u.splice(0),o=Vn(()=>{e.slideToClosest(e.params.speed,!0,void 0,$e)},0)}o||(o=Vn(()=>{l=k,u.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(q||r("scroll",w),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),R.releaseOnEdges&&(J===e.minTranslate()||J===e.maxTranslate()))return!0}}return w.preventDefault?w.preventDefault():w.returnValue=!1,!1}function g(v){let w=e.el;e.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(e.params.mousewheel.eventsTarget)),w[v]("mouseenter",h),w[v]("mouseleave",f),w[v]("wheel",_)}function y(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",_),!0):e.mousewheel.enabled?!1:(g("addEventListener"),e.mousewheel.enabled=!0,!0)}function E(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,_),!0):e.mousewheel.enabled?(g("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}s("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&E(),e.params.mousewheel.enabled&&y()}),s("destroy",()=>{e.params.cssMode&&y(),e.mousewheel.enabled&&E()}),Object.assign(e.mousewheel,{enable:y,disable:E})}function qc(t){let{swiper:e,extendParams:n,on:s}=t;n({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function r(u,d){const h=function(){let _,g,y;return(E,v)=>{for(g=-1,_=E.length;_-g>1;)y=_+g>>1,E[y]<=v?g=y:_=y;return _}}();this.x=u,this.y=d,this.lastIndex=u.length-1;let f,p;return this.interpolate=function(_){return _?(p=h(this.x,_),f=p-1,(_-this.x[f])*(this.y[p]-this.y[f])/(this.x[p]-this.x[f])+this.y[f]):0},this}function i(u){e.controller.spline=e.params.loop?new r(e.slidesGrid,u.slidesGrid):new r(e.snapGrid,u.snapGrid)}function o(u,d){const h=e.controller.control;let f,p;const m=e.constructor;function _(g){if(g.destroyed)return;const y=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(i(g),p=-e.controller.spline.interpolate(-y)),(!p||e.params.controller.by==="container")&&(f=(g.maxTranslate()-g.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(f)||!Number.isFinite(f))&&(f=1),p=(y-e.minTranslate())*f+g.minTranslate()),e.params.controller.inverse&&(p=g.maxTranslate()-p),g.updateProgress(p),g.setTranslate(p,e),g.updateActiveIndex(),g.updateSlidesClasses()}if(Array.isArray(h))for(let g=0;g<h.length;g+=1)h[g]!==d&&h[g]instanceof m&&_(h[g]);else h instanceof m&&d!==h&&_(h)}function a(u,d){const h=e.constructor,f=e.controller.control;let p;function m(_){_.destroyed||(_.setTransition(u,e),u!==0&&(_.transitionStart(),_.params.autoHeight&&Vn(()=>{_.updateAutoHeight()}),TT(_.wrapperEl,()=>{f&&_.transitionEnd()})))}if(Array.isArray(f))for(p=0;p<f.length;p+=1)f[p]!==d&&f[p]instanceof h&&m(f[p]);else f instanceof h&&d!==f&&m(f)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}s("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const u=document.querySelector(e.params.controller.control);if(u&&u.swiper)e.controller.control=u.swiper;else if(u){const d=h=>{e.controller.control=h.detail[0],e.update(),u.removeEventListener("init",d)};u.addEventListener("init",d)}return}e.controller.control=e.params.controller.control}),s("update",()=>{l()}),s("resize",()=>{l()}),s("observerUpdate",()=>{l()}),s("setTranslate",(u,d,h)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(d,h)}),s("setTransition",(u,d,h)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(d,h)}),Object.assign(e.controller,{setTranslate:o,setTransition:a})}function Bw(t){const{effect:e,swiper:n,on:s,setTranslate:r,setTransition:i,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:u}=t;s("beforeInit",()=>{if(n.params.effect!==e)return;n.classNames.push(`${n.params.containerModifierClass}${e}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const h=o?o():{};Object.assign(n.params,h),Object.assign(n.originalParams,h)}),s("setTranslate",()=>{n.params.effect===e&&r()}),s("setTransition",(h,f)=>{n.params.effect===e&&i(f)}),s("transitionEnd",()=>{if(n.params.effect===e&&l){if(!u||!u().slideShadows)return;n.slides.forEach(h=>{h.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let d;s("virtualUpdate",()=>{n.params.effect===e&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(r(),d=!1)}))})}function $w(t,e){const n=Ka(e);return n!==e&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function zc(t,e,n){const s=`swiper-slide-shadow${n?`-${n}`:""}${t?` swiper-slide-shadow-${t}`:""}`,r=Ka(e);let i=r.querySelector(`.${s.split(" ").join(".")}`);return i||(i=ei("div",s.split(" ")),r.append(i)),i}function Hc(t){let{swiper:e,extendParams:n,on:s}=t;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Bw({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:o,height:a,slides:l,slidesSizesGrid:u}=e,d=e.params.coverflowEffect,h=e.isHorizontal(),f=e.translate,p=h?-f+o/2:-f+a/2,m=h?d.rotate:-d.rotate,_=d.depth;for(let g=0,y=l.length;g<y;g+=1){const E=l[g],v=u[g],w=E.swiperSlideOffset,S=(p-w-v/2)/v,R=typeof d.modifier=="function"?d.modifier(S):S*d.modifier;let j=h?m*R:0,O=h?0:m*R,P=-_*Math.abs(R),C=d.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(d.stretch)/100*v);let M=h?0:C*R,L=h?C*R:0,k=1-(1-d.scale)*Math.abs(R);Math.abs(L)<.001&&(L=0),Math.abs(M)<.001&&(M=0),Math.abs(P)<.001&&(P=0),Math.abs(j)<.001&&(j=0),Math.abs(O)<.001&&(O=0),Math.abs(k)<.001&&(k=0),e.browser&&e.browser.isSafari&&(Math.abs(j)/90%2===1&&(j+=.001),Math.abs(O)/90%2===1&&(O+=.001));const q=`translate3d(${L}px,${M}px,${P}px)  rotateX(${O}deg) rotateY(${j}deg) scale(${k})`,J=$w(d,E);if(J.style.transform=q,E.style.zIndex=-Math.abs(Math.round(R))+1,d.slideShadows){let te=h?E.querySelector(".swiper-slide-shadow-left"):E.querySelector(".swiper-slide-shadow-top"),pe=h?E.querySelector(".swiper-slide-shadow-right"):E.querySelector(".swiper-slide-shadow-bottom");te||(te=zc("coverflow",E,h?"left":"top")),pe||(pe=zc("coverflow",E,h?"right":"bottom")),te&&(te.style.opacity=R>0?R:0),pe&&(pe.style.opacity=-R>0?-R:0)}}},setTransition:o=>{e.slides.map(l=>Ka(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const qw="qv7u",zw="Cmkm",Hw="x5bj",Ww="Y5tL",Gw="ucOI",Kw="fYcF",Qw="QmFB",Xw="zRO9",Yw="TMTE",Jw="pyCI",Zw="dWsM",eE="_--s-",tE="-yZd",Ue={section:qw,hidden:zw,swiperWrapper:Hw,yearSwiper:Ww,yearSwiperSlide:Gw,yearSlide:Kw,isActive:Qw,isInActive:Xw,historySwiper:Yw,historySwiperSlide:Jw,historySlide:Zw,historySlideTitle:eE,historySlideDescription:tE};function lh({isActive:t,year:e}){return c.jsxs("div",{className:`${Ue.yearSlide} ${t?Ue.isActive:Ue.isInActive}`,children:[c.jsx("span",{children:e}),c.jsx("img",{src:`${t?"/src/assets/history_circle.svg":"/src/assets/history_circleline.svg"}`,alt:"","aria-hidden":!0})]})}lh.propTypes={isActive:T.bool.isRequired,year:T.string.isRequired};function ch({isActive:t,year:e,history:n}){return c.jsxs("div",{className:`${Ue.historySlide} ${t?Ue.isActive:Ue.isInActive}`,children:[c.jsx("span",{className:Ue.historySlideTitle,children:e}),c.jsx("ul",{className:Ue.historySlideDescription,children:n.map(s=>c.jsx("li",{children:s},s))})]})}ch.propTypes={isActive:T.bool.isRequired,year:T.string.isRequired,history:T.arrayOf(T.string).isRequired};const nE={2007:["한국 소프트웨어산업협회 소프트웨어사업자 등록","Microsoft Gold Partner사 등록","‘주식회사 오픈에스지닷넷’ 설립"],2009:["기술보증기금 벤처기업 등록"],2010:["충남 아산시 본사 이전"],2017:["‘주식회사 오픈에스지’ 회사명 변경","R&D 센터 수립_서울 서초"],2020:["경기도 동탄으로 본사 이전 및 천안 자동화 연구소 신설"],2021:["Microsoft 공인파트너 MRPP 및 HoloLens2 판권 획득"],2022:["경영혁신형 중소기업 Main-biz 인증 획득","경광등 작동신호 무선 송출기 발명 특허 등록"],2023:["ISO 9001, 14001 획득","기술혁신형 중소기업 Inno-biz 인증 획득","벤처 기업 등록"]};function sE(){const[t,e]=A.useState(null),[n,s]=A.useState(null),r=Object.entries(nE).toSorted((i,o)=>o[0]-i[0]);return c.jsxs("section",{className:Ue.section,children:[c.jsx("h2",{className:Ue.hidden,children:"오픈에스지 연혁"}),c.jsxs("div",{className:Ue.swiperWrapper,children:[c.jsx(ea,{mousewheel:!0,centeredSlides:!0,modules:[qc,Hc,$c],effect:"coverflow",breakpoints:{375:{slidesPerView:5,spaceBetween:10},1024:{slidesPerView:7,spaceBetween:20},1440:{slidesPerView:7,spaceBetween:30}},coverflowEffect:{rotate:0,stretch:0,depth:0,slideShadows:!0},onSwiper:e,controller:{by:"container",control:n},className:Ue.yearSwiper,children:r.map(([i])=>c.jsx(ta,{className:Ue.yearSwiperSlide,children:({isActive:o})=>c.jsx(lh,{isActive:o,year:i},i)},i))}),c.jsx(ea,{mousewheel:!0,centeredSlides:!0,modules:[qc,Hc,$c],effect:"coverflow",breakpoints:{375:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:30}},coverflowEffect:{rotate:20,scale:.7},onSwiper:s,controller:{by:"container",control:t},className:Ue.historySwiper,children:r.map(([i,o])=>c.jsx(ta,{className:Ue.historySwiperSlide,children:({isActive:a})=>c.jsx(ch,{isActive:a,year:i,history:o})},i))})]})]})}function rE(){return c.jsx(sE,{})}function iE(){return c.jsx("div",{children:"Team"})}function oE(){return c.jsx("div",{children:"Location"})}var na=new Map,vr=new WeakMap,Wc=0,aE=void 0;function lE(t){return t?(vr.has(t)||(Wc+=1,vr.set(t,Wc.toString())),vr.get(t)):"0"}function cE(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?lE(t.root):t[e]}`).toString()}function uE(t){let e=cE(t),n=na.get(e);if(!n){const s=new Map;let r;const i=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&r.some(d=>a.intersectionRatio>=d);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=s.get(a.target))==null||l.forEach(d=>{d(u,a)})})},t);r=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:s},na.set(e,n)}return n}function dE(t,e,n={},s=aE){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const l=t.getBoundingClientRect();return e(s,{isIntersecting:s,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:i,elements:o}=uE(n);let a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),i.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),i.unobserve(t)),o.size===0&&(i.disconnect(),na.delete(r))}}function ys({threshold:t,delay:e,trackVisibility:n,rootMargin:s,root:r,triggerOnce:i,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var d;const[h,f]=A.useState(null),p=A.useRef(),[m,_]=A.useState({inView:!!a,entry:void 0});p.current=u,A.useEffect(()=>{if(o||!h)return;let v;return v=dE(h,(w,S)=>{_({inView:w,entry:S}),p.current&&p.current(w,S),S.isIntersecting&&i&&v&&(v(),v=void 0)},{root:r,rootMargin:s,threshold:t,trackVisibility:n,delay:e},l),()=>{v&&v()}},[Array.isArray(t)?t.toString():t,h,r,s,i,o,n,l,e]);const g=(d=m.entry)==null?void 0:d.target,y=A.useRef();!h&&g&&!i&&!o&&y.current!==g&&(y.current=g,_({inView:!!a,entry:void 0}));const E=[f,m.inView,m.entry];return E.ref=E[0],E.inView=E[1],E.entry=E[2],E}const hE={솔루션:"Equipment Control System",제품명:"AGV Control System",제품설명:"AGV를 이용한 물류 제어 시스템으로 실시간으로 AGV Traffic 을 제어합니다.",특징:["최대 80대 이상의 AGV 운용 및 Simulation 가능","개방형 프로토콜로 타 AGV를 빠르게 라인에 적용","Job 수행을 위한 정밀한 경로 계획 및 추적","Job 스케줄링 및 AGV 트래픽 최적화 알고리즘","알고리즘 기반 AGV 자동 충돌 방지","실시간 데이터 분석 및 관리","MES, MCS 시스템과 유연한 통합","Flexible한 Line 상황을 대응(Layout 변경 등)","C/S 와 Web 기반 사용자 친화적 인터페이스 제공","PlayBack & Simulation 지원 기능"],기능:["자동화 및 생산성 향상: 인공 지능형 ACS 를 사용함으로써 복잡한 Traffic 을 효율적으로 관리하여 생산성이 향상.","정확성 및 신뢰성: ACS Traffic 관제에 따라 AGV 목적지 이동 시간을 예측하여 효율적인 물류 운송을 계획할 수 있다.","Simulation 을 통해 Layout 배치 및 물동량 예측 가능"],기대효과:["자동화 및 생산성 향상: 인공 지능형 ACS 를 사용함으로써 복잡한 Traffic 을 효율적으로 관리하여 생산성이 향상.","정확성 및 신뢰성: ACS Traffic 관제에 따라 AGV 목적지 이동 시간을 예측하여 효율적인 물류 운송을 계획할 수 있다.","Simulation 을 통해 Layout 배치 및 물동량 예측 가능"],산업군:["semiconductor","display","battery","port"]},fE={솔루션:"Equipment Control System",제품명:"OHT Control System",제품설명:"OHT를 이용한 물류 제어 시스템으로 고속으로 이동하는 OHT 의 실시간 Traffic 제어가 가능합니다.",특징:["최대 300대 이상의 OHT 제어 운영하며 Simulation 가능","Traffic 분산, 최적 Job 할당, 분기, HID 용량 및 Cluster 분산 등 최적화 기능 탑재","실시간 데이터 분석 및 관리","MES, MCS 시스템과 유연한 통합","3D 기반의 UI 화면 제공","OCS Core 기반으로 Customizing Application을 고객사에서 별도로 개발 제공","PlayBack & Simulation 지원 기능"],기능:["OHT 통신 및 이동중 로밍","OHT 상태관리","OHT 주행 제어, 위치 추적, 분기 합류 제어, 밀어내기","최적 경로 탐색, 경로 가중치 관리","Job 스케줄링, 최적 할당, 우선할당, 지정할당","MCS & MES 이벤트 보고 및 Job 요청 처리"],기대효과:["자동화 및 생산성 향상: 인공 지능형 OCS 를 사용함으로써 복잡한 Traffic 을 효율적으로 관리하여 생산성이 향상.","정확성 및 신뢰성: ACS Traffic 관제에 따라 AGV 목적지 이동 시간을 예측하여 효율적인 물류 운송을 계획할 수 있다.","Simulation 을 통해 Layout 배치 및 물동량 예측 가능"],산업군:["semiconductor","display","battery"]},pE={솔루션:"Equipment Control System",제품명:"Stocker Control System",제품설명:"Stocker 장비를 제어하는 시스템으로, Stocker 내부의 Robot(RackMaster)을 최적의 동선으로 이동 및 밀어내기 시키며, Shelf (Rack)내 제품의 정보를 관리하고, 최대 Triple Robot(RackMaster) 제어 할 수 있는 스케줄링 기능 지원, 원격지 모니터링 및 제어기능 지원, 효율적인 물동량 산출을 위한 Simulation 등 다양한 기능을 제공합니다.",특징:["벡터 기반 렌더링 엔진으로 시인성 높은 UI 화면 제공","Configuration을 통한 SCS 최적화 기능","PLC Simulation 지원으로 PLC와 동일한 개발 환경 제공","라인이 아닌 Office에서 라인과 동일한 화면으로 제어 및 모니터링 가능","PlayBack & Simulation 지원 기능"],기능:["Single, Dual, Triple Robot(R/M) 동작 제어","MES/MCS 통신 연동 (HSMS)","EQ Melsec 통신","Multi Index or Conveyor Loading Scheduleing"],기대효과:["Robot, EQ Maker 에 국한되지 않는 표준화 작업 구현","Play-Back 기능을 통한 Alarm 원인 신속 확인 가능"],산업군:["semiconductor","display","battery"]},mE={솔루션:"Equipment Control System",제품명:"Conveyor Control System",제품설명:"공장 자동화 물류의 기본인 Conveyor 물류에 대해 지능형 물동 운송 지령을 내리며 RTV, Lifter, Diverter 등등의 기능성 장비도 본 프로그램에 의해 자동 연동 제어가 됩니다.",특징:["Remote UI 화면 제공","2D, 2.5D Layout 지원","UX (MS WPF) UI","MES/MCS 대응 가능(SEMI 규격)","OCS Click-Once를 사용한 Install 및 자동 Patch","PlayBack & Simulation 지원 기능"],기능:["표준화된 통합 UI 구성","다양한 SCS 대응 (Shuttle, STK, Mask) ","실시간 주행 경로 변경 및 전송","SECS 표준을 준수한 자체 HSMS Driver 보유","다양한 Robot 제어 지원"],기대효과:["Remote UI를 통한 원격 제어 및 모니터링 ","하나의 프로그램으로 여러종류의 Stocker Type 대응 가능","Line 물리적 환경 변경에 대한 대응 원할 ","자체 HSMS Driver를 통한 HSMS Driver 구입 비용 절감","TCP/IP 또는 IO 접점을 통해 다양한 Robot 제어 가능"],산업군:["semiconductor","display","battery"]},gE={솔루션:"Monitoring Solution",제품명:"Advanced Integrated Monitoring Solution",제품설명:"현재의 기업 트렌드는 현장만을 위한 시스템보다 경영층의 직접적인 모니터링을 통한 통합업무 시스템으로, 현장의 정보흐름을 보다 빠르게 파악하여 원활하고 신속한 의사결정 및 위기상황에 탄력적으로 대응할 수 있는 프로세스 혁신을 이루어 내어 낭비가 제거된 새로운 시스템",특징:["가상 Line Tour 기능","Layout 슬라이드 쇼 기능","Layout 모델러 제공으로 현업에서 Layout 구성","Relay Server를 통한 원격지 사이트 모니터링"],기능:["Plug-in 형식의 레이아웃","강력하고 쉬운 Visual Components","사용자별 요구에 맞는 통합 모니터링","검증된 빠른 성능의 모니터링 엔진","개방형 아키텍처 다양한 시스템 확장","다양한 설비들의 Multiple Protocol 대응"],기대효과:["다양한 생산 현장과 설비 Layout Design ","사용자별 맞춤 Client Design ","사실시간 모니터링과 빠른 대처 가능 ","추가 설비 Design, 통신, 스트립터 확장 가능 ","투자비 절감"],산업군:["semiconductor","display","battery"]},yE={솔루션:"Comm Driver",제품명:"High-Speed Message Service",제품설명:"SECS 표준 HSMS (SEMI Equipment Communications Standard High-Speed Message Service) Driver는 공장 자동화를 위한 핵심 소프트웨어로서, 제조 공정에서 장비 간 효율적이고 신속한 통신을 지원합니다.",특징:["SEMI 통신 표준 준수","높은 속도와 안정성","쉬운 통합 및 사용","semiconductor 라인에서 검증된 제품","Binary, SECS-II Log"],기능:["Config 설정 및 런타임 환경 설정","Microsoft .NET 기반 SECS/GEM Driver"],기대효과:["개발 생산성 향상","확장성 있는 개발 방법론 제공"],산업군:["display","battery"]},Nt={ACS:hE,OCS:fE,SCS:pE,CCS:mE,"IDX Controller":{솔루션:"Equipment Control System",제품명:"Index Control System",제품설명:"Indexer (Auto Loader) 를 제어하기 위한 프로그램으로 EQ 설비에효율적인 Product 공급과 Stocker 간의 물류 반송을 담당합니다.",특징:["표준화된 통합 UI 구성","다양한 Indexer 제품의 I/O Module 대응","SECS 표준을 준수한 자체 HSMS Driver","Indexer 설비간 다양한 통신 프로토콜","다양한 Robot 제어 지원","다양한 Log Format 지원"],기능:["Robot 상태 관리","HSMS 통신(독립형)을 통한 MCS 연동","R/M Stocker Melsec 통신","EQ Sequence 통신","Safety Interlock"],기대효과:["다양한 공정의 EQ설비들에 대한 WorkFlow Scheduler로 확장성 향상","semiconductor 라인에서의 검증된 신뢰성 보장"],산업군:["display"]},"Map Designer":{솔루션:"Smart Tools",제품명:"Map Designer",제품설명:"MapDesigner는 semiconductor 제조 라인에서 OHT(Overhead Hoist Transporter) 및 AGV(Automated Guided Vehicle)의 동선을 그릴 수 있는 강력한 프로그램입니다.",특징:["직관적이고 사용자 친화적인 인터페이스","직관적인 디자인을 통해 사용자가 쉽게 동선을 그릴 수 있는 친화적인 환경 제공","다양한 경로 설계 도구를 통해 OHT 및 AGV의 동선을 자유롭게 그릴수 있게 제공","동선을 그린 후 실시간 시뮬레이션을 통해 시스템 동작을 미리 확인","다양한 제조 라인 및 생산 시설의 레이아웃을 지원하여 다양한 산업 환경에 적용"],기능:["CAD 도면 활용 지원","Layout 정보에 대한 Import/Export l지원","2D, 3D 지원"],기대효과:["최적화된 동선은 물류 로봇의 효율을 향상시켜 전체 생산성을 향상","효율적인 동선 및 생산 프로세스 최적화로 인해 생산 비용을 절감","다양한 레이아웃 및 환경에 적용 가능한 MapDesigner는 기업의 유연성과 변화에 대한 대응력을 향상"],산업군:["semiconductor","display","battery"]},"ACS Simulator":{솔루션:"Smart Tools",제품명:"ACS Simulator",제품설명:"ACS Simulator는 AGV(Control System) 시스템의 시뮬레이션을 제공하는 프로그램으로, 자동 유도 차량(AGV)의 제어 시스템을 효과적으로 시뮬레이션하고 테스트하는 데 사용됩니다.",특징:["실제 AGV 작업 환경을 모방한 시뮬레이션을 통해 실제 운용 전에 안전하게 테스트","다양한 작업 환경, 레이아웃, 및 장애물을 설정하여 다양한 시나리오에서의 AGV 동작을 시험","AGV의 움직임, 센서 데이터, 배터리 상태 등의 실시간 데이터를 분석하고 모니터링","시나리오를 간편하게 생성하고 수정하여 다양한 테스트 케이스를 수행"],기능:["운행 경로 시뮬레이션","장애물 회피 및 경로 최적화","양한 통신 프로토콜에 대한 테스트가 가능하며, 실제 환경에서 발생할 수 있는 다양한 상황을 시뮬레이션 할 수 있다.","시스템의 성능과 안정성을 다양한 상황에서 테스트하여 실제 운용 시의 문제를 미리 예방"],기대효과:["ACS Simulator를 통해 시스템을 효과적으로 개발하고 테스트함으로써 비용을 절감하고 운영 효율성을 향상","다양한 시나리오에서의 테스트를 통해 실제 운영 시의 안전성을 보장","시뮬레이션을 통해 발생하는 문제를 빠르게 식별하고 개선할 수 있어, 운영 중 발생할 수 있는 문제에 대한 대비를 가능","안전하게 시뮬레이션을 수행함으로써 생산성을 향상시키고 효율적인 운영"],산업군:["semiconductor","display","battery","port"]},"SCS Simulator":{솔루션:"Smart Tools",제품명:"SCS Simulator",제품설명:"SCS Simulator는 SCS(Control System)의 시뮬레이션 및 테스트를 위한 프로그램으로, 실제 SCS 시스템의 동작을 모방하고 다양한 시나리오에서의 성능을 테스트하는 데 사용됩니다.",특징:["실제 SCS 환경을 모방하여 생산 시스템의 시뮬레이션을 수행할 수 있습니다","다양한 제어 시나리오를 설정하여 SCS의 동작을 테스트하고 최적의 운영 방법을 찾을 수 있습니다.","실시간 데이터를 모니터링하고 분석하여 시스템의 상태를 실시간으로 확인","간편한 시나리오 생성 및 관리를 통해 다양한 테스트 케이스를 수행 가능"],기능:["SCS의 동작을 실제와 유사하게 시뮬레이션하여 시스템의 성능 및 안정성을 테스트 할 수 있다.","다양한 제어 시나리오에서의 SCS 동작을 테스트하고 최적의 운영 방법을 찾을 수 있다.","SCS의 실시간 데이터를 분석하고 모니터링하여 시스템의 상태를 실시간으로 확인","장애 발생 시의 시나리오를 설정하여 장애 처리 및 복구에 대한 테스트를 수행"],기대효과:["실제 운영 환경에 영향을 미치지 않고 SCS Simulator를 사용하여 시스템 업그레이드 및 유지보수 작업을 테스트","SCS Simulator를 통해 시스템을 효과적으로 개발하고 테스트함으로써 비용을 절감하고 운영 효율성을 향상","다양한 시나리오에서의 테스트를 통해 실제 운영 시의 안전성을 보장","시뮬레이션을 통해 발생하는 문제를 빠르게 식별하고 개선할 수 있어, 운영 중 발생할 수 있는 문제에 대한 대비 가능","안전하게 시뮬레이션을 수행함으로써 생산성을 향상시키고 효율적인 운영"],산업군:["semiconductor","display","battery"]},AIMS:gE,HSMS:yE};let Tr;const _E=new Uint8Array(16);function vE(){if(!Tr&&(Tr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Tr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Tr(_E)}const Se=[];for(let t=0;t<256;++t)Se.push((t+256).toString(16).slice(1));function TE(t,e=0){return Se[t[e+0]]+Se[t[e+1]]+Se[t[e+2]]+Se[t[e+3]]+"-"+Se[t[e+4]]+Se[t[e+5]]+"-"+Se[t[e+6]]+Se[t[e+7]]+"-"+Se[t[e+8]]+Se[t[e+9]]+"-"+Se[t[e+10]]+Se[t[e+11]]+Se[t[e+12]]+Se[t[e+13]]+Se[t[e+14]]+Se[t[e+15]]}const wE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Gc={randomUUID:wE};function _t(t,e,n){if(Gc.randomUUID&&!e&&!t)return Gc.randomUUID();t=t||{};const s=t.random||(t.rng||vE)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=s[r];return e}return TE(s)}const EE="cCXg",xE="shWy",SE="Ztfe",IE="TSdy",bE="ojkS",AE="_4E3M",CE="wqUQ",PE="_2n6y",RE="WNyA",kE="jnR-",NE="R1G5",OE="La7f",DE="DYaD",ME="hIm4",LE="Kptr",VE="BPTv",jE="s6mX",FE="NVIE",UE="zxfX",BE="j93R",$E="uGVd",qE="_6T30",zE="KOm7",HE="Z42t",WE="M18e",GE="_7fOK",G={Lnb:EE,list:xE,listItem:SE,link:IE,activeLink:bE,SolutionBanner:AE,wrapper:CE,title:PE,nav:RE,banner:kE,solution:NE,desc:OE,Snb:DE,item:ME,Char:LE,subTitle:VE,container:jE,containerTitle:FE,product:UE,charList:BE,charItem:$E,charItemTitle:qE,Func:zE,imageWrapper:HE,image:WE,Effect:GE};function uh({LnbArray:t}){return c.jsx("nav",{className:G.Lnb,children:c.jsx("ul",{className:G.list,children:t&&t.map(e=>c.jsx("li",{className:G.listItem,children:c.jsx(en,{to:`/solutions/${e}`,className:({isActive:n})=>n?G.activeLink:G.link,children:e})},_t()))})})}uh.propTypes={LnbArray:T.arrayOf(T.string).isRequired};function dh({currentLocation:t,prevLocation:e}){return c.jsx("section",{className:G.SolutionBanner,children:c.jsxs("div",{className:G.wrapper,children:[c.jsx("h3",{className:G.title,children:"솔루션 배너"}),c.jsxs("p",{className:G.nav,children:[e,"  >  ",t]}),c.jsxs("div",{className:G.banner,children:[c.jsx("p",{className:G.desc,children:"물류 자동화의 첫 걸음"}),c.jsxs("p",{className:G.solution,children:["Open",t,"®"]})]})]})})}dh.propTypes={currentLocation:T.string.isRequired,prevLocation:T.string.isRequired};function hh({currentLocation:t,data:e,refs:n}){return c.jsxs("section",{id:"Char",ref:n,className:G.Char,children:[c.jsxs("span",{className:G.subTitle,children:["Open",t]}),c.jsx("h3",{className:G.title,children:"제품 및 특징"}),c.jsxs("div",{className:G.container,children:[c.jsx("p",{className:G.containerTitle,children:"제품"}),c.jsx("p",{className:G.product,children:e&&e[t].제품설명})]}),c.jsxs("div",{className:G.container,children:[c.jsx("p",{className:G.containerTitle,children:"특징"}),c.jsx("ul",{className:G.charList,children:e&&e[t].특징.map(s=>c.jsxs("li",{className:G.charItem,children:[c.jsx("p",{className:G.charItemTitle,children:"특징 제목"}),c.jsx("p",{children:s})]},_t()))})]})]})}hh.propTypes={currentLocation:T.string.isRequired,data:T.objectOf(T.shape({솔루션:T.string,제품명:T.string,제품설명:T.string,특징:T.arrayOf(T.string),기능:T.arrayOf(T.string),기대효과:T.arrayOf(T.string),산업군:T.arrayOf(T.string)})).isRequired,refs:T.oneOfType([T.func,T.shape({current:T.instanceOf(Element)})]).isRequired};function fh({inViewChar:t,inViewFunc:e,inViewEffect:n}){return c.jsx("aside",{className:G.Snb,children:c.jsx("nav",{className:G.nav,children:c.jsxs("ul",{className:G.list,children:[c.jsx("li",{className:t&&t?G.item:"",children:c.jsx("a",{className:G.link,href:"#Char",children:"제품 및 특징"})}),c.jsx("li",{className:!t&&e?G.item:"",children:c.jsx("a",{className:G.link,href:"#Func",children:"기능"})}),c.jsx("li",{className:!e&&n?G.item:"",children:c.jsx("a",{className:G.link,href:"#Effect",children:"기대 효과"})})]})})})}fh.propTypes={inViewChar:T.bool.isRequired,inViewFunc:T.bool.isRequired,inViewEffect:T.bool.isRequired};function ph({currentLocation:t,data:e,refs:n}){return c.jsxs("section",{id:"Func",ref:n,className:G.Func,children:[c.jsx("h3",{className:G.title,children:"기능"}),c.jsx("div",{className:G.imageWrapper,children:c.jsx("img",{src:"http://via.placeholder.com/1320x200",className:G.image,alt:"솔루션 기능"})}),c.jsx("ul",{className:G.list,children:e&&e[t].기능.map(s=>c.jsx("li",{className:G.item,children:s},_t()))})]})}ph.propTypes={currentLocation:T.string.isRequired,data:T.objectOf(T.shape({솔루션:T.string,제품명:T.string,제품설명:T.string,특징:T.arrayOf(T.string),기능:T.arrayOf(T.string),기대효과:T.arrayOf(T.string),산업군:T.arrayOf(T.string)})).isRequired,refs:T.oneOfType([T.func,T.shape({current:T.instanceOf(Element)})]).isRequired};function mh({currentLocation:t,data:e,refs:n}){return c.jsxs("section",{id:"Effect",ref:n,className:G.Effect,children:[c.jsx("h3",{className:G.title,children:"기대효과"}),c.jsx("ul",{className:G.list,children:e&&e[t].기대효과.map(s=>c.jsx("li",{className:G.item,children:s},_t()))})]})}mh.propTypes={currentLocation:T.string.isRequired,data:T.objectOf(T.shape({솔루션:T.string,제품명:T.string,제품설명:T.string,특징:T.arrayOf(T.string),기능:T.arrayOf(T.string),기대효과:T.arrayOf(T.string),산업군:T.arrayOf(T.string)})).isRequired,refs:T.oneOfType([T.func,T.shape({current:T.instanceOf(Element)})]).isRequired};function KE(){const{id:t}=Ws(),[e,n]=A.useState([]),s={array:e.map(d=>d[0]),current:t,prev:Nt[t].솔루션},[r,i]=ys({triggerOnce:!1,threshold:.3}),[o,a]=ys({triggerOnce:!1,threshold:.3}),[l,u]=ys({triggerOnce:!1,threshold:.3});return A.useEffect(()=>{const d=Object.entries(Nt).filter(h=>h[1].솔루션.trim()===Nt[t].솔루션.trim());n(d)},[t]),c.jsxs("section",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[c.jsx("h2",{className:"sr-only",children:"솔루션별 페이지"}),c.jsx(uh,{LnbArray:s.array}),c.jsx(dh,{currentLocation:s.current,prevLocation:s.prev}),c.jsx("div",{className:"flex justify-center",children:c.jsxs("div",{className:"w-full max-w-[1320px] flex desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop",children:[c.jsx(fh,{inViewChar:i,inViewFunc:a,inViewEffect:u}),c.jsxs("div",{className:"flex flex-col",children:[c.jsx(hh,{refs:r,currentLocation:s.current,data:Nt}),c.jsx(ph,{refs:o,currentLocation:s.current,data:Nt}),c.jsx(mh,{refs:l,currentLocation:s.current,data:Nt})]})]})})]})}const QE="_0zOX",XE="Yhjp",YE="SPG5",JE="BVgc",ZE="J2c-",ex="LNUa",tx="JS7h",nx="i3Z0",sx="_9rUT",rx="gFV0",ix="y-3m",ox="R0qT",ax="l84P",lx="Ih9K",Oe={Card:QE,linkTextWrapper:XE,title:YE,subtitle:JE,CardWrapper:ZE,Desc:ex,descContentsWrapper:tx,imgWrapper:nx,textWrapper:sx,description:rx,FuncChar:ix,list:ox,item:ax,itemText:lx};function gh({title:t,subTitle:e,currentLocation:n}){return c.jsxs(en,{to:`/${n}/${e}`,className:Oe.Card,children:[c.jsx("div",{children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 1023px)",srcSet:"http://via.placeholder.com/50x40"}),c.jsx("img",{src:"http://via.placeholder.com/100x80",alt:"Machines"})]})}),c.jsxs("div",{className:Oe.linkTextWrapper,children:[c.jsx("p",{className:Oe.title,children:t}),c.jsx("p",{className:Oe.subtitle,children:e})]})]})}gh.propTypes={title:T.string.isRequired,subTitle:T.string.isRequired,currentLocation:T.string.isRequired};function yh({data:t,currentLocation:e}){return c.jsx("nav",{className:Oe.CardWrapper,children:Object.entries(t).map(([n,s])=>Object.entries(s).map(([r])=>c.jsx(gh,{title:n,subTitle:r,currentLocation:e},_t())))})}yh.propTypes={data:T.objectOf(T.objectOf(T.shape({설명:T.string.isRequired,특징:T.arrayOf(T.string).isRequired}))).isRequired,currentLocation:T.string.isRequired};const cx={"Lift Type":{설명:"AGV Lift Type은 좁은 통로와 다양한 종류의 차량에 맞게 크기가 최적화되었습니다. 레이저 SLAM, 시각적 융합 내비게이션으로 다양한 요구사항 충족하며, 안전성 향상을 위한 다중 장애물 회피 솔루션입니다. 타입은 총 4가지로 600kg, 1000kg, 2000kg, 3000kg 하중을 지원합니다.",특징:["빠른 배터리 교체 지원","높은 대역폭과 낮은 지연 시간으로 Wi-Fi를 지원"]},"Lift Type2":{설명:"P200은 제조 시설에서 복잡한 재료 처리 작업을 처리하도록 설계된 다용도 솔루션입니다. AMR과 최고 모듈 모두에 대해 하루 종일 작동할 수 있도록 상단 모듈과 코봇 통합을 위한 범용 인터페이스와 더 큰 정격 용량의 배터리가 내장되어 있습니다. L300은 민첩하며 통로가 좁은 창고나 제조 시설에 적합한 옵션입니다. 최대 적재량 300kg을 운반하는 AMR에는 최대 높이 60mm에서 상승하고 360도 회전하는 상단 모듈이 장착되어 있습니다. L1000은 적재량이 1000kg에 달하는 가장 강력한 AMR 중 하나입니다. 설비에서 가장 무거운 작업량을 처리하고 제품, 랙 및 팔레트의 이동을 자동화하여 창고 내 물류 효율성 및 처리량을 최적화하는 것을 목표로 설계되었습니다.",특징:["유연한 구축 및 클러스터 구축","상단 모듈 들어 올리기 및 회전","지능형 교통정리","8시간 런타임","LiDAR, QR 코드 캐리어 도킹 카메라"]},"Fork-Lift Type":{설명:"AGV Fork-Lift Type은 1500kg의 정격 하중, 픽업 채널 2.2m입니다. 지능형 자율 팔렛 인식 기능으로 좁은 통로에서 독립적인 팔렛 인식 및 로딩/언로딩이 가능하며, 강화된 안전 보호를 위해 다양한 안전 센서를 통합합니다.",특징:["레이저 SLAM 내비게이션 활용","표준 팔레트를 수용하고 수평 지상 운송을 지원하기 위한 2m의 리프팅 높이"]}},ux={AGV:cx},dx={"MR Device":{"Microsoft HoloLens 2":{설명:"HoloLens 2는 Microsoft가 개발한 2세대 HMD 증강현실 디바이스로, 현존하는 기기 중 최고의 퍼포먼스를 자랑하는 스탠드 얼론 제품입니다. 물리적 공간 및 물체와 홀로그램 이미지를 결합하여 상호작용하며, VR과 AR의 한계를 벗어난 Mixed Reality(혼합현실)을 사용하여 제조, 건축, 교육 등 다양한 분야에서 활용할 수 있습니다.",특징:["몰입감: 시야각을 넓혀 더 많은 홀로그램을 한 번에 쉽고 편안하게 볼 수 있습니다.","인체공학적 설계: 다이얼 인 핏(Dial-in-Fit) 시스템으로 설계되어 장시간 착용 시에도 편안합니다.","직관적 방식: 홀로그램을 자연스럽게 터치하고 움직이면 실제 물체처럼 반응합니다.","편의성: Wi-Fi에 연결된 독립형 디바이스로 움직임에 방해되는 전선이나 외부 부속물 없이 자유롭게 이동할 수 있습니다."]}}};function _h({desc:t,id:e,currentLocation:n}){return c.jsxs("div",{className:Oe.Desc,children:[c.jsxs("h3",{className:`${Oe.title} ${n==="devices"?"text-center":""}`,children:[t.제품,c.jsx("span",{children:" - "}),e]}),c.jsxs("div",{className:Oe.descContentsWrapper,children:[c.jsx("div",{className:Oe.imgWrapper,children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 1023px)",srcSet:"http://via.placeholder.com/200x150"}),c.jsx("img",{src:"http://via.placeholder.com/400x300",alt:"Machines"})]})}),c.jsx("div",{className:Oe.textWrapper,children:t.설명&&c.jsx("p",{className:Oe.description,children:t.설명},_t())})]})]})}_h.propTypes={desc:T.shape({설명:T.string.isRequired,특징:T.arrayOf(T.string).isRequired,제품:T.string.isRequired}).isRequired,id:T.string.isRequired,currentLocation:T.string.isRequired};function vh({desc:t}){return c.jsxs("div",{className:Oe.FuncChar,children:[c.jsx("p",{className:Oe.title,children:"기능 및 특징"}),c.jsx("ul",{className:Oe.list,children:t.특징&&t.특징.map(e=>c.jsxs("li",{className:Oe.item,children:[c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 1023px)",srcSet:"http://via.placeholder.com/60x60"}),c.jsx("img",{src:"http://via.placeholder.com/120x120",alt:"Machines"})]}),c.jsx("span",{className:Oe.itemText,children:e})]},_t()))})]})}vh.propTypes={desc:T.shape({설명:T.string.isRequired,특징:T.arrayOf(T.string).isRequired}).isRequired};function Kc(){const[t,e]=A.useState({}),[n,s]=A.useState({설명:"",특징:[],제품:""}),[r,i]=A.useState(""),o=Hs(),{id:a}=Ws();return A.useEffect(()=>{o.pathname.includes("machines")?(e(ux),i("machines")):o.pathname.includes("devices")&&(e(dx),i("devices"))},[o]),A.useEffect(()=>{t&&Object.values(t).length>0&&s(l=>({...l,...t[Object.keys(t)[0]][a],제품:Object.keys(t)[0]}))},[t,a]),c.jsxs("section",{className:"w-full flex flex-col items-center",children:[c.jsx("section",{className:"desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile flex flex-col items-center w-full",children:c.jsx(yh,{data:t,currentLocation:r})}),c.jsx("section",{className:"w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile",children:c.jsxs("div",{className:"w-full flex flex-col items-center",children:[c.jsx("h2",{className:"sr-only",children:"제품 소개"}),c.jsx(_h,{desc:n,id:a,currentLocation:r})]})}),c.jsx("section",{className:"-bg--open-gray-50 w-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile ",children:c.jsxs("div",{className:"w-full flex flex-col items-center",children:[c.jsx("h2",{className:"sr-only",children:"기능 및 특징"}),c.jsx(vh,{desc:n,id:a})]})})]})}const hx="sH0g",fx="_4dww",px="_--Gq",mx="_0Vow",gx="UuuJ",yx="_1LCW",_x="l6zU",vx="QQMF",Tx="-tud",wx="p2n7",Ex="_1Kis",xx="R-mE",Sx="HFFf",nt={titleWrapper:hx,titleCategory:fx,titleText:px,sectionWrapper:mx,downloadWrapper:gx,downloadText:yx,cardWrapper:_x,cardContainer:vx,cardInner:Tx,cardTitle:wx,cardCategoryText:Ex,cardLinkWrapper:xx,iconStyle:Sx};function Th({category:t,title:e}){return c.jsxs(c.Fragment,{children:[c.jsx("h2",{className:nt.titleCategory,children:t}),c.jsx("h3",{className:nt.titleText,children:e})]})}Th.propTypes={category:T.string.isRequired,title:T.string.isRequired};function Ix(){return c.jsx("div",{className:nt.titleWrapper,children:c.jsx(Th,{category:"Support",title:"라이브러리"})})}function bx(){return c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:nt.iconStyle,children:c.jsx("path",{d:"M12 18.132L5.93486 12.0651L7.14686 10.8326L11.1429 14.8286V0H12.8571V14.8286L16.8514 10.8343L18.0651 12.0651L12 18.132ZM2.76857 24C1.98 24 1.32171 23.736 0.793714 23.208C0.264571 22.6789 0 22.02 0 21.2314V17.0777H1.71429V21.2314C1.71429 21.4943 1.824 21.736 2.04343 21.9566C2.264 22.176 2.50571 22.2857 2.76857 22.2857H21.2314C21.4943 22.2857 21.736 22.176 21.9566 21.9566C22.176 21.736 22.2857 21.4943 22.2857 21.2314V17.0777H24V21.2314C24 22.02 23.736 22.6783 23.208 23.2063C22.6789 23.7354 22.02 24 21.2314 24H2.76857Z",fill:"black"})})}function jr({mainText:t,subText:e,category:n,href:s,download:r,ariaLabel:i}){return c.jsx("div",{className:nt.cardWrapper,children:c.jsxs("div",{className:nt.cardContainer,children:[c.jsxs("div",{className:nt.cardInner,children:[c.jsx("h4",{className:nt.cardTitle,children:c.jsxs("span",{children:[t,c.jsx("br",{}),e]})}),c.jsx("span",{className:nt.cardCategoryText,children:n})]}),c.jsx("a",{href:s,className:nt.cardLinkWrapper,download:r,"aria-label":i,children:c.jsx(bx,{})})]})})}jr.propTypes={mainText:T.string.isRequired,subText:T.string.isRequired,category:T.string.isRequired,href:T.string.isRequired,download:T.string.isRequired,ariaLabel:T.string.isRequired};const Ax="/ReOpenSG/assets/library_companyProfile_ko-WepWOYT4.pdf",Qc="/ReOpenSG/assets/library_compabyBrochure_ko-XbXxPsDC.pdf";function Cx(){return c.jsxs("div",{className:nt.sectionWrapper,children:[c.jsx(jr,{mainText:"OPENSG",subText:"회사 소개서",category:"소개서",href:Ax,download:"OPENSG_회사_소개서_국문",ariaLabel:"오픈에스지 회사 소개서 국문"}),c.jsx(jr,{mainText:"OPENSG",subText:"회사 브로슈어",category:"브로슈어",href:Qc,download:"OPENSG_회사_브로슈어_국문",ariaLabel:"오픈에스지 회사 브로슈어 국문"}),c.jsx(jr,{mainText:"OPENSG",subText:"회사 브로슈어",category:"브로슈어",href:Qc,download:"OPENSG_회사_브로슈어_국문",ariaLabel:"오픈에스지 회사 브로슈어 국문"})]})}function Px(){return c.jsx("div",{className:"w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop",children:c.jsxs("div",{className:"max-w-[1320px] m-auto w-full",children:[c.jsx(Ix,{}),c.jsx(Cx,{})]})})}const Rx="jePh",kx="Z9i4",Nx="N3Lw",Ox="eDte",Dx="DF7R",Mx="Rnii",Lx="LgpQ",Vx="D2zZ",jx="_4eH-",Fx="fLZD",Ux="_0Rlx",Bx="l2Cp",$x="gm8B",qx="hWqQ",zx="Mnm7",Hx="_96pd",Wx="_9BtF",ge={Char:Rx,CharTitle:kx,CharDesc:Nx,Product:Ox,ProductTitle:Dx,ProductWrapper:Mx,ProductLink:Lx,linkWrapper:Vx,image:jx,list:Fx,itemName:Ux,itemSubName:Bx,itemDesc:$x,Snb:qx,nav:zx,item:Hx,link:Wx};function wh({industryDesc:t,refs:e}){return c.jsxs("section",{id:"Char",ref:e,className:ge.Char,children:[c.jsx("h3",{className:ge.CharTitle,children:"산업 특징"}),c.jsx("p",{className:ge.CharDesc,children:t})]})}wh.propTypes={industryDesc:T.string.isRequired,refs:T.oneOfType([T.func,T.shape({current:T.instanceOf(Element)})]).isRequired};function Eh({industryProducts:t,refs:e}){return c.jsxs("section",{id:"Product",ref:e,className:ge.Product,children:[c.jsx("h3",{className:ge.ProductTitle,children:"관련 제품"}),c.jsx("div",{className:ge.ProductWrapper,children:Object.entries(t).map(n=>c.jsx(zs,{to:`/solutions/${n[0]}`,className:ge.ProductLink,children:c.jsxs("div",{className:ge.linkWrapper,children:[c.jsx("div",{className:ge.image,children:c.jsx("img",{src:"http://via.placeholder.com/200x250",alt:"제픔 사진"})}),c.jsxs("dl",{className:ge.list,children:[c.jsx("dt",{className:ge.itemName,children:n[0]}),c.jsx("dt",{className:ge.itemSubName,children:n[1].제품명}),c.jsx("dd",{className:ge.itemDesc,children:n[1].제품설명})]})]})},_t()))})]})}Eh.propTypes={industryProducts:T.oneOfType([T.object]).isRequired,refs:T.oneOfType([T.func,T.shape({current:T.instanceOf(Element)})]).isRequired};function xh({inViewChar:t,inViewProduct:e}){return c.jsx("aside",{className:ge.Snb,children:c.jsx("nav",{className:ge.nav,children:c.jsxs("ul",{className:ge.list,children:[c.jsx("li",{className:t?ge.item:"",children:c.jsx("a",{className:ge.link,href:"#Char",children:"산업 특징"})}),c.jsx("li",{className:!t&&e?ge.item:"",children:c.jsx("a",{className:ge.link,href:"#Product",children:"관련 제품"})})]})})})}xh.propTypes={inViewChar:T.bool.isRequired,inViewProduct:T.bool.isRequired};const ni={semiconductor:{name:"반도체",desc:"기술과 지식이 집약된 첨단 하이테크 산업인 반도체/태양광은 제품의 고사양화에 따라 공정 난이도가 높아지면서 사람의 판단이나 숙련도를 배제한 자동화된 시스템에 의한 제조환경 운영이 보편화되고 있습니다. 복잡한 공정/설비, 데이터양의 폭발적 증가로 자동화 및 시스템에 의한 공정관리가 필수임에 따라 많은 기업에서 제조설비, 측정/검사설비 및 물류설비에 대한 자동화 제어 기술과 빅데이터 기반 AI 기술을 적용한 품질관리 및 설비 엔지니어링 시스템으로 제조 경쟁력 향상을 추진하고 있습니다.",solutions:[]},display:{name:"디스플레이",desc:"디스플레이는 LCD, OLED, QLED, LED, PDP 등 다양한 기술로 제조되며, 특히 OLED는 고가의 제품으로써 제조 공정의 안정성과 품질관리가 매우 중요합니다. 디스플레이 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.",solutions:[]},battery:{name:"배터리",desc:"배터리 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.",solutions:[]},port:{name:"항만",desc:"항만은 물류센터와 함께 물류산업의 중심이 되는 산업입니다. 항만에서는 고객사의 요구에 맞는 자동화 설비를 구축하여 물류센터의 생산성을 향상시키고 있습니다.",solutions:[]}};Object.entries(Nt).forEach(([t,{산업군:e}])=>{e.forEach(n=>{ni[n]&&ni[n].solutions.push(t)})});function Gx(){const{id:t}=Ws(),[e,n]=A.useState(""),[s,r]=A.useState({});A.useEffect(()=>{n(ni[t].desc),ni[t].solutions.map(u=>r(d=>({...d,[u]:Nt[u]})))},[t]);const[i,o]=ys({triggerOnce:!1,threshold:.1}),[a,l]=ys({triggerOnce:!1,threshold:.1});return c.jsxs("section",{className:"desktop:pb-open-5xl tablet:pb-open-5xl pb-open-2xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile",children:[c.jsx("h2",{className:"sr-only",children:"산업군별 페이지"}),c.jsxs("div",{className:"flex desktop:gap-open-4xl tablet:gap-open-4xl",children:[c.jsx(xh,{inViewChar:o,inViewProduct:l}),c.jsxs("div",{className:"flex-1",children:[c.jsx(wh,{refs:i,currentLocation:t,industryDesc:e}),c.jsx(Eh,{refs:a,currentLocation:t,industryProducts:s})]})]})]})}const Cs={_origin:"https://api.emailjs.com"},Kx=(t,e="https://api.emailjs.com")=>{Cs._userID=t,Cs._origin=e},Sh=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Xc{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const Ih=(t,e,n={})=>new Promise((s,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new Xc(o);a.status===200||a.text==="OK"?s(a):r(a)}),i.addEventListener("error",({target:o})=>{r(new Xc(o))}),i.open("POST",Cs._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),Qx=(t,e,n,s)=>{const r=s||Cs._userID;return Sh(r,t,e),Ih("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},Xx=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Yx=(t,e,n,s)=>{const r=s||Cs._userID,i=Xx(n);Sh(r,t,e);const o=new FormData(i);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),Ih("/api/v1.0/email/send-form",o)},Jx={init:Kx,send:Qx,sendForm:Yx},Io={serviceId:"opensg",templateId:"opensg",apiKey:"6NuaSgBDx54b9MicI"},Zx="_04E1",e0="XcIS",t0="kQ87",n0="S-it",s0="fPrs",r0="gTH2",i0="_9gQX",o0="slSk",a0="AQ3n",l0="HCCC",c0="AMX8",u0="OF26",d0="XF0V",h0="u95l",f0="L-E5",p0="dAyt",m0="u5JU",g0="_54W8",fe={formWrapper:Zx,wrapper:e0,titleWrapper:t0,titleCategory:n0,title:s0,titleDesc:r0,label:i0,input:o0,textarea:a0,iconStyle:l0,agreementText:c0,agreementOl:u0,warning:d0,checkboxWrapper:h0,contentWrapper:f0,inquiryLabel:p0,inquiryWrapper:m0,personalInfoWrapper:g0};function si({labelText:t,inputType:e,name:n,placeholderText:s}){const r=_t();return c.jsxs("div",{className:fe.wrapper,children:[c.jsx("label",{htmlFor:r,children:c.jsx("h4",{className:fe.label,children:t})}),c.jsx("input",{type:e,id:r,name:n,placeholder:s,className:fe.input,required:!0})]})}si.propTypes={labelText:T.string.isRequired,inputType:T.string.isRequired,name:T.string.isRequired,placeholderText:T.string.isRequired};function y0(){return c.jsxs("fieldset",{className:fe.personalInfoWrapper,children:[c.jsx(si,{labelText:"받으실 이메일",inputType:"email",name:"email",placeholderText:"abc@abcd.com"}),c.jsx(si,{labelText:"받으실 연락처",inputType:"tel",name:"tel",placeholderText:"010-1234-1234"})]})}function wr(){return c.jsx("svg",{viewBox:"0 0 148 148",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:fe.iconStyle,children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M136.651 32.2364L129.436 30.5344L109.937 49.9224L98.8921 38.6744L117.91 18.7222L116.245 11.3962C112.226 10.0517 108.023 9.3402 103.785 9.28718C99.1628 9.2161 94.5751 10.0977 90.3081 11.8772C86.1882 13.7421 82.4641 16.3797 79.3376 19.6472C75.8573 22.944 73.101 26.9289 71.2439 31.3484C67.6683 40.1441 67.6683 49.9883 71.2439 58.7839C51.9598 77.7556 32.9248 96.9788 14.1436 116.448C12.2011 118.992 11.2761 122.165 11.5166 125.356C11.7062 128.789 13.2498 132.005 15.8086 134.301C16.9556 135.55 18.3246 136.586 19.8509 137.335C21.4234 138.029 23.1161 138.426 24.8274 138.51C27.7504 138.454 30.5531 137.344 32.7269 135.392C47.0459 121.915 74.4814 94.2299 90.0676 78.0054C94.2949 79.7999 98.8366 80.7249 103.425 80.7157C108.043 80.712 112.614 79.7827 116.867 77.9827C121.12 76.1826 124.969 73.5483 128.187 70.2354C134.796 63.4946 138.488 54.4235 138.464 44.9829C138.571 40.6629 137.958 36.3553 136.651 32.2364ZM27.1306 128.834C26.7746 129.15 26.3454 129.373 25.8819 129.482C25.4258 129.561 24.9597 129.561 24.5036 129.482C24.0255 129.409 23.5701 129.229 23.1716 128.954C22.7441 128.704 22.3825 128.355 22.1171 127.937C20.8221 126.614 19.6104 124.098 20.8221 122.683C33.4946 109.206 59.5889 82.8617 75.9059 66.7574C76.8309 67.9784 77.8484 69.1439 78.9399 70.2354C80.0314 71.3732 81.2061 72.4277 82.4549 73.3897C66.6744 89.5772 40.9316 115.607 27.1306 128.834ZM129.972 44.9829C129.991 52.0592 127.234 58.8579 122.276 63.9269C117.329 68.7803 110.674 71.4992 103.744 71.4992C96.8131 71.4992 90.159 68.7803 85.2114 63.9269C81.5852 60.1427 79.1082 55.4067 78.0683 50.2697C77.0285 45.1328 77.4687 39.8062 79.3376 34.9097C80.5817 31.5772 82.5113 28.543 85.0018 26.0031C87.4922 23.4633 90.488 21.4744 93.7954 20.1652C96.9357 18.8508 100.307 18.1778 103.711 18.1857H106.061L89.2536 35.5109V41.9489L106.782 59.3944H112.887L129.972 42.5964V44.9829ZM29.9704 61.8642H44.1321L50.6534 68.4964L56.9249 62.2619L50.7736 55.9904V55.5927L51.3009 40.3394L49.2659 36.2972L22.8109 18.8887L17.3441 19.4992L9.65738 27.3524L9.04688 32.8932L26.0484 59.8847L29.9704 61.8642ZM21.2291 28.2682L42.6336 42.3652L42.2729 52.7529H32.3199L18.5189 30.9044L21.2291 28.2682ZM86.9504 92.6482L93.1849 86.4229L121.915 115.884C124.335 118.428 125.685 121.804 125.685 125.315C125.685 128.825 124.335 132.202 121.915 134.745C120.096 136.613 117.756 137.89 115.2 138.41C112.645 138.929 109.992 138.668 107.587 137.659C106.052 136.978 104.676 135.986 103.545 134.745L74.4814 105.117L80.7621 98.8457L109.733 128.39C110.123 128.82 110.607 129.152 111.148 129.361C112.213 129.794 113.404 129.794 114.469 129.361C115.01 129.152 115.495 128.82 115.884 128.39C116.289 127.989 116.605 127.507 116.809 126.975C117.022 126.432 117.134 125.856 117.142 125.273C117.133 124.691 117.024 124.115 116.819 123.571C116.614 123.039 116.298 122.557 115.894 122.156L86.9504 92.6482Z",className:"fill-current"})})}function bh({type:t,id:e,name:n,defaultValue:s,labelText:r}){return c.jsxs("div",{className:"w-[160px]",children:[c.jsx("input",{type:t,id:e,name:n,defaultValue:s,className:"hidden peer"}),c.jsxs("label",{htmlFor:e,className:`peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900 ${fe.inquiryLabel}`,children:[r==="제품 문의"?c.jsx(wr,{}):r==="구매 문의"?c.jsx(wr,{}):r==="AS 문의"?c.jsx(wr,{}):c.jsx(wr,{}),c.jsx("span",{children:r})]})]})}bh.propTypes={type:T.string.isRequired,id:T.string.isRequired,name:T.string.isRequired,defaultValue:T.string.isRequired,labelText:T.string.isRequired};const _0=[{id:"productId",defaultValue:"제품 문의"},{id:"purchaseId",defaultValue:"구매 문의"},{id:"asId",defaultValue:"AS 문의"},{id:"etcId",defaultValue:"기타 문의"}];function v0(){return c.jsxs("fieldset",{className:fe.inquiryWrapper,children:[c.jsx("h4",{className:fe.label,children:"문의유형"}),c.jsx("div",{children:_0.map(({id:t,defaultValue:e})=>c.jsx(bh,{type:"radio",id:t,name:"type",defaultValue:e,onClick:()=>null,labelText:e},t))})]})}function T0(){const t=_t();return c.jsxs("fieldset",{className:fe.contentWrapper,children:[c.jsx(si,{labelText:"제목",inputType:"text",name:"title",placeholderText:"AGV 구매 문의"}),c.jsxs("div",{className:fe.wrapper,children:[c.jsx("label",{htmlFor:t,children:c.jsx("h4",{className:fe.label,children:"내용"})}),c.jsx("textarea",{name:"message",id:t,cols:"30",rows:"10",placeholder:"AGV 2대 견적 문의드립니다.",className:fe.textarea,required:!0})]})]})}function Ah({state:t,setState:e}){const n=()=>{e(!t)};return c.jsxs("fieldset",{className:fe.agreementText,children:[c.jsx("h4",{children:"개인정보 활용동의"}),c.jsx("p",{children:"OPENSG는 개인정보보호법 및 관련 법령에 의거 고객님들의 의견 접수와 관련한 성실한 답변을 드리기 위해 필요한 최소한의 개인정보를 아래와 같이 수집, 이용하고자 합니다."}),c.jsxs("ol",{className:fe.agreementOl,children:[c.jsx("li",{children:"필수정보의 수집 목적 : 온라인 상담실을 통한 정보주체의 의견접수 및 문의에 대한 답변/안내"}),c.jsx("li",{children:"필수 수집 항목 : 이름, 이메일 주소"}),c.jsx("li",{children:"보유 및 이용기간 : 상담 신청 후 1년"}),c.jsx("li",{className:fe.warning,children:"※ 고객님께서는 본 동의를 거부하실 수 있으나 거부 시 필수정보의 수집 목적에 해당하는 사항의 처리가 제한될 수 있습니다."})]}),c.jsxs("div",{className:fe.checkboxWrapper,children:[c.jsx("input",{type:"checkbox",id:"agreement",required:!0,checked:t,onChange:n,className:"peer"}),c.jsx("label",{htmlFor:"agreement",className:"pl-open-lg",children:"(필수) 위 개인정보 수집 및 이용에 동의합니다."})]})]})}Ah.propTypes={state:T.bool.isRequired,setState:T.func.isRequired};function Ch({category:t,title:e,desc:n}){return c.jsxs(c.Fragment,{children:[c.jsx("h2",{className:fe.titleCategory,children:t}),c.jsx("h3",{className:fe.title,children:e}),c.jsx("p",{className:fe.titleDesc,children:n})]})}Ch.propTypes={category:T.string.isRequired,title:T.string.isRequired,desc:T.string.isRequired};function w0(){return c.jsx("div",{className:fe.titleWrapper,children:c.jsx(Ch,{category:"Support",title:"고객문의",desc:"상세하게 작성해 주시면 더 빠르게 답변드릴 수 있습니다."})})}function Ph({type:t,buttonText:e,buttonStyle:n,onClick:s}){return c.jsx("button",{type:t,className:n,onClick:s,children:e})}Ph.propTypes={type:T.oneOf(["submit","button","reset"]).isRequired,buttonText:T.string.isRequired,buttonStyle:T.string.isRequired,onClick:T.func.isRequired};function E0(){const t=A.useRef(null),[e,n]=A.useState(!1),s=i=>{i.preventDefault(),Jx.sendForm(Io.serviceId,Io.templateId,t.current,Io.apiKey).then(()=>{X.success("전송되었습니다."),setTimeout(()=>{window.location.reload()},4e3)},()=>{X.error("전송에 실패하였습니다.")})},r=()=>{e||X.error("개인정보 활용동의에 체크해 주세요.")};return c.jsx("div",{className:"w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop",children:c.jsxs("form",{ref:t,onSubmit:s,className:fe.formWrapper,children:[c.jsx(w0,{}),c.jsx(v0,{}),c.jsx(y0,{}),c.jsx(T0,{}),c.jsx(Ah,{state:e,setState:n}),c.jsx(Ph,{buttonText:"문의하기",buttonStyle:"-text--openfoundation-secondary font-open-label text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl p-open-lg rounded-[20px] -bg--open-blue-900 w-[180px] block mx-auto mb-open-5xl",type:`${e?"submit":"button"}`,onClick:r})]})})}var x0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Xa=Xa||{},H=x0||self;function bi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function S0(t){return Object.prototype.hasOwnProperty.call(t,bo)&&t[bo]||(t[bo]=++I0)}var bo="closure_uid_"+(1e9*Math.random()>>>0),I0=0;function b0(t,e,n){return t.call.apply(t.bind,arguments)}function A0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=b0:Me=A0,Me.apply(null,arguments)}function Er(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ee(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Qt(){this.s=this.s,this.o=this.o}var C0=0;Qt.prototype.s=!1;Qt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),C0!=0)&&S0(this)};Qt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ya(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yc(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(bi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var P0=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};H.addEventListener("test",n,e),H.removeEventListener("test",n,e)}catch{}return t}();function Ps(t){return/^[\s\xa0]*$/.test(t)}function Ai(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function ot(t){return Ai().indexOf(t)!=-1}function Ja(t){return Ja[" "](t),t}Ja[" "]=function(){};function R0(t,e){var n=ES;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var k0=ot("Opera"),jn=ot("Trident")||ot("MSIE"),kh=ot("Edge"),sa=kh||jn,Nh=ot("Gecko")&&!(Ai().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),N0=Ai().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function Oh(){var t=H.document;return t?t.documentMode:void 0}var ra;e:{var Ao="",Co=function(){var t=Ai();if(Nh)return/rv:([^\);]+)(\)|;)/.exec(t);if(kh)return/Edge\/([\d\.]+)/.exec(t);if(jn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(N0)return/WebKit\/(\S+)/.exec(t);if(k0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Co&&(Ao=Co?Co[1]:""),jn){var Po=Oh();if(Po!=null&&Po>parseFloat(Ao)){ra=String(Po);break e}}ra=Ao}var ia;if(H.document&&jn){var Jc=Oh();ia=Jc||parseInt(ra,10)||void 0}else ia=void 0;var O0=ia;function Rs(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nh){e:{try{Ja(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:D0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rs.$.h.call(this)}}Ee(Rs,Le);var D0={2:"touch",3:"pen",4:"mouse"};Rs.prototype.h=function(){Rs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var er="closure_listenable_"+(1e6*Math.random()|0),M0=0;function L0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++M0,this.fa=this.ia=!1}function Ci(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Za(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function V0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Dh(t){const e={};for(const n in t)e[n]=t[n];return e}const Zc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Zc.length;i++)n=Zc[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Pi(t){this.src=t,this.g={},this.h=0}Pi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=aa(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new L0(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function oa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Rh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ci(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function aa(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var el="closure_lm_"+(1e6*Math.random()|0),Ro={};function Lh(t,e,n,s,r){if(s&&s.once)return jh(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lh(t,e[i],n,s,r);return null}return n=sl(n),t&&t[er]?t.O(e,n,Zs(s)?!!s.capture:!!s,r):Vh(t,e,n,!1,s,r)}function Vh(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Zs(r)?!!r.capture:!!r,a=nl(t);if(a||(t[el]=a=new Pi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=j0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)P0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Uh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function j0(){function t(n){return e.call(t.src,t.listener,n)}const e=F0;return t}function jh(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)jh(t,e[i],n,s,r);return null}return n=sl(n),t&&t[er]?t.P(e,n,Zs(s)?!!s.capture:!!s,r):Vh(t,e,n,!0,s,r)}function Fh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Fh(t,e[i],n,s,r);else s=Zs(s)?!!s.capture:!!s,n=sl(n),t&&t[er]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=aa(i,n,s,r),-1<n&&(Ci(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=nl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=aa(e,n,s,r)),(n=-1<t?e[t]:null)&&tl(n))}function tl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[er])oa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Uh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=nl(e))?(oa(n,t),n.h==0&&(n.src=null,e[el]=null)):Ci(t)}}}function Uh(t){return t in Ro?Ro[t]:Ro[t]="on"+t}function F0(t,e){if(t.fa)t=!0;else{e=new Rs(e,this);var n=t.listener,s=t.la||t.src;t.ia&&tl(t),t=n.call(s,e)}return t}function nl(t){return t=t[el],t instanceof Pi?t:null}var ko="__closure_events_fn_"+(1e9*Math.random()>>>0);function sl(t){return typeof t=="function"?t:(t[ko]||(t[ko]=function(e){return t.handleEvent(e)}),t[ko])}function we(){Qt.call(this),this.i=new Pi(this),this.S=this,this.J=null}Ee(we,Qt);we.prototype[er]=!0;we.prototype.removeEventListener=function(t,e,n,s){Fh(this,t,e,n,s)};function Ce(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var r=e;e=new Le(s,t),Mh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=xr(o,s,!0,e)&&r}if(o=e.g=t,r=xr(o,s,!0,e)&&r,r=xr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=xr(o,s,!1,e)&&r}we.prototype.N=function(){if(we.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ci(n[s]);delete t.g[e],t.h--}}this.J=null};we.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};we.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function xr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&oa(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var rl=H.JSON.stringify;class U0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function B0(){var t=il;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $0{constructor(){this.h=this.g=null}add(e,n){const s=Bh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Bh=new U0(()=>new q0,t=>t.reset());class q0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function z0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function H0(t){H.setTimeout(()=>{throw t},0)}let ks,Ns=!1,il=new $0,$h=()=>{const t=H.Promise.resolve(void 0);ks=()=>{t.then(W0)}};var W0=()=>{for(var t;t=B0();){try{t.h.call(t.g)}catch(n){H0(n)}var e=Bh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ns=!1};function Ri(t,e){we.call(this),this.h=t||1,this.g=e||H,this.j=Me(this.qb,this),this.l=Date.now()}Ee(Ri,we);D=Ri.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ce(this,"tick"),this.ga&&(ol(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ol(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Ri.$.N.call(this),ol(this),delete this.g};function al(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function qh(t){t.g=al(()=>{t.g=null,t.i&&(t.i=!1,qh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class G0 extends Qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qh(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(t){Qt.call(this),this.h=t,this.g={}}Ee(Os,Qt);var eu=[];function zh(t,e,n,s){Array.isArray(n)||(n&&(eu[0]=n.toString()),n=eu);for(var r=0;r<n.length;r++){var i=Lh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Hh(t){Za(t.g,function(e,n){this.g.hasOwnProperty(n)&&tl(e)},t),t.g={}}Os.prototype.N=function(){Os.$.N.call(this),Hh(this)};Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ki(){this.g=!0}ki.prototype.Ea=function(){this.g=!1};function K0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var h=d.split("_");o=2<=h.length&&h[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Q0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function An(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Y0(t,n)+(s?" "+s:"")})}function X0(t,e){t.info(function(){return"TIMEOUT: "+e})}ki.prototype.info=function(){};function Y0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return rl(n)}catch{return e}}var vn={},tu=null;function Ni(){return tu=tu||new we}vn.Ta="serverreachability";function Wh(t){Le.call(this,vn.Ta,t)}Ee(Wh,Le);function Ds(t){const e=Ni();Ce(e,new Wh(e))}vn.STAT_EVENT="statevent";function Gh(t,e){Le.call(this,vn.STAT_EVENT,t),this.stat=e}Ee(Gh,Le);function Be(t){const e=Ni();Ce(e,new Gh(e,t))}vn.Ua="timingevent";function Kh(t,e){Le.call(this,vn.Ua,t),this.size=e}Ee(Kh,Le);function tr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var Oi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ll(){}ll.prototype.h=null;function nu(t){return t.h||(t.h=t.i())}function Xh(){}var nr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cl(){Le.call(this,"d")}Ee(cl,Le);function ul(){Le.call(this,"c")}Ee(ul,Le);var la;function Di(){}Ee(Di,ll);Di.prototype.g=function(){return new XMLHttpRequest};Di.prototype.i=function(){return{}};la=new Di;function sr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Os(this),this.P=J0,t=sa?125:void 0,this.V=new Ri(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yh}function Yh(){this.i=null,this.g="",this.h=!1}var J0=45e3,Jh={},ca={};D=sr.prototype;D.setTimeout=function(t){this.P=t};function ua(t,e,n){t.L=1,t.A=Li(At(e)),t.u=n,t.S=!0,Zh(t,null)}function Zh(t,e){t.G=Date.now(),rr(t),t.B=At(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),lf(n.i,"t",s),t.o=0,n=t.l.J,t.h=new Yh,t.g=Pf(t.l,n?e:null,!t.u),0<t.O&&(t.M=new G0(Me(t.Pa,t,t.g),t.O)),zh(t.U,t.g,"readystatechange",t.nb),e=t.I?Dh(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ds(),K0(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&at(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const d=at(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>d)&&(d!=3||sa||this.g&&(this.h.h||this.g.ja()||ou(this.g)))){this.J||d!=4||e==7||(e==8||0>=h?Ds(3):Ds(2)),Mi(this);var n=this.g.da();this.ca=n;t:if(ef(this)){var s=ou(this.g);t="";var r=s.length,i=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),_s(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Q0(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ps(a)){var u=a;break t}}u=null}if(n=u)An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,n);else{this.i=!1,this.s=3,Be(12),tn(this),_s(this);break e}}this.S?(tf(this,d,o),sa&&this.i&&d==3&&(zh(this.U,this.V,"tick",this.mb),this.V.start())):(An(this.j,this.m,o,null),da(this,o)),d==4&&tn(this),this.i&&!this.J&&(d==4?If(this.l,this):(this.i=!1,rr(this)))}else vS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),tn(this),_s(this)}}}catch{}finally{}};function ef(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function tf(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=Z0(t,n),r==ca){e==4&&(t.s=4,Be(14),s=!1),An(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Jh){t.s=4,Be(15),An(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else An(t.j,t.m,r,null),da(t,r);ef(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Be(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),gl(e),e.M=!0,Be(11))):(An(t.j,t.m,n,"[Invalid Chunked Response]"),tn(t),_s(t))}D.mb=function(){if(this.g){var t=at(this.g),e=this.g.ja();this.o<e.length&&(Mi(this),tf(this,t,e),this.i&&t!=4&&rr(this))}};function Z0(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?ca:(n=Number(e.substring(n,s)),isNaN(n)?Jh:(s+=1,s+n>e.length?ca:(e=e.slice(s,s+n),t.o=s+n,e)))}D.cancel=function(){this.J=!0,tn(this)};function rr(t){t.Y=Date.now()+t.P,nf(t,t.P)}function nf(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=tr(Me(t.lb,t),e)}function Mi(t){t.C&&(H.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(X0(this.j,this.B),this.L!=2&&(Ds(),Be(17)),tn(this),this.s=2,_s(this)):nf(this,this.Y-t)};function _s(t){t.l.H==0||t.J||If(t.l,t)}function tn(t){Mi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ol(t.V),Hh(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function da(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ha(n.i,t))){if(!t.K&&ha(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oi(n),Ui(n);else break e;ml(n),Be(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=tr(Me(n.ib,n),6e3));if(1>=df(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else nn(n,11)}else if((t.K||n.g==t)&&oi(n),!Ps(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(dl(i,i.h),i.h=null))}if(s.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.Da=_,oe(s.I,s.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Cf(s,s.J?s.pa:null,s.Y),o.K){hf(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Mi(a),rr(a)),s.g=o}else xf(s);0<n.j.length&&Bi(n)}else u[0]!="stop"&&u[0]!="close"||nn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nn(n,7):pl(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ds(4)}catch{}}function eS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function tS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function sf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tS(t),s=eS(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function on(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof on){this.h=t.h,ri(this,t.j),this.s=t.s,this.g=t.g,ii(this,t.m),this.l=t.l;var e=t.i,n=new Ms;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),su(this,n),this.o=t.o}else t&&(e=String(t).match(rf))?(this.h=!1,ri(this,e[1]||"",!0),this.s=ls(e[2]||""),this.g=ls(e[3]||"",!0),ii(this,e[4]),this.l=ls(e[5]||"",!0),su(this,e[6]||"",!0),this.o=ls(e[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}on.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cs(e,ru,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cs(e,ru,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(cs(n,n.charAt(0)=="/"?iS:rS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cs(n,aS)),t.join("")};function At(t){return new on(t)}function ri(t,e,n){t.j=n?ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ii(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function su(t,e,n){e instanceof Ms?(t.i=e,lS(t.i,t.h)):(n||(e=cs(e,oS)),t.i=new Ms(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Li(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ru=/[#\/\?@]/g,rS=/[#\?:]/g,iS=/[#\?]/g,oS=/[#\?@]/g,aS=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xt(t){t.g||(t.g=new Map,t.h=0,t.i&&nS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ms.prototype;D.add=function(t,e){Xt(this),this.i=null,t=Qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function of(t,e){Xt(t),e=Qn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function af(t,e){return Xt(t),e=Qn(t,e),t.g.has(e)}D.forEach=function(t,e){Xt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};D.ta=function(){Xt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};D.Z=function(t){Xt(this);let e=[];if(typeof t=="string")af(this,t)&&(e=e.concat(this.g.get(Qn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Xt(this),this.i=null,t=Qn(this,t),af(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function lf(t,e,n){of(t,e),0<n.length&&(t.i=null,t.g.set(Qn(t,e),Ya(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lS(t,e){e&&!t.j&&(Xt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(of(this,s),lf(this,r,n))},t)),t.j=e}var cS=class{constructor(t,e){this.g=t,this.map=e}};function cf(t){this.l=t||uS,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uS=10;function uf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function df(t){return t.h?1:t.g?t.g.size:0}function ha(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dl(t,e){t.g?t.g.add(e):t.h=e}function hf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cf.prototype.cancel=function(){if(this.i=ff(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ff(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ya(t.i)}var dS=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function hS(){this.g=new dS}function fS(t,e,n){const s=n||"";try{sf(t,function(r,i){let o=r;Zs(r)&&(o=rl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function pS(t,e){const n=new ki;if(H.Image){const s=new Image;s.onload=Er(Sr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Er(Sr,n,s,"TestLoadImage: error",!1,e),s.onabort=Er(Sr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Er(Sr,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Sr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Vi(t){this.l=t.ec||null,this.j=t.ob||!1}Ee(Vi,ll);Vi.prototype.g=function(){return new ji(this.l,this.j)};Vi.prototype.i=function(t){return function(){return t}}({});function ji(t,e){we.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(ji,we);var hl=0;D=ji.prototype;D.open=function(t,e){if(this.readyState!=hl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=hl};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ir(this):Ls(this),this.readyState==3&&pf(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,ir(this))};D.Ya=function(t){this.g&&(this.response=t,ir(this))};D.ka=function(){this.g&&ir(this)};function ir(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mS=H.JSON.parse;function ue(t){we.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mf,this.L=this.M=!1}Ee(ue,we);var mf="",gS=/^https?$/i,yS=["POST","PUT"];D=ue.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():la.g(),this.C=this.u?nu(this.u):nu(la),this.g.onreadystatechange=Me(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){iu(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=H.FormData&&t instanceof H.FormData,!(0<=Rh(yS,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_f(this),0<this.B&&((this.L=_S(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.ua,this)):this.A=al(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){iu(this,i)}};function _S(t){return jn&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Xa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))};function iu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gf(t),Fi(t)}function gf(t){t.F||(t.F=!0,Ce(t,"complete"),Ce(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),Fi(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fi(this,!0)),ue.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?yf(this):this.kb())};D.kb=function(){yf(this)};function yf(t){if(t.h&&typeof Xa<"u"&&(!t.C[1]||at(t)!=4||t.da()!=2)){if(t.v&&at(t)==4)al(t.La,0,t);else if(Ce(t,"readystatechange"),at(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(rf)[1]||null;!r&&H.self&&H.self.location&&(r=H.self.location.protocol.slice(0,-1)),s=!gS.test(r?r.toLowerCase():"")}n=s}if(n)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var i=2<at(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",gf(t)}}finally{Fi(t)}}}}function Fi(t,e){if(t.g){_f(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ce(t,"ready");try{n.onreadystatechange=s}catch{}}}function _f(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function at(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mS(e)}};function ou(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function vS(t){const e={};t=(t.g&&2<=at(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ps(t[s]))continue;var n=z0(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}V0(e,function(s){return s.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vf(t){let e="";return Za(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=vf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tf(t){this.Ga=0,this.j=[],this.l=new ki,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ts("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ts("baseRetryDelayMs",5e3,t),this.hb=ts("retryDelaySeedMs",1e4,t),this.eb=ts("forwardChannelMaxRetries",2,t),this.xa=ts("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cf(t&&t.concurrentRequestLimit),this.Ja=new hS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=Tf.prototype;D.ra=8;D.H=1;function pl(t){if(wf(t),t.H==3){var e=t.W++,n=At(t.I);if(oe(n,"SID",t.K),oe(n,"RID",e),oe(n,"TYPE","terminate"),or(t,n),e=new sr(t,t.l,e),e.L=2,e.A=Li(At(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.A,n=!0),n||(e.g=Pf(e.l,null),e.g.ha(e.A)),e.G=Date.now(),rr(e)}Af(t)}function Ui(t){t.g&&(gl(t),t.g.cancel(),t.g=null)}function wf(t){Ui(t),t.u&&(H.clearTimeout(t.u),t.u=null),oi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Bi(t){if(!uf(t.i)&&!t.m){t.m=!0;var e=t.Na;ks||$h(),Ns||(ks(),Ns=!0),il.add(e,t),t.C=0}}function TS(t,e){return df(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=tr(Me(t.Na,t,e),bf(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new sr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Dh(i),Mh(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ef(this,r,e),n=At(this.I),oe(n,"RID",t),oe(n,"CVER",22),this.F&&oe(n,"X-HTTP-Session-Id",this.F),or(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(vf(i)))+"&"+e:this.o&&fl(n,this.o,i)),dl(this.i,r),this.bb&&oe(n,"TYPE","init"),this.P?(oe(n,"$req",e),oe(n,"SID","null"),r.aa=!0,ua(r,n,null)):ua(r,n,e),this.H=2}}else this.H==3&&(t?au(this,t):this.j.length==0||uf(this.i)||au(this))};function au(t,e){var n;e?n=e.m:n=t.W++;const s=At(t.I);oe(s,"SID",t.K),oe(s,"RID",n),oe(s,"AID",t.V),or(t,s),t.o&&t.s&&fl(s,t.o,t.s),n=new sr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ef(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dl(t.i,n),ua(n,s,e)}function or(t,e){t.na&&Za(t.na,function(n,s){oe(e,s,n)}),t.h&&sf({},function(n,s){oe(e,s,n)})}function Ef(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Me(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=r[l].g;const d=r[l].map;if(u-=i,0>u)i=Math.max(0,r[l].g-100),a=!1;else try{fS(d,o,"req"+u+"_")}catch{s&&s(d)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function xf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ks||$h(),Ns||(ks(),Ns=!0),il.add(e,t),t.A=0}}function ml(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=tr(Me(t.Ma,t),bf(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Sf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=tr(Me(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Be(10),Ui(this),Sf(this))};function gl(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Sf(t){t.g=new sr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=At(t.wa);oe(e,"RID","rpc"),oe(e,"SID",t.K),oe(e,"AID",t.V),oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&oe(e,"TO",t.qa),oe(e,"TYPE","xmlhttp"),or(t,e),t.o&&t.s&&fl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Li(At(e)),n.u=null,n.S=!0,Zh(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Ui(this),ml(this),Be(19))};function oi(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function If(t,e){var n=null;if(t.g==e){oi(t),gl(t),t.g=null;var s=2}else if(ha(t.i,e))n=e.F,hf(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=Ni(),Ce(s,new Kh(s,n)),Bi(t)}else xf(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&TS(t,e)||s==2&&ml(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:nn(t,5);break;case 4:nn(t,10);break;case 3:nn(t,6);break;default:nn(t,2)}}}function bf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function nn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Me(t.pb,t);n||(n=new on("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||ri(n,"https"),Li(n)),pS(n.toString(),s)}else Be(2);t.H=0,t.h&&t.h.za(e),Af(t),wf(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Be(2)):(this.l.info("Failed to ping google.com"),Be(1))};function Af(t){if(t.H=0,t.ma=[],t.h){const e=ff(t.i);(e.length!=0||t.j.length!=0)&&(Yc(t.ma,e),Yc(t.ma,t.j),t.i.i.length=0,Ya(t.j),t.j.length=0),t.h.ya()}}function Cf(t,e,n){var s=n instanceof on?At(n):new on(n);if(s.g!="")e&&(s.g=e+"."+s.g),ii(s,s.m);else{var r=H.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new on(null);s&&ri(i,s),e&&(i.g=e),r&&ii(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&oe(s,n,e),oe(s,"VER",t.ra),or(t,s),s}function Pf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ue(new Vi({ob:n})):new ue(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Rf(){}D=Rf.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function ai(){if(jn&&!(10<=Number(O0)))throw Error("Environmental error: no available transport.")}ai.prototype.g=function(t,e){return new Ye(t,e)};function Ye(t,e){we.call(this),this.g=new Tf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ps(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ps(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xn(this)}Ee(Ye,we);Ye.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Be(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Cf(t,null,t.Y),Bi(t)};Ye.prototype.close=function(){pl(this.g)};Ye.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rl(t),t=n);e.j.push(new cS(e.fb++,t)),e.H==3&&Bi(e)};Ye.prototype.N=function(){this.g.h=null,delete this.j,pl(this.g),delete this.g,Ye.$.N.call(this)};function kf(t){cl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ee(kf,cl);function Nf(){ul.call(this),this.status=1}Ee(Nf,ul);function Xn(t){this.g=t}Ee(Xn,Rf);Xn.prototype.Ba=function(){Ce(this.g,"a")};Xn.prototype.Aa=function(t){Ce(this.g,new kf(t))};Xn.prototype.za=function(t){Ce(this.g,new Nf)};Xn.prototype.ya=function(){Ce(this.g,"b")};function wS(){this.blockSize=-1}function it(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ee(it,wS);it.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function No(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}it.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)No(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){No(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){No(this,s),r=0;break}}this.h=r,this.i+=e};it.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function se(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var ES={};function yl(t){return-128<=t&&128>t?R0(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function lt(t){if(isNaN(t)||!isFinite(t))return Nn;if(0>t)return be(lt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=fa;return new se(e,0)}function Of(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return be(Of(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lt(Math.pow(e,8)),s=Nn,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=lt(Math.pow(e,i)),s=s.R(i).add(lt(o))):(s=s.R(n),s=s.add(lt(o)))}return s}var fa=4294967296,Nn=yl(0),pa=yl(1),lu=yl(16777216);D=se.prototype;D.ea=function(){if(tt(this))return-be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:fa+s)*e,e*=fa}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(St(this))return"0";if(tt(this))return"-"+be(this).toString(t);for(var e=lt(Math.pow(t,6)),n=this,s="";;){var r=ci(n,e).g;n=li(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,St(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function St(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tt(t){return t.h==-1}D.X=function(t){return t=li(this,t),tt(t)?-1:St(t)?0:1};function be(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new se(n,~t.h).add(pa)}D.abs=function(){return tt(this)?be(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new se(n,n[n.length-1]&-2147483648?-1:0)};function li(t,e){return t.add(be(e))}D.R=function(t){if(St(this)||St(t))return Nn;if(tt(this))return tt(t)?be(this).R(be(t)):be(be(this).R(t));if(tt(t))return be(this.R(be(t)));if(0>this.X(lu)&&0>t.X(lu))return lt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,Ir(n,2*s+2*r),n[2*s+2*r+1]+=i*l,Ir(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Ir(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Ir(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new se(n,0)};function Ir(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ns(t,e){this.g=t,this.h=e}function ci(t,e){if(St(e))throw Error("division by zero");if(St(t))return new ns(Nn,Nn);if(tt(t))return e=ci(be(t),e),new ns(be(e.g),be(e.h));if(tt(e))return e=ci(t,be(e)),new ns(be(e.g),e.h);if(30<t.g.length){if(tt(t)||tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pa,s=e;0>=s.X(t);)n=cu(n),s=cu(s);var r=En(n,1),i=En(s,1);for(s=En(s,2),n=En(n,2);!St(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=En(s,1),n=En(n,1)}return e=li(t,r.R(e)),new ns(r,e)}for(r=Nn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=lt(n),o=i.R(e);tt(o)||0<o.X(t);)n-=s,i=lt(n),o=i.R(e);St(i)&&(i=pa),r=r.add(i),t=li(t,o)}return new ns(r,t)}D.gb=function(t){return ci(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new se(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new se(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new se(n,this.h^t.h)};function cu(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new se(n,t.h)}function En(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new se(r,t.h)}ai.prototype.createWebChannel=ai.prototype.g;Ye.prototype.send=Ye.prototype.u;Ye.prototype.open=Ye.prototype.m;Ye.prototype.close=Ye.prototype.close;Oi.NO_ERROR=0;Oi.TIMEOUT=8;Oi.HTTP_ERROR=6;Qh.COMPLETE="complete";Xh.EventType=nr;nr.OPEN="a";nr.CLOSE="b";nr.ERROR="c";nr.MESSAGE="d";we.prototype.listen=we.prototype.O;ue.prototype.listenOnce=ue.prototype.P;ue.prototype.getLastError=ue.prototype.Sa;ue.prototype.getLastErrorCode=ue.prototype.Ia;ue.prototype.getStatus=ue.prototype.da;ue.prototype.getResponseJson=ue.prototype.Wa;ue.prototype.getResponseText=ue.prototype.ja;ue.prototype.send=ue.prototype.ha;ue.prototype.setWithCredentials=ue.prototype.Oa;it.prototype.digest=it.prototype.l;it.prototype.reset=it.prototype.reset;it.prototype.update=it.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=lt;se.fromString=Of;var xS=function(){return new ai},SS=function(){return Ni()},Oo=Oi,IS=Qh,bS=vn,uu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},br=Xh,AS=ue,CS=it,On=se;const du="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Yn="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const fn=new Da("@firebase/firestore");function ss(){return fn.logLevel}function V(t,...e){if(fn.logLevel<=Z.DEBUG){const n=e.map(_l);fn.debug(`Firestore (${Yn}): ${t}`,...n)}}function Ct(t,...e){if(fn.logLevel<=Z.ERROR){const n=e.map(_l);fn.error(`Firestore (${Yn}): ${t}`,...n)}}function Fn(t,...e){if(fn.logLevel<=Z.WARN){const n=e.map(_l);fn.warn(`Firestore (${Yn}): ${t}`,...n)}}function _l(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+t;throw Ct(e),new Error(e)}function re(t,e){t||$()}function K(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class It{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Df{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class RS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kS{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new It;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new It,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new It)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new Df(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Ne(e)}}class NS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new NS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new DS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function LS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=LS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ne(t,e){return t<e?-1:t>e?1:0}function Un(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new ve(0,0))}static max(){return new W(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vs{constructor(e,n,s){n===void 0?n=0:n>e.length&&$(),s===void 0?s=e.length-n:s>e.length-n&&$(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Vs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends Vs{construct(e,n,s){return new ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const VS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Vs{construct(e,n,s){return new Ae(e,n,s)}static isValidIdentifier(e){return VS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ae.fromString(e))}static fromName(e){return new U(ae.fromString(e).popFirst(5))}static empty(){return new U(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ae(e.slice()))}}function jS(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new Ht(r,U.empty(),e)}function FS(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ht(W.min(),U.empty(),-1)}static max(){return new Ht(W.max(),U.empty(),-1)}}function US(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const BS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function ar(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==BS)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++a,a===i&&s(o)},d=>r(d))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function lr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}vl._e=-1;function $i(t){return t==null}function ui(t){return t===0&&1/t==-1/0}function qS(t){return typeof t=="number"&&Number.isInteger(t)&&!ui(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function hu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Lf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ce{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ar(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ar(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ar(this.root,e,this.comparator,!0)}}class Ar{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=r??Ie.EMPTY,this.right=i??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ie(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ie.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Ie(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pe{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fu(this.data.getIterator())}getIteratorFrom(e){return new fu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class fu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ke{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new Ke([])}unionWith(e){let n=new Pe(Ae.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ke(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Un(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Vf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vf("Invalid base64 string: "+i):i}}(e);return new je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const zS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(t){if(re(!!t),typeof t=="string"){let e=0;const n=zS.exec(t);if(re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pn(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
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
 */function Tl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wl(t){const e=t.mapValue.fields.__previous_value__;return Tl(e)?wl(e):e}function js(t){const e=Wt(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class HS{constructor(e,n,s,r,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Fs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tl(t)?4:WS(t)?9007199254740991:10:$()}function mt(t,e){if(t===e)return!0;const n=mn(t);if(n!==mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return js(t).isEqual(js(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Wt(r.timestampValue),a=Wt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return pn(r.bytesValue).isEqual(pn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ye(r.doubleValue),a=ye(i.doubleValue);return o===a?ui(o)===ui(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Un(t.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(hu(o)!==hu(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!mt(o[l],a[l])))return!1;return!0}(t,e);default:return $()}}function Us(t,e){return(t.values||[]).find(n=>mt(n,e))!==void 0}function Bn(t,e){if(t===e)return 0;const n=mn(t),s=mn(e);if(n!==s)return ne(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ye(i.integerValue||i.doubleValue),l=ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return pu(t.timestampValue,e.timestampValue);case 4:return pu(js(t),js(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,o){const a=pn(i),l=pn(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=ne(a[u],l[u]);if(d!==0)return d}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ne(ye(i.latitude),ye(o.latitude));return a!==0?a:ne(ye(i.longitude),ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const d=Bn(a[u],l[u]);if(d)return d}return ne(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Cr.mapValue&&o===Cr.mapValue)return 0;if(i===Cr.mapValue)return 1;if(o===Cr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const f=ne(l[h],d[h]);if(f!==0)return f;const p=Bn(a[l[h]],u[d[h]]);if(p!==0)return p}return ne(l.length,d.length)}(t.mapValue,e.mapValue);default:throw $()}}function pu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Wt(t),s=Wt(e),r=ne(n.seconds,s.seconds);return r!==0?r:ne(n.nanos,s.nanos)}function $n(t){return ma(t)}function ma(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Wt(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return U.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=ma(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${ma(n.fields[o])}`;return r+"}"}(t.mapValue):$()}function ga(t){return!!t&&"integerValue"in t}function El(t){return!!t&&"arrayValue"in t}function mu(t){return!!t&&"nullValue"in t}function gu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fr(t){return!!t&&"mapValue"in t}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=vs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Fr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=Ae.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=vs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Fr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Tn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(vs(this.value))}}function jf(t){const e=[];return Tn(t.fields,(n,s)=>{const r=new Ae([n]);if(Fr(s)){const i=jf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class De{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,W.min(),W.min(),W.min(),qe.empty(),0)}static newFoundDocument(e,n,s,r){return new De(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new De(e,2,n,W.min(),W.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,W.min(),W.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class di{constructor(e,n){this.position=e,this.inclusive=n}}function yu(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),n.key):s=Bn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function _u(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class hi{constructor(e,n="asc"){this.field=e,this.dir=n}}function GS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ff{}class _e extends Ff{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QS(e,n,s):n==="array-contains"?new JS(e,s):n==="in"?new ZS(e,s):n==="not-in"?new eI(e,s):n==="array-contains-any"?new tI(e,s):new _e(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new XS(e,s):new YS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bn(n,this.value)):n!==null&&mn(this.value)===mn(n)&&this.matchesComparison(Bn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends Ff{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new gt(e,n)}matches(e){return Uf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Uf(t){return t.op==="and"}function Bf(t){return KS(t)&&Uf(t)}function KS(t){for(const e of t.filters)if(e instanceof gt)return!1;return!0}function ya(t){if(t instanceof _e)return t.field.canonicalString()+t.op.toString()+$n(t.value);if(Bf(t))return t.filters.map(e=>ya(e)).join(",");{const e=t.filters.map(n=>ya(n)).join(",");return`${t.op}(${e})`}}function $f(t,e){return t instanceof _e?function(s,r){return r instanceof _e&&s.op===r.op&&s.field.isEqual(r.field)&&mt(s.value,r.value)}(t,e):t instanceof gt?function(s,r){return r instanceof gt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&$f(o,r.filters[a]),!0):!1}(t,e):void $()}function qf(t){return t instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${$n(n.value)}`}(t):t instanceof gt?function(n){return n.op.toString()+" {"+n.getFilters().map(qf).join(" ,")+"}"}(t):"Filter"}class QS extends _e{constructor(e,n,s){super(e,n,s),this.key=U.fromName(s.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class XS extends _e{constructor(e,n){super(e,"in",n),this.keys=zf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YS extends _e{constructor(e,n){super(e,"not-in",n),this.keys=zf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>U.fromName(s.referenceValue))}class JS extends _e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return El(n)&&Us(n.arrayValue,this.value)}}class ZS extends _e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Us(this.value.arrayValue,n)}}class eI extends _e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Us(this.value.arrayValue,n)}}class tI extends _e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!El(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Us(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function vu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new nI(t,e,n,s,r,i,o)}function xl(t){const e=K(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ya(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),$i(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>$n(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>$n(s)).join(",")),e.ce=n}return e.ce}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$f(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_u(t.startAt,e.startAt)&&_u(t.endAt,e.endAt)}function _a(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function sI(t,e,n,s,r,i,o,a){return new qi(t,e,n,s,r,i,o,a)}function Il(t){return new qi(t)}function Tu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rI(t){return t.collectionGroup!==null}function Ts(t){const e=K(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Pe(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new hi(i,s))}),n.has(Ae.keyField().canonicalString())||e.le.push(new hi(Ae.keyField(),s))}return e.le}function ft(t){const e=K(t);return e.he||(e.he=iI(e,Ts(t))),e.he}function iI(t,e){if(t.limitType==="F")return vu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new hi(r.field,i)});const n=t.endAt?new di(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new di(t.startAt.position,t.startAt.inclusive):null;return vu(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function va(t,e,n){return new qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zi(t,e){return Sl(ft(t),ft(e))&&t.limitType===e.limitType}function Hf(t){return`${xl(ft(t))}|lt:${t.limitType}`}function xn(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>qf(r)).join(", ")}]`),$i(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>$n(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>$n(r)).join(",")),`Target(${s})`}(ft(t))}; limitType=${t.limitType})`}function Hi(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):U.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Ts(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const u=yu(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,Ts(s),r)||s.endAt&&!function(o,a,l){const u=yu(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,Ts(s),r))}(t,e)}function oI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wf(t){return(e,n)=>{let s=!1;for(const r of Ts(t)){const i=aI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function aI(t,e,n){const s=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Bn(l,u):$()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Lf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const lI=new ce(U.comparator);function Pt(){return lI}const Gf=new ce(U.comparator);function us(...t){let e=Gf;for(const n of t)e=e.insert(n.key,n);return e}function Kf(t){let e=Gf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function sn(){return ws()}function Qf(){return ws()}function ws(){return new Jn(t=>t.toString(),(t,e)=>t.isEqual(e))}const cI=new ce(U.comparator),uI=new Pe(U.comparator);function Y(...t){let e=uI;for(const n of t)e=e.add(n);return e}const dI=new Pe(ne);function hI(){return dI}/**
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
 */function Xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Yf(t){return{integerValue:""+t}}function fI(t,e){return qS(e)?Yf(e):Xf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wi{constructor(){this._=void 0}}function pI(t,e,n){return t instanceof Bs?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Tl(i)&&(i=wl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof $s?Zf(t,e):t instanceof qs?ep(t,e):function(r,i){const o=Jf(r,i),a=wu(o)+wu(r.Ie);return ga(o)&&ga(r.Ie)?Yf(a):Xf(r.serializer,a)}(t,e)}function mI(t,e,n){return t instanceof $s?Zf(t,e):t instanceof qs?ep(t,e):n}function Jf(t,e){return t instanceof fi?function(s){return ga(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Bs extends Wi{}class $s extends Wi{constructor(e){super(),this.elements=e}}function Zf(t,e){const n=tp(e);for(const s of t.elements)n.some(r=>mt(r,s))||n.push(s);return{arrayValue:{values:n}}}class qs extends Wi{constructor(e){super(),this.elements=e}}function ep(t,e){let n=tp(e);for(const s of t.elements)n=n.filter(r=>!mt(r,s));return{arrayValue:{values:n}}}class fi extends Wi{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function wu(t){return ye(t.integerValue||t.doubleValue)}function tp(t){return El(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gI{constructor(e,n){this.field=e,this.transform=n}}function yI(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof $s&&r instanceof $s||s instanceof qs&&r instanceof qs?Un(s.elements,r.elements,mt):s instanceof fi&&r instanceof fi?mt(s.Ie,r.Ie):s instanceof Bs&&r instanceof Bs}(t.transform,e.transform)}class _I{constructor(e,n){this.version=e,this.transformResults=n}}class st{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ur(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gi{}function np(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bl(t.key,st.none()):new cr(t.key,t.data,st.none());{const n=t.data,s=qe.empty();let r=new Pe(Ae.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Yt(t.key,s,new Ke(r.toArray()),st.none())}}function vI(t,e,n){t instanceof cr?function(r,i,o){const a=r.value.clone(),l=xu(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yt?function(r,i,o){if(!Ur(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=xu(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(sp(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Es(t,e,n,s){return t instanceof cr?function(i,o,a,l){if(!Ur(i.precondition,o))return a;const u=i.value.clone(),d=Su(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Yt?function(i,o,a,l){if(!Ur(i.precondition,o))return a;const u=Su(i.fieldTransforms,l,o),d=o.data;return d.setAll(sp(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Ur(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Jf(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function Eu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Un(s,r,(i,o)=>yI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cr extends Gi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Yt extends Gi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xu(t,e,n){const s=new Map;re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,mI(o,a,n[r]))}return s}function Su(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,pI(i,o,e))}return s}class bl extends Gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wI extends Gi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class EI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&vI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Es(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Es(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Qf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=np(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Un(this.mutations,e.mutations,(n,s)=>Eu(n,s))&&Un(this.baseMutations,e.baseMutations,(n,s)=>Eu(n,s))}}class Al{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){re(e.mutations.length===s.length);let r=function(){return cI}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Al(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class xI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class SI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var me,ee;function II(t){switch(t){default:return $();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function rp(t){if(t===void 0)return Ct("GRPC error has no .code"),I.UNKNOWN;switch(t){case me.OK:return I.OK;case me.CANCELLED:return I.CANCELLED;case me.UNKNOWN:return I.UNKNOWN;case me.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case me.INTERNAL:return I.INTERNAL;case me.UNAVAILABLE:return I.UNAVAILABLE;case me.UNAUTHENTICATED:return I.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case me.NOT_FOUND:return I.NOT_FOUND;case me.ALREADY_EXISTS:return I.ALREADY_EXISTS;case me.PERMISSION_DENIED:return I.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case me.ABORTED:return I.ABORTED;case me.OUT_OF_RANGE:return I.OUT_OF_RANGE;case me.UNIMPLEMENTED:return I.UNIMPLEMENTED;case me.DATA_LOSS:return I.DATA_LOSS;default:return $()}}(ee=me||(me={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function bI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const AI=new On([4294967295,4294967295],0);function Iu(t){const e=bI().encode(t),n=new CS;return n.update(e),new Uint8Array(n.digest())}function bu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new On([n,s],0),new On([r,i],0)]}class Cl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ds(`Invalid padding: ${n}`);if(s<0)throw new ds(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ds(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=On.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(On.fromNumber(s)));return r.compare(AI)===1&&(r=new On([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Iu(e),[s,r]=bu(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cl(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Iu(e),[s,r]=bu(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ki{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ur.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ki(W.min(),r,new ce(ne),Pt(),Y())}}class ur{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ur(s,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Br{constructor(e,n,s,r){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=r}}class ip{constructor(e,n){this.targetId=e,this.fe=n}}class op{constructor(e,n,s=je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Au{constructor(){this.ge=0,this.pe=Pu(),this.ye=je.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Y(),n=Y(),s=Y();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:$()}}),new ur(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=Pu()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,re(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class CI{constructor(e){this.Le=e,this.ke=new Map,this.qe=Pt(),this.Qe=Cu(),this.Ke=new ce(ne)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.fe.count,r=this.Ye(n);if(r){const i=r.target;if(_a(i))if(s===0){const o=new U(i.path);this.We(n,o,De.newNoDocument(o,W.min()))}else re(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=pn(s).toUint8Array()}catch(l){if(l instanceof Vf)return Fn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Cl(o,r,i)}catch(l){return Fn(l instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&_a(a.target)){const l=new U(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,De.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let s=Y();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const r=new Ki(e,n,this.Ke,this.qe,s);return this.qe=Pt(),this.Qe=Cu(),this.Ke=new ce(ne),r}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Au,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Pe(ne),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Au),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cu(){return new ce(U.comparator)}function Pu(){return new ce(U.comparator)}const PI={asc:"ASCENDING",desc:"DESCENDING"},RI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kI={and:"AND",or:"OR"};class NI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ta(t,e){return t.useProto3Json||$i(e)?e:{value:e}}function pi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ap(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OI(t,e){return pi(t,e.toTimestamp())}function pt(t){return re(!!t),W.fromTimestamp(function(n){const s=Wt(n);return new ve(s.seconds,s.nanos)}(t))}function Pl(t,e){return function(s){return new ae(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function lp(t){const e=ae.fromString(t);return re(hp(e)),e}function wa(t,e){return Pl(t.databaseId,e.path)}function Do(t,e){const n=lp(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(cp(n))}function Ea(t,e){return Pl(t.databaseId,e)}function DI(t){const e=lp(t);return e.length===4?ae.emptyPath():cp(e)}function xa(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cp(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ru(t,e,n){return{name:wa(t,e),fields:n.value.mapValue.fields}}function MI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(re(d===void 0||typeof d=="string"),je.fromBase64String(d||"")):(re(d===void 0||d instanceof Uint8Array),je.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?I.UNKNOWN:rp(u.code);return new F(d,u.message||"")}(o);n=new op(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Do(t,s.document.name),i=pt(s.document.updateTime),o=s.document.createTime?pt(s.document.createTime):W.min(),a=new qe({mapValue:{fields:s.document.fields}}),l=De.newFoundDocument(r,i,o,a),u=s.targetIds||[],d=s.removedTargetIds||[];n=new Br(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Do(t,s.document),i=s.readTime?pt(s.readTime):W.min(),o=De.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Br([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Do(t,s.document),i=s.removedTargetIds||[];n=new Br([],i,r,null)}else{if(!("filter"in e))return $();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new SI(r,i),a=s.targetId;n=new ip(a,o)}}return n}function LI(t,e){let n;if(e instanceof cr)n={update:Ru(t,e.key,e.value)};else if(e instanceof bl)n={delete:wa(t,e.key)};else if(e instanceof Yt)n={update:Ru(t,e.key,e.data),updateMask:HI(e.fieldMask)};else{if(!(e instanceof wI))return $();n={verify:wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw $()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:OI(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function VI(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?pt(r.updateTime):pt(i);return o.isEqual(W.min())&&(o=pt(i)),new _I(o,r.transformResults||[])}(n,e))):[]}function jI(t,e){return{documents:[Ea(t,e.path)]}}function FI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ea(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ea(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return dp(gt.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Sn(h.field),direction:$I(h.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ta(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function UI(t){let e=DI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){re(s===1);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(h){const f=up(h);return f instanceof gt&&Bf(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new hi(In(m.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,$i(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new di(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new di(p,f)}(n.endAt)),sI(e,r,o,i,a,"F",l,u)}function BI(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function up(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=In(n.unaryFilter.field);return _e.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=In(n.unaryFilter.field);return _e.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=In(n.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=In(n.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return _e.create(In(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gt.create(n.compositeFilter.filters.map(s=>up(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function $I(t){return PI[t]}function qI(t){return RI[t]}function zI(t){return kI[t]}function Sn(t){return{fieldPath:t.canonicalString()}}function In(t){return Ae.fromServerFormat(t.fieldPath)}function dp(t){return t instanceof _e?function(n){if(n.op==="=="){if(gu(n.value))return{unaryFilter:{field:Sn(n.field),op:"IS_NAN"}};if(mu(n.value))return{unaryFilter:{field:Sn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gu(n.value))return{unaryFilter:{field:Sn(n.field),op:"IS_NOT_NAN"}};if(mu(n.value))return{unaryFilter:{field:Sn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sn(n.field),op:qI(n.op),value:n.value}}}(t):t instanceof gt?function(n){const s=n.getFilters().map(r=>dp(r));return s.length===1?s[0]:{compositeFilter:{op:zI(n.op),filters:s}}}(t):$()}function HI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ut{constructor(e,n,s,r,i=W.min(),o=W.min(),a=je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WI{constructor(e){this.ut=e}}function GI(t){const e=UI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?va(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class KI{constructor(){this.on=new QI}addToCollectionParentIndex(e,n){return this.on.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Ht.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class QI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Pe(ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new qn(0)}static Nn(){return new qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class XI{constructor(){this.changes=new Jn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class YI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class JI{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Es(s.mutation,r,Ke.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const r=sn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=us();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=sn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Pt();const o=ws(),a=function(){return ws()}();return n.forEach((l,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof Yt)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Es(d.mutation,u,d.mutation.getFieldMask(),ve.now())):o.set(u.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new YI(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ws();let r=new ce((o,a)=>o-a),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=s.get(l)||Ke.empty();d=a.applyToLocalView(u,d),s.set(l,d);const h=(r.get(a.batchId)||Y()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=Qf();d.forEach(f=>{if(!i.has(f)){const p=np(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(sn());let a=-1,l=i;return o.next(u=>b.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(f=>{l=l.insert(d,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Y())).next(d=>({batchId:a,changes:Kf(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(s=>{let r=us();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=us();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,l=>{const u=function(h,f){return new qi(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(d=>{d.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,De.newInvalidDocument(d)))});let a=us();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Es(d.mutation,u,Ke.empty(),ve.now()),Hi(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class ZI{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return b.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:pt(r.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:GI(r.bundledQuery),readTime:pt(r.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class eb{constructor(){this.overlays=new ce(U.comparator),this.lr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=sn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=sn(),i=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ce((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=sn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=sn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=r)););return b.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xI(n,s));let i=this.lr.get(n);i===void 0&&(i=Y(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rl{constructor(){this.hr=new Pe(Te.Pr),this.Ir=new Pe(Te.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Te(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Te(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new U(new ae([])),s=new Te(n,e),r=new Te(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new U(new ae([])),s=new Te(n,e),r=new Te(n,e+1);let i=Y();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Te(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return U.comparator(e.key,n.key)||ne(e.gr,n.gr)}static Tr(e,n){return ne(e.gr,n.gr)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Pe(Te.Pr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new Te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Te(n,0),r=new Te(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(ne);return n.forEach(r=>{const i=new Te(r,0),o=new Te(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),b.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const o=new Te(new U(i),0);let a=new Pe(ne);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.gr)),!0)},o),b.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return b.forEach(n.mutations,r=>{const i=new Te(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Te(n,0),r=this.yr.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nb{constructor(e){this.Cr=e,this.docs=function(){return new ce(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():De.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Pt();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||US(FS(d),s)<=0||(r.has(d.key)||Hi(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){$()}vr(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sb(this)}getSize(e){return b.resolve(this.size)}}class sb extends XI{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rb{constructor(e){this.persistence=e,this.Fr=new Jn(n=>xl(n),Sl),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Rl,this.targetCount=0,this.Nr=qn.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),b.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new qn(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.kn(n),b.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ib{constructor(e,n){this.Br={},this.overlays={},this.Lr=new vl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new rb(this),this.indexManager=new KI,this.remoteDocumentCache=function(r){return new nb(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new WI(n),this.Kr=new ZI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new tb(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new ob(this.Lr.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return b.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class ob extends $S{constructor(e){super(),this.currentSequenceNumber=e}}class kl{constructor(e){this.persistence=e,this.Gr=new Rl,this.zr=null}static jr(e){return new kl(e)}get Hr(){if(this.zr)return this.zr;throw $()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Hr,s=>{const r=U.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return b.or([()=>b.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=Y(),r=Y();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Nl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class lb{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ab;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(ss()<=Z.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",xn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),b.resolve()):(ss()<=Z.DEBUG&&V("QueryEngine","Query:",xn(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(ss()<=Z.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",xn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ft(n))):b.resolve())}zi(e,n){if(Tu(n))return b.resolve(null);let s=ft(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=va(n,null,"F"),s=ft(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Y(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,va(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,s,r){return Tu(n)||r.isEqual(W.min())?b.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?b.resolve(null):(ss()<=Z.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xn(n)),this.Xi(e,o,n,jS(r,-1)).next(a=>a))})}Yi(e,n){let s=new Pe(Wf(e));return n.forEach((r,i)=>{Hi(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return ss()<=Z.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",xn(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ht.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class cb{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new ce(ne),this.ns=new Jn(i=>xl(i),Sl),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JI(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function ub(t,e,n,s){return new cb(t,e,n,s)}async function fp(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=Y();for(const u of r){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(s,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function db(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,f=h.keys();let p=b.resolve();return f.forEach(m=>{p=p.next(()=>d.getEntry(l,m)).next(_=>{const g=u.docVersions.get(m);re(g!==null),_.version.compareTo(g)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),d.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=Y();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function pp(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function hb(t,e){const n=K(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((d,h)=>{const f=r.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,d.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,d.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(je.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):d.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(d.resumeToken,s)),r=r.insert(h,p),function(_,g,y){return _.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,p,d)&&a.push(n.qr.updateTargetData(i,p))});let l=Pt(),u=Y();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(fb(i,o,e.documentUpdates).next(d=>{l=d.us,u=d.cs})),!s.isEqual(W.min())){const d=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(d)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ts=r,i))}function fb(t,e,n){let s=Y(),r=Y();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Pt();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:r}})}function pb(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function mb(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new Ut(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Sa(t,e,n){const s=K(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!lr(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function ku(t,e,n){const s=K(t);let r=W.min(),i=Y();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const h=K(l),f=h.ns.get(d);return f!==void 0?b.resolve(h.ts.get(f)):h.qr.getTargetData(u,d)}(s,o,ft(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:Y())).next(a=>(gb(s,oI(e),a),{documents:a,ls:i})))}function gb(t,e,n){let s=t.rs.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class Nu{constructor(){this.activeTargetIds=hI()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yb{constructor(){this.eo=new Nu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Nu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class _b{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ou{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Pr=null;function Mo(){return Pr===null?Pr=function(){return 268435456+Math.round(2147483648*Math.random())}():Pr++,"0x"+Pr.toString(16)}/**
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
 */const vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tb{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ke="WebChannelConnection";class wb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${r}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get yo(){return!1}wo(n,s,r,i,o){const a=Mo(),l=this.So(n,s);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,i,o),this.Do(n,l,u,r).then(d=>(V("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Fn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",r),d})}Co(n,s,r,i,o,a){return this.wo(n,s,r,i,o)}bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}So(n,s){const r=vb[n];return`${this.mo}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,r){const i=Mo();return new Promise((o,a)=>{const l=new AS;l.setWithCredentials(!0),l.listenOnce(IS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Oo.NO_ERROR:const d=l.getResponseJson();V(ke,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Oo.TIMEOUT:V(ke,`RPC '${e}' ${i} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const h=l.getStatus();if(V(ke,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(p.status);a(new F(m,p.message))}else a(new F(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{V(ke,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);V(ke,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",u,s,15)})}vo(e,n,s){const r=Mo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xS(),a=SS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const d=i.join("");V(ke,`Creating RPC '${e}' stream ${r}: ${d}`,l);const h=o.createWebChannel(d,l);let f=!1,p=!1;const m=new Tb({co:g=>{p?V(ke,`Not sending because RPC '${e}' stream ${r} is closed:`,g):(f||(V(ke,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),V(ke,`RPC '${e}' stream ${r} sending:`,g),h.send(g))},lo:()=>h.close()}),_=(g,y,E)=>{g.listen(y,v=>{try{E(v)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,br.EventType.OPEN,()=>{p||V(ke,`RPC '${e}' stream ${r} transport opened.`)}),_(h,br.EventType.CLOSE,()=>{p||(p=!0,V(ke,`RPC '${e}' stream ${r} transport closed`),m.Ro())}),_(h,br.EventType.ERROR,g=>{p||(p=!0,Fn(ke,`RPC '${e}' stream ${r} transport errored:`,g),m.Ro(new F(I.UNAVAILABLE,"The operation could not be completed")))}),_(h,br.EventType.MESSAGE,g=>{var y;if(!p){const E=g.data[0];re(!!E);const v=E,w=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(w){V(ke,`RPC '${e}' stream ${r} received error:`,w);const S=w.status;let R=function(P){const C=me[P];if(C!==void 0)return rp(C)}(S),j=w.message;R===void 0&&(R=I.INTERNAL,j="Unknown error status: "+S+" with message "+w.message),p=!0,m.Ro(new F(R,j)),h.close()}else V(ke,`RPC '${e}' stream ${r} received:`,E),m.Vo(E)}}),_(a,bS.STAT_EVENT,g=>{g.stat===uu.PROXY?V(ke,`RPC '${e}' stream ${r} detected buffering proxy`):g.stat===uu.NOPROXY&&V(ke,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function Lo(){return typeof document<"u"?document:null}/**
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
 */function Qi(t){return new NI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gp{constructor(e,n,s,r,i,o,a,l){this.si=e,this.Ko=s,this.$o=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new mp(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ct(n.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Uo===n&&this.s_(s,r)},s=>{e(()=>{const r=new F(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(r)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{s(()=>this.o_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Eb extends gp{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=MI(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?pt(o.readTime):W.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=xa(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=_a(l)?{documents:jI(i,l)}:{query:FI(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ap(i,o.resumeToken);const u=Ta(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=pi(i,o.snapshotVersion.toTimestamp());const u=Ta(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=BI(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=xa(this.serializer),n.removeTarget=e,this.e_(n)}}class xb extends gp{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=VI(e.writeResults,e.commitTime),s=pt(e.commitTime);return this.listener.I_(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=xa(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>LI(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(I.UNKNOWN,r.toString())})}Co(e,n,s,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class Ib{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ct(n),this.f_=!1):V("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{s.enqueueAndForget(async()=>{wn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.C_.add(4),await dr(u),u.M_.set("Unknown"),u.C_.delete(4),await Xi(u)}(this))})}),this.M_=new Ib(s,r)}}async function Xi(t){if(wn(t))for(const e of t.v_)await e(!0)}async function dr(t){for(const e of t.v_)await e(!1)}function yp(t,e){const n=K(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Ml(n)?Dl(n):Zn(n).Ho()&&Ol(n,e))}function _p(t,e){const n=K(t),s=Zn(n);n.D_.delete(e),s.Ho()&&vp(n,e),n.D_.size===0&&(s.Ho()?s.Zo():wn(n)&&n.M_.set("Unknown"))}function Ol(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zn(t).u_(e)}function vp(t,e){t.x_.Oe(e),Zn(t).c_(e)}function Dl(t){t.x_=new CI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Zn(t).start(),t.M_.g_()}function Ml(t){return wn(t)&&!Zn(t).jo()&&t.D_.size>0}function wn(t){return K(t).C_.size===0}function Tp(t){t.x_=void 0}async function Ab(t){t.D_.forEach((e,n)=>{Ol(t,e)})}async function Cb(t,e){Tp(t),Ml(t)?(t.M_.w_(e),Dl(t)):t.M_.set("Unknown")}async function Pb(t,e,n){if(t.M_.set("Online"),e instanceof op&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.D_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.D_.delete(a),r.x_.removeTarget(a))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mi(t,s)}else if(e instanceof Br?t.x_.$e(e):e instanceof ip?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(W.min()))try{const s=await pp(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.D_.get(u);d&&i.D_.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=i.D_.get(l);if(!d)return;i.D_.set(l,d.withResumeToken(je.EMPTY_BYTE_STRING,d.snapshotVersion)),vp(i,l);const h=new Ut(d.target,l,u,d.sequenceNumber);Ol(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await mi(t,s)}}async function mi(t,e,n){if(!lr(e))throw e;t.C_.add(1),await dr(t),t.M_.set("Offline"),n||(n=()=>pp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Xi(t)})}function wp(t,e){return e().catch(n=>mi(t,n,e))}async function Yi(t){const e=K(t),n=Gt(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Rb(e);)try{const r=await pb(e.localStore,s);if(r===null){e.b_.length===0&&n.Zo();break}s=r.batchId,kb(e,r)}catch(r){await mi(e,r)}Ep(e)&&xp(e)}function Rb(t){return wn(t)&&t.b_.length<10}function kb(t,e){t.b_.push(e);const n=Gt(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Ep(t){return wn(t)&&!Gt(t).jo()&&t.b_.length>0}function xp(t){Gt(t).start()}async function Nb(t){Gt(t).E_()}async function Ob(t){const e=Gt(t);for(const n of t.b_)e.P_(n.mutations)}async function Db(t,e,n){const s=t.b_.shift(),r=Al.from(s,e,n);await wp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Yi(t)}async function Mb(t,e){e&&Gt(t).h_&&await async function(s,r){if(function(o){return II(o)&&o!==I.ABORTED}(r.code)){const i=s.b_.shift();Gt(s).Yo(),await wp(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Yi(s)}}(t,e),Ep(t)&&xp(t)}async function Du(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=wn(n);n.C_.add(3),await dr(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Xi(n)}async function Lb(t,e){const n=K(t);e?(n.C_.delete(2),await Xi(n)):e||(n.C_.add(2),await dr(n),n.M_.set("Unknown"))}function Zn(t){return t.O_||(t.O_=function(n,s,r){const i=K(n);return i.A_(),new Eb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:Ab.bind(null,t),Io:Cb.bind(null,t),a_:Pb.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Ml(t)?Dl(t):t.M_.set("Unknown")):(await t.O_.stop(),Tp(t))})),t.O_}function Gt(t){return t.N_||(t.N_=function(n,s,r){const i=K(n);return i.A_(),new xb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:Nb.bind(null,t),Io:Mb.bind(null,t),T_:Ob.bind(null,t),I_:Db.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Yi(t)):(await t.N_.stop(),t.b_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ll{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ll(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vl(t,e){if(Ct("AsyncQueue",`${e}: ${t}`),lr(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||U.comparator(n.key,s.key):(n,s)=>U.comparator(n.key,s.key),this.keyedMap=us(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Dn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Dn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mu{constructor(){this.B_=new ce(U.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):$():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class zn{constructor(e,n,s,r,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zn(e,n,Dn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vb{constructor(){this.k_=void 0,this.listeners=[]}}class jb{constructor(){this.queries=new Jn(e=>Hf(e),zi),this.onlineState="Unknown",this.q_=new Set}}async function Sp(t,e){const n=K(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Vb),r)try{i.k_=await n.onListen(s)}catch(o){const a=Vl(o,`Initialization of query '${xn(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&jl(n)}async function Ip(t,e){const n=K(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Fb(t,e){const n=K(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(r)&&(s=!0);o.k_=r}}s&&jl(n)}function Ub(t,e,n){const s=K(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function jl(t){t.q_.forEach(e=>{e.next()})}class bp{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new zn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ap{constructor(e){this.key=e}}class Cp{constructor(e){this.key=e}}class Bb{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Y(),this.mutatedKeys=Y(),this._a=Wf(e),this.aa=new Dn(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new Mu,r=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,h)=>{const f=r.get(d),p=Hi(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let g=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(s.track({type:3,doc:p}),g=!0):this.ha(f,p)||(s.track({type:2,doc:p}),g=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),g=!0):f&&!p&&(s.track({type:1,doc:f}),g=!0,(l||u)&&(a=!0)),g&&(p?(o=o.add(p),i=_?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{aa:o,la:s,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((d,h)=>function(p,m){const _=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return _(p)-_(m)}(d.type,h.type)||this._a(d.doc,h.doc)),this.Pa(s),r=r!=null&&r;const a=n&&!r?this.Ia():[],l=this.oa.size===0&&this.current&&!r?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new zn(this.query,e.aa,i,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Mu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Y(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new Cp(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new Ap(s))}),n}da(e){this.ia=e.ls,this.oa=Y();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return zn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class $b{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class qb{constructor(e){this.key=e,this.Ra=!1}}class zb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Jn(a=>Hf(a),zi),this.fa=new Map,this.ga=new Set,this.pa=new ce(U.comparator),this.ya=new Map,this.wa=new Rl,this.Sa={},this.ba=new Map,this.Da=qn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Hb(t,e){const n=tA(t);let s,r;const i=n.ma.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Aa();else{const o=await mb(n.localStore,ft(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Wb(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&yp(n.remoteStore,o)}return r}async function Wb(t,e,n,s,r){t.va=(h,f,p)=>async function(_,g,y,E){let v=g.view.ca(y);v.Zi&&(v=await ku(_.localStore,g.query,!1).then(({documents:j})=>g.view.ca(j,v)));const w=E&&E.targetChanges.get(g.targetId),S=E&&E.targetMismatches.get(g.targetId)!=null,R=g.view.applyChanges(v,_.isPrimaryClient,w,S);return Vu(_,g.targetId,R.Ta),R.snapshot}(t,h,f,p);const i=await ku(t.localStore,e,!0),o=new Bb(e,i.ls),a=o.ca(i.documents),l=ur.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,l);Vu(t,n,u.Ta);const d=new $b(e,n,o);return t.ma.set(e,d),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function Gb(t,e){const n=K(t),s=n.ma.get(e),r=n.fa.get(s.targetId);if(r.length>1)return n.fa.set(s.targetId,r.filter(i=>!zi(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Sa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),_p(n.remoteStore,s.targetId),Ia(n,s.targetId)}).catch(ar)):(Ia(n,s.targetId),await Sa(n.localStore,s.targetId,!0))}async function Kb(t,e,n){const s=nA(t);try{const r=await function(o,a){const l=K(o),u=ve.now(),d=a.reduce((p,m)=>p.add(m.key),Y());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Pt(),_=Y();return l.ss.getEntries(p,d).next(g=>{m=g,m.forEach((y,E)=>{E.isValidDocument()||(_=_.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(g=>{h=g;const y=[];for(const E of a){const v=TI(E,h.get(E.key).overlayedDocument);v!=null&&y.push(new Yt(E.key,v,jf(v.value.mapValue),st.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,y,a)}).next(g=>{f=g;const y=g.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,g.batchId,y)})}).then(()=>({batchId:f.batchId,changes:Kf(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ce(ne)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(s,r.batchId,n),await hr(s,r.changes),await Yi(s.remoteStore)}catch(r){const i=Vl(r,"Failed to persist write");n.reject(i)}}async function Pp(t,e){const n=K(t);try{const s=await hb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ya.get(i);o&&(re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ra=!0:r.modifiedDocuments.size>0?re(o.Ra):r.removedDocuments.size>0&&(re(o.Ra),o.Ra=!1))}),await hr(n,s,e)}catch(s){await ar(s)}}function Lu(t,e,n){const s=K(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&jl(l)}(s.eventManager,e),r.length&&s.Va.a_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Qb(t,e,n){const s=K(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ya.get(e),i=r&&r.key;if(i){let o=new ce(U.comparator);o=o.insert(i,De.newNoDocument(i,W.min()));const a=Y().add(i),l=new Ki(W.min(),new Map,new ce(ne),o,a);await Pp(s,l),s.pa=s.pa.remove(i),s.ya.delete(e),Fl(s)}else await Sa(s.localStore,e,!1).then(()=>Ia(s,e,n)).catch(ar)}async function Xb(t,e){const n=K(t),s=e.batch.batchId;try{const r=await db(n.localStore,e);kp(n,s,null),Rp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hr(n,r)}catch(r){await ar(r)}}async function Yb(t,e,n){const s=K(t);try{const r=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(re(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(s.localStore,e);kp(s,e,n),Rp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await hr(s,r)}catch(r){await ar(r)}}function Rp(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function kp(t,e,n){const s=K(t);let r=s.Sa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Sa[s.currentUser.toKey()]=r}}function Ia(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||Np(t,s)})}function Np(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(_p(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Fl(t))}function Vu(t,e,n){for(const s of n)s instanceof Ap?(t.wa.addReference(s.key,e),Jb(t,s)):s instanceof Cp?(V("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||Np(t,s.key)):$()}function Jb(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(V("SyncEngine","New document in limbo: "+n),t.ga.add(s),Fl(t))}function Fl(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new U(ae.fromString(e)),s=t.Da.next();t.ya.set(s,new qb(n)),t.pa=t.pa.insert(n,s),yp(t.remoteStore,new Ut(ft(Il(n.path)),s,"TargetPurposeLimboResolution",vl._e))}}async function hr(t,e,n){const s=K(t),r=[],i=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const d=Nl.Qi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),s.Va.a_(r),await async function(l,u){const d=K(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(u,f=>b.forEach(f.ki,p=>d.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>b.forEach(f.qi,p=>d.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!lr(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=d.ts.get(f),m=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(m);d.ts=d.ts.insert(f,_)}}}(s.localStore,i))}async function Zb(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await fp(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(I.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hr(n,s._s)}}function eA(t,e){const n=K(t),s=n.ya.get(e);if(s&&s.Ra)return Y().add(s.key);{let r=Y();const i=n.fa.get(e);if(!i)return r;for(const o of i){const a=n.ma.get(o);r=r.unionWith(a.view.ua)}return r}}function tA(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qb.bind(null,e),e.Va.a_=Fb.bind(null,e.eventManager),e.Va.Fa=Ub.bind(null,e.eventManager),e}function nA(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class ju{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ub(this.persistence,new lb,e.initialUser,this.serializer)}createPersistence(e){return new ib(kl.jr,this.serializer)}createSharedClientState(e){return new yb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zb.bind(null,this.syncEngine),await Lb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jb}()}createDatastore(e){const n=Qi(e.databaseInfo.databaseId),s=function(i){return new wb(i)}(e.databaseInfo);return function(i,o,a,l){return new Sb(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new bb(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lu(this.syncEngine,n,0),function(){return Ou.D()?new Ou:new _b}())}createSyncEngine(e,n){return function(r,i,o,a,l,u,d){const h=new zb(r,i,o,a,l,u);return d&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=K(n);V("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await dr(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class Op{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=Mf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vo(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await fp(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oA(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Du(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Du(e.remoteStore,i)),t._onlineComponents=e}function iA(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function oA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!iA(n))throw n;Fn("Error using user provided cache. Falling back to memory cache: "+n),await Vo(t,new ju)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Vo(t,new ju);return t._offlineComponents}async function Dp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Fu(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Fu(t,new sA))),t._onlineComponents}function aA(t){return Dp(t).then(e=>e.syncEngine)}async function Mp(t){const e=await Dp(t),n=e.eventManager;return n.onListen=Hb.bind(null,e.syncEngine),n.onUnlisten=Gb.bind(null,e.syncEngine),n}function lA(t,e,n={}){const s=new It;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const d=new Op({next:f=>{o.enqueueAndForget(()=>Ip(i,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new F(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new F(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new bp(Il(a.path),d,{includeMetadataChanges:!0,J_:!0});return Sp(i,h)}(await Mp(t),t.asyncQueue,e,n,s)),s.promise}function cA(t,e,n={}){const s=new It;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const d=new Op({next:f=>{o.enqueueAndForget(()=>Ip(i,h)),f.fromCache&&l.source==="server"?u.reject(new F(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new bp(a,d,{includeMetadataChanges:!0,J_:!0});return Sp(i,h)}(await Mp(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Lp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Uu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Vp(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uA(t,e,n,s){if(e===!0&&s===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bu(t){if(!U.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $u(t){if(U.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ul(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ul(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qu{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lp((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ji{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qu(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new PS;switch(s.type){case"firstParty":return new OS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Uu.get(n);s&&(V("ComponentProvider","Removing Datastore"),Uu.delete(n),s.terminate())}(this),Promise.resolve()}}function dA(t,e,n,s={}){var r;const i=(t=Rt(t,Ji))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Ne.MOCK_USER;else{a=ad(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ne(u)}t._authCredentials=new RS(new Df(a,l))}}/**
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
 */class Zi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Zi(this.firestore,e,this._query)}}class Xe{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class qt extends Zi{constructor(e,n,s){super(e,n,Il(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new U(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function ba(t,e,...n){if(t=le(t),Vp("collection","path",e),t instanceof Ji){const s=ae.fromString(e,...n);return $u(s),new qt(t,null,s)}{if(!(t instanceof Xe||t instanceof qt))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return $u(s),new qt(t.firestore,null,s)}}function gi(t,e,...n){if(t=le(t),arguments.length===1&&(e=Mf.newId()),Vp("doc","path",e),t instanceof Ji){const s=ae.fromString(e,...n);return Bu(s),new Xe(t,null,new U(s))}{if(!(t instanceof Xe||t instanceof qt))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ae.fromString(e,...n));return Bu(s),new Xe(t.firestore,t instanceof qt?t.converter:null,new U(s))}}/**
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
 */class hA{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new mp(this,"async_queue_retry"),this.iu=()=>{const n=Lo();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Lo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Lo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new It;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!lr(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Ct("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=Ll.createAndSchedule(this,e,n,s,i=>this.au(i));return this.Xa.push(r),r}su(){this.eu&&$()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class es extends Ji{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new hA}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jp(this),this._firestoreClient.terminate()}}function fA(t,e){const n=typeof t=="object"?t:La(),s=typeof t=="string"?t:e||"(default)",r=vi(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=rd("firestore");i&&dA(r,...i)}return r}function Bl(t){return t._firestoreClient||jp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jp(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,u,d){return new HS(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Lp(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new rA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(je.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class eo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class to{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $l{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const pA=/^__.*__$/;class mA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Yt(e,this.data,this.fieldMask,n,this.fieldTransforms):new cr(e,this.data,n,this.fieldTransforms)}}class Fp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Yt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Up(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class ql{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new ql(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Au(e),r}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return yi(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Up(this.Iu)&&pA.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class gA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Qi(e)}pu(e,n,s,r=!1){return new ql({Iu:e,methodName:n,gu:s,path:Ae.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bp(t){const e=t._freezeSettings(),n=Qi(t._databaseId);return new gA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yA(t,e,n,s,r,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,r);Hl("Data must be an object, but it was:",o,s);const a=$p(s,o);let l,u;if(i.merge)l=new Ke(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const h of i.mergeFields){const f=Aa(e,h,n);if(!o.contains(f))throw new F(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);zp(d,f)||d.push(f)}l=new Ke(d),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new mA(new qe(a),l,u)}class no extends to{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}class zl extends to{_toFieldTransform(e){return new gI(e.path,new Bs)}isEqual(e){return e instanceof zl}}function _A(t,e,n,s){const r=t.pu(1,e,n);Hl("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();Tn(s,(l,u)=>{const d=Wl(e,l,n);u=le(u);const h=r.Ru(d);if(u instanceof no)i.push(d);else{const f=so(u,h);f!=null&&(i.push(d),o.set(d,f))}});const a=new Ke(i);return new Fp(o,a,r.fieldTransforms)}function vA(t,e,n,s,r,i){const o=t.pu(1,e,n),a=[Aa(e,s,n)],l=[r];if(i.length%2!=0)throw new F(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Aa(e,i[f])),l.push(i[f+1]);const u=[],d=qe.empty();for(let f=a.length-1;f>=0;--f)if(!zp(u,a[f])){const p=a[f];let m=l[f];m=le(m);const _=o.Ru(p);if(m instanceof no)u.push(p);else{const g=so(m,_);g!=null&&(u.push(p),d.set(p,g))}}const h=new Ke(u);return new Fp(d,h,o.fieldTransforms)}function so(t,e){if(qp(t=le(t)))return Hl("Unsupported field value:",e,t),$p(t,e);if(t instanceof to)return function(s,r){if(!Up(r.Iu))throw r.mu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=so(a,r.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=le(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return fI(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ve.fromDate(s);return{timestampValue:pi(r.serializer,i)}}if(s instanceof ve){const i=new ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:pi(r.serializer,i)}}if(s instanceof $l)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Hn)return{bytesValue:ap(r.serializer,s._byteString)};if(s instanceof Xe){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pl(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.mu(`Unsupported field value: ${Ul(s)}`)}(t,e)}function $p(t,e){const n={};return Lf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(t,(s,r)=>{const i=so(r,e.Eu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function qp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof $l||t instanceof Hn||t instanceof Xe||t instanceof to)}function Hl(t,e,n){if(!qp(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Ul(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function Aa(t,e,n){if((e=le(e))instanceof eo)return e._internalPath;if(typeof e=="string")return Wl(t,e);throw yi("Field path arguments must be of type string or ",t,!1,void 0,n)}const TA=new RegExp("[~\\*/\\[\\]]");function Wl(t,e,n){if(e.search(TA)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eo(...e.split("."))._internalPath}catch{throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new F(I.INVALID_ARGUMENT,a+t+l)}function zp(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Hp{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wA extends Hp{data(){return super.data()}}function Wp(t,e){return typeof e=="string"?Wl(t,e):e instanceof eo?e._internalPath:e._delegate._internalPath}/**
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
 */function EA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xA{convertValue(e,n="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Tn(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new $l(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=wl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const n=Wt(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ae.fromString(e);re(hp(s));const r=new Fs(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(n)||Ct(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function SA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gp extends Hp{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Wp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $r extends Gp{data(e={}){return super.data(e)}}class IA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new hs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $r(this._firestore,this._userDataWriter,s.key,s,new hs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new $r(r._firestore,r._userDataWriter,a.doc.key,a.doc,new hs(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new $r(r._firestore,r._userDataWriter,a.doc.key,a.doc,new hs(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:bA(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function Ca(t){t=Rt(t,Xe);const e=Rt(t.firestore,es);return lA(Bl(e),t._key).then(n=>PA(e,t,n))}class Kp extends xA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function Qp(t){t=Rt(t,Zi);const e=Rt(t.firestore,es),n=Bl(e),s=new Kp(e);return EA(t._query),cA(n,t._query).then(r=>new IA(e,s,t,r))}function jo(t,e,n,...s){t=Rt(t,Xe);const r=Rt(t.firestore,es),i=Bp(r);let o;return o=typeof(e=le(e))=="string"||e instanceof eo?vA(i,"updateDoc",t._key,e,n,s):_A(i,"updateDoc",t._key,e),Gl(r,[o.toMutation(t._key,st.exists(!0))])}function AA(t){return Gl(Rt(t.firestore,es),[new bl(t._key,st.none())])}function CA(t,e){const n=Rt(t.firestore,es),s=gi(t),r=SA(t.converter,e);return Gl(n,[yA(Bp(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,st.exists(!1))]).then(()=>s)}function Gl(t,e){return function(s,r){const i=new It;return s.asyncQueue.enqueueAndForget(async()=>Kb(await aA(s),r,i)),i.promise}(Bl(t),e)}function PA(t,e,n){const s=n.docs.get(e._key),r=new Kp(t);return new Gp(t,r,e._key,s,new hs(n.hasPendingWrites,n.fromCache),e.converter)}function Fo(){return new zl("serverTimestamp")}(function(e,n=!0){(function(r){Yn=r})(yn),cn(new zt("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new es(new kS(s.getProvider("auth-internal")),new MS(s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(u.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ut(du,"4.4.0",e),ut(du,"4.4.0","esm2017")})();var RA="firebase",kA="10.7.1";/**
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
 */ut(RA,kA,"app");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xp="firebasestorage.googleapis.com",Yp="storageBucket",NA=2*60*1e3,OA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class he extends yt{constructor(e,n,s=0){super(Uo(e),`Firebase Storage: ${n} (${Uo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Uo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function Uo(t){return"storage/"+t}function Kl(){const t="An unknown error occurred, please check the error payload for server response.";return new he(de.UNKNOWN,t)}function DA(t){return new he(de.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MA(t){return new he(de.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(de.UNAUTHENTICATED,t)}function VA(){return new he(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jA(t){return new he(de.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function FA(){return new he(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UA(){return new he(de.CANCELED,"User canceled the upload/download.")}function BA(t){return new he(de.INVALID_URL,"Invalid URL '"+t+"'.")}function $A(t){return new he(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qA(){return new he(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Yp+"' property when initializing the app?")}function zA(){return new he(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HA(){return new he(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WA(t){return new he(de.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pa(t){return new he(de.INVALID_ARGUMENT,t)}function Jp(){return new he(de.APP_DELETED,"The Firebase app was deleted.")}function GA(t){return new he(de.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xs(t,e){return new he(de.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function rs(t){throw new he(de.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Qe.makeFromUrl(e,n)}catch{return new Qe(e,"")}if(s.path==="")return s;throw $A(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${d}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},_=n===Xp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",y=new RegExp(`^https?://${_}/${r}/${g}`,"i"),v=[{regex:a,indices:l,postModify:i},{regex:p,indices:m,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<v.length;w++){const S=v[w],R=S.regex.exec(e);if(R){const j=R[S.indices.bucket];let O=R[S.indices.path];O||(O=""),s=new Qe(j,O),S.postModify(s);break}}if(s==null)throw BA(e);return s}}class KA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function QA(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...g){u||(u=!0,e.apply(null,g))}function h(g){r=setTimeout(()=>{r=null,t(p,l())},g)}function f(){i&&clearTimeout(i)}function p(g,...y){if(u){f();return}if(g){f(),d.call(null,g,...y);return}if(l()||o){f(),d.call(null,g,...y);return}s<64&&(s*=2);let v;a===1?(a=2,v=0):v=(s+Math.random())*1e3,h(v)}let m=!1;function _(g){m||(m=!0,f(),!u&&(r!==null?(g||(a=2),clearTimeout(r),h(0)):g||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function XA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function YA(t){return t!==void 0}function JA(t){return typeof t=="object"&&!Array.isArray(t)}function Ql(t){return typeof t=="string"||t instanceof String}function zu(t){return Xl()&&t instanceof Blob}function Xl(){return typeof Blob<"u"}function Hu(t,e,n,s){if(s<e)throw Pa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Pa(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ro(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Zp(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var an;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(an||(an={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function ZA(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eC{constructor(e,n,s,r,i,o,a,l,u,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Rr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===an.NO_ERROR,l=i.getStatus();if(!a||ZA(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===an.ABORT;s(!1,new Rr(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new Rr(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());YA(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Kl();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Jp():UA();o(l)}else{const l=FA();o(l)}};this.canceled_?n(!1,new Rr(!1,null,!0)):this.backoffId_=QA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function tC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iC(t,e,n,s,r,i,o=!0){const a=Zp(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return sC(u,e),tC(u,n),nC(u,i),rC(u,s),new eC(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function oC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aC(...t){const e=oC();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Xl())return new Blob(t);throw new he(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function cC(t){if(typeof atob>"u")throw WA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ct={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bo{constructor(e,n){this.data=e,this.contentType=n||null}}function uC(t,e){switch(t){case ct.RAW:return new Bo(em(e));case ct.BASE64:case ct.BASE64URL:return new Bo(tm(t,e));case ct.DATA_URL:return new Bo(hC(e),fC(e))}throw Kl()}function em(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function dC(t){let e;try{e=decodeURIComponent(t)}catch{throw xs(ct.DATA_URL,"Malformed data URL.")}return em(e)}function tm(t,e){switch(t){case ct.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw xs(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ct.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw xs(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cC(e)}catch(r){throw r.message.includes("polyfill")?r:xs(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class nm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xs(ct.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=pC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function hC(t){const e=new nm(t);return e.base64?tm(ct.BASE64,e.rest):dC(e.rest)}function fC(t){return new nm(t).contentType}function pC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vt{constructor(e,n){let s=0,r="";zu(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(zu(this.data_)){const s=this.data_,r=lC(s,e,n);return r===null?null:new Vt(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Vt(s,!0)}}static getBlob(...e){if(Xl()){const n=e.map(s=>s instanceof Vt?s.data_:s);return new Vt(aC.apply(null,n))}else{const n=e.map(o=>Ql(o)?uC(ct.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new Vt(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function sm(t){let e;try{e=JSON.parse(t)}catch{return null}return JA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gC(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function rm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function yC(t,e){return e}class Fe{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||yC}}let kr=null;function _C(t){return!Ql(t)||t.length<2?t:rm(t)}function im(){if(kr)return kr;const t=[];t.push(new Fe("bucket")),t.push(new Fe("generation")),t.push(new Fe("metageneration")),t.push(new Fe("name","fullPath",!0));function e(i,o){return _C(o)}const n=new Fe("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Fe("size");return r.xform=s,t.push(r),t.push(new Fe("timeCreated")),t.push(new Fe("updated")),t.push(new Fe("md5Hash",null,!0)),t.push(new Fe("cacheControl",null,!0)),t.push(new Fe("contentDisposition",null,!0)),t.push(new Fe("contentEncoding",null,!0)),t.push(new Fe("contentLanguage",null,!0)),t.push(new Fe("contentType",null,!0)),t.push(new Fe("metadata","customMetadata",!0)),kr=t,kr}function vC(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Qe(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function TC(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return vC(s,t),s}function om(t,e,n){const s=sm(e);return s===null?null:TC(t,s,n)}function wC(t,e,n,s){const r=sm(e);if(r===null||!Ql(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,h=t.fullPath,f="/b/"+o(d)+"/o/"+o(h),p=ro(f,n,s),m=Zp({alt:"media",token:u});return p+m})[0]}function EC(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Yl{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function am(t){if(!t)throw Kl()}function xC(t,e){function n(s,r){const i=om(t,r,e);return am(i!==null),i}return n}function SC(t,e){function n(s,r){const i=om(t,r,e);return am(i!==null),wC(i,r,t.host,t._protocol)}return n}function lm(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=VA():r=LA():n.getStatus()===402?r=MA(t.bucket):n.getStatus()===403?r=jA(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function cm(t){const e=lm(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=DA(t.path)),i.serverResponse=r.serverResponse,i}return n}function IC(t,e,n){const s=e.fullServerUrl(),r=ro(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Yl(r,i,SC(t,n),o);return a.errorHandler=cm(e),a}function bC(t,e){const n=e.fullServerUrl(),s=ro(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(l,u){}const a=new Yl(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=cm(e),a}function AC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function CC(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=AC(null,e)),s}function PC(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=CC(e,s,r),d=EC(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Vt.getBlob(h,s,f);if(p===null)throw zA();const m={name:u.fullPath},_=ro(i,t.host,t._protocol),g="POST",y=t.maxUploadRetryTime,E=new Yl(_,g,xC(t,n),y);return E.urlParams=m,E.headers=o,E.body=p.uploadData(),E.errorHandler=lm(e),E}class RC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=an.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=an.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=an.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kC extends RC{initXhr(){this.xhr_.responseType="text"}}function Jl(){return new kC}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class gn{constructor(e,n){this._service=e,n instanceof Qe?this._location=n:this._location=Qe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gn(e,n)}get root(){const e=new Qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rm(this._location.path)}get storage(){return this._service}get parent(){const e=mC(this._location.path);if(e===null)return null;const n=new Qe(this._location.bucket,e);return new gn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GA(e)}}function NC(t,e,n){t._throwIfRoot("uploadBytes");const s=PC(t.storage,t._location,im(),new Vt(e,!0),n);return t.storage.makeRequestWithTokens(s,Jl).then(r=>({metadata:r,ref:t}))}function OC(t){t._throwIfRoot("getDownloadURL");const e=IC(t.storage,t._location,im());return t.storage.makeRequestWithTokens(e,Jl).then(n=>{if(n===null)throw HA();return n})}function DC(t){t._throwIfRoot("deleteObject");const e=bC(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Jl)}function MC(t,e){const n=gC(t._location.path,e),s=new Qe(t._location.bucket,n);return new gn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function LC(t){return/^[A-Za-z]+:\/\//.test(t)}function VC(t,e){return new gn(t,e)}function um(t,e){if(t instanceof Zl){const n=t;if(n._bucket==null)throw qA();const s=new gn(n,n._bucket);return e!=null?um(s,e):s}else return e!==void 0?MC(t,e):t}function jC(t,e){if(e&&LC(e)){if(t instanceof Zl)return VC(t,e);throw Pa("To use ref(service, url), the first argument must be a Storage instance.")}else return um(t,e)}function Wu(t,e){const n=e==null?void 0:e[Yp];return n==null?null:Qe.makeFromBucketSpec(n,t)}function FC(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:ad(r,t.app.options.projectId))}class Zl{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Xp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NA,this._maxUploadRetryTime=OA,this._requests=new Set,r!=null?this._bucket=Qe.makeFromBucketSpec(r,this._host):this._bucket=Wu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qe.makeFromBucketSpec(this._url,e):this._bucket=Wu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gn(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new KA(Jp());{const o=iC(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Gu="@firebase/storage",Ku="0.12.0";/**
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
 */const dm="storage";function Qu(t,e,n){return t=le(t),NC(t,e,n)}function Xu(t){return t=le(t),OC(t)}function UC(t){return t=le(t),DC(t)}function Ra(t,e){return t=le(t),jC(t,e)}function BC(t=La(),e){t=le(t);const s=vi(t,dm).getImmediate({identifier:e}),r=rd("storage");return r&&$C(s,...r),s}function $C(t,e,n,s={}){FC(t,e,n,s)}function qC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Zl(n,s,r,e,yn)}function zC(){cn(new zt(dm,qC,"PUBLIC").setMultipleInstances(!0)),ut(Gu,Ku,""),ut(Gu,Ku,"esm2017")}zC();const HC={apiKey:"AIzaSyBCsaV1L3rkVq03L0O1XL3xfJKcr9x1GBc",authDomain:"opensg-a7142.firebaseapp.com",projectId:"opensg-a7142",storageBucket:"opensg-a7142.appspot.com",messagingSenderId:"856995806997",appId:"1:856995806997:web:8bded6b053678d28f6b31c",measurementId:"G-Y50V66FT94"},ec=ud(HC),Cn=fA(ec),ka=BC(ec),qr=Ev(ec);function fr({category:t,part:e}){return c.jsxs("section",{className:"w-full py-open-3xl flex flex-col items-center gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl",children:[c.jsx("p",{className:"text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl font-open-label",children:t}),c.jsx("h2",{className:"text-open-font-xxl desktop:text-open-font-xxxxl  tablet:text-open-font-xxxxl font-open-heading",children:e})]})}fr.propTypes={category:x.PropTypes.string.isRequired,part:x.PropTypes.string.isRequired};const WC="oxOJ",GC="OpEW",KC="Viul",QC="E7fp",XC="gTgb",YC="A7MS",JC="d7mZ",ZC="-Hm-",eP="JAJr",tP="xA7c",nP="c2-N",sP="VXnu",rP="lxgy",iP="O6H1",oP="AUYk",aP="ED0q",lP="GQlZ",cP="s5L6",uP="_1rE6",dP="gXqM",hP="y5Lk",fP="gNkb",pP="c4eI",mP="yoZ4",gP="ZWUF",yP="fWfJ",Q={NoticeWrapper:WC,pageCount:GC,noticeList:KC,noticeItem:QC,noticeTitle:XC,noticeCreatedAt:YC,listButtons:JC,pageNum:ZC,currentPage:eP,titleWrapper:tP,title:nP,contentWrapper:sP,imageContainer:rP,imagePreview:iP,imageLabel:oP,imageInput:aP,contentText:lP,buttonWrapper:cP,button:uP,detailWrapper:dP,updatedAt:hP,editButton:fP,deleteButton:pP,navWrapper:mP,list:gP,comebackButton:yP};function tc({notice:t,notices:e}){var r,i;const n=(r=t==null?void 0:t.data)!=null&&r.updatedAt?new Date(t.data.updatedAt.seconds*1e3+t.data.updatedAt.nanoseconds/1e6):null,s=n==null?void 0:n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});return c.jsx(en,{to:`/community/${t==null?void 0:t.id}`,state:{currentNotice:t,notices:e},children:c.jsxs("div",{className:Q.noticeItem,children:[c.jsx("h4",{className:Q.noticeTitle,children:(i=t==null?void 0:t.data)==null?void 0:i.title}),c.jsx("time",{className:Q.noticeCreatedAt,dateTime:s,children:s})]})})}tc.propTypes={notices:x.PropTypes.arrayOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.objectOf({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.arrayOf({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired,notice:x.PropTypes.objectOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired};tc.propTypes={notices:x.PropTypes.arrayOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired,notice:x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired}).isRequired};function hm({notices:t,currentNotices:e}){var n;return c.jsx("div",{className:Q.noticeList,children:(n=e==null?void 0:e.slice().toSorted((s,r)=>r.data.index-s.data.index))==null?void 0:n.map(s=>c.jsx(tc,{notice:s,notices:t},s==null?void 0:s.id))})}hm.propTypes={notices:x.PropTypes.arrayOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired,currentNotices:x.PropTypes.arrayOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired};function fm({currentPage:t,pageCount:e,handleFirstPage:n,handlePrevPage:s,handlePageChange:r,handleNextPage:i,handleLastPage:o}){return c.jsxs("div",{className:Q.listButtons,children:[c.jsx("button",{type:"button",onClick:n,className:"",children:"≪"}),c.jsx("button",{type:"button",onClick:s,className:"-rotate-90",children:"⋀"}),Array.from({length:e},(a,l)=>l+1).map(a=>c.jsx("button",{type:"button",onClick:()=>r(a),className:`${Q.pageNum} ${t===a?Q.currentPage:""}`,children:a},a)),c.jsx("button",{type:"button",onClick:i,className:"-rotate-90",children:"⋁"}),c.jsx("button",{type:"button",onClick:o,children:"≫"})]})}fm.propTypes={currentPage:x.PropTypes.number.isRequired,pageCount:x.PropTypes.number.isRequired,handleFirstPage:x.PropTypes.func.isRequired,handlePrevPage:x.PropTypes.func.isRequired,handlePageChange:x.PropTypes.func.isRequired,handleNextPage:x.PropTypes.func.isRequired,handleLastPage:x.PropTypes.func.isRequired};function pm({sortedNotices:t}){const[e,n]=A.useState(1),s=6,r=t==null?void 0:t.slice((e-1)*s,e*s),i=Math.ceil(t.length/s),o=f=>n(f),a=()=>{e>1&&n(e-1)},l=()=>{e<i&&n(e+1)},u=()=>{n(1)},d=()=>{n(i)},h={currentPage:e,pageCount:Math.ceil(t.length/s),handleFirstPage:u,handlePrevPage:a,handlePageChange:o,handleNextPage:l,handleLastPage:d};return c.jsxs("section",{className:Q.NoticeWrapper,children:[c.jsx("h3",{className:"sr-only",children:"커뮤니티 리스트"}),c.jsxs("p",{className:Q.pageCount,children:["Total: ",t==null?void 0:t.length," [",e," / ",h.pageCount,"]"]}),c.jsx(hm,{notices:t,currentNotices:r}),c.jsx(fm,{...h})]})}pm.propTypes={sortedNotices:x.PropTypes.arrayOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired};Yu({key:"authState",default:null,dangerouslyAllowMutability:!0});const io=Yu({key:"isLoggedInState",default:!1});function _P(){const[t,e]=A.useState([]),n=Na(io),s=Gs();A.useEffect(()=>{(async()=>{try{const a=await Qp(ba(Cn,"community")),l=[];a.forEach(u=>{l.push({id:u.id,data:u.data()})}),e(l)}catch(a){X.error(a)}})()},[]);const r=t==null?void 0:t.slice().toSorted((o,a)=>a.data.index-o.data.index),i=()=>{s("write",{state:{notices:r}})};return c.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[c.jsx(fr,{category:"Support",part:"커뮤니티"}),c.jsx("div",{className:`w-full flex justify-end
      p-open-gutter-mobile
      tablet:p-open-gutter-desktop desktop:p-open-gutter-desktop  animate-bounce`,children:n?c.jsx("button",{type:"button",className:"p-open-lg tablet:p-open-xl desktop:p-open-xl text-open-font-medium tablet:text-open-font-large desktop:text-open-font-xl bg-slate-400 -text--openfoundation-black rounded-md",onClick:i,children:"글쓰러 가기"}):""}),c.jsx(pm,{sortedNotices:r})]})}function nc({currentNotice:t,nextNotice:e,prevNotice:n,notices:s,params:r}){var f,p,m,_,g,y,E,v,w;const i=Gs(),o=Na(io),a=(f=t==null?void 0:t.data)!=null&&f.updatedAt?new Date(t.data.updatedAt.seconds*1e3+t.data.updatedAt.nanoseconds/1e6):null,l=a==null?void 0:a.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),u=()=>{i(`/community/${t==null?void 0:t.id}/edit`,{state:{currentNotice:t,notices:s}})},d=async()=>{try{const S=gi(Cn,"community",r.id),R=await Ca(S);if(await AA(S),R.exists()){const{imageUrl:j}=R.data();if(j){const O=Ra(ka,`images/community/${r.id}`);await UC(O)}}X.success("글이 삭제되었습니다."),i("/community")}catch{X.error("글 삭제 중 오류가 발생했습니다.")}},h=()=>{i("/community")};return t?c.jsxs("section",{className:Q.detailWrapper,children:[c.jsxs("div",{className:Q.titleWrapper,children:[c.jsx("h3",{className:Q.title,children:(p=t==null?void 0:t.data)==null?void 0:p.title}),c.jsx("time",{className:Q.updatedAt,dateTime:l,children:l})]}),c.jsx("div",{className:Q.buttonWrapper,children:o?c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",className:`${Q.button} ${Q.editButton}`,onClick:u,children:"수정"}),c.jsx("button",{type:"button",className:`${Q.button} ${Q.deleteButton}`,onClick:d,children:"삭제"})]}):""}),c.jsxs("div",{className:Q.contentWrapper,children:[c.jsx("img",{src:(m=t==null?void 0:t.data)==null?void 0:m.imageUrl,alt:(_=t==null?void 0:t.data)==null?void 0:_.title,className:Q.imagePreview}),c.jsx("p",{className:Q.contentText,children:(g=t==null?void 0:t.data)==null?void 0:g.content})]}),c.jsxs("ul",{className:Q.navWrapper,children:[c.jsx("li",{className:Q.list,children:e?c.jsxs(en,{to:`/community/${e==null?void 0:e.id}`,state:{currentNotice:e,notices:s},className:"flex gap-open-lg",children:[c.jsx("span",{className:"font-semibold",children:"↑   다음 글"}),c.jsx("span",{children:(y=e==null?void 0:e.data)==null?void 0:y.title})]}):c.jsxs(en,{to:"#",className:"flex gap-open-lg",onClick:()=>X("다음 글이 없습니다."),children:[" ",c.jsx("span",{className:"font-semibold",children:"↑   다음 글"}),e&&c.jsx("span",{children:(E=e==null?void 0:e.data)==null?void 0:E.title}),!e&&c.jsx("span",{children:"다음 글이 없습니다."})]})}),c.jsx("li",{className:Q.list,children:n?c.jsxs(en,{to:`/community/${n==null?void 0:n.id}`,state:{currentNotice:n,notices:s},className:"flex gap-open-lg",children:[c.jsx("span",{className:"font-semibold",children:"↓   이전 글"}),c.jsx("span",{children:(v=n==null?void 0:n.data)==null?void 0:v.title})]}):c.jsxs(en,{to:"#",className:"flex gap-open-lg",onClick:()=>X("이전 글이 없습니다."),children:[" ",c.jsx("span",{className:"font-semibold",children:"↓   이전 글"}),n&&c.jsx("span",{children:(w=n==null?void 0:n.data)==null?void 0:w.title}),!n&&c.jsx("span",{children:"이전 글이 없습니다."})]})})]}),c.jsxs("button",{type:"button",className:Q.comebackButton,onClick:h,children:[" ",c.jsx("span",{className:"block font-open-highlight",children:"목록으로"}),c.jsx("span",{className:"font-extralight",children:"> "}),"  "," "]})]}):c.jsx("div",{children:"Loading..."})}nc.propTypes={currentNotice:x.PropTypes.shape({id:x.PropTypes.string,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.objectOf({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired}),nextNotice:x.PropTypes.shape({id:x.PropTypes.string,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})})}),prevNotice:x.PropTypes.shape({id:x.PropTypes.string,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})})}),notices:x.PropTypes.arrayOf(x.PropTypes.shape({id:x.PropTypes.string.isRequired,data:x.PropTypes.shape({index:x.PropTypes.number,title:x.PropTypes.string,content:x.PropTypes.string,imageUrl:x.PropTypes.string,updatedAt:x.PropTypes.shape({seconds:x.PropTypes.number,nanoseconds:x.PropTypes.number})}).isRequired})).isRequired,params:x.PropTypes.shape({id:x.PropTypes.string.isRequired}).isRequired};nc.defaultProps={currentNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}},nextNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}},prevNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}}};function vP(){const t=Hs(),e=Ws(),[n,s]=A.useState([]),[r,i]=A.useState(null),[o,a]=A.useState(-1),[l,u]=A.useState(null),[d,h]=A.useState(null);return A.useEffect(()=>{(async()=>{const{currentNotice:p,notices:m}=t.state||{};if(p){i(p);const _=m.findIndex(E=>(E==null?void 0:E.id)===(e==null?void 0:e.id));a(_);const g=_>0?m[_-1]:null,y=_<m.length-1?m[_+1]:null;s(m),u(g),h(y)}})()},[t.state,e.id]),c.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[c.jsx(fr,{category:"Support",part:"커뮤니티"}),c.jsx(nc,{notices:n,currentNotice:r,params:e,nextNotice:l,prevNotice:d})]})}function mm({title:t,setTitle:e,content:n,setContent:s,imagePreview:r,setImagePreview:i,selectedFile:o,setSelectedFile:a}){const l=h=>{e(h.target.value)},u=h=>{s(h.target.value)},d=h=>{const f=h.target.files[0];if(f&&f.type.startsWith("image/")){const m=new FileReader;m.onload=()=>{i(m.result)},m.readAsDataURL(f)}else i(null);a(f);const p=document.getElementById("fileName");p&&(p.value=f?f.name:"첨부파일")};return c.jsxs(c.Fragment,{children:[c.jsx("h3",{className:"sr-only",children:"커뮤니티 폼 입력 섹션"}),c.jsx("div",{className:Q.titleWrapper,children:c.jsx("input",{type:"text",placeholder:"제목을 입력하세요.",className:Q.title,value:t,onChange:l})}),c.jsxs("div",{className:Q.contentWrapper,children:[c.jsxs("div",{className:Q.imageContainer,children:[r?c.jsxs(c.Fragment,{children:[c.jsx("img",{src:r,alt:"이미지 미리보기",className:Q.imagePreview}),c.jsx("label",{htmlFor:"file",className:Q.imageLabel,children:"이미지 변경"})]}):c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"text",value:o?o.name:"첨부파일",id:"fileName",placeholder:"첨부파일",onChange:()=>{},className:Q.imageInput}),c.jsx("label",{htmlFor:"file",className:Q.imageLabel,children:"파일 찾기"})]}),c.jsx("input",{type:"file",id:"file",onChange:d,className:"w-0 h-0"})]}),c.jsx("textarea",{placeholder:"내용을 입력해주세요.",rows:10,className:Q.contentText,value:n,onChange:u})]})]})}mm.propTypes={title:T.string.isRequired,setTitle:T.func.isRequired,content:T.string.isRequired,setContent:T.func.isRequired,imagePreview:T.string.isRequired,setImagePreview:T.func.isRequired,selectedFile:T.shape({name:T.string,type:T.string}).isRequired,setSelectedFile:T.func.isRequired};function gm({isEditing:t,handleSave:e}){const n=Gs(),s=()=>{X.done("변경을 취소했습니다."),n(-1)};return c.jsxs("section",{className:Q.buttonWrapper,children:[c.jsx("h3",{className:"sr-only",children:"커뮤니티 폼 버튼 섹션"}),c.jsxs("button",{type:"button",className:`${Q.button} bg-blue-400`,onClick:e,children:[" ",c.jsxs("span",{className:"block font-medium",children:[t?"수정하기":"등록하기"," "]})]}),c.jsxs("button",{type:"button",className:`${Q.button} bg-red-400`,onClick:s,children:[" ",c.jsx("span",{className:"block font-medium",children:"취소하기"})]})]})}gm.propTypes={isEditing:x.PropTypes.bool.isRequired,handleSave:x.PropTypes.func.isRequired};function oo({isEditing:t=!1,data:e=null}){const[n,s]=A.useState(""),[r,i]=A.useState(""),[o,a]=A.useState(null),[l,u]=A.useState(null),d=Gs(),h=Hs(),{currentNotice:f,notices:p}=h.state||{},{id:m}=Ws();A.useEffect(()=>{t&&e&&(s(e.title),i(e.content),u(e.imageUrl))},[t,f]);const _=async()=>{try{const g=await Qp(ba(Cn,"community")),y=g.size>0?g.size-1:0;if(t){const E=gi(Cn,"community",m);if(await jo(E,{title:n,content:r,updatedAt:Fo()}),o){const S=Ra(ka,`images/community/${m}`);await Qu(S,o);const R=await Xu(S);await jo(E,{imageUrl:R})}X.success("글이 수정되었습니다.");const w=(await Ca(E)).data();d(`/community/${m}`,{state:{notices:p,currentNotice:{id:m,data:w}}})}else{const E=await CA(ba(Cn,"community"),{index:y,title:n,content:r,imageUrl:null,updatedAt:Fo()});let v;if(o){const j=Ra(ka,`images/community/${E.id}`);await Qu(j,o),v=await Xu(j);const O=gi(Cn,"community",E.id);await jo(O,{imageUrl:v})}const w=[...p,{id:E.id,data:{index:y,title:n,content:r,imageUrl:o?v:null,updatedAt:Fo()}}];X.success("글이 등록되었습니다.");const R=(await Ca(E)).data();d(`/community/${E.id}`,{state:{notices:w==null?void 0:w.slice().toSorted((j,O)=>O.data.index-j.data.index),currentNotice:{id:E.id,data:R}}})}}catch{X.error("변경 실패하였습니다. 다시 한번 확인해주세요.")}};return c.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[c.jsx(fr,{category:"Support",part:"커뮤니티"}),c.jsxs("div",{className:"flex flex-col px-open-gutter-mobile desktop:px-open-gutter-desktop ",children:[c.jsx(mm,{title:n,setTitle:s,content:r,setContent:i,selectedFile:o,setSelectedFile:a,imagePreview:l,setImagePreview:u}),c.jsx(gm,{isEditing:t,handleSave:_})]})]})}oo.propTypes={isEditing:T.bool,data:T.shape({index:T.number,title:T.string,content:T.string,imageUrl:T.string,updatedAt:T.shape({seconds:T.number,nanoseconds:T.number})})};oo.defaultProps={isEditing:!1,data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}};function TP(){const t=Hs(),{currentNotice:e}=t.state||{};return c.jsx(oo,{isEditing:!0,data:e==null?void 0:e.data})}const wP="mi4i",EP="F4Jg",xP="BmOe",SP="cZxw",IP="_7vaJ",bP="DzRC",AP="OV73",CP="Owmc",Je={container:wP,section:EP,form:xP,inputWrapper:SP,label:IP,input:bP,button:AP,buttonWrapper:CP};function PP(){const[t,e]=A.useState(""),[n,s]=A.useState(""),r=Na(io),i=Gs(),o=d=>e(d.target.value),a=d=>s(d.target.value),l=async d=>{d.preventDefault();try{await i_(qr,t,n),await o_(qr,za),i("/community")}catch(h){X(h)}},u=()=>{u_(qr),e(""),s("")};return c.jsxs("div",{className:Je.container,children:[c.jsx(fr,{category:"Admin",part:"관리자 페이지"}),c.jsx("section",{className:Je.section,children:r?c.jsxs("div",{className:Je.buttonWrapper,children:[c.jsx("h3",{className:"text-open-font-xl",children:"환영합니다, 관리자님!"}),c.jsx("button",{type:"button",onClick:u,className:Je.button,children:"로그아웃"})]}):c.jsxs("form",{onSubmit:l,className:Je.form,children:[c.jsxs("div",{className:Je.inputWrapper,children:[c.jsx("label",{htmlFor:"id",className:Je.label,children:"아이디"}),c.jsx("input",{type:"text",id:"id",name:"id",onChange:o,placeholder:"아이디를 입력하세요",className:Je.input})]}),c.jsxs("div",{className:Je.inputWrapper,children:[c.jsx("label",{htmlFor:"pw",className:Je.label,children:"비밀번호"}),c.jsx("input",{type:"password",id:"pw",name:"pw",onChange:a,placeholder:"비밀번호를 입력하세요",className:Je.input})]}),c.jsx("input",{type:"submit",value:"로그인",className:Je.button})]})})]})}const RP=Im(bm(c.jsxs(xe,{path:"/",element:c.jsx(nT,{}),children:[c.jsx(xe,{index:!0,element:c.jsx(uT,{})}),c.jsx(xe,{path:"/about",element:c.jsx(sT,{})}),c.jsx(xe,{path:"/history",element:c.jsx(rE,{})}),c.jsx(xe,{path:"/team",element:c.jsx(iE,{})}),c.jsx(xe,{path:"/location",element:c.jsx(oE,{})}),c.jsx(xe,{path:"/solutions/:id",element:c.jsx(KE,{})}),c.jsx(xe,{path:"/machines/:id",element:c.jsx(Kc,{})}),c.jsx(xe,{path:"/devices/:id",element:c.jsx(Kc,{})}),c.jsx(xe,{path:"/industries/:id",element:c.jsx(Gx,{})}),c.jsx(xe,{path:"/library",element:c.jsx(Px,{})}),c.jsx(xe,{path:"/contact",element:c.jsx(E0,{})}),c.jsx(xe,{path:"/community",element:c.jsx(_P,{})}),c.jsx(xe,{path:"/community/:id",element:c.jsx(vP,{})}),c.jsx(xe,{path:"/community/write",element:c.jsx(oo,{})}),c.jsx(xe,{path:"/community/:id/edit",element:c.jsx(TP,{})}),c.jsx(xe,{path:"/admin",element:c.jsx(PP,{})})]})));function kP(){const t=wm(io);return A.useEffect(()=>{const e=c_(qr,n=>{t(!!n)});return()=>e()},[t]),c.jsx(Am,{router:RP})}$o.createRoot(document.getElementById("root")).render(c.jsx(z.StrictMode,{children:c.jsx(Em,{children:c.jsx(kP,{})})}));
