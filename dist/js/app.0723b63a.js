(function(t){function e(e){for(var r,s,u=e[0],i=e[1],l=e[2],c=0,f=[];c<u.length;c++)s=u[c],a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d1889815"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(t),o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"04f1":function(t,e,n){"use strict";var r=n("153e"),a=n.n(r);a.a},"153e":function(t,e,n){},"1f05":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"6f05":function(t,e,n){"use strict";var r=n("df90"),a=n.n(r);a.a},a3e7:function(t,e,n){t.exports=n.p+"img/nynorsklogo.49f96e00.png"},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/map"}},[t._v("Map")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/hellovue"}},[t._v("Hello Vue")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),u={},i=Object(s["a"])(u,a,o,!1,null,null,null),l=i.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Page logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},f=[],v=n("d225"),h=n("308d"),m=n("6bb5"),b=n("4e2b"),d=n("9ab4"),_=n("60a3"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Essential Links")]),t._m(1),n("h3",[t._v("Ecosystem")]),t._m(2)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],k=function(t){function e(){return Object(v["a"])(this,e),Object(h["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(_["c"]);d["a"]([Object(_["b"])()],k.prototype,"msg",void 0),k=d["a"]([_["a"]],k);var w=k,O=w,y=(n("6f05"),Object(s["a"])(O,g,j,!1,null,"6d882214",null)),x=y.exports,L=function(t){function e(){return Object(v["a"])(this,e),Object(h["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(_["c"]);L=d["a"]([Object(_["a"])({components:{HelloWorld:x}})],L);var M=L,C=M,E=Object(s["a"])(C,p,f,!1,null,null,null),P=E.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{staticClass:"logo",attrs:{alt:"Page logo",src:n("a3e7")}}),r("h1",[t._v(" "+t._s(t.tittel)+" ")]),r("table",{attrs:{id:"eventsList"}},[t._m(0),t._l(t.events,function(e){return r("tr",{key:e.url+e.host},[r("td",[r("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])]),r("td",[t._v(" "+t._s(e.time)+" ")]),r("td",[t._v(" "+t._s(e.host)+" ")])])})],2)])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Tittel")]),n("th",[t._v("Tidspunkt")]),n("th",[t._v("Arrangør")])])}],$=(n("28a5"),n("a481"),n("ac6a"),n("8615"),n("b0b4")),S=n("bc3a"),V=n.n(S),A=n("a7fe"),R=n.n(A);r["a"].use(R.a,V.a);var z,H,D="https://www.googleapis.com/storage/v1/b/fb-events2/o?prefix=events&fbclid=IwAR13SDH31uFm3hBeiR7i9pjF3ePV3VUB1qw1X5btoG03YKLIZWkwqnbzq34",F=function(t){function e(t){var n;return Object(v["a"])(this,e),n=Object(h["a"])(this,Object(m["a"])(e).call(this)),n.eventsLink=D,n.events=[],n.$nextTick(function(){n.makeAPICall(n.eventsLink,function(e){return n.handleResponse(e.data.items,t)})}),n}return Object(b["a"])(e,t),Object($["a"])(e,[{key:"makeAPICall",value:function(t,e){r["a"].axios.get(t).then(function(t){return e(t)})}},{key:"handleResponse",value:function(t,e){for(var n=this,r=0,a=Object.values(t);r<a.length;r++){var o=a[r];this.makeAPICall(o.mediaLink,function(t){var r=t.data;void 0!==r.time&&(r.time=r.time.replace(" â"," -").replace("UTC+02",""),r.time=r.time.replace(" at "," ").split(" - ")[0],r.time=r.time.replace(" Â·",""),void 0!==r.lat&&void 0!==r.lon&&(r.latlng=[r.lat,r.lon]),Date.now()>Date.parse(r.time)||(r.url=r.url.replace("//m.","//www."),r.popup=r.time+"<br/><a href="+r.url.replace("//m.","//www.")+">"+r.title+"</a> ("+r.host+")",n.events.push(r),e(r)))})}}}]),e}(r["a"]),U=F,W=Object(s["a"])(U,z,H,!1,null,null,null),G=W.exports,Z=r["a"].extend({data:function(){return{tittel:"Kva skjer i Raudt?",events:[]}},mounted:function(){var t=this;new G(function(e){return t.events.push(e)})}}),q=Z,B=(n("04f1"),Object(s["a"])(q,I,T,!1,null,"090addf0",null)),J=B.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"concertmap"},[n("Map",{attrs:{header:"Kommande hendingar"}})],1)},N=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"map-view"}},[n("h1",[t._v(" "+t._s(t.header)+" ")]),n("div",{attrs:{id:"map"}},[n("l-map",{ref:"map",attrs:{zoom:t.zoom,center:t.center,maxZoom:t.maxZoom}},[n("l-tile-layer",{attrs:{url:t.mapURL,id:t.mapID,attribution:t.attribution}}),n("Vue2LeafletMarkerCluster",t._l(t.events,function(e){return null!==e.latlng?n("LMarker",{key:e.url+e.host,attrs:{"lat-lng":e.latlng}},[n("LPopup",{attrs:{content:e.popup}})],1):t._e()}),1)],1)],1)])},Q=[],X=n("2699"),tt=n("a40a"),et=n("4e2b6"),nt=n("f60f"),rt=n("ca9f"),at=n.n(rt);n("c293");_["c"].component("Vue2LeafletMarkerCluster",at.a);var ot=function(t){function e(){var t;Object(v["a"])(this,e),t=Object(h["a"])(this,Object(m["a"])(e).call(this)),t.zoom=4,t.center=[65.1,18],t.mapID="mapbox.streets",t.attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',t.accessToken="pk.eyJ1IjoibWFkc29waGVpbSIsImEiOiJjanZhcnVwMHIxMW15NGVwOHp5aGFldGRuIn0.wHzNVsUQ_ty5tEkrB8vnLQ",t.mapURL="https://api.tiles.mapbox.com/v4/"+t.mapID+"/{z}/{x}/{y}.png?access_token="+t.accessToken,t.mapURL2="http://{s}.tile.osm.org/{z}/{x}/{y}.png",t.maxZoom=20,t.events=[];new G(function(e){return t.createMarker(e)});return t}return Object(b["a"])(e,t),Object($["a"])(e,[{key:"createMarker",value:function(t){void 0!==t.latlng&&this.events.push(t)}}]),e}(_["c"]);d["a"]([Object(_["b"])()],ot.prototype,"header",void 0),ot=d["a"]([Object(_["a"])({components:{LMap:X["a"],LTileLayer:tt["a"],LMarker:et["a"],LPopup:nt["a"]}})],ot);var st=ot,ut=st,it=(n("f879"),Object(s["a"])(ut,Y,Q,!1,null,"82742e6e",null)),lt=it.exports,ct=function(t){function e(){return Object(v["a"])(this,e),Object(h["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(_["c"]);ct=d["a"]([Object(_["a"])({components:{Map:lt}})],ct);var pt=ct,ft=pt,vt=Object(s["a"])(ft,K,N,!1,null,null,null),ht=vt.exports;r["a"].use(c["a"]);var mt=new c["a"]({routes:[{path:"/",name:"home",component:J},{path:"/map",name:"concertmap",component:ht},{path:"/hellovue",name:"hellovue",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:mt,render:function(t){return t(l)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},df90:function(t,e,n){},f879:function(t,e,n){"use strict";var r=n("1f05"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0723b63a.js.map