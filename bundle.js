!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){for(var n=[],i=arguments.length,a=new Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];return function t(e,n){if(null!=e)if("string"==typeof e||"number"==typeof e)n.push(e.toString());else if(Array.isArray(e))for(var r=0;r<e.length;r++)t(e[r],n);else n.push(e)}(a,n),"function"==typeof t?t(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{children:n})):{tag:t,props:e,children:n}}n.r(e);var a=864e5;function c(t,e){var n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((r-n)/a)}function l(){}function u(){var t=new Date;return t.setHours(0,0,0,0,0),t}function s(){var t=u();return t.setFullYear(t.getFullYear()-1),t}var f=["#eee","#c6e48b","#7bc96f","#239a3b","#196127"];function p(t){return t.count?t.count>45?f[4]:t.count>30?f[3]:t.count>15?f[2]:f[1]:f[0]}function y(t){return t>9?"".concat(t):"0".concat(t)}function g(t){var e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"".concat(e,"-").concat(y(n),"-").concat(y(r))}function h(t){var e=t.values,n=t.size,r=t.space,o=t.padX,a=t.padY,c=t.colorFun,l=t.onClick;return i("g",null,e.map((function(t,e){var u=n+2*r,s=o+e*u+r,f=a+r;return i("g",null,t.map((function(t){return i("rect",{class:"cg-day",x:s,y:t.day*u+f,width:n,height:n,fill:c(t),"data-count":t.count,"data-date":g(t.date),onClick:function(){return l(t)}})})))})))}var d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function b(t){var e=t.styles,n=t.values,r=t.size,o=t.space,a=t.padX,c=t.padY,l=r+2*o,u=2*l,s=[];return n.forEach((function(t,e){t.forEach((function(t,n){if(0===n&&0===t.day){var r=t.date.getMonth(),i=e*l+a+o,c=s.slice(-1).pop();(!c||r!==c.month&&i-c.x>u)&&s.push({month:r,x:i})}}))})),i("g",null,s.map((function(t,n){return i("text",{key:n,x:t.x,y:c/2,style:e.text},d[t.month])})))}function v(t){var e=t.styles,n=t.size,r=t.space,o=t.padX,a=t.padY,c=n+2*r,l=c/2;return i("g",null,[{v:"M",y:a+1*c+l},{v:"W",y:a+3*c+l},{v:"F",y:a+5*c+l}].map((function(t,n){return i("text",{key:n,x:o/2,y:t.y,style:e.text2},t.v)})))}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w="12px",P='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';function x(t){for(var e=t.data,n=void 0===e?[]:e,r=t.onClick,o=void 0===r?l:r,a=t.colorFun,f=void 0===a?p:a,y=t.startDate,d=void 0===y?s():y,O=t.endDate,j=void 0===O?u():O,x=t.size,k=void 0===x?12:x,S=t.space,D=void 0===S?1:S,E=t.padX,C=void 0===E?20:E,B=t.padY,M=void 0===B?20:B,T=t.styleOptions,F=void 0===T?{}:T,A=[],Y=c(d,j),R=n.reduce((function(t,e){return t[e.date]=e.count,t}),{}),z=0,X=0;X<=Y;X+=1){var $=new Date(d);$.setDate($.getDate()+X);var _=$.getDay(),L=R[g($)]||0;(0===_&&0!==X||0===X)&&(A.push([]),z+=1),A[z-1].push({count:L,date:$,day:_})}var N=k+2*D,q=z*N+2*C,I=7*N+M+10,J="0 0 ".concat(q," ").concat(I),U={styles:function(t){var e=t.textColor,n=void 0===e?"#959494":e,r=t.fontSize,o=void 0===r?w:r,i=t.fontFamily,a={fill:n,"font-size":o,"font-family":void 0===i?P:i,"dominant-baseline":"central"};return{text:a,text2:m({},a,{"text-anchor":"middle"})}}(F),values:A,size:k,space:D,colorFun:f,padX:C,padY:M,onClick:o};return i("svg",{width:q,height:I,viewBox:J},i("rect",{x:0,y:0,width:q,height:I,fill:"#fff"}),i(h,U),i(b,U),i(v,U))}function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var S="http://www.w3.org/2000/svg",D=document;function E(t,e){var n=t.tag,r=t.props,o=t.children,i=D.createElementNS(S,n);return r&&function(t,e){Object.keys(e).forEach((function(n){var r=e[n];"style"===n&&"object"===k(r)?Object.keys(r).forEach((function(e){t.style[e]=r[e]})):"onClick"===n?"function"==typeof r&&t.addEventListener("click",r):t.setAttribute(n,r)}))}(i,r),o.forEach((function(t){i.appendChild("string"==typeof t?D.createTextNode(t):E(t,e))})),i}function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var F=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom="string"==typeof e?document.querySelector(e):e,this.data=n,this.options=r,this.render()}var e,n,r;return e=t,(n=[{key:"setData",value:function(t){this.data=t,this.render()}},{key:"setOptions",value:function(t){this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.options,{},t),this.render()}},{key:"render",value:function(){var t=this.data,e=this.options;this.tree&&this.dom.removeChild(this.tree),this.tree=E(i(x,C({data:t},e))),this.dom.appendChild(this.tree)}}])&&T(e.prototype,n),r&&T(e,r),t}();function A(){return(A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var X=function(){function t(e,n){var r,o,i,a,c,l=this,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=(o="string"==typeof(r=e)?document.querySelector(r):r,i=o.getContext("2d"),a=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1,c=(window.devicePixelRatio||1)/a,["width","height"].forEach((function(t){Object.defineProperty(i,t,{get:function(){return o[t]/c},set:function(e){o[t]=e*c,o.style[t]="".concat(e,"px"),i.scale(c,c)},enumerable:!0,configurable:!0})})),o.addEventListener("click",(function(t){if(i.onClick){var e=o.getBoundingClientRect();i.onClick({x:(t.clientX-e.left)*c,y:(t.clientY-e.top)*c})}})),i),this.data=n,this.options=u,this.render(),this.ctx.onClick=function(t){return l.render(t)}}var e,n,r;return e=t,(n=[{key:"setData",value:function(t){this.data=t,this.render()}},{key:"setOptions",value:function(t){this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(n,!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.options,{},t),this.render()}},{key:"render",value:function(t){!function t(e,n,r){var o=e.tag,i=e.props,a=e.children;if("svg"===o){var c=i.width,l=i.height;n.width=c,n.height=l}if("rect"===o){var u=i.x,s=i.y,f=i.width,p=i.height,y=i.fill,g=i.onClick;n.beginPath(),n.moveTo(u,s),n.lineTo(u+f,s),n.lineTo(u+f,s+p),n.lineTo(u,s+p),n.lineTo(u,s),r&&g&&n.isPointInPath(r.x,r.y)&&g(),n.closePath(),y&&(n.fillStyle=y),n.fill()}if("text"===o){var h=i.x,d=i.y,b=i.style;b&&(n.fillStyle=b.fill,n.textBaseline={central:"middle",middle:"middle",hanging:"hanging",alphabetic:"alphabetic",ideographic:"ideographic"}[b["dominant-baseline"]]||"alphabetic",n.textAlign={start:"start",middle:"center",end:"end"}[b["text-anchor"]]||"start",n.font="".concat(b["font-weight"]||""," ").concat(b["font-size"]," ").concat(b["font-family"])),n.fillText(a.join(""),h,d)}a.forEach((function(e){"string"!=typeof e&&t(e,n,r)}))}(i(x,A({data:this.data},this.options)),this.ctx,t)}}])&&z(e.prototype,n),r&&z(e,r),t}();function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){var n=t.tag,r=t.props,o=t.children,i=[];return i.push("<".concat(n)),Object.keys(r||{}).forEach((function(t){var e=r[t];"onClick"!==t&&("style"===t&&"object"===$(e)&&(e=Object.keys(e).map((function(t){return"".concat(t,":").concat(e[t],";")})).join("")),i.push(" ".concat(t,'="').concat(String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"),'"')))})),o&&o.length?(i.push(">"),o.forEach((function(t){"string"==typeof t?i.push(String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")):i.push(_(t,e))})),i.push("</".concat(n,">")),i.join("")):(i.push(" />"),i.join(""))}function L(){return(L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var J=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.options=n}var e,n,r;return e=t,(n=[{key:"setData",value:function(t){this.data=t}},{key:"setOptions",value:function(t){this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.options,{},t)}},{key:"render",value:function(){return _(i(x,L({data:this.data},this.options)))}}])&&I(e.prototype,n),r&&I(e,r),t}(),U=function(){for(var t=u(),e=s(),n=c(e,t),r=[],o=0;o<=n;o++){var i=new Date(e);i.setDate(i.getDate()+o);var a=g(i),l=Math.floor(50*Math.random());r.push({date:a,count:l})}return r}(),H={onClick:function(t){console.log(t)}},W=(new F("#svg",U,H),new X("#canvas",U,H),new J(U,H));document.querySelector("#str").textContent=function(t){t=t.replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3").replace(/ *(.*) +\n/g,"$1\n").replace(/(<.+>)(.+\n)/g,"$1\n$2");for(var e="",n=t.split("\n"),r=0,o="other",i={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0},a=0;a<n.length;a++){var c=n[a];if(c.match(/\s*<\?xml/))e+=c+"\n";else{var l=Boolean(c.match(/<.+\/>/)),u=Boolean(c.match(/<\/.+>/)),s=Boolean(c.match(/<[^!].*>/)),f=l?"single":u?"closing":s?"opening":"other",p=o+"->"+f;o=f;var y="";r+=i[p];for(var g=0;g<r;g++)y+="  ";"opening->closing"==p?e=e.substr(0,e.length-1)+c+"\n":e+=y+c+"\n"}}return e}(W.render()),function(){for(var t=document.getElementById("tooltip"),e=document.getElementsByClassName("cg-day"),n=function(e){var n=(e=e||window.event).target||e.srcElement,r=n.getBoundingClientRect(),o=n.getAttribute("data-count"),i=n.getAttribute("data-date");t.style.display="block",t.textContent="".concat(o," contributions on ").concat(i);var a=t.getBoundingClientRect().width;t.style.left="".concat(r.left-a/2+6,"px"),t.style.top="".concat(r.top-35,"px")},r=function(e){e=e||window.event,t.style.display="none"},o=0;o<e.length;o++)document.body.addEventListener?(e[o].addEventListener("mouseover",n,!1),e[o].addEventListener("mouseout",r,!1)):(e[o].attachEvent("onmouseover",n),e[o].attachEvent("onmouseout",r))}()}]);