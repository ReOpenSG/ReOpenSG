import{d as w,g as B,r as p,e as _e,b as we,H as ke}from"./react-d2170048.js";import{R as ae,a as je,b as Ee}from"./recoil-be59ef55.js";import{c as Oe,a as Te,R as b,b as Se}from"./reactRouter-8e1c8ab1.js";import{g as Ce,o as Re}from"./fbAuth-9e87268e.js";import{r as Ne,v as Le}from"./fbApp-26a327c1.js";import{g as Ie}from"./fbStore-ed2d4d67.js";import{g as Pe}from"./fbStorage-a10cdba0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var oe="Expected a function",Y=0/0,Ae="[object Symbol]",ze=/^\s+|\s+$/g,$e=/^[-+]0x[0-9a-f]+$/i,De=/^0b[01]+$/i,Me=/^0o[0-7]+$/i,qe=parseInt,He=typeof w=="object"&&w&&w.Object===Object&&w,Ve=typeof self=="object"&&self&&self.Object===Object&&self,We=He||Ve||Function("return this")(),Be=Object.prototype,Fe=Be.toString,Ue=Math.max,Ye=Math.min,q=function(){return We.Date.now()};function Ge(t,e,r){var n,i,o,c,l,d,u=0,f=!1,y=!1,j=!0;if(typeof t!="function")throw new TypeError(oe);e=G(e)||0,P(r)&&(f=!!r.leading,y="maxWait"in r,o=y?Ue(G(r.maxWait)||0,e):o,j="trailing"in r?!!r.trailing:j);function E(s){var v=n,h=i;return n=i=void 0,u=s,c=t.apply(h,v),c}function z(s){return u=s,l=setTimeout(x,e),f?E(s):c}function $(s){var v=s-d,h=s-u,R=e-v;return y?Ye(R,o-h):R}function S(s){var v=s-d,h=s-u;return d===void 0||v>=e||v<0||y&&h>=o}function x(){var s=q();if(S(s))return C(s);l=setTimeout(x,$(s))}function C(s){return l=void 0,j&&n?E(s):(n=i=void 0,c)}function D(){l!==void 0&&clearTimeout(l),u=0,n=d=i=l=void 0}function M(){return l===void 0?c:C(q())}function O(){var s=q(),v=S(s);if(n=arguments,i=this,d=s,v){if(l===void 0)return z(d);if(y)return l=setTimeout(x,e),E(d)}return l===void 0&&(l=setTimeout(x,e)),c}return O.cancel=D,O.flush=M,O}function Ke(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(oe);return P(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ge(t,e,{leading:n,maxWait:e,trailing:i})}function P(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Xe(t){return!!t&&typeof t=="object"}function Qe(t){return typeof t=="symbol"||Xe(t)&&Fe.call(t)==Ae}function G(t){if(typeof t=="number")return t;if(Qe(t))return Y;if(P(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=P(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ze,"");var r=De.test(t);return r||Me.test(t)?qe(t.slice(2),r?2:8):$e.test(t)?Y:+t}var Je=Ke;const Ze=B(Je);var et="Expected a function",K=0/0,tt="[object Symbol]",rt=/^\s+|\s+$/g,nt=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,at=/^0o[0-7]+$/i,ot=parseInt,st=typeof w=="object"&&w&&w.Object===Object&&w,ct=typeof self=="object"&&self&&self.Object===Object&&self,ut=st||ct||Function("return this")(),lt=Object.prototype,dt=lt.toString,ft=Math.max,mt=Math.min,H=function(){return ut.Date.now()};function pt(t,e,r){var n,i,o,c,l,d,u=0,f=!1,y=!1,j=!0;if(typeof t!="function")throw new TypeError(et);e=X(e)||0,V(r)&&(f=!!r.leading,y="maxWait"in r,o=y?ft(X(r.maxWait)||0,e):o,j="trailing"in r?!!r.trailing:j);function E(s){var v=n,h=i;return n=i=void 0,u=s,c=t.apply(h,v),c}function z(s){return u=s,l=setTimeout(x,e),f?E(s):c}function $(s){var v=s-d,h=s-u,R=e-v;return y?mt(R,o-h):R}function S(s){var v=s-d,h=s-u;return d===void 0||v>=e||v<0||y&&h>=o}function x(){var s=H();if(S(s))return C(s);l=setTimeout(x,$(s))}function C(s){return l=void 0,j&&n?E(s):(n=i=void 0,c)}function D(){l!==void 0&&clearTimeout(l),u=0,n=d=i=l=void 0}function M(){return l===void 0?c:C(H())}function O(){var s=H(),v=S(s);if(n=arguments,i=this,d=s,v){if(l===void 0)return z(d);if(y)return l=setTimeout(x,e),E(d)}return l===void 0&&(l=setTimeout(x,e)),c}return O.cancel=D,O.flush=M,O}function V(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function vt(t){return!!t&&typeof t=="object"}function bt(t){return typeof t=="symbol"||vt(t)&&dt.call(t)==tt}function X(t){if(typeof t=="number")return t;if(bt(t))return K;if(V(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=V(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(rt,"");var r=it.test(t);return r||at.test(t)?ot(t.slice(2),r?2:8):nt.test(t)?K:+t}var yt=pt;const Q=B(yt);var se=function(){};function ce(t){var e=void 0,r=void 0,n=void 0;for(e=0;e<t.length;e+=1)if(r=t[e],r.dataset&&r.dataset.aos||(n=r.children&&ce(r.children),n))return!0;return!1}function gt(t){t&&t.forEach(function(e){var r=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),i=r.concat(n);if(ce(i))return se()})}function ue(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function ht(){return!!ue()}function xt(t,e){var r=window.document,n=ue(),i=new n(gt);se=e,i.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var J={isSupported:ht,ready:xt},_t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},wt=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},jt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Et=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Ot=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Tt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Z(){return navigator.userAgent||navigator.vendor||window.opera||""}var St=function(){function t(){_t(this,t)}return wt(t,[{key:"phone",value:function(){var r=Z();return!!(jt.test(r)||Et.test(r.substr(0,4)))}},{key:"mobile",value:function(){var r=Z();return!!(Ot.test(r)||Tt.test(r.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),I=new St,Ct=function(e,r){return r&&r.forEach(function(n){return e.classList.add(n)})},Rt=function(e,r){return r&&r.forEach(function(n){return e.classList.remove(n)})},L=function(e,r){var n=void 0;return I.ie11()?(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,!0,!0,{detail:r})):n=new CustomEvent(e,{detail:r}),document.dispatchEvent(n)},Nt=function(e,r){var n=e.options,i=e.position,o=e.node;e.data;var c=function(){e.animated&&(Rt(o,n.animatedClassNames),L("aos:out",o),e.options.id&&L("aos:in:"+e.options.id,o),e.animated=!1)},l=function(){e.animated||(Ct(o,n.animatedClassNames),L("aos:in",o),e.options.id&&L("aos:in:"+e.options.id,o),e.animated=!0)};n.mirror&&r>=i.out&&!n.once?c():r>=i.in?l():e.animated&&!n.once&&c()},ee=function(e){return e.forEach(function(r,n){return Nt(r,window.pageYOffset)})},le=function(e){for(var r=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)r+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),n+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:n,left:r}},k=function(t,e,r){var n=t.getAttribute("data-aos-"+e);if(typeof n<"u"){if(n==="true")return!0;if(n==="false")return!1}return n||r},Lt=function(e,r,n){var i=window.innerHeight,o=k(e,"anchor"),c=k(e,"anchor-placement"),l=Number(k(e,"offset",c?0:r)),d=c||n,u=e;o&&document.querySelectorAll(o)&&(u=document.querySelectorAll(o)[0]);var f=le(u).top-i;switch(d){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=i/2;break;case"center-center":f+=i/2+u.offsetHeight/2;break;case"bottom-center":f+=i/2+u.offsetHeight;break;case"top-top":f+=i;break;case"bottom-top":f+=i+u.offsetHeight;break;case"center-top":f+=i+u.offsetHeight/2;break}return f+l},It=function(e,r){var n=k(e,"anchor"),i=k(e,"offset",r),o=e;n&&document.querySelectorAll(n)&&(o=document.querySelectorAll(n)[0]);var c=le(o).top;return c+o.offsetHeight-i},Pt=function(e,r){return e.forEach(function(n,i){var o=k(n.node,"mirror",r.mirror),c=k(n.node,"once",r.once),l=k(n.node,"id"),d=r.useClassNames&&n.node.getAttribute("data-aos"),u=[r.animatedClassName].concat(d?d.split(" "):[]).filter(function(f){return typeof f=="string"});r.initClassName&&n.node.classList.add(r.initClassName),n.position={in:Lt(n.node,r.offset,r.anchorPlacement),out:o&&It(n.node,r.offset)},n.options={once:c,mirror:o,animatedClassNames:u,id:l}}),e},de=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},_=[],te=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},fe=function(){return document.all&&!window.atob},At=function(){return _=Pt(_,m),ee(_),window.addEventListener("scroll",Ze(function(){ee(_,m.once)},m.throttleDelay)),_},T=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(te=!0),te&&At()},me=function(){if(_=de(),ve(m.disable)||fe())return pe();T()},pe=function(){_.forEach(function(e,r){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),m.initClassName&&e.node.classList.remove(m.initClassName),m.animatedClassName&&e.node.classList.remove(m.animatedClassName)})},ve=function(e){return e===!0||e==="mobile"&&I.mobile()||e==="phone"&&I.phone()||e==="tablet"&&I.tablet()||typeof e=="function"&&e()===!0},zt=function(e){return m=kt(m,e),_=de(),!m.disableMutationObserver&&!J.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),m.disableMutationObserver=!0),m.disableMutationObserver||J.ready("[data-aos]",me),ve(m.disable)||fe()?pe():(document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),["DOMContentLoaded","load"].indexOf(m.startEvent)===-1?document.addEventListener(m.startEvent,function(){T(!0)}):window.addEventListener("load",function(){T(!0)}),m.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&T(!0),window.addEventListener("resize",Q(T,m.debounceDelay,!0)),window.addEventListener("orientationchange",Q(T,m.debounceDelay,!0)),_)},$t={init:zt,refresh:T,refreshHard:me};$t.init({});var be={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=p,Mt=Symbol.for("react.element"),qt=Symbol.for("react.fragment"),Ht=Object.prototype.hasOwnProperty,Vt=Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wt={key:!0,ref:!0,__self:!0,__source:!0};function ye(t,e,r){var n,i={},o=null,c=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(c=e.ref);for(n in e)Ht.call(e,n)&&!Wt.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:Mt,type:t,key:o,ref:c,props:i,_owner:Vt.current}}A.Fragment=qt;A.jsx=ye;A.jsxs=ye;be.exports=A;var a=be.exports,W={},re=_e;W.createRoot=re.createRoot,W.hydrateRoot=re.hydrateRoot;const Bt="modulepreload",Ft=function(t){return"/ReOpenSG/"+t},ne={},g=function(e,r,n){if(!r||r.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=Ft(o),o in ne)return;ne[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!n)for(let f=i.length-1;f>=0;f--){const y=i[f];if(y.href===o&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Bt,c||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),c)return new Promise((f,y)=>{u.addEventListener("load",f),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},Ut=p.lazy(()=>g(()=>import("./RootLayout-60e644bf.js"),["assets/RootLayout-60e644bf.js","assets/react-d2170048.js","assets/react-toastify.esm-f95a45f9.js","assets/reactRouter-8e1c8ab1.js","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/RootLayout-38f89cad.css","assets/ReactToastify-93d8b085.css"])),Yt=p.lazy(()=>g(()=>import("./About-851b4cfe.js"),["assets/About-851b4cfe.js","assets/react-d2170048.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/reactRouter-8e1c8ab1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/About-43e076de.css"])),Gt=p.lazy(()=>g(()=>import("./Home-ad6a131f.js"),["assets/Home-ad6a131f.js","assets/react-d2170048.js","assets/reactRouter-8e1c8ab1.js","assets/v4-4a60fe23.js","assets/swiper-945b20ba.js","assets/swiper-24b2bd94.js","assets/swiper-816446ca.css","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Home-e68c211b.css"])),Kt=p.lazy(()=>g(()=>import("./History-5f491486.js"),["assets/History-5f491486.js","assets/react-d2170048.js","assets/swiper-945b20ba.js","assets/swiper-24b2bd94.js","assets/swiper-816446ca.css","assets/index-ba9f3ee9.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/reactRouter-8e1c8ab1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/History-34e3735d.css"])),Xt=p.lazy(()=>g(()=>import("./Team-fcd0e985.js"),["assets/Team-fcd0e985.js","assets/react-d2170048.js","assets/reactRouter-8e1c8ab1.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Team-845f0f03.css"])),Qt=p.lazy(()=>g(()=>import("./Location-2f02239b.js"),["assets/Location-2f02239b.js","assets/react-d2170048.js","assets/reactRouter-8e1c8ab1.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Location-c164cec6.css"])),Jt=p.lazy(()=>g(()=>import("./Solutions-fdfcc1b2.js"),["assets/Solutions-fdfcc1b2.js","assets/react-d2170048.js","assets/index-ba9f3ee9.js","assets/aos-a2726f8a.js","assets/aos-61b3cfb1.css","assets/reactRouter-8e1c8ab1.js","assets/v4-4a60fe23.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Solutions-e5c9d630.css"])),ie=p.lazy(()=>g(()=>import("./MachinesDevices-19774e20.js"),["assets/MachinesDevices-19774e20.js","assets/react-d2170048.js","assets/reactRouter-8e1c8ab1.js","assets/v4-4a60fe23.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/MachinesDevices-b3fd5799.css"])),Zt=p.lazy(()=>g(()=>import("./Library-688e39e6.js"),["assets/Library-688e39e6.js","assets/react-d2170048.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/recoil-be59ef55.js","assets/reactRouter-8e1c8ab1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Library-a85b2371.css"])),er=p.lazy(()=>g(()=>import("./Industries-e5cf5d77.js"),["assets/Industries-e5cf5d77.js","assets/react-d2170048.js","assets/index-ba9f3ee9.js","assets/reactRouter-8e1c8ab1.js","assets/aos-a2726f8a.js","assets/aos-61b3cfb1.css","assets/v4-4a60fe23.js","assets/TitleSection-98714891.js","assets/TitleSection-18185cfb.css","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Industries-fccfa6cf.css"])),tr=p.lazy(()=>g(()=>import("./Contact-cd1aabd3.js"),["assets/Contact-cd1aabd3.js","assets/react-d2170048.js","assets/react-toastify.esm-f95a45f9.js","assets/v4-4a60fe23.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/recoil-be59ef55.js","assets/reactRouter-8e1c8ab1.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Contact-0cbf52f8.css"])),rr=p.lazy(()=>g(()=>import("./Community-ea674134.js"),["assets/Community-ea674134.js","assets/react-d2170048.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-toastify.esm-f95a45f9.js","assets/recoil-be59ef55.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/reactRouter-8e1c8ab1.js","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/fbAuth-9e87268e.js","assets/fbStorage-a10cdba0.js"])),nr=p.lazy(()=>g(()=>import("./CommunityDetail-55b3b4bd.js"),["assets/CommunityDetail-55b3b4bd.js","assets/react-d2170048.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/reactRouter-8e1c8ab1.js","assets/fbStorage-a10cdba0.js","assets/react-toastify.esm-f95a45f9.js","assets/recoil-be59ef55.js","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/fbAuth-9e87268e.js","assets/ReactToastify-93d8b085.css"])),ir=p.lazy(()=>g(()=>import("./CommunityForm-9d15395b.js"),["assets/CommunityForm-9d15395b.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-d2170048.js","assets/react-toastify.esm-f95a45f9.js","assets/fbStorage-a10cdba0.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/reactRouter-8e1c8ab1.js","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js"])),ar=p.lazy(()=>g(()=>import("./CommunityEdit-63de6664.js"),["assets/CommunityEdit-63de6664.js","assets/react-d2170048.js","assets/CommunityForm-9d15395b.js","assets/fbStore-ed2d4d67.js","assets/fbApp-26a327c1.js","assets/react-toastify.esm-f95a45f9.js","assets/fbStorage-a10cdba0.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/Community.module-49769493.js","assets/Community-f567d3a0.css","assets/reactRouter-8e1c8ab1.js","assets/recoil-be59ef55.js","assets/fbAuth-9e87268e.js"])),or=p.lazy(()=>g(()=>import("./Admin-b1413990.js"),["assets/Admin-b1413990.js","assets/fbAuth-9e87268e.js","assets/fbApp-26a327c1.js","assets/react-d2170048.js","assets/react-toastify.esm-f95a45f9.js","assets/recoil-be59ef55.js","assets/BannerSection-8f2a0e1c.js","assets/BannerSection-fc8007db.css","assets/reactRouter-8e1c8ab1.js","assets/fbStore-ed2d4d67.js","assets/fbStorage-a10cdba0.js","assets/Admin-7ef60464.css"])),sr=Oe(Te(a.jsxs(b,{path:"/",element:a.jsx(Ut,{}),children:[a.jsx(b,{index:!0,element:a.jsx(Gt,{})}),a.jsx(b,{path:"/about",element:a.jsx(Yt,{})}),a.jsx(b,{path:"/history",element:a.jsx(Kt,{})}),a.jsx(b,{path:"/team",element:a.jsx(Xt,{})}),a.jsx(b,{path:"/location",element:a.jsx(Qt,{})}),a.jsx(b,{path:"/solutions/:id",element:a.jsx(Jt,{})}),a.jsx(b,{path:"/machines/:id",element:a.jsx(ie,{})}),a.jsx(b,{path:"/devices/:id",element:a.jsx(ie,{})}),a.jsx(b,{path:"/industries/:id",element:a.jsx(er,{})}),a.jsx(b,{path:"/library",element:a.jsx(Zt,{})}),a.jsx(b,{path:"/contact",element:a.jsx(tr,{})}),a.jsx(b,{path:"/community",element:a.jsx(rr,{})}),a.jsx(b,{path:"/community/:id",element:a.jsx(nr,{})}),a.jsx(b,{path:"/community/write",element:a.jsx(ir,{})}),a.jsx(b,{path:"/community/:id/edit",element:a.jsx(ar,{})}),a.jsx(b,{path:"/admin",element:a.jsx(or,{})})]})));ae({key:"authState",default:null,dangerouslyAllowMutability:!0});const cr=ae({key:"isLoggedInState",default:!1});var ur="firebase",lr="10.7.1";/**
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
 */Ne(ur,lr,"app");const dr={apiKey:"AIzaSyDdv3MC6IfWVpSfC669xQZVNexbjFRyXho",authDomain:"opensg1-ee3ab.firebaseapp.com",projectId:"opensg1-ee3ab",storageBucket:"opensg1-ee3ab.appspot.com",messagingSenderId:"546259459574",appId:"1:546259459574:web:06d2357bad40cac2913bd7",measurementId:"G-0M43LNNLQW"},F=Le(dr),Er=Ie(F),Or=Pe(F),fr=Ce(F);var ge={exports:{}},mr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pr=mr,vr=pr;function he(){}function xe(){}xe.resetWarningCache=he;var br=function(){function t(n,i,o,c,l,d){if(d!==vr){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:xe,resetWarningCache:he};return r.PropTypes=r,r};ge.exports=br();var N=ge.exports;const Tr=B(N);function U({size:t,message:e,colors:r}){const n={display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",backgroundColor:"#000"};return a.jsx("div",{style:n,children:a.jsxs("svg",{width:t,height:t,display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",children:[a.jsx("title",{children:e}),a.jsxs("circle",{cx:"80",cy:"50",r:"5",fill:r[0],children:[a.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"80;35.00000000000001"}),a.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"50;75.98076211353316"}),a.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#0071E3;#3fa9f5"})]}),a.jsxs("circle",{cx:"35",cy:"75.981",r:"5",fill:r[1],children:[a.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"35.00000000000001;34.999999999999986"}),a.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"75.98076211353316;24.019237886466847"}),a.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#3fa9f5;#0b6399"})]}),a.jsxs("circle",{cx:"35",cy:"24.019",r:"5",fill:r[2],children:[a.jsx("animate",{attributeName:"cx",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"34.999999999999986;80"}),a.jsx("animate",{attributeName:"cy",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"24.019237886466847;49.99999999999999"}),a.jsx("animate",{attributeName:"fill",dur:"1.282051282051282s",keyTimes:"0;1",repeatCount:"indefinite",values:"#0b6399;#0071E3"})]})]})})}U.propTypes={size:N.PropTypes.number,message:N.PropTypes.string,colors:N.PropTypes.arrayOf(N.PropTypes.string)};U.defaultProps={size:300,message:"로딩 중...",colors:["#93dbe9","#689cc5","#5e6fa3"]};function yr(){const t=je(cr);return p.useEffect(()=>{const e=Re(fr,r=>{t(!!r)});return()=>e()},[t]),a.jsx(p.Suspense,{fallback:a.jsx(U,{}),children:a.jsx(Se,{router:sr})})}W.createRoot(document.getElementById("root")).render(a.jsx(we.StrictMode,{children:a.jsx(Ee,{children:a.jsx(ke,{children:a.jsx(yr,{})})})}));export{Tr as P,$t as a,fr as b,Er as d,cr as i,a as j,N as p,Or as s};
