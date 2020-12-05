!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(1);const n=document.querySelector(".board__image"),o=document.getElementById("board-rot"),r=document.querySelector(".header__button"),a=document.getElementById("overlay");n.addEventListener("click",()=>{o.classList.toggle("rot")}),r.addEventListener("click",()=>{r.classList.toggle("colour"),a.classList.toggle("active"),r.classList.toggle("change"),r.classList.toggle("animated")})},function(t,e,i){var n=i(2),o=i(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);t.exports=o.locals||{}},function(t,e,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),a=[];function c(t){for(var e=-1,i=0;i<a.length;i++)if(a[i].identifier===t){e=i;break}return e}function s(t,e){for(var i={},n=[],o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],p=i[s]||0,d="".concat(s," ").concat(p);i[s]=p+1;var l=c(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(u)):a.push({identifier:d,updater:h(u,e),references:1}),n.push(d)}return n}function p(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function g(t,e,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var m=null,f=0;function h(t,e){var i,n,o;if(e.singleton){var r=f++;i=m||(m=p(e)),n=u.bind(null,i,r,!1),o=u.bind(null,i,r,!0)}else i=p(e),n=g.bind(null,i,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var i=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var o=c(i[n]);a[o].references--}for(var r=s(t,e),p=0;p<i.length;p++){var d=c(i[p]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}i=r}}}},function(t,e,i){var n=i(4),o=i(5),r=i(6),a=i(7),c=i(8),s=i(9),p=i(10),d=i(11),l=i(12);e=n(!1);var u=o(r),g=o(a),m=o(c),f=o(s),h=o(p),x=o(d),b=o(l);e.push([t.i,'*{margin:0;padding:0}html{scroll-behavior:smooth;font-size:16px;font-family:"Poppins",sans-serif}body{width:100%;height:100vh}@media (min-width: 991px){body{background-image:url('+u+");background-position:right;background-size:cover;background-repeat:no-repeat}}.container{max-width:1440px;background-image:url("+g+");background-position:left;background-size:cover;background-repeat:no-repeat;padding:0;overflow:hidden}@media (min-width: 768px){.container{background-image:url("+m+');background-repeat:no-repeat;background-position:bottom;height:100%;background-size:hidden}}@media (min-width: 991px){.container{margin-top:50px;height:75%;width:80%;margin-left:60px;background-position:top;overflow:visible}}.header{width:100%;height:80px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:30px}.header__company{display:flex;text-align:left;flex-direction:row;margin-left:10%}.header__logo{font-family:"Qwigley",cursive;color:white;margin-right:10px;font-size:1.5rem}.header__name{color:#3D8697;font-size:1.2rem;font-weight:800}.header__button{z-index:25;right:0;background-color:#366E7A;width:70px;height:45px;border-radius:35px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-right:10%;transition:all 0.3s;cursor:pointer}@media (min-width: 768px){.header__button{display:none}}.header__line{width:30px;height:4px;background-color:#e2eceb;margin:3px 0;border-radius:30%;transition:0.3s}.header__line2{width:30px;height:4px;background-color:#e2eceb;margin:3px 0;border-radius:30%;transition:transform 0.3s}.change .header__line{transform:rotateZ(-45deg) translate(-4px, 3px);border-radius:30%;transition:transform 0.3s;background-color:#366E7A}.change .header__line2{transform:rotateZ(45deg) translate(-4px, -3px);border-radius:30%;transition:transform 0.3s;background-color:#366E7A}.colour{background-color:#e2eceb;z-index:25;transition:all 0.3s;box-shadow:1px 1px #202020}.hero{display:flex;flex-direction:row}.hero__title{font-size:3.4rem;text-transform:uppercase;color:#3D3A48;font-weight:bold;margin-left:10%;line-height:1;padding:20px 0 10px 0}@media (min-width: 991px){.hero__title{padding-left:40px}}.hero__description{font-size:1.4rem;font-family:"Qwigley",cursive;margin-left:10%;color:#3D3A48}@media (min-width: 991px){.hero__description{padding-left:40px}}.hero__tag{display:none}@media (min-width: 768px){.hero__tag{display:flex;flex-direction:row;margin:80px 0 0 200px}}@media (min-width: 991px){.hero__tag{margin:30px 0 0 150px}}.hero__line{width:4px;height:45px;background-color:white}.hero__info{color:#315259;font-family:"Poppins",sans-serif;font-size:1.2rem;line-height:0.5;margin-left:10px}.hero__info--bold{margin:0  0 10px 10px;font-weight:700;font-size:1.2rem;line-height:0.5;color:#315259;font-family:"Poppins",sans-serif}.card{background-color:transparent;border:none;margin-top:20%}.carousel-indicators li{border-radius:50%;width:10px;height:10px;background-color:white;transform:translateY(-90px);z-index:20}.carousel-item{padding-top:50px;transition:transform 0.8s ease-in-out !important}.container-carousel-mobile{max-height:500px;margin:150px auto 0 auto}.container-carousel-desktop{display:none}@media (min-width: 768px){.container-carousel-mobile{display:none}.container-carousel-desktop{display:initial}.carousel-indicators li{background-color:#315259;padding-bottom:0;z-index:20;transform:translateY(-50px)}}.comment{width:100%;position:absolute}.comment__slider{margin:0px auto 0 auto;width:290px;height:100px;background-image:url('+f+");animation:slide 25s infinite;margin-bottom:100px}@media (min-width: 768px){.comment__slider{margin:20px 0 0 5%}}@keyframes slide{10%{background-image:url("+f+")}66%{background-image:url("+h+")}100%{background-image:url("+x+')}}.desktop{display:none;width:300px}@media (min-width: 768px){.desktop{display:inline-block;margin-right:10%}}@media (min-width: 991px){.desktop{margin-right:17%}}.desktop__list{display:flex;flex-direction:row;justify-content:space-between}.desktop__item{list-style:none;font-family:"Qwigley",cursive;font-size:1.6rem;color:#3D3A48;cursor:pointer;z-index:35}.desktop a{color:#3D3A48;opacity:1;transition:opacity 0.2s}.desktop a:hover{opacity:0.5;text-decoration:none;transition:opacity 0.2s}.board{position:absolute;z-index:30;top:0;right:0px;height:100vh;display:none;transform:rotate(10deg);transition:ease-in-out 0.5s;overflow:hidden}@media (min-width: 991px){.board{display:block}}.board__image{height:100%;cursor:pointer}.rot{transform:rotate(-10deg);transition:ease-in-out 0.5s;overflow:hidden}.overlay{height:100vh;width:100%;background-color:transparent;backdrop-filter:blur(10px) brightness(35%);position:absolute;z-index:20;opacity:0;margin:0 auto;transition:opacity 0.3s}.overlay__menu{width:100%;height:100%}.overlay__list{max-width:768px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;list-style:none;text-align:justify;position:relative}.overlay__item{display:flex;align-items:center;justify-content:center;height:120px;width:100%;position:relative;text-align:center}.overlay__object{text-transform:none;text-shadow:3px 3px #202020;letter-spacing:1.5px;text-align:justify;color:#e2eceb;position:relative;list-style:none;font-family:"Poppins",sans-serif;font-size:2.2rem;font-weight:light}.overlay__object:hover{color:#e2eceb;transition:ease-in-out 0.2s;text-decoration:none;font-size:2.5rem}.active{opacity:1;transition:opacity 0.3s}.overlay__item:hover{background-color:#678d96;border:1px solid #5c5c5c;transition:ease-in-out 0.3s}.about{background-image:url('+u+');background-position:center;background-repeat:no-repeat;background-size:cover;height:100vh;max-width:1440px;display:flex;align-items:center;justify-content:center;margin:0 auto}.about__content{width:100%;display:flex;flex-direction:column;margin:0 auto;padding:0 30px;justify-content:left}@media (min-width: 991px){.about__content{max-width:55%;padding:0 300px 0 30px}}.about__title{font-family:"Poppins",sans-serif;font-size:40px;margin:0;padding-bottom:10px;color:#315259}.about__subtitle{font-family:"Qwigley",cursive;font-size:25px;margin:0;padding-bottom:25px;color:#3D3A48;padding-bottom:30px}.about__description{font-size:18px;text-align:justify;line-height:1.6;margin:0 auto;color:#3D3A48}.about__board{position:absolute;z-index:10;top:0;right:0px;height:100vh;display:none;transform:rotate(10deg);transition:ease-in-out 0.5s}@media (min-width: 991px){.about__board{display:block}}.about__image{height:100%;cursor:pointer}.about-rot{transform:rotate(-10deg);transition:ease-in-out 0.5s}.about__button{margin-top:10%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:transparent;text-align:center;width:80px;height:30px;cursor:pointer;opacity:1;display:flex;align-items:center;justify-content:center}@media (min-width: 991px){.about__button{margin-top:30%;transform:translateX(-100px)}}.about__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s}.about__home{color:#5b6b82;text-align:center;text-decoration:none}.teachers{max-width:1440px;background-image:url('+u+');background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;flex-direction:column;justify-content:center;margin:0 auto}.teachers__content{width:100%}.teachers__title{font-family:"Poppins",sans-serif;font-size:40px;margin-top:5%;margin-bottom:25px;color:#315259;text-align:center}.teachers__description{font-family:"Poppins",sans-serif;font-size:18px;margin:0 auto;padding:0 20px;text-align:center;line-height:1.6;color:#3D3A48}@media (min-width: 991px){.teachers__description{margin:0 10%}}.teachers__team{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:75px}@media (min-width: 991px){.teachers__team{margin-top:100px}}.teachers__name{font-family:"Qwigley",cursive;font-size:24px;color:#315259;text-align:center}.teachers__image{display:block;height:200px;width:200px;margin:0 20px;cursor:pointer}.teachers__button{margin:5% 0 0 5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:transparent;text-align:center;width:80px;height:30px;cursor:pointer;opacity:1;display:flex;align-items:center;justify-content:center}@media (min-width: 991px){.teachers__button{margin-top:80px}}.teachers__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s}.teachers__home{color:#5b6b82;text-align:center;text-decoration:none}.teachers__person:hover{transform:scale(1.1);transition:ease-in-out .3s}.price{max-width:1440px;background-image:url('+b+');background-position:top;background-size:cover;background-repeat:no-repeat;display:flex;flex-direction:column;font-family:"Poppins",sans-serif;margin:0 auto}.price__content{width:100%;text-align:center;padding-bottom:30px}@media (min-width: 991px){.price__content{padding:50px 0}}.price__title{font-family:"Poppins",sans-serif;color:#315259;font-size:40px;text-align:center;margin-bottom:25px}.price__description{line-height:1.6;text-align:center;color:#3D3A48;margin:auto;font-size:18px}@media (min-width: 991px){.price__description{margin:0 10%}}.price__tiles{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (min-width: 768px){.price__tiles{flex-direction:row;flex-wrap:wrap}}.price__info{width:350px;border:.5px solid #D6D3E2;box-shadow:0 4px 32px 0 rgba(0,0,0,0.6);background-color:white;margin:30px}.price__heading{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;text-align:center;margin-top:15px;font-weight:lighter}.price__cost{display:flex;flex-direction:row;align-items:baseline;justify-content:center;color:#3D3A48}.price__pound{font-size:20px;margin-right:10px}.price__amount{font-size:50px;margin:20px 0}.price__list{list-style:none;padding-left:70px}.price__check{padding-bottom:15px;color:#4e4e50;font-weight:lighter}.price__buy{width:100%;display:flex;justify-content:center}.price__button{border:1px solid #5b6b82;border-radius:15px;font-size:20px;color:#5b6b82;background-color:white;text-align:center;width:200px;margin:20px 0;height:40px;cursor:pointer;opacity:1;transition:opacity .3s}.price__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s}.price__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s}.price__home{color:#5b6b82;text-align:center;text-decoration:none}.home{margin:0 0 5% 5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:transparent;text-align:center;width:80px;height:30px;cursor:pointer;opacity:1;display:flex;align-items:center;justify-content:center}@media (min-width: 991px){.home{transform:translateY(50px)}}.far{margin-right:8px;color:green}.contact{max-width:1440px;background-position:center;background-size:cover;background-repeat:no-repeat;font-family:"Poppins",sans-serif;margin:0 auto}.contact__title{font-family:"Poppins",sans-serif;color:#315259;font-size:40px;text-align:center;margin:40px 0}.contact__description{line-height:1.5;text-align:center;color:#3D3A48;margin:auto}.contact__container{width:100%;margin-top:30px}@media (min-width: 991px){.contact__container{display:flex;flex-direction:row;margin-top:50px}}.contact__content{width:100%}@media (min-width: 991px){.contact__content{width:40%;margin-top:80px}}.contact__info{display:flex;flex-direction:column;margin-bottom:25px}.contact__detail{color:#3D3A48;display:flex;justify-content:center;margin-bottom:10px}.contact__detail--extra{padding-left:35px;margin-bottom:10px;color:#3D3A48;display:flex;justify-content:center}.contact__social-media{padding-top:40px;height:100px;text-align:center;border-top:.5px solid #3D3A48}@media (min-width: 991px){.contact__social-media{margin:auto 10%}}.contact__button{margin-left:5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:transparent;text-align:center;width:80px;height:30px;cursor:pointer;opacity:1;display:flex;align-items:center;justify-content:center}@media (min-width: 991px){.contact__button{margin-top:80px}}.contact__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s}.contact__home{color:#5b6b82;text-align:center;text-decoration:none}#map{width:90%;margin:auto;height:300px;background-color:grey;margin-bottom:20px}@media (min-width: 991px){#map{width:60%;margin-right:30px;height:400px}}.fas{color:#315259;font-size:20px;margin:auto 0;padding-right:15px}.fab{font-size:30px;margin:15px;color:#3D3A48;cursor:pointer}.fa-facebook-f:hover{color:#4267B2}.fa-twitter:hover{color:#00acee}.fa-instagram:hover{color:#8a3ab9}\n',""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(r).concat([o]).join("\n")}var a,c,s;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);n&&o[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),e.push(s))}},e}},function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/background-wave.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/mobile_background.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/background-medium.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/comment1.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/comment2.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/comment3.png"},function(t,e,i){"use strict";i.r(e),e.default=i.p+"images/background-price.png"}]);