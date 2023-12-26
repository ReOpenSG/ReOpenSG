import{P as l,j as e,Q as C}from"./index-20c80b10.js";import{r as d}from"./react-5786de35.js";import{v as g}from"./v4-4a60fe23.js";import{B as k}from"./BannerSection-ac8418c8.js";import"./recoil-d7b205b8.js";import"./reactRouter-6c0f0705.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"react-modal";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";const u={_origin:"https://api.emailjs.com"},y=(s,t="https://api.emailjs.com")=>{u._userID=s,u._origin=t},f=(s,t,n)=>{if(!s)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class h{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const j=(s,t,n={})=>new Promise((i,a)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:c})=>{const m=new h(c);m.status===200||m.text==="OK"?i(m):a(m)}),o.addEventListener("error",({target:c})=>{a(new h(c))}),o.open("POST",u._origin+s,!0),Object.keys(n).forEach(c=>{o.setRequestHeader(c,n[c])}),o.send(t)}),w=(s,t,n,i)=>{const a=i||u._userID;return f(a,s,t),j("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:a,service_id:s,template_id:t,template_params:n}),{"Content-type":"application/json"})},v=s=>{let t;if(typeof s=="string"?t=document.querySelector(s):t=s,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},T=(s,t,n,i)=>{const a=i||u._userID,o=v(n);f(a,s,t);const c=new FormData(o);return c.append("lib_version","3.11.0"),c.append("service_id",s),c.append("template_id",t),c.append("user_id",a),j("/api/v1.0/email/send-form",c)},q={init:y,send:w,sendForm:T},x={serviceId:"opensg",templateId:"opensg",apiKey:"aDu8XkJ0TqEoFFdIN"},M="kug6",S="SAFM",W="Tuop",I="fN4H",R="GShP",V="jUFO",H="pqw1",F="NhO3",Z="ojxP",_="fupe",E="Gu6u",O="HB-9",P="esoh",B="dKR8",A="HiYo",D="sdop",$="xRUY",r={formWrapper:M,wrapper:S,label:W,input:I,textarea:R,iconStyle:V,agreementText:H,agreementOl:F,warning:Z,checkboxWrapper:_,contentWrapper:E,inquiryInput:O,inquiryLabel:P,inquiryWrapper:B,personalInfoWrapper:A,regWrapper:D,message:$};function p({labelText:s,inputType:t,name:n,placeholderText:i,maxLength:a,...o}){const c=g();return e.jsxs("div",{className:r.wrapper,children:[e.jsx("label",{htmlFor:c,children:e.jsx("h3",{className:r.label,children:s})}),e.jsx("input",{type:t,id:c,name:n,placeholder:i,className:r.input,maxLength:a,required:!0,...o})]})}p.defaultProps={maxLength:""};p.propTypes={labelText:l.string.isRequired,inputType:l.string.isRequired,name:l.string.isRequired,placeholderText:l.string.isRequired,maxLength:l.string};function K(){const[s,t]=d.useState(""),[n,i]=d.useState(""),a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.jsxs("fieldset",{className:r.personalInfoWrapper,children:[e.jsx("div",{className:r.regWrapper,children:e.jsx(p,{labelText:"소속",inputType:"text",name:"office",placeholderText:"회사 또는 부서를 입력해 주세요."})}),e.jsx("div",{className:r.regWrapper,children:e.jsx(p,{labelText:"성명",inputType:"text",name:"name",placeholderText:"성함을 입력해 주세요."})}),e.jsxs("div",{className:r.regWrapper,children:[e.jsx(p,{labelText:"받으실 이메일",inputType:"email",name:"email",placeholderText:"이메일을 입력해 주세요.",onChange:o=>{t(o.target.value)}}),a.test(s)||s===""?"":e.jsx("span",{className:r.message,children:"유효한 이메일을 입력해 주세요."})]}),e.jsx("div",{className:r.regWrapper,children:e.jsx(p,{labelText:"받으실 연락처",inputType:"tel",name:"tel",placeholderText:"'-' 없이 입력해 주세요.",maxLength:"13",value:n,onChange:o=>{i(o.target.value.replace(/[^0-9]/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3").replace(/(\-{1,2})$/g,""))}})})]})}function G(){return e.jsxs("svg",{viewBox:"0 0 134 113",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r.iconStyle,children:[e.jsx("path",{d:"M42.3622 86.305C41.8622 82.715 41.6022 78.415 45.7822 76.185C46.9822 75.545 48.3422 75.255 49.6922 75.175C55.7322 74.805 61.9622 76.705 67.8522 75.205C71.3022 74.325 74.3422 72.335 77.5822 70.885C85.6422 67.275 94.7722 67.015 103.592 67.285V100.235C96.2222 98.555 88.5722 100.745 81.4822 103.315C74.3922 105.885 67.2122 108.885 59.6722 108.875C49.7522 108.845 40.6922 103.635 32.1622 98.575L7.11222 83.715C6.05222 83.085 5.07222 82.315 4.32222 81.335C0.78222 76.725 5.04222 72.905 8.98222 72.785C11.8222 72.695 14.4922 73.995 17.0522 75.235C25.3322 79.245 33.7722 82.795 42.2822 86.265C44.7922 87.295 47.4822 87.815 50.2022 87.815H71.6622C71.6622 87.815 76.2222 87.815 76.2222 93.295",strokeWidth:6,strokeMiterlimit:10,strokeLinecap:"round",className:"stroke-current"}),e.jsx("path",{d:"M128.993 54.9336H105.603C104.498 54.9336 103.603 55.829 103.603 56.9336V107.714C103.603 108.818 104.498 109.714 105.603 109.714H128.993C130.097 109.714 130.993 108.818 130.993 107.714V56.9336C130.993 55.829 130.097 54.9336 128.993 54.9336Z",strokeWidth:6,strokeMiterlimit:10,strokeLinecap:"round",className:"stroke-current"}),e.jsx("path",{d:"M59.7319 35.62L53.5919 32.07C53.6719 31.39 53.7119 30.7 53.7119 30C53.7119 29.3 53.6719 28.61 53.5919 27.93L59.7319 24.38C61.1519 23.56 61.6319 21.75 60.8119 20.34L56.3719 12.65C55.5519 11.23 53.7419 10.75 52.3319 11.57L46.1919 15.12C45.0819 14.3 43.8819 13.61 42.6119 13.05V5.96C42.6119 4.33 41.2919 3 39.6519 3H30.7719C29.1419 3 27.8119 4.32 27.8119 5.96V13.05C26.5319 13.61 25.3319 14.3 24.2319 15.12L18.0919 11.57C16.6719 10.75 14.8719 11.24 14.0519 12.65L9.61194 20.34C8.79194 21.76 9.28194 23.56 10.6919 24.38L16.8319 27.93C16.7519 28.61 16.7119 29.3 16.7119 30C16.7119 30.7 16.7519 31.39 16.8319 32.07L10.6919 35.62C9.27194 36.44 8.79194 38.25 9.61194 39.66L14.0519 47.35C14.8719 48.77 16.6819 49.25 18.0919 48.43L24.2319 44.88C25.3419 45.7 26.5419 46.39 27.8119 46.95V54.04C27.8119 55.67 29.1319 57 30.7719 57H39.6519C41.2819 57 42.6119 55.68 42.6119 54.04V46.95C43.8919 46.39 45.0919 45.7 46.1919 44.88L52.3319 48.43C53.7519 49.25 55.5519 48.76 56.3719 47.35L60.8119 39.66C61.6319 38.24 61.1419 36.44 59.7319 35.62ZM35.2119 39.26C30.1019 39.26 25.9619 35.12 25.9619 30.01C25.9619 24.9 30.1019 20.76 35.2119 20.76C40.3219 20.76 44.4619 24.9 44.4619 30.01C44.4619 35.12 40.3219 39.26 35.2119 39.26Z",strokeWidth:6,strokeMiterlimit:10,className:"stroke-current"})]})}function J(){return e.jsxs("svg",{viewBox:"0 0 134 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r.iconStyle,children:[e.jsx("path",{d:"M42.3622 87.9065C41.8622 84.3165 41.6022 80.0165 45.7822 77.7865C46.9822 77.1465 48.3422 76.8565 49.6922 76.7765C55.7322 76.4065 61.9622 78.3065 67.8522 76.8065C71.3022 75.9265 74.3422 73.9365 77.5822 72.4865C85.6422 68.8765 94.7722 68.6165 103.592 68.8865V101.837C96.2222 100.157 88.5722 102.347 81.4822 104.917C74.3922 107.487 67.2122 110.487 59.6722 110.477C49.7522 110.447 40.6922 105.237 32.1622 100.177L7.11222 85.3165C6.05222 84.6865 5.07222 83.9165 4.32222 82.9365C0.78222 78.3265 5.04222 74.5065 8.98222 74.3865C11.8222 74.2965 14.4922 75.5965 17.0522 76.8365C25.3322 80.8465 33.7722 84.3965 42.2822 87.8665C44.7922 88.8965 47.4822 89.4165 50.2022 89.4165H71.6622C71.6622 89.4165 76.2222 89.4165 76.2222 94.8965",strokeWidth:6,strokeMiterlimit:10,strokeLinecap:"round",className:"stroke-current"}),e.jsx("path",{d:"M128.993 56.5352H105.603C104.498 56.5352 103.603 57.4306 103.603 58.5352V109.315C103.603 110.42 104.498 111.315 105.603 111.315H128.993C130.097 111.315 130.993 110.42 130.993 109.315V58.5352C130.993 57.4306 130.097 56.5352 128.993 56.5352Z",strokeWidth:6,strokeMiterlimit:10,strokeLinecap:"round",className:"stroke-current"}),e.jsx("path",{d:"M34.4818 26.8338L5.30181 14.8938C4.13181 14.4138 4.20181 12.7338 5.40181 12.3538L34.5818 3.06381C34.8518 2.98381 35.1318 2.97381 35.4018 3.06381L65.0218 12.3438C66.2318 12.7238 66.3018 14.4138 65.1218 14.8938L35.5018 26.8338C35.1718 26.9638 34.8118 26.9638 34.4818 26.8338Z",strokeWidth:6,strokeMiterlimit:10,className:"stroke-current"}),e.jsx("path",{d:"M5.30176 14.8945V47.2845C5.30176 48.3745 5.95176 49.3645 6.95176 49.8045L30.1018 59.8945C31.8918 60.6745 33.9118 59.3845 33.9418 57.4245M33.9418 57.4245L34.4818 26.8345M33.9418 57.4245C33.9118 59.3845 35.8818 60.7445 37.7018 60.0245L63.3918 49.8345C64.4418 49.4245 65.1218 48.4045 65.1218 47.2845V14.9045",strokeWidth:6,strokeMiterlimit:10,className:"stroke-current"})]})}function z(){return e.jsx("svg",{viewBox:"0 0 148 148",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r.iconStyle,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M136.651 32.2364L129.436 30.5344L109.937 49.9224L98.8921 38.6744L117.91 18.7222L116.245 11.3962C112.226 10.0517 108.023 9.3402 103.785 9.28718C99.1628 9.2161 94.5751 10.0977 90.3081 11.8772C86.1882 13.7421 82.4641 16.3797 79.3376 19.6472C75.8573 22.944 73.101 26.9289 71.2439 31.3484C67.6683 40.1441 67.6683 49.9883 71.2439 58.7839C51.9598 77.7556 32.9248 96.9788 14.1436 116.448C12.2011 118.992 11.2761 122.165 11.5166 125.356C11.7062 128.789 13.2498 132.005 15.8086 134.301C16.9556 135.55 18.3246 136.586 19.8509 137.335C21.4234 138.029 23.1161 138.426 24.8274 138.51C27.7504 138.454 30.5531 137.344 32.7269 135.392C47.0459 121.915 74.4814 94.2299 90.0676 78.0054C94.2949 79.7999 98.8366 80.7249 103.425 80.7157C108.043 80.712 112.614 79.7827 116.867 77.9827C121.12 76.1826 124.969 73.5483 128.187 70.2354C134.796 63.4946 138.488 54.4235 138.464 44.9829C138.571 40.6629 137.958 36.3553 136.651 32.2364ZM27.1306 128.834C26.7746 129.15 26.3454 129.373 25.8819 129.482C25.4258 129.561 24.9597 129.561 24.5036 129.482C24.0255 129.409 23.5701 129.229 23.1716 128.954C22.7441 128.704 22.3825 128.355 22.1171 127.937C20.8221 126.614 19.6104 124.098 20.8221 122.683C33.4946 109.206 59.5889 82.8617 75.9059 66.7574C76.8309 67.9784 77.8484 69.1439 78.9399 70.2354C80.0314 71.3732 81.2061 72.4277 82.4549 73.3897C66.6744 89.5772 40.9316 115.607 27.1306 128.834ZM129.972 44.9829C129.991 52.0592 127.234 58.8579 122.276 63.9269C117.329 68.7803 110.674 71.4992 103.744 71.4992C96.8131 71.4992 90.159 68.7803 85.2114 63.9269C81.5852 60.1427 79.1082 55.4067 78.0683 50.2697C77.0285 45.1328 77.4687 39.8062 79.3376 34.9097C80.5817 31.5772 82.5113 28.543 85.0018 26.0031C87.4922 23.4633 90.488 21.4744 93.7954 20.1652C96.9357 18.8508 100.307 18.1778 103.711 18.1857H106.061L89.2536 35.5109V41.9489L106.782 59.3944H112.887L129.972 42.5964V44.9829ZM29.9704 61.8642H44.1321L50.6534 68.4964L56.9249 62.2619L50.7736 55.9904V55.5927L51.3009 40.3394L49.2659 36.2972L22.8109 18.8887L17.3441 19.4992L9.65738 27.3524L9.04688 32.8932L26.0484 59.8847L29.9704 61.8642ZM21.2291 28.2682L42.6336 42.3652L42.2729 52.7529H32.3199L18.5189 30.9044L21.2291 28.2682ZM86.9504 92.6482L93.1849 86.4229L121.915 115.884C124.335 118.428 125.685 121.804 125.685 125.315C125.685 128.825 124.335 132.202 121.915 134.745C120.096 136.613 117.756 137.89 115.2 138.41C112.645 138.929 109.992 138.668 107.587 137.659C106.052 136.978 104.676 135.986 103.545 134.745L74.4814 105.117L80.7621 98.8457L109.733 128.39C110.123 128.82 110.607 129.152 111.148 129.361C112.213 129.794 113.404 129.794 114.469 129.361C115.01 129.152 115.495 128.82 115.884 128.39C116.289 127.989 116.605 127.507 116.809 126.975C117.022 126.432 117.134 125.856 117.142 125.273C117.133 124.691 117.024 124.115 116.819 123.571C116.614 123.039 116.298 122.557 115.894 122.156L86.9504 92.6482Z",className:"fill-current"})})}function U(){return e.jsxs("svg",{viewBox:"0 0 134 134",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r.iconStyle,children:[e.jsx("path",{d:"M67 131C102.346 131 131 102.346 131 67C131 31.6538 102.346 3 67 3C31.6538 3 3 31.6538 3 67C3 102.346 31.6538 131 67 131Z",strokeWidth:6,strokeMiterlimit:10,className:"stroke-current"}),e.jsx("path",{d:"M32 76C36.9706 76 41 71.9706 41 67C41 62.0294 36.9706 58 32 58C27.0294 58 23 62.0294 23 67C23 71.9706 27.0294 76 32 76Z",className:"fill-current"}),e.jsx("path",{d:"M67 76C71.9706 76 76 71.9706 76 67C76 62.0294 71.9706 58 67 58C62.0294 58 58 62.0294 58 67C58 71.9706 62.0294 76 67 76Z",className:"fill-current"}),e.jsx("path",{d:"M102 76C106.971 76 111 71.9706 111 67C111 62.0294 106.971 58 102 58C97.0294 58 93 62.0294 93 67C93 71.9706 97.0294 76 102 76Z",className:"fill-current"})]})}function L({type:s,id:t,name:n,defaultValue:i,labelText:a}){return e.jsxs("div",{className:"focus-within:ring-2 focus-within:ring-[#3B82F6] rounded-[20px]",children:[e.jsx("input",{type:s,id:t,name:n,defaultValue:i,className:r.inquiryInput}),e.jsxs("label",{htmlFor:t,className:r.inquiryLabel,children:[a==="제품 문의"?e.jsx(G,{}):a==="구매 문의"?e.jsx(J,{}):a==="AS 문의"?e.jsx(z,{}):e.jsx(U,{}),e.jsx("span",{children:a})]})]})}L.propTypes={type:l.string.isRequired,id:l.string.isRequired,name:l.string.isRequired,defaultValue:l.string.isRequired,labelText:l.string.isRequired};const X=[{id:"productId",defaultValue:"제품 문의"},{id:"purchaseId",defaultValue:"구매 문의"},{id:"asId",defaultValue:"AS 문의"},{id:"etcId",defaultValue:"기타 문의"}];function Y(){const[s,t]=d.useState(!1),n=()=>{t(!0)};return e.jsxs("fieldset",{className:r.inquiryWrapper,children:[e.jsx("h3",{className:r.label,children:"문의유형"}),e.jsx("div",{children:X.map(({id:i,defaultValue:a})=>e.jsx(L,{type:"radio",id:i,name:"type",defaultValue:a,labelText:a,onClick:n,checked:s},i))})]})}function Q(){const s=g();return e.jsxs("fieldset",{className:r.contentWrapper,children:[e.jsx(p,{labelText:"제목",inputType:"text",name:"title",placeholderText:"제목을 입력해 주세요."}),e.jsxs("div",{className:r.wrapper,children:[e.jsx("label",{htmlFor:s,children:e.jsx("h3",{className:r.label,children:"내용"})}),e.jsx("textarea",{name:"message",id:s,cols:"30",rows:"10",placeholder:"내용을 입력해 주세요.",className:r.textarea,required:!0})]})]})}function N({state:s,setState:t}){const n=()=>{t(!s)};return e.jsxs("fieldset",{className:r.agreementText,children:[e.jsx("h3",{children:"개인정보 활용동의"}),e.jsx("p",{children:"OpenSG는 개인정보보호법 및 관련 법령에 의거 고객님들의 의견 접수와 관련한 성실한 답변을 드리기 위해 필요한 최소한의 개인정보를 아래와 같이 수집, 이용하고자 합니다."}),e.jsxs("ol",{className:r.agreementOl,children:[e.jsx("li",{children:"필수정보의 수집 목적 : 온라인 상담실을 통한 정보주체의 의견접수 및 문의에 대한 답변/안내"}),e.jsx("li",{children:"필수 수집 항목 : 이름, 이메일 주소"}),e.jsx("li",{children:"보유 및 이용기간 : 상담 신청 후 1년"}),e.jsx("li",{className:r.warning,children:"※ 고객님께서는 본 동의를 거부하실 수 있으나 거부 시 필수정보의 수집 목적에 해당하는 사항의 처리가 제한될 수 있습니다."})]}),e.jsxs("div",{className:r.checkboxWrapper,children:[e.jsx("input",{type:"checkbox",id:"agreement",required:!0,checked:s,onChange:n,className:"peer"}),e.jsx("label",{htmlFor:"agreement",className:"pl-open-lg",children:"(필수) 위 개인정보 수집 및 이용에 동의합니다."})]})]})}N.propTypes={state:l.bool.isRequired,setState:l.func.isRequired};function b({type:s,buttonText:t,buttonStyle:n,onClick:i}){return e.jsx("button",{type:s,className:n,onClick:i,children:t})}b.propTypes={type:l.oneOf(["submit","button","reset"]).isRequired,buttonText:l.string.isRequired,buttonStyle:l.string.isRequired,onClick:l.func.isRequired};function d1(){const s=d.useRef(null),[t,n]=d.useState(!1),i=o=>{o.preventDefault(),q.sendForm(x.serviceId,x.templateId,s.current,x.apiKey).then(()=>{C.success("전송되었습니다."),setTimeout(()=>{window.location.reload()},4e3)},()=>{C.error("전송에 실패하였습니다.")})},a=()=>{t||C.error("개인정보 활용동의에 체크해 주세요.")};return e.jsx("div",{className:"w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop",children:e.jsxs("form",{ref:s,onSubmit:i,className:r.formWrapper,children:[e.jsx(k,{category:"Support",title:"고객문의"}),e.jsx(Y,{}),e.jsx(K,{}),e.jsx(Q,{}),e.jsx(N,{state:t,setState:n}),e.jsx(b,{buttonText:"문의하기",buttonStyle:"-text--openfoundation-secondary font-open-label text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl p-open-lg rounded-[20px] -bg--open-accent-accent w-[180px] block mx-auto mb-open-5xl",type:`${t?"submit":"button"}`,onClick:a})]})})}export{d1 as default};
