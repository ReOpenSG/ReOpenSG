import{P as n,p as d,j as e}from"./index-6ffcc819.js";import{r as o}from"./react-3321cb07.js";import{s as i}from"./styles.module-9ce859ce.js";import{e as R}from"./reactRouter-dd40e030.js";import{v as p}from"./v4-4a60fe23.js";import{T as f}from"./TitleSection-4260bfc2.js";import"./recoil-6524b0a4.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"./fbStore-ed2d4d67.js";import"./fbStorage-a10cdba0.js";import"./animations-1dde62f3.js";function l({data:r,state:t,setState:s}){const c=R();return e.jsxs("ul",{className:i.lnbUl,"data-aos":"fade-in","data-aos-duration":"1200",children:[e.jsx("li",{children:e.jsx("button",{type:"button",id:c,value:"전체",onClick:a=>s(a.target.value),className:t==="전체"?i.isClicked:"",children:"전체"})}),r.map(a=>e.jsx("li",{children:e.jsx("button",{type:"button",id:c,value:a[0],onClick:x=>s(x.target.value),className:a[0]===t?i.isClicked:"",children:a[0]})},a[0]))]})}l.propTypes={data:n.arrayOf(d.array).isRequired,state:n.string.isRequired,setState:n.func.isRequired};const j="/ReOpenSG/assets/team_PM_manufacturingTeam-3e46dd6b.svg",T="/ReOpenSG/assets/team_RD-27e0148e.svg",b="/ReOpenSG/assets/team_personnelTeam-b5b95ce8.svg",S="/ReOpenSG/assets/team_generalAffairsTeam-0d9dc45e.svg",v="/ReOpenSG/assets/team_BSTeam-74026bc5.svg",h="/ReOpenSG/assets/team_RDTeam-80070b65.svg",y="/ReOpenSG/assets/team_UXTeam-340360e6.svg",u={FA:[{img:j,team:"PM&제조팀",desc:"하드웨어 제작 및 설치, 시운전 전담 조직"},{img:T,team:"R&D",desc:"기구 설계, 전장 설계, 소프트웨어 설계 전담 조직"}],경영지원:[{img:b,team:"인사팀",desc:"핵심인재 확보, 인적자원 관리, 기타 노무 행정 관리"},{img:S,team:"총무팀",desc:"사무환경 조성, 자산 및 비품 관리, 편의시설 관리"}],IT:[{img:v,team:"BS팀",desc:"시스템 기획 및 개발, 기존 시스템 유지보수"},{img:h,team:"R&D팀",desc:"자사 소프트웨어 연구 기획 및 개발"},{img:y,team:"UX팀",desc:"GUI기획 및 디자인, 디자인 요소 비주얼 라이징"}]};function m({src:r,alt:t,title:s,text:c}){return e.jsxs("div",{className:i.cardWrapper,"data-aos":"fade-up","data-aos-duration":"800",children:[e.jsx("img",{src:r,alt:t,"aria-hidden":"true",className:s==="PM&제조팀"||s==="R&D"||s==="BS팀"||s==="UX팀"?"tablet:ml-6 desktop:ml-6":""}),e.jsxs("div",{children:[e.jsx("h3",{children:s}),e.jsx("p",{children:c})]})]})}m.propTypes={src:n.string.isRequired,alt:n.string.isRequired,title:n.string.isRequired,text:n.string.isRequired};function O(){const r=Object.entries(u);return e.jsx(e.Fragment,{children:r.map(t=>t[1].map(s=>e.jsx(m,{src:s.img,alt:s.team,title:s.team,text:s.desc},p())))})}function g({data:r,state:t}){const[s,c]=o.useState();return o.useEffect(()=>{r.filter(a=>a[0]===t?c(a[1]):"")}),e.jsx("ul",{children:e.jsx("li",{className:i.roleSectionWrapper,children:t==="전체"?e.jsx(O,{}):s==null?void 0:s.map(a=>e.jsx(m,{src:a.img,alt:a.team,title:a.team,text:a.desc},p()))})})}g.propTypes={data:n.arrayOf(d.array).isRequired,state:n.string.isRequired};function E(){const r=Object.entries(u),[t,s]=o.useState("전체");return e.jsxs("div",{className:t==="전체"?i.team:`${i.team} pb-open-6xl`,children:[e.jsx(f,{category:"직무소개",title:"OpenSG의 업무",background:"bg-[url('@/assets/aboutUs_background.png')]",textAlign:"text-center"}),e.jsx("div",{className:i.teamWrapper,children:e.jsxs("div",{className:i.sectionWrapper,children:[e.jsx(l,{data:r,state:t,setState:s}),e.jsx(g,{data:r,state:t})]})})]})}export{E as default};