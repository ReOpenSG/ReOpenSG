import{P as t,j as e}from"./index-44ae0b2d.js";import"./react-801b4781.js";function p({type:s,onClick:n,className:i,text:o}){return e.jsx("button",{type:s,className:i,onClick:n,children:o})}p.propTypes={type:t.string.isRequired,onClick:t.func.isRequired,className:t.string.isRequired,text:t.string.isRequired};function r({mainTopText:s,mainBottomText:n,subTopText:i,subBottomText:o}){return e.jsxs("div",{className:"flex flex-col gap-open-xl items-center -text--openfoundation-primary",children:[e.jsxs("p",{className:" font-open-label text-open-font-xxxl flex flex-col items-center",children:[e.jsx("span",{children:s}),e.jsx("span",{children:n})]}),e.jsxs("p",{className:"font-open-paragraphs text-open-font-xl flex flex-col items-center",children:[e.jsx("span",{children:i}),e.jsx("span",{children:o})]})]})}r.defaultProps={mainBottomText:"",subBottomText:""};r.propTypes={mainTopText:t.string.isRequired,mainBottomText:t.string,subTopText:t.string.isRequired,subBottomText:t.string};export{r as N,p as a};
