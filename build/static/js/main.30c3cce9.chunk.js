(this.webpackJsonppictogram=this.webpackJsonppictogram||[]).push([[0],{117:function(A,g,D){},148:function(A,g,D){"use strict";D.r(g);var e=D(0),w=D.n(e),t=D(35),B=D.n(t),E=(D(117),D(15)),M=D(10),Y=D(57),G=D.n(Y),c=D(161),n=D(103),a=D(104),s=D(1);var r=function(){var A=Object(e.useState)(!1),g=Object(E.a)(A,2),D=g[0],w=g[1],t=Object(e.useState)(0),B=Object(E.a)(t,2),M=B[0],Y=B[1];return Object(s.jsxs)("div",{className:"Appz",children:[Object(s.jsx)("p",{className:"Counter",children:M}),Object(s.jsx)(a.a,{className:"Heart",isClick:D,onClick:function(){Y(M+1),w(!D)}})]})};var i=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r,{})})},o=function(A){return Object(s.jsxs)(c.a,{className:"Card",children:[Object(s.jsx)(n.a,{src:A.post.image,wrapped:!0,ui:!1}),Object(s.jsxs)(c.a.Content,{className:"CardContent",children:[Object(s.jsx)(c.a.Header,{children:A.post.title}),Object(s.jsx)(c.a.Meta,{children:A.post.author}),Object(s.jsx)(c.a.Meta,{children:A.post.datePosted}),Object(s.jsx)(i,{})]})]})},l=function(A){var g=A.feed;return Object(s.jsx)("div",{className:"feedList",id:"feedList",children:g.map((function(A){return Object(s.jsx)(o,{post:A})}))})},j=D(83),u=D(41),b=D(80),d=function(A){var g=A.handleData,D=A.formData;return Object(s.jsx)("aside",{className:"sidebar",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("label",{htmlFor:"color",children:"Color:"}),Object(s.jsx)("input",{type:"color",id:"color",name:"color",onChange:g})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("label",{htmlFor:"weight",children:"Stroke:"}),Object(s.jsx)("input",{type:"number",id:"weight",name:"stroke",min:"2",max:"200",value:D.stroke,onChange:g})]}),Object(s.jsx)("li",{children:Object(s.jsx)("button",{id:"clear",children:Object(s.jsx)("i",{className:"fa fa-trash"})})})]})})},h=function(A){var g=A.handleSave,D=Object(e.useRef)(null),w=Object(e.useRef)(null),t=Object(e.useState)(!1),B=Object(E.a)(t,2),M=B[0],Y=B[1],G=Object(e.useState)(null),c=Object(E.a)(G,2),n=c[0],a=c[1],r=Object(e.useState)(""),i=Object(E.a)(r,2),o=i[0],l=i[1],h=Object(e.useState)([]),f=Object(E.a)(h,2),O=f[0],m=f[1],x=Object(e.useState)([]),p=Object(E.a)(x,2),v=p[0],k=p[1],S=Object(e.useState)({color:"black",stroke:3}),C=Object(E.a)(S,2),N=C[0],y=C[1];Object(e.useEffect)((function(){var A=D.current;A.width=500,A.height=500,A.style.width="".concat(500,"px"),A.style.height="".concat(500,"px"),A.style.border="3px solid black",A.fillStyle="white",a(A)}),[]),Object(e.useEffect)((function(){if(n){var A=n.getContext("2d");A.scale(1,1),A.lineCap="round",A.strokeStyle=N.color,A.lineWidth=N.stroke,A.fillStyle="white",w.current=A}}),[n,N.color,N.stroke]);Object(e.useEffect)((function(){}),[v]),Object(e.useEffect)((function(){}),[N]);return Object(s.jsxs)("div",{className:"sketch",children:[Object(s.jsx)(d,{handleData:function(A){y((function(g){return Object(b.a)(Object(b.a)({},g),{},Object(u.a)({},A.target.name,A.target.value))}))},formData:N}),Object(s.jsxs)("div",{id:"sketchContainer",children:[Object(s.jsx)("canvas",{className:"canvas",onMouseDown:function(A){var g=A.nativeEvent,D=g.offsetX,e=g.offsetY;w.current.beginPath(),w.current.moveTo(D,e),Y(!0),m([])},onMouseUp:function(){w.current.closePath(),Y(!1),k((function(A){return[].concat(Object(j.a)(A),[O])}))},onMouseMove:function(A){var g=A.nativeEvent;if(M){var D=g.offsetX,e=g.offsetY;w.current.lineTo(D,e),w.current.stroke(),m((function(A){return[].concat(Object(j.a)(A),[{offsetX:D,offsetY:e,formData:N}])}))}},ref:D}),Object(s.jsxs)("div",{id:"canvasControls",children:[Object(s.jsx)("label",{className:"title",htmlFor:"title",children:"Title:"}),Object(s.jsx)("input",{className:"inputField",type:"text",name:"title",onChange:function(A){l(A.target.value)},placeholder:"Your Masterpiece"}),Object(s.jsx)("button",{className:"saveBtn",onClick:function(A){return g(A,o)},children:"Save"}),Object(s.jsx)("button",{className:"clearBtn",onClick:function(){var A=D.current,g=A.getContext("2d");g.fillStyle="white",g.fillRect(0,0,A.width,A.height)},children:"Clear"}),Object(s.jsx)("button",{className:"undoBtn",onClick:function(){var A=v.slice(0,-1);k(A),function(A){w.current.clearRect(0,0,n.width,n.height),A.forEach((function(A){w.current.beginPath(),w.current.moveTo(A[0].offsetX,A[0].offsetY);for(var g=1;g<A.length;g++)w.current.strokeStyle=A[g].formData.color,w.current.lineWidth=A[g].formData.stroke,w.current.lineTo(A[g].offsetX,A[g].offsetY);w.current.stroke()})),w.current.strokeStyle=N.color,w.current.lineWidth=N.stroke}(A)},children:"Undo"})]})]})]})},f=D(162),O=function(A){var g=A.feed,D=A.userInside,e=A.handleDelete,w=g.filter((function(A){return A.author===D}));return Object(s.jsxs)("div",{className:"myPicList",children:[Object(s.jsx)("h1",{children:"My Art"}),w.map((function(A){return console.log(A),Object(s.jsxs)("div",{children:[Object(s.jsx)(f.a,{className:"discard",onClick:A.author===D?function(){return e(A.iduser_posts)}:null,children:"Discard"}),Object(s.jsx)(o,{post:A})]})}))]})},m=D(33),x=D(52),p=function(A){var g=A.user;return Object(s.jsxs)("div",{className:"navBar",children:[Object(s.jsxs)(m.b,{to:"/",id:"logo",children:[Object(s.jsx)(x.a,{name:"camera"}),Object(s.jsx)("div",{children:Object(s.jsx)("h3",{children:"pictogram"})})]}),Object(s.jsxs)("div",{className:"welcome",children:["Welcome ",g]}),Object(s.jsxs)("nav",{className:"navButtons",children:[Object(s.jsx)(m.c,{className:"button1",to:"/",children:"Home"}),Object(s.jsx)(m.c,{className:"button2",to:"/sketch-pad",children:"Sketch Pad"}),Object(s.jsx)(m.c,{className:"button3",to:"/my-sketchs",children:"My Sketches"})]})]})};var v=function(){var A=Object(e.useState)([]),g=Object(E.a)(A,2),D=g[0],w=g[1],t=Object(e.useState)(""),B=Object(E.a)(t,2),Y=B[0],c=B[1];Object(e.useState)((function(){G.a.get("https://git.heroku.com/pictogram-db.git/api/get").then((function(A){w(A.data)}))}),[]);var n=function(A,g){if("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB9KADAAQAAAABAAAB9AAAAAB3bs6AAAARIUlEQVR4Ae3QgQAAAADDoPlTH+SFUGHAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDLwMDRRUAAfTgT5UAAAAASUVORK5CYII="!==A.target.parentElement.previousSibling.toDataURL()){var D=(new Date).toLocaleDateString(),e=A.target.parentElement.previousSibling.toDataURL();G.a.post("https://git.heroku.com/pictogram-db.git/api/insert",{title:g,author:Y,image:e,datePosted:D}).then((function(A){console.log(A),G.a.get("https://git.heroku.com/pictogram-db.git/api/get").then((function(A){w(A.data)}))}))}},a=function(A){console.log(A),G.a.delete("https://git.heroku.com/pictogram-db.git/delete/".concat(A)).then((function(g){w(D.filter((function(g){return g.iduser_posts!==A})))}))},r=function(A){c(A)},i=Object(e.useState)(""),o=Object(E.a)(i,2),j=o[0],u=o[1];return Y?Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(p,{user:Y}),Object(s.jsxs)(M.c,{children:[Object(s.jsx)(M.a,{path:"/sketch-pad",component:function(){return Object(s.jsx)(h,{handleSave:n,user:Y})}}),Object(s.jsx)(M.a,{path:"/my-sketchs",component:function(){return Object(s.jsx)(O,{userInside:Y,feed:D,handleDelete:a,nameGrabber:r})}}),Object(s.jsx)(M.a,{exact:!0,path:"/",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},component:function(){return Object(s.jsx)(l,{feed:D})}})]})]}):Object(s.jsxs)("div",{className:"feedList",children:[Object(s.jsx)("div",{children:Object(s.jsx)(x.a,{name:"camera",size:"large"})}),Object(s.jsx)("h1",{children:"Welcome to pictogram!"}),Object(s.jsx)("h2",{children:"What should we call you?"}),Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:function(A){A.preventDefault(),r(j),console.log(j)},children:[Object(s.jsx)("input",{type:"text",name:"username",onChange:function(A){u(A.target.value)},placeholder:"Username",value:j}),Object(s.jsx)("input",{type:"submit",value:"login",className:"button3"})]})})]})},k=function(A){A&&A instanceof Function&&D.e(3).then(D.bind(null,164)).then((function(g){var D=g.getCLS,e=g.getFID,w=g.getFCP,t=g.getLCP,B=g.getTTFB;D(A),e(A),w(A),t(A),B(A)}))};D(147);B.a.render(Object(s.jsx)(w.a.StrictMode,{children:Object(s.jsx)(m.a,{children:Object(s.jsx)(v,{})})}),document.getElementById("root")),k()}},[[148,1,2]]]);
//# sourceMappingURL=main.30c3cce9.chunk.js.map