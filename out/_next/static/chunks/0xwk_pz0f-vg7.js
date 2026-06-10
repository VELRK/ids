(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54865,e=>{e.q("/_next/static/media/white-logo.0jx5kgy31t65-.svg")},17263,e=>{e.q("/_next/static/media/black-logo.08wl-yxva55tn.svg")},70319,e=>{"use strict";var t=e.i(71645);let a=function(){for(var e,t,a=0,s="",i=arguments.length;a<i;a++)(e=arguments[a])&&(t=function e(t){var a,s,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var n=t.length;for(a=0;a<n;a++)t[a]&&(s=e(t[a]))&&(i&&(i+=" "),i+=s)}else for(s in t)t[s]&&(i&&(i+=" "),i+=s);return i}(e))&&(s&&(s+=" "),s+=t);return s};var s=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e||"function"==typeof e?e:null,n=e=>(0,t.isValidElement)(e)||"string"==typeof e||"function"==typeof e||s(e);function o({enter:e,exit:a,appendPosition:s=!1,collapse:i=!0,collapseDuration:n=300}){return function({children:o,position:r,preventExitTransition:l,done:c,nodeRef:d,isIn:m,playToast:f}){let p=s?`${e}--${r}`:e,u=s?`${a}--${r}`:a,h=(0,t.useRef)(0);return(0,t.useLayoutEffect)(()=>{let e=d.current,t=p.split(" "),a=s=>{s.target===d.current&&(f(),e.removeEventListener("animationend",a),e.removeEventListener("animationcancel",a),0===h.current&&"animationcancel"!==s.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",a),e.addEventListener("animationcancel",a)},[]),(0,t.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),i?function(e,t,a=300){let{scrollHeight:s,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=s+"px",i.transition=`all ${a}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,a)})})}(e,c,n):c()};m||(l?t():(h.current=1,e.className+=` ${u}`,e.addEventListener("animationend",t)))},[m]),t.default.createElement(t.default.Fragment,null,o)}}function r(e,t){return{content:l(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function l(e,a,s=!1){return(0,t.isValidElement)(e)&&"string"!=typeof e.type?(0,t.cloneElement)(e,{closeToast:a.closeToast,toastProps:a,data:a.data,isPaused:s}):"function"==typeof e?e({closeToast:a.closeToast,toastProps:a,data:a.data,isPaused:s}):e}function c({delay:e,isRunning:s,closeToast:i,type:n="default",hide:o,className:r,controlledProgress:l,progress:d,rtl:m,isIn:f,theme:p}){let u=o||l&&0===d,h={animationDuration:`${e}ms`,animationPlayState:s?"running":"paused"};l&&(h.transform=`scaleX(${d})`);let A=a("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":m}),g="function"==typeof r?r({rtl:m,type:n,defaultClassName:A}):a(A,r);return t.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":u},t.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${n}`}),t.default.createElement("div",{role:"progressbar","aria-hidden":u?"true":"false","aria-label":"notification timer","aria-valuenow":l?Math.round(100*d):void 0,"aria-valuemin":0,"aria-valuemax":100,className:g,style:h,...{[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{f&&i()}}}))}var d=1,m=()=>`${d++}`,f=new Map,p=[],u=new Set,h=e=>u.forEach(t=>t(e));function A(e,t){var a;if(t)return!!(null!=(a=f.get(t))&&a.isToastActive(e));let s=!1;return f.forEach(t=>{t.isToastActive(e)&&(s=!0)}),s}function g(e,t){n(e)&&(f.size>0||p.push({content:e,options:t}),f.forEach(a=>{a.buildToast(e,t)}))}function y(e,t){f.forEach(a=>{null!=t&&null!=t&&t.containerId&&(null==t?void 0:t.containerId)!==a.id||a.toggle(e,null==t?void 0:t.id)})}function v(e,t){return g(e,t),t.toastId}function b(e,t){var a;return{...t,type:t&&t.type||e,toastId:(a=t)&&("string"==typeof a.toastId||s(a.toastId))?a.toastId:m()}}function x(e){return(t,a)=>v(t,b(e,a))}function w(e,t){return v(e,b("default",t))}w.loading=(e,t)=>v(e,b("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),w.promise=function(e,{pending:t,error:a,success:s},i){let n;t&&(n="string"==typeof t?w.loading(t,i):w.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},r=(e,t,a)=>{if(null==t)return void w.dismiss(n);let s={type:e,...o,...i,data:a},r="string"==typeof t?{render:t}:t;return n?w.update(n,{...s,...r}):w(r.render,{...s,...r}),a},l="function"==typeof e?e():e;return l.then(e=>r("success",s,e)).catch(e=>r("error",a,e)),l},w.success=x("success"),w.info=x("info"),w.error=x("error"),w.warning=x("warning"),w.warn=w.warning,w.dark=(e,t)=>v(e,b("default",{theme:"dark",...t})),w.dismiss=function(e){!function(e){let t;if(!(f.size>0)){p=p.filter(t=>null!=e&&t.options.toastId!==e);return}if(null==e||"string"==typeof(t=e)||s(t))f.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=f.get(e.containerId);t?t.removeToast(e.id):f.forEach(t=>{t.removeToast(e.id)})}}(e)},w.clearWaitingQueue=(e={})=>{f.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})},w.isActive=A,w.update=(e,t={})=>{let a=((e,{containerId:t})=>{var a;return null==(a=f.get(t||1))?void 0:a.toasts.get(e)})(e,t);if(a){let{props:s,content:i}=a,n={delay:100,...s,...t,toastId:t.toastId||e,updateId:m()};n.toastId!==e&&(n.staleId=e);let o=n.render||i;delete n.render,v(o,n)}},w.done=e=>{w.update(e,{progress:1})},w.onChange=function(e){return u.add(e),()=>{u.delete(e)}},w.play=e=>y(!0,e),w.pause=e=>y(!1,e);var E="u">typeof window?t.useLayoutEffect:t.useEffect,j=({theme:e,type:a,isLoading:s,...i})=>t.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":`var(--toastify-icon-color-${a})`,...i}),_={info:function(e){return t.default.createElement(j,{...e},t.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return t.default.createElement(j,{...e},t.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return t.default.createElement(j,{...e},t.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return t.default.createElement(j,{...e},t.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return t.default.createElement("div",{className:"Toastify__spinner"})}},O=e=>{let{isRunning:s,preventExitTransition:i,toastRef:n,eventHandlers:o,playToast:r}=function(e){var a,s;let[i,n]=(0,t.useState)(!1),[o,r]=(0,t.useState)(!1),l=(0,t.useRef)(null),c=(0,t.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:m,closeToast:p,onClick:u,closeOnClick:h}=e;function A(){n(!0)}function g(){n(!1)}function y(t){let a=l.current;if(c.canDrag&&a){c.didMove=!0,i&&g(),"x"===e.draggableDirection?c.delta=t.clientX-c.start:c.delta=t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1);let s="x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;a.style.transform=`translate3d(${s},0)`,a.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function v(){document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",v);let t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){r(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}a={id:e.toastId,containerId:e.containerId,fn:n},null==(s=f.get(a.containerId||1))||s.setToggle(a.id,a.fn),(0,t.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",A),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",A),window.removeEventListener("blur",g)}},[e.pauseOnFocusLoss]);let b={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",y),document.addEventListener("pointerup",v);let a=l.current;c.canCloseOnClick=!0,c.canDrag=!0,a.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=a.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=a.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:a,bottom:s,left:i,right:n}=l.current.getBoundingClientRect();"mouse"===t.pointerType&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=n&&t.clientY>=a&&t.clientY<=s?g():A()}};return d&&m&&(b.onMouseEnter=g,e.stacked||(b.onMouseLeave=A)),h&&(b.onClick=e=>{u&&u(e),c.canCloseOnClick&&p(!0)}),{playToast:A,pauseToast:g,isRunning:i,preventExitTransition:o,toastRef:l,eventHandlers:b}}(e),{closeButton:d,children:m,autoClose:p,onClick:u,type:h,hideProgressBar:A,closeToast:g,transition:y,position:v,className:b,style:x,progressClassName:w,updateId:E,role:j,progress:O,rtl:N,toastId:B,deleteToast:Q,isIn:k,isLoading:C,closeOnClick:T,theme:I,ariaLabel:R}=e,z=a("Toastify__toast",`Toastify__toast-theme--${I}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":T}),D="function"==typeof b?b({rtl:N,position:v,type:h,defaultClassName:z}):a(z,b),K=function({theme:e,type:a,isLoading:s,icon:i}){let n=null,o={theme:e,type:a};return!1===i||("function"==typeof i?n=i({...o,isLoading:s}):(0,t.isValidElement)(i)?n=(0,t.cloneElement)(i,o):s?n=_.spinner():a in _&&(n=_[a](o))),n}(e),L=!!O||!p,P={closeToast:g,type:h,theme:I},S=null;return!1===d||(S="function"==typeof d?d(P):(0,t.isValidElement)(d)?(0,t.cloneElement)(d,P):function({closeToast:e,theme:a,ariaLabel:s="close"}){return t.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${a}`,type:"button",onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":s},t.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},t.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(P)),t.default.createElement(y,{isIn:k,done:Q,position:v,preventExitTransition:i,nodeRef:n,playToast:r},t.default.createElement("div",{id:B,tabIndex:0,onClick:u,"data-in":k,className:D,...o,style:x,ref:n,...k&&{role:j,"aria-label":R}},null!=K&&t.default.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!C})},K),l(m,e,!s),S,!e.customProgressBar&&t.default.createElement(c,{...E&&!L?{key:`p-${E}`}:{},rtl:N,theme:I,delay:p,isRunning:s,isIn:k,closeToast:g,hide:A,type:h,className:w,controlledProgress:L,progress:O||0})))},N=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),B=o(N("bounce",!0));o(N("slide",!0)),o(N("zoom")),o(N("flip"));var Q={position:"top-right",transition:B,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&"KeyT"===e.code};function k(e){let o={...Q,...e},l=e.stacked,[c,d]=(0,t.useState)(!0),m=(0,t.useRef)(null),{getToastToRender:u,isToastActive:y,count:v}=function(e){var a;let o,{subscribe:l,getSnapshot:c,setProps:d}=(0,t.useRef)((o=e.containerId||1,{subscribe(t){let a,l,c,d,m,u,A,y,v,b,x,w=(a=1,l=0,c=[],d=[],m=e,u=new Map,A=new Set,y=()=>{d=Array.from(u.values()),A.forEach(e=>e())},v=e=>{var t,a;e.isActive&&(null==(a=null==(t=e.props)?void 0:t.onClose)||a.call(t,e.removalReason),e.isActive=!1,h(r(e,"removed")))},b=e=>{if(null==e)u.forEach(v);else{let t=u.get(e);t&&v(t)}y()},x=e=>{var t,a;let{toastId:s,updateId:i}=e.props,n=null==i;e.staleId&&u.delete(e.staleId),e.isActive=!0,u.set(s,e),y(),h(r(e,n?"added":"updated")),n&&(null==(a=(t=e.props).onOpen)||a.call(t))},{id:o,props:m,observe:e=>(A.add(e),()=>A.delete(e)),toggle:(e,t)=>{u.forEach(a=>{var s;(null==t||t===a.props.toastId)&&(null==(s=a.toggle)||s.call(a,e))})},removeToast:b,toasts:u,clearQueue:()=>{l-=c.length,c=[]},buildToast:(e,t)=>{let r,d;if((({containerId:e,toastId:t,updateId:a})=>{let s=u.has(t)&&null==a;return(e?e!==o:1!==o)||s})(t))return;let{toastId:f,updateId:p,data:h,staleId:A,delay:g}=t,v=null==p;v&&l++;let w={...m,style:m.toastStyle,key:a++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>null!=t)),toastId:f,updateId:p,data:h,isIn:!1,className:i(t.className||m.toastClassName),progressClassName:i(t.progressClassName||m.progressClassName),autoClose:!t.isLoading&&(r=t.autoClose,d=m.autoClose,!1===r||s(r)&&r>0?r:d),closeToast(e){let t=u.get(f);t&&(t.removalReason=e,b(f))},deleteToast(){if(null!=u.get(f)){if(u.delete(f),--l<0&&(l=0),c.length>0)return void x(c.shift());y()}}};w.closeButton=m.closeButton,!1===t.closeButton||n(t.closeButton)?w.closeButton=t.closeButton:!0===t.closeButton&&(w.closeButton=!n(m.closeButton)||m.closeButton);let E={content:e,props:w,staleId:A};m.limit&&m.limit>0&&l>m.limit&&v?c.push(E):s(g)?setTimeout(()=>{x(E)},g):x(E)},setProps(e){m=e},setToggle:(e,t)=>{let a=u.get(e);a&&(a.toggle=t)},isToastActive:e=>{var t;return null==(t=u.get(e))?void 0:t.isActive},getSnapshot:()=>d});f.set(o,w);let E=w.observe(t);return p.forEach(e=>g(e.content,e.options)),p=[],()=>{E(),f.delete(o)}},setProps(e){var t;null==(t=f.get(o))||t.setProps(e)},getSnapshot(){var e;return null==(e=f.get(o))?void 0:e.getSnapshot()}})).current;d(e);let m=null==(a=(0,t.useSyncExternalStore)(l,c,c))?void 0:a.slice();return{getToastToRender:function(t){if(!m)return[];let a=new Map;return e.newestOnTop&&m.reverse(),m.forEach(e=>{let{position:t}=e.props;a.has(t)||a.set(t,[]),a.get(t).push(e)}),Array.from(a,e=>t(e[0],e[1]))},isToastActive:A,count:null==m?void 0:m.length}}(o),{className:b,style:x,rtl:j,containerId:_,hotKeys:N}=o;function B(){l&&(d(!0),w.play())}return E(()=>{var e;if(l){let t=m.current.querySelectorAll('[data-in="true"]'),a=null==(e=o.position)?void 0:e.includes("top"),s=0,i=0;Array.from(t).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed=`${c}`),e.dataset.pos||(e.dataset.pos=a?"top":"bot");let n=s*(c?.2:1)+(c?0:12*t),o=Math.max(.5,1-(c?i:0));e.style.setProperty("--y",`${a?n:-1*n}px`),e.style.setProperty("--g","12"),e.style.setProperty("--s",`${o}`),s+=e.offsetHeight,i+=.025})}},[c,v,l]),(0,t.useEffect)(()=>{function e(e){var t;let a=m.current;N(e)&&(null==(t=null==a?void 0:a.querySelector('[tabIndex="0"]'))||t.focus(),d(!1),w.pause()),"Escape"===e.key&&(document.activeElement===a||null!=a&&a.contains(document.activeElement))&&(d(!0),w.play())}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[N]),t.default.createElement("section",{ref:m,className:"Toastify",id:_,onMouseEnter:()=>{l&&(d(!1),w.pause())},onMouseLeave:B,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":o["aria-label"]},u((e,s)=>{var n;let o,r=s.length?{...x}:{...x,pointerEvents:"none"};return t.default.createElement("div",{tabIndex:-1,className:(n=e,o=a("Toastify__toast-container",`Toastify__toast-container--${n}`,{"Toastify__toast-container--rtl":j}),"function"==typeof b?b({position:n,rtl:j,defaultClassName:o}):a(o,i(b))),"data-stacked":l,style:r,key:`c-${e}`},s.map(({content:e,props:a})=>t.default.createElement(O,{...a,stacked:l,collapseAll:B,isIn:y(a.toastId,a.containerId),key:`t-${a.key}`},e)))}))}var C=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,T=new Map;e.s(["ToastContainer",0,function(e){var a;return E(()=>{if(!C||"u"<typeof document)return;let e=document,t=T.get(e);if(t){a&&t.setAttribute("nonce",a);return}let s=e.createElement("style");s.textContent=C,a&&s.setAttribute("nonce",a),e.head.appendChild(s),T.set(e,s)},[a=e.nonce]),t.default.createElement(k,{...e})},"toast",0,w],70319)},18566,(e,t,a)=>{t.exports=e.r(76562)},52386,e=>{"use strict";var t=e.i(43476),a=e.i(22016);e.s(["default",0,()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"col-xl-2 col-lg-3 col-md-6 wow fadeInUp","data-wow-delay":".4s",children:(0,t.jsxs)("div",{className:"footer-widget-items",children:[(0,t.jsx)("div",{className:"widget-head",children:(0,t.jsx)("h3",{children:"Company"})}),(0,t.jsxs)("ul",{className:"list-area",children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/about",children:"About us"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/our-projects",children:"Our Portfolio"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/contact",children:"Contact"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/news",children:"News & Insights"})})]})]})}),(0,t.jsx)("div",{className:"col-xl-3 ps-lg-5 col-lg-4 col-md-6 wow fadeInUp","data-wow-delay":".6s",children:(0,t.jsxs)("div",{className:"footer-widget-items",children:[(0,t.jsx)("div",{className:"widget-head",children:(0,t.jsx)("h3",{children:"Recourse"})}),(0,t.jsxs)("ul",{className:"list-area",children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/service",children:"Software Solutions"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/digital-marketing",children:"Digital Marketing Solutions"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/news",children:"Blogs"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/service-details",children:"Service Details"})})]})]})})]})])},91147,e=>{e.q("/_next/static/media/setting.03p9u6.3uhyfz.png")},58724,e=>{e.q("/_next/static/media/01.0jb-e0ivoxxz2.svg")},14574,e=>{e.q("/_next/static/media/02.07vv3r-5tpede.svg")},655,e=>{e.q("/_next/static/media/03.0svf2zyg6yvnr.svg")},81364,e=>{e.q("/_next/static/media/04.0zldo7.ilg~9e.svg")},98445,e=>{e.q("/_next/static/media/05.0imtxn~u75ehd.svg")},2009,e=>{e.q("/_next/static/media/06.1181ec2.ju-p5.svg")},33227,e=>{e.q("/_next/static/media/07.0jgei89f~emre.svg")},81059,e=>{e.q("/_next/static/media/08.106qm~hhl6hqo.svg")},78625,e=>{e.q("/_next/static/media/01.0._yd1ujc.11w.jpg")},49380,e=>{e.q("/_next/static/media/02.02enofb~sqyyp.jpg")},11934,e=>{e.q("/_next/static/media/03.07b_08v7lonpm.jpg")},25130,e=>{e.q("/_next/static/media/04.179ujzbdllakw.jpg")},78710,e=>{e.q("/_next/static/media/01.0_b838n6~onnm.svg")},4034,e=>{e.q("/_next/static/media/02.0cv07nyeeq_cn.svg")},63201,e=>{e.q("/_next/static/media/03.02771qvg2n9hz.svg")},68824,e=>{e.q("/_next/static/media/04.0.3wezf4kzvbb.svg")},92123,e=>{"use strict";e.s(["default",0,[{id:1,page:"home_1",showAnswer:!1,title:"Do you develop both iOS and Android apps?",desc:"Yes, our app development team is highly skilled in building native applications for both iOS and Android platforms, as well as cross-platform solutions using frameworks like React Native and Flutter, ensuring a seamless experience across all devices.",data_delay:".3s"},{id:2,page:"home_1",showAnswer:!1,title:"How can digital marketing improve my online presence?",desc:"Digital marketing encompasses strategies like SEO, social media management, pay-per-click advertising, and content marketing. These tools help increase your brand's visibility, attract targeted traffic to your website, and ultimately drive conversions and revenue.",data_delay:".5s"},{id:3,page:"home_1",showAnswer:!1,title:"What is the typical timeline for developing a mobile app?",desc:"The timeline for developing a mobile app varies depending on its complexity, features, and platform. A simple app can take a few months, while more complex, feature-rich applications may take six months to a year. We provide a detailed project roadmap during our initial consultation.",data_delay:".7s"},{id:4,page:"home_1",showAnswer:!1,title:"How do you measure the success of a digital marketing campaign?",desc:"We track a variety of key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates, and return on investment (ROI). We provide regular, transparent reports so you can clearly see the impact and success of your campaigns.",data_delay:".3s"},{id:5,page:"home_1",showAnswer:!1,title:"Will my app be responsive and work on different screen sizes?",desc:"Absolutely. We employ responsive design principles to ensure your app looks and functions perfectly across a wide range of devices, from small smartphones to large tablets, providing a consistent user experience.",data_delay:".5s"}]])},16571,e=>{"use strict";var t=e.i(99946);e.s(["c",0,function(e,a,s,i){return e.params.createElements&&Object.keys(i).forEach(n=>{if(!s[n]&&!0===s.auto){let o=(0,t.e)(e.el,`.${i[n]}`)[0];o||((o=(0,t.c)("div",i[n])).className=i[n],e.el.append(o)),s[n]=o,a[n]=o}}),s}])},79053,e=>{"use strict";var t=e.i(16571),a=e.i(99946);let s='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';e.s(["Navigation",0,function({swiper:e,extendParams:i,on:n,emit:o}){function r(t){let a;return t&&"string"==typeof t&&e.isElement&&(a=e.el.querySelector(t)||e.hostEl.querySelector(t))?a:(t&&("string"==typeof t&&(a=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&a&&a.length>1&&1===e.el.querySelectorAll(t).length?a=e.el.querySelector(t):a&&1===a.length&&(a=a[0])),t&&!a)?t:a}function l(t,s){let i=e.params.navigation;(t=(0,a.m)(t)).forEach(t=>{t&&(t.classList[s?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=s),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass))})}function c(){let{nextEl:t,prevEl:a}=e.navigation;if(e.params.loop){l(a,!1),l(t,!1);return}l(a,e.isBeginning&&!e.params.rewind),l(t,e.isEnd&&!e.params.rewind)}function d(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function m(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function f(){let i=e.params.navigation;if(e.params.navigation=(0,t.c)(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(i.nextEl||i.prevEl))return;let n=r(i.nextEl),o=r(i.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:o}),n=(0,a.m)(n),o=(0,a.m)(o);let l=(t,n)=>{if(t){if(i.addIcons&&t.matches(".swiper-button-next,.swiper-button-prev")&&!t.querySelector("svg")){let e=document.createElement("div");(0,a.s)(e,s),t.appendChild(e.querySelector("svg")),e.remove()}t.addEventListener("click","next"===n?m:d)}!e.enabled&&t&&t.classList.add(...i.lockClass.split(" "))};n.forEach(e=>l(e,"next")),o.forEach(e=>l(e,"prev"))}function p(){let{nextEl:t,prevEl:s}=e.navigation;t=(0,a.m)(t),s=(0,a.m)(s);let i=(t,a)=>{t.removeEventListener("click","next"===a?m:d),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach(e=>i(e,"next")),s.forEach(e=>i(e,"prev"))}i({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:s},n("init",()=>{!1===e.params.navigation.enabled?u():(f(),c())}),n("toEdge fromEdge lock unlock",()=>{c()}),n("destroy",()=>{p()}),n("enable disable",()=>{let{nextEl:t,prevEl:s}=e.navigation;(t=(0,a.m)(t),s=(0,a.m)(s),e.enabled)?c():[...t,...s].filter(e=>!!e).forEach(t=>t.classList.add(e.params.navigation.lockClass))}),n("click",(t,s)=>{let{nextEl:i,prevEl:n}=e.navigation;i=(0,a.m)(i),n=(0,a.m)(n);let r=s.target,l=n.includes(r)||i.includes(r);if(e.isElement&&!l){let e=s.path||s.composedPath&&s.composedPath();e&&(l=e.find(e=>i.includes(e)||n.includes(e)))}if(e.params.navigation.hideOnClick&&!l){let t;if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;i.length?t=i[0].classList.contains(e.params.navigation.hiddenClass):n.length&&(t=n[0].classList.contains(e.params.navigation.hiddenClass)),!0===t?o("navigationShow"):o("navigationHide"),[...i,...n].filter(e=>!!e).forEach(t=>t.classList.toggle(e.params.navigation.hiddenClass))}});let u=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),c()},disable:u,update:c,init:f,destroy:p})}],79053)},22989,e=>{"use strict";e.s(["c",0,function(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}])},86301,e=>{"use strict";var t=e.i(22989),a=e.i(16571),s=e.i(99946);e.s(["Pagination",0,function({swiper:e,extendParams:i,on:n,emit:o}){let r,l="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let c=0;function d(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function m(t,a){let{bulletActiveClass:s}=e.params.pagination;t&&(t=t[`${"prev"===a?"previous":"next"}ElementSibling`])&&(t.classList.add(`${s}-${a}`),(t=t[`${"prev"===a?"previous":"next"}ElementSibling`])&&t.classList.add(`${s}-${a}-${a}`))}function f(a){let i=a.target.closest((0,t.c)(e.params.pagination.bulletClass));if(!i)return;a.preventDefault();let n=(0,s.j)(i)*e.params.slidesPerGroup;if(e.params.loop){var o,r,l;if(e.realIndex===n)return;let t=(o=e.realIndex,r=n,(o%=l=e.slides.length,(r%=l)===o+1)?"next":r===o-1?"previous":void 0);"next"===t?e.slideNext():"previous"===t?e.slidePrev():e.slideToLoop(n)}else e.slideTo(n)}function p(){let a,i,n=e.rtl,l=e.params.pagination;if(d())return;let f=e.pagination.el;f=(0,s.m)(f);let p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,u=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(i=e.previousRealIndex||0,a=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):void 0!==e.snapIndex?(a=e.snapIndex,i=e.previousSnapIndex):(i=e.previousIndex||0,a=e.activeIndex||0),"bullets"===l.type&&e.pagination.bullets&&e.pagination.bullets.length>0){let t,o,d,p=e.pagination.bullets;if(l.dynamicBullets&&(r=(0,s.i)(p[0],e.isHorizontal()?"width":"height",!0),f.forEach(t=>{t.style[e.isHorizontal()?"width":"height"]=`${r*(l.dynamicMainBullets+4)}px`}),l.dynamicMainBullets>1&&void 0!==i&&((c+=a-(i||0))>l.dynamicMainBullets-1?c=l.dynamicMainBullets-1:c<0&&(c=0)),d=((o=(t=Math.max(a-c,0))+(Math.min(p.length,l.dynamicMainBullets)-1))+t)/2),p.forEach(e=>{let t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${l.bulletActiveClass}${e}`)].map(e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e).flat();e.classList.remove(...t)}),f.length>1)p.forEach(i=>{let n=(0,s.j)(i);n===a?i.classList.add(...l.bulletActiveClass.split(" ")):e.isElement&&i.setAttribute("part","bullet"),l.dynamicBullets&&(n>=t&&n<=o&&i.classList.add(...`${l.bulletActiveClass}-main`.split(" ")),n===t&&m(i,"prev"),n===o&&m(i,"next"))});else{let s=p[a];if(s&&s.classList.add(...l.bulletActiveClass.split(" ")),e.isElement&&p.forEach((e,t)=>{e.setAttribute("part",t===a?"bullet-active":"bullet")}),l.dynamicBullets){let e=p[t],a=p[o];for(let e=t;e<=o;e+=1)p[e]&&p[e].classList.add(...`${l.bulletActiveClass}-main`.split(" "));m(e,"prev"),m(a,"next")}}if(l.dynamicBullets){let t=Math.min(p.length,l.dynamicMainBullets+4),a=(r*t-r)/2-d*r,s=n?"right":"left";p.forEach(t=>{t.style[e.isHorizontal()?s:"top"]=`${a}px`})}}f.forEach((i,n)=>{if("fraction"===l.type&&(i.querySelectorAll((0,t.c)(l.currentClass)).forEach(e=>{e.textContent=l.formatFractionCurrent(a+1)}),i.querySelectorAll((0,t.c)(l.totalClass)).forEach(e=>{e.textContent=l.formatFractionTotal(u)})),"progressbar"===l.type){let s;s=l.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";let n=(a+1)/u,o=1,r=1;"horizontal"===s?o=n:r=n,i.querySelectorAll((0,t.c)(l.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${r})`,t.style.transitionDuration=`${e.params.speed}ms`})}"custom"===l.type&&l.renderCustom?((0,s.s)(i,l.renderCustom(e,a+1,u)),0===n&&o("paginationRender",i)):(0===n&&o("paginationRender",i),o("paginationUpdate",i)),e.params.watchOverflow&&e.enabled&&i.classList[e.isLocked?"add":"remove"](l.lockClass)})}function u(){let a=e.params.pagination;if(d())return;let i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,n=e.pagination.el;n=(0,s.m)(n);let r="";if("bullets"===a.type){let t=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&t>i&&(t=i);for(let s=0;s<t;s+=1)a.renderBullet?r+=a.renderBullet.call(e,s,a.bulletClass):r+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}"fraction"===a.type&&(r=a.renderFraction?a.renderFraction.call(e,a.currentClass,a.totalClass):`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),"progressbar"===a.type&&(r=a.renderProgressbar?a.renderProgressbar.call(e,a.progressbarFillClass):`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],n.forEach(i=>{"custom"!==a.type&&(0,s.s)(i,r||""),"bullets"===a.type&&e.pagination.bullets.push(...i.querySelectorAll((0,t.c)(a.bulletClass)))}),"custom"!==a.type&&o("paginationRender",n[0])}function h(){let t;e.params.pagination=(0,a.c)(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let i=e.params.pagination;!i.el||("string"==typeof i.el&&e.isElement&&(t=e.el.querySelector(i.el)),t||"string"!=typeof i.el||(t=[...document.querySelectorAll(i.el)]),t||(t=i.el),t&&0!==t.length&&(e.params.uniqueNavElements&&"string"==typeof i.el&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(i.el)]).length>1&&(t=t.find(t=>(0,s.d)(t,".swiper")[0]===e.el)),Array.isArray(t)&&1===t.length&&(t=t[0]),Object.assign(e.pagination,{el:t}),(t=(0,s.m)(t)).forEach(t=>{"bullets"===i.type&&i.clickable&&t.classList.add(...(i.clickableClass||"").split(" ")),t.classList.add(i.modifierClass+i.type),t.classList.add(e.isHorizontal()?i.horizontalClass:i.verticalClass),"bullets"===i.type&&i.dynamicBullets&&(t.classList.add(`${i.modifierClass}${i.type}-dynamic`),c=0,i.dynamicMainBullets<1&&(i.dynamicMainBullets=1)),"progressbar"===i.type&&i.progressbarOpposite&&t.classList.add(i.progressbarOppositeClass),i.clickable&&t.addEventListener("click",f),e.enabled||t.classList.add(i.lockClass)})))}function A(){let t=e.params.pagination;if(d())return;let a=e.pagination.el;a&&(a=(0,s.m)(a)).forEach(a=>{a.classList.remove(t.hiddenClass),a.classList.remove(t.modifierClass+t.type),a.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(a.classList.remove(...(t.clickableClass||"").split(" ")),a.removeEventListener("click",f))}),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;let t=e.params.pagination,{el:a}=e.pagination;(a=(0,s.m)(a)).forEach(a=>{a.classList.remove(t.horizontalClass,t.verticalClass),a.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n("init",()=>{!1===e.params.pagination.enabled?g():(h(),u(),p())}),n("activeIndexChange",()=>{void 0===e.snapIndex&&p()}),n("snapIndexChange",()=>{p()}),n("snapGridLengthChange",()=>{u(),p()}),n("destroy",()=>{A()}),n("enable disable",()=>{let{el:t}=e.pagination;t&&(t=(0,s.m)(t)).forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass))}),n("lock unlock",()=>{p()}),n("click",(t,a)=>{let i=a.target,n=(0,s.m)(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&n&&n.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;!0===n[0].classList.contains(e.params.pagination.hiddenClass)?o("paginationShow"):o("paginationHide"),n.forEach(t=>t.classList.toggle(e.params.pagination.hiddenClass))}});let g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=(0,s.m)(t)).forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass)),A()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=(0,s.m)(t)).forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass)),h(),u(),p()},disable:g,render:u,update:p,init:h,destroy:A})}],86301)},42849,e=>{"use strict";var t=e.i(43476),a=e.i(57688);let s={src:e.i(91147).default,width:16,height:16,blurWidth:8,blurHeight:8,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsUlEQVR42k1PMQrCQBCcCAcmQUUtoijEJ1hZpLCy0//4AeHsLGwO/IFBrrQTP6JFtMgH0mcGrkhgYTI7c7MD00OUxxhtp5h9drBfDvF8FWNoIgB5gvGrwIXLsjmg4vyJ/bvAicYBqF6SeHJR+w2uHCdM7qFXQXCWS4tFH6lGQnI/RUpg9SOyI3AhyiIcV4YIF9yK8DoWE4P0tsaRxF2uZo9KWEeqCfRRlFCddWpmaqCaLdN7TLqFVNeGAAAAAElFTkSuQmCC"};e.s(["default",0,()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.default,{src:s,alt:"img"})})],42849)},90183,e=>{"use strict";var t=e.i(47167),a=e.i(43476),s=e.i(71645),i=e.i(70319);e.s(["default",0,()=>{let[e,n]=(0,s.useState)({}),[o,r]=(0,s.useState)({firstName:"",lastName:"",email:"",phone:"",message:""}),[l,c]=(0,s.useState)(!1),d=e=>n(t=>({...t,[e]:!0})),m=e=>n(t=>({...t,[e]:!1})),f=(e,t)=>{r(a=>({...a,[t]:e.target.value}))},p=t=>e[t]||o[t]&&o[t].length>0,u=async e=>{e.preventDefault();let{firstName:a,lastName:s,email:n,phone:l,message:d}=o;if(!a.trim()||!s.trim()||!n.trim()||!l.trim()||!d.trim())return void i.toast.error("All fields are required.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim()))return void i.toast.error("Please enter a valid email address.");c(!0);try{let e,a=t.default.env.NEXT_PUBLIC_API_URL||"https://ids-web-three.vercel.app/php-backend",s=`${a}/submit.php`,n=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),l=n.headers.get("content-type");if(l&&-1!==l.indexOf("application/json"))e=await n.json();else{let e=await n.text();throw console.error("Non-JSON response from server:",e),Error(`Server returned a non-JSON response (${n.status})`)}n.ok&&"success"===e.status?(i.toast.success("Your message has been sent successfully!"),r({firstName:"",lastName:"",email:"",phone:"",message:""})):i.toast.error(e.message||"Failed to send message. Please try again.")}catch(e){console.error("Contact Form Submission Error:",e),i.toast.error("A network error occurred. Please check your connection.")}finally{c(!1)}};return(0,a.jsxs)("div",{className:"classic-form-card",children:[(0,a.jsx)("h3",{className:"form-title",children:"Send a Message"}),(0,a.jsx)("form",{onSubmit:u,id:"contact-form",children:(0,a.jsxs)("div",{className:"row g-4",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:`classic-input-group ${p("firstName")?"floated":""}`,children:[(0,a.jsx)("input",{type:"text",className:"classic-input",value:o.firstName,onFocus:()=>d("firstName"),onBlur:()=>m("firstName"),onChange:e=>f(e,"firstName"),disabled:l}),(0,a.jsx)("label",{className:"classic-label",children:"First Name*"})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:`classic-input-group ${p("lastName")?"floated":""}`,children:[(0,a.jsx)("input",{type:"text",className:"classic-input",value:o.lastName,onFocus:()=>d("lastName"),onBlur:()=>m("lastName"),onChange:e=>f(e,"lastName"),disabled:l}),(0,a.jsx)("label",{className:"classic-label",children:"Last Name*"})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:`classic-input-group ${p("email")?"floated":""}`,children:[(0,a.jsx)("input",{type:"email",className:"classic-input",value:o.email,onFocus:()=>d("email"),onBlur:()=>m("email"),onChange:e=>f(e,"email"),disabled:l}),(0,a.jsx)("label",{className:"classic-label",children:"Email Address*"})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:`classic-input-group ${p("phone")?"floated":""}`,children:[(0,a.jsx)("input",{type:"tel",className:"classic-input",value:o.phone,onFocus:()=>d("phone"),onBlur:()=>m("phone"),onChange:e=>f(e,"phone"),disabled:l}),(0,a.jsx)("label",{className:"classic-label",children:"Phone Number*"})]})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:`classic-input-group ${p("message")?"floated":""}`,children:[(0,a.jsx)("textarea",{className:"classic-input",value:o.message,onFocus:()=>d("message"),onBlur:()=>m("message"),onChange:e=>f(e,"message"),disabled:l}),(0,a.jsx)("label",{className:"classic-label",children:"Write your message*"})]})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("button",{type:"submit",className:"classic-btn",disabled:l,children:[l?"Sending...":"Send message"," ",(0,a.jsx)("i",{className:"fa-regular fa-arrow-up-right"})]})})]})})]})}])},89252,e=>{e.q("/_next/static/media/pricing-bg.00m1tg0l1tilm.jpg")},97497,e=>{e.q("/_next/static/media/testimonial.0_a7kq7k~f.j-.jpg")},42848,e=>{e.q("/_next/static/media/07.0umw.7~o6txr9.jpg")},86024,e=>{e.q("/_next/static/media/08.0hm-ta~j7q60n.jpg")},45693,e=>{e.q("/_next/static/media/09.0jdps7b_n4dam.jpg")},94622,e=>{e.q("/_next/static/media/10.0~qcwd2nwls-q.jpg")},24044,e=>{e.q("/_next/static/media/footer-bg.00xxft4x85azm.png")},70054,e=>{e.q("/_next/static/media/client-1.0t6cjhmflp3xr.jpg")},21589,e=>{e.q("/_next/static/media/client.0t.dbjkgp-bkq.jpg")},94026,8235,e=>{"use strict";let t={src:e.i(70054).default,width:64,height:64,blurWidth:8,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDCKyatoXl2ds0EpcgCQgZ9a4owalZ6nbKadPQ//9k="};e.s(["default",0,t],94026);let a={src:e.i(21589).default,width:64,height:64,blurWidth:8,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCR9em/teYrMfs5IiK7+Npj/u/73euOrTc6baO6m1GST3P/2Q=="};e.s(["default",0,a],8235)},50049,e=>{"use strict";var t=e.i(43476),a=e.i(42849),s=e.i(92123),i=e.i(22016),n=e.i(71645);e.s(["default",0,({style:e})=>{let[o,r]=(0,n.useState)([]);return(0,n.useEffect)(()=>{r(s.default.filter(e=>"home_1"===e.page).map((e,t)=>({...e,showAnswer:0===t})))},[]),(0,t.jsx)("section",{className:`faq-section fix ${e?"section-padding":""}`,children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"faq-wrapper-3",children:(0,t.jsxs)("div",{className:"row g-4",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"faq-content",children:[(0,t.jsxs)("div",{className:"section-title mb-0",children:[(0,t.jsxs)("span",{className:"sub-title wow fadeInUp",children:[(0,t.jsx)(a.default,{}),"Our Faq"]}),(0,t.jsx)("h2",{className:"text-anim",children:"FAQ"})]}),(0,t.jsx)("p",{className:"text wow fadeInUp","data-wow-delay":".3s",children:"We are a results-driven IT consulting team helping businesses unlock efficiency."}),(0,t.jsxs)(i.default,{href:"/contact",className:"link-btn wow fadeInUp","data-wow-delay":".5s",children:["Contact us",(0,t.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})]})}),(0,t.jsx)("div",{className:"col-lg-8",children:(0,t.jsx)("div",{className:"faq-items-3",children:(0,t.jsx)("div",{className:"accordion",id:"accordionExample",children:o.map(e=>(0,t.jsxs)("div",{className:"accordion-item wow fadeInUp","data-wow-delay":e.data_delay,children:[(0,t.jsx)("h2",{className:"accordion-header",onClick:()=>{var t;return t=e.id,void r(e=>e.map(e=>({...e,showAnswer:e.id===t})))},children:(0,t.jsxs)("button",{className:`accordion-button ${e.showAnswer?"":"collapsed"} `,type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapseOne-${e.id}`,"aria-expanded":"false","aria-controls":`collapseOne-${e.id}`,children:[e.id,e.title,(0,t.jsx)("span",{className:"plus-icon"})]})}),(0,t.jsx)("div",{id:`collapseOne-${e.id}`,className:`accordion-collapse collapse ${e.showAnswer?"show":""}`,children:(0,t.jsx)("div",{className:"accordion-body",children:(0,t.jsx)("p",{children:e.desc})})})]},e.id))})})})]})})})})}])},1987,e=>{"use strict";let t={src:e.i(58724).default,width:36,height:36,blurWidth:0,blurHeight:0},a={src:e.i(14574).default,width:34,height:34,blurWidth:0,blurHeight:0},s={src:e.i(655).default,width:34,height:34,blurWidth:0,blurHeight:0},i={src:e.i(81364).default,width:34,height:34,blurWidth:0,blurHeight:0},n={src:e.i(98445).default,width:32,height:32,blurWidth:0,blurHeight:0},o={src:e.i(2009).default,width:52,height:52,blurWidth:0,blurHeight:0},r={src:e.i(33227).default,width:52,height:52,blurWidth:0,blurHeight:0},l={src:e.i(81059).default,width:52,height:52,blurWidth:0,blurHeight:0},c={src:e.i(78625).default,width:360,height:245,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhbrUJLm2kLoA/VnHVvSuyKUaaSKrNzqynLU//2Q=="},d={src:e.i(49380).default,width:360,height:245,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjNOaNkm86COY7ScsOev6VNNa+RjjKj5dNGf/Z"},m={src:e.i(11934).default,width:360,height:245,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDj7bWJLTT3sUiQtKcmc/fA9K3hfc78RCPwvfuf/9k="},f={src:e.i(25130).default,width:421,height:287,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzmz1Z4tKMfkRMOnIrgqUFKpe5ySp3k9T/2Q=="},p={src:e.i(78710).default,width:42,height:42,blurWidth:0,blurHeight:0},u={src:e.i(4034).default,width:42,height:42,blurWidth:0,blurHeight:0},h={src:e.i(63201).default,width:42,height:42,blurWidth:0,blurHeight:0},A={src:e.i(68824).default,width:42,height:42,blurWidth:0,blurHeight:0};e.s(["default",0,[{id:1,page:"home_1",icon:a,title:"Custom Application Development",desc:"We build robust, scalable custom applications tailored to your specific business needs using cutting-edge technologies."},{id:2,page:"home_1",icon:t,title:"AI Product Engineering",desc:"Transform your AI concepts into powerful, production-ready applications. From custom LLM integrations and intelligent chatbots to predictive analytics and computer vision solutions."},{id:3,page:"home_1",icon:s,title:"Android & iOS App Development",desc:"Leverage the power of mobile with our expert Android and iOS app development services. We create seamless, high-performance applications for both platforms."},{id:4,page:"home_1",icon:i,title:"Technology Consulting",desc:"Leverage our technology consulting services to make informed decisions about your tech strategy. We provide expert guidance to optimize your technology stack and drive business transformation."},{id:5,page:"home_1",icon:n,title:"UI/UX Design",desc:"Transform your ideas into intuitive and visually captivating digital experiences with our UI/UX design services. We specialize in creating user-centric designs that enhance engagement and drive business goals."},{id:6,page:"home_1",icon:s,title:"Social Media Marketing",desc:"Connect with your audience and build meaningful engagement through our comprehensive social media marketing strategies. We create compelling content that drives interaction and growth."},{id:7,page:"home_1",icon:i,title:"Our Digital Platforms",desc:"Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting."},{id:1,page:"home_2",icon:o,title:"Business solutions",desc:"We provid reliable solutions designed help modern businesses thrive."},{id:2,page:"home_2",icon:r,title:"digital solutions",desc:"We provid reliable solutions designed help modern businesses thrive."},{id:3,page:"home_2",icon:l,title:"24/7 Support",desc:"We provid reliable solutions designed help modern businesses thrive."},{id:1,page:"home_3",icon:c,title:"Digital cyber security",desc:"Businesses to thrive in changing digital world. With over a decade systems."},{id:2,page:"home_3",icon:d,title:"Future AI innovations",desc:"Businesses to thrive in changing digital world. With over a decade systems."},{id:3,page:"home_3",icon:m,title:"Smart tech solutions",desc:"Businesses to thrive in changing digital world. With over a decade systems."},{id:4,page:"home_3",icon:f,title:"Threat Protection",desc:"Businesses to thrive in changing digital world. With over a decade systems."},{id:5,page:"home_3",icon:m,title:"Smart tech solutions",desc:"Businesses to thrive in changing digital world. With over a decade systems."},{id:1,page:"home3_2",icon:p,title:"Threat detection",desc:"Early identification of suspicious activities across your system. Our intelligent monitoring engine constantly scans networks and endpoints to detect malware."},{id:2,page:"home3_2",icon:u,title:"Data encryption",desc:"Protect sensitive data with enterprise-grade encryption. We secure every file, transaction, and communication channel so your information stays unreadable."},{id:3,page:"home3_2",icon:h,title:"Vulnerability management",desc:"Stay ahead of cyber risks with automated vulnerability scanning and patching. We identify system weaknesses, outdated software, and potential."},{id:4,page:"home3_2",icon:A,title:"Access control",desc:"Define who gets access to what—with precision. Our advanced access control system uses multi-factor authentication, role-based permissions, and continuous."}]],1987)},72288,e=>{"use strict";e.s(["default",0,[{id:1,page:"home_2",pricing_details:[{id:1,title:"Starter",price:"29",desc:"For businesses ready to level up their digital presence with a professional.",features:["Basic IT support","Uptime monitoring"," Email priority help","Small fixes included","Team Q&A session"]},{id:2,title:"Essential",price:"799",desc:"For businesses ready to level up their digital presence with a professional.",features:["Basic IT support","Uptime monitoring"," Email priority help","Small fixes included","Team Q&A session"]},{id:3,title:"Basic",price:"2,800",desc:"For businesses ready to level up their digital presence with a professional.",features:["Basic IT support","Uptime monitoring"," Email priority help","Small fixes included","Team Q&A session"]}]},{id:2,page:"home_2",pricing_details:[{id:1,title:"Starter",price:"39",desc:"For businesses ready to level up their digital presence with a professional.",features:["Basic IT support","Uptime monitoring"," Email priority help","Small fixes included","Team Q&A session"]},{id:2,title:"Essential",price:"850",desc:"For businesses ready to level up their digital presence with a professional.",features:["Basic IT support","Uptime monitoring"," Email priority help","Small fixes included","Team Q&A session"]},{id:3,title:"Basic",price:"3,850",desc:"For businesses ready to level up their digital presence with a professional.",features:["Basic IT support","Uptime monitoring"," Email priority help","Small fixes included","Team Q&A session"]}]}]])},7071,e=>{"use strict";var t=e.i(43476),a=e.i(80401),s=e.i(72225),i=e.i(79053),n=e.i(86301),o=e.i(57688),r=e.i(42849),l=e.i(94026),c=e.i(8235);let d=[{id:1,client:l.default,desc:"“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",client_name:"Dianne Russell",designation:"Brand Manager"},{id:2,client:c.default,desc:"“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",client_name:"Darlene Robertson",designation:"Brand Manager"},{id:3,client:l.default,desc:"“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",client_name:"Dianne Russell",designation:"Brand Manager"},{id:4,client:c.default,desc:"“Your work shows clear effort, thoughtful structure, and strong attention to detail. The overall presentation feels polished, but tightening consistency and enhancing clarity could make it even stronger. With a few refinements, the final result will be more impactful and professional.”",client_name:"Darlene Robertson",designation:"Brand Manager"}],m={spaceBetween:30,speed:1300,loop:!0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".array-next",prevEl:".array-prev"},pagination:{el:".dot",clickable:!0},breakpoints:{1199:{slidesPerView:1},991:{slidesPerView:1},767:{slidesPerView:1},575:{slidesPerView:1},0:{slidesPerView:1}}};e.s(["default",0,()=>(0,t.jsxs)("section",{className:"testimonial-section-2 section-padding fix",children:[(0,t.jsxs)("div",{className:"array-button",children:[(0,t.jsx)("button",{className:"array-prev",children:(0,t.jsx)("i",{className:"fa-solid fa-chevron-left"})}),(0,t.jsx)("button",{className:"array-next",children:(0,t.jsx)("i",{className:"fa-solid fa-chevron-right"})})]}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-title text-center",children:[(0,t.jsxs)("span",{className:"sub-title wow fadeInUp",children:[(0,t.jsx)(r.default,{}),"Customer Feedbacks"]}),(0,t.jsx)("h2",{className:"text-anim",children:"Hear from Our Happy Customers"})]}),(0,t.jsxs)("div",{className:"row justify-content-center",children:[(0,t.jsx)("div",{className:"col-xl-10",children:(0,t.jsx)(a.Swiper,{...m,modules:[s.Autoplay,i.Navigation,n.Pagination],className:"swiper testimonial-slider-2",children:d.map(e=>(0,t.jsx)(a.SwiperSlide,{className:"swiper-slide",children:(0,t.jsxs)("div",{className:"testimonial-content",children:[(0,t.jsxs)("div",{className:"star",children:[(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-sharp fa-solid fa-star-half-stroke"})]}),(0,t.jsx)("p",{children:e.desc}),(0,t.jsx)("div",{className:"client-image",children:(0,t.jsx)(o.default,{src:e.client,alt:"img"})}),(0,t.jsx)("h4",{children:e.client_name}),(0,t.jsx)("span",{children:e.designation})]})},e.id))})}),(0,t.jsx)("div",{className:"swiper-dot",children:(0,t.jsx)("div",{className:"dot"})})]})]})]}),"testi_data",0,d])},22998,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0});var s=e.r(71645),i=s&&"object"==typeof s&&"default"in s?s:{default:s};!function(e){if(!e||"u"<typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'),a.default=s.forwardRef(function({style:e={},className:t="",autoFill:a=!1,play:n=!0,pauseOnHover:o=!1,pauseOnClick:r=!1,direction:l="left",speed:c=50,delay:d=0,loop:m=0,gradient:f=!1,gradientColor:p="white",gradientWidth:u=200,onFinish:h,onCycleComplete:A,onMount:g,children:y},v){let[b,x]=s.useState(0),[w,E]=s.useState(0),[j,_]=s.useState(1),[O,N]=s.useState(!1),B=s.useRef(null),Q=v||B,k=s.useRef(null),C=s.useCallback(()=>{if(k.current&&Q.current){let e=Q.current.getBoundingClientRect(),t=k.current.getBoundingClientRect(),s=e.width,i=t.width;("up"===l||"down"===l)&&(s=e.height,i=t.height),a&&s&&i?_(i<s?Math.ceil(s/i):1):_(1),x(s),E(i)}},[a,Q,l]);s.useEffect(()=>{if(O&&(C(),k.current&&Q.current)){let e=new ResizeObserver(()=>C());return e.observe(Q.current),e.observe(k.current),()=>{e&&e.disconnect()}}},[C,Q,O]),s.useEffect(()=>{C()},[C,y]),s.useEffect(()=>{N(!0)},[]),s.useEffect(()=>{"function"==typeof g&&g()},[]);let T=s.useMemo(()=>a?w*j/c:w<b?b/c:w/c,[a,b,w,j,c]),I=s.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!n||o?"paused":"running","--pause-on-click":!n||o&&!r||r?"paused":"running","--width":"up"===l||"down"===l?"100vh":"100%","--transform":"up"===l?"rotate(-90deg)":"down"===l?"rotate(90deg)":"none"}),[e,n,o,r,l]),R=s.useMemo(()=>({"--gradient-color":p,"--gradient-width":"number"==typeof u?`${u}px`:u}),[p,u]),z=s.useMemo(()=>({"--play":n?"running":"paused","--direction":"left"===l?"normal":"reverse","--duration":`${T}s`,"--delay":`${d}s`,"--iteration-count":m?`${m}`:"infinite","--min-width":a?"auto":"100%"}),[n,l,T,d,m,a]),D=s.useMemo(()=>({"--transform":"up"===l?"rotate(90deg)":"down"===l?"rotate(-90deg)":"none"}),[l]),K=s.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(s.Fragment,{key:t},s.Children.map(y,e=>i.default.createElement("div",{style:D,className:"rfm-child"},e)))),[D,y]);return O?i.default.createElement("div",{ref:Q,style:I,className:"rfm-marquee-container "+t},f&&i.default.createElement("div",{style:R,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:A,onAnimationEnd:h},i.default.createElement("div",{className:"rfm-initial-child-container",ref:k},s.Children.map(y,e=>i.default.createElement("div",{style:D,className:"rfm-child"},e))),K(j-1)),i.default.createElement("div",{className:"rfm-marquee",style:z},K(j))):null})},12568,e=>{"use strict";var t=e.i(43476),a=e.i(80401),s=e.i(72225),i=e.i(79053),n=e.i(86301),o=e.i(42849),r=e.i(1987),l=e.i(57688),c=e.i(22016);let d={spaceBetween:30,speed:1300,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".array-next",prevEl:".array-prev"},pagination:{el:".dot",clickable:!0},breakpoints:{1399:{slidesPerView:4},1199:{slidesPerView:3},991:{slidesPerView:3},767:{slidesPerView:2},575:{slidesPerView:1},0:{slidesPerView:1}}};e.s(["default",0,()=>(0,t.jsxs)("section",{className:"service-section-3 section-padding fix",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"section-title-area",children:[(0,t.jsxs)("div",{className:"section-title",children:[(0,t.jsxs)("span",{className:"sub-title wow fadeInUp",children:[(0,t.jsx)(o.default,{}),"Our Services"]}),(0,t.jsxs)("h2",{className:"text-anim",children:["Transforming Ideas Into ",(0,t.jsx)("br",{})," Digital Solutions"]})]}),(0,t.jsxs)("p",{className:"text-anims",children:["Businesses to thrive in changing digital ",(0,t.jsx)("br",{})," world. With over a decade."]}),(0,t.jsxs)("div",{className:"array-button text-anims",children:[(0,t.jsx)("button",{className:"array-prev",children:(0,t.jsx)("i",{className:"fa-solid fa-chevron-left"})}),(0,t.jsx)("button",{className:"array-next",children:(0,t.jsx)("i",{className:"fa-solid fa-chevron-right"})})]})]})}),(0,t.jsxs)(a.Swiper,{...d,modules:[s.Autoplay,n.Pagination,i.Navigation],className:"swiper service-slider-3",children:[r.default.filter(e=>"home_3"===e.page).map(e=>(0,t.jsx)(a.SwiperSlide,{className:"swiper-slide",children:(0,t.jsxs)("div",{className:"service-card-items-3",children:[(0,t.jsx)("div",{className:"service-image",children:(0,t.jsx)(l.default,{src:e.icon,alt:"img"})}),(0,t.jsxs)("div",{className:"service-content",children:[(0,t.jsx)("h3",{children:(0,t.jsx)(c.default,{href:"/service-details",children:e.title})}),(0,t.jsx)("p",{children:e.desc}),(0,t.jsxs)(c.default,{href:"/service-details",className:"theme-btn",children:["Learn more ",(0,t.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})]})]})},e.id)),(0,t.jsx)("div",{className:"swiper-dot",children:(0,t.jsx)("div",{className:"dot"})})]})]})])},33143,e=>{"use strict";var t=e.i(43476),a=e.i(42849),s=e.i(71645),i=e.i(72288),n=e.i(22016);let o={src:e.i(89252).default,width:1860,height:1069,blurWidth:8,blurHeight:5,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDx0H5elTY06H//2Q=="},r=["Monthly","yearly"];e.s(["default",0,()=>{let[e,l]=(0,s.useState)(0);return(0,t.jsx)("section",{className:"pricing-section-3 section-padding fix bg-cover",style:{backgroundImage:`url(${o.src})`},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-title text-center",children:[(0,t.jsxs)("span",{className:"sub-title text-white style-2 wow fadeInUp",children:[(0,t.jsx)(a.default,{}),"Pricing Plan"]}),(0,t.jsx)("h2",{className:"text-white text-anim",children:"Our Flexible Pricing Plan"})]}),(0,t.jsx)("div",{className:"nav-top",children:(0,t.jsx)("ul",{className:"nav wow fadeInUp","data-wow-delay":".3s",children:r.map((a,s)=>(0,t.jsx)("li",{className:"nav-item",role:"presentation",children:(0,t.jsx)("button",{onClick:()=>{l(s)},className:`nav-link ${e===s?"active":""}`,children:a})},s))})}),(0,t.jsx)("div",{className:"tab-content",children:i.default.filter(e=>"home_2"===e.page).map((a,s)=>(0,t.jsx)("div",{id:"mounth",className:`tab-pane fade ${e===s?"show active":""}`,children:(0,t.jsx)("div",{className:"row",children:a.pricing_details.map(e=>(0,t.jsx)("div",{className:"col-xl-4 col-lg-6 col-md-6",children:(0,t.jsxs)("div",{className:"pricing-card-items-3",children:[(0,t.jsx)("div",{className:"nexella-hover-bx hover-bx"}),(0,t.jsx)("div",{className:"nexella-hover-bx hover-bx2"}),(0,t.jsx)("div",{className:"nexella-hover-bx hover-bx3"}),(0,t.jsx)("div",{className:"nexella-hover-bx hover-bx4"}),(0,t.jsxs)("div",{className:"pricing-header",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsxs)("h3",{children:["$",e.price,(0,t.jsx)("sub",{children:"/months"})]}),(0,t.jsx)("p",{children:e.desc})]}),(0,t.jsx)("ul",{className:"pricing-list",children:e.features.map((e,a)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"fa-solid fa-arrow-up-right"}),e]},a))}),(0,t.jsxs)(n.default,{href:"/pricing",className:"theme-btn",children:["Get started today ",(0,t.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})]})},e.id))})},a.id))})]})})}],33143)},99520,e=>{"use strict";var t=e.i(43476),a=e.i(80401),s=e.i(72225),i=e.i(79053),n=e.i(86301),o=e.i(57688),r=e.i(42849),l=e.i(7071);let c={src:e.i(97497).default,width:649,height:505,blurWidth:8,blurHeight:6,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkINYS3nhBhDQzKVZVAU9Pb6VzuElFyTPRVSEpqDV07H//2Q=="},d={spaceBetween:30,speed:1300,loop:!0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".array-next",prevEl:".array-prev"},pagination:{el:".dot",clickable:!0},breakpoints:{1199:{slidesPerView:1},991:{slidesPerView:1},767:{slidesPerView:1},575:{slidesPerView:1},0:{slidesPerView:1}}};e.s(["default",0,()=>(0,t.jsx)("section",{className:"testimonial-section-3 section-padding fix",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-title text-center",children:[(0,t.jsxs)("span",{className:"sub-title wow fadeInUp",children:[(0,t.jsx)(r.default,{}),"CLIETS TESTIMONIALS"]}),(0,t.jsxs)("h2",{className:"text-anim",children:["Building Strong Relationships ",(0,t.jsx)("br",{})," Through Results"]})]}),(0,t.jsx)("div",{className:"testimonial-wrapper-3",children:(0,t.jsxs)("div",{className:"row g-4",children:[(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("div",{className:"testimonial-thumb",children:(0,t.jsx)(o.default,{"data-speed":".8",src:c,alt:"img"})})}),(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("div",{className:"testimonial-box-3",children:(0,t.jsxs)(a.Swiper,{...d,modules:[s.Autoplay,i.Navigation,n.Pagination],className:"swiper testimonial-slider-2",children:[l.testi_data.map(e=>(0,t.jsx)(a.SwiperSlide,{className:"swiper-slide",children:(0,t.jsxs)("div",{className:"testimonial-content-3",children:[(0,t.jsxs)("div",{className:"star",children:[(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-solid fa-star"}),(0,t.jsx)("i",{className:"fa-sharp fa-solid fa-star-half-stroke"})]}),(0,t.jsx)("p",{children:e.desc}),(0,t.jsxs)("div",{className:"info-item",children:[(0,t.jsx)(o.default,{src:e.client,alt:"img"}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h4",{children:e.client_name}),(0,t.jsx)("span",{children:e.designation})]})]})]})},e.id)),(0,t.jsx)("div",{className:"swiper-dot",children:(0,t.jsx)("div",{className:"dot"})})]})})})]})})]})})],99520)},22927,e=>{"use strict";var t=e.i(43476),a=e.i(80401),s=e.i(72225),i=e.i(86301),n=e.i(57688),o=e.i(42849),r=e.i(22016);let l={src:e.i(42848).default,width:265,height:322,blurWidth:7,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDFa8udbkKzLcCQEqY4x8gI7L68c16dOfRo8ucLO5//2Q=="},c={src:e.i(86024).default,width:265,height:322,blurWidth:7,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjbPw1f2tpM32RrhGbEYEZ3qeOfbjIronQSV7kQm7NtH//2Q=="},d={src:e.i(45693).default,width:265,height:322,blurWidth:7,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDh5rq0s7MOk6+YMBNq8sPf0/8ArUuRJ6MFWnJK6sf/2Q=="},m={src:e.i(94622).default,width:265,height:322,blurWidth:7,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAcDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCv4k8fOY7dNP1B7W5RiZfJUEEYIxk+9dnsOZauxm66i9In/9k="},f=[{id:1,thumb:l,title:(0,t.jsxs)(t.Fragment,{children:["The Role of Automation ",(0,t.jsx)("br",{})," in Enhancing Customer Support"]}),date:"November 30, 2025",category:"Security"},{id:2,thumb:c,title:(0,t.jsxs)(t.Fragment,{children:["How Custom IT Solutions ",(0,t.jsx)("br",{})," Improve Customer Experience"]}),date:"November 30, 2025",category:"Security"},{id:3,thumb:d,title:(0,t.jsxs)(t.Fragment,{children:["Why Customer Experience ",(0,t.jsx)("br",{})," Is Critical for Modern Businesses"]}),date:"November 30, 2025",category:"Security"},{id:4,thumb:m,title:(0,t.jsxs)(t.Fragment,{children:["Why Every Business Needs a ",(0,t.jsx)("br",{})," Customer-Focused IT Strategy"]}),date:"November 30, 2025",category:"Security"},{id:5,thumb:d,title:(0,t.jsxs)(t.Fragment,{children:["Why Customer Experience ",(0,t.jsx)("br",{})," Is Critical for Modern Businesses"]}),date:"November 30, 2025",category:"Security"}],p={spaceBetween:30,speed:1300,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".dot2",clickable:!0},breakpoints:{1199:{slidesPerView:4},991:{slidesPerView:2},767:{slidesPerView:2},575:{slidesPerView:1},0:{slidesPerView:1}}};e.s(["default",0,()=>(0,t.jsx)("section",{className:"news-section-3 section-padding fix",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-title text-center",children:[(0,t.jsxs)("span",{className:"sub-title wow fadeInUp",children:[(0,t.jsx)(o.default,{}),"Explore our blogs"]}),(0,t.jsxs)("h2",{className:"text-anim",children:["Strategic Services Ideal ",(0,t.jsx)("br",{})," For Businesses."]})]}),(0,t.jsx)("div",{className:"news-wrapper",children:(0,t.jsx)(a.Swiper,{...p,modules:[s.Autoplay,i.Pagination],className:"swiper news-slider",children:f.map(e=>(0,t.jsx)(a.SwiperSlide,{className:"swiper-slide",children:(0,t.jsxs)("div",{className:"news-card-items-3",children:[(0,t.jsxs)("div",{className:"news-image",children:[(0,t.jsx)(n.default,{src:e.thumb,alt:"img"}),(0,t.jsx)(n.default,{src:e.thumb,alt:"img"})]}),(0,t.jsxs)("div",{className:"news-content",children:[(0,t.jsxs)("div",{className:"list",children:[(0,t.jsx)("span",{className:"style-2",children:"Security"}),(0,t.jsx)("span",{children:" November 30, 2025"})]}),(0,t.jsx)("h3",{children:(0,t.jsx)(r.default,{href:"/news-details",children:e.title})}),(0,t.jsxs)(r.default,{href:"/news-details",className:"theme-btn",children:["Read More ",(0,t.jsx)("i",{className:"fa-regular fa-arrow-up-right"})]})]})]})},e.id))})}),(0,t.jsx)("div",{className:"swiper-dot",children:(0,t.jsx)("div",{className:"dot2"})})]})})],22927)},67187,e=>{"use strict";var t=e.i(43476),a=e.i(57688),s=e.i(22016),i=e.i(52386);let n={src:e.i(24044).default,width:1920,height:1413,blurWidth:8,blurHeight:6,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAiUlEQVR42j2JQQrCMBBFp0lsbNNQQRFEN1Ld6MoD6Fo6uYNH8hzep0dxM1k5v5Z+ePB5j2iaKYhK8wd/3jnY4rX35n2p7ecWHMCHO2mj4d667zN66UMtXDUj+uGGR+tI+qYS9jHzYp2T247oh0Mj4WVUucnJHiSZI8CHQ6PM5UrFTkOnXCc6OLQfDEAwQc1SWzsAAAAASUVORK5CYII="};var o=e.i(71063);e.s(["default",0,()=>(0,t.jsxs)("footer",{className:"footer-section-3 fix",children:[(0,t.jsx)("div",{className:"bottom-shape",children:(0,t.jsx)(a.default,{src:n,alt:"img"})}),(0,t.jsx)("div",{className:"footer-area",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"footer-widget-wrapper style-wrapper-3",children:(0,t.jsxs)("div",{className:"row justify-content-between",children:[(0,t.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 wow fadeInUp","data-wow-delay":".2s",children:(0,t.jsxs)("div",{className:"footer-widget-items",children:[(0,t.jsx)("div",{className:"widget-head",children:(0,t.jsx)(s.default,{href:"/",className:"footer-logo",children:(0,t.jsx)(a.default,{src:o.default,alt:"img"})})}),(0,t.jsxs)("div",{className:"footer-content",children:[(0,t.jsx)("p",{children:"Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting."}),(0,t.jsxs)("div",{className:"social-icon",children:[(0,t.jsx)(s.default,{href:"#",children:(0,t.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,t.jsx)(s.default,{href:"#",children:(0,t.jsx)("i",{className:"fa-brands fa-linkedin-in"})}),(0,t.jsx)(s.default,{href:"#",children:(0,t.jsx)("i",{className:"fa-brands fa-twitter"})}),(0,t.jsx)(s.default,{href:"#",children:(0,t.jsx)("i",{className:"fa-brands fa-youtube"})})]})]})]})}),(0,t.jsx)(i.default,{}),(0,t.jsx)("div",{className:"col-xl-3 col-lg-6 col-md-6 wow fadeInUp","data-wow-delay":".8s",children:(0,t.jsxs)("div",{className:"footer-widget-items",children:[(0,t.jsx)("div",{className:"widget-head",children:(0,t.jsx)("h3",{children:"Subscribe Newsletter"})}),(0,t.jsxs)("div",{className:"contact-item",children:[(0,t.jsx)("form",{onSubmit:e=>e.preventDefault(),children:(0,t.jsx)("input",{type:"email",placeholder:"Email address"})}),(0,t.jsxs)("button",{type:"submit",className:"theme-btn w-100",children:["Subscribe now ",(0,t.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})]})]})})]})}),(0,t.jsxs)("div",{className:"footer-bottom-wrapper style-3",children:[(0,t.jsxs)("p",{className:"wow fadeInUp","data-wow-delay":".3s",children:["Copyright ",(0,t.jsx)("span",{children:"Intellectworks Digital Solutions."})," All rights reserved."]}),(0,t.jsxs)("ul",{className:"footer-list wow fadeInUp","data-wow-delay":".7s",children:[(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:"/contact",children:"Privacy policy"})}),(0,t.jsx)("li",{children:"।"}),(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:"/contact",children:"Terms & conditions"})})]})]})]})})]})],67187)},93162,e=>{"use strict";var t=e.i(43476),a=e.i(22016),s=e.i(57688),i=e.i(71645),n=e.i(12985),o=e.i(21813),r=e.i(56833),l=e.i(84491),c=e.i(7270),d=e.i(71063);e.s(["default",0,()=>{let{sticky:e}=(0,l.default)(),[m,f]=(0,i.useState)(!1),[p,u]=(0,i.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("header",{id:"header-sticky",className:`header-1 header-3 mt-0 ${e?"sticky":""}`,children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"mega-menu-wrapper",children:(0,t.jsxs)("div",{className:"header-main",children:[(0,t.jsx)("div",{className:"header-left",children:(0,t.jsxs)("div",{className:"logo",children:[(0,t.jsx)(a.default,{href:"/",className:"header-logo",children:(0,t.jsx)(s.default,{src:c.default,alt:"logo-img"})}),(0,t.jsx)(a.default,{href:"/",className:"header-logo-2",children:(0,t.jsx)(s.default,{src:d.default,alt:"logo-img"})})]})}),(0,t.jsx)("div",{className:"mean__menu-wrapper",children:(0,t.jsx)("div",{className:"main-menu",children:(0,t.jsx)("nav",{id:"mobile-menu",className:"d-none d-xl-block",children:(0,t.jsx)(r.default,{})})})}),(0,t.jsxs)("div",{className:"header-right d-flex justify-content-end align-items-center",children:[(0,t.jsx)("div",{className:"menu_search",children:(0,t.jsx)("button",{onClick:()=>u(!0),className:"search_btn",children:(0,t.jsx)("i",{className:"far fa-search"})})}),(0,t.jsxs)("div",{className:"header-btn",children:[(0,t.jsxs)("h6",{children:[(0,t.jsx)("i",{className:"fa-regular fa-phone-volume"}),(0,t.jsx)("a",{href:"tel:+5284567592",children:"+(528) 456-7592"})]}),(0,t.jsx)("div",{className:"header-button",children:(0,t.jsxs)(a.default,{href:"/contact",className:"theme-btn",children:["Get In Touch ",(0,t.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})}),(0,t.jsx)("div",{className:"header__hamburger d-xl-none my-auto",children:(0,t.jsx)("div",{onClick:()=>f(!0),className:"sidebar__toggle",children:(0,t.jsx)("i",{className:"fas fa-bars"})})})]})]})]})})})}),(0,t.jsx)(n.default,{offCanvas:m,setOffCanvas:f}),(0,t.jsx)(o.default,{isSearch:p,setIsSearch:u})]})}])}]);