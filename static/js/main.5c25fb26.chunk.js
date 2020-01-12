(this["webpackJsonpreact-typeahead"]=this["webpackJsonpreact-typeahead"]||[]).push([[0],{141:function(e,n,t){e.exports=t(343)},146:function(e,n,t){},299:function(e,n){},317:function(e,n){},318:function(e,n){},319:function(e,n){},335:function(e,n){},343:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(134),c=t.n(o),u=(t(146),t(147),t(4)),i=t(5),l=t(140),p=t(137),d=t.n(p),s=t(6),v=t(138),f=t.n(v),h=t(32),y=t.n(h),m={searchTerm:"",tempValue:"",activeIndex:-1,dropdownActive:!1,hoverActive:!1,list:[]};function E(e){return{type:"typeahead/SELECT_ITEM",payload:e}}var b=function(e,n){var t=n.type,a=n.payload;switch(t){case"typeahead/SET_LIST":var r=a.map((function(e){return{id:f()(e),value:e}}));return Object(s.a)({},e,{list:r});case"typeahead/HIDE_DROPDOWN":return Object(s.a)({},e,{dropdownActive:!1});case"typeahead/UPDATE_SEARCH_TERM":return Object(s.a)({},e,{searchTerm:a,tempValue:"",hoverActive:!1,dropdownActive:!0,activeIndex:-1});case"typeahead/SELECT_ITEM":return Object(s.a)({},e,{dropdownActive:!1,searchTerm:a});case"typeahead/INCREMENT_ACTIVE_INDEX":var o=a.length,c=e.activeIndex;return Object(s.a)({},e,{activeIndex:c===o-1?0:c+1});case"typeahead/DECREMENT_ACTIVE_INDEX":var u=a.length,i=e.activeIndex;return Object(s.a)({},e,{activeIndex:0===i?u-1:i-1});case"typeahead/ACTIVATE_MOUSE_HOVER":return Object(s.a)({},e,{tempValue:a,hoverActive:!0});case"typeahead/DEACTIVATE_MOUSE_HOVER":return Object(s.a)({},e,{tempValue:"",hoverActive:!1});default:return e}};function g(){var e=Object(u.a)(["\n  font-size: 18px;\n  padding: 12px 10px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n"]);return g=function(){return e},e}var T=i.a.input(g()),O=t(139),A=t.n(O);function w(e){return A()(e,{allowedTags:["b"],allowedAttributes:{},allowedIframeHostnames:[]})}var I=function(e){return function(n){var t=new RegExp(y()(e),"gi");return n.replace(t,(function(e){return"<b>".concat(e,"</b>")}))}};function C(){var e=Object(u.a)(["\n  cursor: pointer;\n  padding: 12px 10px;\n  background-color: ",";\n\n  &:hover {\n    background-color: #eee;\n  }\n"]);return C=function(){return e},e}function x(){var e=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  max-height: 300px;\n  border-radius: 4px;\n  overflow: auto;\n"]);return x=function(){return e},e}function _(){var e=Object(u.a)(["\n  position: relative;\n"]);return _=function(){return e},e}var D=i.a.div(_()),k=i.a.div(x()),j=i.a.div(C(),(function(e){return e.isActive?"#eee":"fff"}));var S=function(e){var n=e.name,t=e.options,o=Object(a.useReducer)(b,m),c=Object(l.a)(o,2),u=c[0],i=c[1],p=function(e,n){var t=y()(n);return""===t?[]:e.filter((function(e){return e.value.toLowerCase().includes(t.toLowerCase())}))}(u.list,u.searchTerm),s=Object(a.useRef)(null),v=Object(a.useRef)(null);function f(e){var n=e.target;i(E(n.dataset.value))}function h(e){var n=e.target;i({type:"typeahead/ACTIVATE_MOUSE_HOVER",payload:n.dataset.value})}function g(){var e;i({type:"typeahead/DEACTIVATE_MOUSE_HOVER",payload:e})}return(Object(a.useEffect)((function(){i({type:"typeahead/SET_LIST",payload:t})}),[t]),Object(a.useEffect)((function(){function e(e){s.current&&s.current.contains(e.target)||v.current&&v.current.contains(e.target)||i({type:"typeahead/HIDE_DROPDOWN"})}return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[]),Object(a.useEffect)((function(){var e=s.current&&s.current.children[u.activeIndex];e&&e.scrollIntoView({block:"nearest"})}),[u.activeIndex]),r.a.createElement(D,null,r.a.createElement(T,{ref:v,value:u.hoverActive?u.tempValue:u.searchTerm,type:"text",name:n,id:n,autocomplete:"off",placeholder:"Search...",onChange:function(e){var n=e.target;i({type:"typeahead/UPDATE_SEARCH_TERM",payload:n.value})},onKeyDown:function(e){switch("ArrowDown"===e.key&&"ArrowUp"===e.key&&"Enter"===e.key&&e.preventDefault(),e.key){case"Enter":return i(E(p[u.activeIndex].value));case"Tab":case"Escape":return i({type:"typeahead/HIDE_DROPDOWN"});case"ArrowUp":return i({type:"typeahead/DECREMENT_ACTIVE_INDEX",payload:{length:p.length}});case"ArrowDown":return i(function(e){return{type:"typeahead/INCREMENT_ACTIVE_INDEX",payload:e}}({length:p.length}));default:return!0}}}),u.dropdownActive&&r.a.createElement(k,{ref:s},p.map((function(e,n){return r.a.createElement(j,{key:e.id,onClick:f,onMouseEnter:h,onMouseLeave:g,"data-value":e.value,"data-index":n,isActive:u.activeIndex===n,dangerouslySetInnerHTML:{__html:d()(w,I(u.searchTerm))(e.value)}})})))))},R=["A\xe7a\xed","Apple","Akee","Apricot","Avocado","Banana","Bilberry","Blackberry","Blackcurrant","Black sapote","Blueberry","Boysenberry","Buddha's hand","Crab apples","Currant","Cherry","Cherimoya","Chico fruit","Cloudberry","Coconut","Cranberry","Cucumber","Damson","Date","Dragonfruit","Pitaya","Durian","Elderberry","Feijoa","Fig","Goji berry","Gooseberry","Grape","Raisin","Grapefruit","Guava","Honeyberry","Huckleberry","Jabuticaba","Jackfruit","Jambul","Japanese plum","Jostaberry","Jujube","Juniper berry","Kiwano","Kiwifruit","Kumquat","Lemon","Lime","Loquat","Longan","Lychee","Mango","Mangosteen","Marionberry","Melon","Cantaloupe","Honeydew","Watermelon","Miracle fruit","Mulberry","Nectarine","Nance","Olive","Orange","Blood orange","Clementine","Mandarine","Tangerine","Papaya","Passionfruit","Peach","Pear","Persimmon","Plantain","Plum","Prune","Pineapple","Pineberry","Plumcot","Pomegranate","Pomelo","Purple mangosteen","Quince","Raspberry","Salmonberry","Rambutan","Redcurrant","Salal","Salak","Satsuma","Soursop","Star apple","Star fruit","Strawberry","Surinam cherry","Tamarillo","Tamarind","Ugli fruit","White currant","White sapote","Yuzu","Avocado","Bell pepper","Chili pepper","Corn kernel","Cucumber","Eggplant","Olive","Pea","Pumpkin","Squash","Tomato","Zucchini"];function M(){var e=Object(u.a)(["\n  display: inline-block;\n  padding-bottom: 6px;\n"]);return M=function(){return e},e}function P(){var e=Object(u.a)(["\n  padding-bottom: 20px;\n"]);return P=function(){return e},e}function V(){var e=Object(u.a)(["\n  padding: 30px;\n  width: 400px;\n  margin: 0 auto;\n"]);return V=function(){return e},e}var L=i.a.div(V()),N=i.a.div(P()),H=i.a.label(M());var B=function(){return r.a.createElement(L,null,r.a.createElement(N,null,r.a.createElement(H,{htmlFor:"select"},"Typeahead"),r.a.createElement(S,{name:"select",options:R})),r.a.createElement(N,null,r.a.createElement(H,{htmlFor:"other-input"},"Other Input"),r.a.createElement(T,{type:"text",name:"other-input",id:"other-input"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[141,1,2]]]);
//# sourceMappingURL=main.5c25fb26.chunk.js.map