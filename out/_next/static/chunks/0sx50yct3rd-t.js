(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54865,t=>{t.q("/_next/static/media/white-logo.13l.gqlbbnxyy.svg")},17263,t=>{t.q("/_next/static/media/black-logo.0h654ucz7kw2a.svg")},25815,t=>{t.q("/_next/static/media/footer-bg.0bcd2qswxba6x.jpg")},18566,(t,e,a)=>{e.exports=t.r(76562)},70319,t=>{"use strict";var e=t.i(71645);let a=function(){for(var t,e,a=0,o="",s=arguments.length;a<s;a++)(t=arguments[a])&&(e=function t(e){var a,o,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(o=t(e[a]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}(t))&&(o&&(o+=" "),o+=e);return o};var o=t=>"number"==typeof t&&!isNaN(t),s=t=>"string"==typeof t||"function"==typeof t?t:null,r=t=>(0,e.isValidElement)(t)||"string"==typeof t||"function"==typeof t||o(t);function i(t,e,a=300){let{scrollHeight:o,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${a}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,a)})})}function n({enter:t,exit:a,appendPosition:o=!1,collapse:s=!0,collapseDuration:r=300}){return function({children:n,position:l,preventExitTransition:c,done:d,nodeRef:f,isIn:u,playToast:m}){let p=o?`${t}--${l}`:t,y=o?`${a}--${l}`:a,h=(0,e.useRef)(0);return(0,e.useLayoutEffect)(()=>{let t=f.current,e=p.split(" "),a=o=>{o.target===f.current&&(m(),t.removeEventListener("animationend",a),t.removeEventListener("animationcancel",a),0===h.current&&"animationcancel"!==o.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)},[]),(0,e.useEffect)(()=>{let t=f.current,e=()=>{t.removeEventListener("animationend",e),s?i(t,d,r):d()};u||(c?e():(h.current=1,t.className+=` ${y}`,t.addEventListener("animationend",e)))},[u]),e.default.createElement(e.default.Fragment,null,n)}}function l(t,e){return{content:c(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function c(t,a,o=!1){return(0,e.isValidElement)(t)&&"string"!=typeof t.type?(0,e.cloneElement)(t,{closeToast:a.closeToast,toastProps:a,data:a.data,isPaused:o}):"function"==typeof t?t({closeToast:a.closeToast,toastProps:a,data:a.data,isPaused:o}):t}function d({delay:t,isRunning:o,closeToast:s,type:r="default",hide:i,className:n,controlledProgress:l,progress:c,rtl:f,isIn:u,theme:m}){let p=i||l&&0===c,y={animationDuration:`${t}ms`,animationPlayState:o?"running":"paused"};l&&(y.transform=`scaleX(${c})`);let h=a("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),g="function"==typeof n?n({rtl:f,type:r,defaultClassName:h}):a(h,n);return e.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},e.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${r}`}),e.default.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer","aria-valuenow":l?Math.round(100*c):void 0,"aria-valuemin":0,"aria-valuemax":100,className:g,style:y,...{[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{u&&s()}}}))}var f=1,u=()=>`${f++}`,m=new Map,p=[],y=new Set,h=t=>y.forEach(e=>e(t));function g(t,e){var a;if(e)return!!(null!=(a=m.get(e))&&a.isToastActive(t));let o=!1;return m.forEach(e=>{e.isToastActive(t)&&(o=!0)}),o}function v(t,e){r(t)&&(m.size>0||p.push({content:t,options:e}),m.forEach(a=>{a.buildToast(t,e)}))}function b(t,e){m.forEach(a=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==a.id||a.toggle(t,null==e?void 0:e.id)})}function _(t,e){return v(t,e),e.toastId}function x(t,e){var a;return{...e,type:e&&e.type||t,toastId:(a=e)&&("string"==typeof a.toastId||o(a.toastId))?a.toastId:u()}}function T(t){return(e,a)=>_(e,x(t,a))}function w(t,e){return _(t,x("default",e))}w.loading=(t,e)=>_(t,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),w.promise=function(t,{pending:e,error:a,success:o},s){let r;e&&(r="string"==typeof e?w.loading(e,s):w.loading(e.render,{...s,...e}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},n=(t,e,a)=>{if(null==e)return void w.dismiss(r);let o={type:t,...i,...s,data:a},n="string"==typeof e?{render:e}:e;return r?w.update(r,{...o,...n}):w(n.render,{...o,...n}),a},l="function"==typeof t?t():t;return l.then(t=>n("success",o,t)).catch(t=>n("error",a,t)),l},w.success=T("success"),w.info=T("info"),w.error=T("error"),w.warning=T("warning"),w.warn=w.warning,w.dark=(t,e)=>_(t,x("default",{theme:"dark",...e})),w.dismiss=function(t){!function(t){let e;if(!(m.size>0)){p=p.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||"string"==typeof(e=t)||o(e))m.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=m.get(t.containerId);e?e.removeToast(t.id):m.forEach(e=>{e.removeToast(t.id)})}}(t)},w.clearWaitingQueue=(t={})=>{m.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},w.isActive=g,w.update=(t,e={})=>{let a=((t,{containerId:e})=>{var a;return null==(a=m.get(e||1))?void 0:a.toasts.get(t)})(t,e);if(a){let{props:o,content:s}=a,r={delay:100,...o,...e,toastId:e.toastId||t,updateId:u()};r.toastId!==t&&(r.staleId=t);let i=r.render||s;delete r.render,_(i,r)}},w.done=t=>{w.update(t,{progress:1})},w.onChange=function(t){return y.add(t),()=>{y.delete(t)}},w.play=t=>b(!0,t),w.pause=t=>b(!1,t);var j="u">typeof window?e.useLayoutEffect:e.useEffect,N=({theme:t,type:a,isLoading:o,...s})=>e.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${a})`,...s}),k={info:function(t){return e.default.createElement(N,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return e.default.createElement(N,{...t},e.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return e.default.createElement(N,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return e.default.createElement(N,{...t},e.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return e.default.createElement("div",{className:"Toastify__spinner"})}},A=t=>{let{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i,playToast:n}=function(t){var a,o;let[s,r]=(0,e.useState)(!1),[i,n]=(0,e.useState)(!1),l=(0,e.useRef)(null),c=(0,e.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:f,closeToast:u,onClick:p,closeOnClick:y}=t;function h(){r(!0)}function g(){r(!1)}function v(e){let a=l.current;if(c.canDrag&&a){c.didMove=!0,s&&g(),"x"===t.draggableDirection?c.delta=e.clientX-c.start:c.delta=e.clientY-c.start,c.start!==e.clientX&&(c.canCloseOnClick=!1);let o="x"===t.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;a.style.transform=`translate3d(${o},0)`,a.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function b(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b);let e=l.current;if(c.canDrag&&c.didMove&&e){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){n(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}a={id:t.toastId,containerId:t.containerId,fn:r},null==(o=m.get(a.containerId||1))||o.setToggle(a.id,a.fn),(0,e.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",h),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",g)}},[t.pauseOnFocusLoss]);let _={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){c.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);let a=l.current;c.canCloseOnClick=!0,c.canDrag=!0,a.style.transition="none","x"===t.draggableDirection?(c.start=e.clientX,c.removalDistance=a.offsetWidth*(t.draggablePercent/100)):(c.start=e.clientY,c.removalDistance=a.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:a,bottom:o,left:s,right:r}=l.current.getBoundingClientRect();"mouse"===e.pointerType&&t.pauseOnHover&&e.clientX>=s&&e.clientX<=r&&e.clientY>=a&&e.clientY<=o?g():h()}};return d&&f&&(_.onMouseEnter=g,t.stacked||(_.onMouseLeave=h)),y&&(_.onClick=t=>{p&&p(t),c.canCloseOnClick&&u(!0)}),{playToast:h,pauseToast:g,isRunning:s,preventExitTransition:i,toastRef:l,eventHandlers:_}}(t),{closeButton:l,children:f,autoClose:u,onClick:p,type:y,hideProgressBar:h,closeToast:g,transition:v,position:b,className:_,style:x,progressClassName:T,updateId:w,role:j,progress:N,rtl:A,toastId:E,deleteToast:I,isIn:C,isLoading:O,closeOnClick:S,theme:L,ariaLabel:B}=t,R=a("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":S}),P="function"==typeof _?_({rtl:A,position:b,type:y,defaultClassName:R}):a(R,_),z=function({theme:t,type:a,isLoading:o,icon:s}){let r=null,i={theme:t,type:a};return!1===s||("function"==typeof s?r=s({...i,isLoading:o}):(0,e.isValidElement)(s)?r=(0,e.cloneElement)(s,i):o?r=k.spinner():a in k&&(r=k[a](i))),r}(t),$=!!N||!u,D={closeToast:g,type:y,theme:L},M=null;return!1===l||(M="function"==typeof l?l(D):(0,e.isValidElement)(l)?(0,e.cloneElement)(l,D):function({closeToast:t,theme:a,ariaLabel:o="close"}){return e.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${a}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":o},e.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},e.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(D)),e.default.createElement(v,{isIn:C,done:I,position:b,preventExitTransition:s,nodeRef:r,playToast:n},e.default.createElement("div",{id:E,tabIndex:0,onClick:p,"data-in":C,className:P,...i,style:x,ref:r,...C&&{role:j,"aria-label":B}},null!=z&&e.default.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},z),c(f,t,!o),M,!t.customProgressBar&&e.default.createElement(d,{...w&&!$?{key:`p-${w}`}:{},rtl:A,theme:L,delay:u,isRunning:o,isIn:C,closeToast:g,hide:h,type:y,className:T,controlledProgress:$,progress:N||0})))},E=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),I=n(E("bounce",!0)),C=n(E("slide",!0)),O=n(E("zoom")),S=n(E("flip")),L={position:"top-right",transition:I,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function B(t){let i={...L,...t},n=t.stacked,[c,d]=(0,e.useState)(!0),f=(0,e.useRef)(null),{getToastToRender:u,isToastActive:y,count:b}=function(t){var a;let i,{subscribe:n,getSnapshot:c,setProps:d}=(0,e.useRef)((i=t.containerId||1,{subscribe(e){let a,n,c,d,f,u,y,g,b,_,x,T=(a=1,n=0,c=[],d=[],f=t,u=new Map,y=new Set,g=()=>{d=Array.from(u.values()),y.forEach(t=>t())},b=t=>{var e,a;t.isActive&&(null==(a=null==(e=t.props)?void 0:e.onClose)||a.call(e,t.removalReason),t.isActive=!1,h(l(t,"removed")))},_=t=>{if(null==t)u.forEach(b);else{let e=u.get(t);e&&b(e)}g()},x=t=>{var e,a;let{toastId:o,updateId:s}=t.props,r=null==s;t.staleId&&u.delete(t.staleId),t.isActive=!0,u.set(o,t),g(),h(l(t,r?"added":"updated")),r&&(null==(a=(e=t.props).onOpen)||a.call(e))},{id:i,props:f,observe:t=>(y.add(t),()=>y.delete(t)),toggle:(t,e)=>{u.forEach(a=>{var o;(null==e||e===a.props.toastId)&&(null==(o=a.toggle)||o.call(a,t))})},removeToast:_,toasts:u,clearQueue:()=>{n-=c.length,c=[]},buildToast:(t,e)=>{let l,d;if((({containerId:t,toastId:e,updateId:a})=>{let o=u.has(e)&&null==a;return(t?t!==i:1!==i)||o})(e))return;let{toastId:m,updateId:p,data:y,staleId:h,delay:v}=e,b=null==p;b&&n++;let T={...f,style:f.toastStyle,key:a++,...Object.fromEntries(Object.entries(e).filter(([t,e])=>null!=e)),toastId:m,updateId:p,data:y,isIn:!1,className:s(e.className||f.toastClassName),progressClassName:s(e.progressClassName||f.progressClassName),autoClose:!e.isLoading&&(l=e.autoClose,d=f.autoClose,!1===l||o(l)&&l>0?l:d),closeToast(t){let e=u.get(m);e&&(e.removalReason=t,_(m))},deleteToast(){if(null!=u.get(m)){if(u.delete(m),--n<0&&(n=0),c.length>0)return void x(c.shift());g()}}};T.closeButton=f.closeButton,!1===e.closeButton||r(e.closeButton)?T.closeButton=e.closeButton:!0===e.closeButton&&(T.closeButton=!r(f.closeButton)||f.closeButton);let w={content:t,props:T,staleId:h};f.limit&&f.limit>0&&n>f.limit&&b?c.push(w):o(v)?setTimeout(()=>{x(w)},v):x(w)},setProps(t){f=t},setToggle:(t,e)=>{let a=u.get(t);a&&(a.toggle=e)},isToastActive:t=>{var e;return null==(e=u.get(t))?void 0:e.isActive},getSnapshot:()=>d});m.set(i,T);let w=T.observe(e);return p.forEach(t=>v(t.content,t.options)),p=[],()=>{w(),m.delete(i)}},setProps(t){var e;null==(e=m.get(i))||e.setProps(t)},getSnapshot(){var t;return null==(t=m.get(i))?void 0:t.getSnapshot()}})).current;d(t);let f=null==(a=(0,e.useSyncExternalStore)(n,c,c))?void 0:a.slice();return{getToastToRender:function(e){if(!f)return[];let a=new Map;return t.newestOnTop&&f.reverse(),f.forEach(t=>{let{position:e}=t.props;a.has(e)||a.set(e,[]),a.get(e).push(t)}),Array.from(a,t=>e(t[0],t[1]))},isToastActive:g,count:null==f?void 0:f.length}}(i),{className:_,style:x,rtl:T,containerId:N,hotKeys:k}=i;function E(){n&&(d(!0),w.play())}return j(()=>{var t;if(n){let e=f.current.querySelectorAll('[data-in="true"]'),a=null==(t=i.position)?void 0:t.includes("top"),o=0,s=0;Array.from(e).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed=`${c}`),t.dataset.pos||(t.dataset.pos=a?"top":"bot");let r=o*(c?.2:1)+(c?0:12*e),i=Math.max(.5,1-(c?s:0));t.style.setProperty("--y",`${a?r:-1*r}px`),t.style.setProperty("--g","12"),t.style.setProperty("--s",`${i}`),o+=t.offsetHeight,s+=.025})}},[c,b,n]),(0,e.useEffect)(()=>{function t(t){var e;let a=f.current;k(t)&&(null==(e=null==a?void 0:a.querySelector('[tabIndex="0"]'))||e.focus(),d(!1),w.pause()),"Escape"===t.key&&(document.activeElement===a||null!=a&&a.contains(document.activeElement))&&(d(!0),w.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[k]),e.default.createElement("section",{ref:f,className:"Toastify",id:N,onMouseEnter:()=>{n&&(d(!1),w.pause())},onMouseLeave:E,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":i["aria-label"]},u((t,o)=>{var r;let i,l=o.length?{...x}:{...x,pointerEvents:"none"};return e.default.createElement("div",{tabIndex:-1,className:(r=t,i=a("Toastify__toast-container",`Toastify__toast-container--${r}`,{"Toastify__toast-container--rtl":T}),"function"==typeof _?_({position:r,rtl:T,defaultClassName:i}):a(i,s(_))),"data-stacked":n,style:l,key:`c-${t}`},o.map(({content:t,props:a})=>e.default.createElement(A,{...a,stacked:n,collapseAll:E,isIn:y(a.toastId,a.containerId),key:`t-${a.key}`},t)))}))}var R=`:root {
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
`,P=new Map;t.s(["Bounce",0,I,"Flip",0,S,"Icons",0,k,"Slide",0,C,"ToastContainer",0,function(t){var a;return j(()=>{if(!R||"u"<typeof document)return;let t=document,e=P.get(t);if(e){a&&e.setAttribute("nonce",a);return}let o=t.createElement("style");o.textContent=R,a&&o.setAttribute("nonce",a),t.head.appendChild(o),P.set(t,o)},[a=t.nonce]),e.default.createElement(B,{...t})},"Zoom",0,O,"collapseToast",0,i,"cssTransition",0,n,"toast",0,w],70319)},52386,t=>{"use strict";var e=t.i(43476),a=t.i(22016);t.s(["default",0,()=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"col-xl-2 col-lg-3 col-md-6 wow fadeInUp","data-wow-delay":".4s",children:(0,e.jsxs)("div",{className:"footer-widget-items",children:[(0,e.jsx)("div",{className:"widget-head",children:(0,e.jsx)("h3",{children:"Company"})}),(0,e.jsxs)("ul",{className:"list-area",children:[(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/about",children:"About us"})}),(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/our-projects",children:"Our Portfolio"})}),(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/contact",children:"Contact"})}),(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/news",children:"News & Insights"})})]})]})}),(0,e.jsx)("div",{className:"col-xl-3 ps-lg-5 col-lg-4 col-md-6 wow fadeInUp","data-wow-delay":".6s",children:(0,e.jsxs)("div",{className:"footer-widget-items",children:[(0,e.jsx)("div",{className:"widget-head",children:(0,e.jsx)("h3",{children:"Recourse"})}),(0,e.jsxs)("ul",{className:"list-area",children:[(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/service",children:"Software Solutions"})}),(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/digital-marketing",children:"Digital Marketing Solutions"})}),(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/news",children:"Blogs"})}),(0,e.jsx)("li",{children:(0,e.jsx)(a.default,{href:"/service-details",children:"Service Details"})})]})]})})]})])},43794,(t,e,a)=>{!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=s(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)a.call(t,r)&&t[r]&&(e=s(e,r));return e}(r)))}return t}function s(t,e){return e?t?t+" "+e:t+e:t}if(e.exports)o.default=o,e.exports=o;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==o&&t.v(o);else window.classNames=o}()},58006,t=>{"use strict";t.i(47167);var e=t.i(71645),a=t.i(74080),o=t.i(43794),s=t.i(43476),r=!1;if("u">typeof window){var i={get passive(){r=!0;return}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var n="u">typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],c=!1,d=-1,f=void 0,u=void 0,m=function(t){return l.some(function(e){return!!(e.options.allowTouchMove&&e.options.allowTouchMove(t))})},p=function(t){var e=t||window.event;return!!m(e.target)||e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)},y=function(t){if(void 0===u){var e=!!t&&!0===t.reserveScrollBarGap,a=window.innerWidth-document.documentElement.clientWidth;e&&a>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=a+"px")}void 0===f&&(f=document.body.style.overflow,document.body.style.overflow="hidden")},h=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==f&&(document.body.style.overflow=f,f=void 0)},g=function(t,e){var a=t.targetTouches[0].clientY-d;return!m(t.target)&&(e&&0===e.scrollTop&&a>0?p(t):e&&e.scrollHeight-e.scrollTop<=e.clientHeight&&a<0?p(t):(t.stopPropagation(),!0))},v=function(t,e){t?!l.some(function(e){return e.targetElement===t})&&(l=[].concat(function(t){if(!Array.isArray(t))return Array.from(t);for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}(l),[{targetElement:t,options:e||{}}]),n?(t.ontouchstart=function(t){1===t.targetTouches.length&&(d=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&g(e,t)},c||(document.addEventListener("touchmove",p,r?{passive:!1}:void 0),c=!0)):y(e)):console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},b=function(t){t?(l=l.filter(function(e){return e.targetElement!==t}),n?(t.ontouchstart=null,t.ontouchmove=null,c&&0===l.length&&(document.removeEventListener("touchmove",p,r?{passive:!1}:void 0),c=!1)):l.length||h()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},_=({classes:t,classNames:e,styles:a,id:r,closeIcon:i,onClick:n})=>(0,s.jsx)("button",{id:r,className:(0,o.default)(t.closeButton,e?.closeButton),style:a?.closeButton,onClick:n,"data-testid":"close-button",children:i||(0,s.jsx)("svg",{className:e?.closeIcon,style:a?.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon",children:(0,s.jsx)("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})})});let x="u">typeof window,T=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function w(t){for(var e=document.activeElement,a=t.querySelectorAll(T.join(",")),o=[],s=0;s<a.length;s++){var r=a[s];(e===r||!r.disabled&&function(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?t.getAttribute("contentEditable")?0:t.tabIndex:e}(r)>-1&&null!==r.offsetParent&&"hidden"!==getComputedStyle(r).visibility&&function(t){if("INPUT"!==t.tagName||"radio"!==t.type||!t.name)return!0;var e=(t.form||t.ownerDocument).querySelectorAll('input[type="radio"][name="'+t.name+'"]'),a=function(t,e){for(var a=0;a<t.length;a++)if(t[a].checked&&t[a].form===e)return t[a]}(e,t.form);return a===t||void 0===a&&e[0]===t}(r))&&o.push(r)}return o}let j=({container:t,initialFocusRef:a})=>{let o=(0,e.useRef)(null);return(0,e.useEffect)(()=>{let e=e=>{t?.current&&function(t,e){if(t&&"Tab"===t.key){if(!e||!e.contains)return console.warn("focus-trap-js: parent element is not defined");if(e.contains(t.target)){var a=w(e),o=a[0],s=a[a.length-1];t.shiftKey&&t.target===o?(s.focus(),t.preventDefault()):t.shiftKey||t.target!==s||(o.focus(),t.preventDefault())}}}(e,t.current)};if(x&&document.addEventListener("keydown",e),x&&t?.current){let e=()=>{-1!==T.findIndex(t=>document.activeElement?.matches(t))&&(o.current=document.activeElement)};if(a)e(),requestAnimationFrame(()=>{a.current?.focus()});else{let a=w(t.current);a[0]&&(e(),a[0].focus())}}return()=>{x&&(document.removeEventListener("keydown",e),o.current?.focus())}},[t,a]),null},N=[],k={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},A=e.default.forwardRef(({open:t,center:r,blockScroll:i=!0,closeOnEsc:n=!0,closeOnOverlayClick:l=!0,container:c,showCloseIcon:d=!0,closeIconId:f,closeIcon:u,focusTrapped:m=!0,initialFocusRef:p,animationDuration:y=300,classNames:h,styles:g,role:T="dialog",ariaLabel:w,ariaDescribedby:A,ariaLabelledby:E,containerId:I,modalId:C,onClose:O,onEscKeyDown:S,onOverlayClick:L,onAnimationEnd:B,children:R,reserveScrollBarGap:P},z)=>{let $,D=function(t,a={isStateful:!0}){let o=function(){let[t,a]=e.default.useState(void 0),{current:o}=e.default.useRef({current:t});return Object.defineProperty(o,"current",{get:()=>t,set:e=>{Object.is(t,e)||(t=e,a(e))}}),o}(),s=(0,e.useRef)(),r=a.isStateful?o:s;return e.default.useImperativeHandle(t,()=>r.current),r}(z),M=(0,e.useRef)(null),F=(0,e.useRef)(null),U=(0,e.useRef)(null);null===U.current&&x&&(U.current=document.createElement("div"));let[Q,q]=(0,e.useState)(!1);(0,e.useEffect)(()=>{var e;return t&&(e=M,N.push(e)),()=>{var t;t=M,N=N.filter(e=>e!==t)}},[t,M]),$=(0,e.useRef)(null),(0,e.useEffect)(()=>(t&&M.current&&i&&($.current=M.current,v(M.current,{reserveScrollBarGap:P})),()=>{$.current&&(b($.current),$.current=null)}),[t,Q,M,i,P]);let K=t=>{let e;27===t.keyCode&&(e=M,N.length&&N[N.length-1]===e)&&(S?.(t),n&&O())};(0,e.useEffect)(()=>()=>{Q&&(U.current&&!c&&document.body.contains(U.current)&&document.body.removeChild(U.current),document.removeEventListener("keydown",K))},[Q]),(0,e.useEffect)(()=>{t&&!Q&&(q(!0),!U.current||c||document.body.contains(U.current)||document.body.appendChild(U.current),document.addEventListener("keydown",K))},[t]);let H=()=>{F.current=!1},X=c||U.current,Y=t?h?.overlayAnimationIn??k.overlayAnimationIn:h?.overlayAnimationOut??k.overlayAnimationOut,W=t?h?.modalAnimationIn??k.modalAnimationIn:h?.modalAnimationOut??k.modalAnimationOut;return Q&&X?(0,a.createPortal)((0,s.jsxs)("div",{className:(0,o.default)(k.root,h?.root),style:g?.root,"data-testid":"root",children:[(0,s.jsx)("div",{className:(0,o.default)(k.overlay,h?.overlay),"data-testid":"overlay","aria-hidden":!0,style:{animation:`${Y} ${y}ms`,...g?.overlay}}),(0,s.jsx)("div",{ref:M,id:I,className:(0,o.default)(k.modalContainer,r&&k.modalContainerCenter,h?.modalContainer),style:g?.modalContainer,"data-testid":"modal-container",onClick:t=>{if(null===F.current&&(F.current=!0),!F.current){F.current=null;return}L?.(t),l&&O(),F.current=null},children:(0,s.jsxs)("div",{ref:D,className:(0,o.default)(k.modal,h?.modal),style:{animation:`${W} ${y}ms`,...g?.modal},onMouseDown:H,onMouseUp:H,onClick:H,onAnimationEnd:()=>{t||q(!1),B?.()},id:C,role:T,"aria-modal":"true","aria-label":w,"aria-labelledby":E,"aria-describedby":A,"data-testid":"modal",tabIndex:-1,children:[m&&(0,s.jsx)(j,{container:D,initialFocusRef:p}),R,d&&(0,s.jsx)(_,{classes:k,classNames:h,styles:g,closeIcon:u,onClick:O,id:f})]})})]}),X):null});t.s(["Modal",0,A],58006)},82336,t=>{"use strict";var e=t.i(43476),a=t.i(57688),o=t.i(22016),s=t.i(52386),r=t.i(7270);let i={src:t.i(25815).default,width:1600,height:532,blurWidth:8,blurHeight:3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAADAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyeIBpELAEknOa9Kydmznva5//2Q=="};t.s(["default",0,()=>(0,e.jsx)("footer",{className:"footer-section fix inner_footer_section",children:(0,e.jsx)("div",{className:"footer-area bg-cover",style:{backgroundImage:`url(${i.src})`},children:(0,e.jsxs)("div",{className:"container",children:[(0,e.jsx)("div",{className:"footer-widget-wrapper",children:(0,e.jsxs)("div",{className:"row justify-content-between",children:[(0,e.jsx)("div",{className:"col-xl-4 col-lg-5 col-md-6 wow fadeInUp","data-wow-delay":".2s",children:(0,e.jsxs)("div",{className:"footer-widget-items",children:[(0,e.jsx)("div",{className:"widget-head",children:(0,e.jsx)(o.default,{href:"/",className:"footer-logo",children:(0,e.jsx)(a.default,{src:r.default,alt:"img"})})}),(0,e.jsxs)("div",{className:"footer-content",children:[(0,e.jsx)("p",{children:"Businesses to thrive in changing digital world. With over a decade systems that drive growth an efficiency. From IT consulting."}),(0,e.jsxs)(o.default,{href:"/contact",className:"theme-btn",children:["Get started now ",(0,e.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})]})]})}),(0,e.jsx)(s.default,{}),(0,e.jsx)("div",{className:"col-xl-3 col-lg-6 col-md-6 wow fadeInUp","data-wow-delay":".8s",children:(0,e.jsxs)("div",{className:"footer-widget-items",children:[(0,e.jsx)("div",{className:"widget-head",children:(0,e.jsx)("h3",{children:"Subscribe Newsletter"})}),(0,e.jsxs)("div",{className:"contact-item",children:[(0,e.jsxs)("form",{action:"https://formsubmit.co/intellectworks58@gmail.com",method:"POST",children:[(0,e.jsx)("input",{type:"email",name:"email",placeholder:"Email address",required:!0}),(0,e.jsx)("input",{type:"hidden",name:"_subject",value:"New Newsletter Subscription"}),(0,e.jsxs)("button",{type:"submit",className:"theme-btn w-100",style:{marginTop:"10px"},children:["Subscribe now ",(0,e.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})]}),(0,e.jsxs)("div",{className:"social-icon",children:[(0,e.jsx)(o.default,{href:"https://www.facebook.com/intellectworksdigital/",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,e.jsx)(o.default,{href:"https://www.instagram.com/intellectworksdigital/",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)("i",{className:"fa-brands fa-instagram"})}),(0,e.jsx)(o.default,{href:"https://in.linkedin.com/company/intellectworks-digital-solutions",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)("i",{className:"fa-brands fa-linkedin-in"})})]})]})]})})]})}),(0,e.jsxs)("div",{className:"footer-bottom-wrapper",children:[(0,e.jsxs)("p",{className:"wow fadeInUp","data-wow-delay":".3s",children:["Copyright ",(0,e.jsx)("span",{children:"Intellectworks Digital Solutions."})," All rights reserved."]}),(0,e.jsxs)("ul",{className:"footer-list wow fadeInUp","data-wow-delay":".7s",children:[(0,e.jsx)("li",{children:(0,e.jsx)(o.default,{href:"/privacy-policy",children:"Privacy policy"})}),(0,e.jsx)("li",{children:"।"}),(0,e.jsx)("li",{children:(0,e.jsx)(o.default,{href:"/terms-conditions",children:"Terms & conditions"})})]})]})]})})})],82336)},70667,t=>{"use strict";var e=t.i(43476),a=t.i(22016),o=t.i(57688),s=t.i(71645),r=t.i(12985),i=t.i(21813),n=t.i(47167),l=t.i(58006),c=t.i(70319);let d=({isOpen:t,onClose:a})=>{let[o,r]=(0,s.useState)({firstName:"",lastName:"",email:"",phone:"",service:"",message:""}),[i,d]=(0,s.useState)({}),[f,u]=(0,s.useState)({}),[m,p]=(0,s.useState)(!1),y=t=>{u(e=>({...e,[t]:!0}))},h=t=>{u(e=>({...e,[t]:!1})),v(t,o[t])},g=(t,e)=>{r(a=>({...a,[t]:e})),i[t]&&d(e=>({...e,[t]:""}))},v=(t,e)=>{let a="";return"firstName"!==t||e.trim()?"lastName"!==t||e.trim()?"email"===t?e.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||(a="Please enter a valid email address"):a="Email address is required":"phone"!==t||e.trim()?"service"!==t||e?"message"===t&&(e.trim()?e.trim().length<10&&(a="Message must be at least 10 characters long"):a="Message is required"):a="Please select a service option":a="Phone number is required":a="Last name is required":a="First name is required",d(e=>({...e,[t]:a})),!a},b=async t=>{t.preventDefault();let e=!0;if(Object.keys(o).forEach(t=>{v(t,o[t])||(e=!1)}),!e)return void c.toast.error("Please fill in all required fields correctly.");p(!0);try{let t,e=o.service?`[Service: ${o.service}] ${o.message}`:o.message,s={firstName:o.firstName,lastName:o.lastName,email:o.email,phone:o.phone,message:e},i=n.default.env.NEXT_PUBLIC_API_URL||"https://ids-web-three.vercel.app/php-backend",l=`${i}/submit.php`,f=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),u=f.headers.get("content-type");if(u&&-1!==u.indexOf("application/json"))t=await f.json();else{let t=await f.text();throw console.error("Non-JSON response from server:",t),Error(`Server returned a non-JSON response (${f.status})`)}f.ok&&"success"===t.status?(c.toast.success("Thank you! Your message has been sent successfully."),r({firstName:"",lastName:"",email:"",phone:"",service:"",message:""}),d({}),setTimeout(()=>{a()},1e3)):c.toast.error(t.message||"Failed to send message. Please try again.")}catch(t){console.error("Form submission error:",t),c.toast.error("Failed to send message. Please check your network connection.")}finally{p(!1)}},_=t=>f[t]||o[t]&&o[t].length>0;return(0,e.jsx)(l.Modal,{open:t,onClose:a,center:!0,classNames:{modal:"classic-contact-modal",overlay:"classic-contact-overlay",closeButton:"classic-contact-close-btn"},styles:{closeIcon:{fill:"currentColor"}},children:(0,e.jsxs)("div",{className:"classic-modal-content",children:[(0,e.jsxs)("div",{className:"classic-modal-header text-center mb-4",children:[(0,e.jsx)("span",{className:"subtitle",children:"Let's Work Together"}),(0,e.jsx)("h2",{className:"title",children:"Get In Touch"}),(0,e.jsx)("p",{className:"desc",children:"Fill out the form below and our team will get back to you within 24 hours."})]}),(0,e.jsx)("form",{onSubmit:b,id:"contact-popup-form",noValidate:!0,children:(0,e.jsxs)("div",{className:"row g-3",children:[(0,e.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,e.jsxs)("div",{className:`classic-input-group ${_("firstName")?"floated":""} ${i.firstName?"has-error":""}`,children:[(0,e.jsx)("label",{className:"classic-label",children:"First Name *"}),(0,e.jsx)("input",{type:"text",className:`classic-input ${i.firstName?"is-invalid":""}`,value:o.firstName,onChange:t=>g("firstName",t.target.value),onFocus:()=>y("firstName"),onBlur:()=>h("firstName"),required:!0,disabled:m}),i.firstName&&(0,e.jsx)("span",{className:"error-msg",children:i.firstName})]})}),(0,e.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,e.jsxs)("div",{className:`classic-input-group ${_("lastName")?"floated":""} ${i.lastName?"has-error":""}`,children:[(0,e.jsx)("label",{className:"classic-label",children:"Last Name *"}),(0,e.jsx)("input",{type:"text",className:`classic-input ${i.lastName?"is-invalid":""}`,value:o.lastName,onChange:t=>g("lastName",t.target.value),onFocus:()=>y("lastName"),onBlur:()=>h("lastName"),required:!0,disabled:m}),i.lastName&&(0,e.jsx)("span",{className:"error-msg",children:i.lastName})]})}),(0,e.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,e.jsxs)("div",{className:`classic-input-group ${_("email")?"floated":""} ${i.email?"has-error":""}`,children:[(0,e.jsx)("label",{className:"classic-label",children:"Email Address *"}),(0,e.jsx)("input",{type:"email",className:`classic-input ${i.email?"is-invalid":""}`,value:o.email,onChange:t=>g("email",t.target.value),onFocus:()=>y("email"),onBlur:()=>h("email"),required:!0,disabled:m}),i.email&&(0,e.jsx)("span",{className:"error-msg",children:i.email})]})}),(0,e.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,e.jsxs)("div",{className:`classic-input-group ${_("phone")?"floated":""} ${i.phone?"has-error":""}`,children:[(0,e.jsx)("label",{className:"classic-label",children:"Phone Number *"}),(0,e.jsx)("input",{type:"tel",className:`classic-input ${i.phone?"is-invalid":""}`,value:o.phone,onChange:t=>g("phone",t.target.value),onFocus:()=>y("phone"),onBlur:()=>h("phone"),required:!0,disabled:m}),i.phone&&(0,e.jsx)("span",{className:"error-msg",children:i.phone})]})}),(0,e.jsx)("div",{className:"col-lg-12",children:(0,e.jsxs)("div",{className:`classic-input-group floated ${i.service?"has-error":""}`,children:[(0,e.jsx)("label",{className:"classic-label",children:"Service Required *"}),(0,e.jsx)("div",{className:"classic-select-wrapper",children:(0,e.jsxs)("select",{className:`classic-input ${i.service?"is-invalid":""}`,value:o.service,onChange:t=>g("service",t.target.value),onFocus:()=>y("service"),onBlur:()=>h("service"),disabled:m,children:[(0,e.jsx)("option",{value:"",children:"Choose an option"}),(0,e.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),(0,e.jsx)("option",{value:"Software & IT Service",children:"Software & IT Service"}),(0,e.jsx)("option",{value:"Finance & Investment",children:"Finance & Investment"})]})}),i.service&&(0,e.jsx)("span",{className:"error-msg",children:i.service})]})}),(0,e.jsx)("div",{className:"col-lg-12",children:(0,e.jsxs)("div",{className:`classic-input-group ${_("message")?"floated":""} ${i.message?"has-error":""}`,children:[(0,e.jsx)("label",{className:"classic-label",children:"Type your message here *"}),(0,e.jsx)("textarea",{className:`classic-input ${i.message?"is-invalid":""}`,value:o.message,onChange:t=>g("message",t.target.value),onFocus:()=>y("message"),onBlur:()=>h("message"),required:!0,disabled:m}),i.message&&(0,e.jsx)("span",{className:"error-msg",children:i.message})]})}),(0,e.jsx)("div",{className:"col-lg-12",children:(0,e.jsx)("button",{type:"submit",className:"classic-btn",disabled:m,children:m?(0,e.jsxs)(e.Fragment,{children:["Sending Message... ",(0,e.jsx)("i",{className:"fa-solid fa-spinner fa-spin"})]}):(0,e.jsxs)(e.Fragment,{children:["Send Now ",(0,e.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})})})]})})]})})};var f=t.i(56833);let u=()=>(0,e.jsx)("div",{className:"header-top-section",children:(0,e.jsx)("div",{className:"container-fluid",children:(0,e.jsxs)("div",{className:"header-top-wrapper",children:[(0,e.jsx)("div",{className:"header-left",children:(0,e.jsxs)("ul",{className:"list",children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{className:"fa-solid fa-location-dot"}),"Coimbatore, Tamil Nadu, India"]}),(0,e.jsx)("li",{children:"।"}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{className:"fa-regular fa-envelope"}),(0,e.jsx)(a.default,{href:"mailto:intellectworks58@gmail.com",children:"intellectworks58@gmail.com"})]})]})}),(0,e.jsxs)("div",{className:"header-right",children:[(0,e.jsxs)("span",{children:[(0,e.jsx)("i",{className:"fa-regular fa-clock"})," Mon–Fri 09:30 AM – 06:00 PM"]}),(0,e.jsxs)("div",{className:"social-icon",children:[(0,e.jsx)(a.default,{href:"#",children:(0,e.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,e.jsx)(a.default,{href:"#",children:(0,e.jsx)("i",{className:"fa-brands fa-linkedin"})}),(0,e.jsx)(a.default,{href:"#",children:(0,e.jsx)("i",{className:"fa-brands fa-instagram"})})]})]})]})})});var m=t.i(84491),p=t.i(7270),y=t.i(71063);t.s(["default",0,()=>{let{sticky:t}=(0,m.default)(),[n,l]=(0,s.useState)(!1),[c,h]=(0,s.useState)(!1),[g,v]=(0,s.useState)(!1);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u,{}),(0,e.jsx)("header",{id:"header-sticky",className:`header-1 ${t?"sticky":""}`,children:(0,e.jsx)("div",{className:"container-fluid",children:(0,e.jsx)("div",{className:"mega-menu-wrapper",children:(0,e.jsxs)("div",{className:"header-main",children:[(0,e.jsx)("div",{className:"header-left",children:(0,e.jsxs)("div",{className:"logo",children:[(0,e.jsx)(a.default,{href:"/",className:"header-logo",children:(0,e.jsx)(o.default,{src:p.default,alt:"logo-img"})}),(0,e.jsx)(a.default,{href:"/",className:"header-logo-2",children:(0,e.jsx)(o.default,{src:y.default,alt:"logo-img"})})]})}),(0,e.jsx)("div",{className:"mean__menu-wrapper",children:(0,e.jsx)("div",{className:"main-menu",children:(0,e.jsx)("nav",{id:"mobile-menu",className:"d-none d-xl-block",children:(0,e.jsx)(f.default,{})})})}),(0,e.jsxs)("div",{className:"header-right d-flex justify-content-end align-items-center",children:[(0,e.jsx)("div",{className:"menu_search",children:(0,e.jsx)("button",{onClick:()=>h(!0),className:"search_btn",children:(0,e.jsx)("i",{className:"far fa-search"})})}),(0,e.jsxs)("div",{className:"header-btn",children:[(0,e.jsxs)("h6",{children:[(0,e.jsx)("i",{className:"fa-regular fa-phone-volume"}),(0,e.jsx)("a",{href:"tel:+919306978124",children:"+(91) 9306978124"})]}),(0,e.jsx)("div",{className:"header-button",children:(0,e.jsxs)("button",{onClick:()=>v(!0),className:"theme-btn border-0",children:["Get In Touch ",(0,e.jsx)("i",{className:"fa-solid fa-arrow-up-right"})]})}),(0,e.jsx)("div",{className:"header__hamburger d-xl-none my-auto",children:(0,e.jsx)("div",{onClick:()=>l(!0),className:"sidebar__toggle",children:(0,e.jsx)("i",{className:"fas fa-bars"})})})]})]})]})})})}),(0,e.jsx)(r.default,{offCanvas:n,setOffCanvas:l}),(0,e.jsx)(i.default,{isSearch:c,setIsSearch:h}),(0,e.jsx)(d,{isOpen:g,onClose:()=>v(!1)})]})}],70667)}]);