!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1);const n=document.querySelector(".board__image"),o=document.getElementById("board-rot"),r=document.querySelector(".header__button"),a=document.getElementById("overlay");n.addEventListener("click",()=>{o.classList.toggle("rot")}),r.addEventListener("click",()=>{r.classList.toggle("colour"),a.classList.toggle("active"),r.classList.toggle("change"),r.classList.toggle("animated")})},function(e,t,i){var n=i(2),o=i(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);e.exports=o.locals||{}},function(e,t,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function c(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},n=[],o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],p=i[s]||0,d="".concat(s," ").concat(p);i[s]=p+1;var l=c(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(u)):a.push({identifier:d,updater:f(u,t),references:1}),n.push(d)}return n}function p(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,g=0;function f(e,t){var i,n,o;if(t.singleton){var r=g++;i=h||(h=p(t)),n=u.bind(null,i,r,!1),o=u.bind(null,i,r,!0)}else i=p(t),n=m.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=c(i[n]);a[o].references--}for(var r=s(e,t),p=0;p<i.length;p++){var d=c(i[p]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}i=r}}}},function(e,t,i){var n=i(4),o=i(5),r=i(6),a=i(7),c=i(8),s=i(9),p=i(10),d=i(11);t=n(!1);var l=o(r),u=o(a),m=o(c),h=o(s),g=o(p),f=o(d);t.push([e.i,'.header{width:100%;height:80px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:30px}.header__company{display:flex;text-align:left;flex-direction:row;margin-left:10%}.header__logo{font-family:"Qwigley",cursive;color:white;margin-right:10px;font-size:1.5rem}.header__name{color:#3D8697;font-size:1.2rem;font-weight:800}.header__button{z-index:25;right:0;background-color:#366E7A;width:70px;height:45px;border-radius:35px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-right:10%;transition:all 0.3s;cursor:pointer}@media (min-width: 768px){.header__button{display:none}}.header__line{width:30px;height:4px;background-color:#e2eceb;margin:3px 0;border-radius:30%;transition:0.3s}.header__line2{width:30px;height:4px;background-color:#e2eceb;margin:3px 0;border-radius:30%;transition:transform 0.3s}.change .header__line{transform:rotateZ(-45deg) translate(-4px, 3px);border-radius:30%;transition:transform 0.3s;background-color:#366E7A}.change .header__line2{transform:rotateZ(45deg) translate(-4px, -3px);border-radius:30%;transition:transform 0.3s;background-color:#366E7A}.colour{background-color:#e2eceb;z-index:25;transition:all 0.3s;box-shadow:1px 1px #202020}.hero{display:flex;flex-direction:row}.hero__title{font-size:3.4rem;text-transform:uppercase;color:#3D3A48;font-weight:bold;margin-left:10%;line-height:1;padding:20px 0 10px 0}@media (min-width: 991px){.hero__title{padding-left:40px}}.hero__description{font-size:1.4rem;font-family:"Qwigley",cursive;margin-left:10%;color:#3D3A48}@media (min-width: 991px){.hero__description{padding-left:40px}}.hero__tag{display:none}@media (min-width: 768px){.hero__tag{display:flex;flex-direction:row;margin:80px 0 0 200px}}@media (min-width: 991px){.hero__tag{margin:30px 0 0 150px}}.hero__line{width:4px;height:45px;background-color:white}.hero__info{color:#315259;font-family:"Poppins",sans-serif;font-size:1.2rem;line-height:0.5;margin-left:10px}.hero__info--bold{margin:0  0 10px 10px;font-weight:700;font-size:1.2rem;line-height:0.5;color:#315259;font-family:"Poppins",sans-serif}.carousel-item{transition:transform 0.8s ease-in-out !important}.card{background-color:transparent;border:none;margin-top:150px}.container-carousel-desktop{display:none}@media (min-width: 768px){.container-carousel-desktop{display:initial;margin-top:100px}}.carousel-indicators li{background-color:#09334b;transform:translateY(-105px);height:10px;width:10px;border-radius:100%}.container-carousel-mobile{max-height:500px;max-width:550px;margin:0 auto;transform:translateY(130px)}@media (min-width: 768px){.container-carousel-mobile{display:none}}.carousel-control-prev-icon,.carousel-control-next-icon{transform:translateY(-45px)}.comment{width:100%;position:absolute}.comment__slider{margin:auto;width:290px;height:100px;background-image:url('+l+");animation:slide 8s infinite}@media (min-width: 768px){.comment__slider{margin:20px 0 0 5%}}@keyframes slide{10%{background-image:url("+l+");background-size:cover}66%{background-image:url("+u+");background-size:cover}100%{background-image:url("+m+');background-size:cover}}.desktop{display:none;width:300px}@media (min-width: 768px){.desktop{display:inline-block;margin-right:10%}}@media (min-width: 991px){.desktop{margin-right:17%}}.desktop__list{display:flex;flex-direction:row;justify-content:space-between}.desktop__item{list-style:none;font-family:"Qwigley",cursive;font-size:1.6rem;color:#3D3A48;cursor:pointer;z-index:35}.desktop a{color:#3D3A48;opacity:1;transition:opacity 0.2s}.desktop a:hover{opacity:0.5;text-decoration:none;transition:opacity 0.2s}.board{position:absolute;z-index:30;top:0;right:65px;height:95vh;display:none;transform:rotate(10deg);transition:ease-in-out 0.5s;margin:auto}@media (min-width: 991px){.board{display:block}}@media (min-width: 1200px){.board{right:105px}}.board--home{right:-250px}.board__image{height:100%;cursor:pointer}.rot{transform:rotate(-10deg);transition:ease-in-out 0.5s}.overlay{height:100vh;width:100%;background-color:transparent;backdrop-filter:blur(10px) brightness(35%);position:absolute;z-index:20;display:none;margin:0 auto}.overlay__menu{width:100%;height:100%}.overlay__list{max-width:768px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;list-style:none;text-align:justify;position:relative}.overlay__item{display:flex;align-items:center;justify-content:center;height:120px;width:100%;position:relative;text-align:center}.overlay__object{text-transform:none;text-shadow:3px 3px #202020;letter-spacing:1.5px;text-align:justify;color:#e2eceb;position:relative;list-style:none;font-family:"Poppins",sans-serif;font-size:2.2rem;font-weight:light}.overlay__object:hover{color:#e2eceb;transition:ease-in-out 0.2s;text-decoration:none;font-size:2.5rem}.active{display:block}.overlay__item:hover{background-color:#678d96;border:1px solid #5c5c5c;transition:ease-in-out 0.3s}.about{background-color:transparent;height:100vh;max-width:1440px;display:flex;align-items:center;justify-content:center;margin:0 auto}.about__content{width:100%;display:flex;flex-direction:column;margin:0 auto;padding:0 20px;justify-content:left}@media (min-width: 991px){.about__content{max-width:65%;padding:0 500px 0 80px}}.about__title{font-family:"Poppins",sans-serif;font-size:30px;margin:0;padding-bottom:10px;color:#315259}@media (min-width: 991px){.about__title{font-size:40px}}.about__subtitle{font-family:"Qwigley",cursive;font-size:25px;margin:0;padding-bottom:25px;color:#3D3A48;padding-bottom:30px}.about__description{font-size:16px;text-align:justify;line-height:1.6;margin:0 auto;color:#3D3A48}@media (min-width: 991px){.about__description{font-size:18px}}.about__button{margin:5% 0 5% 0;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;text-align:center;width:80px;height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.about__button:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.about__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.about__home:hover{color:white;transition:ease-in-out .3s}}.teachers{max-width:1440px;display:flex;font-family:"Poppins",sans-serif;flex-direction:column;justify-content:center;margin:0 auto}.teachers__content{width:100%}.teachers__title{font-family:"Poppins",sans-serif;font-size:30px;margin-top:5%;margin-bottom:25px;color:#315259;text-align:center}@media (min-width: 991px){.teachers__title{font-size:40px}}.teachers__description{font-family:"Poppins",sans-serif;font-size:16px;margin:0 auto;padding:0 20px;text-align:center;line-height:1.6;color:#3D3A48}@media (min-width: 991px){.teachers__description{margin:0 10%;font-size:18px}}.teachers__team{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:75px}@media (min-width: 991px){.teachers__team{margin-top:100px}}.teachers__name{font-family:"Qwigley",cursive;font-size:24px;color:#315259;text-align:center}.teachers__image{display:block;height:200px;width:200px;margin:0 20px;cursor:pointer}.teachers__button{margin:5% 0 10% 5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;text-align:center;width:80px;height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.teachers__button:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.teachers__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.teachers__home:hover{color:white;transition:ease-in-out .3s}}.teachers__person{transform:scale(1);transition:ease-in-out .3s;margin-top:20px}@media (min-width: 768px){.teachers__person:hover{transform:scale(1.1);transition:ease-in-out .3s}}.price{max-width:1440px;display:flex;flex-direction:column;justify-content:space-around;font-family:"Poppins",sans-serif;margin:0 auto}.price__content{width:100%;text-align:center;padding-bottom:30px}@media (min-width: 991px){.price__content{padding:50px 0}}.price__title{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;text-align:center;margin-bottom:25px}@media (min-width: 991px){.price__title{font-size:40px}}.price__description{font-family:"Poppins",sans-serif;line-height:1.6;text-align:center;color:#3D3A48;margin:0 auto;font-size:16px;padding:0 20px}@media (min-width: 991px){.price__description{margin:0 10%;font-size:18px}}.price__tiles{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (min-width: 768px){.price__tiles{flex-direction:row;flex-wrap:wrap}}.price__info{width:280px;height:400px;border:.5px solid #D6D3E2;box-shadow:0 4px 32px 0 rgba(0,0,0,0.6);background-color:white;margin:15px;display:flex;flex-direction:column;justify-content:center}@media (min-width: 540px){.price__info{width:320px}}@media (min-width: 768px){.price__info{width:350px;margin:30px}}.price__heading{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;text-align:center;margin-top:15px;font-weight:lighter}.price__cost{display:flex;flex-direction:row;align-items:baseline;justify-content:center;color:#3D3A48}.price__pound{font-size:20px;margin-right:10px}.price__amount{font-size:50px;margin:20px 0}.price__list{list-style:none;padding-left:30px}@media (min-width: 540px){.price__list{padding-left:50px}}@media (min-width: 768px){.price__list{padding-left:70px}}.price__check{padding-bottom:15px;color:#4e4e50;font-weight:lighter}.price__buy{width:100%;display:flex;justify-content:center}.price__button{border:1px solid #5b6b82;border-radius:15px;font-size:18px;color:#5b6b82;background-color:transparent;text-align:center;width:150px;margin:20px 0;height:40px;cursor:pointer;opacity:1;transition:opacity .3s;outline:none}@media (min-width: 768px){.price__button{width:200px;font-size:20px}}.price__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s}.price__back{margin:20px 0 20px 9%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;width:80px;height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.price__back:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.price__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.price__home:hover{color:white;transition:ease-in-out .3s}}.far{margin-right:8px;color:green}.contact{max-width:1440px;background-position:center;background-size:cover;background-repeat:no-repeat;font-family:"Poppins",sans-serif;margin:0 auto}.contact__title{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;text-align:center;margin:40px 0  20px 0}@media (min-width: 991px){.contact__title{font-size:40px}}.contact__description{line-height:1.5;text-align:center;color:#3D3A48;margin:auto;font-size:16px;margin:0 10px}@media (min-width: 991px){.contact__description{font-size:18px}}.contact__container{width:100%;margin-top:30px}@media (min-width: 991px){.contact__container{display:flex;flex-direction:row;margin-top:50px}}.contact__content{width:100%}@media (min-width: 991px){.contact__content{width:40%}}.contact__info{display:flex;flex-direction:column;margin-bottom:25px}.contact__detail{color:#3D3A48;display:flex;justify-content:center;margin-bottom:10px}.contact__detail--extra{padding-left:35px;margin-bottom:10px;color:#3D3A48;display:flex;justify-content:center}.contact__social-media{padding-top:40px;height:100px;text-align:center;border-top:.5px solid #3D3A48;margin:auto 40px}@media (min-width: 991px){.contact__social-media{margin:auto 10%}}.contact__button{margin:3% 0 5% 5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;width:80px;height:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.contact__button:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.contact__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.contact__home:hover{color:white;transition:ease-in-out .3s}}#map{width:90%;margin:auto;height:300px;background-color:grey;margin-bottom:20px}@media (min-width: 991px){#map{width:60%;margin-right:30px;height:400px}}.fas{color:#315259;font-size:20px;margin:auto 0;padding-right:15px}.fab{font-size:30px;margin:15px;color:#3D3A48;cursor:pointer}@media (min-width: 768px){.fa-facebook-f:hover{color:#4267B2}.fa-twitter:hover{color:#00acee}.fa-instagram:hover{color:#8a3ab9}}*{margin:0;padding:0}html{scroll-behavior:smooth;font-size:16px;font-family:"Poppins",sans-serif}.master{width:100%;height:100vh;background-image:url('+h+");background-position:right;background-size:cover;background-repeat:no-repeat;overflow:hidden}.container{max-width:1440px;background-image:url("+g+");background-position:left;background-size:cover;background-repeat:no-repeat;padding:0;height:100vh}@media (min-width: 768px){.container{background-image:url("+f+");background-repeat:no-repeat;background-position:center;height:100vh;width:100%}}@media (min-width: 991px){.container{transform:translate(40px, 40px);margin-left:0;height:75%;width:80%;background-position:top}}body{display:block !important;width:100%;height:100%;background-image:url("+h+");background-position:right;background-size:cover;background-repeat:no-repeat}\n",""]),e.exports=t},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var o=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[i].concat(r).concat([o]).join("\n")}var a,c,s;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),t.push(s))}},t}},function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,i){"use strict";i.r(t),t.default=i.p+"images/comment1.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"images/comment2.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"images/comment3.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"images/background-wave.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"images/mobile_background.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"images/background-medium.png"}]);