!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/rebus/",e(e.s=4)}([function(n,t,e){"use strict";function r(n,t){const e=document.createElement("template"),o=n.render(n.props);e.innerHTML=o;const s=e.content.firstElementChild,i=s.querySelector("children");return i&&function(n,t,e){n.children.map(n=>r(n,t)).forEach(n=>e.parentNode.insertBefore(n,e)),e.parentNode.removeChild(e)}(n,s,i),n.$element&&n.$parent.replaceChild(s,n.$element),n.props.focus&&s.focus(),function(n,t){Object.entries(n.props).forEach(([n,e])=>{if(function(n,t){return"function"==typeof t&&"on"===n.substr(0,2)}(n,e)){const r=n.substr(2).toLowerCase();t.addEventListener(r,e)}})}(n,s),Object.assign(n,{$parent:t,$element:s,rendered:o}),s}function o(n,t){const e=r(n,t);t.appendChild(e)}function s({props:n={},children:t=[],render:e}){return{props:n,children:t,render:e,update(){this.rendered!==this.render()&&r(this,this.$parent)}}}function i(n,t){const e={connectedComponents:[],state:n};return e.actions=new Proxy(t,{get:(n,r)=>async(...n)=>{const o=await t[r](e.state,...n);e.state=Object.assign(e.state,o),e.connectedComponents.forEach(n=>n.update())}}),e.connect=(n=>{const t=new Proxy(n,{get:(n,t)=>"render"===t?(...t)=>n.render(e.state,...t):Reflect.get(n,t)});return e.connectedComponents.push(t),t}),e}e.d(t,"a",function(){return s}),e.d(t,"c",function(){return o}),e.d(t,"b",function(){return i})},function(n,t,e){"use strict";var r=e(3),o=e(0);const s=[{symbols:["Re","+","🚌"],words:["Rebus"]},{symbols:["🏠","+","pl","+","🐜","+","s"],words:["Houseplants"]},{symbols:["📖","+","🙋","+","📝"],words:["Readme","file"]},{symbols:["🚗","+","a","+","🚐"],words:["Caravan"]},{symbols:["⭐","+","🐠"],words:["Starfish"]},{symbols:["💡","+","🏠"],words:["Lighthouse"]},{symbols:["🌲","+","🍎"],words:["Pineapple"]},{symbols:["🥚","+","🌱"],words:["Eggplant"]},{symbols:["🔥","+","🦊"],words:["Firefox"]},{symbols:["💊","+","ow"],words:["Pillow"]},{symbols:["🖊️","+","d","+","🐜"],words:["Pendant"]},{symbols:["🌡️","+","🔑"],words:["Hotkey"]},{symbols:["🌞","+","🛀"],words:["Sunbath"]},{symbols:["🐱","+","as","+","🏆","y̶","+","e"],words:["Catastrophe"]},{symbols:["🍑","🍑","+","i","n","a","t","e"],words:["Assassinate"]},{symbols:["🍌","+","🍞"],words:["Bananabread"]},{symbols:["🔑","🐗","+","d"],words:["Keyboard"]},{symbols:["💵","+","ew"],words:["cashew"]},{symbols:["🤘🏻","+","⭐️"],words:["rockstar"]},{symbols:["Tu","+","👄"],words:["Tulip"]},{symbols:["🔥","+","🐶"],words:["Hotdog"]},{symbols:["🌙","+","☀"],words:["Moonshine"]},{symbols:["💻","+","🌊"],words:["Digital","Ocean"]},{symbols:["🔥","+","🌬️","+","🎈"],words:["Hot","Air","Balloon"]},{symbols:["💵","+","⚽"],words:["Moneyball"]},{symbols:["🐂","+","👀"],words:["Bullseye"]},{symbols:["🦇","+","tery"],words:["Battery"]},{symbols:["🔒","+","smith"],words:["Locksmith"]},{symbols:["👞","+","horn"],words:["Shoehorn"]},{symbols:["🖊","+","t","+","🏠"],words:["Penthouse"]},{symbols:["🐱","+","e","+","💍"],words:["Catering"]},{symbols:["2","+","Na️","+","🐟"],words:["tunafish"]},{symbols:["🔥","+","man"],words:["Fireman"]},{symbols:["💡","+","er"],words:["Lighter"]},{symbols:["🌙","+","💡"],words:["Moonlight"]},{symbols:["f","+","🌬️","+","y"],words:["Fairy"]},{symbols:["🔨","+","⏰"],words:["Hammer","time"]},{symbols:["👻","+","🚂"],words:["Ghost","Train"]},{symbols:["🍦","+","🍦","+","👶"],words:["Ice","Ice","Baby"]},{symbols:["🚗","+","D","+","👹","+","🐏"],words:["cardiogram"]},{symbols:["🌎","+","wide","+","🕸️"],words:["world","wide","web"]},{symbols:["🐀","+","AT","+","2️","+","E"],words:["ratatouille"]},{symbols:["📖","+","🔑","+","ping"],words:["bookkeeping"]},{symbols:["sc","+","🦍","+","🐐"],words:["scapegoat"]}];function i(){return s.map((n,t)=>({id:t,...n,input:[...Array(n.words.join("").length)],isAnswered:!1}))}e.d(t,"b",function(){return l}),e.d(t,"a",function(){return u});const a={next:({current:n,rebuses:t})=>({current:n<t.length-1?n+1:0,animation:"flip-vertical-right"}),prev:({current:n,rebuses:t})=>({current:n>0?n-1:t.length-1,animation:"flip-vertical-left"}),setInput:({current:n,rebuses:t},e,r,o)=>{const s=t[n].words.slice(0,r).join(""),i=r>0?s.length+o:o,a=[...t];return a[n].input[i]=e,{updatedRebuses:a}},check:({current:n,rebuses:t},e)=>{const o=t[n];if(o.words.join("").toUpperCase()===o.input.join("").toUpperCase()){Object(r.confetti)(e);const o=[...t];return o[n].isAnswered=!0,{updatedRebuses:o,animation:"none"}}return{}}},c={current:0,animation:"none",rebuses:i()},{connect:l,actions:u}=Object(o.b)(c,a)},function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e.d(t,"e",function(){return i}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"d",function(){return l});var r=e(0),o=e(1);function s(...n){return Object(r.a)({children:n,render:()=>'\n        <div class="app">\n          <children>\n        </div>\n      '})}function i(n,...t){return Object(o.b)(Object(r.a)({props:n,children:t,render({current:t,rebuses:e,animation:o}){const s=e[t];return this.children=s.words.map((o,s)=>(function(n,...t){return Object(r.a)({props:n,children:t,render({word:t,charInput:e}){return this.children=t.split("").map((t,o)=>(function(n){return Object(r.a)({props:n,render({current:n,rebuses:t,wordIndex:e,charIndex:r}){const o=t[n],s=o.words.slice(0,e).join(""),i=e>0?s.length+r:r,a=o.input[i]||"";return`\n        <input\n          type="text"\n          maxlength="1"\n          class="word__char"\n          placeholder=" "\n          value="${a}"\n        >`}})})({charIndex:o,...n,onInput:t=>e(t.target.value,n.wordIndex,o)})),'\n          <div class="word">\n            <children>\n          </div>\n        '}})})({word:o,wordIndex:s,current:t,rebuses:e,charInput:n.charInput})),`\n          <div class="rebus ${s.isAnswered?"rebus--answered":""} animation--${o}">\n            <div class="rebus__header">\n              <span>${t+1}/${e.length}</span>\n            </div>\n            <span class="rebus__symbols">${s.symbols.join(" ")}</span>\n            <div class="rebus__words">\n              <children>\n            </div>\n          </div>\n        `}}))}function a(n){return Object(r.a)({props:n,render:({className:n=""})=>`\n        <button class="change-button ${n}">\n          <svg width="36px" height="67px" viewBox="0 0 36 67" version="1.1" xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink">\n            <defs></defs>\n            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n              <g id="App" transform="translate(-282.000000, -478.000000)" fill="#837373" fill-rule="nonzero">\n                <g id="Button.button.button--prev" transform="translate(300.000000, 511.500000) scale(-1, -1) translate(-300.000000, -511.500000) translate(282.000000, 478.000000)">\n                  <path d="M2.7,66.561337 C2.07931034,67.146221 1.0862069,67.146221 0.465517241,66.561337 C-0.155172414,65.9456697 -0.155172414,64.9606019 0.465517241,64.3449345 L31.562069,33.5 L0.465517241,2.65506547 C-0.155172414,2.03939812 -0.155172414,1.05433035 0.465517241,0.438662991 C1.0862069,-0.146220997 2.07931034,-0.146220997 2.7,0.438662991 L36,33.5 L2.7,66.561337 Z"\n                    id="Shape"></path>\n                </g>\n              </g>\n            </g>\n          </svg>\n        </button>\n      `})}function c(n){return Object(r.a)({props:n,render:({url:n})=>`\n        <a href="${n}" class="github-corner" aria-label="View source on Github">\n          <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">\n            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"\n              fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"\n              fill="currentColor" class="octo-body"></path>\n          </svg>\n        </a>\n      `})}function l(){return Object(r.a)({render:()=>'\n      <svg class="logo" width="52px" height="52px" viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n          <g id="App" transform="translate(-49.000000, -41.000000)" fill="#fff">\n            <g id=".header" transform="translate(43.000000, 32.000000)">\n              <path d="M25.92,48.64 L22.24,48.64 L22.24,20.4 L30.96,20.4 C33.093344,20.4 34.7066612,20.7066636 35.8,21.32 C36.8933388,21.9333364 37.7466636,22.8266608 38.36,24 C38.9733364,25.1733392 39.28,26.4533264 39.28,27.84 C39.28,28.9600056 39.0666688,30.0133284 38.64,31 C38.2133312,31.9866716 37.6133372,32.8933292 36.84,33.72 C36.0666628,34.5466708 34.9066744,35.2799968 33.36,35.92 C33.9466696,36.2400016 34.3999984,36.5599984 34.72,36.88 C35.0400016,37.2000016 35.4133312,37.7066632 35.84,38.4 C36.2666688,39.0933368 36.6399984,39.706664 36.96,40.24 L41.44,48.64 L37.28,48.64 L33.36,41.2 C32.3466616,39.3866576 31.0933408,37.8400064 29.6,36.56 L25.92,36.56 L25.92,48.64 Z M25.92,33.68 L29.52,33.68 C31.0666744,33.68 32.2266628,33.4400024 33,32.96 C33.7733372,32.4799976 34.3866644,31.8000044 34.84,30.92 C35.2933356,30.0399956 35.52,29.0933384 35.52,28.08 C35.52,27.1733288 35.3333352,26.3733368 34.96,25.68 C34.5866648,24.9866632 34.0533368,24.4000024 33.36,23.92 C32.6666632,23.4399976 31.4666752,23.2 29.76,23.2 L25.92,23.2 L25.92,33.68 Z M57.84,60.88 L52.8,60.96 L52.8,58.88 L55.92,58.88 L55.92,55.6 L57.92,55.6 L57.84,60.88 Z M49.76,60.88 L43.36,60.88 L43.36,58.88 L49.76,58.88 L49.76,60.88 Z M39.84,60.88 L33.6,60.88 L33.6,58.88 L39.84,58.88 L39.84,60.88 Z M29.92,60.88 L23.68,60.88 L23.68,58.88 L29.92,58.88 L29.92,60.88 Z M20.64,60.88 L14.32,60.88 L14.4,58.88 L20.64,58.96 L20.64,60.88 Z M11.36,60.88 L6,60.88 L6.16,55.52 L8.16,55.52 L8.16,58.88 L11.36,58.88 L11.36,60.88 Z M8.16,52.24 L6.08,52.24 L6.08,46.08 L8.16,46.16 L8.16,52.24 Z M8.16,42.88 L6,42.88 L6.08,36.8 L8.16,36.8 L8.16,42.88 Z M8.16,33.68 L6,33.68 L6.08,27.44 L8.16,27.36 L8.16,33.68 Z M8.16,24.4 L6,24.4 L6.16,17.92 L8.16,17.92 L8.16,24.4 Z M8.16,14.96 L6.16,14.96 L6.16,10 L11.36,9.84 L11.36,11.92 L8.24,11.92 L8.16,14.96 Z M14.4,11.92 L14.4,9.92 L20.72,10 L20.64,11.92 L14.4,11.92 Z M23.76,11.92 L23.68,10 L30,9.84 L30.08,12 L23.76,11.92 Z M33.68,12 L33.68,10 L40,10 L40,11.92 L33.68,12 Z M43.36,11.92 L43.36,10 L50,10 L49.92,12 L43.36,11.92 Z M52.96,10 L58,10 L57.92,15.12 L55.92,15.12 L55.92,11.92 L52.88,12.08 L52.96,10 Z M57.92,18.08 L57.92,24.48 L55.92,24.48 L55.92,18 L57.92,18.08 Z M57.92,27.44 L57.92,33.76 L56,33.68 L55.92,27.44 L57.92,27.44 Z M57.84,36.96 L57.84,42.96 L55.92,42.96 L55.92,36.88 L57.84,36.96 Z M57.76,46.16 L57.76,52.32 L55.92,52.4 L55.92,46.16 L57.76,46.16 Z"\n                id="Logo.logo"></path>\n            </g>\n          </g>\n        </g>\n      </svg>\n      '})}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.angle,o=void 0===e?90:e,s=t.decay,i=void 0===s?.9:s,a=t.spread,c=void 0===a?45:a,l=t.startVelocity,u=void 0===l?45:l,d=t.elementCount,f=void 0===d?50:d,p=t.colors,h=void 0===p?r:p,b=t.random,m=void 0===b?Math.random:b,g=function(n,t,e){return Array.from({length:t}).map(function(t,r){var o=document.createElement("div"),s=e[r%e.length];return o.style["background-color"]=s,o.style.width="10px",o.style.height="10px",o.style.position="absolute",n.appendChild(o),o})}(n,f,h).map(function(n){return{element:n,physics:function(n,t,e,r){var o=n*(Math.PI/180),s=t*(Math.PI/180);return{x:0,y:0,wobble:10*r(),velocity:.5*e+r()*e,angle2D:-o+(.5*s-r()*s),angle3D:-Math.PI/4+r()*(Math.PI/2),tiltAngle:r()*Math.PI}}(o,c,u,m)}});!function(n,t,e){var r=200,o=0;requestAnimationFrame(function s(){t.forEach(function(n){return function(n,t,e){n.physics.x+=Math.cos(n.physics.angle2D)*n.physics.velocity,n.physics.y+=Math.sin(n.physics.angle2D)*n.physics.velocity,n.physics.z+=Math.sin(n.physics.angle3D)*n.physics.velocity,n.physics.wobble+=.1,n.physics.velocity*=e,n.physics.y+=3,n.physics.tiltAngle+=.1;var r=n.physics,o=r.x,s=r.y,i=r.tiltAngle,a=r.wobble,c=o+10*Math.cos(a),l=s+10*Math.sin(a),u="translate3d("+c+"px, "+l+"px, 0) rotate3d(1, 1, 1, "+i+"rad)";n.element.style.transform=u,n.element.style.opacity=1-t}(n,o/r,e)});o+=1;o<r?requestAnimationFrame(s):t.forEach(function(t){if(t.element.parentNode===n)return n.removeChild(t.element)})})}(n,g,i)};var r=["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"init",function(){return i});var r=e(0),o=e(2),s=e(1);e(6);function i(){return Object(r.c)(Object(o.a)(Object(o.d)(),Object(o.c)({url:"https://github.com/ollelauribostrom/rebus"}),Object(o.b)({className:"change-button--prev",onClick:()=>s.a.prev()}),Object(o.e)({charInput:(n,t,e)=>{const r=document.querySelector(".confetti-canon");s.a.setInput(n,t,e),s.a.check(r)}}),Object(o.b)({className:"change-button--next",onClick:()=>s.a.next()})),document.querySelector(".root"))}n&&n.isTestRun||i()}.call(this,e(5))},function(n,t){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){var r=e(7);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(9)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(t=n.exports=e(8)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Raleway);",""]),t.push([n.i,"html,\nbody,\n.root,\n.app {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n*:focus {\n  outline: 0;\n}\n\n.root {\n  background-color: #330000;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.app {\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  display: grid;\n  grid-template-rows: 1fr 3fr 1fr;\n  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;\n  grid-column-gap: 30px;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n\n.rebus {\n  background-color: #1542e642;\n  grid-column-start: 3;\n  align-self: center;\n  grid-row-start: 2;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  display: grid;\n  grid-template-rows: 40px auto;\n  grid-row-gap: 30px;\n  padding-bottom: 20px;\n}\n\n.rebus:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.rebus--answered {\n  background-color: #26bd88b0;\n}\n\n.rebus__header {\n  background-color: #1d1d1d1a;\n  font-size: 14px;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.rebus__symbols {\n  align-self: center;\n  justify-self: center;\n  font-size: 3em;\n  text-align: center;\n  padding: 0 20px;\n}\n\n.rebus__words {\n  padding: 0 20px;\n}\n\n.word {\n  margin-bottom: 20px;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 50px);\n}\n\n.word__char {\n  height: 50px;\n  border: 1px solid #fff;\n  background-color: transparent;\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: 'Raleway', sans-serif;\n  text-transform: uppercase;\n}\n\n.word__char:not(:placeholder-shown) {\n  background-color: #0000004d;\n}\n\n.word__char:active,\n.word__char:focus {\n  background-color: #0000001f;\n}\n\n.change-button {\n  background-color: transparent;\n  border: 0;\n  font-size: 20px;\n  cursor: pointer;\n  padding: 10px;\n  align-self: center;\n  justify-self: flex-start;\n}\n\n.change-button svg {\n  height: 36px;\n}\n\n.change-button path {\n  fill: #fff;\n}\n\n.change-button:hover path,\n.change-button:active path,\n.change-button:focus path {\n  fill: rgba(2, 107, 139, 0.3);\n}\n\n.change-button--prev {\n  grid-column-start: 2;\n  grid-row-start: 2;\n  justify-self: flex-end;\n}\n\n.change-button--next {\n  transform: rotate(180deg);\n  grid-column-start: 4;\n  grid-row-start: 2;\n}\n\n.confetti-canon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n\n/* ----------------------------------------------\n * GitHub Corners\n * w: https://github.com/tholman/github-corners\n * ---------------------------------------------- */\n\n.github-corner {\n  fill: #951e89;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  border: 0;\n  right: 0;\n}\n\n.github-corner:hover .octo-arm {\n  animation: octocat-wave 560ms ease-in-out;\n}\n\n@keyframes octocat-wave {\n  0%,\n  100% {\n    transform: rotate(0);\n  }\n  20%,\n  60% {\n    transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    transform: rotate(10deg);\n  }\n}\n\n@media (min-width: 501px) and (max-width: 1024px) {\n  .change-button--prev {\n    grid-column-start: 1;\n  }\n  .change-button--next {\n    grid-column-start: 5;\n  }\n  .rebus {\n    grid-column-start: 2;\n    grid-column-end: span 3;\n  }\n}\n\n@media (max-width: 500px) {\n  .logo {\n    display: none;\n  }\n  .app {\n    grid-template-rows: 1fr 8fr 2fr;\n  }\n  .github-corner {\n    display: none;\n  }\n  .change-button {\n    grid-row-start: 3;\n  }\n  .rebus {\n    grid-row-start: 1;\n    grid-row-end: span 2;\n    grid-column-start: 1;\n    grid-column-end: span 5;\n    border-radius: 0;\n  }\n  .rebus__header {\n    border-radius: 0;\n  }\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2018-10-2 9:2:14\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n.animation--flip-vertical-right {\n  animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;\n}\n\n.animation--flip-vertical-left {\n  animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;\n}\n\n/**\n * ----------------------------------------\n * animation flip-vertical-right\n * ----------------------------------------\n */\n@keyframes flip-vertical-right {\n  0% {\n    transform: rotateY(0);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n\n/**\n * ----------------------------------------\n * animation flip-vertical-left\n * ----------------------------------------\n */\n@keyframes flip-vertical-left {\n  0% {\n    transform: rotateY(0);\n  }\n  100% {\n    transform: rotateY(-360deg);\n  }\n}\n",""])},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),s=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(s).concat([o]).join("\n")}return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<n.length;o++){var i=n[o];"number"==typeof i[0]&&r[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),t.push(i))}},t}},function(n,t,e){var r={},o=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),i=null,a=0,c=[],l=e(10);function u(n,t){for(var e=0;e<n.length;e++){var o=n[e],s=r[o.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](o.parts[i]);for(;i<o.parts.length;i++)s.parts.push(m(o.parts[i],t))}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(m(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:a}}}}function d(n,t){for(var e=[],r={},o=0;o<n.length;o++){var s=n[o],i=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):e.push(r[i]={id:i,parts:[a]})}return e}function f(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function p(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),f(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function m(n,t){var e,r,o,s;if(t.transform&&n.css){if(!(s=t.transform(n.css)))return function(){};n.css=s}if(t.singleton){var c=a++;e=i||(i=h(t)),r=y.bind(null,e,c,!1),o=y.bind(null,e,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),f(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}.bind(null,e,t),o=function(){p(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){p(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return u(e,t),function(n){for(var o=[],s=0;s<e.length;s++){var i=e[s];(a=r[i.id]).refs--,o.push(a)}n&&u(d(n,t),t);for(s=0;s<o.length;s++){var a;if(0===(a=o[s]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var g=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}();function y(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(s,i[t]):n.appendChild(s)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,s=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?n:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?e+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
//# sourceMappingURL=main.bundle.js.map