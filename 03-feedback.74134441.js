var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):r.test(e)?i:+e}t=function(e,t,i){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(n);return p(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(e,t,i){var o,r,a,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function j(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function T(){var e,n,i,o=g();if(S(o))return h(o);f=setTimeout(T,(e=o-l,n=o-c,i=t-e,d?v(i,a-n):i))}function h(e){return(f=void 0,b&&o)?j(e):(o=r=void 0,u)}function O(){var e,n=g(),i=S(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(T,t),s?j(e):u;if(d)return f=setTimeout(T,t),j(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,p(i)&&(s=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},O.flush=function(){return void 0===f?u:h(g())},O}(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=document.querySelector("form input"),S=document.querySelector("form textarea");let T={};const h="feedback";b.addEventListener("submit",function(e){if(e.preventDefault(),""===j.value||""===S.value)return alert("Fields must be filled in");console.log(T),localStorage.removeItem(h),e.currentTarget.reset(),T={}}),b.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){let t=e.target.value,n=e.target.name;T[n]=t,localStorage.setItem(h,JSON.stringify(T))},500)),function(){let e=JSON.parse(localStorage.getItem(h));e.email&&(j.value=e.email,T.email=e.email),e.message&&(S.value=e.message,T.message=e.message)}();
//# sourceMappingURL=03-feedback.74134441.js.map
