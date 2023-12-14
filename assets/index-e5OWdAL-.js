import{r as x,d as im,b as q,g as om}from"./react-t7nT_heO.js";import{R as qu,a as Sa,b as am,c as lm}from"./extra-Y9wuK8-d.js";import{L as er,S as cm,O as um,N as wn,u as di,a as Ur,b as ba,c as dm,d as hm,R as Ee,e as fm}from"./reactRouter-ZjUXAwj0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var zu={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=x,mm=Symbol.for("react.element"),gm=Symbol.for("react.fragment"),_m=Object.prototype.hasOwnProperty,ym=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function Hu(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_m.call(e,r)&&!vm.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:mm,type:t,key:i,ref:o,props:s,_owner:ym.current}}hi.Fragment=gm;hi.jsx=Hu;hi.jsxs=Hu;zu.exports=hi;var h=zu.exports,Lo={},Xl=im;Lo.createRoot=Xl.createRoot,Lo.hydrateRoot=Xl.hydrateRoot;var Yl={};/**
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
 */const Wu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Tm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new wm;const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const m=c<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Em=function(t){const e=Wu(t);return Gu.encodeByteArray(e,!0)},Vs=function(t){return Em(t).replace(/\./g,"")},Ku=function(t){try{return Gu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sm=()=>Im().__FIREBASE_DEFAULTS__,bm=()=>{if(typeof process>"u"||typeof Yl>"u")return;const t=Yl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Am=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ku(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return Sm()||bm()||Am()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qu=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xu=t=>{const e=Qu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yu=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},Ju=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vs(JSON.stringify(n)),Vs(JSON.stringify(o)),a].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function km(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nm(){try{return typeof indexedDB=="object"}catch{return!1}}function Om(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dm="FirebaseError";class ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dm,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ft(s,a,r)}}function Lm(t,e){return t.replace(Mm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mm=/\{\$([^}]+)}/g;function Vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Jl(i)&&Jl(o)){if(!Fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Jl(t){return t!==null&&typeof t=="object"}/**
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
 */function $r(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fm(t,e){const n=new jm(t,e);return n.subscribe.bind(n)}class jm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Um(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=to),s.error===void 0&&(s.error=to),s.complete===void 0&&(s.complete=to);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Um(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function to(){}/**
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
 */function ae(t){return t&&t._delegate?t._delegate:t}class jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Bm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qm(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$m(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $m(t){return t===Gt?void 0:t}function qm(t){return t.instantiationMode==="EAGER"}/**
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
 */class zm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Hm={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Wm=J.INFO,Gm={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Km=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Gm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pa{constructor(e){this.name=e,this._logLevel=Wm,this._logHandler=Km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Qm=(t,e)=>e.some(n=>t instanceof n);let Zl,ec;function Xm(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ym(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ed=new WeakMap,Mo=new WeakMap,td=new WeakMap,no=new WeakMap,Ra=new WeakMap;function Jm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ed.set(n,t)}).catch(()=>{}),Ra.set(e,t),e}function Zm(t){if(Mo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Mo.set(t,e)}let Vo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||td.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eg(t){Vo=t(Vo)}function tg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ro(this),e,...n);return td.set(r,e.sort?e.sort():[e]),Mt(r)}:Ym().includes(t)?function(...e){return t.apply(ro(this),e),Mt(ed.get(this))}:function(...e){return Mt(t.apply(ro(this),e))}}function ng(t){return typeof t=="function"?tg(t):(t instanceof IDBTransaction&&Zm(t),Qm(t,Xm())?new Proxy(t,Vo):t)}function Mt(t){if(t instanceof IDBRequest)return Jm(t);if(no.has(t))return no.get(t);const e=ng(t);return e!==t&&(no.set(t,e),Ra.set(e,t)),e}const ro=t=>Ra.get(t);function rg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sg=["get","getKey","getAll","getAllKeys","count"],ig=["put","add","delete","clear"],so=new Map;function tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(so.get(e))return so.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ig.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sg.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return so.set(e,i),i}eg(t=>({...t,get:(e,n,r)=>tc(e,n)||t.get(e,n,r),has:(e,n)=>!!tc(e,n)||t.has(e,n)}));/**
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
 */class og{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ag(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ag(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fo="@firebase/app",nc="0.9.25";/**
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
 */const tn=new Pa("@firebase/app"),lg="@firebase/app-compat",cg="@firebase/analytics-compat",ug="@firebase/analytics",dg="@firebase/app-check-compat",hg="@firebase/app-check",fg="@firebase/auth",pg="@firebase/auth-compat",mg="@firebase/database",gg="@firebase/database-compat",_g="@firebase/functions",yg="@firebase/functions-compat",vg="@firebase/installations",Tg="@firebase/installations-compat",wg="@firebase/messaging",Eg="@firebase/messaging-compat",Ig="@firebase/performance",Sg="@firebase/performance-compat",bg="@firebase/remote-config",Ag="@firebase/remote-config-compat",Pg="@firebase/storage",Rg="@firebase/storage-compat",Cg="@firebase/firestore",xg="@firebase/firestore-compat",kg="firebase",Ng="10.7.1";/**
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
 */const jo="[DEFAULT]",Og={[Fo]:"fire-core",[lg]:"fire-core-compat",[ug]:"fire-analytics",[cg]:"fire-analytics-compat",[hg]:"fire-app-check",[dg]:"fire-app-check-compat",[fg]:"fire-auth",[pg]:"fire-auth-compat",[mg]:"fire-rtdb",[gg]:"fire-rtdb-compat",[_g]:"fire-fn",[yg]:"fire-fn-compat",[vg]:"fire-iid",[Tg]:"fire-iid-compat",[wg]:"fire-fcm",[Eg]:"fire-fcm-compat",[Ig]:"fire-perf",[Sg]:"fire-perf-compat",[bg]:"fire-rc",[Ag]:"fire-rc-compat",[Pg]:"fire-gcs",[Rg]:"fire-gcs-compat",[Cg]:"fire-fst",[xg]:"fire-fst-compat","fire-js":"fire-js",[kg]:"fire-js-all"};/**
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
 */const js=new Map,Uo=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(Uo.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,t);for(const n of js.values())Dg(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Br("app","Firebase",Lg);/**
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
 */class Mg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=Ng;function nd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(n||(n=Yu()),!n)throw Vt.create("no-options");const i=js.get(s);if(i){if(Fs(n,i.options)&&Fs(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const o=new zm(s);for(const l of Uo.values())o.addComponent(l);const a=new Mg(n,r,o);return js.set(s,a),a}function Ca(t=jo){const e=js.get(t);if(!e&&t===jo&&Yu())return nd();if(!e)throw Vt.create("no-app",{appName:t});return e}function ot(t,e,n){var r;let s=(r=Og[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}nn(new jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vg="firebase-heartbeat-database",Fg=1,Tr="firebase-heartbeat-store";let io=null;function rd(){return io||(io=rg(Vg,Fg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tr)}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),io}async function jg(t){try{return await(await rd()).transaction(Tr).objectStore(Tr).get(sd(t))}catch(e){if(e instanceof ft)tn.warn(e.message);else{const n=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function rc(t,e){try{const r=(await rd()).transaction(Tr,"readwrite");await r.objectStore(Tr).put(e,sd(t)),await r.done}catch(n){if(n instanceof ft)tn.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function sd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ug=1024,Bg=30*24*60*60*1e3;class $g{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sc(),{heartbeatsToSend:r,unsentEntries:s}=qg(this._heartbeatsCache.heartbeats),i=Vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sc(){return new Date().toISOString().substring(0,10)}function qg(t,e=Ug){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ic(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ic(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nm()?Om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ic(t){return Vs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hg(t){nn(new jt("platform-logger",e=>new og(e),"PRIVATE")),nn(new jt("heartbeat",e=>new $g(e),"PRIVATE")),ot(Fo,nc,t),ot(Fo,nc,"esm2017"),ot("fire-js","")}Hg("");function xa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function id(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wg=id,od=new Br("auth","Firebase",id());/**
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
 */const Us=new Pa("@firebase/auth");function Gg(t,...e){Us.logLevel<=J.WARN&&Us.warn(`Auth (${dn}): ${t}`,...e)}function bs(t,...e){Us.logLevel<=J.ERROR&&Us.error(`Auth (${dn}): ${t}`,...e)}/**
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
 */function et(t,...e){throw ka(t,...e)}function at(t,...e){return ka(t,...e)}function Kg(t,e,n){const r=Object.assign(Object.assign({},Wg()),{[e]:n});return new Br("auth","Firebase",r).create(e,{appName:t.name})}function ka(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return od.create(t,...e)}function U(t,e,...n){if(!t)throw ka(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bs(e),new Error(e)}function wt(t,e){t||gt(e)}/**
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
 */function Bo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qg(){return oc()==="http:"||oc()==="https:"}function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Xg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qg()||Cm()||"connection"in navigator)?navigator.onLine:!0}function Yg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Rm()||xm()}get(){return Xg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Na(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ad{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zg=new qr(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qt(t,e,n,r,s={}){return ld(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=$r(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ad.fetch()(cd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function ld(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jg),e);try{const s=new t_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw as(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw as(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw as(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Kg(t,u,c);et(t,u)}}catch(s){if(s instanceof ft)throw s;et(t,"network-request-failed",{message:String(s)})}}async function pi(t,e,n,r,s={}){const i=await qt(t,e,n,r,s);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function cd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Na(t.config,s):`${t.config.apiScheme}://${s}`}function e_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class t_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Zg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function as(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(t,e,r);return s.customData._tokenResponse=n,s}function ac(t){return t!==void 0&&t.enterprise!==void 0}class n_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return e_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function r_(t,e){return qt(t,"GET","/v2/recaptchaConfig",hn(t,e))}/**
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
 */async function s_(t,e){return qt(t,"POST","/v1/accounts:delete",e)}async function i_(t,e){return qt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o_(t,e=!1){const n=ae(t),r=await n.getIdToken(e),s=Oa(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:cr(oo(s.auth_time)),issuedAtTime:cr(oo(s.iat)),expirationTime:cr(oo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oo(t){return Number(t)*1e3}function Oa(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ku(n);return s?JSON.parse(s):(bs("Failed to decode base64 JWT payload"),null)}catch(s){return bs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function a_(t){const e=Oa(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ft&&l_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class c_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wr(t,i_(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?h_(i.providerUserInfo):[],a=d_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ud(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function u_(t){const e=ae(t);await Bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function h_(t){return t.map(e=>{var{providerId:n}=e,r=xa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function f_(t,e){const n=await ld(t,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=cd(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ad.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p_(t,e){return qt(t,"POST","/v2/accounts:revokeToken",hn(t,e))}/**
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
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):a_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await f_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Er;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
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
 */function At(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ud(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wr(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return o_(this,e)}reload(){return u_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wr(this,s_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:T,isAnonymous:S,providerData:C,stsTokenManager:V}=n;U(v&&V,e,"internal-error");const N=Er.fromJSON(this.name,V);U(typeof v=="string",e,"internal-error"),At(d,e.name),At(f,e.name),U(typeof T=="boolean",e,"internal-error"),U(typeof S=="boolean",e,"internal-error"),At(p,e.name),At(m,e.name),At(y,e.name),At(g,e.name),At(_,e.name),At(w,e.name);const R=new Jt({uid:v,auth:e,email:f,emailVerified:T,displayName:d,isAnonymous:S,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:N,createdAt:_,lastLoginAt:w});return C&&Array.isArray(C)&&(R.providerData=C.map(P=>Object.assign({},P))),g&&(R._redirectEventId=g),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new Er;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bs(i),i}}/**
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
 */const lc=new Map;function _t(t){wt(t instanceof Function,"Expected a class definition");let e=lc.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lc.set(t,e),e)}/**
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
 */class dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dd.type="NONE";const cc=dd;/**
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
 */function As(t,e,n){return`firebase:${t}:${e}:${n}`}class bn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=As(this.userKey,s.apiKey,i),this.fullPersistenceKey=As("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bn(_t(cc),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||_t(cc);const o=As(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Jt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new bn(i,e,r))}}/**
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
 */function uc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gd(e))return"Blackberry";if(_d(e))return"Webos";if(Da(e))return"Safari";if((e.includes("chrome/")||fd(e))&&!e.includes("edge/"))return"Chrome";if(md(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hd(t=Le()){return/firefox\//i.test(t)}function Da(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fd(t=Le()){return/crios\//i.test(t)}function pd(t=Le()){return/iemobile/i.test(t)}function md(t=Le()){return/android/i.test(t)}function gd(t=Le()){return/blackberry/i.test(t)}function _d(t=Le()){return/webos/i.test(t)}function mi(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function m_(t=Le()){var e;return mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function g_(){return km()&&document.documentMode===10}function yd(t=Le()){return mi(t)||md(t)||_d(t)||gd(t)||/windows phone/i.test(t)||pd(t)}function __(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vd(t,e=[]){let n;switch(t){case"Browser":n=uc(Le());break;case"Worker":n=`${uc(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dn}/${r}`}/**
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
 */class y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function v_(t,e={}){return qt(t,"GET","/v2/passwordPolicy",hn(t,e))}/**
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
 */const T_=6;class w_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:T_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class E_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v_(this),n=new w_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await p_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_t(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bn(t){return ae(t)}class dc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function I_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Td(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",I_().appendChild(r)})}function S_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const b_="https://www.google.com/recaptcha/enterprise.js?render=",A_="recaptcha-enterprise",P_="NO_RECAPTCHA";class R_{constructor(e){this.type=A_,this.auth=Bn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{r_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new n_(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;ac(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(P_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ac(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Td(b_+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function hc(t,e,n,r=!1){const s=new R_(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await hc(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function C_(t,e){const n=fi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fs(i,e??{}))return s;et(s,"already-initialized")}return n.initialize({options:e})}function x_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k_(t,e,n){const r=Bn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=wd(e),{host:o,port:a}=N_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||O_()}function wd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function N_(t){const e=wd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pc(o)}}}function pc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class La{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}async function D_(t,e){return qt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function L_(t,e){return pi(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}/**
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
 */async function M_(t,e){return pi(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function V_(t,e){return pi(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
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
 */class Ir extends La{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ir(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ir(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,n,"signInWithPassword",L_);case"emailLink":return M_(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,r,"signUpPassword",D_);case"emailLink":return V_(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function An(t,e){return pi(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
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
 */const F_="http://localhost";class rn extends La{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xa(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return An(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,An(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,An(e,n)}buildRequest(){const e={requestUri:F_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$r(n)}return e}}/**
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
 */function j_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U_(t){const e=tr(nr(t)).link,n=e?tr(nr(e)).deep_link_id:null,r=tr(nr(t)).deep_link_id;return(r?tr(nr(r)).link:null)||r||n||e||t}class Ma{constructor(e){var n,r,s,i,o,a;const l=tr(nr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=j_((s=l.mode)!==null&&s!==void 0?s:null);U(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=U_(e);try{return new Ma(n)}catch{return null}}}/**
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
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,n){return Ir._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ma.parseLink(n);return U(r,"argument-error"),Ir._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zr extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends zr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class xt extends zr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class kt extends zr{constructor(){super("twitter.com")}static credential(e,n){return rn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=mc(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mc(r);return new kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $s extends ft{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $s(e,n,r,s)}}function Id(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(t,i,e,r):i})}async function B_(t,e,n=!1){const r=await wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}/**
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
 */async function $_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await wr(t,Id(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Oa(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),kn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&et(r,"user-mismatch"),i}}/**
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
 */async function Sd(t,e,n=!1){const r="signIn",s=await Id(t,r,e),i=await kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function q_(t,e){return Sd(Bn(t),e)}/**
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
 */async function z_(t){const e=Bn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function H_(t,e,n){return q_(ae(t),$n.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&z_(t),r})}/**
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
 */function W_(t,e){return ae(t).setPersistence(e)}function G_(t,e,n,r){return ae(t).onIdTokenChanged(e,n,r)}function K_(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function Q_(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function X_(t){return ae(t).signOut()}const qs="__sak";/**
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
 */class bd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qs,"1"),this.storage.removeItem(qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Y_(){const t=Le();return Da(t)||mi(t)}const J_=1e3,Z_=10;class Ad extends bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y_()&&__(),this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);g_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ad.type="LOCAL";const ey=Ad;/**
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
 */class Pd extends bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pd.type="SESSION";const Va=Pd;/**
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
 */function ty(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ty(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gi.receivers=[];/**
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
 */function Fa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ny{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Fa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function ry(t){lt().location.href=t}/**
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
 */function Rd(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function sy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oy(){return Rd()?self:null}/**
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
 */const Cd="firebaseLocalStorageDb",ay=1,zs="firebaseLocalStorage",xd="fbase_key";class Hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _i(t,e){return t.transaction([zs],e?"readwrite":"readonly").objectStore(zs)}function ly(){const t=indexedDB.deleteDatabase(Cd);return new Hr(t).toPromise()}function $o(){const t=indexedDB.open(Cd,ay);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zs,{keyPath:xd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zs)?e(r):(r.close(),await ly(),e(await $o()))})})}async function gc(t,e,n){const r=_i(t,!0).put({[xd]:e,value:n});return new Hr(r).toPromise()}async function cy(t,e){const n=_i(t,!1).get(e),r=await new Hr(n).toPromise();return r===void 0?null:r.value}function _c(t,e){const n=_i(t,!0).delete(e);return new Hr(n).toPromise()}const uy=800,dy=3;class kd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $o(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gi._getInstance(oy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sy(),!this.activeServiceWorker)return;this.sender=new ny(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $o();return await gc(e,qs,"1"),await _c(e,qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cy(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_c(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_i(s,!1).getAll();return new Hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kd.type="LOCAL";const hy=kd;new qr(3e4,6e4);/**
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
 */function fy(t,e){return e?_t(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ja extends La{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,n){return An(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function py(t){return Sd(t.auth,new ja(t),t.bypassAuthState)}function my(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),$_(n,new ja(t),t.bypassAuthState)}async function gy(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),B_(n,new ja(t),t.bypassAuthState)}/**
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
 */class Nd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return py;case"linkViaPopup":case"linkViaRedirect":return gy;case"reauthViaPopup":case"reauthViaRedirect":return my;default:et(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _y=new qr(2e3,1e4);class En extends Nd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_y.get())};e()}}En.currentPopupAction=null;/**
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
 */const yy="pendingRedirect",Ps=new Map;class vy extends Nd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const r=await Ty(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ty(t,e){const n=Iy(e),r=Ey(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wy(t,e){Ps.set(t._key(),e)}function Ey(t){return _t(t._redirectPersistence)}function Iy(t){return As(yy,t.config.apiKey,t.name)}async function Sy(t,e,n=!1){const r=Bn(t),s=fy(r,e),o=await new vy(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const by=10*60*1e3;class Ay{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Py(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Od(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=by&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Od({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Py(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Od(t);default:return!1}}/**
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
 */async function Ry(t,e={}){return qt(t,"GET","/v1/projects",e)}/**
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
 */const Cy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xy=/^https?/;async function ky(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ry(t);for(const n of e)try{if(Ny(n))return}catch{}et(t,"unauthorized-domain")}function Ny(t){const e=Bo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xy.test(n))return!1;if(Cy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Oy=new qr(3e4,6e4);function vc(){const t=lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dy(t){return new Promise((e,n)=>{var r,s,i;function o(){vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vc(),n(at(t,"network-request-failed"))},timeout:Oy.get()})}if(!((s=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=lt().gapi)===null||i===void 0)&&i.load)o();else{const a=S_("iframefcb");return lt()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Td(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function Ly(t){return Rs=Rs||Dy(t),Rs}/**
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
 */const My=new qr(5e3,15e3),Vy="__/auth/iframe",Fy="emulator/auth/iframe",jy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function By(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Na(e,Fy):`https://${t.config.authDomain}/${Vy}`,r={apiKey:e.apiKey,appName:t.name,v:dn},s=Uy.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$r(r).slice(1)}`}async function $y(t){const e=await Ly(t),n=lt().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:By(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=lt().setTimeout(()=>{i(o)},My.get());function l(){lt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const qy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zy=500,Hy=600,Wy="_blank",Gy="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ky(t,e,n,r=zy,s=Hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qy),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Le().toLowerCase();n&&(a=fd(c)?Wy:n),hd(c)&&(e=e||Gy,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(m_(c)&&a!=="_self")return Qy(e||"",a),new Tc(null);const d=window.open(e||"",a,u);U(d,t,"popup-blocked");try{d.focus()}catch{}return new Tc(d)}function Qy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Xy="__/auth/handler",Yy="emulator/auth/handler",Jy=encodeURIComponent("fac");async function wc(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:dn,eventId:s};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof zr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Jy}=${encodeURIComponent(l)}`:"";return`${Zy(t)}?${$r(a).slice(1)}${c}`}function Zy({config:t}){return t.emulator?Na(t,Yy):`https://${t.authDomain}/${Xy}`}/**
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
 */const ao="webStorageSupport";class ev{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Va,this._completeRedirectFn=Sy,this._overrideRedirectResult=wy}async _openPopup(e,n,r,s){var i;wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await wc(e,n,r,Bo(),s);return Ky(e,o,Fa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wc(e,n,r,Bo(),s);return ry(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $y(e),r=new Ay(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ao,{type:ao},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ao];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ky(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yd()||Da()||mi()}}const tv=ev;var Ec="@firebase/auth",Ic="1.5.1";/**
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
 */class nv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sv(t){nn(new jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vd(t)},c=new E_(r,s,i,l);return x_(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nn(new jt("auth-internal",e=>{const n=Bn(e.getProvider("auth").getImmediate());return(r=>new nv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Ec,Ic,rv(t)),ot(Ec,Ic,"esm2017")}/**
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
 */const iv=5*60,ov=Ju("authIdTokenMaxAge")||iv;let Sc=null;const av=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ov)return;const s=n==null?void 0:n.token;Sc!==s&&(Sc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lv(t=Ca()){const e=fi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C_(t,{popupRedirectResolver:tv,persistence:[hy,ey,Va]}),r=Ju("authTokenSyncURL");if(r){const i=av(r);K_(n,i,()=>i(n.currentUser)),G_(n,o=>i(o))}const s=Qu("auth");return s&&k_(n,`http://${s}`),n}sv("Browser");function Dd(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Dd(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Ot(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Dd(t))&&(r&&(r+=" "),r+=e);return r}const ur=t=>typeof t=="number"&&!isNaN(t),sn=t=>typeof t=="string",$e=t=>typeof t=="function",Cs=t=>sn(t)||$e(t)?t:null,lo=t=>x.isValidElement(t)||sn(t)||$e(t)||ur(t);function cv(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,n)})})}function yi(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:s=!0,collapseDuration:i=300}=t;return function(o){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=o;const p=r?`${e}--${l}`:e,m=r?`${n}--${l}`:n,y=x.useRef(0);return x.useLayoutEffect(()=>{const g=d.current,_=p.split(" "),w=v=>{v.target===d.current&&(g.dispatchEvent(new Event("d")),g.removeEventListener("animationend",w),g.removeEventListener("animationcancel",w),y.current===0&&v.type!=="animationcancel"&&g.classList.remove(..._))};g.classList.add(..._),g.addEventListener("animationend",w),g.addEventListener("animationcancel",w)},[]),x.useEffect(()=>{const g=d.current,_=()=>{g.removeEventListener("animationend",_),s?cv(g,u,i):u()};f||(c?_():(y.current=1,g.className+=` ${m}`,g.addEventListener("animationend",_)))},[f]),q.createElement(q.Fragment,null,a)}}function bc(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Xe={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},ls=t=>{let{theme:e,type:n,...r}=t;return q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},co={info:function(t){return q.createElement(ls,{...t},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return q.createElement(ls,{...t},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return q.createElement(ls,{...t},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return q.createElement(ls,{...t},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return q.createElement("div",{className:"Toastify__spinner"})}};function uv(t){const[,e]=x.useReducer(p=>p+1,0),[n,r]=x.useState([]),s=x.useRef(null),i=x.useRef(new Map).current,o=p=>n.indexOf(p)!==-1,a=x.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:p=>i.get(p)}).current;function l(p){let{containerId:m}=p;const{limit:y}=a.props;!y||m&&a.containerId!==m||(a.count-=a.queue.length,a.queue=[])}function c(p){r(m=>p==null?[]:m.filter(y=>y!==p))}function u(){const{toastContent:p,toastProps:m,staleId:y}=a.queue.shift();f(p,m,y)}function d(p,m){let{delay:y,staleId:g,..._}=m;if(!lo(p)||function(L){return!s.current||a.props.enableMultiContainer&&L.containerId!==a.props.containerId||i.has(L.toastId)&&L.updateId==null}(_))return;const{toastId:w,updateId:v,data:T}=_,{props:S}=a,C=()=>c(w),V=v==null;V&&a.count++;const N={...S,style:S.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(_).filter(L=>{let[k,$]=L;return $!=null})),toastId:w,updateId:v,data:T,closeToast:C,isIn:!1,className:Cs(_.className||S.toastClassName),bodyClassName:Cs(_.bodyClassName||S.bodyClassName),progressClassName:Cs(_.progressClassName||S.progressClassName),autoClose:!_.isLoading&&(R=_.autoClose,P=S.autoClose,R===!1||ur(R)&&R>0?R:P),deleteToast(){const L=bc(i.get(w),"removed");i.delete(w),Xe.emit(4,L);const k=a.queue.length;if(a.count=w==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),k>0){const $=w==null?a.props.limit:1;if(k===1||$===1)a.displayedToast++,u();else{const Y=$>k?k:$;a.displayedToast=Y;for(let ee=0;ee<Y;ee++)u()}}else e()}};var R,P;N.iconOut=function(L){let{theme:k,type:$,isLoading:Y,icon:ee}=L,fe=null;const Ce={theme:k,type:$};return ee===!1||($e(ee)?fe=ee(Ce):x.isValidElement(ee)?fe=x.cloneElement(ee,Ce):sn(ee)||ur(ee)?fe=ee:Y?fe=co.spinner():(se=>se in co)($)&&(fe=co[$](Ce))),fe}(N),$e(_.onOpen)&&(N.onOpen=_.onOpen),$e(_.onClose)&&(N.onClose=_.onClose),N.closeButton=S.closeButton,_.closeButton===!1||lo(_.closeButton)?N.closeButton=_.closeButton:_.closeButton===!0&&(N.closeButton=!lo(S.closeButton)||S.closeButton);let D=p;x.isValidElement(p)&&!sn(p.type)?D=x.cloneElement(p,{closeToast:C,toastProps:N,data:T}):$e(p)&&(D=p({closeToast:C,toastProps:N,data:T})),S.limit&&S.limit>0&&a.count>S.limit&&V?a.queue.push({toastContent:D,toastProps:N,staleId:g}):ur(y)?setTimeout(()=>{f(D,N,g)},y):f(D,N,g)}function f(p,m,y){const{toastId:g}=m;y&&i.delete(y);const _={content:p,props:m};i.set(g,_),r(w=>[...w,g].filter(v=>v!==y)),Xe.emit(4,bc(_,_.props.updateId==null?"added":"updated"))}return x.useEffect(()=>(a.containerId=t.containerId,Xe.cancelEmit(3).on(0,d).on(1,p=>s.current&&c(p)).on(5,l).emit(2,a),()=>{i.clear(),Xe.emit(3,a)}),[]),x.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(p){const m=new Map,y=Array.from(i.values());return t.newestOnTop&&y.reverse(),y.forEach(g=>{const{position:_}=g.props;m.has(_)||m.set(_,[]),m.get(_).push(g)}),Array.from(m,g=>p(g[0],g[1]))},containerRef:s,isToastActive:o}}function Ac(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Pc(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function dv(t){const[e,n]=x.useState(!1),[r,s]=x.useState(!1),i=x.useRef(null),o=x.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=x.useRef(t),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=t;function p(T){if(t.draggable){T.nativeEvent.type==="touchstart"&&T.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",w),document.addEventListener("touchmove",_),document.addEventListener("touchend",w);const S=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=Ac(T.nativeEvent),o.y=Pc(T.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(T){if(o.boundingRect){const{top:S,bottom:C,left:V,right:N}=o.boundingRect;T.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=V&&o.x<=N&&o.y>=S&&o.y<=C?g():y()}}function y(){n(!0)}function g(){n(!1)}function _(T){const S=i.current;o.canDrag&&S&&(o.didMove=!0,e&&g(),o.x=Ac(T),o.y=Pc(T),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function w(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",w);const T=i.current;if(o.canDrag&&o.didMove&&T){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return s(!0),void t.closeToast();T.style.transition="transform 0.2s, opacity 0.2s",T.style.transform=`translate${t.draggableDirection}(0)`,T.style.opacity="1"}}x.useEffect(()=>{a.current=t}),x.useEffect(()=>(i.current&&i.current.addEventListener("d",y,{once:!0}),$e(t.onOpen)&&t.onOpen(x.isValidElement(t.children)&&t.children.props),()=>{const T=a.current;$e(T.onClose)&&T.onClose(x.isValidElement(T.children)&&T.children.props)}),[]),x.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||g(),window.addEventListener("focus",y),window.addEventListener("blur",g)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",g))}),[t.pauseOnFocusLoss]);const v={onMouseDown:p,onTouchStart:p,onMouseUp:m,onTouchEnd:m};return l&&c&&(v.onMouseEnter=g,v.onMouseLeave=y),f&&(v.onClick=T=>{d&&d(T),o.canCloseOnClick&&u()}),{playToast:y,pauseToast:g,isRunning:e,preventExitTransition:r,toastRef:i,eventHandlers:v}}function Ld(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:s=>{s.stopPropagation(),e(s)},"aria-label":r},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function hv(t){let{delay:e,isRunning:n,closeToast:r,type:s="default",hide:i,className:o,style:a,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=t;const p=i||l&&c===0,m={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(m.transform=`scaleX(${c})`);const y=Ot("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":u}),g=$e(o)?o({rtl:u,type:s,defaultClassName:y}):Ot(y,o);return q.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:g,style:m,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}const fv=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:s}=dv(t),{closeButton:i,children:o,autoClose:a,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:f,position:p,className:m,style:y,bodyClassName:g,bodyStyle:_,progressClassName:w,progressStyle:v,updateId:T,role:S,progress:C,rtl:V,toastId:N,deleteToast:R,isIn:P,isLoading:D,iconOut:L,closeOnClick:k,theme:$}=t,Y=Ot("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":V},{"Toastify__toast--close-on-click":k}),ee=$e(m)?m({rtl:V,position:p,type:c,defaultClassName:Y}):Ot(Y,m),fe=!!C||!a,Ce={closeToast:d,type:c,theme:$};let se=null;return i===!1||(se=$e(i)?i(Ce):x.isValidElement(i)?x.cloneElement(i,Ce):Ld(Ce)),q.createElement(f,{isIn:P,done:R,position:p,preventExitTransition:n,nodeRef:r},q.createElement("div",{id:N,onClick:l,className:ee,...s,style:y,ref:r},q.createElement("div",{...P&&{role:S},className:$e(g)?g({type:c}):Ot("Toastify__toast-body",g),style:_},L!=null&&q.createElement("div",{className:Ot("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},L),q.createElement("div",null,o)),se,q.createElement(hv,{...T&&!fe?{key:`pb-${T}`}:{},rtl:V,theme:$,delay:a,isRunning:e,isIn:P,closeToast:d,hide:u,type:c,style:v,className:w,controlledProgress:fe,progress:C||0})))},vi=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},pv=yi(vi("bounce",!0));yi(vi("slide",!0));yi(vi("zoom"));yi(vi("flip"));const qo=x.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:s}=uv(t),{className:i,style:o,rtl:a,containerId:l}=t;function c(u){const d=Ot("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":a});return $e(i)?i({position:u,rtl:a,defaultClassName:d}):Ot(d,Cs(i))}return x.useEffect(()=>{e&&(e.current=r.current)},[]),q.createElement("div",{ref:r,className:"Toastify",id:l},n((u,d)=>{const f=d.length?{...o}:{...o,pointerEvents:"none"};return q.createElement("div",{className:c(u),style:f,key:`container-${u}`},d.map((p,m)=>{let{content:y,props:g}=p;return q.createElement(fv,{...g,isIn:s(g.toastId),style:{...g.style,"--nth":m+1,"--len":d.length},key:`toast-${g.key}`},y)}))}))});qo.displayName="ToastContainer",qo.defaultProps={position:"top-right",transition:pv,autoClose:5e3,closeButton:Ld,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let uo,Kt=new Map,rr=[],mv=1;function Md(){return""+mv++}function gv(t){return t&&(sn(t.toastId)||ur(t.toastId))?t.toastId:Md()}function dr(t,e){return Kt.size>0?Xe.emit(0,t,e):rr.push({content:t,options:e}),e.toastId}function Hs(t,e){return{...e,type:e&&e.type||t,toastId:gv(e)}}function cs(t){return(e,n)=>dr(e,Hs(t,n))}function Q(t,e){return dr(t,Hs("default",e))}Q.loading=(t,e)=>dr(t,Hs("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Q.promise=function(t,e,n){let r,{pending:s,error:i,success:o}=e;s&&(r=sn(s)?Q.loading(s,n):Q.loading(s.render,{...n,...s}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,f)=>{if(d==null)return void Q.dismiss(r);const p={type:u,...a,...n,data:f},m=sn(d)?{render:d}:d;return r?Q.update(r,{...p,...m}):Q(m.render,{...p,...m}),f},c=$e(t)?t():t;return c.then(u=>l("success",o,u)).catch(u=>l("error",i,u)),c},Q.success=cs("success"),Q.info=cs("info"),Q.error=cs("error"),Q.warning=cs("warning"),Q.warn=Q.warning,Q.dark=(t,e)=>dr(t,Hs("default",{theme:"dark",...e})),Q.dismiss=t=>{Kt.size>0?Xe.emit(1,t):rr=rr.filter(e=>t!=null&&e.options.toastId!==t)},Q.clearWaitingQueue=function(t){return t===void 0&&(t={}),Xe.emit(5,t)},Q.isActive=t=>{let e=!1;return Kt.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Q.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,s){let{containerId:i}=s;const o=Kt.get(i||uo);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:s}=n,i={delay:100,...r,...e,toastId:e.toastId||t,updateId:Md()};i.toastId!==t&&(i.staleId=t);const o=i.render||s;delete i.render,dr(o,i)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(Xe.on(4,t),()=>{Xe.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Xe.on(2,t=>{uo=t.containerId||t,Kt.set(uo,t),rr.forEach(e=>{Xe.emit(0,e.content,e.options)}),rr=[]}).on(3,t=>{Kt.delete(t.containerId||t),Kt.size===0&&Xe.off(0).off(1).off(5)});function _v(){return h.jsxs("header",{role:"banner",className:"fixed h-[96px] flex justify-between items-center w-full py-5 px-[80px] bg-slate-900 text-white font-open-font z-10",children:[h.jsxs("nav",{className:"flex",children:[h.jsxs("h1",{className:"mx-8 text-2xl",children:[" ",h.jsx(er,{to:"/",children:"OPENSG"})]}),h.jsxs("ul",{className:"flex gap-10 my-1",children:[h.jsx("li",{className:"focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}",children:h.jsx(er,{to:"/about",children:"About Us"})}),h.jsx("li",{className:"focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}",children:h.jsx(er,{to:"/solutions",children:"Products"})}),h.jsx("li",{className:"focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}",children:h.jsx(er,{to:"/community",children:"Support"})})]})]}),h.jsxs("ul",{className:"flex gap-10 px-4",children:[h.jsx("li",{className:"focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}",children:"KOR"}),h.jsx("li",{className:"focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}",children:h.jsx("button",{type:"button",children:"hamburger"})})]})]})}function yv(){return h.jsxs(h.Fragment,{children:[h.jsx(_v,{}),h.jsxs("main",{className:"flex justify-center mx-auto font-open-font pt-[96px]",children:[h.jsx(cm,{}),h.jsx(um,{})]}),h.jsx(qo,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}function vv(){return h.jsx("div",{children:"About"})}function Tv(){return h.jsx("div",{children:"Home"})}function Rc(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Ua(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Rc(e[n])&&Rc(t[n])&&Object.keys(e[n]).length>0&&Ua(t[n],e[n])})}const Vd={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function qn(){const t=typeof document<"u"?document:{};return Ua(t,Vd),t}const wv={document:Vd,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function qe(){const t=typeof window<"u"?window:{};return Ua(t,wv),t}function Ev(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function Iv(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Nn(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function mt(){return Date.now()}function Sv(t){const e=qe();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function bv(t,e){e===void 0&&(e="x");const n=qe();let r,s,i;const o=Sv(t);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),i=new n.WebKitCSSMatrix(s==="none"?"":s)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?s=i.m41:r.length===16?s=parseFloat(r[12]):s=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?s=i.m42:r.length===16?s=parseFloat(r[13]):s=parseFloat(r[5])),s||0}function us(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Av(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function ze(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Av(r)){const s=Object.keys(Object(r)).filter(i=>e.indexOf(i)<0);for(let i=0,o=s.length;i<o;i+=1){const a=s[i],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(us(t[a])&&us(r[a])?r[a].__swiper__?t[a]=r[a]:ze(t[a],r[a]):!us(t[a])&&us(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:ze(t[a],r[a])):t[a]=r[a])}}}return t}function ds(t,e,n){t.style.setProperty(e,n)}function Fd(t){let{swiper:e,targetPosition:n,side:r}=t;const s=qe(),i=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const c=n>i?"next":"prev",u=(f,p)=>c==="next"&&f>=p||c==="prev"&&f<=p,d=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(f*Math.PI)/2;let m=i+p*(n-i);if(u(m,n)&&(m=n),e.wrapperEl.scrollTo({[r]:m}),u(m,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:m})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(d)};d()}function Ba(t){return t.querySelector(".swiper-slide-transform")||t.shadowRoot&&t.shadowRoot.querySelector(".swiper-slide-transform")||t}function yt(t,e){return e===void 0&&(e=""),[...t.children].filter(n=>n.matches(e))}function Ws(t){try{console.warn(t);return}catch{}}function Gs(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:Ev(e)),n}function Pv(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Rv(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Dt(t,e){return qe().getComputedStyle(t,null).getPropertyValue(e)}function Cc(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function Cv(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function xv(t,e){function n(r){r.target===t&&(e.call(t,r),t.removeEventListener("transitionend",n))}e&&t.addEventListener("transitionend",n)}function xc(t,e,n){const r=qe();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let ho;function kv(){const t=qe(),e=qn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function jd(){return ho||(ho=kv()),ho}let fo;function Nv(t){let{userAgent:e}=t===void 0?{}:t;const n=jd(),r=qe(),s=r.navigator.platform,i=e||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const d=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let m=s==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&n.touch&&y.indexOf(`${a}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),c&&!p&&(o.os="android",o.android=!0),(u||f||d)&&(o.os="ios",o.ios=!0),o}function Ov(t){return t===void 0&&(t={}),fo||(fo=Nv(t)),fo}let po;function Dv(){const t=qe();let e=!1;function n(){const r=t.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(t.navigator.userAgent);if(r.includes("Version/")){const[s,i]=r.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=s<16||s===16&&i<2}}return{isSafari:e||n(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function Lv(){return po||(po=Dv()),po}function Mv(t){let{swiper:e,on:n,emit:r}=t;const s=qe();let i=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(d=>{o=s.requestAnimationFrame(()=>{const{width:f,height:p}=e;let m=f,y=p;d.forEach(g=>{let{contentBoxSize:_,contentRect:w,target:v}=g;v&&v!==e.el||(m=w?w.width:(_[0]||_).inlineSize,y=w?w.height:(_[0]||_).blockSize)}),(m!==f||y!==p)&&a()})}),i.observe(e.el))},c=()=>{o&&s.cancelAnimationFrame(o),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){l();return}s.addEventListener("resize",a),s.addEventListener("orientationchange",u)}),n("destroy",()=>{c(),s.removeEventListener("resize",a),s.removeEventListener("orientationchange",u)})}function Vv(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i=[],o=qe(),a=function(u,d){d===void 0&&(d={});const f=o.MutationObserver||o.WebkitMutationObserver,p=new f(m=>{if(e.__preventObserver__)return;if(m.length===1){s("observerUpdate",m[0]);return}const y=function(){s("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});p.observe(u,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:typeof d.childList>"u"?!0:d.childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),i.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Cv(e.hostEl);for(let d=0;d<u.length;d+=1)a(u[d])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var Fv={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const s=n?"unshift":"push";return t.split(" ").forEach(i=>{r.eventsListeners[i]||(r.eventsListeners[i]=[]),r.eventsListeners[i][s](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function s(){r.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];e.apply(r,o)}return s.__emitterProxy=e,r.on(t,s,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((s,i)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&n.eventsListeners[r].splice(i,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return typeof i[0]=="string"||Array.isArray(i[0])?(e=i[0],n=i.slice(1,i.length),r=t):(e=i[0].events,n=i[0].data,r=i[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),t.eventsListeners&&t.eventsListeners[l]&&t.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),t}};function jv(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(Dt(r,"padding-left")||0,10)-parseInt(Dt(r,"padding-right")||0,10),n=n-parseInt(Dt(r,"padding-top")||0,10)-parseInt(Dt(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function Uv(){const t=this;function e(P,D){return parseFloat(P.getPropertyValue(t.getDirectionLabel(D))||0)}const n=t.params,{wrapperEl:r,slidesEl:s,size:i,rtlTranslate:o,wrongRTL:a}=t,l=t.virtual&&n.virtual.enabled,c=l?t.virtual.slides.length:t.slides.length,u=yt(s,`.${t.params.slideClass}, swiper-slide`),d=l?t.virtual.slides.length:u.length;let f=[];const p=[],m=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(t));let g=n.slidesOffsetAfter;typeof g=="function"&&(g=n.slidesOffsetAfter.call(t));const _=t.snapGrid.length,w=t.slidesGrid.length;let v=n.spaceBetween,T=-y,S=0,C=0;if(typeof i>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*i:typeof v=="string"&&(v=parseFloat(v)),t.virtualSize=-v,u.forEach(P=>{o?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ds(r,"--swiper-centered-offset-before",""),ds(r,"--swiper-centered-offset-after",""));const V=n.grid&&n.grid.rows>1&&t.grid;V?t.grid.initSlides(u):t.grid&&t.grid.unsetSlides();let N;const R=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(P=>typeof n.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<d;P+=1){N=0;let D;if(u[P]&&(D=u[P]),V&&t.grid.updateSlide(P,D,u),!(u[P]&&Dt(D,"display")==="none")){if(n.slidesPerView==="auto"){R&&(u[P].style[t.getDirectionLabel("width")]="");const L=getComputedStyle(D),k=D.style.transform,$=D.style.webkitTransform;if(k&&(D.style.transform="none"),$&&(D.style.webkitTransform="none"),n.roundLengths)N=t.isHorizontal()?xc(D,"width",!0):xc(D,"height",!0);else{const Y=e(L,"width"),ee=e(L,"padding-left"),fe=e(L,"padding-right"),Ce=e(L,"margin-left"),se=e(L,"margin-right"),Ue=L.getPropertyValue("box-sizing");if(Ue&&Ue==="border-box")N=Y+Ce+se;else{const{clientWidth:rm,offsetWidth:sm}=D;N=Y+ee+fe+Ce+se+(sm-rm)}}k&&(D.style.transform=k),$&&(D.style.webkitTransform=$),n.roundLengths&&(N=Math.floor(N))}else N=(i-(n.slidesPerView-1)*v)/n.slidesPerView,n.roundLengths&&(N=Math.floor(N)),u[P]&&(u[P].style[t.getDirectionLabel("width")]=`${N}px`);u[P]&&(u[P].swiperSlideSize=N),m.push(N),n.centeredSlides?(T=T+N/2+S/2+v,S===0&&P!==0&&(T=T-i/2-v),P===0&&(T=T-i/2-v),Math.abs(T)<1/1e3&&(T=0),n.roundLengths&&(T=Math.floor(T)),C%n.slidesPerGroup===0&&f.push(T),p.push(T)):(n.roundLengths&&(T=Math.floor(T)),(C-Math.min(t.params.slidesPerGroupSkip,C))%t.params.slidesPerGroup===0&&f.push(T),p.push(T),T=T+N+v),t.virtualSize+=N+v,S=N,C+=1}}if(t.virtualSize=Math.max(t.virtualSize,i)+g,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+v}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+v}px`),V&&t.grid.updateWrapperSize(N,f),!n.centeredSlides){const P=[];for(let D=0;D<f.length;D+=1){let L=f[D];n.roundLengths&&(L=Math.floor(L)),f[D]<=t.virtualSize-i&&P.push(L)}f=P,Math.floor(t.virtualSize-i)-Math.floor(f[f.length-1])>1&&f.push(t.virtualSize-i)}if(l&&n.loop){const P=m[0]+v;if(n.slidesPerGroup>1){const D=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),L=P*n.slidesPerGroup;for(let k=0;k<D;k+=1)f.push(f[f.length-1]+L)}for(let D=0;D<t.virtual.slidesBefore+t.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+P),p.push(p[p.length-1]+P),t.virtualSize+=P}if(f.length===0&&(f=[0]),v!==0){const P=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");u.filter((D,L)=>!n.cssMode||n.loop?!0:L!==u.length-1).forEach(D=>{D.style[P]=`${v}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let P=0;m.forEach(L=>{P+=L+(v||0)}),P-=v;const D=P-i;f=f.map(L=>L<=0?-y:L>D?D+g:L)}if(n.centerInsufficientSlides){let P=0;if(m.forEach(D=>{P+=D+(v||0)}),P-=v,P<i){const D=(i-P)/2;f.forEach((L,k)=>{f[k]=L-D}),p.forEach((L,k)=>{p[k]=L+D})}}if(Object.assign(t,{slides:u,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ds(r,"--swiper-centered-offset-before",`${-f[0]}px`),ds(r,"--swiper-centered-offset-after",`${t.size/2-m[m.length-1]/2}px`);const P=-t.snapGrid[0],D=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(L=>L+P),t.slidesGrid=t.slidesGrid.map(L=>L+D)}if(d!==c&&t.emit("slidesLengthChange"),f.length!==_&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),p.length!==w&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const P=`${n.containerModifierClass}backface-hidden`,D=t.el.classList.contains(P);d<=n.maxBackfaceHiddenSlides?D||t.el.classList.add(P):D&&t.el.classList.remove(P)}}function Bv(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let s=0,i;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>r?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(i=0;i<Math.ceil(e.params.slidesPerView);i+=1){const a=e.activeIndex+i;if(a>e.slides.length&&!r)break;n.push(o(a))}else n.push(o(e.activeIndex));for(i=0;i<n.length;i+=1)if(typeof n[i]<"u"){const a=n[i].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function $v(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}function qv(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:s,snapGrid:i}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;s&&(o=t),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const c=r[l];let u=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const d=(o+(n.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),f=(o-i[0]+(n.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),p=-(o-u),m=p+e.slidesSizesGrid[l],y=p>=0&&p<=e.size-e.slidesSizesGrid[l];(p>=0&&p<e.size-1||m>1&&m<=e.size||p<=0&&m>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),y&&r[l].classList.add(n.slideFullyVisibleClass),c.progress=s?-d:d,c.originalProgress=s?-f:f}}function zv(t){const e=this;if(typeof t>"u"){const u=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*u||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:i,isEnd:o,progressLoop:a}=e;const l=i,c=o;if(r===0)s=0,i=!0,o=!0;else{s=(t-e.minTranslate())/r;const u=Math.abs(t-e.minTranslate())<1,d=Math.abs(t-e.maxTranslate())<1;i=u||s<=0,o=d||s>=1,u&&(s=0),d&&(s=1)}if(n.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],p=e.slidesGrid[d],m=e.slidesGrid[e.slidesGrid.length-1],y=Math.abs(t);y>=f?a=(y-f)/m:a=(y+m-p)/m,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:i,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),i&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!i||c&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}function Hv(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:s}=t,i=t.virtual&&n.virtual.enabled,o=t.grid&&n.grid&&n.grid.rows>1,a=d=>yt(r,`.${n.slideClass}${d}, swiper-slide${d}`)[0];e.forEach(d=>{d.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,c,u;if(i)if(n.loop){let d=s-t.virtual.slidesBefore;d<0&&(d=t.virtual.slides.length+d),d>=t.virtual.slides.length&&(d-=t.virtual.slides.length),l=a(`[data-swiper-slide-index="${d}"]`)}else l=a(`[data-swiper-slide-index="${s}"]`);else o?(l=e.filter(d=>d.column===s)[0],u=e.filter(d=>d.column===s+1)[0],c=e.filter(d=>d.column===s-1)[0]):l=e[s];l&&(l.classList.add(n.slideActiveClass),o?(u&&u.classList.add(n.slideNextClass),c&&c.classList.add(n.slidePrevClass)):(u=Rv(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=e[0]),u&&u.classList.add(n.slideNextClass),c=Pv(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(n.slidePrevClass))),t.emitSlidesClasses()}const xs=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let s=r.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(r.shadowRoot?s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},mo=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},zo=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+r+c)),t.slides.forEach((l,c)=>{a.includes(l.column)&&mo(t,c)});return}const i=s+r-1;if(t.params.rewind||t.params.loop)for(let o=s-e;o<=i+e;o+=1){const a=(o%n+n)%n;(a<s||a>i)&&mo(t,a)}else for(let o=Math.max(s-e,0);o<=Math.min(i+e,n-1);o+=1)o!==s&&(o>i||o<s)&&mo(t,o)};function Wv(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let s;for(let i=0;i<e.length;i+=1)typeof e[i+1]<"u"?r>=e[i]&&r<e[i+1]-(e[i+1]-e[i])/2?s=i:r>=e[i]&&r<e[i+1]&&(s=i+1):r>=e[i]&&(s=i);return n.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Gv(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:s,activeIndex:i,realIndex:o,snapIndex:a}=e;let l=t,c;const u=p=>{let m=p-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=Wv(e)),r.indexOf(n)>=0)c=r.indexOf(n);else{const p=Math.min(s.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/s.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===i&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===i&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&s.grid&&s.grid.rows>1;let f;if(e.virtual&&s.virtual.enabled&&s.loop)f=u(l);else if(d){const p=e.slides.filter(y=>y.column===l)[0];let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(p),0)),f=Math.floor(m/s.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?f=parseInt(p,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:f,previousIndex:i,activeIndex:l}),e.initialized&&zo(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function Kv(t,e){const n=this,r=n.params;let s=t.closest(`.${r.slideClass}, swiper-slide`);!s&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(s=a)});let i=!1,o;if(s){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===s){i=!0,o=a;break}}if(s&&i)n.clickedSlide=s,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Qv={updateSize:jv,updateSlides:Uv,updateAutoHeight:Bv,updateSlidesOffset:$v,updateSlidesProgress:qv,updateProgress:zv,updateSlidesClasses:Hv,updateActiveIndex:Gv,updateClickedSlide:Kv};function Xv(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:s,wrapperEl:i}=e;if(n.virtualTranslate)return r?-s:s;if(n.cssMode)return s;let o=bv(i,t);return o+=e.cssOverflowAdjustment(),r&&(o=-o),o||0}function Yv(t,e){const n=this,{rtlTranslate:r,params:s,wrapperEl:i,progress:o}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=r?-t:t:l=t,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,s.cssMode?i[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:s.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),i.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(t-n.minTranslate())/d,u!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function Jv(){return-this.snapGrid[0]}function Zv(){return-this.snapGrid[this.snapGrid.length-1]}function eT(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const l=i.minTranslate(),c=i.maxTranslate();let u;if(r&&t>l?u=l:r&&t<c?u=c:u=t,i.updateProgress(u),o.cssMode){const d=i.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-u;else{if(!i.support.smoothScroll)return Fd({swiper:i,targetPosition:-u,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(i.setTransition(0),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",e,s),i.emit("transitionEnd"))):(i.setTransition(e),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",e,s),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(f){!i||i.destroyed||f.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,n&&i.emit("transitionEnd"))}),i.wrapperEl.addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd))),!0}var tT={getTranslate:Xv,setTranslate:Yv,minTranslate:Jv,maxTranslate:Zv,translateTo:eT};function nT(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function Ud(t){let{swiper:e,runCallbacks:n,direction:r,step:s}=t;const{activeIndex:i,previousIndex:o}=e;let a=r;if(a||(i>o?a="next":i<o?a="prev":a="reset"),e.emit(`transition${s}`),n&&i!==o){if(a==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),a==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function rT(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ud({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function sT(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ud({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var iT={setTransition:nT,transitionStart:rT,transitionEnd:sT};function oT(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const i=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=i;if(i.animating&&a.preventInteractionOnTransition||!m&&!r&&!s)return!1;const y=Math.min(i.params.slidesPerGroupSkip,o);let g=y+Math.floor((o-y)/i.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const _=-l[g];if(a.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){const T=-Math.floor(_*100),S=Math.floor(c[v]*100),C=Math.floor(c[v+1]*100);typeof c[v+1]<"u"?T>=S&&T<C-(C-S)/2?o=v:T>=S&&T<C&&(o=v+1):T>=S&&(o=v)}if(i.initialized&&o!==d&&(!i.allowSlideNext&&(f?_>i.translate&&_>i.minTranslate():_<i.translate&&_<i.minTranslate())||!i.allowSlidePrev&&_>i.translate&&_>i.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(_);let w;if(o>d?w="next":o<d?w="prev":w="reset",f&&-_===i.translate||!f&&_===i.translate)return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),a.effect!=="slide"&&i.setTranslate(_),w!=="reset"&&(i.transitionStart(n,w),i.transitionEnd(n,w)),!1;if(a.cssMode){const v=i.isHorizontal(),T=f?_:-_;if(e===0){const S=i.virtual&&i.params.virtual.enabled;S&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),S&&!i._cssModeVirtualInitialSet&&i.params.initialSlide>0?(i._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[v?"scrollLeft":"scrollTop"]=T})):p[v?"scrollLeft":"scrollTop"]=T,S&&requestAnimationFrame(()=>{i.wrapperEl.style.scrollSnapType="",i._immediateVirtual=!1})}else{if(!i.support.smoothScroll)return Fd({swiper:i,targetPosition:T,side:v?"left":"top"}),!0;p.scrollTo({[v?"left":"top"]:T,behavior:"smooth"})}return!0}return i.setTransition(e),i.setTranslate(_),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",e,r),i.transitionStart(n,w),e===0?i.transitionEnd(n,w):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(T){!i||i.destroyed||T.target===this&&(i.wrapperEl.removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,w))}),i.wrapperEl.addEventListener("transitionend",i.onSlideToWrapperTransitionEnd)),!0}function aT(t,e,n,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this,i=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(i){const f=o*s.params.grid.rows;a=s.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=s.getSlideIndexByData(o);const l=i?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:c}=s.params;let u=s.params.slidesPerView;u==="auto"?u=s.slidesPerViewDynamic():(u=Math.ceil(parseFloat(s.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let d=l-a<u;if(c&&(d=d||a<Math.ceil(u/2)),d){const f=c?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?a+1:a-l+1,slideRealIndex:f==="next"?s.realIndex:void 0})}if(i){const f=o*s.params.grid.rows;o=s.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,n,r)}),s}function lT(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this,{enabled:s,params:i,animating:o}=r;if(!s)return r;let a=i.slidesPerGroup;i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<i.slidesPerGroupSkip?1:a,c=r.virtual&&i.virtual.enabled;if(i.loop){if(o&&!c&&i.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,t,e,n)}),!0}return i.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+l,t,e,n)}function cT(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this,{params:s,snapGrid:i,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l)return r;const u=r.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const d=a?r.translate:-r.translate;function f(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const p=f(d),m=i.map(_=>f(_));let y=i[m.indexOf(p)-1];if(typeof y>"u"&&s.cssMode){let _;i.forEach((w,v)=>{p>=w&&(_=v)}),typeof _<"u"&&(y=i[_>0?_-1:_])}let g=0;if(typeof y<"u"&&(g=o.indexOf(y),g<0&&(g=r.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),s.rewind&&r.isBeginning){const _=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(_,t,e,n)}else if(s.loop&&r.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(g,t,e,n)}),!0;return r.slideTo(g,t,e,n)}function uT(t,e,n){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const r=this;return r.slideTo(r.activeIndex,t,e,n)}function dT(t,e,n,r){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),r===void 0&&(r=.5);const s=this;let i=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const c=s.snapGrid[a],u=s.snapGrid[a+1];l-c>(u-c)*r&&(i+=s.params.slidesPerGroup)}else{const c=s.snapGrid[a-1],u=s.snapGrid[a];l-c<=(u-c)*r&&(i-=s.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,s.slidesGrid.length-1),s.slideTo(i,t,e,n)}function hT(){const t=this,{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.clickedIndex,i;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;i=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<t.loopedSlides-r/2||s>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),s=t.getSlideIndex(yt(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Nn(()=>{t.slideTo(s)})):t.slideTo(s):s>t.slides.length-r?(t.loopFix(),s=t.getSlideIndex(yt(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Nn(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var fT={slideTo:oT,slideToLoop:aT,slideNext:lT,slidePrev:cT,slideReset:uT,slideToClosest:dT,slideToClickedSlide:hT};function pT(t){const e=this,{params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const s=()=>{yt(r,`.${n.slideClass}, swiper-slide`).forEach((d,f)=>{d.setAttribute("data-swiper-slide-index",f)})},i=e.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(i?n.grid.rows:1),a=e.slides.length%o!==0,l=i&&e.slides.length%n.grid.rows!==0,c=u=>{for(let d=0;d<u;d+=1){const f=e.isElement?Gs("swiper-slide",[n.slideBlankClass]):Gs("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(f)}};if(a){if(n.loopAddBlankSlides){const u=o-e.slides.length%o;c(u),e.recalcSlides(),e.updateSlides()}else Ws("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-e.slides.length%n.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else Ws("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function mT(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:s,activeSlideIndex:i,byController:o,byMousewheel:a}=t===void 0?{}:t;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=l,{centeredSlides:m}=p;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){n&&(!p.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let y=p.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),m&&y%2===0&&(y=y+1));const g=p.slidesPerGroupAuto?y:p.slidesPerGroup;let _=g;_%g!==0&&(_+=g-_%g),_+=p.loopAdditionalSlides,l.loopedSlides=_;const w=l.grid&&p.grid&&p.grid.rows>1;c.length<y+_?Ws("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&p.grid.fill==="row"&&Ws("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],T=[];let S=l.activeIndex;typeof i>"u"?i=l.getSlideIndex(c.filter(k=>k.classList.contains(p.slideActiveClass))[0]):S=i;const C=r==="next"||!r,V=r==="prev"||!r;let N=0,R=0;const P=w?Math.ceil(c.length/p.grid.rows):c.length,L=(w?c[i].column:i)+(m&&typeof s>"u"?-y/2+.5:0);if(L<_){N=Math.max(_-L,g);for(let k=0;k<_-L;k+=1){const $=k-Math.floor(k/P)*P;if(w){const Y=P-$-1;for(let ee=c.length-1;ee>=0;ee-=1)c[ee].column===Y&&v.push(ee)}else v.push(P-$-1)}}else if(L+y>P-_){R=Math.max(L-(P-_*2),g);for(let k=0;k<R;k+=1){const $=k-Math.floor(k/P)*P;w?c.forEach((Y,ee)=>{Y.column===$&&T.push(ee)}):T.push($)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),V&&v.forEach(k=>{c[k].swiperLoopMoveDOM=!0,f.prepend(c[k]),c[k].swiperLoopMoveDOM=!1}),C&&T.forEach(k=>{c[k].swiperLoopMoveDOM=!0,f.append(c[k]),c[k].swiperLoopMoveDOM=!1}),l.recalcSlides(),p.slidesPerView==="auto"?l.updateSlides():w&&(v.length>0&&V||T.length>0&&C)&&l.slides.forEach((k,$)=>{l.grid.updateSlide($,k,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),n){if(v.length>0&&V){if(typeof e>"u"){const k=l.slidesGrid[S],Y=l.slidesGrid[S+N]-k;a?l.setTranslate(l.translate-Y):(l.slideTo(S+N,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-Y,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-Y))}else if(s){const k=w?v.length/p.grid.rows:v.length;l.slideTo(l.activeIndex+k,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(T.length>0&&C)if(typeof e>"u"){const k=l.slidesGrid[S],Y=l.slidesGrid[S-R]-k;a?l.setTranslate(l.translate-Y):(l.slideTo(S-R,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-Y,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-Y))}else{const k=w?T.length/p.grid.rows:T.length;l.slideTo(l.activeIndex-k,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const k={slideRealIndex:e,direction:r,setTranslate:s,activeSlideIndex:i,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...k,slideTo:$.params.slidesPerView===p.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...k,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView?n:!1})}l.emit("loopFix")}function gT(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(s=>{const i=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;r[i]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),r.forEach(s=>{n.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var _T={loopCreate:pT,loopFix:mT,loopDestroy:gT};function yT(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function vT(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var TT={setGrabCursor:yT,unsetGrabCursor:vT};function wT(t,e){e===void 0&&(e=this);function n(r){if(!r||r===qn()||r===qe())return null;r.assignedSlot&&(r=r.assignedSlot);const s=r.closest(t);return!s&&!r.getRootNode?null:s||n(r.getRootNode().host)}return n(e)}function kc(t,e,n){const r=qe(),{params:s}=t,i=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return i&&(n<=o||n>=r.innerWidth-o)?i==="prevent"?(e.preventDefault(),!0):!1:!0}function ET(t){const e=this,n=qn();let r=t;r.originalEvent&&(r=r.originalEvent);const s=e.touchEventsData;if(r.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==r.pointerId)return;s.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(s.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){kc(e,r,r.targetTouches[0].pageX);return}const{params:i,touches:o,enabled:a}=e;if(!a||!i.simulateTouch&&r.pointerType==="mouse"||e.animating&&i.preventInteractionOnTransition)return;!e.animating&&i.cssMode&&i.loop&&e.loopFix();let l=r.target;if(i.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||s.isTouched&&s.isMoved)return;const c=!!i.noSwipingClass&&i.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(i.noSwiping&&(f?wT(d,l):l.closest(d))){e.allowClick=!0;return}if(i.swipeHandler&&!l.closest(i.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const p=o.currentX,m=o.currentY;if(!kc(e,r,p))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,s.touchStartTime=mt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,i.threshold>0&&(s.allowThresholdMove=!1);let y=!0;l.matches(s.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const g=y&&e.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||g)&&!l.isContentEditable&&r.preventDefault(),i.freeMode&&i.freeMode.enabled&&e.freeMode&&e.animating&&!i.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function IT(t){const e=qn(),n=this,r=n.touchEventsData,{params:s,touches:i,rtlTranslate:o,enabled:a}=n;if(!a||!s.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){i.startX=u,i.startY=d;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=mt());return}if(s.touchReleaseOnEdges&&!s.loop){if(n.isVertical()){if(d<i.startY&&n.translate<=n.maxTranslate()||d>i.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<i.startX&&n.translate<=n.maxTranslate()||u>i.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=u,i.currentY=d;const f=i.currentX-i.startX,p=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:f*f+p*p>=25&&(C=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>s.touchAngle:90-C>s.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let m=n.isHorizontal()?f:p,y=n.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;s.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),i.diff=m,m*=s.touchRatio,o&&(m=-m,y=-y);const g=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const _=n.params.loop&&!s.cssMode,w=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(_&&w&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,s.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let v;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&w&&Math.abs(m)>=1){Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let T=!0,S=s.resistanceRatio;if(s.touchReleaseOnEdges&&(S=0),m>0?(_&&w&&!v&&r.allowThresholdMove&&r.currentTranslate>(s.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(T=!1,s.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**S))):m<0&&(_&&w&&!v&&r.allowThresholdMove&&r.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(s.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(T=!1,s.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**S))),T&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),s.threshold>0)if(Math.abs(m)>s.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{r.currentTranslate=r.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ST(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let s;if(r.type==="touchend"||r.type==="touchcancel"){if(s=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!s||s.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;s=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=mt(),f=d-n.touchStartTime;if(e.allowClick){const S=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(S&&S[0]||r.target,S),e.emit("tap click",r),f<300&&d-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=mt(),Nn(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let p;if(o.followFinger?p=l?e.translate:-e.translate:p=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-e.maxTranslate()&&!e.params.loop;let y=0,g=e.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[S+C]<"u"?(m||p>=c[S]&&p<c[S+C])&&(y=S,g=c[S+C]-c[S]):(m||p>=c[S])&&(y=S,g=c[c.length-1]-c[c.length-2])}let _=null,w=null;o.rewind&&(e.isBeginning?w=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(_=0));const v=(p-c[y])/g,T=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(f>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?_:y+T):e.slideTo(y)),e.swipeDirection==="prev"&&(v>1-o.longSwipesRatio?e.slideTo(y+T):w!==null&&v<0&&Math.abs(v)>o.longSwipesRatio?e.slideTo(w):e.slideTo(y))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(y+T):e.slideTo(y):(e.swipeDirection==="next"&&e.slideTo(_!==null?_:y+T),e.swipeDirection==="prev"&&e.slideTo(w!==null?w:y))}}function Nc(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:i}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=r,t.params.watchOverflow&&i!==t.snapGrid&&t.checkOverflow()}function bT(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function AT(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const i=t.maxTranslate()-t.minTranslate();i===0?s=0:s=(t.translate-t.minTranslate())/i,s!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function PT(t){const e=this;xs(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function RT(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const Bd=(t,e)=>{const n=qn(),{params:r,el:s,wrapperEl:i,device:o}=t,a=!!r.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;n[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:a}),s[l]("touchstart",t.onTouchStart,{passive:!1}),s[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("touchmove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",t.onTouchEnd,{passive:!0}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("touchcancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),n[l]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&s[l]("click",t.onClick,!0),r.cssMode&&i[l]("scroll",t.onScroll),r.updateOnWindowResize?t[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Nc,!0):t[c]("observerUpdate",Nc,!0),s[l]("load",t.onLoad,{capture:!0})};function CT(){const t=this,{params:e}=t;t.onTouchStart=ET.bind(t),t.onTouchMove=IT.bind(t),t.onTouchEnd=ST.bind(t),t.onDocumentTouchStart=RT.bind(t),e.cssMode&&(t.onScroll=AT.bind(t)),t.onClick=bT.bind(t),t.onLoad=PT.bind(t),Bd(t,"on")}function xT(){Bd(this,"off")}var kT={attachEvents:CT,detachEvents:xT};const Oc=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function NT(){const t=this,{realIndex:e,initialized:n,params:r,el:s}=t,i=r.breakpoints;if(!i||i&&Object.keys(i).length===0)return;const o=t.getBreakpoint(i,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in i?i[o]:void 0)||t.originalParams,c=Oc(t,r),u=Oc(t,l),d=r.enabled;c&&!u?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!c&&u&&(s.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&s.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(_=>{if(typeof l[_]>"u")return;const w=r[_]&&r[_].enabled,v=l[_]&&l[_].enabled;w&&!v&&t[_].disable(),!w&&v&&t[_].enable()});const f=l.direction&&l.direction!==r.direction,p=r.loop&&(l.slidesPerView!==r.slidesPerView||f),m=r.loop;f&&n&&t.changeDirection(),ze(t.params,l);const y=t.params.enabled,g=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),d&&!y?t.disable():!d&&y&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),n&&(p?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!m&&g?(t.loopCreate(e),t.updateSlides()):m&&!g&&t.loopDestroy()),t.emit("breakpoint",l)}function OT(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const s=qe(),i=e==="window"?s.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:i*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?s.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var DT={setBreakpoint:NT,getBreakpoint:OT};function LT(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(s=>{r[s]&&n.push(e+s)}):typeof r=="string"&&n.push(e+r)}),n}function MT(){const t=this,{classNames:e,params:n,rtl:r,el:s,device:i}=t,o=LT(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),s.classList.add(...e),t.emitContainerClasses()}function VT(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}var FT={addClasses:MT,removeClasses:VT};function jT(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const s=t.slides.length-1,i=t.slidesGrid[s]+t.slidesSizesGrid[s]+r*2;t.isLocked=t.size>i}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var UT={checkOverflow:jT},Ho={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function BT(t,e){return function(r){r===void 0&&(r={});const s=Object.keys(r)[0],i=r[s];if(typeof i!="object"||i===null){ze(e,r);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in i)){ze(e,r);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),ze(e,r)}}const go={eventsEmitter:Fv,update:Qv,translate:tT,transition:iT,slide:fT,loop:_T,grabCursor:TT,events:kT,breakpoints:DT,checkOverflow:UT,classes:FT},_o={};let $a=class pt{constructor(){let e,n;for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?n=s[0]:[e,n]=s,n||(n={}),n=ze({},n),e&&!n.el&&(n.el=e);const o=qn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const u=[];return o.querySelectorAll(n.el).forEach(d=>{const f=ze({},n,{el:d});u.push(new pt(f))}),u}const a=this;a.__swiper__=!0,a.support=jd(),a.device=Ov({userAgent:n.userAgent}),a.browser=Lv(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(u=>{u({params:n,swiper:a,extendParams:BT(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=ze({},Ho,l);return a.params=ze({},c,_o,n),a.originalParams=ze({},a.params),a.passedParams=ze({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,s=yt(n,`.${r.slideClass}, swiper-slide`),i=Cc(s[0]);return Cc(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=yt(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const s=r.minTranslate(),o=(r.maxTranslate()-s)*e+s;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const s=e.getSlideClasses(r);n.push({slideEl:r,classNames:s}),e.emit("_slideClass",r,s)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:s,slides:i,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=r;let u=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let d=i[c]?i[c].swiperSlideSize:0,f;for(let p=c+1;p<i.length;p+=1)i[p]&&!f&&(d+=i[p].swiperSlideSize,u+=1,d>l&&(f=!0));for(let p=c-1;p>=0;p-=1)i[p]&&!f&&(d+=i[p].swiperSlideSize,u+=1,d>l&&(f=!0))}else if(e==="current")for(let d=c+1;d<i.length;d+=1)(n?o[d]+a[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&xs(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)s(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const o=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(o.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||s()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,s=r.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${s}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(i=>{e==="vertical"?i.style.width="":i.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const s=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(s()):yt(r,s())[0];return!o&&n.params.createElements&&(o=Gs("div",n.params.wrapperClass),r.append(o),yt(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Dt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Dt(r,"direction")==="rtl"),wrongRTL:Dt(o,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const s=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(i=>{i.complete?xs(n,i):i.addEventListener("load",o=>{xs(n,o.target)})}),zo(n),n.initialized=!0,zo(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:s,el:i,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),s.loop&&r.loopDestroy(),n&&(r.removeClasses(),i.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),e!==!1&&(r.el.swiper=null,Iv(r)),r.destroyed=!0),null}static extendDefaults(e){ze(_o,e)}static get extendedDefaults(){return _o}static get defaults(){return Ho}static installModule(e){pt.prototype.__modules__||(pt.prototype.__modules__=[]);const n=pt.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>pt.installModule(n)),pt):(pt.installModule(e),pt)}};Object.keys(go).forEach(t=>{Object.keys(go[t]).forEach(e=>{$a.prototype[e]=go[t][e]})});$a.use([Mv,Vv]);const $d=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function on(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Pn(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:on(e[r])&&on(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:Pn(t[r],e[r]):t[r]=e[r]})}function qd(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function zd(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function Hd(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function Wd(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function $T(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function qT(t){let{swiper:e,slides:n,passedParams:r,changedParams:s,nextEl:i,prevEl:o,scrollbarEl:a,paginationEl:l}=t;const c=s.filter(R=>R!=="children"&&R!=="direction"&&R!=="wrapperClass"),{params:u,pagination:d,navigation:f,scrollbar:p,virtual:m,thumbs:y}=e;let g,_,w,v,T,S,C,V;s.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(g=!0),s.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(_=!0),s.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||u.pagination===!1)&&d&&!d.el&&(w=!0),s.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(u.scrollbar||u.scrollbar===!1)&&p&&!p.el&&(v=!0),s.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(T=!0);const N=R=>{e[R]&&(e[R].destroy(),R==="navigation"?(e.isElement&&(e[R].prevEl.remove(),e[R].nextEl.remove()),u[R].prevEl=void 0,u[R].nextEl=void 0,e[R].prevEl=void 0,e[R].nextEl=void 0):(e.isElement&&e[R].el.remove(),u[R].el=void 0,e[R].el=void 0))};s.includes("loop")&&e.isElement&&(u.loop&&!r.loop?S=!0:!u.loop&&r.loop?C=!0:V=!0),c.forEach(R=>{if(on(u[R])&&on(r[R]))Object.assign(u[R],r[R]),(R==="navigation"||R==="pagination"||R==="scrollbar")&&"enabled"in r[R]&&!r[R].enabled&&N(R);else{const P=r[R];(P===!0||P===!1)&&(R==="navigation"||R==="pagination"||R==="scrollbar")?P===!1&&N(R):u[R]=r[R]}}),c.includes("controller")&&!_&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),s.includes("children")&&n&&m&&u.virtual.enabled?(m.slides=n,m.update(!0)):s.includes("virtual")&&m&&u.virtual.enabled&&(n&&(m.slides=n),m.update(!0)),s.includes("children")&&n&&u.loop&&(V=!0),g&&y.init()&&y.update(!0),_&&(e.controller.control=u.controller.control),w&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(u.pagination.el=l),d.init(),d.render(),d.update()),v&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),e.el.appendChild(a)),a&&(u.scrollbar.el=a),p.init(),p.updateSize(),p.setTranslate()),T&&(e.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),i.innerHTML=e.hostEl.constructor.nextButtonSvg,i.part.add("button-next"),e.el.appendChild(i)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=e.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),e.el.appendChild(o))),i&&(u.navigation.nextEl=i),o&&(u.navigation.prevEl=o),f.init(),f.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),s.includes("direction")&&e.changeDirection(r.direction,!1),(S||V)&&e.loopDestroy(),(C||V)&&e.loopCreate(),e.update()}function zT(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},s={};Pn(n,Ho),n._emitClasses=!0,n.init=!1;const i={},o=$d.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?on(t[l])?(n[l]={},s[l]={},Pn(n[l],t[l]),Pn(s[l],t[l])):(n[l]=t[l],s[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?r[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:i[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:s,rest:i,events:r}}function HT(t,e){let{el:n,nextEl:r,prevEl:s,paginationEl:i,scrollbarEl:o,swiper:a}=t;qd(e)&&r&&s&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=s,a.originalParams.navigation.prevEl=s),zd(e)&&i&&(a.params.pagination.el=i,a.originalParams.pagination.el=i),Hd(e)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function WT(t,e,n,r,s){const i=[];if(!e)return i;const o=l=>{i.indexOf(l)<0&&i.push(l)};if(n&&r){const l=r.map(s),c=n.map(s);l.join("")!==c.join("")&&o("children"),r.length!==n.length&&o("children")}return $d.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(on(t[l])&&on(e[l])){const c=Object.keys(t[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}),u.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}))}else t[l]!==e[l]&&o(l)}),i}const GT=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Ks(){return Ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ks.apply(this,arguments)}function Gd(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function Kd(t){const e=[];return q.Children.toArray(t).forEach(n=>{Gd(n)?e.push(n):n.props&&n.props.children&&Kd(n.props.children).forEach(r=>e.push(r))}),e}function KT(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(t).forEach(r=>{if(Gd(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const s=Kd(r.props.children);s.length>0?s.forEach(i=>e.push(i)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function QT(t,e,n){if(!n)return null;const r=u=>{let d=u;return u<0?d=e.length+u:d>=e.length&&(d=d-e.length),d},s=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:i,to:o}=n,a=t.params.loop?-e.length:0,l=t.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=i&&u<=o&&c.push(e[r(u)]);return c.map((u,d)=>q.cloneElement(u,{swiper:t,style:s,key:`slide-${d}`}))}function hr(t,e){return typeof window>"u"?x.useEffect(t,e):x.useLayoutEffect(t,e)}const Dc=x.createContext(null),XT=x.createContext(null),Wo=x.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:s="div",children:i,onSwiper:o,...a}=t===void 0?{}:t,l=!1;const[c,u]=x.useState("swiper"),[d,f]=x.useState(null),[p,m]=x.useState(!1),y=x.useRef(!1),g=x.useRef(null),_=x.useRef(null),w=x.useRef(null),v=x.useRef(null),T=x.useRef(null),S=x.useRef(null),C=x.useRef(null),V=x.useRef(null),{params:N,passedParams:R,rest:P,events:D}=zT(a),{slides:L,slots:k}=KT(i),$=()=>{m(!p)};Object.assign(N.on,{_containerClasses(se,Ue){u(Ue)}});const Y=()=>{Object.assign(N.on,D),l=!0;const se={...N};if(delete se.wrapperClass,_.current=new $a(se),_.current.virtual&&_.current.params.virtual.enabled){_.current.virtual.slides=L;const Ue={cache:!1,slides:L,renderExternal:f,renderExternalUpdate:!1};Pn(_.current.params.virtual,Ue),Pn(_.current.originalParams.virtual,Ue)}};g.current||Y(),_.current&&_.current.on("_beforeBreakpoint",$);const ee=()=>{l||!D||!_.current||Object.keys(D).forEach(se=>{_.current.on(se,D[se])})},fe=()=>{!D||!_.current||Object.keys(D).forEach(se=>{_.current.off(se,D[se])})};x.useEffect(()=>()=>{_.current&&_.current.off("_beforeBreakpoint",$)}),x.useEffect(()=>{!y.current&&_.current&&(_.current.emitSlidesClasses(),y.current=!0)}),hr(()=>{if(e&&(e.current=g.current),!!g.current)return _.current.destroyed&&Y(),HT({el:g.current,nextEl:T.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:V.current,swiper:_.current},N),o&&o(_.current),()=>{_.current&&!_.current.destroyed&&_.current.destroy(!0,!1)}},[]),hr(()=>{ee();const se=WT(R,w.current,L,v.current,Ue=>Ue.key);return w.current=R,v.current=L,se.length&&_.current&&!_.current.destroyed&&qT({swiper:_.current,slides:L,passedParams:R,changedParams:se,nextEl:T.current,prevEl:S.current,scrollbarEl:V.current,paginationEl:C.current}),()=>{fe()}}),hr(()=>{GT(_.current)},[d]);function Ce(){return N.virtual?QT(_.current,L,d):L.map((se,Ue)=>q.cloneElement(se,{swiper:_.current,swiperSlideIndex:Ue}))}return q.createElement(r,Ks({ref:g,className:Wd(`${c}${n?` ${n}`:""}`)},P),q.createElement(XT.Provider,{value:_.current},k["container-start"],q.createElement(s,{className:$T(N.wrapperClass)},k["wrapper-start"],Ce(),k["wrapper-end"]),qd(N)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:S,className:"swiper-button-prev"}),q.createElement("div",{ref:T,className:"swiper-button-next"})),Hd(N)&&q.createElement("div",{ref:V,className:"swiper-scrollbar"}),zd(N)&&q.createElement("div",{ref:C,className:"swiper-pagination"}),k["container-end"]))});Wo.displayName="Swiper";const Go=x.forwardRef(function(t,e){let{tag:n="div",children:r,className:s="",swiper:i,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:c,...u}=t===void 0?{}:t;const d=x.useRef(null),[f,p]=x.useState("swiper-slide"),[m,y]=x.useState(!1);function g(T,S,C){S===d.current&&p(C)}hr(()=>{if(typeof c<"u"&&(d.current.swiperSlideIndex=c),e&&(e.current=d.current),!(!d.current||!i)){if(i.destroyed){f!=="swiper-slide"&&p("swiper-slide");return}return i.on("_slideClass",g),()=>{i&&i.off("_slideClass",g)}}}),hr(()=>{i&&d.current&&!i.destroyed&&p(i.getSlideClasses(d.current))},[i]);const _={isActive:f.indexOf("swiper-slide-active")>=0,isVisible:f.indexOf("swiper-slide-visible")>=0,isPrev:f.indexOf("swiper-slide-prev")>=0,isNext:f.indexOf("swiper-slide-next")>=0},w=()=>typeof r=="function"?r(_):r,v=()=>{y(!0)};return q.createElement(n,Ks({ref:d,className:Wd(`${f}${s?` ${s}`:""}`),"data-swiper-slide-index":l,onLoad:v},u),o&&q.createElement(Dc.Provider,{value:_},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},w(),a&&!m&&q.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&q.createElement(Dc.Provider,{value:_},w(),a&&!m&&q.createElement("div",{className:"swiper-lazy-preloader"})))});Go.displayName="SwiperSlide";function Lc(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const i=qe();n({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let o,a=mt(),l;const c=[];function u(v){let V=0,N=0,R=0,P=0;return"detail"in v&&(N=v.detail),"wheelDelta"in v&&(N=-v.wheelDelta/120),"wheelDeltaY"in v&&(N=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(V=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(V=N,N=0),R=V*10,P=N*10,"deltaY"in v&&(P=v.deltaY),"deltaX"in v&&(R=v.deltaX),v.shiftKey&&!R&&(R=P,P=0),(R||P)&&v.deltaMode&&(v.deltaMode===1?(R*=40,P*=40):(R*=800,P*=800)),R&&!V&&(V=R<1?-1:1),P&&!N&&(N=P<1?-1:1),{spinX:V,spinY:N,pixelX:R,pixelY:P}}function d(){e.enabled&&(e.mouseEntered=!0)}function f(){e.enabled&&(e.mouseEntered=!1)}function p(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&mt()-a<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&mt()-a<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),s("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),s("scroll",v.raw)),a=new i.Date().getTime(),!1)}function m(v){const T=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&T.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&T.releaseOnEdges)return!0;return!1}function y(v){let T=v,S=!0;if(!e.enabled||v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const C=e.params.mousewheel;e.params.cssMode&&T.preventDefault();let V=e.el;e.params.mousewheel.eventsTarget!=="container"&&(V=document.querySelector(e.params.mousewheel.eventsTarget));const N=V&&V.contains(T.target);if(!e.mouseEntered&&!N&&!C.releaseOnEdges)return!0;T.originalEvent&&(T=T.originalEvent);let R=0;const P=e.rtlTranslate?-1:1,D=u(T);if(C.forceToAxis)if(e.isHorizontal())if(Math.abs(D.pixelX)>Math.abs(D.pixelY))R=-D.pixelX*P;else return!0;else if(Math.abs(D.pixelY)>Math.abs(D.pixelX))R=-D.pixelY;else return!0;else R=Math.abs(D.pixelX)>Math.abs(D.pixelY)?-D.pixelX*P:-D.pixelY;if(R===0)return!0;C.invert&&(R=-R);let L=e.getTranslate()+R*C.sensitivity;if(L>=e.minTranslate()&&(L=e.minTranslate()),L<=e.maxTranslate()&&(L=e.maxTranslate()),S=e.params.loop?!0:!(L===e.minTranslate()||L===e.maxTranslate()),S&&e.params.nested&&T.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const k={time:mt(),delta:Math.abs(R),direction:Math.sign(R),raw:v};c.length>=2&&c.shift();const $=c.length?c[c.length-1]:void 0;if(c.push(k),$?(k.direction!==$.direction||k.delta>$.delta||k.time>$.time+150)&&p(k):p(k),m(k))return!0}else{const k={time:mt(),delta:Math.abs(R),direction:Math.sign(R)},$=l&&k.time<l.time+500&&k.delta<=l.delta&&k.direction===l.direction;if(!$){l=void 0;let Y=e.getTranslate()+R*C.sensitivity;const ee=e.isBeginning,fe=e.isEnd;if(Y>=e.minTranslate()&&(Y=e.minTranslate()),Y<=e.maxTranslate()&&(Y=e.maxTranslate()),e.setTransition(0),e.setTranslate(Y),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!ee&&e.isBeginning||!fe&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:k.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(o),o=void 0,c.length>=15&&c.shift();const Ce=c.length?c[c.length-1]:void 0,se=c[0];if(c.push(k),Ce&&(k.delta>Ce.delta||k.direction!==Ce.direction))c.splice(0);else if(c.length>=15&&k.time-se.time<500&&se.delta-k.delta>=1&&k.delta<=6){const Ue=R>0?.8:.2;l=k,c.splice(0),o=Nn(()=>{e.slideToClosest(e.params.speed,!0,void 0,Ue)},0)}o||(o=Nn(()=>{l=k,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if($||s("scroll",T),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),C.releaseOnEdges&&(Y===e.minTranslate()||Y===e.maxTranslate()))return!0}}return T.preventDefault?T.preventDefault():T.returnValue=!1,!1}function g(v){let T=e.el;e.params.mousewheel.eventsTarget!=="container"&&(T=document.querySelector(e.params.mousewheel.eventsTarget)),T[v]("mouseenter",d),T[v]("mouseleave",f),T[v]("wheel",y)}function _(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",y),!0):e.mousewheel.enabled?!1:(g("addEventListener"),e.mousewheel.enabled=!0,!0)}function w(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,y),!0):e.mousewheel.enabled?(g("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}r("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&w(),e.params.mousewheel.enabled&&_()}),r("destroy",()=>{e.params.cssMode&&_(),e.mousewheel.enabled&&w()}),Object.assign(e.mousewheel,{enable:_,disable:w})}function Mc(t){let{swiper:e,extendParams:n,on:r}=t;n({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function s(c,u){const d=function(){let y,g,_;return(w,v)=>{for(g=-1,y=w.length;y-g>1;)_=y+g>>1,w[_]<=v?g=_:y=_;return y}}();this.x=c,this.y=u,this.lastIndex=c.length-1;let f,p;return this.interpolate=function(y){return y?(p=d(this.x,y),f=p-1,(y-this.x[f])*(this.y[p]-this.y[f])/(this.x[p]-this.x[f])+this.y[f]):0},this}function i(c){e.controller.spline=e.params.loop?new s(e.slidesGrid,c.slidesGrid):new s(e.snapGrid,c.snapGrid)}function o(c,u){const d=e.controller.control;let f,p;const m=e.constructor;function y(g){if(g.destroyed)return;const _=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(i(g),p=-e.controller.spline.interpolate(-_)),(!p||e.params.controller.by==="container")&&(f=(g.maxTranslate()-g.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(f)||!Number.isFinite(f))&&(f=1),p=(_-e.minTranslate())*f+g.minTranslate()),e.params.controller.inverse&&(p=g.maxTranslate()-p),g.updateProgress(p),g.setTranslate(p,e),g.updateActiveIndex(),g.updateSlidesClasses()}if(Array.isArray(d))for(let g=0;g<d.length;g+=1)d[g]!==u&&d[g]instanceof m&&y(d[g]);else d instanceof m&&u!==d&&y(d)}function a(c,u){const d=e.constructor,f=e.controller.control;let p;function m(y){y.destroyed||(y.setTransition(c,e),c!==0&&(y.transitionStart(),y.params.autoHeight&&Nn(()=>{y.updateAutoHeight()}),xv(y.wrapperEl,()=>{f&&y.transitionEnd()})))}if(Array.isArray(f))for(p=0;p<f.length;p+=1)f[p]!==u&&f[p]instanceof d&&m(f[p]);else f instanceof d&&u!==f&&m(f)}function l(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}r("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const c=document.querySelector(e.params.controller.control);if(c&&c.swiper)e.controller.control=c.swiper;else if(c){const u=d=>{e.controller.control=d.detail[0],e.update(),c.removeEventListener("init",u)};c.addEventListener("init",u)}return}e.controller.control=e.params.controller.control}),r("update",()=>{l()}),r("resize",()=>{l()}),r("observerUpdate",()=>{l()}),r("setTranslate",(c,u,d)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(u,d)}),r("setTransition",(c,u,d)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(u,d)}),Object.assign(e.controller,{setTranslate:o,setTransition:a})}function YT(t){const{effect:e,swiper:n,on:r,setTranslate:s,setTransition:i,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=t;r("beforeInit",()=>{if(n.params.effect!==e)return;n.classNames.push(`${n.params.containerModifierClass}${e}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const d=o?o():{};Object.assign(n.params,d),Object.assign(n.originalParams,d)}),r("setTranslate",()=>{n.params.effect===e&&s()}),r("setTransition",(d,f)=>{n.params.effect===e&&i(f)}),r("transitionEnd",()=>{if(n.params.effect===e&&l){if(!c||!c().slideShadows)return;n.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())}),l()}});let u;r("virtualUpdate",()=>{n.params.effect===e&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(s(),u=!1)}))})}function JT(t,e){const n=Ba(e);return n!==e&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Vc(t,e,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${t?` swiper-slide-shadow-${t}`:""}`,s=Ba(e);let i=s.querySelector(`.${r.split(" ").join(".")}`);return i||(i=Gs("div",r.split(" ")),s.append(i)),i}function Fc(t){let{swiper:e,extendParams:n,on:r}=t;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),YT({effect:"coverflow",swiper:e,on:r,setTranslate:()=>{const{width:o,height:a,slides:l,slidesSizesGrid:c}=e,u=e.params.coverflowEffect,d=e.isHorizontal(),f=e.translate,p=d?-f+o/2:-f+a/2,m=d?u.rotate:-u.rotate,y=u.depth;for(let g=0,_=l.length;g<_;g+=1){const w=l[g],v=c[g],T=w.swiperSlideOffset,S=(p-T-v/2)/v,C=typeof u.modifier=="function"?u.modifier(S):S*u.modifier;let V=d?m*C:0,N=d?0:m*C,R=-y*Math.abs(C),P=u.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(u.stretch)/100*v);let D=d?0:P*C,L=d?P*C:0,k=1-(1-u.scale)*Math.abs(C);Math.abs(L)<.001&&(L=0),Math.abs(D)<.001&&(D=0),Math.abs(R)<.001&&(R=0),Math.abs(V)<.001&&(V=0),Math.abs(N)<.001&&(N=0),Math.abs(k)<.001&&(k=0),e.browser&&e.browser.isSafari&&(Math.abs(V)/90%2===1&&(V+=.001),Math.abs(N)/90%2===1&&(N+=.001));const $=`translate3d(${L}px,${D}px,${R}px)  rotateX(${N}deg) rotateY(${V}deg) scale(${k})`,Y=JT(u,w);if(Y.style.transform=$,w.style.zIndex=-Math.abs(Math.round(C))+1,u.slideShadows){let ee=d?w.querySelector(".swiper-slide-shadow-left"):w.querySelector(".swiper-slide-shadow-top"),fe=d?w.querySelector(".swiper-slide-shadow-right"):w.querySelector(".swiper-slide-shadow-bottom");ee||(ee=Vc("coverflow",w,d?"left":"top")),fe||(fe=Vc("coverflow",w,d?"right":"bottom")),ee&&(ee.style.opacity=C>0?C:0),fe&&(fe.style.opacity=-C>0?-C:0)}}},setTransition:o=>{e.slides.map(l=>Ba(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ZT="qv7u",ew="Cmkm",tw="x5bj",nw="Y5tL",rw="ucOI",sw="fYcF",iw="QmFB",ow="zRO9",aw="TMTE",lw="pyCI",cw="dWsM",uw="_--s-",dw="-yZd",Fe={section:ZT,hidden:ew,swiperWrapper:tw,yearSwiper:nw,yearSwiperSlide:rw,yearSlide:sw,isActive:iw,isInActive:ow,historySwiper:aw,historySwiperSlide:lw,historySlide:cw,historySlideTitle:uw,historySlideDescription:dw};var Qd={exports:{}},hw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fw=hw,pw=fw;function Xd(){}function Yd(){}Yd.resetWarningCache=Xd;var mw=function(){function t(r,s,i,o,a,l){if(l!==pw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Yd,resetWarningCache:Xd};return n.PropTypes=n,n};Qd.exports=mw();var E=Qd.exports;const I=om(E);function Jd({isActive:t,year:e}){return h.jsxs("div",{className:`${Fe.yearSlide} ${t?Fe.isActive:Fe.isInActive}`,children:[h.jsx("span",{children:e}),h.jsx("img",{src:`${t?"/src/assets/history_circle.svg":"/src/assets/history_circleline.svg"}`,alt:"","aria-hidden":!0})]})}Jd.propTypes={isActive:I.bool.isRequired,year:I.string.isRequired};function Zd({isActive:t,year:e,history:n}){return h.jsxs("div",{className:`${Fe.historySlide} ${t?Fe.isActive:Fe.isInActive}`,children:[h.jsx("span",{className:Fe.historySlideTitle,children:e}),h.jsx("ul",{className:Fe.historySlideDescription,children:n.map(r=>h.jsx("li",{children:r},r))})]})}Zd.propTypes={isActive:I.bool.isRequired,year:I.string.isRequired,history:I.arrayOf(I.string).isRequired};const gw={2007:["한국 소프트웨어산업협회 소프트웨어사업자 등록","Microsoft Gold Partner사 등록","‘주식회사 오픈에스지닷넷’ 설립"],2009:["기술보증기금 벤처기업 등록"],2010:["충남 아산시 본사 이전"],2017:["‘주식회사 오픈에스지’ 회사명 변경","R&D 센터 수립_서울 서초"],2020:["경기도 동탄으로 본사 이전 및 천안 자동화 연구소 신설"],2021:["Microsoft 공인파트너 MRPP 및 HoloLens2 판권 획득"],2022:["경영혁신형 중소기업 Main-biz 인증 획득","경광등 작동신호 무선 송출기 발명 특허 등록"],2023:["ISO 9001, 14001 획득","기술혁신형 중소기업 Inno-biz 인증 획득","벤처 기업 등록"]};function _w(){const[t,e]=x.useState(null),[n,r]=x.useState(null),s=Object.entries(gw).toSorted((i,o)=>o[0]-i[0]);return h.jsxs("section",{className:Fe.section,children:[h.jsx("h2",{className:Fe.hidden,children:"오픈에스지 연혁"}),h.jsxs("div",{className:Fe.swiperWrapper,children:[h.jsx(Wo,{mousewheel:!0,centeredSlides:!0,modules:[Mc,Fc,Lc],effect:"coverflow",breakpoints:{375:{slidesPerView:5,spaceBetween:10},1024:{slidesPerView:7,spaceBetween:20},1440:{slidesPerView:7,spaceBetween:30}},coverflowEffect:{rotate:0,stretch:0,depth:0,slideShadows:!0},onSwiper:e,controller:{by:"container",control:n},className:Fe.yearSwiper,children:s.map(([i])=>h.jsx(Go,{className:Fe.yearSwiperSlide,children:({isActive:o})=>h.jsx(Jd,{isActive:o,year:i},i)},i))}),h.jsx(Wo,{mousewheel:!0,centeredSlides:!0,modules:[Mc,Fc,Lc],effect:"coverflow",breakpoints:{375:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:20},1440:{slidesPerView:3,spaceBetween:30}},coverflowEffect:{rotate:20,scale:.7},onSwiper:r,controller:{by:"container",control:t},className:Fe.historySwiper,children:s.map(([i,o])=>h.jsx(Go,{className:Fe.historySwiperSlide,children:({isActive:a})=>h.jsx(Zd,{isActive:a,year:i,history:o})},i))})]})]})}function yw(){return h.jsx(_w,{})}function vw(){return h.jsx("div",{children:"Team"})}function Tw(){return h.jsx("div",{children:"Location"})}var Ko=new Map,hs=new WeakMap,jc=0,ww=void 0;function Ew(t){return t?(hs.has(t)||(jc+=1,hs.set(t,jc.toString())),hs.get(t)):"0"}function Iw(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Ew(t.root):t[e]}`).toString()}function Sw(t){let e=Iw(t),n=Ko.get(e);if(!n){const r=new Map;let s;const i=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&s.some(u=>a.intersectionRatio>=u);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=r.get(a.target))==null||l.forEach(u=>{u(c,a)})})},t);s=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:r},Ko.set(e,n)}return n}function bw(t,e,n={},r=ww){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:s,observer:i,elements:o}=Sw(n);let a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),i.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),i.unobserve(t)),o.size===0&&(i.disconnect(),Ko.delete(s))}}function fr({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:s,triggerOnce:i,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[d,f]=x.useState(null),p=x.useRef(),[m,y]=x.useState({inView:!!a,entry:void 0});p.current=c,x.useEffect(()=>{if(o||!d)return;let v;return v=bw(d,(T,S)=>{y({inView:T,entry:S}),p.current&&p.current(T,S),S.isIntersecting&&i&&v&&(v(),v=void 0)},{root:s,rootMargin:r,threshold:t,trackVisibility:n,delay:e},l),()=>{v&&v()}},[Array.isArray(t)?t.toString():t,d,s,r,i,o,n,l,e]);const g=(u=m.entry)==null?void 0:u.target,_=x.useRef();!d&&g&&!i&&!o&&_.current!==g&&(_.current=g,y({inView:!!a,entry:void 0}));const w=[f,m.inView,m.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const Aw={솔루션:"Equipment Control System",제품명:"AGV Control System",제품설명:"AGV를 이용한 물류 제어 시스템으로 실시간으로 AGV Traffic 을 제어합니다.",특징:["최대 80대 이상의 AGV 운용 및 Simulation 가능","개방형 프로토콜로 타 AGV를 빠르게 라인에 적용","Job 수행을 위한 정밀한 경로 계획 및 추적","Job 스케줄링 및 AGV 트래픽 최적화 알고리즘","알고리즘 기반 AGV 자동 충돌 방지","실시간 데이터 분석 및 관리","MES, MCS 시스템과 유연한 통합","Flexible한 Line 상황을 대응(Layout 변경 등)","C/S 와 Web 기반 사용자 친화적 인터페이스 제공","PlayBack & Simulation 지원 기능"],기능:["자동화 및 생산성 향상: 인공 지능형 ACS 를 사용함으로써 복잡한 Traffic 을 효율적으로 관리하여 생산성이 향상.","정확성 및 신뢰성: ACS Traffic 관제에 따라 AGV 목적지 이동 시간을 예측하여 효율적인 물류 운송을 계획할 수 있다.","Simulation 을 통해 Layout 배치 및 물동량 예측 가능"],기대효과:["자동화 및 생산성 향상: 인공 지능형 ACS 를 사용함으로써 복잡한 Traffic 을 효율적으로 관리하여 생산성이 향상.","정확성 및 신뢰성: ACS Traffic 관제에 따라 AGV 목적지 이동 시간을 예측하여 효율적인 물류 운송을 계획할 수 있다.","Simulation 을 통해 Layout 배치 및 물동량 예측 가능"],산업군:["semiconductor","display","battery","port"]},Pw={솔루션:"Equipment Control System",제품명:"OHT Control System",제품설명:"OHT를 이용한 물류 제어 시스템으로 고속으로 이동하는 OHT 의 실시간 Traffic 제어가 가능합니다.",특징:["최대 300대 이상의 OHT 제어 운영하며 Simulation 가능","Traffic 분산, 최적 Job 할당, 분기, HID 용량 및 Cluster 분산 등 최적화 기능 탑재","실시간 데이터 분석 및 관리","MES, MCS 시스템과 유연한 통합","3D 기반의 UI 화면 제공","OCS Core 기반으로 Customizing Application을 고객사에서 별도로 개발 제공","PlayBack & Simulation 지원 기능"],기능:["OHT 통신 및 이동중 로밍","OHT 상태관리","OHT 주행 제어, 위치 추적, 분기 합류 제어, 밀어내기","최적 경로 탐색, 경로 가중치 관리","Job 스케줄링, 최적 할당, 우선할당, 지정할당","MCS & MES 이벤트 보고 및 Job 요청 처리"],기대효과:["자동화 및 생산성 향상: 인공 지능형 OCS 를 사용함으로써 복잡한 Traffic 을 효율적으로 관리하여 생산성이 향상.","정확성 및 신뢰성: ACS Traffic 관제에 따라 AGV 목적지 이동 시간을 예측하여 효율적인 물류 운송을 계획할 수 있다.","Simulation 을 통해 Layout 배치 및 물동량 예측 가능"],산업군:["semiconductor","display","battery"]},Rw={솔루션:"Equipment Control System",제품명:"Stocker Control System",제품설명:"Stocker 장비를 제어하는 시스템으로, Stocker 내부의 Robot(RackMaster)을 최적의 동선으로 이동 및 밀어내기 시키며, Shelf (Rack)내 제품의 정보를 관리하고, 최대 Triple Robot(RackMaster) 제어 할 수 있는 스케줄링 기능 지원, 원격지 모니터링 및 제어기능 지원, 효율적인 물동량 산출을 위한 Simulation 등 다양한 기능을 제공합니다.",특징:["벡터 기반 렌더링 엔진으로 시인성 높은 UI 화면 제공","Configuration을 통한 SCS 최적화 기능","PLC Simulation 지원으로 PLC와 동일한 개발 환경 제공","라인이 아닌 Office에서 라인과 동일한 화면으로 제어 및 모니터링 가능","PlayBack & Simulation 지원 기능"],기능:["Single, Dual, Triple Robot(R/M) 동작 제어","MES/MCS 통신 연동 (HSMS)","EQ Melsec 통신","Multi Index or Conveyor Loading Scheduleing"],기대효과:["Robot, EQ Maker 에 국한되지 않는 표준화 작업 구현","Play-Back 기능을 통한 Alarm 원인 신속 확인 가능"],산업군:["semiconductor","display","battery"]},Cw={솔루션:"Equipment Control System",제품명:"Conveyor Control System",제품설명:"공장 자동화 물류의 기본인 Conveyor 물류에 대해 지능형 물동 운송 지령을 내리며 RTV, Lifter, Diverter 등등의 기능성 장비도 본 프로그램에 의해 자동 연동 제어가 됩니다.",특징:["Remote UI 화면 제공","2D, 2.5D Layout 지원","UX (MS WPF) UI","MES/MCS 대응 가능(SEMI 규격)","OCS Click-Once를 사용한 Install 및 자동 Patch","PlayBack & Simulation 지원 기능"],기능:["표준화된 통합 UI 구성","다양한 SCS 대응 (Shuttle, STK, Mask) ","실시간 주행 경로 변경 및 전송","SECS 표준을 준수한 자체 HSMS Driver 보유","다양한 Robot 제어 지원"],기대효과:["Remote UI를 통한 원격 제어 및 모니터링 ","하나의 프로그램으로 여러종류의 Stocker Type 대응 가능","Line 물리적 환경 변경에 대한 대응 원할 ","자체 HSMS Driver를 통한 HSMS Driver 구입 비용 절감","TCP/IP 또는 IO 접점을 통해 다양한 Robot 제어 가능"],산업군:["semiconductor","display","battery"]},xw={솔루션:"Monitoring Solution",제품명:"Advanced Integrated Monitoring Solution",제품설명:"현재의 기업 트렌드는 현장만을 위한 시스템보다 경영층의 직접적인 모니터링을 통한 통합업무 시스템으로, 현장의 정보흐름을 보다 빠르게 파악하여 원활하고 신속한 의사결정 및 위기상황에 탄력적으로 대응할 수 있는 프로세스 혁신을 이루어 내어 낭비가 제거된 새로운 시스템",특징:["가상 Line Tour 기능","Layout 슬라이드 쇼 기능","Layout 모델러 제공으로 현업에서 Layout 구성","Relay Server를 통한 원격지 사이트 모니터링"],기능:["Plug-in 형식의 레이아웃","강력하고 쉬운 Visual Components","사용자별 요구에 맞는 통합 모니터링","검증된 빠른 성능의 모니터링 엔진","개방형 아키텍처 다양한 시스템 확장","다양한 설비들의 Multiple Protocol 대응"],기대효과:["다양한 생산 현장과 설비 Layout Design ","사용자별 맞춤 Client Design ","사실시간 모니터링과 빠른 대처 가능 ","추가 설비 Design, 통신, 스트립터 확장 가능 ","투자비 절감"],산업군:["semiconductor","display","battery"]},kw={솔루션:"Comm Driver",제품명:"High-Speed Message Service",제품설명:"SECS 표준 HSMS (SEMI Equipment Communications Standard High-Speed Message Service) Driver는 공장 자동화를 위한 핵심 소프트웨어로서, 제조 공정에서 장비 간 효율적이고 신속한 통신을 지원합니다.",특징:["SEMI 통신 표준 준수","높은 속도와 안정성","쉬운 통합 및 사용","semiconductor 라인에서 검증된 제품","Binary, SECS-II Log"],기능:["Config 설정 및 런타임 환경 설정","Microsoft .NET 기반 SECS/GEM Driver"],기대효과:["개발 생산성 향상","확장성 있는 개발 방법론 제공"],산업군:["display","battery"]},Pt={ACS:Aw,OCS:Pw,SCS:Rw,CCS:Cw,"IDX Controller":{솔루션:"Equipment Control System",제품명:"Index Control System",제품설명:"Indexer (Auto Loader) 를 제어하기 위한 프로그램으로 EQ 설비에효율적인 Product 공급과 Stocker 간의 물류 반송을 담당합니다.",특징:["표준화된 통합 UI 구성","다양한 Indexer 제품의 I/O Module 대응","SECS 표준을 준수한 자체 HSMS Driver","Indexer 설비간 다양한 통신 프로토콜","다양한 Robot 제어 지원","다양한 Log Format 지원"],기능:["Robot 상태 관리","HSMS 통신(독립형)을 통한 MCS 연동","R/M Stocker Melsec 통신","EQ Sequence 통신","Safety Interlock"],기대효과:["다양한 공정의 EQ설비들에 대한 WorkFlow Scheduler로 확장성 향상","semiconductor 라인에서의 검증된 신뢰성 보장"],산업군:["display"]},"Map Designer":{솔루션:"Smart Tools",제품명:"Map Designer",제품설명:"MapDesigner는 semiconductor 제조 라인에서 OHT(Overhead Hoist Transporter) 및 AGV(Automated Guided Vehicle)의 동선을 그릴 수 있는 강력한 프로그램입니다.",특징:["직관적이고 사용자 친화적인 인터페이스","직관적인 디자인을 통해 사용자가 쉽게 동선을 그릴 수 있는 친화적인 환경 제공","다양한 경로 설계 도구를 통해 OHT 및 AGV의 동선을 자유롭게 그릴수 있게 제공","동선을 그린 후 실시간 시뮬레이션을 통해 시스템 동작을 미리 확인","다양한 제조 라인 및 생산 시설의 레이아웃을 지원하여 다양한 산업 환경에 적용"],기능:["CAD 도면 활용 지원","Layout 정보에 대한 Import/Export l지원","2D, 3D 지원"],기대효과:["최적화된 동선은 물류 로봇의 효율을 향상시켜 전체 생산성을 향상","효율적인 동선 및 생산 프로세스 최적화로 인해 생산 비용을 절감","다양한 레이아웃 및 환경에 적용 가능한 MapDesigner는 기업의 유연성과 변화에 대한 대응력을 향상"],산업군:["semiconductor","display","battery"]},"ACS Simulator":{솔루션:"Smart Tools",제품명:"ACS Simulator",제품설명:"ACS Simulator는 AGV(Control System) 시스템의 시뮬레이션을 제공하는 프로그램으로, 자동 유도 차량(AGV)의 제어 시스템을 효과적으로 시뮬레이션하고 테스트하는 데 사용됩니다.",특징:["실제 AGV 작업 환경을 모방한 시뮬레이션을 통해 실제 운용 전에 안전하게 테스트","다양한 작업 환경, 레이아웃, 및 장애물을 설정하여 다양한 시나리오에서의 AGV 동작을 시험","AGV의 움직임, 센서 데이터, 배터리 상태 등의 실시간 데이터를 분석하고 모니터링","시나리오를 간편하게 생성하고 수정하여 다양한 테스트 케이스를 수행"],기능:["운행 경로 시뮬레이션","장애물 회피 및 경로 최적화","양한 통신 프로토콜에 대한 테스트가 가능하며, 실제 환경에서 발생할 수 있는 다양한 상황을 시뮬레이션 할 수 있다.","시스템의 성능과 안정성을 다양한 상황에서 테스트하여 실제 운용 시의 문제를 미리 예방"],기대효과:["ACS Simulator를 통해 시스템을 효과적으로 개발하고 테스트함으로써 비용을 절감하고 운영 효율성을 향상","다양한 시나리오에서의 테스트를 통해 실제 운영 시의 안전성을 보장","시뮬레이션을 통해 발생하는 문제를 빠르게 식별하고 개선할 수 있어, 운영 중 발생할 수 있는 문제에 대한 대비를 가능","안전하게 시뮬레이션을 수행함으로써 생산성을 향상시키고 효율적인 운영"],산업군:["semiconductor","display","battery","port"]},"SCS Simulator":{솔루션:"Smart Tools",제품명:"SCS Simulator",제품설명:"SCS Simulator는 SCS(Control System)의 시뮬레이션 및 테스트를 위한 프로그램으로, 실제 SCS 시스템의 동작을 모방하고 다양한 시나리오에서의 성능을 테스트하는 데 사용됩니다.",특징:["실제 SCS 환경을 모방하여 생산 시스템의 시뮬레이션을 수행할 수 있습니다","다양한 제어 시나리오를 설정하여 SCS의 동작을 테스트하고 최적의 운영 방법을 찾을 수 있습니다.","실시간 데이터를 모니터링하고 분석하여 시스템의 상태를 실시간으로 확인","간편한 시나리오 생성 및 관리를 통해 다양한 테스트 케이스를 수행 가능"],기능:["SCS의 동작을 실제와 유사하게 시뮬레이션하여 시스템의 성능 및 안정성을 테스트 할 수 있다.","다양한 제어 시나리오에서의 SCS 동작을 테스트하고 최적의 운영 방법을 찾을 수 있다.","SCS의 실시간 데이터를 분석하고 모니터링하여 시스템의 상태를 실시간으로 확인","장애 발생 시의 시나리오를 설정하여 장애 처리 및 복구에 대한 테스트를 수행"],기대효과:["실제 운영 환경에 영향을 미치지 않고 SCS Simulator를 사용하여 시스템 업그레이드 및 유지보수 작업을 테스트","SCS Simulator를 통해 시스템을 효과적으로 개발하고 테스트함으로써 비용을 절감하고 운영 효율성을 향상","다양한 시나리오에서의 테스트를 통해 실제 운영 시의 안전성을 보장","시뮬레이션을 통해 발생하는 문제를 빠르게 식별하고 개선할 수 있어, 운영 중 발생할 수 있는 문제에 대한 대비 가능","안전하게 시뮬레이션을 수행함으로써 생산성을 향상시키고 효율적인 운영"],산업군:["semiconductor","display","battery"]},AIMS:xw,HSMS:kw};let fs;const Nw=new Uint8Array(16);function Ow(){if(!fs&&(fs=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!fs))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fs(Nw)}const Ie=[];for(let t=0;t<256;++t)Ie.push((t+256).toString(16).slice(1));function Dw(t,e=0){return Ie[t[e+0]]+Ie[t[e+1]]+Ie[t[e+2]]+Ie[t[e+3]]+"-"+Ie[t[e+4]]+Ie[t[e+5]]+"-"+Ie[t[e+6]]+Ie[t[e+7]]+"-"+Ie[t[e+8]]+Ie[t[e+9]]+"-"+Ie[t[e+10]]+Ie[t[e+11]]+Ie[t[e+12]]+Ie[t[e+13]]+Ie[t[e+14]]+Ie[t[e+15]]}const Lw=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Uc={randomUUID:Lw};function fn(t,e,n){if(Uc.randomUUID&&!e&&!t)return Uc.randomUUID();t=t||{};const r=t.random||(t.rng||Ow)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return Dw(r)}const Mw="cCXg",Vw="shWy",Fw="Ztfe",jw="TSdy",Uw="ojkS",Bw="_4E3M",$w="wqUQ",qw="_2n6y",zw="WNyA",Hw="jnR-",Ww="R1G5",Gw="La7f",Kw="DYaD",Qw="hIm4",Xw="Kptr",Yw="BPTv",Jw="s6mX",Zw="NVIE",eE="zxfX",tE="j93R",nE="uGVd",rE="_6T30",sE="KOm7",iE="Z42t",oE="M18e",aE="_7fOK",W={Lnb:Mw,list:Vw,listItem:Fw,link:jw,activeLink:Uw,SolutionBanner:Bw,wrapper:$w,title:qw,nav:zw,banner:Hw,solution:Ww,desc:Gw,Snb:Kw,item:Qw,Char:Xw,subTitle:Yw,container:Jw,containerTitle:Zw,product:eE,charList:tE,charItem:nE,charItemTitle:rE,Func:sE,imageWrapper:iE,image:oE,Effect:aE};function eh({LnbArray:t}){return h.jsx("nav",{className:W.Lnb,children:h.jsx("ul",{className:W.list,children:t&&t.map(e=>h.jsx("li",{className:W.listItem,children:h.jsx(wn,{to:`/solutions/${e}`,className:({isActive:n})=>n?W.activeLink:W.link,children:e})},fn()))})})}eh.propTypes={LnbArray:I.arrayOf(I.string).isRequired};function th({currentLocation:t,prevLocation:e}){return h.jsx("section",{className:W.SolutionBanner,children:h.jsxs("div",{className:W.wrapper,children:[h.jsx("h3",{className:W.title,children:"솔루션 배너"}),h.jsxs("p",{className:W.nav,children:[e,"  >  ",t]}),h.jsxs("div",{className:W.banner,children:[h.jsx("p",{className:W.desc,children:"물류 자동화의 첫 걸음"}),h.jsxs("p",{className:W.solution,children:["Open",t,"®"]})]})]})})}th.propTypes={currentLocation:I.string.isRequired,prevLocation:I.string.isRequired};function nh({currentLocation:t,data:e,refs:n}){return h.jsxs("section",{id:"Char",ref:n,className:W.Char,children:[h.jsxs("span",{className:W.subTitle,children:["Open",t]}),h.jsx("h3",{className:W.title,children:"제품 및 특징"}),h.jsxs("div",{className:W.container,children:[h.jsx("p",{className:W.containerTitle,children:"제품"}),h.jsx("p",{className:W.product,children:e&&e[t].제품설명})]}),h.jsxs("div",{className:W.container,children:[h.jsx("p",{className:W.containerTitle,children:"특징"}),h.jsx("ul",{className:W.charList,children:e&&e[t].특징.map(r=>h.jsxs("li",{className:W.charItem,children:[h.jsx("p",{className:W.charItemTitle,children:"특징 제목"}),h.jsx("p",{children:r})]},fn()))})]})]})}nh.propTypes={currentLocation:I.string.isRequired,data:I.objectOf(I.shape({솔루션:I.string,제품명:I.string,제품설명:I.string,특징:I.arrayOf(I.string),기능:I.arrayOf(I.string),기대효과:I.arrayOf(I.string),산업군:I.arrayOf(I.string)})).isRequired,refs:I.oneOfType([I.func,I.shape({current:I.instanceOf(Element)})]).isRequired};function rh({inViewChar:t,inViewFunc:e,inViewEffect:n}){return h.jsx("aside",{className:W.Snb,children:h.jsx("nav",{className:W.nav,children:h.jsxs("ul",{className:W.list,children:[h.jsx("li",{className:t&&t?W.item:"",children:h.jsx("a",{className:W.link,href:"#Char",children:"제품 및 특징"})}),h.jsx("li",{className:!t&&e?W.item:"",children:h.jsx("a",{className:W.link,href:"#Func",children:"기능"})}),h.jsx("li",{className:!e&&n?W.item:"",children:h.jsx("a",{className:W.link,href:"#Effect",children:"기대 효과"})})]})})})}rh.propTypes={inViewChar:I.bool.isRequired,inViewFunc:I.bool.isRequired,inViewEffect:I.bool.isRequired};function sh({currentLocation:t,data:e,refs:n}){return h.jsxs("section",{id:"Func",ref:n,className:W.Func,children:[h.jsx("h3",{className:W.title,children:"기능"}),h.jsx("div",{className:W.imageWrapper,children:h.jsx("img",{src:"http://via.placeholder.com/1320x200",className:W.image,alt:"솔루션 기능"})}),h.jsx("ul",{className:W.list,children:e&&e[t].기능.map(r=>h.jsx("li",{className:W.item,children:r},fn()))})]})}sh.propTypes={currentLocation:I.string.isRequired,data:I.objectOf(I.shape({솔루션:I.string,제품명:I.string,제품설명:I.string,특징:I.arrayOf(I.string),기능:I.arrayOf(I.string),기대효과:I.arrayOf(I.string),산업군:I.arrayOf(I.string)})).isRequired,refs:I.oneOfType([I.func,I.shape({current:I.instanceOf(Element)})]).isRequired};function ih({currentLocation:t,data:e,refs:n}){return h.jsxs("section",{id:"Effect",ref:n,className:W.Effect,children:[h.jsx("h3",{className:W.title,children:"기대효과"}),h.jsx("ul",{className:W.list,children:e&&e[t].기대효과.map(r=>h.jsx("li",{className:W.item,children:r},fn()))})]})}ih.propTypes={currentLocation:I.string.isRequired,data:I.objectOf(I.shape({솔루션:I.string,제품명:I.string,제품설명:I.string,특징:I.arrayOf(I.string),기능:I.arrayOf(I.string),기대효과:I.arrayOf(I.string),산업군:I.arrayOf(I.string)})).isRequired,refs:I.oneOfType([I.func,I.shape({current:I.instanceOf(Element)})]).isRequired};function lE(){const{id:t}=di(),[e,n]=x.useState([]),r={array:e.map(u=>u[0]),current:t,prev:Pt[t].솔루션},[s,i]=fr({triggerOnce:!1,threshold:.3}),[o,a]=fr({triggerOnce:!1,threshold:.3}),[l,c]=fr({triggerOnce:!1,threshold:.3});return x.useEffect(()=>{const u=Object.entries(Pt).filter(d=>d[1].솔루션.trim()===Pt[t].솔루션.trim());n(u)},[t]),h.jsxs("section",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[h.jsx("h2",{className:"sr-only",children:"솔루션별 페이지"}),h.jsx(eh,{LnbArray:r.array}),h.jsx(th,{currentLocation:r.current,prevLocation:r.prev}),h.jsx("div",{className:"flex justify-center",children:h.jsxs("div",{className:"w-full max-w-[1320px] flex desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop",children:[h.jsx(rh,{inViewChar:i,inViewFunc:a,inViewEffect:c}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx(nh,{refs:s,currentLocation:r.current,data:Pt}),h.jsx(sh,{refs:o,currentLocation:r.current,data:Pt}),h.jsx(ih,{refs:l,currentLocation:r.current,data:Pt})]})]})})]})}function cE(){return h.jsx("div",{children:"Machines"})}const uE="sH0g",dE="_4dww",hE="_--Gq",fE="_0Vow",pE="UuuJ",mE="_1LCW",gE="l6zU",_E="QQMF",yE="-tud",vE="p2n7",TE="_1Kis",wE="R-mE",EE="HFFf",Je={titleWrapper:uE,titleCategory:dE,titleText:hE,sectionWrapper:fE,downloadWrapper:pE,downloadText:mE,cardWrapper:gE,cardContainer:_E,cardInner:yE,cardTitle:vE,cardCategoryText:TE,cardLinkWrapper:wE,iconStyle:EE};function oh({category:t,title:e}){return h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:Je.titleCategory,children:t}),h.jsx("h3",{className:Je.titleText,children:e})]})}oh.propTypes={category:I.string.isRequired,title:I.string.isRequired};function IE(){return h.jsx("div",{className:Je.titleWrapper,children:h.jsx(oh,{category:"Support",title:"라이브러리"})})}function SE(){return h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:Je.iconStyle,children:h.jsx("path",{d:"M12 18.132L5.93486 12.0651L7.14686 10.8326L11.1429 14.8286V0H12.8571V14.8286L16.8514 10.8343L18.0651 12.0651L12 18.132ZM2.76857 24C1.98 24 1.32171 23.736 0.793714 23.208C0.264571 22.6789 0 22.02 0 21.2314V17.0777H1.71429V21.2314C1.71429 21.4943 1.824 21.736 2.04343 21.9566C2.264 22.176 2.50571 22.2857 2.76857 22.2857H21.2314C21.4943 22.2857 21.736 22.176 21.9566 21.9566C22.176 21.736 22.2857 21.4943 22.2857 21.2314V17.0777H24V21.2314C24 22.02 23.736 22.6783 23.208 23.2063C22.6789 23.7354 22.02 24 21.2314 24H2.76857Z",fill:"black"})})}function ks({mainText:t,subText:e,category:n,href:r,download:s,ariaLabel:i}){return h.jsx("div",{className:Je.cardWrapper,children:h.jsxs("div",{className:Je.cardContainer,children:[h.jsxs("div",{className:Je.cardInner,children:[h.jsx("h4",{className:Je.cardTitle,children:h.jsxs("span",{children:[t,h.jsx("br",{}),e]})}),h.jsx("span",{className:Je.cardCategoryText,children:n})]}),h.jsx("a",{href:r,className:Je.cardLinkWrapper,download:s,"aria-label":i,children:h.jsx(SE,{})})]})})}ks.propTypes={mainText:I.string.isRequired,subText:I.string.isRequired,category:I.string.isRequired,href:I.string.isRequired,download:I.string.isRequired,ariaLabel:I.string.isRequired};const bE="/ReOpenSG/assets/library_companyProfile_ko-WepWOYT4.pdf",Bc="/ReOpenSG/assets/library_compabyBrochure_ko-XbXxPsDC.pdf";function AE(){return h.jsxs("div",{className:Je.sectionWrapper,children:[h.jsx(ks,{mainText:"OPENSG",subText:"회사 소개서",category:"소개서",href:bE,download:"OPENSG_회사_소개서_국문",ariaLabel:"오픈에스지 회사 소개서 국문"}),h.jsx(ks,{mainText:"OPENSG",subText:"회사 브로슈어",category:"브로슈어",href:Bc,download:"OPENSG_회사_브로슈어_국문",ariaLabel:"오픈에스지 회사 브로슈어 국문"}),h.jsx(ks,{mainText:"OPENSG",subText:"회사 브로슈어",category:"브로슈어",href:Bc,download:"OPENSG_회사_브로슈어_국문",ariaLabel:"오픈에스지 회사 브로슈어 국문"})]})}function PE(){return h.jsx("div",{className:"w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop",children:h.jsxs("div",{className:"max-w-[1320px] m-auto w-full",children:[h.jsx(IE,{}),h.jsx(AE,{})]})})}const RE="jePh",CE="Z9i4",xE="N3Lw",kE="eDte",NE="DF7R",OE="Rnii",DE="LgpQ",LE="D2zZ",ME="_4eH-",VE="fLZD",FE="_0Rlx",jE="l2Cp",UE="gm8B",BE="hWqQ",$E="Mnm7",qE="_96pd",zE="_9BtF",me={Char:RE,CharTitle:CE,CharDesc:xE,Product:kE,ProductTitle:NE,ProductWrapper:OE,ProductLink:DE,linkWrapper:LE,image:ME,list:VE,itemName:FE,itemSubName:jE,itemDesc:UE,Snb:BE,nav:$E,item:qE,link:zE};function ah({industryDesc:t,refs:e}){return h.jsxs("section",{id:"Char",ref:e,className:me.Char,children:[h.jsx("h3",{className:me.CharTitle,children:"산업 특징"}),h.jsx("p",{className:me.CharDesc,children:t})]})}ah.propTypes={industryDesc:I.string.isRequired,refs:I.oneOfType([I.func,I.shape({current:I.instanceOf(Element)})]).isRequired};function lh({industryProducts:t,refs:e}){return h.jsxs("section",{id:"Product",ref:e,className:me.Product,children:[h.jsx("h3",{className:me.ProductTitle,children:"관련 제품"}),h.jsx("div",{className:me.ProductWrapper,children:Object.entries(t).map(n=>h.jsx(er,{to:`/solutions/${n[0]}`,className:me.ProductLink,children:h.jsxs("div",{className:me.linkWrapper,children:[h.jsx("div",{className:me.image,children:h.jsx("img",{src:"http://via.placeholder.com/200x250",alt:"제픔 사진"})}),h.jsxs("dl",{className:me.list,children:[h.jsx("dt",{className:me.itemName,children:n[0]}),h.jsx("dt",{className:me.itemSubName,children:n[1].제품명}),h.jsx("dd",{className:me.itemDesc,children:n[1].제품설명})]})]})},fn()))})]})}lh.propTypes={industryProducts:I.oneOfType([I.object]).isRequired,refs:I.oneOfType([I.func,I.shape({current:I.instanceOf(Element)})]).isRequired};function ch({inViewChar:t,inViewProduct:e}){return h.jsx("aside",{className:me.Snb,children:h.jsx("nav",{className:me.nav,children:h.jsxs("ul",{className:me.list,children:[h.jsx("li",{className:t?me.item:"",children:h.jsx("a",{className:me.link,href:"#Char",children:"산업 특징"})}),h.jsx("li",{className:!t&&e?me.item:"",children:h.jsx("a",{className:me.link,href:"#Product",children:"관련 제품"})})]})})})}ch.propTypes={inViewChar:I.bool.isRequired,inViewProduct:I.bool.isRequired};const Qs={semiconductor:{name:"반도체",desc:"기술과 지식이 집약된 첨단 하이테크 산업인 반도체/태양광은 제품의 고사양화에 따라 공정 난이도가 높아지면서 사람의 판단이나 숙련도를 배제한 자동화된 시스템에 의한 제조환경 운영이 보편화되고 있습니다. 복잡한 공정/설비, 데이터양의 폭발적 증가로 자동화 및 시스템에 의한 공정관리가 필수임에 따라 많은 기업에서 제조설비, 측정/검사설비 및 물류설비에 대한 자동화 제어 기술과 빅데이터 기반 AI 기술을 적용한 품질관리 및 설비 엔지니어링 시스템으로 제조 경쟁력 향상을 추진하고 있습니다.",solutions:[]},display:{name:"디스플레이",desc:"디스플레이는 LCD, OLED, QLED, LED, PDP 등 다양한 기술로 제조되며, 특히 OLED는 고가의 제품으로써 제조 공정의 안정성과 품질관리가 매우 중요합니다. 디스플레이 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.",solutions:[]},battery:{name:"배터리",desc:"배터리 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.",solutions:[]},port:{name:"항만",desc:"항만은 물류센터와 함께 물류산업의 중심이 되는 산업입니다. 항만에서는 고객사의 요구에 맞는 자동화 설비를 구축하여 물류센터의 생산성을 향상시키고 있습니다.",solutions:[]}};Object.entries(Pt).forEach(([t,{산업군:e}])=>{e.forEach(n=>{Qs[n]&&Qs[n].solutions.push(t)})});function HE(){const{id:t}=di(),[e,n]=x.useState(""),[r,s]=x.useState({});x.useEffect(()=>{n(Qs[t].desc),Qs[t].solutions.map(c=>s(u=>({...u,[c]:Pt[c]})))},[t]);const[i,o]=fr({triggerOnce:!1,threshold:.1}),[a,l]=fr({triggerOnce:!1,threshold:.1});return h.jsxs("section",{className:"desktop:pb-open-5xl tablet:pb-open-5xl pb-open-2xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile",children:[h.jsx("h2",{className:"sr-only",children:"산업군별 페이지"}),h.jsxs("div",{className:"flex desktop:gap-open-4xl tablet:gap-open-4xl",children:[h.jsx(ch,{inViewChar:o,inViewProduct:l}),h.jsxs("div",{className:"flex-1",children:[h.jsx(ah,{refs:i,currentLocation:t,industryDesc:e}),h.jsx(lh,{refs:a,currentLocation:t,industryProducts:r})]})]})]})}const Sr={_origin:"https://api.emailjs.com"},WE=(t,e="https://api.emailjs.com")=>{Sr._userID=t,Sr._origin=e},uh=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class $c{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const dh=(t,e,n={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new $c(o);a.status===200||a.text==="OK"?r(a):s(a)}),i.addEventListener("error",({target:o})=>{s(new $c(o))}),i.open("POST",Sr._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),GE=(t,e,n,r)=>{const s=r||Sr._userID;return uh(s,t,e),dh("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},KE=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},QE=(t,e,n,r)=>{const s=r||Sr._userID,i=KE(n);uh(s,t,e);const o=new FormData(i);return o.append("lib_version","3.11.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",s),dh("/api/v1.0/email/send-form",o)},XE={init:WE,send:GE,sendForm:QE},yo={serviceId:"opensg",templateId:"opensg",apiKey:"6NuaSgBDx54b9MicI"},YE="_04E1",JE="XcIS",ZE="kQ87",eI="S-it",tI="fPrs",nI="gTH2",rI="_9gQX",sI="slSk",iI="AQ3n",oI="HCCC",aI="AMX8",lI="OF26",cI="XF0V",uI="u95l",dI="L-E5",hI="dAyt",fI="u5JU",pI="_54W8",he={formWrapper:YE,wrapper:JE,titleWrapper:ZE,titleCategory:eI,title:tI,titleDesc:nI,label:rI,input:sI,textarea:iI,iconStyle:oI,agreementText:aI,agreementOl:lI,warning:cI,checkboxWrapper:uI,contentWrapper:dI,inquiryLabel:hI,inquiryWrapper:fI,personalInfoWrapper:pI};function Xs({labelText:t,inputType:e,name:n,placeholderText:r}){const s=fn();return h.jsxs("div",{className:he.wrapper,children:[h.jsx("label",{htmlFor:s,children:h.jsx("h4",{className:he.label,children:t})}),h.jsx("input",{type:e,id:s,name:n,placeholder:r,className:he.input,required:!0})]})}Xs.propTypes={labelText:I.string.isRequired,inputType:I.string.isRequired,name:I.string.isRequired,placeholderText:I.string.isRequired};function mI(){return h.jsxs("fieldset",{className:he.personalInfoWrapper,children:[h.jsx(Xs,{labelText:"받으실 이메일",inputType:"email",name:"email",placeholderText:"abc@abcd.com"}),h.jsx(Xs,{labelText:"받으실 연락처",inputType:"tel",name:"tel",placeholderText:"010-1234-1234"})]})}function ps(){return h.jsx("svg",{viewBox:"0 0 148 148",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:he.iconStyle,children:h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M136.651 32.2364L129.436 30.5344L109.937 49.9224L98.8921 38.6744L117.91 18.7222L116.245 11.3962C112.226 10.0517 108.023 9.3402 103.785 9.28718C99.1628 9.2161 94.5751 10.0977 90.3081 11.8772C86.1882 13.7421 82.4641 16.3797 79.3376 19.6472C75.8573 22.944 73.101 26.9289 71.2439 31.3484C67.6683 40.1441 67.6683 49.9883 71.2439 58.7839C51.9598 77.7556 32.9248 96.9788 14.1436 116.448C12.2011 118.992 11.2761 122.165 11.5166 125.356C11.7062 128.789 13.2498 132.005 15.8086 134.301C16.9556 135.55 18.3246 136.586 19.8509 137.335C21.4234 138.029 23.1161 138.426 24.8274 138.51C27.7504 138.454 30.5531 137.344 32.7269 135.392C47.0459 121.915 74.4814 94.2299 90.0676 78.0054C94.2949 79.7999 98.8366 80.7249 103.425 80.7157C108.043 80.712 112.614 79.7827 116.867 77.9827C121.12 76.1826 124.969 73.5483 128.187 70.2354C134.796 63.4946 138.488 54.4235 138.464 44.9829C138.571 40.6629 137.958 36.3553 136.651 32.2364ZM27.1306 128.834C26.7746 129.15 26.3454 129.373 25.8819 129.482C25.4258 129.561 24.9597 129.561 24.5036 129.482C24.0255 129.409 23.5701 129.229 23.1716 128.954C22.7441 128.704 22.3825 128.355 22.1171 127.937C20.8221 126.614 19.6104 124.098 20.8221 122.683C33.4946 109.206 59.5889 82.8617 75.9059 66.7574C76.8309 67.9784 77.8484 69.1439 78.9399 70.2354C80.0314 71.3732 81.2061 72.4277 82.4549 73.3897C66.6744 89.5772 40.9316 115.607 27.1306 128.834ZM129.972 44.9829C129.991 52.0592 127.234 58.8579 122.276 63.9269C117.329 68.7803 110.674 71.4992 103.744 71.4992C96.8131 71.4992 90.159 68.7803 85.2114 63.9269C81.5852 60.1427 79.1082 55.4067 78.0683 50.2697C77.0285 45.1328 77.4687 39.8062 79.3376 34.9097C80.5817 31.5772 82.5113 28.543 85.0018 26.0031C87.4922 23.4633 90.488 21.4744 93.7954 20.1652C96.9357 18.8508 100.307 18.1778 103.711 18.1857H106.061L89.2536 35.5109V41.9489L106.782 59.3944H112.887L129.972 42.5964V44.9829ZM29.9704 61.8642H44.1321L50.6534 68.4964L56.9249 62.2619L50.7736 55.9904V55.5927L51.3009 40.3394L49.2659 36.2972L22.8109 18.8887L17.3441 19.4992L9.65738 27.3524L9.04688 32.8932L26.0484 59.8847L29.9704 61.8642ZM21.2291 28.2682L42.6336 42.3652L42.2729 52.7529H32.3199L18.5189 30.9044L21.2291 28.2682ZM86.9504 92.6482L93.1849 86.4229L121.915 115.884C124.335 118.428 125.685 121.804 125.685 125.315C125.685 128.825 124.335 132.202 121.915 134.745C120.096 136.613 117.756 137.89 115.2 138.41C112.645 138.929 109.992 138.668 107.587 137.659C106.052 136.978 104.676 135.986 103.545 134.745L74.4814 105.117L80.7621 98.8457L109.733 128.39C110.123 128.82 110.607 129.152 111.148 129.361C112.213 129.794 113.404 129.794 114.469 129.361C115.01 129.152 115.495 128.82 115.884 128.39C116.289 127.989 116.605 127.507 116.809 126.975C117.022 126.432 117.134 125.856 117.142 125.273C117.133 124.691 117.024 124.115 116.819 123.571C116.614 123.039 116.298 122.557 115.894 122.156L86.9504 92.6482Z",className:"fill-current"})})}function hh({type:t,id:e,name:n,defaultValue:r,labelText:s}){return h.jsxs("div",{className:"w-[160px]",children:[h.jsx("input",{type:t,id:e,name:n,defaultValue:r,className:"hidden peer"}),h.jsxs("label",{htmlFor:e,className:`peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900 ${he.inquiryLabel}`,children:[s==="제품 문의"?h.jsx(ps,{}):s==="구매 문의"?h.jsx(ps,{}):s==="AS 문의"?h.jsx(ps,{}):h.jsx(ps,{}),h.jsx("span",{children:s})]})]})}hh.propTypes={type:I.string.isRequired,id:I.string.isRequired,name:I.string.isRequired,defaultValue:I.string.isRequired,labelText:I.string.isRequired};const gI=[{id:"productId",defaultValue:"제품 문의"},{id:"purchaseId",defaultValue:"구매 문의"},{id:"asId",defaultValue:"AS 문의"},{id:"etcId",defaultValue:"기타 문의"}];function _I(){return h.jsxs("fieldset",{className:he.inquiryWrapper,children:[h.jsx("h4",{className:he.label,children:"문의유형"}),h.jsx("div",{children:gI.map(({id:t,defaultValue:e})=>h.jsx(hh,{type:"radio",id:t,name:"type",defaultValue:e,onClick:()=>null,labelText:e},t))})]})}function yI(){const t=fn();return h.jsxs("fieldset",{className:he.contentWrapper,children:[h.jsx(Xs,{labelText:"제목",inputType:"text",name:"title",placeholderText:"AGV 구매 문의"}),h.jsxs("div",{className:he.wrapper,children:[h.jsx("label",{htmlFor:t,children:h.jsx("h4",{className:he.label,children:"내용"})}),h.jsx("textarea",{name:"message",id:t,cols:"30",rows:"10",placeholder:"AGV 2대 견적 문의드립니다.",className:he.textarea,required:!0})]})]})}function fh({state:t,setState:e}){const n=()=>{e(!t)};return h.jsxs("fieldset",{className:he.agreementText,children:[h.jsx("h4",{children:"개인정보 활용동의"}),h.jsx("p",{children:"OPENSG는 개인정보보호법 및 관련 법령에 의거 고객님들의 의견 접수와 관련한 성실한 답변을 드리기 위해 필요한 최소한의 개인정보를 아래와 같이 수집, 이용하고자 합니다."}),h.jsxs("ol",{className:he.agreementOl,children:[h.jsx("li",{children:"필수정보의 수집 목적 : 온라인 상담실을 통한 정보주체의 의견접수 및 문의에 대한 답변/안내"}),h.jsx("li",{children:"필수 수집 항목 : 이름, 이메일 주소"}),h.jsx("li",{children:"보유 및 이용기간 : 상담 신청 후 1년"}),h.jsx("li",{className:he.warning,children:"※ 고객님께서는 본 동의를 거부하실 수 있으나 거부 시 필수정보의 수집 목적에 해당하는 사항의 처리가 제한될 수 있습니다."})]}),h.jsxs("div",{className:he.checkboxWrapper,children:[h.jsx("input",{type:"checkbox",id:"agreement",required:!0,checked:t,onChange:n,className:"peer"}),h.jsx("label",{htmlFor:"agreement",className:"pl-open-lg",children:"(필수) 위 개인정보 수집 및 이용에 동의합니다."})]})]})}fh.propTypes={state:I.bool.isRequired,setState:I.func.isRequired};function ph({category:t,title:e,desc:n}){return h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:he.titleCategory,children:t}),h.jsx("h3",{className:he.title,children:e}),h.jsx("p",{className:he.titleDesc,children:n})]})}ph.propTypes={category:I.string.isRequired,title:I.string.isRequired,desc:I.string.isRequired};function vI(){return h.jsx("div",{className:he.titleWrapper,children:h.jsx(ph,{category:"Support",title:"고객문의",desc:"상세하게 작성해 주시면 더 빠르게 답변드릴 수 있습니다."})})}function mh({type:t,buttonText:e,buttonStyle:n,onClick:r}){return h.jsx("button",{type:t,className:n,onClick:r,children:e})}mh.propTypes={type:I.oneOf(["submit","button","reset"]).isRequired,buttonText:I.string.isRequired,buttonStyle:I.string.isRequired,onClick:I.func.isRequired};function TI(){const t=x.useRef(null),[e,n]=x.useState(!1),r=i=>{i.preventDefault(),XE.sendForm(yo.serviceId,yo.templateId,t.current,yo.apiKey).then(()=>{Q.success("전송되었습니다."),setTimeout(()=>{window.location.reload()},4e3)},()=>{Q.error("전송에 실패하였습니다.")})},s=()=>{e||Q.error("개인정보 활용동의에 체크해 주세요.")};return h.jsx("div",{className:"w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop",children:h.jsxs("form",{ref:t,onSubmit:r,className:he.formWrapper,children:[h.jsx(vI,{}),h.jsx(_I,{}),h.jsx(mI,{}),h.jsx(yI,{}),h.jsx(fh,{state:e,setState:n}),h.jsx(mh,{buttonText:"문의하기",buttonStyle:"-text--openfoundation-secondary font-open-label text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl p-open-lg rounded-[20px] -bg--open-blue-900 w-[180px] block mx-auto mb-open-5xl",type:`${e?"submit":"button"}`,onClick:s})]})})}function wI(){return h.jsx("div",{children:"Device"})}var EI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,qa=qa||{},z=EI||self;function Ti(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function II(t){return Object.prototype.hasOwnProperty.call(t,vo)&&t[vo]||(t[vo]=++SI)}var vo="closure_uid_"+(1e9*Math.random()>>>0),SI=0;function bI(t,e,n){return t.call.apply(t.bind,arguments)}function AI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Oe=bI:Oe=AI,Oe.apply(null,arguments)}function ms(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function we(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function zt(){this.s=this.s,this.o=this.o}var PI=0;zt.prototype.s=!1;zt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),PI!=0)&&II(this)};zt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function za(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function qc(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ti(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function De(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var RI=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};z.addEventListener("test",n,e),z.removeEventListener("test",n,e)}catch{}return t}();function br(t){return/^[\s\xa0]*$/.test(t)}function wi(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function nt(t){return wi().indexOf(t)!=-1}function Ha(t){return Ha[" "](t),t}Ha[" "]=function(){};function CI(t,e){var n=w0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xI=nt("Opera"),On=nt("Trident")||nt("MSIE"),_h=nt("Edge"),Qo=_h||On,yh=nt("Gecko")&&!(wi().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge"))&&!(nt("Trident")||nt("MSIE"))&&!nt("Edge"),kI=wi().toLowerCase().indexOf("webkit")!=-1&&!nt("Edge");function vh(){var t=z.document;return t?t.documentMode:void 0}var Xo;e:{var To="",wo=function(){var t=wi();if(yh)return/rv:([^\);]+)(\)|;)/.exec(t);if(_h)return/Edge\/([\d\.]+)/.exec(t);if(On)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kI)return/WebKit\/(\S+)/.exec(t);if(xI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wo&&(To=wo?wo[1]:""),On){var Eo=vh();if(Eo!=null&&Eo>parseFloat(To)){Xo=String(Eo);break e}}Xo=To}var Yo;if(z.document&&On){var zc=vh();Yo=zc||parseInt(Xo,10)||void 0}else Yo=void 0;var NI=Yo;function Ar(t,e){if(De.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yh){e:{try{Ha(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ar.$.h.call(this)}}we(Ar,De);var OI={2:"touch",3:"pen",4:"mouse"};Ar.prototype.h=function(){Ar.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gr="closure_listenable_"+(1e6*Math.random()|0),DI=0;function LI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++DI,this.fa=this.ia=!1}function Ei(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wa(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function MI(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Th(t){const e={};for(const n in t)e[n]=t[n];return e}const Hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wh(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Hc.length;i++)n=Hc[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ii(t){this.src=t,this.g={},this.h=0}Ii.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Zo(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LI(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Jo(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=gh(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ei(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zo(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ga="closure_lm_"+(1e6*Math.random()|0),Io={};function Eh(t,e,n,r,s){if(r&&r.once)return Sh(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Eh(t,e[i],n,r,s);return null}return n=Xa(n),t&&t[Gr]?t.O(e,n,Wr(r)?!!r.capture:!!r,s):Ih(t,e,n,!1,r,s)}function Ih(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Wr(s)?!!s.capture:!!s,a=Qa(t);if(a||(t[Ga]=a=new Ii(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=VI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ah(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VI(){function t(n){return e.call(t.src,t.listener,n)}const e=FI;return t}function Sh(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sh(t,e[i],n,r,s);return null}return n=Xa(n),t&&t[Gr]?t.P(e,n,Wr(r)?!!r.capture:!!r,s):Ih(t,e,n,!0,r,s)}function bh(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bh(t,e[i],n,r,s);else r=Wr(r)?!!r.capture:!!r,n=Xa(n),t&&t[Gr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Zo(i,n,r,s),-1<n&&(Ei(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zo(e,n,r,s)),(n=-1<t?e[t]:null)&&Ka(n))}function Ka(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gr])Jo(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ah(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qa(e))?(Jo(n,t),n.h==0&&(n.src=null,e[Ga]=null)):Ei(t)}}}function Ah(t){return t in Io?Io[t]:Io[t]="on"+t}function FI(t,e){if(t.fa)t=!0;else{e=new Ar(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ka(t),t=n.call(r,e)}return t}function Qa(t){return t=t[Ga],t instanceof Ii?t:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xa(t){return typeof t=="function"?t:(t[So]||(t[So]=function(e){return t.handleEvent(e)}),t[So])}function Te(){zt.call(this),this.i=new Ii(this),this.S=this,this.J=null}we(Te,zt);Te.prototype[Gr]=!0;Te.prototype.removeEventListener=function(t,e,n,r){bh(this,t,e,n,r)};function Pe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new De(e,t);else if(e instanceof De)e.target=e.target||t;else{var s=e;e=new De(r,t),wh(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=gs(o,r,!0,e)&&s}if(o=e.g=t,s=gs(o,r,!0,e)&&s,s=gs(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=gs(o,r,!1,e)&&s}Te.prototype.N=function(){if(Te.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ei(n[r]);delete t.g[e],t.h--}}this.J=null};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function gs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Jo(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ya=z.JSON.stringify;class jI{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UI(){var t=Ja;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BI{constructor(){this.h=this.g=null}add(e,n){const r=Ph.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ph=new jI(()=>new $I,t=>t.reset());class $I{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function zI(t){z.setTimeout(()=>{throw t},0)}let Pr,Rr=!1,Ja=new BI,Rh=()=>{const t=z.Promise.resolve(void 0);Pr=()=>{t.then(HI)}};var HI=()=>{for(var t;t=UI();){try{t.h.call(t.g)}catch(n){zI(n)}var e=Ph;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Rr=!1};function Si(t,e){Te.call(this),this.h=t||1,this.g=e||z,this.j=Oe(this.qb,this),this.l=Date.now()}we(Si,Te);O=Si.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pe(this,"tick"),this.ga&&(Za(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Za(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Si.$.N.call(this),Za(this),delete this.g};function el(t,e,n){if(typeof t=="function")n&&(t=Oe(t,n));else if(t&&typeof t.handleEvent=="function")t=Oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Ch(t){t.g=el(()=>{t.g=null,t.i&&(t.i=!1,Ch(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class WI extends zt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ch(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cr(t){zt.call(this),this.h=t,this.g={}}we(Cr,zt);var Wc=[];function xh(t,e,n,r){Array.isArray(n)||(n&&(Wc[0]=n.toString()),n=Wc);for(var s=0;s<n.length;s++){var i=Eh(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function kh(t){Wa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ka(e)},t),t.g={}}Cr.prototype.N=function(){Cr.$.N.call(this),kh(this)};Cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bi(){this.g=!0}bi.prototype.Ea=function(){this.g=!1};function GI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function KI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function In(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XI(t,n)+(r?" "+r:"")})}function QI(t,e){t.info(function(){return"TIMEOUT: "+e})}bi.prototype.info=function(){};function XI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ya(n)}catch{return e}}var pn={},Gc=null;function Ai(){return Gc=Gc||new Te}pn.Ta="serverreachability";function Nh(t){De.call(this,pn.Ta,t)}we(Nh,De);function xr(t){const e=Ai();Pe(e,new Nh(e))}pn.STAT_EVENT="statevent";function Oh(t,e){De.call(this,pn.STAT_EVENT,t),this.stat=e}we(Oh,De);function je(t){const e=Ai();Pe(e,new Oh(e,t))}pn.Ua="timingevent";function Dh(t,e){De.call(this,pn.Ua,t),this.size=e}we(Dh,De);function Kr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Pi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Lh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function tl(){}tl.prototype.h=null;function Kc(t){return t.h||(t.h=t.i())}function Mh(){}var Qr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nl(){De.call(this,"d")}we(nl,De);function rl(){De.call(this,"c")}we(rl,De);var ea;function Ri(){}we(Ri,tl);Ri.prototype.g=function(){return new XMLHttpRequest};Ri.prototype.i=function(){return{}};ea=new Ri;function Xr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Cr(this),this.P=YI,t=Qo?125:void 0,this.V=new Si(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var YI=45e3,Fh={},ta={};O=Xr.prototype;O.setTimeout=function(t){this.P=t};function na(t,e,n){t.L=1,t.A=xi(Et(e)),t.u=n,t.S=!0,jh(t,null)}function jh(t,e){t.G=Date.now(),Yr(t),t.B=Et(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Gh(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Vh,t.g=mf(t.l,n?e:null,!t.u),0<t.O&&(t.M=new WI(Oe(t.Pa,t,t.g),t.O)),xh(t.U,t.g,"readystatechange",t.nb),e=t.I?Th(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),xr(),GI(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&rt(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=rt(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Qo||this.g&&(this.h.h||this.g.ja()||Jc(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?xr(3):xr(2)),Ci(this);var n=this.g.da();this.ca=n;t:if(Uh(this)){var r=Jc(this.g);t="";var s=r.length,i=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),pr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,KI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!br(a)){var c=a;break t}}c=null}if(n=c)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,n);else{this.i=!1,this.s=3,je(12),Qt(this),pr(this);break e}}this.S?(Bh(this,u,o),Qo&&this.i&&u==3&&(xh(this.U,this.V,"tick",this.mb),this.V.start())):(In(this.j,this.m,o,null),ra(this,o)),u==4&&Qt(this),this.i&&!this.J&&(u==4?df(this.l,this):(this.i=!1,Yr(this)))}else y0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),Qt(this),pr(this)}}}catch{}finally{}};function Uh(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Bh(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=JI(t,n),s==ta){e==4&&(t.s=4,je(14),r=!1),In(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Fh){t.s=4,je(15),In(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else In(t.j,t.m,s,null),ra(t,s);Uh(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),cl(e),e.M=!0,je(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),Qt(t),pr(t))}O.mb=function(){if(this.g){var t=rt(this.g),e=this.g.ja();this.o<e.length&&(Ci(this),Bh(this,t,e),this.i&&t!=4&&Yr(this))}};function JI(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ta:(n=Number(e.substring(n,r)),isNaN(n)?Fh:(r+=1,r+n>e.length?ta:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,Qt(this)};function Yr(t){t.Y=Date.now()+t.P,$h(t,t.P)}function $h(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Kr(Oe(t.lb,t),e)}function Ci(t){t.C&&(z.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(QI(this.j,this.B),this.L!=2&&(xr(),je(17)),Qt(this),this.s=2,pr(this)):$h(this,this.Y-t)};function pr(t){t.l.H==0||t.J||df(t.l,t)}function Qt(t){Ci(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Za(t.V),kh(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ra(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||sa(n.i,t))){if(!t.K&&sa(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Zs(n),Di(n);else break e;ll(n),je(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Kr(Oe(n.ib,n),6e3));if(1>=Xh(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Xt(n,11)}else if((t.K||n.g==t)&&Zs(n),!br(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(sl(i,i.h),i.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ie(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=pf(r,r.J?r.pa:null,r.Y),o.K){Yh(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ci(a),Yr(a)),r.g=o}else cf(r);0<n.j.length&&Li(n)}else c[0]!="stop"&&c[0]!="close"||Xt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Xt(n,7):al(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}xr(4)}catch{}}function ZI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ti(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function e0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ti(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ti(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=e0(t),r=ZI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var zh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function t0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Zt(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zt){this.h=t.h,Ys(this,t.j),this.s=t.s,this.g=t.g,Js(this,t.m),this.l=t.l;var e=t.i,n=new kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qc(this,n),this.o=t.o}else t&&(e=String(t).match(zh))?(this.h=!1,Ys(this,e[1]||"",!0),this.s=sr(e[2]||""),this.g=sr(e[3]||"",!0),Js(this,e[4]),this.l=sr(e[5]||"",!0),Qc(this,e[6]||"",!0),this.o=sr(e[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}Zt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ir(e,Xc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ir(e,Xc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ir(n,n.charAt(0)=="/"?s0:r0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ir(n,o0)),t.join("")};function Et(t){return new Zt(t)}function Ys(t,e,n){t.j=n?sr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Js(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qc(t,e,n){e instanceof kr?(t.i=e,a0(t.i,t.h)):(n||(e=ir(e,i0)),t.i=new kr(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function xi(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function sr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ir(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,n0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function n0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xc=/[#\/\?@]/g,r0=/[#\?:]/g,s0=/[#\?]/g,i0=/[#\?@]/g,o0=/#/g;function kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ht(t){t.g||(t.g=new Map,t.h=0,t.i&&t0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=kr.prototype;O.add=function(t,e){Ht(this),this.i=null,t=zn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hh(t,e){Ht(t),e=zn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wh(t,e){return Ht(t),e=zn(t,e),t.g.has(e)}O.forEach=function(t,e){Ht(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){Ht(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){Ht(this);let e=[];if(typeof t=="string")Wh(this,t)&&(e=e.concat(this.g.get(zn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return Ht(this),this.i=null,t=zn(this,t),Wh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Gh(t,e,n){Hh(t,e),0<n.length&&(t.i=null,t.g.set(zn(t,e),za(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function zn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function a0(t,e){e&&!t.j&&(Ht(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Hh(this,r),Gh(this,s,n))},t)),t.j=e}var l0=class{constructor(t,e){this.g=t,this.map=e}};function Kh(t){this.l=t||c0,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var c0=10;function Qh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xh(t){return t.h?1:t.g?t.g.size:0}function sa(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sl(t,e){t.g?t.g.add(e):t.h=e}function Yh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Kh.prototype.cancel=function(){if(this.i=Jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jh(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return za(t.i)}var u0=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function d0(){this.g=new u0}function h0(t,e,n){const r=n||"";try{qh(t,function(s,i){let o=s;Wr(s)&&(o=Ya(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function f0(t,e){const n=new bi;if(z.Image){const r=new Image;r.onload=ms(_s,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ms(_s,n,r,"TestLoadImage: error",!1,e),r.onabort=ms(_s,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ms(_s,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _s(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ki(t){this.l=t.ec||null,this.j=t.ob||!1}we(ki,tl);ki.prototype.g=function(){return new Ni(this.l,this.j)};ki.prototype.i=function(t){return function(){return t}}({});function Ni(t,e){Te.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=il,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}we(Ni,Te);var il=0;O=Ni.prototype;O.open=function(t,e){if(this.readyState!=il)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=il};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zh(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Zh(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jr(this):Nr(this),this.readyState==3&&Zh(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Jr(this))};O.Ya=function(t){this.g&&(this.response=t,Jr(this))};O.ka=function(){this.g&&Jr(this)};function Jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var p0=z.JSON.parse;function ce(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ef,this.L=this.M=!1}we(ce,Te);var ef="",m0=/^https?$/i,g0=["POST","PUT"];O=ce.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ea.g(),this.C=this.u?Kc(this.u):Kc(ea),this.g.onreadystatechange=Oe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Yc(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&t instanceof z.FormData,!(0<=gh(g0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rf(this),0<this.B&&((this.L=_0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Oe(this.ua,this)):this.A=el(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Yc(this,i)}};function _0(t){return On&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof qa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function Yc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tf(t),Oi(t)}function tf(t){t.F||(t.F=!0,Pe(t,"complete"),Pe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Oi(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oi(this,!0)),ce.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?nf(this):this.kb())};O.kb=function(){nf(this)};function nf(t){if(t.h&&typeof qa<"u"&&(!t.C[1]||rt(t)!=4||t.da()!=2)){if(t.v&&rt(t)==4)el(t.La,0,t);else if(Pe(t,"readystatechange"),rt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(zh)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!m0.test(s?s.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var i=2<rt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",tf(t)}}finally{Oi(t)}}}}function Oi(t,e){if(t.g){rf(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function rf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function rt(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),p0(e)}};function Jc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ef:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function y0(t){const e={};t=(t.g&&2<=rt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(br(t[r]))continue;var n=qI(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}MI(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sf(t){let e="";return Wa(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ol(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function of(t){this.Ga=0,this.j=[],this.l=new bi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xn("baseRetryDelayMs",5e3,t),this.hb=Xn("retryDelaySeedMs",1e4,t),this.eb=Xn("forwardChannelMaxRetries",2,t),this.xa=Xn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Kh(t&&t.concurrentRequestLimit),this.Ja=new d0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=of.prototype;O.ra=8;O.H=1;function al(t){if(af(t),t.H==3){var e=t.W++,n=Et(t.I);if(ie(n,"SID",t.K),ie(n,"RID",e),ie(n,"TYPE","terminate"),Zr(t,n),e=new Xr(t,t.l,e),e.L=2,e.A=xi(Et(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.A,n=!0),n||(e.g=mf(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Yr(e)}ff(t)}function Di(t){t.g&&(cl(t),t.g.cancel(),t.g=null)}function af(t){Di(t),t.u&&(z.clearTimeout(t.u),t.u=null),Zs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Li(t){if(!Qh(t.i)&&!t.m){t.m=!0;var e=t.Na;Pr||Rh(),Rr||(Pr(),Rr=!0),Ja.add(e,t),t.C=0}}function v0(t,e){return Xh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Kr(Oe(t.Na,t,e),hf(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Xr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Th(i),wh(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lf(this,s,e),n=Et(this.I),ie(n,"RID",t),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),Zr(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(sf(i)))+"&"+e:this.o&&ol(n,this.o,i)),sl(this.i,s),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",e),ie(n,"SID","null"),s.aa=!0,na(s,n,null)):na(s,n,e),this.H=2}}else this.H==3&&(t?Zc(this,t):this.j.length==0||Qh(this.i)||Zc(this))};function Zc(t,e){var n;e?n=e.m:n=t.W++;const r=Et(t.I);ie(r,"SID",t.K),ie(r,"RID",n),ie(r,"AID",t.V),Zr(t,r),t.o&&t.s&&ol(r,t.o,t.s),n=new Xr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=lf(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),sl(t.i,n),na(n,r,e)}function Zr(t,e){t.na&&Wa(t.na,function(n,r){ie(e,r,n)}),t.h&&qh({},function(n,r){ie(e,r,n)})}function lf(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Oe(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{h0(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function cf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Pr||Rh(),Rr||(Pr(),Rr=!0),Ja.add(e,t),t.A=0}}function ll(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Kr(Oe(t.Ma,t),hf(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,uf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Kr(Oe(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,je(10),Di(this),uf(this))};function cl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function uf(t){t.g=new Xr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Et(t.wa);ie(e,"RID","rpc"),ie(e,"SID",t.K),ie(e,"AID",t.V),ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ie(e,"TO",t.qa),ie(e,"TYPE","xmlhttp"),Zr(t,e),t.o&&t.s&&ol(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=xi(Et(e)),n.u=null,n.S=!0,jh(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Di(this),ll(this),je(19))};function Zs(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function df(t,e){var n=null;if(t.g==e){Zs(t),cl(t),t.g=null;var r=2}else if(sa(t.i,e))n=e.F,Yh(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Ai(),Pe(r,new Dh(r,n)),Li(t)}else cf(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&v0(t,e)||r==2&&ll(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Xt(t,5);break;case 4:Xt(t,10);break;case 3:Xt(t,6);break;default:Xt(t,2)}}}function hf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Xt(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Oe(t.pb,t);n||(n=new Zt("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Ys(n,"https"),xi(n)),f0(n.toString(),r)}else je(2);t.H=0,t.h&&t.h.za(e),ff(t),af(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),je(2)):(this.l.info("Failed to ping google.com"),je(1))};function ff(t){if(t.H=0,t.ma=[],t.h){const e=Jh(t.i);(e.length!=0||t.j.length!=0)&&(qc(t.ma,e),qc(t.ma,t.j),t.i.i.length=0,za(t.j),t.j.length=0),t.h.ya()}}function pf(t,e,n){var r=n instanceof Zt?Et(n):new Zt(n);if(r.g!="")e&&(r.g=e+"."+r.g),Js(r,r.m);else{var s=z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Zt(null);r&&Ys(i,r),e&&(i.g=e),s&&Js(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ie(r,n,e),ie(r,"VER",t.ra),Zr(t,r),r}function mf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ce(new ki({ob:n})):new ce(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function gf(){}O=gf.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function ei(){if(On&&!(10<=Number(NI)))throw Error("Environmental error: no available transport.")}ei.prototype.g=function(t,e){return new Ke(t,e)};function Ke(t,e){Te.call(this),this.g=new of(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!br(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!br(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hn(this)}we(Ke,Te);Ke.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;je(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=pf(t,null,t.Y),Li(t)};Ke.prototype.close=function(){al(this.g)};Ke.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ya(t),t=n);e.j.push(new l0(e.fb++,t)),e.H==3&&Li(e)};Ke.prototype.N=function(){this.g.h=null,delete this.j,al(this.g),delete this.g,Ke.$.N.call(this)};function _f(t){nl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}we(_f,nl);function yf(){rl.call(this),this.status=1}we(yf,rl);function Hn(t){this.g=t}we(Hn,gf);Hn.prototype.Ba=function(){Pe(this.g,"a")};Hn.prototype.Aa=function(t){Pe(this.g,new _f(t))};Hn.prototype.za=function(t){Pe(this.g,new yf)};Hn.prototype.ya=function(){Pe(this.g,"b")};function T0(){this.blockSize=-1}function tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}we(tt,T0);tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bo(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}tt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)bo(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){bo(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){bo(this,r),s=0;break}}this.h=s,this.i+=e};tt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var w0={};function ul(t){return-128<=t&&128>t?CI(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function st(t){if(isNaN(t)||!isFinite(t))return Rn;if(0>t)return be(st(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ia;return new ne(e,0)}function vf(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return be(vf(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=st(Math.pow(e,8)),r=Rn,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=st(Math.pow(e,i)),r=r.R(i).add(st(o))):(r=r.R(n),r=r.add(st(o)))}return r}var ia=4294967296,Rn=ul(0),oa=ul(1),eu=ul(16777216);O=ne.prototype;O.ea=function(){if(Ye(this))return-be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ia+r)*e,e*=ia}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vt(this))return"0";if(Ye(this))return"-"+be(this).toString(t);for(var e=st(Math.pow(t,6)),n=this,r="";;){var s=ni(n,e).g;n=ti(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,vt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ye(t){return t.h==-1}O.X=function(t){return t=ti(this,t),Ye(t)?-1:vt(t)?0:1};function be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(oa)}O.abs=function(){return Ye(this)?be(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function ti(t,e){return t.add(be(e))}O.R=function(t){if(vt(this)||vt(t))return Rn;if(Ye(this))return Ye(t)?be(this).R(be(t)):be(be(this).R(t));if(Ye(t))return be(this.R(be(t)));if(0>this.X(eu)&&0>t.X(eu))return st(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,ys(n,2*r+2*s),n[2*r+2*s+1]+=i*l,ys(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,ys(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,ys(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function ys(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Yn(t,e){this.g=t,this.h=e}function ni(t,e){if(vt(e))throw Error("division by zero");if(vt(t))return new Yn(Rn,Rn);if(Ye(t))return e=ni(be(t),e),new Yn(be(e.g),be(e.h));if(Ye(e))return e=ni(t,be(e)),new Yn(be(e.g),e.h);if(30<t.g.length){if(Ye(t)||Ye(e))throw Error("slowDivide_ only works with positive integers.");for(var n=oa,r=e;0>=r.X(t);)n=tu(n),r=tu(r);var s=_n(n,1),i=_n(r,1);for(r=_n(r,2),n=_n(n,2);!vt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=_n(r,1),n=_n(n,1)}return e=ti(t,s.R(e)),new Yn(s,e)}for(s=Rn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=st(n),o=i.R(e);Ye(o)||0<o.X(t);)n-=r,i=st(n),o=i.R(e);vt(i)&&(i=oa),s=s.add(i),t=ti(t,o)}return new Yn(s,t)}O.gb=function(t){return ni(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function tu(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function _n(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ne(s,t.h)}ei.prototype.createWebChannel=ei.prototype.g;Ke.prototype.send=Ke.prototype.u;Ke.prototype.open=Ke.prototype.m;Ke.prototype.close=Ke.prototype.close;Pi.NO_ERROR=0;Pi.TIMEOUT=8;Pi.HTTP_ERROR=6;Lh.COMPLETE="complete";Mh.EventType=Qr;Qr.OPEN="a";Qr.CLOSE="b";Qr.ERROR="c";Qr.MESSAGE="d";Te.prototype.listen=Te.prototype.O;ce.prototype.listenOnce=ce.prototype.P;ce.prototype.getLastError=ce.prototype.Sa;ce.prototype.getLastErrorCode=ce.prototype.Ia;ce.prototype.getStatus=ce.prototype.da;ce.prototype.getResponseJson=ce.prototype.Wa;ce.prototype.getResponseText=ce.prototype.ja;ce.prototype.send=ce.prototype.ha;ce.prototype.setWithCredentials=ce.prototype.Oa;tt.prototype.digest=tt.prototype.l;tt.prototype.reset=tt.prototype.reset;tt.prototype.update=tt.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=st;ne.fromString=vf;var E0=function(){return new ei},I0=function(){return Ai()},Ao=Pi,S0=Lh,b0=pn,nu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vs=Mh,A0=ce,P0=tt,Cn=ne;const ru="@firebase/firestore";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let Wn="10.7.0";/**
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
 */const an=new Pa("@firebase/firestore");function Jn(){return an.logLevel}function M(t,...e){if(an.logLevel<=J.DEBUG){const n=e.map(dl);an.debug(`Firestore (${Wn}): ${t}`,...n)}}function It(t,...e){if(an.logLevel<=J.ERROR){const n=e.map(dl);an.error(`Firestore (${Wn}): ${t}`,...n)}}function Dn(t,...e){if(an.logLevel<=J.WARN){const n=e.map(dl);an.warn(`Firestore (${Wn}): ${t}`,...n)}}function dl(t){if(typeof t=="string")return t;try{/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: `+t;throw It(e),new Error(e)}function re(t,e){t||B()}function G(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Tf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class C0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class x0{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new Tf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new ke(e)}}class k0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class N0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new k0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new O0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function L0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=L0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Ln(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ye(0,0))}static max(){return new H(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Or{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Or?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Or{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const M0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Or{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return M0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(oe.fromString(e))}static fromName(e){return new j(oe.fromString(e).popFirst(5))}static empty(){return new j(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new oe(e.slice()))}}function V0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Ut(s,j.empty(),e)}function F0(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ut(H.min(),j.empty(),-1)}static max(){return new Ut(H.max(),j.empty(),-1)}}function j0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const U0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function es(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==U0)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ts(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}hl._e=-1;function Mi(t){return t==null}function ri(t){return t===0&&1/t==-1/0}function $0(t){return typeof t=="number"&&Number.isInteger(t)&&!ri(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function su(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ef(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class le{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ts(this.root,e,this.comparator,!0)}}class Ts{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Se.RED,this.left=s??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Se(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Se(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iu(this.data.getIterator())}getIteratorFrom(e){return new iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class He{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new He([])}unionWith(e){let n=new Re(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new He(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class If extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new If("Invalid base64 string: "+i):i}}(e);return new Me(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const q0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(t){if(re(!!t),typeof t=="string"){let e=0;const n=q0.exec(t);if(re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ln(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
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
 */function fl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pl(t){const e=t.mapValue.fields.__previous_value__;return fl(e)?pl(e):e}function Dr(t){const e=Bt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
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
 */class z0{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Lr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ws={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fl(t)?4:H0(t)?9007199254740991:10:B()}function dt(t,e){if(t===e)return!0;const n=cn(t);if(n!==cn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dr(t).isEqual(Dr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Bt(s.timestampValue),a=Bt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ln(s.bytesValue).isEqual(ln(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ge(s.doubleValue),a=ge(i.doubleValue);return o===a?ri(o)===ri(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ln(t.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(su(o)!==su(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!dt(o[l],a[l])))return!1;return!0}(t,e);default:return B()}}function Mr(t,e){return(t.values||[]).find(n=>dt(n,e))!==void 0}function Mn(t,e){if(t===e)return 0;const n=cn(t),r=cn(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ge(i.integerValue||i.doubleValue),l=ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ou(t.timestampValue,e.timestampValue);case 4:return ou(Dr(t),Dr(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ln(i),l=ln(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=te(a[c],l[c]);if(u!==0)return u}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=te(ge(i.latitude),ge(o.latitude));return a!==0?a:te(ge(i.longitude),ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Mn(a[c],l[c]);if(u)return u}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ws.mapValue&&o===ws.mapValue)return 0;if(i===ws.mapValue)return 1;if(o===ws.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const f=te(l[d],u[d]);if(f!==0)return f;const p=Mn(a[l[d]],c[u[d]]);if(p!==0)return p}return te(l.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function ou(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Bt(t),r=Bt(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function Vn(t){return aa(t)}function aa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Bt(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ln(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=aa(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${aa(n.fields[o])}`;return s+"}"}(t.mapValue):B()}function la(t){return!!t&&"integerValue"in t}function ml(t){return!!t&&"arrayValue"in t}function au(t){return!!t&&"nullValue"in t}function lu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ns(t){return!!t&&"mapValue"in t}function mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function H0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ns(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(n)}setAll(e){let n=Ae.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ns(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ns(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){mn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Be(mr(this.value))}}function Sf(t){const e=[];return mn(t.fields,(n,r)=>{const s=new Ae([n]);if(Ns(r)){const i=Sf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new He(e)}/**
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
 */class Ne{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,H.min(),H.min(),H.min(),Be.empty(),0)}static newFoundDocument(e,n,r,s){return new Ne(e,1,n,H.min(),r,s,0)}static newNoDocument(e,n){return new Ne(e,2,n,H.min(),H.min(),Be.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,H.min(),H.min(),Be.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class si{constructor(e,n){this.position=e,this.inclusive=n}}function cu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Mn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uu(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function W0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bf{}class _e extends bf{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new K0(e,n,r):n==="array-contains"?new Y0(e,r):n==="in"?new J0(e,r):n==="not-in"?new Z0(e,r):n==="array-contains-any"?new eS(e,r):new _e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Q0(e,r):new X0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mn(n,this.value)):n!==null&&cn(this.value)===cn(n)&&this.matchesComparison(Mn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends bf{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ht(e,n)}matches(e){return Af(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Af(t){return t.op==="and"}function Pf(t){return G0(t)&&Af(t)}function G0(t){for(const e of t.filters)if(e instanceof ht)return!1;return!0}function ca(t){if(t instanceof _e)return t.field.canonicalString()+t.op.toString()+Vn(t.value);if(Pf(t))return t.filters.map(e=>ca(e)).join(",");{const e=t.filters.map(n=>ca(n)).join(",");return`${t.op}(${e})`}}function Rf(t,e){return t instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.field.isEqual(s.field)&&dt(r.value,s.value)}(t,e):t instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Rf(o,s.filters[a]),!0):!1}(t,e):void B()}function Cf(t){return t instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${Vn(n.value)}`}(t):t instanceof ht?function(n){return n.op.toString()+" {"+n.getFilters().map(Cf).join(" ,")+"}"}(t):"Filter"}class K0 extends _e{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class Q0 extends _e{constructor(e,n){super(e,"in",n),this.keys=xf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X0 extends _e{constructor(e,n){super(e,"not-in",n),this.keys=xf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class Y0 extends _e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ml(n)&&Mr(n.arrayValue,this.value)}}class J0 extends _e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mr(this.value.arrayValue,n)}}class Z0 extends _e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mr(this.value.arrayValue,n)}}class eS extends _e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mr(this.value.arrayValue,r))}}/**
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
 */class tS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function du(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tS(t,e,n,r,s,i,o)}function gl(t){const e=G(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ca(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vn(r)).join(",")),e.ce=n}return e.ce}function _l(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Rf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uu(t.startAt,e.startAt)&&uu(t.endAt,e.endAt)}function ua(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function nS(t,e,n,r,s,i,o,a){return new Vi(t,e,n,r,s,i,o,a)}function yl(t){return new Vi(t)}function hu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rS(t){return t.collectionGroup!==null}function gr(t){const e=G(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Re(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ii(i,r))}),n.has(Ae.keyField().canonicalString())||e.le.push(new ii(Ae.keyField(),r))}return e.le}function ct(t){const e=G(t);return e.he||(e.he=sS(e,gr(t))),e.he}function sS(t,e){if(t.limitType==="F")return du(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ii(s.field,i)});const n=t.endAt?new si(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new si(t.startAt.position,t.startAt.inclusive):null;return du(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function da(t,e,n){return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fi(t,e){return _l(ct(t),ct(e))&&t.limitType===e.limitType}function kf(t){return`${gl(ct(t))}|lt:${t.limitType}`}function yn(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cf(s)).join(", ")}]`),Mi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vn(s)).join(",")),`Target(${r})`}(ct(t))}; limitType=${t.limitType})`}function ji(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=cu(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,gr(r),s)||r.endAt&&!function(o,a,l){const c=cu(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,gr(r),s))}(t,e)}function iS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nf(t){return(e,n)=>{let r=!1;for(const s of gr(t)){const i=oS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oS(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Mn(l,c):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Gn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ef(this.inner)}size(){return this.innerSize}}/**
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
 */const aS=new le(j.comparator);function St(){return aS}const Of=new le(j.comparator);function or(...t){let e=Of;for(const n of t)e=e.insert(n.key,n);return e}function Df(t){let e=Of;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yt(){return _r()}function Lf(){return _r()}function _r(){return new Gn(t=>t.toString(),(t,e)=>t.isEqual(e))}const lS=new le(j.comparator),cS=new Re(j.comparator);function X(...t){let e=cS;for(const n of t)e=e.add(n);return e}const uS=new Re(te);function dS(){return uS}/**
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
 */function Mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ri(e)?"-0":e}}function Vf(t){return{integerValue:""+t}}function hS(t,e){return $0(e)?Vf(e):Mf(t,e)}/**
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
 */class Ui{constructor(){this._=void 0}}function fS(t,e,n){return t instanceof Vr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fl(i)&&(i=pl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Fr?jf(t,e):t instanceof jr?Uf(t,e):function(s,i){const o=Ff(s,i),a=fu(o)+fu(s.Ie);return la(o)&&la(s.Ie)?Vf(a):Mf(s.serializer,a)}(t,e)}function pS(t,e,n){return t instanceof Fr?jf(t,e):t instanceof jr?Uf(t,e):n}function Ff(t,e){return t instanceof oi?function(r){return la(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vr extends Ui{}class Fr extends Ui{constructor(e){super(),this.elements=e}}function jf(t,e){const n=Bf(e);for(const r of t.elements)n.some(s=>dt(s,r))||n.push(r);return{arrayValue:{values:n}}}class jr extends Ui{constructor(e){super(),this.elements=e}}function Uf(t,e){let n=Bf(e);for(const r of t.elements)n=n.filter(s=>!dt(s,r));return{arrayValue:{values:n}}}class oi extends Ui{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function fu(t){return ge(t.integerValue||t.doubleValue)}function Bf(t){return ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class mS{constructor(e,n){this.field=e,this.transform=n}}function gS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fr&&s instanceof Fr||r instanceof jr&&s instanceof jr?Ln(r.elements,s.elements,dt):r instanceof oi&&s instanceof oi?dt(r.Ie,s.Ie):r instanceof Vr&&s instanceof Vr}(t.transform,e.transform)}class _S{constructor(e,n){this.version=e,this.transformResults=n}}class Ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Os(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bi{}function $f(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vl(t.key,Ze.none()):new ns(t.key,t.data,Ze.none());{const n=t.data,r=Be.empty();let s=new Re(Ae.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wt(t.key,r,new He(s.toArray()),Ze.none())}}function yS(t,e,n){t instanceof ns?function(s,i,o){const a=s.value.clone(),l=mu(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wt?function(s,i,o){if(!Os(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=mu(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qf(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yr(t,e,n,r){return t instanceof ns?function(i,o,a,l){if(!Os(i.precondition,o))return a;const c=i.value.clone(),u=gu(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wt?function(i,o,a,l){if(!Os(i.precondition,o))return a;const c=gu(i.fieldTransforms,l,o),u=o.data;return u.setAll(qf(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Os(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ff(r.transform,s||null);i!=null&&(n===null&&(n=Be.empty()),n.set(r.field,i))}return n||null}function pu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ln(r,s,(i,o)=>gS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ns extends Bi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wt extends Bi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mu(t,e,n){const r=new Map;re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,pS(o,a,n[s]))}return r}function gu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fS(i,o,e))}return r}class vl extends Bi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TS extends Bi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lf();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=$f(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(n,r)=>pu(n,r))&&Ln(this.baseMutations,e.baseMutations,(n,r)=>pu(n,r))}}class Tl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){re(e.mutations.length===r.length);let s=function(){return lS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tl(e,n,r,s)}}/**
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
 */class ES{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var pe,Z;function SS(t){switch(t){default:return B();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function zf(t){if(t===void 0)return It("GRPC error has no .code"),b.UNKNOWN;switch(t){case pe.OK:return b.OK;case pe.CANCELLED:return b.CANCELLED;case pe.UNKNOWN:return b.UNKNOWN;case pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case pe.INTERNAL:return b.INTERNAL;case pe.UNAVAILABLE:return b.UNAVAILABLE;case pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case pe.NOT_FOUND:return b.NOT_FOUND;case pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case pe.ABORTED:return b.ABORTED;case pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case pe.DATA_LOSS:return b.DATA_LOSS;default:return B()}}(Z=pe||(pe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bS(){return new TextEncoder}/**
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
 */const AS=new Cn([4294967295,4294967295],0);function _u(t){const e=bS().encode(t),n=new P0;return n.update(e),new Uint8Array(n.digest())}function yu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cn([n,r],0),new Cn([s,i],0)]}class wl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ar(`Invalid padding: ${n}`);if(r<0)throw new ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ar(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ar(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Cn.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Cn.fromNumber(r)));return s.compare(AS)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=_u(e),[r,s]=yu(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wl(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=_u(e),[r,s]=yu(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $i{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,rs.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $i(H.min(),s,new le(te),St(),X())}}class rs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new rs(r,n,X(),X(),X())}}/**
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
 */class Ds{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Hf{constructor(e,n){this.targetId=e,this.fe=n}}class Wf{constructor(e,n,r=Me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vu{constructor(){this.ge=0,this.pe=wu(),this.ye=Me.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=X(),n=X(),r=X();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:B()}}),new rs(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=wu()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,re(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class PS{constructor(e){this.Le=e,this.ke=new Map,this.qe=St(),this.Qe=Tu(),this.Ke=new le(te)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ua(i))if(r===0){const o=new j(i.path);this.We(n,o,Ne.newNoDocument(o,H.min()))}else re(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ln(r).toUint8Array()}catch(l){if(l instanceof If)return Dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new wl(o,s,i)}catch(l){return Dn(l instanceof ar?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ua(a.target)){const l=new j(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ne.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=X();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new $i(e,n,this.Ke,this.qe,r);return this.qe=St(),this.Qe=Tu(),this.Ke=new le(te),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new vu,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Re(te),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new vu),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Tu(){return new le(j.comparator)}function wu(){return new le(j.comparator)}const RS={asc:"ASCENDING",desc:"DESCENDING"},CS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xS={and:"AND",or:"OR"};class kS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ha(t,e){return t.useProto3Json||Mi(e)?e:{value:e}}function ai(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gf(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NS(t,e){return ai(t,e.toTimestamp())}function ut(t){return re(!!t),H.fromTimestamp(function(n){const r=Bt(n);return new ye(r.seconds,r.nanos)}(t))}function El(t,e){return function(r){return new oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Kf(t){const e=oe.fromString(t);return re(Jf(e)),e}function fa(t,e){return El(t.databaseId,e.path)}function Po(t,e){const n=Kf(e);if(n.get(1)!==t.databaseId.projectId)throw new F(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Qf(n))}function pa(t,e){return El(t.databaseId,e)}function OS(t){const e=Kf(t);return e.length===4?oe.emptyPath():Qf(e)}function ma(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qf(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Eu(t,e,n){return{name:fa(t,e),fields:n.value.mapValue.fields}}function DS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(re(u===void 0||typeof u=="string"),Me.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Me.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:zf(c.code);return new F(u,c.message||"")}(o);n=new Wf(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Po(t,r.document.name),i=ut(r.document.updateTime),o=r.document.createTime?ut(r.document.createTime):H.min(),a=new Be({mapValue:{fields:r.document.fields}}),l=Ne.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ds(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Po(t,r.document),i=r.readTime?ut(r.readTime):H.min(),o=Ne.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Po(t,r.document),i=r.removedTargetIds||[];n=new Ds([],i,s,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new IS(s,i),a=r.targetId;n=new Hf(a,o)}}return n}function LS(t,e){let n;if(e instanceof ns)n={update:Eu(t,e.key,e.value)};else if(e instanceof vl)n={delete:fa(t,e.key)};else if(e instanceof Wt)n={update:Eu(t,e.key,e.data),updateMask:zS(e.fieldMask)};else{if(!(e instanceof TS))return B();n={verify:fa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Vr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof jr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function MS(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ut(s.updateTime):ut(i);return o.isEqual(H.min())&&(o=ut(i)),new _S(o,s.transformResults||[])}(n,e))):[]}function VS(t,e){return{documents:[pa(t,e.path)]}}function FS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Yf(ht.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(d){return{field:vn(d.field),direction:BS(d.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ha(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jS(t){let e=OS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){re(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(d){const f=Xf(d);return f instanceof ht&&Pf(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(m){return new ii(Tn(m.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,Mi(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new si(p,f)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const f=!d.before,p=d.values||[];return new si(p,f)}(n.endAt)),nS(e,s,o,i,a,"F",l,c)}function US(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xf(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Tn(n.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(n.unaryFilter.field);return _e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(n.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tn(n.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(n){return _e.create(Tn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ht.create(n.compositeFilter.filters.map(r=>Xf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B()}}(n.compositeFilter.op))}(t):B()}function BS(t){return RS[t]}function $S(t){return CS[t]}function qS(t){return xS[t]}function vn(t){return{fieldPath:t.canonicalString()}}function Tn(t){return Ae.fromServerFormat(t.fieldPath)}function Yf(t){return t instanceof _e?function(n){if(n.op==="=="){if(lu(n.value))return{unaryFilter:{field:vn(n.field),op:"IS_NAN"}};if(au(n.value))return{unaryFilter:{field:vn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lu(n.value))return{unaryFilter:{field:vn(n.field),op:"IS_NOT_NAN"}};if(au(n.value))return{unaryFilter:{field:vn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(n.field),op:$S(n.op),value:n.value}}}(t):t instanceof ht?function(n){const r=n.getFilters().map(s=>Yf(s));return r.length===1?r[0]:{compositeFilter:{op:qS(n.op),filters:r}}}(t):B()}function zS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lt{constructor(e,n,r,s,i=H.min(),o=H.min(),a=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HS{constructor(e){this.ut=e}}function WS(t){const e=jS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?da(e,e.limit,"L"):e}/**
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
 */class GS{constructor(){this.on=new KS}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Ut.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class KS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Re(oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Re(oe.comparator)).toArray()}}/**
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
 */class Fn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Fn(0)}static Nn(){return new Fn(-1)}}/**
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
 */class QS{constructor(){this.changes=new Gn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&yr(r.mutation,s,He.empty(),ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,n,r=X()){const s=Yt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=or();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,X()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=St();const o=_r(),a=function(){return _r()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Wt)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),yr(u.mutation,c,u.mutation.getFieldMask(),ye.now())):o.set(c.key,He.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new XS(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=_r();let s=new le((o,a)=>o-a),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||He.empty();u=a.applyToLocalView(c,u),r.set(l,u);const d=(s.get(a.batchId)||X()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Lf();u.forEach(f=>{if(!i.has(f)){const p=$f(n.get(f),r.get(f));p!==null&&d.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(Yt());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,X())).next(u=>({batchId:a,changes:Df(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let s=or();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=or();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(d,f){return new Vi(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Ne.newInvalidDocument(u)))});let a=or();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&yr(u.mutation,c,He.empty(),ye.now()),ji(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class JS{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:WS(s.bundledQuery),readTime:ut(s.readTime)}}(n)),A.resolve()}}/**
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
 */class ZS{constructor(){this.overlays=new le(j.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yt();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=Yt(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new le((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Yt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Yt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ES(n,r));let i=this.lr.get(n);i===void 0&&(i=X(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class Il{constructor(){this.hr=new Re(ve.Pr),this.Ir=new Re(ve.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new ve(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new ve(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new j(new oe([])),r=new ve(n,e),s=new ve(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new j(new oe([])),r=new ve(n,e),s=new ve(n,e+1);let i=X();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ve(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return j.comparator(e.key,n.key)||te(e.gr,n.gr)}static Tr(e,n){return te(e.gr,n.gr)||j.comparator(e.key,n.key)}}/**
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
 */class eb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Re(ve.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ve(n,0),s=new ve(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Re(te);return n.forEach(s=>{const i=new ve(s,0),o=new ve(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new ve(new j(i),0);let a=new Re(te);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,s=>{const i=new ve(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new ve(n,0),s=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class tb{constructor(e){this.Cr=e,this.docs=function(){return new le(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=St();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ne.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=St();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||j0(F0(u),r)<=0||(s.has(u.key)||ji(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){B()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nb(this)}getSize(e){return A.resolve(this.size)}}class nb extends QS{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class rb{constructor(e){this.persistence=e,this.Fr=new Gn(n=>gl(n),_l),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Il,this.targetCount=0,this.Nr=Fn.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Fn(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
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
 */class sb{constructor(e,n){this.Br={},this.overlays={},this.Lr=new hl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new rb(this),this.indexManager=new GS,this.remoteDocumentCache=function(s){return new tb(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new HS(n),this.Kr=new JS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new eb(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const s=new ib(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ib extends B0{constructor(e){super(),this.currentSequenceNumber=e}}class Sl{constructor(e){this.persistence=e,this.Gr=new Il,this.zr=null}static jr(e){return new Sl(e)}get Hr(){if(this.zr)return this.zr;throw B()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const s=j.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,H.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class bl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=X(),s=X();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bl(e,n.fromCache,r,s)}}/**
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
 */class ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ab{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ob;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Jn()<=J.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",yn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Jn()<=J.DEBUG&&M("QueryEngine","Query:",yn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Jn()<=J.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",yn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(n))):A.resolve())}zi(e,n){if(hu(n))return A.resolve(null);let r=ct(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=da(n,null,"F"),r=ct(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=X(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,da(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return hu(n)||s.isEqual(H.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?A.resolve(null):(Jn()<=J.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yn(n)),this.Xi(e,o,n,V0(s,-1)).next(a=>a))})}Yi(e,n){let r=new Re(Nf(e));return n.forEach((s,i)=>{ji(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Jn()<=J.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",yn(n)),this.Gi.getDocumentsMatchingQuery(e,n,Ut.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class lb{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new le(te),this.ns=new Gn(i=>gl(i),_l),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YS(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function cb(t,e,n,r){return new lb(t,e,n,r)}async function Zf(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=X();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function ub(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const d=c.batch,f=d.keys();let p=A.resolve();return f.forEach(m=>{p=p.next(()=>u.getEntry(l,m)).next(y=>{const g=c.docVersions.get(m);re(g!==null),y.version.compareTo(g)<0&&(d.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ep(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function db(t,e){const n=G(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,d)=>{const f=s.get(d);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,d)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(Me.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(d,p),function(y,g,_){return y.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let l=St(),c=X();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(hb(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(H.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(d=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function hb(t,e,n){let r=X(),s=X();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=St();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function fb(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pb(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Lt(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function ga(t,e,n){const r=G(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ts(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Iu(t,e,n){const r=G(t);let s=H.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const d=G(l),f=d.ns.get(u);return f!==void 0?A.resolve(d.ts.get(f)):d.qr.getTargetData(c,u)}(r,o,ct(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:H.min(),n?i:X())).next(a=>(mb(r,iS(e),a),{documents:a,ls:i})))}function mb(t,e,n){let r=t.rs.get(e)||H.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Su{constructor(){this.activeTargetIds=dS()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gb{constructor(){this.eo=new Su,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Su,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Es=null;function Ro(){return Es===null?Es=function(){return 268435456+Math.round(2147483648*Math.random())}():Es++,"0x"+Es.toString(16)}/**
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
 */const yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vb{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const xe="WebChannelConnection";class Tb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Ro(),l=this.So(n,r);M("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Dn("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=yb[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Ro();return new Promise((o,a)=>{const l=new A0;l.setWithCredentials(!0),l.listenOnce(S0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ao.NO_ERROR:const u=l.getResponseJson();M(xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ao.TIMEOUT:M(xe,`RPC '${e}' ${i} timed out`),a(new F(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ao.HTTP_ERROR:const d=l.getStatus();if(M(xe,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(_)>=0?_:b.UNKNOWN}(p.status);a(new F(m,p.message))}else a(new F(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(b.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{M(xe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);M(xe,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(e,n,r){const s=Ro(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E0(),a=I0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");M(xe,`Creating RPC '${e}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);let f=!1,p=!1;const m=new vb({co:g=>{p?M(xe,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(f||(M(xe,`Opening RPC '${e}' stream ${s} transport.`),d.open(),f=!0),M(xe,`RPC '${e}' stream ${s} sending:`,g),d.send(g))},lo:()=>d.close()}),y=(g,_,w)=>{g.listen(_,v=>{try{w(v)}catch(T){setTimeout(()=>{throw T},0)}})};return y(d,vs.EventType.OPEN,()=>{p||M(xe,`RPC '${e}' stream ${s} transport opened.`)}),y(d,vs.EventType.CLOSE,()=>{p||(p=!0,M(xe,`RPC '${e}' stream ${s} transport closed`),m.Ro())}),y(d,vs.EventType.ERROR,g=>{p||(p=!0,Dn(xe,`RPC '${e}' stream ${s} transport errored:`,g),m.Ro(new F(b.UNAVAILABLE,"The operation could not be completed")))}),y(d,vs.EventType.MESSAGE,g=>{var _;if(!p){const w=g.data[0];re(!!w);const v=w,T=v.error||((_=v[0])===null||_===void 0?void 0:_.error);if(T){M(xe,`RPC '${e}' stream ${s} received error:`,T);const S=T.status;let C=function(R){const P=pe[R];if(P!==void 0)return zf(P)}(S),V=T.message;C===void 0&&(C=b.INTERNAL,V="Unknown error status: "+S+" with message "+T.message),p=!0,m.Ro(new F(C,V)),d.close()}else M(xe,`RPC '${e}' stream ${s} received:`,w),m.Vo(w)}}),y(a,b0.STAT_EVENT,g=>{g.stat===nu.PROXY?M(xe,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===nu.NOPROXY&&M(xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function Co(){return typeof document<"u"?document:null}/**
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
 */function qi(t){return new kS(t,!0)}/**
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
 */class tp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class np{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new tp(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new F(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wb extends np{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=DS(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?ut(o.readTime):H.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=ma(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=ua(l)?{documents:VS(i,l)}:{query:FS(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gf(i,o.resumeToken);const c=ha(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(H.min())>0){a.readTime=ai(i,o.snapshotVersion.toTimestamp());const c=ha(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=US(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=ma(this.serializer),n.removeTarget=e,this.e_(n)}}class Eb extends np{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=MS(e.writeResults,e.commitTime),r=ut(e.commitTime);return this.listener.I_(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ma(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>LS(this.serializer,r))};this.e_(n)}}/**
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
 */class Ib extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new F(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(b.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(b.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class Sb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(It(n),this.f_=!1):M("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class bb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{gn(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=G(l);c.C_.add(4),await ss(c),c.M_.set("Unknown"),c.C_.delete(4),await zi(c)}(this))})}),this.M_=new Sb(r,s)}}async function zi(t){if(gn(t))for(const e of t.v_)await e(!0)}async function ss(t){for(const e of t.v_)await e(!1)}function rp(t,e){const n=G(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Rl(n)?Pl(n):Kn(n).Ho()&&Al(n,e))}function sp(t,e){const n=G(t),r=Kn(n);n.D_.delete(e),r.Ho()&&ip(n,e),n.D_.size===0&&(r.Ho()?r.Zo():gn(n)&&n.M_.set("Unknown"))}function Al(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Kn(t).u_(e)}function ip(t,e){t.x_.Oe(e),Kn(t).c_(e)}function Pl(t){t.x_=new PS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Kn(t).start(),t.M_.g_()}function Rl(t){return gn(t)&&!Kn(t).jo()&&t.D_.size>0}function gn(t){return G(t).C_.size===0}function op(t){t.x_=void 0}async function Ab(t){t.D_.forEach((e,n)=>{Al(t,e)})}async function Pb(t,e){op(t),Rl(t)?(t.M_.w_(e),Pl(t)):t.M_.set("Unknown")}async function Rb(t,e,n){if(t.M_.set("Online"),e instanceof Wf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await li(t,r)}else if(e instanceof Ds?t.x_.$e(e):e instanceof Hf?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(H.min()))try{const r=await ep(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(Me.EMPTY_BYTE_STRING,u.snapshotVersion)),ip(i,l);const d=new Lt(u.target,l,c,u.sequenceNumber);Al(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await li(t,r)}}async function li(t,e,n){if(!ts(e))throw e;t.C_.add(1),await ss(t),t.M_.set("Offline"),n||(n=()=>ep(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await zi(t)})}function ap(t,e){return e().catch(n=>li(t,n,e))}async function Hi(t){const e=G(t),n=$t(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Cb(e);)try{const s=await fb(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,xb(e,s)}catch(s){await li(e,s)}lp(e)&&cp(e)}function Cb(t){return gn(t)&&t.b_.length<10}function xb(t,e){t.b_.push(e);const n=$t(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function lp(t){return gn(t)&&!$t(t).jo()&&t.b_.length>0}function cp(t){$t(t).start()}async function kb(t){$t(t).E_()}async function Nb(t){const e=$t(t);for(const n of t.b_)e.P_(n.mutations)}async function Ob(t,e,n){const r=t.b_.shift(),s=Tl.from(r,e,n);await ap(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Hi(t)}async function Db(t,e){e&&$t(t).h_&&await async function(r,s){if(function(o){return SS(o)&&o!==b.ABORTED}(s.code)){const i=r.b_.shift();$t(r).Yo(),await ap(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Hi(r)}}(t,e),lp(t)&&cp(t)}async function Au(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=gn(n);n.C_.add(3),await ss(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await zi(n)}async function Lb(t,e){const n=G(t);e?(n.C_.delete(2),await zi(n)):e||(n.C_.add(2),await ss(n),n.M_.set("Unknown"))}function Kn(t){return t.O_||(t.O_=function(n,r,s){const i=G(n);return i.A_(),new wb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:Ab.bind(null,t),Io:Pb.bind(null,t),a_:Rb.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Rl(t)?Pl(t):t.M_.set("Unknown")):(await t.O_.stop(),op(t))})),t.O_}function $t(t){return t.N_||(t.N_=function(n,r,s){const i=G(n);return i.A_(),new Eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:kb.bind(null,t),Io:Db.bind(null,t),T_:Nb.bind(null,t),I_:Ob.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Hi(t)):(await t.N_.stop(),t.b_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class Cl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Cl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xl(t,e){if(It("AsyncQueue",`${e}: ${t}`),ts(t))return new F(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=or(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new xn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Pu{constructor(){this.B_=new le(j.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):B():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class jn{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jn(e,n,xn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Mb{constructor(){this.k_=void 0,this.listeners=[]}}class Vb{constructor(){this.queries=new Gn(e=>kf(e),Fi),this.onlineState="Unknown",this.q_=new Set}}async function up(t,e){const n=G(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Mb),s)try{i.k_=await n.onListen(r)}catch(o){const a=xl(o,`Initialization of query '${yn(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&kl(n)}async function dp(t,e){const n=G(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Fb(t,e){const n=G(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&kl(n)}function jb(t,e,n){const r=G(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function kl(t){t.q_.forEach(e=>{e.next()})}class hp{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class fp{constructor(e){this.key=e}}class pp{constructor(e){this.key=e}}class Ub{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=X(),this.mutatedKeys=X(),this._a=Nf(e),this.aa=new xn(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Pu,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const f=s.get(u),p=ji(this.query,d)?d:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let g=!1;f&&p?f.data.isEqual(p.data)?m!==y&&(r.track({type:3,doc:p}),g=!0):this.ha(f,p)||(r.track({type:2,doc:p}),g=!0,(l&&this._a(p,l)>0||c&&this._a(p,c)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),g=!0):f&&!p&&(r.track({type:1,doc:f}),g=!0,(l||c)&&(a=!0)),g&&(p?(o=o.add(p),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,d)=>function(p,m){const y=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return y(p)-y(m)}(u.type,d.type)||this._a(u.doc,d.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],l=this.oa.size===0&&this.current&&!s?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new jn(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Pu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=X(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new pp(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new fp(r))}),n}da(e){this.ia=e.ls,this.oa=X();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return jn.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Bb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $b{constructor(e){this.key=e,this.Ra=!1}}class qb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Gn(a=>kf(a),Fi),this.fa=new Map,this.ga=new Set,this.pa=new le(j.comparator),this.ya=new Map,this.wa=new Il,this.Sa={},this.ba=new Map,this.Da=Fn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function zb(t,e){const n=eA(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await pb(n.localStore,ct(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Hb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&rp(n.remoteStore,o)}return s}async function Hb(t,e,n,r,s){t.va=(d,f,p)=>async function(y,g,_,w){let v=g.view.ca(_);v.Zi&&(v=await Iu(y.localStore,g.query,!1).then(({documents:V})=>g.view.ca(V,v)));const T=w&&w.targetChanges.get(g.targetId),S=w&&w.targetMismatches.get(g.targetId)!=null,C=g.view.applyChanges(v,y.isPrimaryClient,T,S);return Cu(y,g.targetId,C.Ta),C.snapshot}(t,d,f,p);const i=await Iu(t.localStore,e,!0),o=new Ub(e,i.ls),a=o.ca(i.documents),l=rs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Cu(t,n,c.Ta);const u=new Bb(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function Wb(t,e){const n=G(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Fi(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ga(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sp(n.remoteStore,r.targetId),_a(n,r.targetId)}).catch(es)):(_a(n,r.targetId),await ga(n.localStore,r.targetId,!0))}async function Gb(t,e,n){const r=tA(t);try{const s=await function(o,a){const l=G(o),c=ye.now(),u=a.reduce((p,m)=>p.add(m.key),X());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=St(),y=X();return l.ss.getEntries(p,u).next(g=>{m=g,m.forEach((_,w)=>{w.isValidDocument()||(y=y.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(g=>{d=g;const _=[];for(const w of a){const v=vS(w,d.get(w.key).overlayedDocument);v!=null&&_.push(new Wt(w.key,v,Sf(v.value.mapValue),Ze.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,_,a)}).next(g=>{f=g;const _=g.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(p,g.batchId,_)})}).then(()=>({batchId:f.batchId,changes:Df(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new le(te)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await is(r,s.changes),await Hi(r.remoteStore)}catch(s){const i=xl(s,"Failed to persist write");n.reject(i)}}async function mp(t,e){const n=G(t);try{const r=await db(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?re(o.Ra):s.removedDocuments.size>0&&(re(o.Ra),o.Ra=!1))}),await is(n,r,e)}catch(r){await es(r)}}function Ru(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=G(o);l.onlineState=a;let c=!1;l.queries.forEach((u,d)=>{for(const f of d.listeners)f.Q_(a)&&(c=!0)}),c&&kl(l)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kb(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new le(j.comparator);o=o.insert(i,Ne.newNoDocument(i,H.min()));const a=X().add(i),l=new $i(H.min(),new Map,new le(te),o,a);await mp(r,l),r.pa=r.pa.remove(i),r.ya.delete(e),Nl(r)}else await ga(r.localStore,e,!1).then(()=>_a(r,e,n)).catch(es)}async function Qb(t,e){const n=G(t),r=e.batch.batchId;try{const s=await ub(n.localStore,e);_p(n,r,null),gp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await is(n,s)}catch(s){await es(s)}}async function Xb(t,e,n){const r=G(t);try{const s=await function(o,a){const l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(re(d!==null),u=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);_p(r,e,n),gp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await is(r,s)}catch(s){await es(s)}}function gp(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function _p(t,e,n){const r=G(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function _a(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||yp(t,r)})}function yp(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(sp(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Nl(t))}function Cu(t,e,n){for(const r of n)r instanceof fp?(t.wa.addReference(r.key,e),Yb(t,r)):r instanceof pp?(M("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||yp(t,r.key)):B()}function Yb(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(M("SyncEngine","New document in limbo: "+n),t.ga.add(r),Nl(t))}function Nl(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new j(oe.fromString(e)),r=t.Da.next();t.ya.set(r,new $b(n)),t.pa=t.pa.insert(n,r),rp(t.remoteStore,new Lt(ct(yl(n.path)),r,"TargetPurposeLimboResolution",hl._e))}}async function is(t,e,n){const r=G(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=bl.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=G(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>A.forEach(c,f=>A.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>A.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!ts(d))throw d;M("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const f=d.targetId;if(!d.fromCache){const p=u.ts.get(f),m=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(f,y)}}}(r.localStore,i))}async function Jb(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Zf(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(b.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await is(n,r._s)}}function Zb(t,e){const n=G(t),r=n.ya.get(e);if(r&&r.Ra)return X().add(r.key);{let s=X();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function eA(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kb.bind(null,e),e.Va.a_=Fb.bind(null,e.eventManager),e.Va.Fa=jb.bind(null,e.eventManager),e}function tA(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xb.bind(null,e),e}class xu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cb(this.persistence,new ab,e.initialUser,this.serializer)}createPersistence(e){return new sb(Sl.jr,this.serializer)}createSharedClientState(e){return new gb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ru(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jb.bind(null,this.syncEngine),await Lb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vb}()}createDatastore(e){const n=qi(e.databaseInfo.databaseId),r=function(i){return new Tb(i)}(e.databaseInfo);return function(i,o,a,l){return new Ib(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new bb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ru(this.syncEngine,n,0),function(){return bu.D()?new bu:new _b}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const d=new qb(s,i,o,a,l,c);return u&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=G(n);M("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ss(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class vp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class rA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=wf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{M("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(M("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xo(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ku(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iA(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Au(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Au(e.remoteStore,i)),t._onlineComponents=e}function sA(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await xo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sA(n))throw n;Dn("Error using user provided cache. Falling back to memory cache: "+n),await xo(t,new xu)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await xo(t,new xu);return t._offlineComponents}async function Tp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await ku(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await ku(t,new nA))),t._onlineComponents}function oA(t){return Tp(t).then(e=>e.syncEngine)}async function wp(t){const e=await Tp(t),n=e.eventManager;return n.onListen=zb.bind(null,e.syncEngine),n.onUnlisten=Wb.bind(null,e.syncEngine),n}function aA(t,e,n={}){const r=new Tt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new vp({next:f=>{o.enqueueAndForget(()=>dp(i,d));const p=f.docs.has(a);!p&&f.fromCache?c.reject(new F(b.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?c.reject(new F(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new hp(yl(a.path),u,{includeMetadataChanges:!0,J_:!0});return up(i,d)}(await wp(t),t.asyncQueue,e,n,r)),r.promise}function lA(t,e,n={}){const r=new Tt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new vp({next:f=>{o.enqueueAndForget(()=>dp(i,d)),f.fromCache&&l.source==="server"?c.reject(new F(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new hp(a,u,{includeMetadataChanges:!0,J_:!0});return up(i,d)}(await wp(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ep(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Nu=new Map;/**
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
 */function Ip(t,e,n){if(!n)throw new F(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cA(t,e,n,r){if(e===!0&&r===!0)throw new F(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ou(t){if(!j.isDocumentKey(t))throw new F(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Du(t){if(j.isDocumentKey(t))throw new F(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ol(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ol(t);throw new F(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Lu{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ep((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wi{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new R0;switch(r.type){case"firstParty":return new N0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nu.get(n);r&&(M("ComponentProvider","Removing Datastore"),Nu.delete(n),r.terminate())}(this),Promise.resolve()}}function uA(t,e,n,r={}){var s;const i=(t=bt(t,Wi))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ke.MOCK_USER;else{a=Zu(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new F(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ke(c)}t._authCredentials=new C0(new Tf(a,l))}}/**
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
 */class Gi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gi(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Ft extends Gi{constructor(e,n,r){super(e,n,yl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new j(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function ya(t,e,...n){if(t=ae(t),Ip("collection","path",e),t instanceof Wi){const r=oe.fromString(e,...n);return Du(r),new Ft(t,null,r)}{if(!(t instanceof Ge||t instanceof Ft))throw new F(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return Du(r),new Ft(t.firestore,null,r)}}function ci(t,e,...n){if(t=ae(t),arguments.length===1&&(e=wf.newId()),Ip("doc","path",e),t instanceof Wi){const r=oe.fromString(e,...n);return Ou(r),new Ge(t,null,new j(r))}{if(!(t instanceof Ge||t instanceof Ft))throw new F(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return Ou(r),new Ge(t.firestore,t instanceof Ft?t.converter:null,new j(r))}}/**
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
 */class dA{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new tp(this,"async_queue_retry"),this.iu=()=>{const n=Co();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Co();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Co();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Tt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ts(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw It("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Cl.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&B()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Qn extends Wi{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new dA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Sp(this),this._firestoreClient.terminate()}}function hA(t,e){const n=typeof t=="object"?t:Ca(),r=typeof t=="string"?t:e||"(default)",s=fi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xu("firestore");i&&uA(s,...i)}return s}function Dl(t){return t._firestoreClient||Sp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Sp(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new z0(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ep(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new rA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Me.fromBase64String(e))}catch(n){throw new F(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ki{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qi{constructor(e){this._methodName=e}}/**
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
 */class Ll{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const fA=/^__.*__$/;class pA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,n,this.fieldTransforms):new ns(e,this.data,n,this.fieldTransforms)}}class bp{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ap(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Ml{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ui(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Ap(this.Iu)&&fA.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class mA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qi(e)}pu(e,n,r,s=!1){return new Ml({Iu:e,methodName:n,gu:r,path:Ae.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pp(t){const e=t._freezeSettings(),n=qi(t._databaseId);return new mA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gA(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Fl("Data must be an object, but it was:",o,r);const a=Rp(r,o);let l,c;if(i.merge)l=new He(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const f=va(e,d,n);if(!o.contains(f))throw new F(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);xp(u,f)||u.push(f)}l=new He(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new pA(new Be(a),l,c)}class Xi extends Qi{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xi}}class Vl extends Qi{_toFieldTransform(e){return new mS(e.path,new Vr)}isEqual(e){return e instanceof Vl}}function _A(t,e,n,r){const s=t.pu(1,e,n);Fl("Data must be an object, but it was:",s,r);const i=[],o=Be.empty();mn(r,(l,c)=>{const u=jl(e,l,n);c=ae(c);const d=s.Ru(u);if(c instanceof Xi)i.push(u);else{const f=Yi(c,d);f!=null&&(i.push(u),o.set(u,f))}});const a=new He(i);return new bp(o,a,s.fieldTransforms)}function yA(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[va(e,r,n)],l=[s];if(i.length%2!=0)throw new F(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(va(e,i[f])),l.push(i[f+1]);const c=[],u=Be.empty();for(let f=a.length-1;f>=0;--f)if(!xp(c,a[f])){const p=a[f];let m=l[f];m=ae(m);const y=o.Ru(p);if(m instanceof Xi)c.push(p);else{const g=Yi(m,y);g!=null&&(c.push(p),u.set(p,g))}}const d=new He(c);return new bp(u,d,o.fieldTransforms)}function Yi(t,e){if(Cp(t=ae(t)))return Fl("Unsupported field value:",e,t),Rp(t,e);if(t instanceof Qi)return function(r,s){if(!Ap(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Yi(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:ai(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ai(s.serializer,i)}}if(r instanceof Ll)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:Gf(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:El(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Ol(r)}`)}(t,e)}function Rp(t,e){const n={};return Ef(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(t,(r,s)=>{const i=Yi(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Cp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Ll||t instanceof Un||t instanceof Ge||t instanceof Qi)}function Fl(t,e,n){if(!Cp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ol(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function va(t,e,n){if((e=ae(e))instanceof Ki)return e._internalPath;if(typeof e=="string")return jl(t,e);throw ui("Field path arguments must be of type string or ",t,!1,void 0,n)}const vA=new RegExp("[~\\*/\\[\\]]");function jl(t,e,n){if(e.search(vA)>=0)throw ui(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ki(...e.split("."))._internalPath}catch{throw ui(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ui(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new F(b.INVALID_ARGUMENT,a+t+l)}function xp(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kp{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Np("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TA extends kp{data(){return super.data()}}function Np(t,e){return typeof e=="string"?jl(t,e):e instanceof Ki?e._internalPath:e._delegate._internalPath}/**
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
 */function wA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class EA{convertValue(e,n="none"){switch(cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mn(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ll(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Dr(e));default:return null}}convertTimestamp(e){const n=Bt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);re(Jf(r));const s=new Lr(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function IA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class lr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Op extends kp{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ls extends Op{data(e={}){return super.data(e)}}class SA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ls(this._firestore,this._userDataWriter,r.key,r,new lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ls(s._firestore,s._userDataWriter,a.doc.key,a.doc,new lr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ls(s._firestore,s._userDataWriter,a.doc.key,a.doc,new lr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:bA(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
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
 */function Ta(t){t=bt(t,Ge);const e=bt(t.firestore,Qn);return aA(Dl(e),t._key).then(n=>RA(e,t,n))}class Dp extends EA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Lp(t){t=bt(t,Gi);const e=bt(t.firestore,Qn),n=Dl(e),r=new Dp(e);return wA(t._query),lA(n,t._query).then(s=>new SA(e,r,t,s))}function ko(t,e,n,...r){t=bt(t,Ge);const s=bt(t.firestore,Qn),i=Pp(s);let o;return o=typeof(e=ae(e))=="string"||e instanceof Ki?yA(i,"updateDoc",t._key,e,n,r):_A(i,"updateDoc",t._key,e),Ul(s,[o.toMutation(t._key,Ze.exists(!0))])}function AA(t){return Ul(bt(t.firestore,Qn),[new vl(t._key,Ze.none())])}function PA(t,e){const n=bt(t.firestore,Qn),r=ci(t),s=IA(t.converter,e);return Ul(n,[gA(Pp(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then(()=>r)}function Ul(t,e){return function(r,s){const i=new Tt;return r.asyncQueue.enqueueAndForget(async()=>Gb(await oA(r),s,i)),i.promise}(Dl(t),e)}function RA(t,e,n){const r=n.docs.get(e._key),s=new Dp(t);return new Op(t,s,e._key,r,new lr(n.hasPendingWrites,n.fromCache),e.converter)}function No(){return new Vl("serverTimestamp")}(function(e,n=!0){(function(s){Wn=s})(dn),nn(new jt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Qn(new x0(r.getProvider("auth-internal")),new D0(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ot(ru,"4.4.0",e),ot(ru,"4.4.0","esm2017")})();var CA="firebase",xA="10.7.1";/**
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
 */ot(CA,xA,"app");/**
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
 */const Mp="firebasestorage.googleapis.com",Vp="storageBucket",kA=2*60*1e3,NA=10*60*1e3;/**
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
 */class de extends ft{constructor(e,n,r=0){super(Oo(e),`Firebase Storage: ${n} (${Oo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Oo(t){return"storage/"+t}function Bl(){const t="An unknown error occurred, please check the error payload for server response.";return new de(ue.UNKNOWN,t)}function OA(t){return new de(ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function DA(t){return new de(ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(ue.UNAUTHENTICATED,t)}function MA(){return new de(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function VA(t){return new de(ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function FA(){return new de(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jA(){return new de(ue.CANCELED,"User canceled the upload/download.")}function UA(t){return new de(ue.INVALID_URL,"Invalid URL '"+t+"'.")}function BA(t){return new de(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $A(){return new de(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Vp+"' property when initializing the app?")}function qA(){return new de(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zA(){return new de(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HA(t){return new de(ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function wa(t){return new de(ue.INVALID_ARGUMENT,t)}function Fp(){return new de(ue.APP_DELETED,"The Firebase app was deleted.")}function WA(t){return new de(ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vr(t,e){return new de(ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zn(t){throw new de(ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class We{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=We.makeFromUrl(e,n)}catch{return new We(e,"")}if(r.path==="")return r;throw BA(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},y=n===Mp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",_=new RegExp(`^https?://${y}/${s}/${g}`,"i"),v=[{regex:a,indices:l,postModify:i},{regex:p,indices:m,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<v.length;T++){const S=v[T],C=S.regex.exec(e);if(C){const V=C[S.indices.bucket];let N=C[S.indices.path];N||(N=""),r=new We(V,N),S.postModify(r);break}}if(r==null)throw UA(e);return r}}class GA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KA(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function d(g){s=setTimeout(()=>{s=null,t(p,l())},g)}function f(){i&&clearTimeout(i)}function p(g,..._){if(c){f();return}if(g){f(),u.call(null,g,..._);return}if(l()||o){f(),u.call(null,g,..._);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let m=!1;function y(g){m||(m=!0,f(),!c&&(s!==null?(g||(a=2),clearTimeout(s),d(0)):g||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function QA(t){t(!1)}/**
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
 */function XA(t){return t!==void 0}function YA(t){return typeof t=="object"&&!Array.isArray(t)}function $l(t){return typeof t=="string"||t instanceof String}function Mu(t){return ql()&&t instanceof Blob}function ql(){return typeof Blob<"u"}function Vu(t,e,n,r){if(r<e)throw wa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wa(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ji(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jp(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var en;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(en||(en={}));/**
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
 */function JA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class ZA{constructor(e,n,r,s,i,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Is(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===en.NO_ERROR,l=i.getStatus();if(!a||JA(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===en.ABORT;r(!1,new Is(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Is(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());XA(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Bl();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Fp():jA();o(l)}else{const l=FA();o(l)}};this.canceled_?n(!1,new Is(!1,null,!0)):this.backoffId_=KA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Is{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sP(t,e,n,r,s,i,o=!0){const a=jp(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nP(c,e),eP(c,n),tP(c,i),rP(c,r),new ZA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function iP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oP(...t){const e=iP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ql())return new Blob(t);throw new de(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lP(t){if(typeof atob>"u")throw HA("base-64");return atob(t)}/**
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
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Do{constructor(e,n){this.data=e,this.contentType=n||null}}function cP(t,e){switch(t){case it.RAW:return new Do(Up(e));case it.BASE64:case it.BASE64URL:return new Do(Bp(t,e));case it.DATA_URL:return new Do(dP(e),hP(e))}throw Bl()}function Up(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uP(t){let e;try{e=decodeURIComponent(t)}catch{throw vr(it.DATA_URL,"Malformed data URL.")}return Up(e)}function Bp(t,e){switch(t){case it.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw vr(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case it.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw vr(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lP(e)}catch(s){throw s.message.includes("polyfill")?s:vr(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class $p{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vr(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dP(t){const e=new $p(t);return e.base64?Bp(it.BASE64,e.rest):uP(e.rest)}function hP(t){return new $p(t).contentType}function fP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Nt{constructor(e,n){let r=0,s="";Mu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mu(this.data_)){const r=this.data_,s=aP(r,e,n);return s===null?null:new Nt(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Nt(r,!0)}}static getBlob(...e){if(ql()){const n=e.map(r=>r instanceof Nt?r.data_:r);return new Nt(oP.apply(null,n))}else{const n=e.map(o=>$l(o)?cP(it.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Nt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function qp(t){let e;try{e=JSON.parse(t)}catch{return null}return YA(e)?e:null}/**
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
 */function pP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zp(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gP(t,e){return e}class Ve{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||gP}}let Ss=null;function _P(t){return!$l(t)||t.length<2?t:zp(t)}function Hp(){if(Ss)return Ss;const t=[];t.push(new Ve("bucket")),t.push(new Ve("generation")),t.push(new Ve("metageneration")),t.push(new Ve("name","fullPath",!0));function e(i,o){return _P(o)}const n=new Ve("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ve("size");return s.xform=r,t.push(s),t.push(new Ve("timeCreated")),t.push(new Ve("updated")),t.push(new Ve("md5Hash",null,!0)),t.push(new Ve("cacheControl",null,!0)),t.push(new Ve("contentDisposition",null,!0)),t.push(new Ve("contentEncoding",null,!0)),t.push(new Ve("contentLanguage",null,!0)),t.push(new Ve("contentType",null,!0)),t.push(new Ve("metadata","customMetadata",!0)),Ss=t,Ss}function yP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new We(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function vP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return yP(r,t),r}function Wp(t,e,n){const r=qp(e);return r===null?null:vP(t,r,n)}function TP(t,e,n,r){const s=qp(e);if(s===null||!$l(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),p=Ji(f,n,r),m=jp({alt:"media",token:c});return p+m})[0]}function wP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class zl{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Gp(t){if(!t)throw Bl()}function EP(t,e){function n(r,s){const i=Wp(t,s,e);return Gp(i!==null),i}return n}function IP(t,e){function n(r,s){const i=Wp(t,s,e);return Gp(i!==null),TP(i,s,t.host,t._protocol)}return n}function Kp(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=MA():s=LA():n.getStatus()===402?s=DA(t.bucket):n.getStatus()===403?s=VA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Qp(t){const e=Kp(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=OA(t.path)),i.serverResponse=s.serverResponse,i}return n}function SP(t,e,n){const r=e.fullServerUrl(),s=Ji(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new zl(s,i,IP(t,n),o);return a.errorHandler=Qp(e),a}function bP(t,e){const n=e.fullServerUrl(),r=Ji(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,c){}const a=new zl(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Qp(e),a}function AP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=AP(null,e)),r}function RP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let T=0;T<2;T++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=PP(e,r,s),u=wP(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=Nt.getBlob(d,r,f);if(p===null)throw qA();const m={name:c.fullPath},y=Ji(i,t.host,t._protocol),g="POST",_=t.maxUploadRetryTime,w=new zl(y,g,EP(t,n),_);return w.urlParams=m,w.headers=o,w.body=p.uploadData(),w.errorHandler=Kp(e),w}class CP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=en.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=en.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=en.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Zn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xP extends CP{initXhr(){this.xhr_.responseType="text"}}function Hl(){return new xP}/**
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
 */class un{constructor(e,n){this._service=e,n instanceof We?this._location=n:this._location=We.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new un(e,n)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zp(this._location.path)}get storage(){return this._service}get parent(){const e=pP(this._location.path);if(e===null)return null;const n=new We(this._location.bucket,e);return new un(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WA(e)}}function kP(t,e,n){t._throwIfRoot("uploadBytes");const r=RP(t.storage,t._location,Hp(),new Nt(e,!0),n);return t.storage.makeRequestWithTokens(r,Hl).then(s=>({metadata:s,ref:t}))}function NP(t){t._throwIfRoot("getDownloadURL");const e=SP(t.storage,t._location,Hp());return t.storage.makeRequestWithTokens(e,Hl).then(n=>{if(n===null)throw zA();return n})}function OP(t){t._throwIfRoot("deleteObject");const e=bP(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Hl)}function DP(t,e){const n=mP(t._location.path,e),r=new We(t._location.bucket,n);return new un(t.storage,r)}/**
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
 */function LP(t){return/^[A-Za-z]+:\/\//.test(t)}function MP(t,e){return new un(t,e)}function Xp(t,e){if(t instanceof Wl){const n=t;if(n._bucket==null)throw $A();const r=new un(n,n._bucket);return e!=null?Xp(r,e):r}else return e!==void 0?DP(t,e):t}function VP(t,e){if(e&&LP(e)){if(t instanceof Wl)return MP(t,e);throw wa("To use ref(service, url), the first argument must be a Storage instance.")}else return Xp(t,e)}function Fu(t,e){const n=e==null?void 0:e[Vp];return n==null?null:We.makeFromBucketSpec(n,t)}function FP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Zu(s,t.app.options.projectId))}class Wl{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Mp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kA,this._maxUploadRetryTime=NA,this._requests=new Set,s!=null?this._bucket=We.makeFromBucketSpec(s,this._host):this._bucket=Fu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=Fu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new un(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new GA(Fp());{const o=sP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ju="@firebase/storage",Uu="0.12.0";/**
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
 */const Yp="storage";function Bu(t,e,n){return t=ae(t),kP(t,e,n)}function $u(t){return t=ae(t),NP(t)}function jP(t){return t=ae(t),OP(t)}function Ea(t,e){return t=ae(t),VP(t,e)}function UP(t=Ca(),e){t=ae(t);const r=fi(t,Yp).getImmediate({identifier:e}),s=Xu("storage");return s&&BP(r,...s),r}function BP(t,e,n,r={}){FP(t,e,n,r)}function $P(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Wl(n,r,s,e,dn)}function qP(){nn(new jt(Yp,$P,"PUBLIC").setMultipleInstances(!0)),ot(ju,Uu,""),ot(ju,Uu,"esm2017")}qP();const zP={apiKey:"AIzaSyBCsaV1L3rkVq03L0O1XL3xfJKcr9x1GBc",authDomain:"opensg-a7142.firebaseapp.com",projectId:"opensg-a7142",storageBucket:"opensg-a7142.appspot.com",messagingSenderId:"856995806997",appId:"1:856995806997:web:8bded6b053678d28f6b31c",measurementId:"G-Y50V66FT94"},Gl=nd(zP),Sn=hA(Gl),Ia=UP(Gl),Ms=lv(Gl);function os({category:t,part:e}){return h.jsxs("section",{className:"w-full py-open-3xl flex flex-col items-center gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl",children:[h.jsx("p",{className:"text-open-font-large tablet:text-open-font-xxl desktop:text-open-font-xxl font-open-label",children:t}),h.jsx("h2",{className:"text-open-font-xxl desktop:text-open-font-xxxxl  tablet:text-open-font-xxxxl font-open-heading",children:e})]})}os.propTypes={category:E.PropTypes.string.isRequired,part:E.PropTypes.string.isRequired};const HP="oxOJ",WP="OpEW",GP="Viul",KP="E7fp",QP="gTgb",XP="A7MS",YP="d7mZ",JP="-Hm-",ZP="JAJr",eR="xA7c",tR="c2-N",nR="VXnu",rR="lxgy",sR="O6H1",iR="AUYk",oR="ED0q",aR="GQlZ",lR="s5L6",cR="_1rE6",uR="gXqM",dR="y5Lk",hR="gNkb",fR="c4eI",pR="yoZ4",mR="ZWUF",gR="fWfJ",K={NoticeWrapper:HP,pageCount:WP,noticeList:GP,noticeItem:KP,noticeTitle:QP,noticeCreatedAt:XP,listButtons:YP,pageNum:JP,currentPage:ZP,titleWrapper:eR,title:tR,contentWrapper:nR,imageContainer:rR,imagePreview:sR,imageLabel:iR,imageInput:oR,contentText:aR,buttonWrapper:lR,button:cR,detailWrapper:uR,updatedAt:dR,editButton:hR,deleteButton:fR,navWrapper:pR,list:mR,comebackButton:gR};function Kl({notice:t,notices:e}){var s,i;const n=(s=t==null?void 0:t.data)!=null&&s.updatedAt?new Date(t.data.updatedAt.seconds*1e3+t.data.updatedAt.nanoseconds/1e6):null,r=n==null?void 0:n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});return h.jsx(wn,{to:`/community/${t==null?void 0:t.id}`,state:{currentNotice:t,notices:e},children:h.jsxs("div",{className:K.noticeItem,children:[h.jsx("h4",{className:K.noticeTitle,children:(i=t==null?void 0:t.data)==null?void 0:i.title}),h.jsx("time",{className:K.noticeCreatedAt,dateTime:r,children:r})]})})}Kl.propTypes={notices:E.PropTypes.arrayOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.objectOf({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.arrayOf({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired,notice:E.PropTypes.objectOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired};Kl.propTypes={notices:E.PropTypes.arrayOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired,notice:E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired}).isRequired};function Jp({notices:t,currentNotices:e}){var n;return h.jsx("div",{className:K.noticeList,children:(n=e==null?void 0:e.slice().toSorted((r,s)=>s.data.index-r.data.index))==null?void 0:n.map(r=>h.jsx(Kl,{notice:r,notices:t},r==null?void 0:r.id))})}Jp.propTypes={notices:E.PropTypes.arrayOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired,currentNotices:E.PropTypes.arrayOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired};function Zp({currentPage:t,pageCount:e,handleFirstPage:n,handlePrevPage:r,handlePageChange:s,handleNextPage:i,handleLastPage:o}){return h.jsxs("div",{className:K.listButtons,children:[h.jsx("button",{type:"button",onClick:n,className:"",children:"≪"}),h.jsx("button",{type:"button",onClick:r,className:"-rotate-90",children:"⋀"}),Array.from({length:e},(a,l)=>l+1).map(a=>h.jsx("button",{type:"button",onClick:()=>s(a),className:`${K.pageNum} ${t===a?K.currentPage:""}`,children:a},a)),h.jsx("button",{type:"button",onClick:i,className:"-rotate-90",children:"⋁"}),h.jsx("button",{type:"button",onClick:o,children:"≫"})]})}Zp.propTypes={currentPage:E.PropTypes.number.isRequired,pageCount:E.PropTypes.number.isRequired,handleFirstPage:E.PropTypes.func.isRequired,handlePrevPage:E.PropTypes.func.isRequired,handlePageChange:E.PropTypes.func.isRequired,handleNextPage:E.PropTypes.func.isRequired,handleLastPage:E.PropTypes.func.isRequired};function em({sortedNotices:t}){const[e,n]=x.useState(1),r=6,s=t==null?void 0:t.slice((e-1)*r,e*r),i=Math.ceil(t.length/r),o=f=>n(f),a=()=>{e>1&&n(e-1)},l=()=>{e<i&&n(e+1)},c=()=>{n(1)},u=()=>{n(i)},d={currentPage:e,pageCount:Math.ceil(t.length/r),handleFirstPage:c,handlePrevPage:a,handlePageChange:o,handleNextPage:l,handleLastPage:u};return h.jsxs("section",{className:K.NoticeWrapper,children:[h.jsx("h3",{className:"sr-only",children:"커뮤니티 리스트"}),h.jsxs("p",{className:K.pageCount,children:["Total: ",t==null?void 0:t.length," [",e," / ",d.pageCount,"]"]}),h.jsx(Jp,{notices:t,currentNotices:s}),h.jsx(Zp,{...d})]})}em.propTypes={sortedNotices:E.PropTypes.arrayOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired};qu({key:"authState",default:null,dangerouslyAllowMutability:!0});const Zi=qu({key:"isLoggedInState",default:!1});function _R(){const[t,e]=x.useState([]),n=Sa(Zi),r=Ur();x.useEffect(()=>{(async()=>{try{const a=await Lp(ya(Sn,"community")),l=[];a.forEach(c=>{l.push({id:c.id,data:c.data()})}),e(l)}catch(a){Q.error(a)}})()},[]);const s=t==null?void 0:t.slice().toSorted((o,a)=>a.data.index-o.data.index),i=()=>{r("write",{state:{notices:s}})};return h.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[h.jsx(os,{category:"Support",part:"커뮤니티"}),h.jsx("div",{className:`w-full flex justify-end
      p-open-gutter-mobile
      tablet:p-open-gutter-desktop desktop:p-open-gutter-desktop  animate-bounce`,children:n?h.jsx("button",{type:"button",className:"p-open-lg tablet:p-open-xl desktop:p-open-xl text-open-font-medium tablet:text-open-font-large desktop:text-open-font-xl bg-slate-400 -text--openfoundation-black rounded-md",onClick:i,children:"글쓰러 가기"}):""}),h.jsx(em,{sortedNotices:s})]})}function Ql({currentNotice:t,nextNotice:e,prevNotice:n,notices:r,params:s}){var f,p,m,y,g,_,w,v,T;const i=Ur(),o=Sa(Zi),a=(f=t==null?void 0:t.data)!=null&&f.updatedAt?new Date(t.data.updatedAt.seconds*1e3+t.data.updatedAt.nanoseconds/1e6):null,l=a==null?void 0:a.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),c=()=>{i(`/community/${t==null?void 0:t.id}/edit`,{state:{currentNotice:t,notices:r}})},u=async()=>{try{const S=ci(Sn,"community",s.id),C=await Ta(S);if(await AA(S),C.exists()){const{imageUrl:V}=C.data();if(V){const N=Ea(Ia,`images/community/${s.id}`);await jP(N)}}Q.success("글이 삭제되었습니다."),i("/community")}catch{Q.error("글 삭제 중 오류가 발생했습니다.")}},d=()=>{i("/community")};return t?h.jsxs("section",{className:K.detailWrapper,children:[h.jsxs("div",{className:K.titleWrapper,children:[h.jsx("h3",{className:K.title,children:(p=t==null?void 0:t.data)==null?void 0:p.title}),h.jsx("time",{className:K.updatedAt,dateTime:l,children:l})]}),h.jsx("div",{className:K.buttonWrapper,children:o?h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",className:`${K.button} ${K.editButton}`,onClick:c,children:"수정"}),h.jsx("button",{type:"button",className:`${K.button} ${K.deleteButton}`,onClick:u,children:"삭제"})]}):""}),h.jsxs("div",{className:K.contentWrapper,children:[h.jsx("img",{src:(m=t==null?void 0:t.data)==null?void 0:m.imageUrl,alt:(y=t==null?void 0:t.data)==null?void 0:y.title,className:K.imagePreview}),h.jsx("p",{className:K.contentText,children:(g=t==null?void 0:t.data)==null?void 0:g.content})]}),h.jsxs("ul",{className:K.navWrapper,children:[h.jsx("li",{className:K.list,children:e?h.jsxs(wn,{to:`/community/${e==null?void 0:e.id}`,state:{currentNotice:e,notices:r},className:"flex gap-open-lg",children:[h.jsx("span",{className:"font-semibold",children:"↑   다음 글"}),h.jsx("span",{children:(_=e==null?void 0:e.data)==null?void 0:_.title})]}):h.jsxs(wn,{to:"#",className:"flex gap-open-lg",onClick:()=>Q("다음 글이 없습니다."),children:[" ",h.jsx("span",{className:"font-semibold",children:"↑   다음 글"}),e&&h.jsx("span",{children:(w=e==null?void 0:e.data)==null?void 0:w.title}),!e&&h.jsx("span",{children:"다음 글이 없습니다."})]})}),h.jsx("li",{className:K.list,children:n?h.jsxs(wn,{to:`/community/${n==null?void 0:n.id}`,state:{currentNotice:n,notices:r},className:"flex gap-open-lg",children:[h.jsx("span",{className:"font-semibold",children:"↓   이전 글"}),h.jsx("span",{children:(v=n==null?void 0:n.data)==null?void 0:v.title})]}):h.jsxs(wn,{to:"#",className:"flex gap-open-lg",onClick:()=>Q("이전 글이 없습니다."),children:[" ",h.jsx("span",{className:"font-semibold",children:"↓   이전 글"}),n&&h.jsx("span",{children:(T=n==null?void 0:n.data)==null?void 0:T.title}),!n&&h.jsx("span",{children:"이전 글이 없습니다."})]})})]}),h.jsxs("button",{type:"button",className:K.comebackButton,onClick:d,children:[" ",h.jsx("span",{className:"block font-open-highlight",children:"목록으로"}),h.jsx("span",{className:"font-extralight",children:"> "}),"  "," "]})]}):h.jsx("div",{children:"Loading..."})}Ql.propTypes={currentNotice:E.PropTypes.shape({id:E.PropTypes.string,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.objectOf({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired}),nextNotice:E.PropTypes.shape({id:E.PropTypes.string,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})})}),prevNotice:E.PropTypes.shape({id:E.PropTypes.string,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})})}),notices:E.PropTypes.arrayOf(E.PropTypes.shape({id:E.PropTypes.string.isRequired,data:E.PropTypes.shape({index:E.PropTypes.number,title:E.PropTypes.string,content:E.PropTypes.string,imageUrl:E.PropTypes.string,updatedAt:E.PropTypes.shape({seconds:E.PropTypes.number,nanoseconds:E.PropTypes.number})}).isRequired})).isRequired,params:E.PropTypes.shape({id:E.PropTypes.string.isRequired}).isRequired};Ql.defaultProps={currentNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}},nextNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}},prevNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}}};function yR(){const t=ba(),e=di(),[n,r]=x.useState([]),[s,i]=x.useState(null),[o,a]=x.useState(-1),[l,c]=x.useState(null),[u,d]=x.useState(null);return x.useEffect(()=>{(async()=>{const{currentNotice:p,notices:m}=t.state||{};if(p){i(p);const y=m.findIndex(w=>(w==null?void 0:w.id)===(e==null?void 0:e.id));a(y);const g=y>0?m[y-1]:null,_=y<m.length-1?m[y+1]:null;r(m),c(g),d(_)}})()},[t.state,e.id]),h.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[h.jsx(os,{category:"Support",part:"커뮤니티"}),h.jsx(Ql,{notices:n,currentNotice:s,params:e,nextNotice:l,prevNotice:u})]})}function tm({title:t,setTitle:e,content:n,setContent:r,imagePreview:s,setImagePreview:i,selectedFile:o,setSelectedFile:a}){const l=d=>{e(d.target.value)},c=d=>{r(d.target.value)},u=d=>{const f=d.target.files[0];if(f&&f.type.startsWith("image/")){const m=new FileReader;m.onload=()=>{i(m.result)},m.readAsDataURL(f)}else i(null);a(f);const p=document.getElementById("fileName");p&&(p.value=f?f.name:"첨부파일")};return h.jsxs(h.Fragment,{children:[h.jsx("h3",{className:"sr-only",children:"커뮤니티 폼 입력 섹션"}),h.jsx("div",{className:K.titleWrapper,children:h.jsx("input",{type:"text",placeholder:"제목을 입력하세요.",className:K.title,value:t,onChange:l})}),h.jsxs("div",{className:K.contentWrapper,children:[h.jsxs("div",{className:K.imageContainer,children:[s?h.jsxs(h.Fragment,{children:[h.jsx("img",{src:s,alt:"이미지 미리보기",className:K.imagePreview}),h.jsx("label",{htmlFor:"file",className:K.imageLabel,children:"이미지 변경"})]}):h.jsxs(h.Fragment,{children:[h.jsx("input",{type:"text",value:o?o.name:"첨부파일",id:"fileName",placeholder:"첨부파일",onChange:()=>{},className:K.imageInput}),h.jsx("label",{htmlFor:"file",className:K.imageLabel,children:"파일 찾기"})]}),h.jsx("input",{type:"file",id:"file",onChange:u,className:"w-0 h-0"})]}),h.jsx("textarea",{placeholder:"내용을 입력해주세요.",rows:10,className:K.contentText,value:n,onChange:c})]})]})}tm.propTypes={title:I.string.isRequired,setTitle:I.func.isRequired,content:I.string.isRequired,setContent:I.func.isRequired,imagePreview:I.string.isRequired,setImagePreview:I.func.isRequired,selectedFile:I.shape({name:I.string,type:I.string}).isRequired,setSelectedFile:I.func.isRequired};function nm({isEditing:t,handleSave:e}){const n=Ur(),r=()=>{Q.done("변경을 취소했습니다."),n(-1)};return h.jsxs("section",{className:K.buttonWrapper,children:[h.jsx("h3",{className:"sr-only",children:"커뮤니티 폼 버튼 섹션"}),h.jsxs("button",{type:"button",className:`${K.button} bg-blue-400`,onClick:e,children:[" ",h.jsxs("span",{className:"block font-medium",children:[t?"수정하기":"등록하기"," "]})]}),h.jsxs("button",{type:"button",className:`${K.button} bg-red-400`,onClick:r,children:[" ",h.jsx("span",{className:"block font-medium",children:"취소하기"})]})]})}nm.propTypes={isEditing:E.PropTypes.bool.isRequired,handleSave:E.PropTypes.func.isRequired};function eo({isEditing:t=!1,data:e=null}){const[n,r]=x.useState(""),[s,i]=x.useState(""),[o,a]=x.useState(null),[l,c]=x.useState(null),u=Ur(),d=ba(),{currentNotice:f,notices:p}=d.state||{},{id:m}=di();x.useEffect(()=>{t&&e&&(r(e.title),i(e.content),c(e.imageUrl))},[t,f]);const y=async()=>{try{const g=await Lp(ya(Sn,"community")),_=g.size>0?g.size-1:0;if(t){const w=ci(Sn,"community",m);if(await ko(w,{title:n,content:s,updatedAt:No()}),o){const S=Ea(Ia,`images/community/${m}`);await Bu(S,o);const C=await $u(S);await ko(w,{imageUrl:C})}Q.success("글이 수정되었습니다.");const T=(await Ta(w)).data();u(`/community/${m}`,{state:{notices:p,currentNotice:{id:m,data:T}}})}else{const w=await PA(ya(Sn,"community"),{index:_,title:n,content:s,imageUrl:null,updatedAt:No()});let v;if(o){const V=Ea(Ia,`images/community/${w.id}`);await Bu(V,o),v=await $u(V);const N=ci(Sn,"community",w.id);await ko(N,{imageUrl:v})}const T=[...p,{id:w.id,data:{index:_,title:n,content:s,imageUrl:o?v:null,updatedAt:No()}}];Q.success("글이 등록되었습니다.");const C=(await Ta(w)).data();u(`/community/${w.id}`,{state:{notices:T==null?void 0:T.slice().toSorted((V,N)=>N.data.index-V.data.index),currentNotice:{id:w.id,data:C}}})}}catch{Q.error("변경 실패하였습니다. 다시 한번 확인해주세요.")}};return h.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[h.jsx(os,{category:"Support",part:"커뮤니티"}),h.jsxs("div",{className:"flex flex-col px-open-gutter-mobile desktop:px-open-gutter-desktop ",children:[h.jsx(tm,{title:n,setTitle:r,content:s,setContent:i,selectedFile:o,setSelectedFile:a,imagePreview:l,setImagePreview:c}),h.jsx(nm,{isEditing:t,handleSave:y})]})]})}eo.propTypes={isEditing:I.bool,data:I.shape({index:I.number,title:I.string,content:I.string,imageUrl:I.string,updatedAt:I.shape({seconds:I.number,nanoseconds:I.number})})};eo.defaultProps={isEditing:!1,data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}};function vR(){const t=ba(),{currentNotice:e}=t.state||{};return h.jsx(eo,{isEditing:!0,data:e==null?void 0:e.data})}const TR="mi4i",wR="F4Jg",ER="BmOe",IR="cZxw",SR="_7vaJ",bR="DzRC",AR="OV73",PR="Owmc",Qe={container:TR,section:wR,form:ER,inputWrapper:IR,label:SR,input:bR,button:AR,buttonWrapper:PR};function RR(){const[t,e]=x.useState(""),[n,r]=x.useState(""),s=Sa(Zi),i=Ur(),o=u=>e(u.target.value),a=u=>r(u.target.value),l=async u=>{u.preventDefault();try{await H_(Ms,t,n),await W_(Ms,Va),i("/community")}catch(d){Q(d)}},c=()=>{X_(Ms),e(""),r("")};return h.jsxs("div",{className:Qe.container,children:[h.jsx(os,{category:"Admin",part:"관리자 페이지"}),h.jsx("section",{className:Qe.section,children:s?h.jsxs("div",{className:Qe.buttonWrapper,children:[h.jsx("h3",{className:"text-open-font-xl",children:"환영합니다, 관리자님!"}),h.jsx("button",{type:"button",onClick:c,className:Qe.button,children:"로그아웃"})]}):h.jsxs("form",{onSubmit:l,className:Qe.form,children:[h.jsxs("div",{className:Qe.inputWrapper,children:[h.jsx("label",{htmlFor:"id",className:Qe.label,children:"아이디"}),h.jsx("input",{type:"text",id:"id",name:"id",onChange:o,placeholder:"아이디를 입력하세요",className:Qe.input})]}),h.jsxs("div",{className:Qe.inputWrapper,children:[h.jsx("label",{htmlFor:"pw",className:Qe.label,children:"비밀번호"}),h.jsx("input",{type:"password",id:"pw",name:"pw",onChange:a,placeholder:"비밀번호를 입력하세요",className:Qe.input})]}),h.jsx("input",{type:"submit",value:"로그인",className:Qe.button})]})})]})}const CR=dm(hm(h.jsxs(Ee,{path:"/",element:h.jsx(yv,{}),children:[h.jsx(Ee,{index:!0,element:h.jsx(Tv,{})}),h.jsx(Ee,{path:"/about",element:h.jsx(vv,{})}),h.jsx(Ee,{path:"/history",element:h.jsx(yw,{})}),h.jsx(Ee,{path:"/team",element:h.jsx(vw,{})}),h.jsx(Ee,{path:"/location",element:h.jsx(Tw,{})}),h.jsx(Ee,{path:"/solutions/:id",element:h.jsx(lE,{})}),h.jsx(Ee,{path:"/machines",element:h.jsx(cE,{})}),h.jsx(Ee,{path:"/device",element:h.jsx(wI,{})}),h.jsx(Ee,{path:"/industries/:id",element:h.jsx(HE,{})}),h.jsx(Ee,{path:"/library",element:h.jsx(PE,{})}),h.jsx(Ee,{path:"/contact",element:h.jsx(TI,{})}),h.jsx(Ee,{path:"/community",element:h.jsx(_R,{})}),h.jsx(Ee,{path:"/community/:id",element:h.jsx(yR,{})}),h.jsx(Ee,{path:"/community/write",element:h.jsx(eo,{})}),h.jsx(Ee,{path:"/community/:id/edit",element:h.jsx(vR,{})}),h.jsx(Ee,{path:"/admin",element:h.jsx(RR,{})})]})));function xR(){const t=am(Zi);return x.useEffect(()=>{const e=Q_(Ms,n=>{t(!!n)});return()=>e()},[t]),h.jsx(fm,{router:CR})}Lo.createRoot(document.getElementById("root")).render(h.jsx(q.StrictMode,{children:h.jsx(lm,{children:h.jsx(xR,{})})}));
