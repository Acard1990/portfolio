(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){e.exports=n(68)},38:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(27),c=n.n(r),s=n(28),o=n(4),i=n(6),u=n(9),m=n(7),d=n(8),h=(n(24),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"fakeScreen"},l.a.createElement("p",{class:"p line1"},"Welcome,",l.a.createElement("span",{class:"cursor1"},"_")),l.a.createElement("p",{class:"p line2"},"My name is Scott Cardinali,",l.a.createElement("span",{class:"cursor2"},"_")),l.a.createElement("p",{class:"p line3"},"and I'm a Senior SDET",l.a.createElement("span",{class:"cursor3"},"_")),l.a.createElement("p",{class:"p line4"},"Checkout my links below",l.a.createElement("span",{class:"cursor4"},"_")),l.a.createElement("p",{class:"p line5"},l.a.createElement("span",{class:"cursor5"},">","_")))}}]),t}(l.a.Component)),p=(n(38),n(20)),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("ul",{class:"bar"},l.a.createElement("ul",{class:"chunk"},l.a.createElement(p.SocialIcon,{url:"https://www.linkedin.com/in/scott-cardinali-10b212a6/"})),l.a.createElement("ul",{class:"chunk"},l.a.createElement(p.SocialIcon,{bgColor:"white",url:"https://github.com/Acard1990"})),l.a.createElement("ul",{class:"chunk"},l.a.createElement(p.SocialIcon,{url:"https://docs.google.com/document/d/1zO-7XeXoCVKBp00fsyCrThB3mVGXMq--KrWC50k_Sgs/edit?usp=sharing"})))}}]),t}(l.a.Component),E=(n(46),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"fakeMenu"},l.a.createElement("div",{class:"fakeButtons fakeClose"}),l.a.createElement("div",{class:"fakeButtons fakeMinimize"}),l.a.createElement("div",{class:"fakeButtons fakeZoom"}),l.a.createElement("div",{class:"fauxFilePath"},"scottCardinali-Portfolio -- ~zsh"))}}]),t}(l.a.Component)),b=n(5),g=n(22),x=(n(25),n(70)),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(function(e){return{newUser:Object(g.a)({},e.newUser,Object(b.a)({},a,l))}})},n.handleSubmit=function(){var e=n.state.newUser;n.validateEmail(e.email)?x.a.post("https://python-users-crud-portfolio-be-2902900fe179.herokuapp.com/appUsers",e).then(function(){n.fetchUsers(),n.setState({newUser:{id:"",first_name:"",last_name:"",email:""}})}).catch(function(e){console.error("Error adding user:",e)}):alert("Invalid email address. Please enter a valid email.")},n.handleDelete=function(e){x.a.delete("https://python-users-crud-portfolio-be-2902900fe179.herokuapp.com/appUsers/delete/".concat(e)).then(function(){n.fetchUsers()}).catch(function(e){console.error("Error deleting user:",e)})},n.generateRandomUUID=function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)});n.setState(function(t){return{newUser:Object(g.a)({},t.newUser,{id:e})}})},n.validateEmail=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},n.toggleComponent=function(){console.log("Toggle button clicked"),n.setState(function(e){return{isComponentVisible:!e.isComponentVisible}})},n.state={users:[],newUser:{id:"",first_name:"",last_name:"",email:""},isComponentVisible:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;x.a.get("https://python-users-crud-portfolio-be-2902900fe179.herokuapp.com/appUsers").then(function(t){e.setState({users:t.data})}).catch(function(e){console.error("Error fetching users:",e)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.newUser,a=(t.users,t.isComponentVisible);return l.a.createElement("div",{className:"center-button"},l.a.createElement("button",{id:"toggleBtn",className:"button-70",onClick:this.toggleComponent},"View Python User Management App Hosted on Heroku"),a&&l.a.createElement("div",null,l.a.createElement("table",{className:"user-grid"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email Address"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,this.state.users.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.first_name),l.a.createElement("td",null,t.last_name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,l.a.createElement("button",{id:"deleteBtn",onClick:function(){return e.handleDelete(t.id)}},"Delete User")))}))),l.a.createElement("div",null,l.a.createElement("input",{id:"firstNameInput",className:"button-70",type:"text",name:"first_name",placeholder:"First Name",value:n.first_name,onChange:this.handleChange}),l.a.createElement("input",{id:"lastNameInput",className:"button-70",type:"text",name:"last_name",placeholder:"Last Name",value:n.last_name,onChange:this.handleChange}),l.a.createElement("input",{id:"emailInput",className:"button-70",type:"text",name:"email",placeholder:"Email Address",value:n.email,onChange:this.handleChange}),l.a.createElement("button",{id:"addUserBtn",className:"button-70",onClick:this.handleSubmit},"Add User"))))}}]),t}(l.a.Component),v=(n(51),n(23)),C=n.n(v),O=(n(67),a.Component,function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("document-height",document.documentElement.offsetHeight),console.log("document-width",document.documentElement.offsetWidth)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"fakeScreen"},l.a.createElement(E,null),l.a.createElement(h,null)),l.a.createElement(k,null),l.a.createElement(f,null))}}]),t}(l.a.Component));c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(O,null))))}},[[29,1,2]]]);
//# sourceMappingURL=main.bfc7a6e6.chunk.js.map