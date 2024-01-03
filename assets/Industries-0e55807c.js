import{P as s,j as e}from"./index-cbdadc85.js";import{b as N,r as a}from"./react-3321cb07.js";import{u as h}from"./index-48279a2a.js";import{s as t}from"./styles.module-9ce859ce.js";import{L as D,e as T}from"./reactRouter-dd40e030.js";import{v as E}from"./v4-4a60fe23.js";import{s as S}from"./solutionsData-27e867ae.js";import{T as P}from"./TitleSection-1bb914de.js";import"./recoil-6524b0a4.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";import"./animations-1dde62f3.js";function R({industryDesc:n,headingRef:r,sectionRef:o}){return e.jsxs("section",{ref:r,id:"Char",className:t.char,children:[e.jsx("h3",{ref:o,className:t.charTitle,children:"산업 특징"}),e.jsx("p",{className:t.charDesc,children:n})]})}R.propTypes={industryDesc:s.string.isRequired,headingRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired,sectionRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};const I="/ReOpenSG/assets/products_ACS-bf9ab208.png",_="/ReOpenSG/assets/products_OCS-97a9066c.png",v="/ReOpenSG/assets/products_SCS-c169e035.png",L="/ReOpenSG/assets/products_CCS-e7fed9c7.png",A="/ReOpenSG/assets/products_IDX Controller-66b50c67.png",G="/ReOpenSG/assets/products_Map Designer-8740ffc0.png",q="/ReOpenSG/assets/products_ACS Simulator-161b9cd1.png",w="/ReOpenSG/assets/products_SCS Simulator-12b56744.png",M="/ReOpenSG/assets/products_AIMS-504bf931.png",k="/ReOpenSG/assets/products_HSMS-be2506cb.png",H={ACS:I,OCS:_,SCS:v,CCS:L,"IDX Controller":A,"Map Designer":G,"ACS Simulator":q,"SCS Simulator":w,AIMS:M,HSMS:k};function g({industryProducts:n,headingRef:r,sectionRef:o}){const d=Object.entries(n);return e.jsxs("section",{ref:r,id:"Product",className:t.product,children:[e.jsx("h3",{ref:o,className:t.productTitle,children:"관련 제품"}),e.jsx("div",{className:t.productContainer,children:d.map(([c,i])=>e.jsx(D,{to:`/solutions/${c}`,className:t.productLink,"data-aos":"fade-up","data-aos-duration":"1500",children:e.jsxs("div",{className:t.linkContainer,children:[e.jsx("div",{className:t.image,children:e.jsx("img",{src:H[c],alt:"제품 사진"})}),e.jsxs("dl",{className:t.list,children:[e.jsx("dt",{className:t.itemName,children:e.jsxs("span",{children:["Open ",c]})}),e.jsx("dt",{className:t.itemDetailName,children:e.jsx("span",{children:i.제품명})}),e.jsx("dd",{className:t.itemDesc,children:i.제품설명})]})]})},E()))})]})}g.propTypes={industryProducts:s.object.isRequired,headingRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired,sectionRef:s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})]).isRequired};const V=N.memo(g),K=[{name:"산업 특징",refKey:"charSectionRef"},{name:"관련 제품",refKey:"productSectionRef"}];function j({inViewChar:n,inViewProduct:r,refs:o}){function d(c){if(c.current){const l=c.current.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:l-120,behavior:"smooth"})}}return e.jsx("aside",{className:t.snb,children:e.jsx("nav",{className:t.nav,children:e.jsx("ul",{className:t.sectionList,children:K.map((c,i)=>e.jsx("li",{className:i===0&&n||i!==0&&!n&&r?t.item:"",children:e.jsx("button",{type:"button",className:t.button,onClick:()=>d(o[c.refKey]),children:c.name})},c.name))})})})}j.propTypes={inViewChar:s.bool.isRequired,inViewProduct:s.bool.isRequired,refs:s.objectOf(s.oneOfType([s.func,s.shape({current:s.instanceOf(Element)})])).isRequired};const p={semiconductor:{name:"반도체",desc:"기술과 지식이 집약된 첨단 하이테크 산업인 반도체/태양광은 제품의 고사양화에 따라 공정 난이도가 높아지면서 사람의 판단이나 숙련도를 배제한 자동화된 시스템에 의한 제조환경 운영이 보편화되고 있습니다. 복잡한 공정/설비, 데이터양의 폭발적 증가로 자동화 및 시스템에 의한 공정관리가 필수임에 따라 많은 기업에서 제조설비, 측정/검사설비 및 물류설비에 대한 자동화 제어 기술과 빅데이터 기반 AI 기술을 적용한 품질관리 및 설비 엔지니어링 시스템으로 제조 경쟁력 향상을 추진하고 있습니다.",solutions:[]},display:{name:"디스플레이",desc:"디스플레이는 LCD, OLED, QLED, LED, PDP 등 다양한 기술로 제조되며, 특히 OLED는 고가의 제품으로써 제조 공정의 안정성과 품질관리가 매우 중요합니다. 디스플레이 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다. 디스플레이 산업은 빠르게 변화하는 시장 트렌드에 맞춰 끊임없이 기술 개발 및 제품 향상을 추구하고 있습니다.",solutions:[]},battery:{name:"배터리",desc:"배터리 제조 공정에서는 고객사의 요구에 맞는 공정 제어 및 품질관리 시스템을 구축하여 공정 안정성 및 품질관리를 통한 제조 경쟁력을 확보하고 있습니다. 배터리 산업은 전기차, 에너지 저장 시스템 (ESS), 휴대용 전자제품 등 다양한 분야에서 요구되는 제품으로, 안정적인 품질 및 공급이 중요시되고 있습니다.",solutions:[]},port:{name:"항만",desc:"항만은 물류센터와 함께 물류산업의 중심이 되는 산업입니다. 항만에서는 고객사의 요구에 맞는 자동화 설비를 구축하여 물류센터의 생산성을 향상시키고 있습니다. 항만 산업은 물류 효율성을 향상시키기 위한 다양한 혁신적인 기술을 개발하고 적용하고 있으며, 이를 통해 전 세계적인 물류 네트워크를 구축하고 있습니다.",solutions:[]}};Object.entries(S).forEach(([n,{산업군:r}])=>{r.forEach(o=>{p[o]&&p[o].solutions.push(n)})});function ne(){const{id:n}=T(),r=p[n],[o,d]=a.useState(r.desc),[c,i]=a.useState({}),[l,x]=h({triggerOnce:!1,threshold:.2}),[C,O]=h({triggerOnce:!1,threshold:.2}),u={charSectionRef:a.useRef(null),productSectionRef:a.useRef(null)};a.useEffect(()=>{const y=r.solutions.reduce((f,m)=>(f[m]=S[m],f),{});i(y)},[n,r]);const b=r.name==="배터리"?"2차 전지":r.name;return e.jsxs("div",{className:t.industries,children:[e.jsx(P,{category:"Industries",title:b,subTitle:n,background:"bg-[url('@/assets/products_background.png')]",textAlign:"text-left"}),e.jsx("div",{className:t.outerContainer,children:e.jsxs("div",{className:t.innerContainer,children:[e.jsx(j,{inViewChar:x,alThing:!0,inViewProduct:O,refs:{charSectionRef:u.charSectionRef,productSectionRef:u.productSectionRef}}),e.jsxs("div",{children:[e.jsx(R,{headingRef:l,sectionRef:u.charSectionRef,currentLocation:n,industryDesc:o}),e.jsx(V,{headingRef:C,sectionRef:u.productSectionRef,currentLocation:n,industryProducts:c})]})]})})]})}export{ne as default};
