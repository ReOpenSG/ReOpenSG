import{p as e,j as t,i as f,d as R}from"./index-4defba45.js";import{r as l}from"./react-801b4781.js";import{a as q,c as j}from"./fbStore-ed2d4d67.js";import{Q as k}from"./react-toastify.esm-41251aa7.js";import{c as C}from"./recoil-4e5adcc1.js";import{B as N}from"./BannerSection-dfbe6b52.js";import{N as A,d as S}from"./reactRouter-560c2f4d.js";import{s as d}from"./Community.module-f0a7fca8.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"./fbStorage-a10cdba0.js";import"./aos-da223f74.js";function P({notice:s,notices:p}){var a,i;const n=(a=s==null?void 0:s.data)!=null&&a.updatedAt?new Date(s.data.updatedAt.seconds*1e3+s.data.updatedAt.nanoseconds/1e6):null,r=n==null?void 0:n.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});return t.jsx(A,{to:`/community/${s==null?void 0:s.id}`,state:{currentNotice:s,notices:p},children:t.jsxs("div",{className:d.noticeItem,children:[t.jsx("h3",{className:d.noticeTitle,children:(i=s==null?void 0:s.data)==null?void 0:i.title}),t.jsx("time",{className:d.noticeCreatedAt,dateTime:r,children:r})]})})}P.propTypes={notices:e.PropTypes.arrayOf(e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.objectOf({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.arrayOf({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired})).isRequired,notice:e.PropTypes.objectOf(e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.shape({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.shape({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired})).isRequired};P.propTypes={notices:e.PropTypes.arrayOf(e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.shape({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.shape({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired})).isRequired,notice:e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.shape({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.shape({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired}).isRequired};function m({notices:s,currentNotices:p}){var n;return t.jsx("div",{className:d.noticeList,children:(n=p==null?void 0:p.slice().toSorted((r,a)=>a.data.index-r.data.index))==null?void 0:n.map(r=>t.jsx(P,{notice:r,notices:s},r==null?void 0:r.id))})}m.propTypes={notices:e.PropTypes.arrayOf(e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.shape({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.shape({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired})).isRequired,currentNotices:e.PropTypes.arrayOf(e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.shape({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.shape({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired})).isRequired};function g({currentPage:s,pageCount:p,handleFirstPage:n,handlePrevPage:r,handlePageChange:a,handleNextPage:i,handleLastPage:u}){return t.jsxs("div",{className:d.listButtons,children:[t.jsx("button",{type:"button",onClick:n,className:"",children:"≪"}),t.jsx("button",{type:"button",onClick:r,className:"-rotate-90",children:"⋀"}),Array.from({length:p},(o,y)=>y+1).map(o=>t.jsx("button",{type:"button",onClick:()=>a(o),className:`${d.pageNum} ${s===o?d.currentPage:""}`,children:o},o)),t.jsx("button",{type:"button",onClick:i,className:"-rotate-90",children:"⋁"}),t.jsx("button",{type:"button",onClick:u,children:"≫"})]})}g.propTypes={currentPage:e.PropTypes.number.isRequired,pageCount:e.PropTypes.number.isRequired,handleFirstPage:e.PropTypes.func.isRequired,handlePrevPage:e.PropTypes.func.isRequired,handlePageChange:e.PropTypes.func.isRequired,handleNextPage:e.PropTypes.func.isRequired,handleLastPage:e.PropTypes.func.isRequired};function h({sortedNotices:s}){const[p,n]=l.useState(1),r=6,a=s==null?void 0:s.slice((p-1)*r,p*r),i=Math.ceil(s.length/r),u=b=>n(b),o=()=>{p>1&&n(p-1)},y=()=>{p<i&&n(p+1)},c=()=>{n(1)},x=()=>{n(i)},T={currentPage:p,pageCount:Math.ceil(s.length/r),handleFirstPage:c,handlePrevPage:o,handlePageChange:u,handleNextPage:y,handleLastPage:x};return t.jsxs("section",{className:d.NoticeWrapper,children:[t.jsx("span",{className:"sr-only",children:"커뮤니티 리스트"}),t.jsxs("p",{className:d.pageCount,children:["Total: ",s==null?void 0:s.length," [",p," / ",T.pageCount,"]"]}),t.jsx(m,{notices:s,currentNotices:a}),t.jsx(g,{...T})]})}h.propTypes={sortedNotices:e.PropTypes.arrayOf(e.PropTypes.shape({id:e.PropTypes.string.isRequired,data:e.PropTypes.shape({index:e.PropTypes.number,title:e.PropTypes.string,content:e.PropTypes.string,imageUrl:e.PropTypes.string,updatedAt:e.PropTypes.shape({seconds:e.PropTypes.number,nanoseconds:e.PropTypes.number})}).isRequired})).isRequired};function M(){const[s,p]=l.useState([]),n=C(f),r=S();l.useEffect(()=>{(async()=>{try{const o=await q(j(R,"community")),y=[];o.forEach(c=>{y.push({id:c.id,data:c.data()})}),p(y)}catch(o){k.error(o)}})()},[]);const a=s==null?void 0:s.slice().toSorted((u,o)=>o.data.index-u.data.index),i=()=>{r("write",{state:{notices:a}})};return t.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[t.jsx(N,{category:"Support",title:"커뮤니티"}),n?t.jsx("div",{className:`w-full flex justify-end
      p-open-gutter-mobile
      tablet:p-open-gutter-desktop desktop:p-open-gutter-desktop  animate-bounce`,children:t.jsx("button",{type:"button",className:"p-open-lg tablet:p-open-xl desktop:p-open-xl text-open-font-medium tablet:text-open-font-large desktop:text-open-font-xl bg-slate-400 -text--openfoundation-black rounded-md",onClick:i,children:"글쓰러 가기"})}):"",t.jsx(h,{sortedNotices:a})]})}export{M as default};
