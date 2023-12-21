import{P as s,j as e}from"./index-41738e6f.js";import{b as j,r as i}from"./react-769d75c9.js";import{u as h}from"./index-01931935.js";import{L as N,e as O}from"./reactRouter-6d34f4b4.js";import P from"aos";import{s as S}from"./aos-a2726f8a.js";import{v as y}from"./v4-4a60fe23.js";import{T}from"./TitleSection-cf762ace.js";import"./recoil-709b3ce0.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";const D="malT",k="a353",E="sr71",_="mxc5",v="i-fA",L="VHgq",w="hJTC",A="bk3h",q="h4op",G="zbiu",I="Lxf1",M="cYvD",W="tdNo",H="_5KqG",V="NgJ5",$="_8YwD",X="Dt8E",t={Char:D,CharTitle:k,CharDesc:E,Product:_,ProductTitle:v,ProductWrapper:L,ProductLink:w,linkWrapper:A,image:q,list:G,itemName:I,itemSubName:M,itemDesc:W,Snb:H,nav:V,item:$,link:X};function x({industryDesc:n,headingRef:r,sectionRef:o}){return e.jsxs("section",{ref:r,id:"Char",className:t.Char,children:[e.jsx("h4",{ref:o,className:t.CharTitle,children:"산업 특징"}),e.jsx("p",{className:t.CharDesc,children:n})]})}x.propTypes={industryDesc:s.string.isRequired,headingRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired,sectionRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};const Y="/ReOpenSG/assets/products_ACS-87f24eed.png",z="/ReOpenSG/assets/products_OCS-f299d8d9.png",J="/ReOpenSG/assets/products_SCS-9e78211f.png",B="/ReOpenSG/assets/products_CCS-4ae79834.png",K="/ReOpenSG/assets/products_IDX Controller-c418ff14.png",Q="/ReOpenSG/assets/products_Map Designer-1a4c01da.png",F="/ReOpenSG/assets/products_ACS Simulator-e8dfaa5f.png",U="/ReOpenSG/assets/products_SCS Simulator-bce5ddea.png",Z="/ReOpenSG/assets/products_AIMS-64c5410a.png",ee="/ReOpenSG/assets/products_HSMS-80a672ab.png",se={ACS:Y,OCS:z,SCS:J,CCS:B,"IDX Controller":K,"Map Designer":Q,"ACS Simulator":F,"SCS Simulator":U,AIMS:Z,HSMS:ee};function g({industryProducts:n,headingRef:r,sectionRef:o}){return i.useEffect(()=>{P.init()},[]),e.jsxs("section",{ref:r,id:"Product",className:t.Product,children:[e.jsx("h4",{ref:o,className:t.ProductTitle,children:"관련 제품"}),e.jsx("div",{className:t.ProductWrapper,children:Object.entries(n).map(c=>e.jsx(N,{to:`/solutions/${c[0]}`,className:t.ProductLink,children:e.jsxs("div",{className:t.linkWrapper,"data-aos":"fade-up","data-aos-duration":"1500","data-aos-anchor-placement":"top-bottom",children:[e.jsx("div",{className:t.image,children:e.jsx("img",{src:se[c[0]],alt:"제픔 사진"})}),e.jsxs("dl",{className:t.list,children:[e.jsxs("dt",{className:t.itemName,children:["Open ",c[0]]}),e.jsx("dt",{className:t.itemSubName,children:c[1].제품명}),e.jsx("dd",{className:t.itemDesc,children:c[1].제품설명})]})]})},y()))})]})}g.propTypes={industryProducts:s.oneOfType([s.object]).isRequired,headingRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired,sectionRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};const te=j.memo(g);function R({inViewChar:n,inViewProduct:r,refs:o}){function c(p){const l=p.current;if(l){const u=l.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:u-80,behavior:"smooth"})}}return e.jsx("aside",{className:t.Snb,children:e.jsx("nav",{className:t.nav,children:e.jsxs("ul",{className:t.list,children:[e.jsx("li",{className:n?t.item:"",children:e.jsx("button",{type:"button",className:t.link,onClick:()=>c(o.charSectionRef),children:"산업 특징"})}),e.jsx("li",{className:!n&&r?t.item:"",children:e.jsx("button",{type:"button",className:t.link,onClick:()=>c(o.productSectionRef),children:"관련 제품"})})]})})})}R.propTypes={inViewChar:s.bool.isRequired,inViewProduct:s.bool.isRequired,refs:s.objectOf(s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})])).isRequired};const a={semiconductor:{name:"반도체",desc:"기술과 지식이 집약된 첨단 하이테크 산업인 반도체/태양광은 제품의 고사양화에 따라 공정 난이도가 높아지면서 사람의 판단이나 숙련도를 배제한 자동화된 시스템에 의한 제조환경 운영이 보편화되고 있습니다. 복잡한 공정/설비, 데이터양의 폭발적 증가로 자동화 및 시스템에 의한 공정관리가 필수임에 따라 많은 기업에서 제조설비, 측정/검사설비 및 물류설비에 대한 자동화 제어 기술과 빅데이터 기반 AI 기술을 적용한 품질관리 및 설비 엔지니어링 시스템으로 제조 경쟁력 향상을 추진하고 있습니다.",solutions:[]},display:{name:"디스플레이",desc:"디스플레이는 LCD, OLED, QLED, LED, PDP 등 다양한 기술로 제조되며, 특히 OLED는 고가의 제품으로써 제조 공정의 안정성과 품질관리가 매우 중요합니다. 디스플레이 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.",solutions:[]},battery:{name:"배터리",desc:"배터리 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다.",solutions:[]},port:{name:"항만",desc:"항만은 물류센터와 함께 물류산업의 중심이 되는 산업입니다. 항만에서는 고객사의 요구에 맞는 자동화 설비를 구축하여 물류센터의 생산성을 향상시키고 있습니다.",solutions:[]}};Object.entries(S).forEach(([n,{산업군:r}])=>{r.forEach(o=>{a[o]&&a[o].solutions.push(n)})});function Se(){const{id:n}=O(),[r,o]=i.useState(""),[c,p]=i.useState({}),[m,l]=h({triggerOnce:!1,threshold:.1}),[u,C]=h({triggerOnce:!1,threshold:.1}),d={charSectionRef:i.useRef(null),productSectionRef:i.useRef(null)};return i.useEffect(()=>{o(a[n].desc),a[n].solutions.map(f=>p(b=>({...b,[f]:S[f]})))},[n]),e.jsxs("div",{className:"w-full",children:[e.jsx(T,{category:"Industries",title:a[n].name==="배터리"?"2차 전지":a[n].name,subTitle:n,background:"bg-[url('@/assets/products_background.png')]",textAlign:"text-left"}),e.jsxs("section",{className:"flex flex-col items-center desktop:pb-open-5xl tablet:pb-open-5xl pb-open-2xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-margin-mobile",children:[e.jsx("h3",{className:"sr-only",children:a[n].name}),e.jsxs("div",{className:"flex max-w-[1320px] desktop:gap-open-4xl tablet:gap-open-4xl",children:[e.jsx(R,{inViewChar:l,alThing:!0,inViewProduct:C,refs:{charSectionRef:d.charSectionRef,productSectionRef:d.productSectionRef}}),e.jsxs("div",{className:"flex-1",children:[e.jsx(x,{headingRef:m,sectionRef:d.charSectionRef,currentLocation:n,industryDesc:r}),e.jsx(te,{headingRef:u,sectionRef:d.productSectionRef,currentLocation:n,industryProducts:c})]})]})]})]})}export{Se as default};