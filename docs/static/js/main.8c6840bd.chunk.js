(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(a.jsx)("label",{htmlFor:"buscar",children:Object(a.jsx)("input",{id:"buscar",type:"text",value:i,onChange:function(t){o(t.target.value)}})})})},j=n(10),f=n(6),d=n.n(f),l=n(8),b=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,c,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"qMrVfTdIChv3GofVc5kfLghfsC2muGNf",12,n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=").concat(12,"&api_key=").concat("qMrVfTdIChv3GofVc5kfLghfsC2muGNf"),t.next=5,fetch(n);case 5:return a=t.sent,t.next=8,a.json();case 8:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=(n(17),n(18),function(t){var e=t.title,n=t.url;return Object(a.jsxs)("figure",{className:"gifs-card animate__animated animate__fadeInDown",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsx)("figcaption",{children:e})]})}),p=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),r=n.data,i=n.loading;return Object(a.jsxs)("article",{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__fadeInLeft",children:[e," ",Object(a.jsx)("small",{children:i&&"Cargando..."})]}),Object(a.jsx)("div",{className:"gifs-grid",children:r.map((function(t){return Object(a.jsx)(h,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(c.useState)(["Love"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h2",{className:"header-title",children:"GifExpertApp"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("section",{children:n.map((function(t){return Object(a.jsx)(p,{category:t},t)}))})]})};n(19);i.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8c6840bd.chunk.js.map