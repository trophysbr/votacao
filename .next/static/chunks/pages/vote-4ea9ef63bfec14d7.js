(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{1978:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vote",function(){return n(9951)}])},9951:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Vote}});var l=n(5893),c=n(7294),d=n(4053),m=n(1163),f=n(6501),g=n(9583);let h={1:10,2:8,3:6,4:4,5:2,disappointment:-10};function VotingForm(e){let{players:r}=e,n=(0,d.useSupabaseClient)(),x=(0,m.useRouter)(),[b,y]=(0,c.useState)({}),[_,v]=(0,c.useState)(null),[w,j]=(0,c.useState)(!1),handleSelection=(e,r)=>{y(n=>({...n,[e]:r}))},handleSubmit=async e=>{e.preventDefault(),j(!0);let r=5===Object.keys(b).length;if(!r||!_){f.Am.error("Por favor, complete todas as sele\xe7\xf5es"),j(!1);return}let l=Object.entries(b).map(e=>{let[r,n]=e;return{player_id:n,points:h[r],week:new Date().toISOString().slice(0,10)}});l.push({player_id:_,points:-10,week:new Date().toISOString().slice(0,10)});try{let{error:e}=await n.from("votes").insert(l);if(e)throw e;f.Am.success("Voto registrado com sucesso!"),x.push("/dashboard")}catch(e){f.Am.error("Erro ao registrar voto: "+e.message)}finally{j(!1)}};return(0,l.jsx)("div",{className:"max-w-4xl mx-auto p-6 bg-darkBackground rounded-lg shadow-lg",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold text-whiteText",children:"Vota\xe7\xe3o Semanal"}),(0,l.jsx)("button",{onClick:()=>x.push("/dashboard"),className:"p-2 text-highlightBlue hover:text-hoverPink transition",children:(0,l.jsx)(g.x_l,{size:24})})]}),(0,l.jsxs)("form",{onSubmit:handleSubmit,className:"space-y-8",children:[[1,2,3,4,5].map(e=>(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("label",{className:"block text-lg font-medium text-whiteText",children:[e,"\xba Lugar (",h[e]," pontos)"]}),(0,l.jsxs)("select",{value:b[e]||"",onChange:r=>handleSelection(e,r.target.value),className:"w-full p-2 border border-secondaryText rounded-md focus:ring-highlightBlue focus:border-highlightBlue bg-[#1E1E1E] text-whiteText",required:!0,children:[(0,l.jsx)("option",{value:"",children:"Selecione um jogador"}),r.map(e=>(0,l.jsx)("option",{value:e.id,disabled:Object.values(b).includes(e.id),children:e.name},e.id))]})]},e)),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("label",{className:"block text-lg font-medium text-whiteText",children:"Decep\xe7\xe3o da Semana (-10 pontos)"}),(0,l.jsxs)("select",{value:_||"",onChange:e=>v(e.target.value),className:"w-full p-2 border border-secondaryText rounded-md focus:ring-highlightBlue focus:border-highlightBlue bg-[#1E1E1E] text-whiteText",required:!0,children:[(0,l.jsx)("option",{value:"",children:"Selecione o jogador"}),r.map(e=>(0,l.jsx)("option",{value:e.id,disabled:e.id===_,children:e.name},e.id))]})]}),(0,l.jsx)("button",{type:"submit",disabled:w,className:"w-full py-3 px-4 bg-highlightBlue text-darkBackground font-medium rounded-md hover:bg-focusGreen focus:outline-none focus:ring-2 focus:ring-highlightBlue focus:ring-offset-2 transition",children:w?"Enviando voto...":"Confirmar Voto"})]})]})})}function Vote(){let e=(0,d.useSupabaseClient)(),[r,n]=(0,c.useState)([]),[m,g]=(0,c.useState)(!0);return((0,c.useEffect)(()=>{let fetchPlayers=async()=>{try{let{data:r,error:l}=await e.from("players").select("*").order("name",{ascending:!0});if(l)throw l;n(r)}catch(e){f.Am.error("Erro ao carregar jogadores: "+e.message)}finally{g(!1)}};fetchPlayers()},[e]),m)?(0,l.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-darkBackground",children:(0,l.jsx)("div",{className:"text-highlightBlue text-2xl font-bold",children:"Carregando..."})}):(0,l.jsxs)("div",{className:"min-h-screen bg-darkBackground py-12 px-4 sm:px-6 lg:px-8",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-whiteText text-center mb-6",children:"Vota\xe7\xe3o"}),(0,l.jsx)(VotingForm,{players:r})]})}},1163:function(e,r,n){e.exports=n(9974)},8357:function(e,r,n){"use strict";n.d(r,{w_:function(){return GenIcon}});var l=n(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=l.createContext&&l.createContext(c),__assign=function(){return(__assign=Object.assign||function(e){for(var r,n=1,l=arguments.length;n<l;n++)for(var c in r=arguments[n])Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);return e}).apply(this,arguments)},__rest=function(e,r){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>r.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,l=Object.getOwnPropertySymbols(e);c<l.length;c++)0>r.indexOf(l[c])&&Object.prototype.propertyIsEnumerable.call(e,l[c])&&(n[l[c]]=e[l[c]]);return n};function GenIcon(e){return function(r){return l.createElement(IconBase,__assign({attr:__assign({},e.attr)},r),function Tree2Element(e){return e&&e.map(function(e,r){return l.createElement(e.tag,__assign({key:r},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(r){var n,c=e.attr,d=e.size,m=e.title,f=__rest(e,["attr","size","title"]),g=d||r.size||"1em";return r.className&&(n=r.className),e.className&&(n=(n?n+" ":"")+e.className),l.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,c,f,{className:n,style:__assign(__assign({color:e.color||r.color},r.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),m&&l.createElement("title",null,m),e.children)};return void 0!==d?l.createElement(d.Consumer,null,function(e){return elem(e)}):elem(c)}},6501:function(e,r,n){"use strict";let l,c;n.d(r,{Am:function(){return dist_c}});var d,m=n(7294);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",c="";for(let d in e){let m=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+m+";":l+="f"==d[1]?o(m,d):d+"{"+o(m,"k"==d[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=m&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=o.p?o.p(d,m):d+":"+m+";")}return n+(r&&c?r+"{"+c+"}":c)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,c)=>{var d;let m=s(e),f=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[f]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);b[f]=o(c?{["@keyframes "+f]:r}:r,n?"":"."+f)}let y=n&&b.g?b.g:null;return n&&(b.g=b[f]),d=b[f],y?r.data=r.data.replace(y,d):-1===r.data.indexOf(d)&&(r.data=l?d+r.data:r.data+d),f},p=(e,r,n)=>e.reduce((e,l,c)=>{let d=r[c];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let y,_,v,w=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let l=arguments;function a(c,d){let m=Object.assign({},c),f=m.className||a.className;n.p=Object.assign({theme:_&&_()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,l)+(f?" "+f:""),r&&(m.ref=d);let g=e;return e[0]&&(g=m.as||e,delete m.as),v&&g[0]&&v(m),y(g,m)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,j=(l=0,()=>(++l).toString()),S=()=>{if(void 0===c&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");c=!e||e.matches}return c},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:l}=r;return{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let c=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+c}))}}},E=[],N={toasts:[],pausedAt:void 0},dist_u=e=>{N=U(N,e),E.forEach(e=>{e(N)})},Y=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||j()}),dist_h=e=>(r,n)=>{let l=Y(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_c=(e,r)=>dist_h("blank")(e,r);dist_c.error=dist_h("error"),dist_c.success=dist_h("success"),dist_c.loading=dist_h("loading"),dist_c.custom=dist_h("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let l=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let c=r.success?dist_f(r.success,e):void 0;return c?dist_c.success(c,{id:l,...n,...null==n?void 0:n.success}):dist_c.dismiss(l),e}).catch(e=>{let c=r.error?dist_f(r.error,e):void 0;c?dist_c.error(c,{id:l,...n,...null==n?void 0:n.error}):dist_c.dismiss(l)}),e};var k=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,C=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
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
    animation: ${C} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,A=w`
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
}`,I=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${A} 0.2s ease-out forwards;
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
`,P=goober_modern_j("div")`
  position: absolute;
`,D=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(F,null,r):r:"blank"===n?null:m.createElement(D,null,m.createElement(B,{...l}),"loading"!==n&&m.createElement(P,null,"error"===n?m.createElement($,{...l}):m.createElement(I,{...l})))},Te=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,q=goober_modern_j("div")`
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
`,G=goober_modern_j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Se=(e,r)=>{let n=e.includes("top")?1:-1,[l,c]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Te(n),ye(n)];return{animation:r?`${w(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:l})=>{let c=e.height?Se(e.position||r||"top-center",e.visible):{opacity:0},d=m.createElement(M,{toast:e}),f=m.createElement(G,{...e.ariaProps},dist_f(e.message,e));return m.createElement(q,{className:e.className,style:{...c,...n,...e.style}},"function"==typeof l?l({icon:d,message:f}):m.createElement(m.Fragment,null,d,f))}),d=m.createElement,o.p=void 0,y=d,_=void 0,v=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[445,774,888,179],function(){return e(e.s=1978)}),_N_E=e.O()}]);