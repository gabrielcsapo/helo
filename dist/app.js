!function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],p=0,b=[];p<c.length;p++)o=c[p],a[o]&&b.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);b.length;)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n,o=i[t],c=!0,s=1;s<o.length;s++)n=o[s],0!==a[n]&&(c=!1);c&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var o={},a={1:0},i=[];r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([20,0]),n()}({20:function(e,t,n){n(21),n(24),e.exports=n(34)},25:function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o),r.locals&&(e.exports=r.locals)},26:function(e,t,n){(e.exports=n(13)(!0)).push([e.i,"* {\n  font-family: Open Sans, sans-serif\n}\n\nbody {\n  margin-bottom: 50px;\n}\n\ntable {\n  word-break: normal !important;\n  max-width: 100%;\n  width: 100%;\n  display: table;\n}\n\n.navbar {\n  background-color: white;\n  border-top: 5px solid #222;\n  border-bottom: 2px solid #ddd;\n}\n\n.btn-group > .btn {\n  border-radius: 0 !important;\n}\n\n.status-updated {\n  width: 15px;\n\theight: 15px;\n  display: inline-block;\n\tbackground: rgba(0, 128, 0, 0.50);\n\t-moz-border-radius: 15px;\n\t-webkit-border-radius: 15px;\n\tborder-radius: 15px;\n}\n\n.status-notupdated {\n  width: 15px;\n\theight: 15px;\n\tbackground: rgba(255, 0, 0, 0.50);\n  display: inline-block;\n\t-moz-border-radius: 15px;\n\t-webkit-border-radius: 15px;\n\tborder-radius: 15px;\n}\n","",{version:3,sources:["/Users/gabrielcsapo/Documents/starbuck/src/style.css"],names:[],mappings:"AAAA;EACE,kCAAkC;CACnC;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,YAAY;EACZ,eAAe;CAChB;;AAED;EACE,wBAAwB;EACxB,2BAA2B;EAC3B,8BAA8B;CAC/B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,YAAY;CACb,aAAa;EACZ,sBAAsB;CACvB,kCAAkC;CAClC,yBAAyB;CACzB,4BAA4B;CAC5B,oBAAoB;CACpB;;AAED;EACE,YAAY;CACb,aAAa;CACb,kCAAkC;EACjC,sBAAsB;CACvB,yBAAyB;CACzB,4BAA4B;CAC5B,oBAAoB;CACpB",file:"style.css",sourcesContent:["* {\n  font-family: Open Sans, sans-serif\n}\n\nbody {\n  margin-bottom: 50px;\n}\n\ntable {\n  word-break: normal !important;\n  max-width: 100%;\n  width: 100%;\n  display: table;\n}\n\n.navbar {\n  background-color: white;\n  border-top: 5px solid #222;\n  border-bottom: 2px solid #ddd;\n}\n\n.btn-group > .btn {\n  border-radius: 0 !important;\n}\n\n.status-updated {\n  width: 15px;\n\theight: 15px;\n  display: inline-block;\n\tbackground: rgba(0, 128, 0, 0.50);\n\t-moz-border-radius: 15px;\n\t-webkit-border-radius: 15px;\n\tborder-radius: 15px;\n}\n\n.status-notupdated {\n  width: 15px;\n\theight: 15px;\n\tbackground: rgba(255, 0, 0, 0.50);\n  display: inline-block;\n\t-moz-border-radius: 15px;\n\t-webkit-border-radius: 15px;\n\tborder-radius: 15px;\n}\n"],sourceRoot:""}])},34:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function O(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function B(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function T(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);n(25);var D=n(12),L=n(0),R=n.n(L),M=n(16),Y=n(18),U=n(9),z=n(1),q=n.n(z),G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,i(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,L.Component),function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(t,[{key:"render",value:function(){var e=this.props.children;return R.a.createElement("div",null,R.a.createElement("div",{className:"navbar"},R.a.createElement("div",{className:"container"},R.a.createElement("div",{className:"navbar-title"},R.a.createElement("a",{className:"text-black",href:"/",style:{width:"120px"}},R.a.createElement("img",{src:"/logo.svg",style:{display:"inline-block",width:"35px"}}))))),R.a.createElement("div",{className:"content"},e))}}]),t}();G.propTypes={children:q.a.object};var J=n(17),Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,p(t).call(this,e))).state={service:"github"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,L.Component),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"onChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t.target.value))}},{key:"navigateToUser",value:function(){var e=this.state,t=e.owner,n=e.service;this.props.history.push("/".concat(n,"/").concat(t,"/"))}},{key:"render",value:function(){return R.a.createElement("div",{style:{borderBottom:"1px solid #dedede"},className:"text-center"},R.a.createElement("input",{type:"text",placeholder:"username",onChange:this.onChange.bind(this,"owner"),style:{width:"50%",display:"inline",marginRight:"5px"}}),R.a.createElement("select",{onChange:this.onChange.bind(this,"service"),style:{display:"inline"}},R.a.createElement("option",{name:"github"},"Github"),R.a.createElement("option",{name:"gitlab"},"Gitlab")),R.a.createElement("button",{style:{padding:"6px 18px"},className:"btn btn-success",onClick:this.navigateToUser.bind(this)},"go"))}}]),t}(),F=Object(J.a)(Z),H=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,h(t).call(this,e))).state={exampleLink:"".concat(location.href,"badge/:service/:repo/:type.svg")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,L.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"toggleLink",value:function(e){this.setState({exampleLink:"string"==typeof e?e:"".concat(location.href,"badge/:service/:repo/:type.svg")})}},{key:"render",value:function(){var e=this.state.exampleLink,t=document.location;return R.a.createElement("div",null,R.a.createElement(F,null),R.a.createElement("div",{style:{width:"50%",margin:"15% auto"},className:"text-center"},R.a.createElement("img",{src:"/logo.svg",style:{display:"inline-block",width:"35px"}}),R.a.createElement("h3",{className:"text-black"}," STARBUCK"),R.a.createElement("small",null,"NPM dependency tracking server"),R.a.createElement("br",null),R.a.createElement("pre",null,"<img src=",e,"/>"),R.a.createElement("a",{style:{paddingRight:"2px"},href:"/github/gabrielcsapo/starbuck",onMouseEnter:this.toggleLink.bind(this,"".concat(t.href,"badge/github/gabrielcsapo/dev-status.svg")),onMouseLeave:this.toggleLink.bind(this)},R.a.createElement("img",{src:"/badge/github/gabrielcsapo/starbuck/dev-status.svg"})),R.a.createElement("a",{style:{paddingRight:"2px"},href:"/github/gabrielcsapo/starbuck",onMouseEnter:this.toggleLink.bind(this,"".concat(t.href,"badge/github/gabrielcsapo/status.svg")),onMouseLeave:this.toggleLink.bind(this)},R.a.createElement("img",{src:"/badge/github/gabrielcsapo/starbuck/status.svg"})),R.a.createElement("a",{style:{paddingRight:"2px"},href:"/github/gabrielcsapo/starbuck",onMouseEnter:this.toggleLink.bind(this,"".concat(t.href,"badge/github/gabrielcsapo/peer-status.svg")),onMouseLeave:this.toggleLink.bind(this)},R.a.createElement("img",{src:"/badge/github/gabrielcsapo/starbuck/peer-status.svg"})),R.a.createElement("br",null),R.a.createElement("a",{className:"btn",href:"https://github.com/gabrielcsapo/starbuck",target:"_blank",rel:"noopener noreferrer"},"Source"),R.a.createElement("a",{className:"btn",href:"https://github.com/gabrielcsapo/starbuck/releases",target:"_blank",rel:"noopener noreferrer"},"Releases")))}}]),t}(),I=Object(J.a)(H),K=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=E(this,w(t).call(this,e)),e.repos&&e.service&&e.owner)return n.state={repos:e.repos,service:e.service,owner:e.owner,loading:!1,error:""},E(n);var r=e.match.params,o=r.service,a=r.owner;n.state={service:o,owner:a,repos:[],loading:!1,error:""};var i="/api/".concat(o,"/").concat(a,"/repos");return fetch(i).then(function(e){return e.json()}).then(function(e){e.error?n.setState({error:e.error,loading:!1}):n.setState({repos:e,loading:!1})}).catch(function(e){n.setState({error:e,loading:!1})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,L.Component),function(e,t,n){t&&v(e.prototype,t),n&&v(e,n)}(t,[{key:"render",value:function(){var e=this.state,t=e.repos,n=e.loading,r=e.error,o=e.service,a=e.owner;return n?R.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",top:"50%",transform:"translateY(-50%)"}},"Loading..."):r?R.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",top:"50%",transform:"translateY(-50%)"}},r):R.a.createElement("div",{style:{width:"90%",margin:"0 auto"}},R.a.createElement("div",{className:"grid"},R.a.createElement("div",{className:"col-12-12"},R.a.createElement("h2",null," ",o,"/",a," "),R.a.createElement("ul",{className:"list"},t.map(function(e,t){var n=e.description,r=e.name;return R.a.createElement("li",{key:"".concat(r,"/").concat(t),className:"list-item"},R.a.createElement("a",{href:"/".concat(o,"/").concat(a,"/").concat(r)},R.a.createElement("h3",{style:{padding:0,margin:0}},r),R.a.createElement("small",null,n)))})))))}}]),t}();K.propTypes={match:q.a.object,repos:q.a.array,service:q.a.string,owner:q.a.string};var Q=function(e){function t(e){var n;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),n=O(this,x(t).call(this,e));var r=e.selectedTab;return n.state={selected:r||"dependencies",sort:"name",direction:1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,L.Component),function(e,t,n){t&&C(e.prototype,t),n&&C(e,n)}(t,[{key:"changeTab",value:function(e){var t=this.props.changeTab;"function"==typeof t&&t(e),this.setState({selected:e})}},{key:"sort",value:function(e,t,n){return 1===t?n.sort(function(t,n){return t[e]>n[e]?-1:1}):n.sort(function(t,n){return t[e]<n[e]?-1:1})}},{key:"setStort",value:function(e){var t=this.state,n=t.sort,r=t.direction;this.setState({sort:e,direction:e===n?-r:1})}},{key:"render",value:function(){var e=this.state,t=e.selected,n=e.sort,r=e.direction,o=this.props[t];return o=Object.keys(o).map(function(e){return o[e].name=e,o[e]},[]),R.a.createElement("div",{className:"text-center"},R.a.createElement("div",{className:"btn-group"},R.a.createElement("button",{className:"btn ".concat("dependencies"===t?"btn-primary":"btn-white"),onClick:this.changeTab.bind(this,"dependencies")},"dependencies (",Object.keys(this.props.dependencies).length,")"),R.a.createElement("button",{className:"btn ".concat("devDependencies"===t?"btn-primary":"btn-white"),onClick:this.changeTab.bind(this,"devDependencies")},"devDependencies (",Object.keys(this.props.devDependencies).length,")"),R.a.createElement("button",{className:"btn ".concat("peerDependencies"===t?"btn-primary":"btn-white"),onClick:this.changeTab.bind(this,"peerDependencies")},"peerDependencies (",Object.keys(this.props.peerDependencies).length,")")),R.a.createElement("br",null),R.a.createElement("br",null),R.a.createElement("table",{className:"table"},R.a.createElement("thead",null,R.a.createElement("tr",null,R.a.createElement("th",{onClick:this.setStort.bind(this,"name")},"name ","name"===n&&1===r?"˄":"name"===n&&-1===r?"˅":""),R.a.createElement("th",{onClick:this.setStort.bind(this,"required")},"required ","required"===n&&1===r?"˄":"required"===n&&-1===r?"˅":""),R.a.createElement("th",{onClick:this.setStort.bind(this,"stable")},"stable ","stable"===n&&1===r?"˄":"stable"===n&&-1===r?"˅":""),R.a.createElement("th",{onClick:this.setStort.bind(this,"latest")},"latest ","latest"===n&&1===r?"˄":"latest"===n&&-1===r?"˅":""),R.a.createElement("th",{onClick:this.setStort.bind(this,"needsUpdating")},"status ","needsUpdating"===n&&1===r?"˄":"needsUpdating"===n&&-1===r?"˅":""))),R.a.createElement("tbody",null,0<o.length?this.sort(n,r,o).map(function(e,t){return R.a.createElement("tr",{key:t},R.a.createElement("td",null,e.name),R.a.createElement("td",null,e.required),R.a.createElement("td",null,e.stable),R.a.createElement("td",null,e.latest),R.a.createElement("td",null,R.a.createElement("span",{className:e.needsUpdating?"status-notupdated":"status-updated"})))}):R.a.createElement("tr",null,R.a.createElement("td",{colSpan:"5",style:{"text-align":"center",height:"".concat(window.innerHeight/2,"px")}}," No ",t," Found ")))))}}]),t}();Q.propTypes={changeTab:q.a.function,dependencies:q.a.object,devDependencies:q.a.object,peerDependencies:q.a.object,selectedTab:q.a.string};var V=function(e){function t(e){var n;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),n=T(this,P(t).call(this,e));var r=e.match.params,o=r.service,a=r.owner,i=r.repo,c=r.selectedTab;n.state={info:{},error:"",loading:!0,selectedTab:c||"dependencies"};var s="/api/".concat(o,"/").concat(a,"/").concat(i);return fetch(s).then(function(e){return e.json()}).then(function(e){e.error?n.setState({error:e.error,loading:!1}):n.setState({info:e,loading:!1})}).catch(function(e){n.setState({error:e,loading:!1})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,L.Component),function(e,t,n){t&&B(e.prototype,t),n&&B(e,n)}(t,[{key:"changeTab",value:function(e){this.setState({selectedTab:e})}},{key:"render",value:function(){var e=this.props.match.params,t=e.service,n=e.owner,r=e.repo,o=this.state,a=o.info,i=o.selectedTab,c=o.error;if(o.loading)return R.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",top:"50%",transform:"translateY(-50%)"}},"Loading...");if(c)return"could not find package"===c?R.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",top:"50%",transform:"translateY(-50%)"}},"☁️ The package ",r," for ",n," could not be found.",R.a.createElement("br",null),"Good news is, you can make one! 🔧"):R.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",top:"50%",transform:"translateY(-50%)"}},"Something has gone wrong, please open an issue ",R.a.createElement("a",{href:"https://github.com/gabrielcsapo/starbuck/issues"},"here"),R.a.createElement("br",null),R.a.createElement("br",null),R.a.createElement("pre",{style:{width:"80%",margin:"0 auto",border:"1px solid rgba(162, 162, 162, 0.64)"}},c.toString()));var s=a.name,l=a.description,u=a.version,p=a.starbuck,b={devDependencies:"dev-status",dependencies:"status",peerDependencies:"peer-status"}[i];return document.title="".concat(r," v").concat(u||"?"),R.a.createElement("div",{style:{width:"60%",margin:"0 auto"}},a?R.a.createElement("div",null,R.a.createElement("div",{style:{position:"relative"}},R.a.createElement("h2",null," ",R.a.createElement("a",{href:"/".concat(t,"/").concat(n)},t,"/",n),"/",s," (",u||"no version",") "),R.a.createElement("small",null," ",R.a.createElement("i",null," ",l||"no description"," ")," "),R.a.createElement("img",{src:"/badge/".concat(t,"/").concat(n,"/").concat(r,"/").concat(b,".svg"),style:{position:"absolute",right:0,marginTop:"10px",marginBottom:"-10px"}})),R.a.createElement("br",null),R.a.createElement("hr",null),R.a.createElement("br",null),R.a.createElement(Q,_({},p,{selectedTab:i,changeTab:this.changeTab.bind(this)}))):R.a.createElement("div",{className:"spinner-overlay center",style:{padding:"10px 0px 10px 0px"}},R.a.createElement("div",{className:"spinner-wrapper"},R.a.createElement("div",{className:"spinner spinner-primary"}))))}}]),t}();V.propTypes={match:q.a.object,selectedTab:q.a.string};var W=R.a.createElement(M.a,null,R.a.createElement(G,null,R.a.createElement(Y.a,null,R.a.createElement(U.a,{exact:!0,path:"/",component:I}),R.a.createElement(U.a,{exact:!0,path:"/:service/:owner/",component:K}),R.a.createElement(U.a,{exact:!0,path:"/:service/:owner/:repo/:selectedTab?",component:V}))));Object(D.render)(W,document.body)}});