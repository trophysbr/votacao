(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1840:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(5646)}])},5646:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Dashboard}});var d=n(5893),l=n(4053),c=n(1163),m=n(7294),h=n(6501);function TopPlayersGrid(){let e=(0,l.useSupabaseClient)(),[r,n]=(0,m.useState)([]),[c,g]=(0,m.useState)([]),[f,x]=(0,m.useState)(""),[b,y]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{let fetchWeeks=async()=>{try{let{data:r,error:n}=await e.from("votes").select("week").order("week",{ascending:!1});if(n)throw n;let d=[...new Set(r.map(e=>e.week))];g(d),d.length>0&&x(d[0])}catch(e){h.Am.error("Erro ao carregar semanas: "+e.message)}};fetchWeeks()},[e]),(0,m.useEffect)(()=>{let fetchTopPlayers=async()=>{if(f)try{y(!0);let{data:r,error:d}=await e.rpc("get_top_players",{week_param:f});if(d)throw d;n(r)}catch(e){h.Am.error("Erro ao carregar jogadores: "+e.message)}finally{y(!1)}};fetchTopPlayers()},[f,e]),(0,d.jsxs)("div",{className:"bg-darkBackground p-6 rounded-lg shadow",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold text-whiteText",children:"Ranking Semanal"}),(0,d.jsx)("select",{value:f,onChange:e=>x(e.target.value),className:"p-2 border border-highlightBlue rounded-md bg-darkBackground text-whiteText focus:ring-focusGreen focus:border-highlightBlue hover:bg-hoverPink transition",children:c.map(e=>(0,d.jsx)("option",{value:e,className:"bg-darkBackground text-whiteText",children:new Date(e).toLocaleDateString("pt-BR")},e))})]}),b?(0,d.jsx)("div",{className:"text-center py-8 text-whiteText",children:"Carregando..."}):(0,d.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map((e,r)=>(0,d.jsx)("div",{className:"p-4 border border-secondaryText rounded-lg bg-darkBackground shadow-md",children:(0,d.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,d.jsx)("div",{className:"w-10 h-10 flex items-center justify-center rounded-full ".concat(0===r?"bg-highlightBlue":"bg-primaryPink"," text-whiteText font-bold"),children:r+1}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{className:"font-medium text-whiteText",children:e.name}),(0,d.jsxs)("p",{className:"text-sm text-secondaryText",children:[e.total_points," pontos"]})]})]})},e.id))})]})}function Dashboard(){let e=(0,l.useSession)(),r=(0,c.useRouter)(),n=(0,l.useSupabaseClient)();(0,m.useEffect)(()=>{e||r.push("/auth/login")},[e,r]);let handleLogout=async()=>{await n.auth.signOut(),r.push("/auth/login")};return(0,d.jsx)("div",{className:"min-h-screen bg-darkBackground",children:(0,d.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[(0,d.jsx)("h1",{className:"text-3xl font-bold text-whiteText",children:"Dashboard"}),(0,d.jsx)("button",{onClick:handleLogout,className:"px-4 py-2 bg-primaryPink text-white rounded-md hover:bg-hoverPink",children:"Logout"})]}),(0,d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,d.jsxs)("div",{className:"bg-darkBackground p-6 rounded-lg shadow",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold text-whiteText mb-4",children:"Vota\xe7\xe3o Atual"}),(0,d.jsx)("a",{href:"/vote",className:"inline-block px-6 py-2 bg-highlightBlue text-white rounded-md hover:bg-highlightBlue/90",children:"Votar Agora"})]}),(0,d.jsx)(TopPlayersGrid,{})]})]})})}},1163:function(e,r,n){e.exports=n(9974)},6501:function(e,r,n){"use strict";let d,l;n.d(r,{Am:function(){return dist_c}});var c,m=n(7294);let h={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||h,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",d="",l="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":d+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?d+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&l?r+"{"+l+"}":l)+d},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,d,l)=>{var c;let m=s(e),h=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[h]){let r=m!==e?e:(e=>{let r,n,d=[{}];for(;r=g.exec(e.replace(f,""));)r[4]?d.shift():r[3]?(n=r[3].replace(x," ").trim(),d.unshift(d[0][n]=d[0][n]||{})):d[0][r[1]]=r[2].replace(x," ").trim();return d[0]})(e);b[h]=o(l?{["@keyframes "+h]:r}:r,n?"":"."+h)}let y=n&&b.g?b.g:null;return n&&(b.g=b[h]),c=b[h],y?r.data=r.data.replace(y,c):-1===r.data.indexOf(c)&&(r.data=d?c+r.data:r.data+c),h},p=(e,r,n)=>e.reduce((e,d,l)=>{let c=r[l];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+d+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let y,w,_,v=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let d=arguments;function a(l,c){let m=Object.assign({},l),h=m.className||a.className;n.p=Object.assign({theme:w&&w()},m),n.o=/ *go\d+/.test(h),m.className=u.apply(n,d)+(h?" "+h:""),r&&(m.ref=c);let g=e;return e[0]&&(g=m.as||e,delete m.as),_&&g[0]&&_(m),y(g,m)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,j=(d=0,()=>(++d).toString()),S=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:d}=r;return{...e,toasts:e.toasts.map(e=>e.id===d||void 0===d?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let l=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+l}))}}},k=[],N={toasts:[],pausedAt:void 0},dist_u=e=>{N=U(N,e),k.forEach(e=>{e(N)})},Y=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||j()}),dist_h=e=>(r,n)=>{let d=Y(r,e,n);return dist_u({type:2,toast:d}),d.id},dist_c=(e,r)=>dist_h("blank")(e,r);dist_c.error=dist_h("error"),dist_c.success=dist_h("success"),dist_c.loading=dist_h("loading"),dist_c.custom=dist_h("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let d=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let l=r.success?dist_f(r.success,e):void 0;return l?dist_c.success(l,{id:d,...n,...null==n?void 0:n.success}):dist_c.dismiss(d),e}).catch(e=>{let l=r.error?dist_f(r.error,e):void 0;l?dist_c.error(l,{id:d,...n,...null==n?void 0:n.error}):dist_c.dismiss(d)}),e};var E=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,A=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,P=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,C=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,D=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${C} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${D} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,O=goober_modern_j("div")`
  position: absolute;
`,L=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,F=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,I=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${F} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:d}=e;return void 0!==r?"string"==typeof r?m.createElement(I,null,r):r:"blank"===n?null:m.createElement(L,null,m.createElement(P,{...d}),"loading"!==n&&m.createElement(O,null,"error"===n?m.createElement(A,{...d}):m.createElement(z,{...d})))},Te=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,G=goober_modern_j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,R=goober_modern_j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Se=(e,r)=>{let n=e.includes("top")?1:-1,[d,l]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Te(n),ye(n)];return{animation:r?`${v(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:d})=>{let l=e.height?Se(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),h=m.createElement(R,{...e.ariaProps},dist_f(e.message,e));return m.createElement(G,{className:e.className,style:{...l,...n,...e.style}},"function"==typeof d?d({icon:c,message:h}):m.createElement(m.Fragment,null,c,h))}),c=m.createElement,o.p=void 0,y=c,w=void 0,_=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1840)}),_N_E=e.O()}]);