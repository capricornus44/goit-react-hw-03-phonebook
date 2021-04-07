(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__3U9p1",formLabel:"Form_formLabel__2DN96",formInput:"Form_formInput__2Pl0c",button:"Form_button__CprmO"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(13),i=n(11),l=n(5),u=n(6),m=n(8),b=n(7),d=n(4),h=n(2),f=n.n(h),j=n(0),p=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(j.jsxs)("label",{className:f.a.formLabel,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,className:f.a.formInput})]}),Object(j.jsxs)("label",{className:f.a.formLabel,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{3})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,className:f.a.formInput})]}),Object(j.jsx)("button",{type:"submit",onSubmit:this.handleAddContact,className:f.a.button,children:"Add contact"})]})}}]),n}(a.Component),O=n(3),C=n.n(O),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{className:C.a.item,children:[e,":",Object(j.jsx)("span",{className:C.a.num,children:c}),Object(j.jsx)("button",{className:C.a.deleteButton,onClick:function(){return n(a)},children:"Delete"})]},a)})}))})},_=n(9),v=n.n(_),g=function(t){var e=t.filter,n=t.onChange;return Object(j.jsxs)("div",{className:v.a.filterBox,children:[Object(j.jsx)("p",{className:v.a.filterTitle,children:"Find contacts by name"}),Object(j.jsx)("input",{className:v.a.filterInput,type:"text",value:e,onChange:n})]})},N=n(24),S=(n(19),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=t.state.contacts,a=Object(i.a)(Object(i.a)({},e),{},{id:Object(N.a)()});n.map((function(t){return t.name.toLowerCase()})).includes(e.name.toLowerCase())?alert('Contact "'.concat(e.name,'" already exists')):t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))},t.handleFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getMatchingContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getMatchingContacts();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("section",{title:"Phonebook",className:"section",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.handleAddContact})]}),Object(j.jsxs)("section",{title:"Contacts",className:"section",children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(g,{value:t,onChange:this.handleFilter}),Object(j.jsx)(x,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component));n(20),n(21);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__3SK8a",item:"ContactList_item__idQvy",num:"ContactList_num__21E0W",deleteButton:"ContactList_deleteButton__YZC2k"}},9:function(t,e,n){t.exports={filterBox:"Filter_filterBox__ba9oG",filterTitle:"Filter_filterTitle__1zeBb",filterInput:"Filter_filterInput__206oh"}}},[[22,1,2]]]);
//# sourceMappingURL=main.dd8e67af.chunk.js.map