(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),o=n(10),s=n.n(o),i=(n(17),n(3)),a=n(4),d=n(6),l=n(5),u=n(0),h=function(e){var t=e.searchChange;return Object(u.jsx)("div",{id:"searchbox",children:Object(u.jsx)("input",{id:"search-input",className:"tc pa2 navy bg-light-blue",type:"search",placeholder:"search a robot",onChange:t})})},b=(n(19),function(){return Object(u.jsx)("h1",{id:"header-title",children:"Robofriends"})}),j=function(){return Object(u.jsx)("div",{id:"main-logo-container",children:Object(u.jsx)("img",{id:"main-logo",src:"/robofriends/Markel.png",alt:"markel"})})},m=function(e){return Object(u.jsx)("div",{id:"header-content",children:e.children})},f=(n(20),n(11)),O=n(12),p=function(){return Object(u.jsx)("div",{id:"credits",children:Object(u.jsxs)("p",{children:["By",Object(u.jsxs)("a",{id:"github-account",href:"https://github.com/MarkelCA",children:[Object(u.jsx)(f.a,{icon:O.a})," Markel Cuesta"]})]})})},g=(n(26),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){var n=t.target.value,r=document.getElementById("header"),c=document.getElementById("robot-list");n?e.foldHeader(r,c,!1):e.foldHeader(r,c,!0),e.setState({searchField:n},(function(){var t=e.state.robots.filter(e.includesSearchField);e.props.searching(t)}))},e.includesSearchField=function(t){var n=!1,r=e.state.searchField;for(var c in t)if(n=t[c].toString().toLowerCase().includes(r.toLowerCase()))return n;return!1},e.scrollFunction=function(){var t=document.getElementById("header"),n=document.getElementById("robot-list"),r=document.body.scrollTop>100||document.documentElement.scrollTop>100;if(!(""===e.state.searchField))return t.classList.add("small"),void(n.style.margin="0");r?e.foldHeader(t,n,!1):e.foldHeader(t,n,!0)},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"foldHeader",value:function(e,t,n){n?(e.classList.remove("small"),t.style.marginTop="50vh",document.getElementById("credits").style.display="block"):(e.classList.add("small"),t.style.margin="0",document.getElementById("credits").style.display="none")}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"header",className:"mv3",children:[Object(u.jsx)(j,{}),Object(u.jsxs)(m,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(h,{searchChange:this.onSearchChange}),Object(u.jsx)(p,{})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})),window.onscroll=this.scrollFunction}}]),n}(r.Component)),v=(n(27),function(e){var t=e.name,n=e.email,r=e.id,c=e.username;return Object(u.jsxs)("div",{className:"tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(r,"?100x100"),alt:"robots"}),Object(u.jsxs)("h2",{children:["@",c]}),Object(u.jsx)("h3",{children:Object(u.jsx)("em",{children:t})}),Object(u.jsx)("p",{children:n})]})}),x=function(e){var t=e.id,n=e.name,r=e.email,c=e.username;return Object(u.jsx)(v,{id:t,name:n,email:r,username:c},t)},y=function(e){var t=e.robots;return Object(u.jsx)("div",{id:"robot-list",className:"cards-wrapper tc bg-light-blue",children:t.map(x)})},C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("p",{children:"Error loading the component"}):this.props.children}}]),n}(r.Component),k=(n(28),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).changedSearchField=function(t){e.setState({robots:t})},e.state={robots:[]},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.robots;return Object(u.jsxs)("div",{id:"container",className:"tc",children:[Object(u.jsx)(g,{robots:e,searching:this.changedSearchField}),Object(u.jsx)(C,{children:Object(u.jsx)(y,{robots:e})})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}}]),n}(r.Component)),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),F()}},[[29,1,2]]]);
//# sourceMappingURL=main.84fe2205.chunk.js.map