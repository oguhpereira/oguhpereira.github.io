(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=(n(199),[{icon:"fab fa-linkedin",label:"Linkedin",link:"https://www.linkedin.com/in/oguhpereira/"},{icon:"fab fa-twitter",label:"Twitter",link:"https://www.twitter.com/oguhpereira/"},{icon:"fab fa-instagram",label:"Instagram",link:"https://www.instagram.com/oguhpereira/"},{icon:"fab fa-github",label:"GitHub",link:"https://www.github.com/oguhpereira/"},{icon:"fab fa-codepen",label:"Codepen",link:"https://codepen.io/oguhpereira/"}]),a=function(){var e=(new Date).getFullYear();return o.a.createElement("div",{className:"page"},o.a.createElement("div",{id:"p1"},o.a.createElement("div",{className:"icon"},o.a.createElement("div",{className:"profile"},o.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/24482087?s=250&v=4",alt:"Gustavo Pereira"}),o.a.createElement("div",{className:"hint"})),o.a.createElement("span",{className:"title"},"Gustavo Pereira"),o.a.createElement("div",{className:"hint"},"Mineiro, Brazilian | Developer ",e-2016,"+ years. ",o.a.createElement("br",null),"I have currently focused on the area of ​​Web and Mobile Development but I like to help in open source projects",o.a.createElement("br",null),"to update my knowledge and understand new realities, people and technologies. ",o.a.createElement("br",null),o.a.createElement("br",null),"Working full time in ",o.a.createElement("a",{href:"https://jmvtechnology.com"},"JMV Tecnology")," | CO-Organizador do ",o.a.createElement("a",{href:"http://gdgdivi.github.io"},"GDG Divinópolis"),".",o.a.createElement("br",null),o.a.createElement("br",null),"You can find me @oguhpereira on:",o.a.createElement("br",null),o.a.createElement("ul",{id:"menu-social"},i.map((function(e){return o.a.createElement("li",{className:"item-list"},o.a.createElement("a",{href:e.link},o.a.createElement("span",{className:e.icon})," ",e.label))})))))))},u=n(201),c=n.n(u);n(209),t.default=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(c.a,{title:"Gustavo Pereira",meta:[{name:"Gustavo Pereira | FullStack",content:"My simple website using gatsby"},{name:"keywords",content:"gdg, google, programming, android, chrome, developers, web, cloud, androiddev, ios, iosdev, firebase, react, angular, vue, analytics, divinopolis, divi, mg, minas, minas gerais, comunidade, community"}]},o.a.createElement("html",{lang:"pt-br"}))),o.a.createElement("div",{className:"ct",id:"t1"},o.a.createElement(a,null)))}},198:function(e,t,n){n(133),n(32),n(24),n(14),n(50),n(51),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},199:function(e,t,n){"use strict";n(200)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},200:function(e,t,n){var r=n(1),o=n(8),i=n(34),a=/"/g,u=function(e,t,n,r){var o=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},201:function(e,t,n){n(67),n(134),n(32),n(24),n(14),n(50),n(39),n(132),n(96),n(33),n(102),n(19),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(0)),a=f(n(53)),u=f(n(202)),c=f(n(205)),l=n(207),s=n(198);function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var p,E,d,A=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),m=(p=A,d=E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=T(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(p,o)},o(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=p.peek,E.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},202:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(33),n(51),n(68),n(132),n(96);var o=n(0),i=r(o),a=r(n(203)),u=r(n(204));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c=[],l=void 0;function s(){l=e(c.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),s()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",f.canUseDOM=a.canUseDOM,f}}},203:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},204:function(e,t,n){n(70),n(32),n(24),n(14),n(50),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var s=e[l],f=t[l];if(!1===(o=n?n.call(r,s,f,l):void 0)||void 0===o&&s!==f)return!1}return!0}},205:function(e,t,n){"use strict";n(68),n(135),n(71),n(98),n(206),n(32),n(24),n(14),n(50),n(67);var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),f=r(n);if(s&&f){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=f)return!1;var T=t instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==n.getTime();var E=t instanceof RegExp,d=n instanceof RegExp;if(E!=d)return!1;if(E&&d)return t.toString()==n.toString();var A=o(t);if((c=A.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,A[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=A[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},206:function(e,t,n){var r=n(4),o=n(136),i=n(10).f,a=n(99).f,u=n(101),c=n(69),l=r.RegExp,s=l,f=l.prototype,T=/a/g,p=/a/g,E=new l(T)!==T;if(n(9)&&(!E||n(8)((function(){return p[n(3)("match")]=!1,l(T)!=T||l(p)==p||"/a/i"!=l(T,"i")})))){l=function(e,t){var n=this instanceof l,r=u(e),i=void 0===t;return!n&&r&&e.constructor===l&&i?e:o(E?new s(r&&!i?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&i?c.call(e):t),n?this:f,l)};for(var d=function(e){e in l||i(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},A=a(s),m=0;A.length>m;)d(A[m++]);f.constructor=l,l.prototype=f,n(13)(r,"RegExp",l)}n(97)("RegExp")},207:function(e,t,n){(function(e){n(134),n(41),n(73),n(39),n(67),n(33),n(32),n(24),n(14),n(50),n(72),n(51),n(133),n(17),n(19),n(52),n(40),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(0)),a=c(n(100)),u=n(198);function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,u.TAG_NAMES.TITLE),n=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},d=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var l=i[c],s=(0,a.default)({},o[l],r[l]);o[l]=s}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;P(u.TAG_NAMES.BODY,r),P(u.TAG_NAMES.HTML,o),R(T,p);var E={baseTag:w(u.TAG_NAMES.BASE,n),linkTags:w(u.TAG_NAMES.LINK,i),metaTags:w(u.TAG_NAMES.META,a),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,c),scriptTags:w(u.TAG_NAMES.SCRIPT,s),styleTags:w(u.TAG_NAMES.STYLE,f)},d={},A={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(A[e]=E[e].oldTags)})),t&&t(),l(e,d,A)},g=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),P(u.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=O(n),i=g(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&S(v),e.defer?v=y((function(){_(e,(function(){v=null}))})):(_(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,r),link:C(u.TAG_NAMES.LINK,i,r),meta:C(u.TAG_NAMES.META,a,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,l,r),style:C(u.TAG_NAMES.STYLE,s,r),title:C(u.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b}).call(this,n(208))},208:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-d37162a79dc5b77e9384.js.map