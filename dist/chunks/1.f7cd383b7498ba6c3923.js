(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,,,function(t,e,r){var n=r(13);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(15).default)("5e4cc2a7",n,!1,{})},function(t,e,r){t.exports=r(10)},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return E()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function l(){}function d(){}function h(){}var p={};p[a]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==e&&r.call(m,a)&&(p=m);var g=h.prototype=l.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=u(t[a],t,o);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(l).then((function(t){f.value=t,i(f)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=g.constructor=h,h.constructor=d,d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),c(g,i,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)}))}}},function(t,e,r){"use strict";var n=r(8);r.n(n).a},function(t,e,r){(e=r(14)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),e.push([t.i,'body{background:#222;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:"Montserrat",sans-serif}.squares-container{display:grid;grid-template-columns:repeat(2, 1fr)}.squares-container__text{width:100%;grid-column:span 2;text-align:center;font-size:25px}.square{width:200px;height:200px;pointer-events:none}.square_cursor{cursor:pointer;pointer-events:auto}.game-container{display:flex}.controls{margin-left:2rem}.controls h3{font-size:28px}.controls button{padding:.5rem 2rem;background:#66f7f3;outline:none;border:none;border-radius:4px;cursor:pointer}.controls__difficulty-radio{display:flex;flex-direction:column}.controls__difficulty-radio label{margin-left:.6rem}',""]),t.exports=e},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var a=(i=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(o).concat([a]).join("\n")}var i,c,s;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);n&&a[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},a=0;a<e.length;a++){var o=e[a],i=o[0],c={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}r.r(e),r.d(e,"default",(function(){return h}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,u=!1,f=function(){},l=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,r,a){u=r,l=a||{};var i=n(t,e);return p(i),function(e){for(var r=[],a=0;a<i.length;a++){var c=i[a];(s=o[c.id]).refs--,r.push(s)}e?p(i=n(t,e)):i=[];for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}}function p(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(m(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(a=0;a<r.parts.length;a++)i.push(m(r.parts[a]));o[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function m(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(u)return f;n.parentNode.removeChild(n)}if(d){var a=s++;n=c||(c=v()),e=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else n=v(),e=b.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,r,n){var a=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function b(t,e){var r=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),l.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Simon The Game")]),r("div",{staticClass:"game-container"},[r("div",{staticClass:"squares-container"},[t.game.active?t._e():r("p",{staticClass:"squares-container__text"},[t._v("Чтобы начать нажмите Старт")]),t.game.active&&!t.game.wait.status?r("p",{staticClass:"squares-container__text"},[t._v("Запоминайте")]):t._e(),t.game.active&&t.game.wait.status?r("p",{staticClass:"squares-container__text"},[t._v("А теперь повторите")]):t._e(),t._l(t.squares,(function(e,n){return r("div",{key:n,ref:e.refName,refInFor:!0,staticClass:"square",class:{square_cursor:t.game.active&&t.game.wait.status},style:{"background-color":e.colorDefault},on:{click:function(e){return t.checkInput(n)}}})}))],2),r("div",{staticClass:"controls"},[r("h3",[t._v("Раунд: "+t._s(t.game.round))]),t.game.failed?r("p",[t._v("Вы проиграли после "+t._s(t.game.fail.rounds)+" раундов")]):t._e(),t.game.active?t._e():r("button",{on:{click:function(e){return e.preventDefault(),t.gameStart(e)}}},[t._v("Старт")]),t.game.active?r("button",{on:{click:function(e){return e.preventDefault(),t.gameStop(e)}}},[t._v("Стоп")]):t._e(),r("h2",[t._v("Уровни сложности:"),r("div",{staticClass:"controls__difficulty-radio"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.game.difficulty,expression:"game.difficulty"}],attrs:{type:"radio",name:"difficulty",value:"easy"},domProps:{checked:t._q(t.game.difficulty,"easy")},on:{change:function(e){return t.$set(t.game,"difficulty","easy")}}}),r("label",[t._v("Легкий")])]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.game.difficulty,expression:"game.difficulty"}],attrs:{type:"radio",name:"difficulty",value:"medium"},domProps:{checked:t._q(t.game.difficulty,"medium")},on:{change:function(e){return t.$set(t.game,"difficulty","medium")}}}),r("label",[t._v("Средний")])]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.game.difficulty,expression:"game.difficulty"}],attrs:{type:"radio",name:"difficulty",value:"hard"},domProps:{checked:t._q(t.game.difficulty,"hard")},on:{change:function(e){return t.$set(t.game,"difficulty","hard")}}}),r("label",[t._v("Сложный")])])])])])])])};n._withStripped=!0;var a=r(9),o=r.n(a),i=r(11),c=r.n(i),s=r.p+"assets/a0381688a4cdbb099110f4ef5d6e6c40.ogg",u=r.p+"assets/dd6d32b9e9823ce8f96866a8b6b10c69.ogg",f=r.p+"assets/af2265a18de57f4c95c8263c28092266.ogg",l=r.p+"assets/487e01f9ed29679ee83f51eade33c872.ogg";function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p={data:function(){return{game:{round:0,active:!1,failed:!1,difficulty:"easy",delay:{easy:1.5,medium:1,hard:.4},input:[],order:[],wait:{status:!1,resolve:"",reject:""},fail:{rounds:""}},squares:[{colorDefault:"#ff7a70",colorActive:"#ff1b0a",sound:s,refName:"red"},{colorDefault:"#ffffa6",colorActive:"#ffff05",sound:u,refName:"yellow"},{colorDefault:"#c0ff8a",colorActive:"#7dff0d",sound:f,refName:"green"},{colorDefault:"#74c3f7",colorActive:"#19a4ff",sound:l,refName:"blue"}]}},methods:{gameStart:function(){var t=this;return c()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.game.active){e.next=2;break}return e.abrupt("return");case 2:t.game.active=!0,t.game.failed=!1,t.game.round=0;case 5:if(!t.game.active){e.next=17;break}return t.game.order=t._getRandomOrder(),e.next=9,t._showCombination(t.game.order);case 9:return e.next=11,t._sleep(.7);case 11:return e.next=13,t._waitInput().then((function(){t.game.round++,t.game.wait.status=!1}),(function(){t.game.active=!1,t.game.failed=!0,t.game.fail.rounds=t.game.round,t.game.wait.status=!1}));case 13:return e.next=15,t._sleep(2);case 15:e.next=5;break;case 17:case"end":return e.stop()}}),e)})))()},gameStop:function(){this.game.active=!1,this.game.failed=!0,this.game.fail.rounds=this.game.round,this.game.wait.status=!1},checkInput:function(t){this.game.active&&this.game.wait.status&&(this._squareActive(t),t===this.game.order[0]?this.game.order.splice(0,1):this.game.wait.reject(),0===this.game.order.length&&this.game.wait.resolve())},_waitInput:function(){var t=this;return new Promise((function(e,r){t.game.wait.resolve=e,t.game.wait.reject=r,t.game.wait.status=!0}))},_playSound:function(t){return new Promise((function(e){var r=new Audio(t);r.play(),r.addEventListener("ended",e)}))},_sleep:function(t){var e=1e3*t;return new Promise((function(t){setTimeout(t,e)}))},_showCombination:function(t){var e=this;return c()(o.a.mark((function r(){var n,a,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=d(t),r.prev=1,n.s();case 3:if((a=n.n()).done){r.next=12;break}if(i=a.value,e._squareActive(i),t.indexOf(i)!==t.length-1){r.next=8;break}return r.abrupt("break",12);case 8:return r.next=10,e._sleep(e.game.delay[e.game.difficulty]);case 10:r.next=3;break;case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),n.e(r.t0);case 17:return r.prev=17,n.f(),r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[1,14,17,20]])})))()},_squareActive:function(t){var e=this;return c()(o.a.mark((function r(){var n,a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.squares[t],(a=e.$refs[n.refName][0]).style.backgroundColor=n.colorActive,r.next=5,e._playSound(n.sound);case 5:a.style.backgroundColor=n.colorDefault;case 6:case"end":return r.stop()}}),r)})))()},_getRandomInt:function(){return Math.floor(4*Math.random())+0},_getRandomOrder:function(){for(var t=this.game.round+2,e=[];t>0;)e.push(this._getRandomInt()),t--;return e}}},v=(r(12),r(2)),m=Object(v.a)(p,n,[],!1,null,null,null);m.options.__file="src/client/pages/Home.vue";e.default=m.exports}]]);