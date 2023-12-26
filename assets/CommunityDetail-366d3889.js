import{p as s,i as w,j as e,Q as P,d as I,s as L}from"./index-20c80b10.js";import{r as l}from"./react-5786de35.js";import{B}from"./BannerSection-ac8418c8.js";import{d as E,b as W,e as O}from"./fbStore-ed2d4d67.js";import{d as _,N as T,u as F,e as Q}from"./reactRouter-6c0f0705.js";import{r as z,d as G}from"./fbStorage-a10cdba0.js";import{c as H}from"./recoil-d7b205b8.js";import{s as n}from"./Community.module-f0a7fca8.js";import"./fbAuth-9e87268e.js";import"./fbApp-26a327c1.js";import"react-modal";function A({currentNotice:a,nextNotice:t,prevNotice:o,notices:r,params:g}){var k,y,p,d,u,x,i,D,R;const m=_(),C=H(w),c=(k=a==null?void 0:a.data)!=null&&k.updatedAt?new Date(a.data.updatedAt.seconds*1e3+a.data.updatedAt.nanoseconds/1e6):null,h=c==null?void 0:c.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),f=()=>{m(`/community/${a==null?void 0:a.id}/edit`,{state:{currentNotice:a,notices:r}})},j=async()=>{try{const S=E(I,"community",g.id),U=await W(S);if(await O(S),U.exists()){const{imageUrl:$}=U.data();if($){const q=z(L,`images/community/${g.id}`);await G(q)}}P.success("글이 삭제되었습니다."),m("/community")}catch{P.error("글 삭제 중 오류가 발생했습니다.")}},b=()=>{m("/community")};return a?e.jsxs("section",{className:n.detailWrapper,children:[e.jsxs("div",{className:n.titleWrapper,children:[e.jsx("h3",{className:n.title,children:(y=a==null?void 0:a.data)==null?void 0:y.title}),e.jsx("time",{className:n.updatedAt,dateTime:h,children:h})]}),e.jsx("div",{className:n.buttonWrapper,children:C?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`${n.button} ${n.editButton}`,onClick:f,children:"수정"}),e.jsx("button",{type:"button",className:`${n.button} ${n.deleteButton}`,onClick:j,children:"삭제"})]}):""}),e.jsxs("div",{className:n.contentWrapper,children:[e.jsx("img",{src:(p=a==null?void 0:a.data)==null?void 0:p.imageUrl,alt:(d=a==null?void 0:a.data)==null?void 0:d.title,className:n.imagePreview}),e.jsx("p",{className:n.contentText,children:(u=a==null?void 0:a.data)==null?void 0:u.content})]}),e.jsxs("ul",{className:n.navWrapper,children:[e.jsx("li",{className:n.list,children:t?e.jsxs(T,{to:`/community/${t==null?void 0:t.id}`,state:{currentNotice:t,notices:r},className:"flex gap-open-lg",children:[e.jsx("span",{className:"font-semibold",children:"↑   다음 글"}),e.jsx("span",{children:(x=t==null?void 0:t.data)==null?void 0:x.title})]}):e.jsxs(T,{to:"#",className:"flex gap-open-lg",onClick:()=>P("다음 글이 없습니다."),children:[" ",e.jsx("span",{className:"font-semibold",children:"↑   다음 글"}),t&&e.jsx("span",{children:(i=t==null?void 0:t.data)==null?void 0:i.title}),!t&&e.jsx("span",{children:"다음 글이 없습니다."})]})}),e.jsx("li",{className:n.list,children:o?e.jsxs(T,{to:`/community/${o==null?void 0:o.id}`,state:{currentNotice:o,notices:r},className:"flex gap-open-lg",children:[e.jsx("span",{className:"font-semibold",children:"↓   이전 글"}),e.jsx("span",{children:(D=o==null?void 0:o.data)==null?void 0:D.title})]}):e.jsxs(T,{to:"#",className:"flex gap-open-lg",onClick:()=>P("이전 글이 없습니다."),children:[" ",e.jsx("span",{className:"font-semibold",children:"↓   이전 글"}),o&&e.jsx("span",{children:(R=o==null?void 0:o.data)==null?void 0:R.title}),!o&&e.jsx("span",{children:"이전 글이 없습니다."})]})})]}),e.jsxs("button",{type:"button",className:n.comebackButton,onClick:b,children:[" ",e.jsx("span",{className:"block font-open-highlight",children:"목록으로"}),e.jsx("span",{className:"font-extralight",children:"> "}),"  "," "]})]}):e.jsx("div",{children:"Loading..."})}A.propTypes={currentNotice:s.PropTypes.shape({id:s.PropTypes.string,data:s.PropTypes.shape({index:s.PropTypes.number,title:s.PropTypes.string,content:s.PropTypes.string,imageUrl:s.PropTypes.string,updatedAt:s.PropTypes.objectOf({seconds:s.PropTypes.number,nanoseconds:s.PropTypes.number})}).isRequired}),nextNotice:s.PropTypes.shape({id:s.PropTypes.string,data:s.PropTypes.shape({index:s.PropTypes.number,title:s.PropTypes.string,content:s.PropTypes.string,imageUrl:s.PropTypes.string,updatedAt:s.PropTypes.shape({seconds:s.PropTypes.number,nanoseconds:s.PropTypes.number})})}),prevNotice:s.PropTypes.shape({id:s.PropTypes.string,data:s.PropTypes.shape({index:s.PropTypes.number,title:s.PropTypes.string,content:s.PropTypes.string,imageUrl:s.PropTypes.string,updatedAt:s.PropTypes.shape({seconds:s.PropTypes.number,nanoseconds:s.PropTypes.number})})}),notices:s.PropTypes.arrayOf(s.PropTypes.shape({id:s.PropTypes.string.isRequired,data:s.PropTypes.shape({index:s.PropTypes.number,title:s.PropTypes.string,content:s.PropTypes.string,imageUrl:s.PropTypes.string,updatedAt:s.PropTypes.shape({seconds:s.PropTypes.number,nanoseconds:s.PropTypes.number})}).isRequired})).isRequired,params:s.PropTypes.shape({id:s.PropTypes.string.isRequired}).isRequired};A.defaultProps={currentNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}},nextNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}},prevNotice:{id:"",data:{index:0,title:"",content:"",imageUrl:"",updatedAt:{seconds:0,nanoseconds:0}}}};function as(){const a=F(),t=Q(),[o,r]=l.useState([]),[g,m]=l.useState(null),[C,c]=l.useState(-1),[h,f]=l.useState(null),[j,b]=l.useState(null);return l.useEffect(()=>{(async()=>{const{currentNotice:y,notices:p}=a.state||{};if(y){m(y);const d=p.findIndex(i=>(i==null?void 0:i.id)===(t==null?void 0:t.id));c(d);const u=d>0?p[d-1]:null,x=d<p.length-1?p[d+1]:null;r(p),f(u),b(x)}})()},[a.state,t.id]),e.jsxs("div",{className:"mb-open-5xl w-full h-full desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile",children:[e.jsx(B,{category:"Support",title:"커뮤니티"}),e.jsx(A,{notices:o,currentNotice:g,params:t,nextNotice:h,prevNotice:j})]})}export{as as default};
