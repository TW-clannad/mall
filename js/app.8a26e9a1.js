(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b724a":"d0aae598","chunk-77b12067":"e1f796b9","chunk-90632340":"09b950f0","chunk-2442a43a":"ab5f6702","chunk-2ea9179a":"f5040395","chunk-b747f02c":"d1dfcdb3","chunk-2d20ede5":"edc07fb0"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-77b12067":1,"chunk-90632340":1,"chunk-2442a43a":1,"chunk-2ea9179a":1,"chunk-b747f02c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0b724a":"31d6cfe0","chunk-77b12067":"60995612","chunk-90632340":"6e388576","chunk-2442a43a":"611e9360","chunk-2ea9179a":"cd6d6e82","chunk-b747f02c":"713929a8","chunk-2d20ede5":"31d6cfe0"}[t]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0fcc":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"3b09":function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},"3ea8":function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Details"}},[n("router-view")],1),n("main-tar-bar")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tar-bar",[r("tar-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("3ea8"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("cc50"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tar-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("0fcc"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("90e7"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("品类")])]),r("tar-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("e930"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("9410"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tar-bar-item",{attrs:{path:"/me"}},[r("img",{attrs:{slot:"item-icon",src:n("3b09"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("cc94"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TarBar"},f=l,p=(n("8b1c"),n("2877")),d=Object(p["a"])(f,u,s,!1,null,"5acc1224",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?t._t("item-icon-active"):t._t("item-icon"),n("div",{style:t.isStyleActive},[t._t("item-text")],2)],2)},v=[],b=(n("c975"),n("ac1f"),n("5319"),{name:"TarBarItem",props:{path:{type:String},activeStyle:{type:String,default:"coral"}},data:function(){return{}},methods:{itemClick:function(){this.$router.replace(this.path)}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},isStyleActive:function(){return this.isActive?{color:this.activeStyle}:{}}}}),g=b,k=(n("6097"),Object(p["a"])(g,h,v,!1,null,"435c219a",null)),y=k.exports,x={name:"MainTarBar",components:{TarBar:m,TarBarItem:y}},_=x,w=Object(p["a"])(_,i,o,!1,null,"3b8a06f6",null),O=w.exports,S={name:"App",components:{MainTarBar:O}},j=S,P=(n("034f"),Object(p["a"])(j,a,c,!1,null,null,null)),T=P.exports,E=(n("d3b7"),n("8c4f")),A=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-90632340"),n.e("chunk-2442a43a")]).then(n.bind(null,"b3d7"))},C=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-77b12067")]).then(n.bind(null,"bb51"))},B=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-b747f02c")]).then(n.bind(null,"c228"))},$=function(){return n.e("chunk-2d20ede5").then(n.bind(null,"b0cd"))},M=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-90632340"),n.e("chunk-2ea9179a")]).then(n.bind(null,"3ba4"))};r["a"].use(E["a"]);var L=[{path:"",redirect:"/home"},{path:"/home",component:A},{path:"/category",component:C},{path:"/cart",component:B},{path:"/me",component:$},{path:"/details/:iid",component:M}],N=new E["a"]({routes:L,mode:"history"}),D=N,I=(n("7db0"),n("2f62"));r["a"].use(I["a"]);var q=new I["a"].Store({state:{cartlist:[]},mutations:{addcart:function(t,e){var n=t.cartlist.find((function(t){return t.iid===e.iid}));n?n.count+=1:(e.isCheck=!0,e.count+=1,t.cartlist.push(e))}}}),J=q,z=n("caf9");r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(z["a"],{loading:n("9d35")}),new r["a"]({render:function(t){return t(T)},router:D,store:J}).$mount("#app")},6097:function(t,e,n){"use strict";var r=n("d5b4"),a=n.n(r);a.a},"85ec":function(t,e,n){},"8b1c":function(t,e,n){"use strict";var r=n("ae7e"),a=n.n(r);a.a},"90e7":function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},9410:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},"9d35":function(t,e,n){t.exports=n.p+"img/lazy.df6ae815.png"},ae7e:function(t,e,n){},cc50:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},cc94:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},d5b4:function(t,e,n){},e930:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"}});
//# sourceMappingURL=app.8a26e9a1.js.map