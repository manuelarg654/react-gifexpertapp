(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=(n(16),n(2)),u=n(9),j=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],j=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),j(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){j(t.target.value)}})})})},o=n(10),d=n(6),b=n.n(d),l=n(8),p=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=Nigz9DaPWRyYPTLNBjNdpA8BO37cNs4j"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){t.id;var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsx)("p",{children:e})]})},f=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1},3e3)}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:e}),i&&Object(r.jsx)("p",{children:" loading "}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(r.jsx)(O,Object(o.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["One punch"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("br",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(f,{category:t},t)}))})]})},x=document.getElementById("root");i.a.render(Object(r.jsx)(h,{}),x)}},[[18,1,2]]]);
//# sourceMappingURL=main.a9cd12a0.chunk.js.map