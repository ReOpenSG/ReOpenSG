import{j as e}from"./index-5A_iWCgp.js";import{r as m}from"./react-t7nT_heO.js";import{u as p}from"./index-aNt93lqF.js";import{s as c}from"./solutionsData-uoK5eNt0.js";import{N as C,e as v}from"./reactRouter-Jh5tb--W.js";import{P as s}from"./index-Nafxz_UV.js";import{v as l}from"./v4-yQnnJER4.js";import{T}from"./TitleSection-FpABCZu4.js";import"./recoil-Y9BdFwrk.js";import"./fbAuth-Cks-JP-t.js";import"./fbApp-WBmmrZ2E.js";import"./fbStore-ITQ65Lcc.js";import"./fbStorage-DidXJKWr.js";const k="cCXg",L="shWy",E="Ztfe",I="TSdy",_="ojkS",q="_4E3M",D="wqUQ",G="_2n6y",w="WNyA",A="jnR-",M="R1G5",F="La7f",X="DYaD",B="hIm4",V="Kptr",W="BPTv",$="s6mX",z="NVIE",P="zxfX",Y="j93R",H="uGVd",K="_6T30",Z="KOm7",U="Z42t",Q="M18e",J="_7fOK",n={Lnb:k,list:L,listItem:E,link:I,activeLink:_,SolutionBanner:q,wrapper:D,title:G,nav:w,banner:A,solution:M,desc:F,Snb:X,item:B,Char:V,subTitle:W,container:$,containerTitle:z,product:P,charList:Y,charItem:H,charItemTitle:K,Func:Z,imageWrapper:U,image:Q,Effect:J};function u({LnbArray:t}){return e.jsx("nav",{className:n.Lnb,children:e.jsx("ul",{className:n.list,children:t&&t.map(r=>e.jsx("li",{className:n.listItem,children:e.jsx(C,{to:`/solutions/${r}`,className:({isActive:a})=>a?n.activeLink:n.link,children:r})},l()))})})}u.propTypes={LnbArray:s.arrayOf(s.string).isRequired};function d({currentLocation:t,prevLocation:r}){return e.jsx("section",{className:n.SolutionBanner,children:e.jsxs("div",{className:n.wrapper,children:[e.jsx("h3",{className:n.title,children:"솔루션 배너"}),e.jsxs("p",{className:n.nav,children:[r,"  >  ",t]}),e.jsxs("div",{className:n.banner,children:[e.jsx("p",{className:n.desc,children:"물류 자동화의 첫 걸음"}),e.jsxs("p",{className:n.solution,children:["Open",t,"®"]})]})]})})}d.propTypes={currentLocation:s.string.isRequired,prevLocation:s.string.isRequired};function f({currentLocation:t,data:r,refs:a}){return e.jsxs("section",{id:"Char",ref:a,className:n.Char,children:[e.jsxs("span",{className:n.subTitle,children:["Open",t]}),e.jsx("h3",{className:n.title,children:"제품 및 특징"}),e.jsxs("div",{className:n.container,children:[e.jsx("p",{className:n.containerTitle,children:"제품"}),e.jsx("p",{className:n.product,children:r&&r[t].제품설명})]}),e.jsxs("div",{className:n.container,children:[e.jsx("p",{className:n.containerTitle,children:"특징"}),e.jsx("ul",{className:n.charList,children:r&&r[t].특징.map(i=>e.jsxs("li",{className:n.charItem,children:[e.jsx("p",{className:n.charItemTitle,children:"특징 제목"}),e.jsx("p",{children:i})]},l()))})]})]})}f.propTypes={currentLocation:s.string.isRequired,data:s.objectOf(s.shape({솔루션:s.string,제품명:s.string,제품설명:s.string,특징:s.arrayOf(s.string),기능:s.arrayOf(s.string),기대효과:s.arrayOf(s.string),산업군:s.arrayOf(s.string)})).isRequired,refs:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};function h({inViewChar:t,inViewFunc:r,inViewEffect:a}){return e.jsx("aside",{className:n.Snb,children:e.jsx("nav",{className:n.nav,children:e.jsxs("ul",{className:n.list,children:[e.jsx("li",{className:t&&t?n.item:"",children:e.jsx("a",{className:n.link,href:"#Char",children:"제품 및 특징"})}),e.jsx("li",{className:!t&&r?n.item:"",children:e.jsx("a",{className:n.link,href:"#Func",children:"기능"})}),e.jsx("li",{className:!r&&a?n.item:"",children:e.jsx("a",{className:n.link,href:"#Effect",children:"기대 효과"})})]})})})}h.propTypes={inViewChar:s.bool.isRequired,inViewFunc:s.bool.isRequired,inViewEffect:s.bool.isRequired};const ss="/ReOpenSG/assets/solutions_ACS-E7Dx0H9G.png",es="/ReOpenSG/assets/solutions_OCS-quXjBnO6.png",ns="/ReOpenSG/assets/solutions_SCS-ba8XLUMz.png",ts="/ReOpenSG/assets/solutions_CCS-st8aFh0R.png",rs="/ReOpenSG/assets/solutions_IDX Controller-C_TDzXDo.png",is="/ReOpenSG/assets/solutions_Map Designer-zGfVbeoY.png",as="/ReOpenSG/assets/solutions_ACS Simulator-8nNCuaCY.png",cs="/ReOpenSG/assets/solutions_SCS Simulator-YjX82ZhM.png",ls="/ReOpenSG/assets/solutions_AIMS-8BW0Ditw.png",os="/ReOpenSG/assets/solutions_HSMS-kp3ArAkF.png",ps={ACS:ss,OCS:es,SCS:ns,CCS:ts,"IDX Controller":rs,"Map Designer":is,"ACS Simulator":as,"SCS Simulator":cs,AIMS:ls,HSMS:os};function x({currentLocation:t,data:r,refs:a}){return e.jsxs("section",{id:"Func",ref:a,className:n.Func,children:[e.jsx("h3",{className:n.title,children:"기능"}),e.jsx("div",{className:n.imageWrapper,children:e.jsx("img",{src:ps[t],className:n.image,alt:"솔루션 기능"})}),e.jsx("ul",{className:n.list,children:r&&r[t].기능.map(i=>e.jsx("li",{className:n.item,children:i},l()))})]})}x.propTypes={currentLocation:s.string.isRequired,data:s.objectOf(s.shape({솔루션:s.string,제품명:s.string,제품설명:s.string,특징:s.arrayOf(s.string),기능:s.arrayOf(s.string),기대효과:s.arrayOf(s.string),산업군:s.arrayOf(s.string)})).isRequired,refs:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};function g({currentLocation:t,data:r,refs:a}){return e.jsxs("section",{id:"Effect",ref:a,className:n.Effect,children:[e.jsx("h3",{className:n.title,children:"기대효과"}),e.jsx("ul",{className:n.list,children:r&&r[t].기대효과.map(i=>e.jsx("li",{className:n.item,children:i},l()))})]})}g.propTypes={currentLocation:s.string.isRequired,data:s.objectOf(s.shape({솔루션:s.string,제품명:s.string,제품설명:s.string,특징:s.arrayOf(s.string),기능:s.arrayOf(s.string),기대효과:s.arrayOf(s.string),산업군:s.arrayOf(s.string)})).isRequired,refs:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};function Rs(){const{id:t}=v(),[r,a]=m.useState([]),i={array:r.map(o=>o[0]),current:t,prev:c[t].솔루션},[j,S]=p({triggerOnce:!1,threshold:.3}),[N,O]=p({triggerOnce:!1,threshold:.3}),[y,b]=p({triggerOnce:!1,threshold:.3});return m.useEffect(()=>{const o=Object.entries(c).filter(R=>R[1].솔루션.trim()===c[t].솔루션.trim());a(o)},[t]),e.jsxs("div",{className:"w-full",children:[e.jsx(T,{category:"Open Solution",title:"설계부터",subTitle:"시뮬레이션까지",background:"bg-[url('@/assets/products_background.svg')]",textAlign:"text-left"}),e.jsxs("section",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[e.jsx("h2",{className:"sr-only",children:"솔루션별 페이지"}),e.jsx(u,{LnbArray:i.array}),e.jsx(d,{currentLocation:i.current,prevLocation:i.prev}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"w-full max-w-[1320px] flex desktop:gap-open-gutter-desktop tablet:gap-open-gutter-desktop",children:[e.jsx(h,{inViewChar:S,inViewFunc:O,inViewEffect:b}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{refs:j,currentLocation:i.current,data:c}),e.jsx(x,{refs:N,currentLocation:i.current,data:c}),e.jsx(g,{refs:y,currentLocation:i.current,data:c})]})]})})]})]})}export{Rs as default};
