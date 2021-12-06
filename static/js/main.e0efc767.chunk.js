(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),s=n(5),o=n(17),i=n(3),a=n(7),l=n(13),u=n(12),d=function(e){return fetch("".concat("https://mate.academy/students-api","/").concat(e)).then((function(e){return e.json()}))},j="FETCH_TODOS_REQUEST",b="FETCH_TODOS_SUCCESS",h="FETCH_TODOS_FAILED",p="FETCH_USER_REQUEST",O="FETCH_USER_SUCCESS",f="FETCH_USER_FAILED",m=function(e){return e.todos},_=function(e){return e.user},x=function(e){return function(t){t({type:p}),function(e){return d("users/".concat(e))}(e).then((function(e){return t({type:O,data:e})})).catch((function(){return t({type:f})}))}},v={loading:!1,todos:[],user:void 0,message:""},C=Object(a.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case b:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,todos:t.data});case h:return Object(i.a)(Object(i.a)({},e),{},{error:!0});case p:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case O:return Object(i.a)(Object(i.a)({},e),{},{loading:!1,user:t.data});case f:return Object(i.a)(Object(i.a)({},e),{},{error:!0});default:return e}}),Object(u.composeWithDevTools)(Object(a.applyMiddleware)(l.a))),S=C,T=n(4),y=n(0),g=n.n(y),E=(n(29),n(14)),N=n(15),U=n(18),I=n(16),L=(n(30),n(1)),k={fetchTodos:function(){return function(e){e({type:j}),d("todos").then((function(t){return e({type:b,data:t})})).catch((function(){return e({type:h})}))}}},w=Object(s.b)((function(e){return{todos:m(e)}}),k),F=function(e){Object(U.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(E.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searcInput:"",optionSelected:"all"},e.handleSelect=function(t){e.setState({optionSelected:t.target.value})},e.searcInput=function(t){e.setState({searcInput:t})},e}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this,t=this.props,n=t.todos,c=t.onUserChange,r=this.state,s=r.searcInput,o=r.optionSelected,i=n.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase().trim())}));return"completed"===o?i=i.filter((function(e){return!0===e.completed})):"inProgress"===o&&(i=i.filter((function(e){return!1===e.completed}))),Object(L.jsxs)("div",{className:"TodoList",children:[Object(L.jsx)("h2",{className:"title is-2",children:"Todos:"}),Object(L.jsxs)("form",{action:"",children:[Object(L.jsx)("input",{type:"text",className:"input",placeholder:"Write a title here",onChange:function(t){e.searcInput(t.target.value)}}),Object(L.jsxs)("select",{id:"select",className:"select is-fullwidth mt-3 mb-5",onChange:this.handleSelect,children:[Object(L.jsx)("option",{value:"all",children:"All"}),Object(L.jsx)("option",{value:"completed",children:"Completed"}),Object(L.jsx)("option",{value:"inProgress",children:"In progress"})]})]}),Object(L.jsx)("div",{className:"TodoList__list-container",children:Object(L.jsx)("ul",{className:"TodoList__list",children:i.map((function(e){return Object(L.jsxs)("li",{className:!1===e.completed?"TodoList__item TodoList__item--unchecked":"TodoList__item TodoList__item--checked",children:[Object(L.jsxs)("label",{htmlFor:"title",children:[Object(L.jsx)("input",{type:"checkbox",readOnly:!0,id:"title"}),Object(L.jsx)("p",{children:e.title})]}),Object(L.jsx)("button",{type:"button",className:"button is-info is-normal",onClick:function(){return c(e.userId)},children:"User: ".concat(e.userId)})]},e.id)}))})})]})}}]),n}(g.a.Component),A=w(F),D=(n(32),function(e){var t=e.onClear,n=e.userId,c=Object(s.c)(),r=Object(s.d)(_);return Object(y.useEffect)((function(){c(x(n))}),[n]),Object(L.jsxs)("div",{className:"CurrentUser",children:[Object(L.jsx)("h2",{className:"CurrentUser__title",children:Object(L.jsx)("span",{children:"Selected user: ".concat(null===r||void 0===r?void 0:r.name)})}),Object(L.jsx)("h3",{className:"CurrentUser__name",children:null===r||void 0===r?void 0:r.name}),Object(L.jsx)("p",{className:"CurrentUser__email",children:null===r||void 0===r?void 0:r.email}),Object(L.jsx)("p",{className:"CurrentUser__phone",children:null===r||void 0===r?void 0:r.phone}),Object(L.jsx)("button",{type:"button",className:"button is-primary is-fullwidth mt-5",onClick:function(){t(void 0)},children:"Clear"})]})}),H=function(){var e=Object(y.useState)(),t=Object(T.a)(e,2),n=t[0],c=t[1];return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)("div",{className:"App__sidebar",children:Object(L.jsx)(A,{onUserChange:c})}),Object(L.jsx)("div",{className:"App__content",children:Object(L.jsx)("div",{className:"App__content-container",children:n?Object(L.jsx)(D,{userId:n,onClear:c}):"No user selected"})})]})},R=function(){return Object(L.jsx)(s.a,{store:S,children:Object(L.jsx)(o.a,{children:Object(L.jsx)(H,{})})})};r.a.render(Object(L.jsx)(R,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e0efc767.chunk.js.map