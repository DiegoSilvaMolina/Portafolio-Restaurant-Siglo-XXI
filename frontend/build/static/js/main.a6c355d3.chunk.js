(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),l=(n(90),n(34)),i=n(35),s=n(38),u=n(36),h=(n(91),n(92),n(83),n(126)),m=n(125),p=(n(93),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:""}},e.register=function(t){fetch("http://127.0.0.1:8000/api/ users/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(e){console.log(e.token)})).catch((function(e){return console.error(e)}))},e.login=function(t){fetch("http://127.0.0.1:8000/auth/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(e){console.log(e.token),window.location.href="./Home"})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Login"),r.a.createElement("br",null),r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Pass:",r.a.createElement("input",{type:"password",name:"password",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login",onClick:this.login}),r.a.createElement("input",{type:"submit",value:"Register",onClick:this.register}))}}]),n}(a.Component)),d=(n(127),n(128),n(129),h.a.SubMenu,m.a.Header,m.a.Content,m.a.Footer,m.a.Sider,n(82)),f=n(8),g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return console.log(),r.a.createElement("div",null,r.a.createElement("h1",null,"Menu Principal"))}}]),n}(a.Component);var b=function(){return r.a.createElement(d.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/Login",component:p}),r.a.createElement(f.a,{exact:!0,path:"/Home",component:g})))},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,n){e.exports=n(122)},90:function(e,t,n){},91:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.a6c355d3.chunk.js.map