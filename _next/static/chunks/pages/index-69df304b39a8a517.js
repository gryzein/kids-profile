(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9131)}])},7994:function(e){"use strict";e.exports=function(e){var t=e.src;return"/kids-profile/img/".concat(t)}},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,c=e.priority,s=void 0!==c&&c,d=e.loading,m=e.lazyRoot,y=void 0===m?null:m,v=e.lazyBoundary,x=void 0===v?"200px":v,w=e.className,j=e.quality,_=e.width,A=e.height,N=e.objectFit,z=e.objectPosition,E=e.onLoadingComplete,I=e.loader,P=void 0===I?O:I,H=e.placeholder,R=void 0===H?"empty":H,M=e.blurDataURL,C=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=l.useRef(null),L=C,q=r?"responsive":"intrinsic";"layout"in L&&(L.layout&&(q=L.layout),delete L.layout);var T="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var W=b(t)?t.default:t;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(M=M||W.blurDataURL,T=W.src,(!q||"fill"!==q)&&(A=A||W.height,_=_||W.width,!W.height||!W.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}t="string"===typeof t?t:T;var B=k(_),U=k(A),G=k(j),F=!s&&("lazy"===d||"undefined"===typeof d);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,F=!1);p.has(t)&&(F=!1);0;var K,V=o(f.useIntersection({rootRef:y,rootMargin:x,disabled:!F}),2),Q=V[0],X=V[1],Z=!F||X,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:z},te="blur"===R?{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===q)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof B&&"undefined"!==typeof U){var re=U/B,ne=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===q?(J.display="block",J.position="relative",Y=!0,$.paddingTop=ne):"intrinsic"===q?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Y=!0,$.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(B,"%27%20height=%27").concat(U,"%27/%3e")):"fixed"===q&&(J.display="inline-block",J.position="relative",J.width=B,J.height=U)}else 0;var ie={src:g,srcSet:void 0,sizes:void 0};Z&&(ie=S({src:t,unoptimized:a,layout:q,width:B,quality:G,sizes:r,loader:P}));var oe=t;0;var ae;0;var ce=(i(ae={},"imagesrcset",ie.srcSet),i(ae,"imagesizes",ie.sizes),ae),se=l.default.useLayoutEffect,le=l.useRef(E);return l.useEffect((function(){le.current=E}),[E]),se((function(){Q(D.current)}),[Q]),l.useEffect((function(){!function(e,t,r,n,i){var o=function(){var r=e.current;r&&(r.src!==g&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(p.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),i.current)){var o=r.naturalWidth,a=r.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(D,oe,0,R,le)}),[oe,q,R,Z]),l.default.createElement("span",{style:J},Y?l.default.createElement("span",{style:$},K?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,l.default.createElement("img",Object.assign({},L,ie,{decoding:"async","data-nimg":q,className:w,ref:D,style:h({},ee,te)})),F&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},L,S({src:t,unoptimized:a,layout:q,width:B,quality:G,sizes:r,loader:P}),{decoding:"async","data-nimg":q,style:ee,className:w,loading:d||"lazy"}))),s?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ie.src+ie.srcSet+ie.sizes,rel:"preload",as:"image",href:ie.srcSet?void 0:ie.src},ce))):null)};var s,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),u=(s=r(5443))&&s.__esModule?s:{default:s},d=r(5809),f=r(7190);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var p=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t).concat(N(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(N(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(N(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||d.imageConfigDefault,x=v.deviceSizes,w=v.imageSizes,j=v.loader,_=v.path,A=(v.domains,a(x).concat(a(w)));function S(e){var t=e.src,r=e.unoptimized,n=e.layout,i=e.width,o=e.quality,c=e.sizes,s=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var c,s=.01*(c=Math).min.apply(c,a(o));return{widths:A.filter((function(e){return e>=x[0]*s})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:x,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(i,n,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,r){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:s({src:t,quality:o,width:u[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t=y.get(j);if(t)return t(h({root:_},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(j))}function N(e){return"/"===e[0]?e.slice(1):e}x.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,l=o.useRef(),u=i(o.useState(!1),2),d=u[0],f=u[1],m=i(o.useState(t?t.current:null),2),h=m[0],p=m[1],g=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&p(t.current)}),[t]),[g,d]};var o=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},9131:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893),i=r(9008),o=r(3200),a=r.n(o),c=r(7994),s=r.n(c),l=r(5675),u=function(e){var t=e.src,r=e.alt,i=e.width,o=e.height,a=e.className;return(0,n.jsx)(l.default,{src:t,className:a||"",alt:r||"Image",loader:s(),width:i||"100%",height:o||"100%",layout:"fixed"})},d=function(){return(0,n.jsx)("footer",{className:"".concat(a().footer," bg-tosca"),children:(0,n.jsx)("div",{className:"flex flex-col place-items-center items-center justify-center pt-10",children:(0,n.jsx)("div",{className:"pt-10 pb-10 text-center",children:"Copyright \xa9 2022 Gray Zein Syah Putra. All rights reserved."})})})},f=function(e){var t=e.src,r=e.caption;return(0,n.jsxs)("div",{className:"flex flex-col items-center p-10",children:[(0,n.jsx)("div",{children:(0,n.jsx)(u,{src:t,alt:"Child reading"})}),(0,n.jsx)("div",{children:r})]})},m=function(){return(0,n.jsxs)("div",{className:"".concat(a().container," pt-16 md:pt-0"),children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Gray Zein Syah Putra"}),(0,n.jsx)("meta",{name:"description",content:"Web profile Kids Profile"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"".concat(a().main," home"),children:[(0,n.jsx)(h,{}),(0,n.jsx)(p,{}),(0,n.jsx)(g,{})]}),(0,n.jsx)(d,{})]})},h=function(){return(0,n.jsxs)("div",{className:"flex flex-col md:flex-row p-4 md:p-10 md:w-3/4 items-center justify-center",children:[(0,n.jsx)("div",{className:"rounded-xl overflow-hidden items-center justify-center place-items-center",children:(0,n.jsx)(u,{src:"pfp.png",className:"items-center rounded-xl justify-center",alt:"Profile pic",width:"200px",height:"200px"})}),(0,n.jsx)("div",{className:"md:pl-10",children:(0,n.jsxs)("div",{className:"flex flex-col justify-left items-start text-left",children:[(0,n.jsx)("h1",{children:"Halo, nama saya"}),(0,n.jsx)("div",{className:"profile-name text-5xl md:text-3xl font-extrabold",children:"Gray Zein Syah Putra"}),(0,n.jsx)("p",{className:"w-96",children:"Aku Anak Indonesia Sehat dan Kuat"})]})})]})},p=function(){return(0,n.jsxs)("div",{className:"flex flex-col p-4 md:p-10 md:w-3/4 items-center justify-center",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h2",{children:"Hobby"})}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(f,{caption:"Membaca",src:"child-reading.svg"}),(0,n.jsx)(f,{caption:"Koding",src:"icon-ngoding.svg"}),(0,n.jsx)(f,{caption:"Menulis",src:"icon-checklist.svg"}),(0,n.jsx)(f,{caption:"Berhitung",src:"icon-berhitung.svg"})]})]})},g=function(){return(0,n.jsxs)("div",{className:"portfolio w-full p-10",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("h2",{children:"Portfolio"})}),(0,n.jsxs)("div",{className:"flex justify-center pt-5 space-x-2",children:[(0,n.jsx)(y,{title:"Hello world",description:"Praktik bahasa pemrograman"}),(0,n.jsx)(y,{title:"Membuat web html",description:"Praktik bahasa HTML"})]})]})},y=function(e){var t=e.title,r=e.description;return(0,n.jsxs)("div",{className:"p-5 flex border-2 rounded-xl items-center porto-item w-72",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)(u,{src:"icon-trophy.svg",alt:"Trophy icon",width:"60px",height:"60px"})}),(0,n.jsxs)("div",{className:"pl-5",children:[(0,n.jsx)("div",{className:"title cursor-pointer hover:underline",children:t}),(0,n.jsx)("p",{children:r})]})]})}},3200:function(e){e.exports={main:"Home_main__lVsQm",container:"Home_container__zBkib",footer:"Home_footer__qxmLq",title:"Home_title__vDuuH",subtitle:"Home_subtitle__mGMcv",subtitle2:"Home_subtitle2__9_a_g",subtitle3:"Home_subtitle3__frQSW",button:"Home_button__Kw1rK",description:"Home_description__65OCn",textGradient:"Home_textGradient__bQT4C",grid:"Home_grid__Xtwy8",card:"Home_card__b0Rbb",logo:"Home_logo__zltVm",gradientBar:"Home_gradientBar__rbpFd",timeline:"Home_timeline__OgU0E",time:"Home_time__gvtFu"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);