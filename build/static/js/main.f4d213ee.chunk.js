(this["webpackJsonpmon-app"]=this["webpackJsonpmon-app"]||[]).push([[0],{114:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(20),a=n.n(r),s=(n(85),n(19)),l=(n(86),n(15)),j=n(54),o=n.n(j),b=n(55),u=n.n(b),d=n(56),h=n.n(d),O=n(57),x=n.n(O),p=n(58),f=n.n(p),g=n(59),m=n.n(g),v=n(60),k=n.n(v),w=n(40),C=n.n(w),N=n(61),y=n.n(N),S=n(72),M=n.n(S),T=n(41),z=n.n(T),B=n(62),F=n(28),P=n(63),D=n.n(P),I=n(64),L=n.n(I),E=n(65),H=n.n(E),J=n(66),V=n.n(J),A=n(33),R=n.n(A),G=n(67),Q=n.n(G),U=n(134),Y=n(42),_=n.n(Y),q=n(29),K=n.n(q),W=n(2),X=Object(U.a)({input:{width:"200px"},button:{backgroundColor:"#496480"}});function Z(){var e=X(),t=i.a.useState(!1),n=Object(l.a)(t,2),r=n[0],a=n[1],j=Object(c.useState)({title:"",description:"",image:"",like:0}),o=Object(l.a)(j,2),b=o[0],u=o[1],d=function(e){u(Object(s.a)(Object(s.a)({},b),{},Object(F.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(B.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.post("http://localhost:3031/portfolio",b).then((function(e){u(e.data),a(!1),window.location.reload()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(R.a,{className:e.button,type:"button",onClick:function(e){return a(!0)},ripple:"light",size:"lg",children:"+ New project"}),Object(W.jsxs)(D.a,{size:"lg",active:r,toggler:function(){return a(!1)},children:[Object(W.jsxs)(L.a,{toggler:function(){return a(!1)},children:["Add new project ",Object(W.jsx)("br",{})]}),Object(W.jsxs)(H.a,{children:["Title",Object(W.jsx)(_.a,{type:"text",color:"lightBlue",size:"lg",outline:!1,name:"title",value:b.title,onChange:d,style:{width:"1000px"}}),"Description",Object(W.jsx)(Q.a,{color:"lightBlue",size:"regular",outline:!1,name:"description",value:b.description,onChange:d}),"Image(s)'s link",Object(W.jsx)(_.a,{type:"text",color:"lightBlue",size:"lg",outline:!1,name:"image",value:b.image,onChange:d})]}),Object(W.jsxs)(V.a,{children:[Object(W.jsx)(R.a,{color:"red",buttonType:"link",onClick:function(){a(!1)},ripple:"dark",children:"Cancel"}),Object(W.jsx)(R.a,{color:"green",onClick:h,ripple:"light",children:"Post"})]})]})]})}function $(e){e.onSubmit;var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(W.jsx)(o.a,{color:"white",navbar:!0,children:Object(W.jsxs)(u.a,{children:[Object(W.jsxs)(h.a,{children:[Object(W.jsx)(x.a,{color:"black",children:"Nha Vy VO DOAN"}),Object(W.jsx)(f.a,{color:"black",onClick:function(){return r(!i)},ripple:""})]}),Object(W.jsxs)(m.a,{open:i,children:[Object(W.jsxs)(k.a,{leftSide:!0,children:[Object(W.jsxs)(C.a,{href:"/portfolio",ripple:"",children:[Object(W.jsx)(M.a,{}),"Portfolio"]}),Object(W.jsxs)(C.a,{href:"/",ripple:"",children:[Object(W.jsx)(y.a,{name:"account_circle",size:"xl",color:"black"}),"Presentation"]})]}),Object(W.jsx)(Z,{})]})]})})}n(113);var ee=n(76),te=n(5),ne=n(136);n(114);var ce=function(e){return Object(W.jsxs)("div",{className:"all",children:[Object(W.jsx)("div",{className:"demodiv",children:Object(W.jsx)("div",{className:"demo",children:"Hi! I am Nha Vy, contact me if you are interested."})}),Object(W.jsxs)("div",{className:"wordCarousel",children:[Object(W.jsx)("span",{className:"skills",children:"Skills "}),Object(W.jsx)("div",{children:Object(W.jsxs)("ul",{className:"flip4",children:[Object(W.jsx)("li",{children:"HTML JS React "}),Object(W.jsx)("li",{children:"CSS Material Tailwind"}),Object(W.jsx)("li",{children:"Node MySQL MongoDB"}),Object(W.jsx)("li",{children:"& SO MUCH MORE"})]})})]}),Object(W.jsx)(ne.a,{href:"https://github.com/navyrandom",children:Object(W.jsx)("img",{src:"./github.png",alt:"github",className:"github"})}),Object(W.jsx)(ne.a,{href:"https://www.linkedin.com/in/nha-vy-vo-doan-94817765/",children:Object(W.jsx)("img",{src:"./in.png",alt:"linkedin",className:"linkedin"})})]})};var ie=function(){var e=Object(te.f)();return Object(W.jsxs)("div",{children:[Object(W.jsx)("h1",{children:"You are not lost, you're just wandering"}),Object(W.jsx)("div",{onClick:function(){e.push("/")},children:"Go back to my portfolio"})]})},re=(n(117),n(73)),ae=n.n(re),se=n(74),le=n.n(se);var je=function(e){var t=e.title,n=e.description,i=e.key,r=e.src,a=Object(c.useState)(!1),s=Object(l.a)(a,2),j=s[0],o=s[1];return Object(W.jsxs)("div",{className:"card",children:[Object(W.jsx)("div",{className:"imgillustr",children:Object(W.jsx)("img",{alt:"",src:r,style:{width:"293px",height:"293px"}})}),t,Object(W.jsx)("p",{children:n}),Object(W.jsxs)("button",{onClick:function(){o(!j)},children:[j?Object(W.jsx)(le.a,{}):Object(W.jsx)(ae.a,{}),j&&"Thanks"]})]},i)};n(118);function oe(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){K.a.get("http://localhost:3031/portfolio/").then((function(e){return e.data})).then((function(e){return r(e)}))}),[]),Object(W.jsx)("div",{className:"listCards",children:Object(W.jsx)("div",{className:"cards",children:i.map((function(e){return Object(W.jsx)(je,{src:e.image},e.id)}))})})}var be=n(75);var ue=function(e){var t=e.alt,n=e.src;return Object(W.jsx)(be.a,{show:3.5,slide:3,swiping:!0,children:Object(W.jsx)("img",{alt:t,src:n})})};var de=function(){return Object(W.jsx)("div",{children:Object(W.jsxs)(ee.a,{children:[Object(W.jsx)($,{}),Object(W.jsxs)(te.c,{children:[Object(W.jsx)(te.a,{exact:!0,path:"/",render:function(e){return Object(W.jsx)(ce,Object(s.a)({},e))}}),Object(W.jsx)(te.a,{exact:!0,path:"/portfolio",render:function(e){return Object(W.jsx)(oe,Object(s.a)({},e))}}),Object(W.jsx)(te.a,{exact:!0,path:"/test",render:function(e){return Object(W.jsx)(ue,Object(s.a)({},e))}}),Object(W.jsx)(te.a,{path:"/*",component:ie})]})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(de,{})}),document.getElementById("root")),he()},85:function(e,t,n){},86:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.f4d213ee.chunk.js.map