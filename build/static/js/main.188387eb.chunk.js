(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(40)},38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(11),c=t.n(u),o=t(12),i=t(2),l=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,u=e.handleNumberChange,c=e.addPerson;return r.a.createElement("form",{onSubmit:c},"nimi: ",r.a.createElement("input",{value:n,onChange:t}),r.a.createElement("br",null),"numero: ",r.a.createElement("input",{value:a,onChange:u}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))},m=function(e){var n=e.searchString,t=e.handleSearchStringChange;return r.a.createElement("div",null,r.a.createElement("label",null," Rajaa n\xe4ytett\xe4vi\xe4 nimi\xe4: "),r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.message,t=e.notificationClass;return""===n?null:r.a.createElement("div",{className:t},n)},f=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("div",null,n.name,": ",n.number,r.a.createElement("button",{onClick:function(){return t(n)}},"Poista"))},d=function(e){var n=e.persons,t=e.deletePerson;return r.a.createElement("div",null,n.map(function(e){return r.a.createElement(f,{key:e.name,person:e,deletePerson:t})}))},h=t(3),b=t.n(h),p="/api/persons/",E=function(){return b.a.get(p).then(function(e){return e.data})},v=function(e){return b.a.post(p,e).then(function(e){return e.data})},g=function(e){return b.a.delete(p+e.id.toString())},j=function(e,n){return b.a.put(p+e.id.toString(),n).then(function(e){return e.data})},O=(t(38),function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),h=f[0],b=f[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),S=O[0],w=O[1],C=Object(a.useState)(""),N=Object(i.a)(C,2),P=N[0],k=N[1],y=Object(a.useState)(""),x=Object(i.a)(y,2),J=x[0],R=x[1],T=Object(a.useState)(""),B=Object(i.a)(T,2),D=B[0],H=B[1];Object(a.useEffect)(function(){E().then(u)},[]);var I=function(e){R(e),setTimeout(function(){R("")},5e3)},K=function(e){H(e),setTimeout(function(){H("")},5e3)},L=function(e,n){window.confirm("".concat(e.name," on jo luoettelossa. Korvataanko vanha numero uudella?"))&&j(e,Object(o.a)({},e,{number:n})).then(function(n){u(t.map(function(e){return e.id!==n.id?e:n})),b(""),w(""),I("Henkil\xf6n ".concat(e.name," numero p\xe4ivitetty"))}).catch(function(n){u(t.filter(function(n){return n.id!==e.id})),K("".concat(e.name," on poistettu")),b(""),w("")})},q=""!==P?t.filter(function(e){return null!==e.name.match(RegExp(P,"i"))}):t;return r.a.createElement("div",null,r.a.createElement("h1",null,"Puhelinluettelo"),r.a.createElement(s,{message:D,notificationClass:"error"}),r.a.createElement(s,{message:J,notificationClass:"notification"}),r.a.createElement(m,{searchString:P,handleSearchStringChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),r.a.createElement(l,{newName:h,newNumber:S,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){w(e.target.value)},addPerson:function(e){if(e.preventDefault(),""!==h){var n=t.map(function(e){return e.name}).indexOf(h);-1===n?v({name:h,number:S}).then(function(e){u(t.concat(e)),b(""),w(""),I("".concat(e.name," lis\xe4tty"))}).catch(function(e){return K(e.response.data.error)}):L(t[n],S)}}}),r.a.createElement("h2",null,"Numerot"),r.a.createElement(d,{persons:q,deletePerson:function(e){window.confirm("Poistetaanko ".concat(e.name,"?"))&&g(e).then(function(){u(t.filter(function(n){return n.id!==e.id})),I("".concat(e.name," poistettu"))}).catch(function(n){u(t.filter(function(n){return n.id!==e.id})),K("".concat(e.name," on jo poistettu"))})}}))});c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.188387eb.chunk.js.map