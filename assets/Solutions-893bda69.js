import{P as e,j as s}from"./index-d89330b0.js";import{r as l}from"./react-769d75c9.js";import{u as d}from"./index-01931935.js";import{s as o}from"./solutionsData-ad413994.js";import{N as C,e as v}from"./reactRouter-6d34f4b4.js";import{v as u}from"./v4-4a60fe23.js";import{T as k}from"./TitleSection-2d37f84d.js";import"./recoil-709b3ce0.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";const q="_7bTB",E="gwcR",L="_8qOn",_="fSwm",I="wWUB",w="jsyV",A="j2bv",D="Nf7Y",G="EjTJ",M="KJMO",F="mjro",B="hM-d",V="_5QjQ",Q="_4Nnr",$="RQXS",H="pkud",W="_3bEM",J="N7JD",X="oV2k",P="JOQL",U="zFY5",Y="Qjgu",z="_0cWQ",K="_531x",Z="yeyU",ee="a3Bx",n={Lnb:q,list:E,listItem:L,link:_,activeLink:I,SolutionBanner:w,wrapper:A,title:D,nav:G,banner:M,solution:F,desc:B,Snb:V,item:Q,Char:$,subTitle:H,container:W,containerTitle:J,product:X,charList:P,charItem:U,charItemTitle:Y,Func:z,imageWrapper:K,image:Z,Effect:ee};function h({LnbArray:t}){return s.jsx("nav",{className:n.Lnb,children:s.jsx("ul",{className:n.list,children:t&&t.map(i=>s.jsx("li",{className:n.listItem,children:s.jsx(C,{to:`/solutions/${i}`,className:({isActive:a})=>a?n.activeLink:n.link,children:i})},u()))})})}h.propTypes={LnbArray:e.arrayOf(e.string).isRequired};function g({currentLocation:t,prevLocation:i}){return s.jsx("section",{className:n.SolutionBanner,children:s.jsxs("div",{className:n.wrapper,children:[s.jsxs("p",{className:n.nav,children:[i,"  >  ",t]}),s.jsxs("div",{className:n.banner,children:[s.jsx("p",{className:n.desc,children:"물류 자동화의 첫 걸음"}),s.jsxs("h3",{className:n.solution,children:["Open",t,"®"]})]})]})})}g.propTypes={currentLocation:e.string.isRequired,prevLocation:e.string.isRequired};function x({currentLocation:t,data:i,headingRef:a,sectionRef:r}){return s.jsxs("section",{id:"Char",ref:r,className:n.Char,children:[s.jsxs("span",{className:n.subTitle,children:["Open",t]}),s.jsx("h4",{ref:a,className:n.title,children:"제품 및 특징"}),s.jsxs("div",{className:n.container,children:[s.jsx("p",{className:n.containerTitle,children:"제품"}),s.jsx("p",{className:n.product,children:i&&i[t].제품설명})]}),s.jsxs("div",{className:n.container,children:[s.jsx("p",{className:n.containerTitle,children:"특징"}),s.jsx("ul",{className:n.charList,children:i&&i[t].특징.map(c=>s.jsxs("li",{className:n.charItem,children:[s.jsx("p",{className:n.charItemTitle,children:"특징 제목"}),s.jsx("p",{children:c})]},u()))})]})]})}x.propTypes={currentLocation:e.string.isRequired,data:e.objectOf(e.shape({솔루션:e.string,제품명:e.string,제품설명:e.string,특징:e.arrayOf(e.string),기능:e.arrayOf(e.string),기대효과:e.arrayOf(e.string),산업군:e.arrayOf(e.string)})).isRequired,headingRef:e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})]).isRequired,sectionRef:e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})]).isRequired};function S({inViewChar:t,inViewFunc:i,inViewEffect:a,refs:r}){function c(p){var f;(f=p.current)==null||f.scrollIntoView({behavior:"smooth",block:"start"})}return s.jsx("aside",{className:n.Snb,children:s.jsx("nav",{className:n.nav,children:s.jsxs("ul",{className:n.list,children:[s.jsx("li",{className:t&&t?n.item:"",children:s.jsx("button",{type:"button",className:n.link,onClick:()=>c(r.charSectionRef),children:"제품 및 특징"})}),s.jsx("li",{className:!t&&i?n.item:"",children:s.jsx("button",{type:"button",className:n.link,onClick:()=>c(r.funcSectionRef),children:"기능"})}),s.jsx("li",{className:!i&&a?n.item:"",children:s.jsx("button",{type:"button",className:n.link,onClick:()=>c(r.effectSectionRef),children:"기대 효과"})})]})})})}S.propTypes={inViewChar:e.bool.isRequired,inViewFunc:e.bool.isRequired,inViewEffect:e.bool.isRequired,refs:e.objectOf(e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})])).isRequired};const se="/ReOpenSG/assets/solutions_ACS-74ae4507.png",ne="/ReOpenSG/assets/solutions_OCS-6bb71dfa.png",te="/ReOpenSG/assets/solutions_SCS-1b91de23.png",ie="/ReOpenSG/assets/solutions_CCS-e1e50476.png",re="/ReOpenSG/assets/solutions_IDX Controller-117c3bbf.png",ce="/ReOpenSG/assets/solutions_Map Designer-61f94145.png",ae="/ReOpenSG/assets/solutions_ACS Simulator-0c3cfecc.png",oe="/ReOpenSG/assets/solutions_SCS Simulator-e94aa86e.png",le="/ReOpenSG/assets/solutions_AIMS-8ca4db69.png",fe="/ReOpenSG/assets/solutions_HSMS-2a58695f.png",ue={ACS:se,OCS:ne,SCS:te,CCS:ie,"IDX Controller":re,"Map Designer":ce,"ACS Simulator":ae,"SCS Simulator":oe,AIMS:le,HSMS:fe};function j({currentLocation:t,data:i,headingRef:a,sectionRef:r}){return s.jsxs("section",{id:"Func",ref:r,className:n.Func,children:[s.jsx("h4",{ref:a,className:n.title,children:"기능"}),s.jsx("div",{className:n.imageWrapper,children:s.jsx("img",{src:ue[t],className:n.image,alt:"솔루션 기능"})}),s.jsx("ul",{className:n.list,children:i&&i[t].기능.map(c=>s.jsx("li",{className:n.item,children:c},u()))})]})}j.propTypes={currentLocation:e.string.isRequired,data:e.objectOf(e.shape({솔루션:e.string,제품명:e.string,제품설명:e.string,특징:e.arrayOf(e.string),기능:e.arrayOf(e.string),기대효과:e.arrayOf(e.string),산업군:e.arrayOf(e.string)})).isRequired,headingRef:e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})]).isRequired,sectionRef:e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})]).isRequired};function R({currentLocation:t,data:i,headingRef:a,sectionRef:r}){return s.jsxs("section",{id:"Effect",ref:r,className:n.Effect,children:[s.jsx("h4",{ref:a,className:n.title,children:"기대효과"}),s.jsx("ul",{className:n.list,children:i&&i[t].기대효과.map(c=>s.jsx("li",{className:n.item,children:c},u()))})]})}R.propTypes={currentLocation:e.string.isRequired,data:e.objectOf(e.shape({솔루션:e.string,제품명:e.string,제품설명:e.string,특징:e.arrayOf(e.string),기능:e.arrayOf(e.string),기대효과:e.arrayOf(e.string),산업군:e.arrayOf(e.string)})).isRequired,headingRef:e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})]).isRequired,sectionRef:e.oneOfType([e.func,e.shape({current:e.instanceOf(Element)})]).isRequired};function ye(){const{id:t}=v(),[i,a]=l.useState([]),r={array:i.map(m=>m[0]),current:t,prev:o[t].솔루션},c={charSectionRef:l.useRef(null),funcSectionRef:l.useRef(null),effectSectionRef:l.useRef(null)},[p,f]=d({triggerOnce:!1,threshold:.3}),[O,N]=d({triggerOnce:!1,threshold:.3}),[b,y]=d({triggerOnce:!1,threshold:.3});return l.useEffect(()=>{const m=Object.entries(o).filter(T=>T[1].솔루션.trim()===o[t].솔루션.trim());a(m)},[t]),s.jsxs("div",{className:"w-full",children:[s.jsx(k,{category:"Open Solution",title:"설계부터",subTitle:"시뮬레이션까지",background:"bg-[url('@/assets/products_background.png')]",textAlign:"text-left"}),s.jsxs("section",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[s.jsx(h,{LnbArray:r.array}),s.jsx(g,{currentLocation:r.current,prevLocation:r.prev}),s.jsx("div",{className:"flex justify-center",children:s.jsxs("div",{className:"w-full max-w-[1320px] flex desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop",children:[s.jsx(S,{inViewChar:f,inViewFunc:N,inViewEffect:y,refs:{charSectionRef:c.charSectionRef,funcSectionRef:c.funcSectionRef,effectSectionRef:c.effectSectionRef}}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx(x,{headingRef:p,currentLocation:r.current,data:o,sectionRef:c.charSectionRef}),s.jsx(j,{headingRef:O,currentLocation:r.current,data:o,sectionRef:c.funcSectionRef}),s.jsx(R,{headingRef:b,currentLocation:r.current,data:o,sectionRef:c.effectSectionRef})]})]})})]})]})}export{ye as default};
