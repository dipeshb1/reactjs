(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),u=n(7),o=n(5),l=n(1),i=n(8),c=n(0),m=n.n(c),s=n(6),d=n.n(s),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){n.setState({value:e.target.value})},n.state={value:"coconut",countries:[{id:"1",country:"Cambodia"},{id:"2",country:"Australia"},{id:"3",country:"US"}]},n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleSubmit",value:function(e){alert("Your favorite flavor is: "+this.state.value),e.preventDefault()}},{key:"getUnique",value:function(e,t){return e.map(function(e){return e[t]}).map(function(e,t,n){return n.indexOf(e)===t&&t}).filter(function(t){return e[t]}).map(function(t){return e[t]})}},{key:"render",value:function(){var e=n(16),t=this.getUnique(e.world,"country");return m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("label",null,"Pick your favorite flavor:",m.a.createElement("select",{value:this.state.value,onChange:this.handleChange},m.a.createElement("option",{value:"grapefruit"},"Grapefruit"),m.a.createElement("option",{value:"lime"},"Lime"),m.a.createElement("option",{value:"coconut"},"Coconut"),m.a.createElement("option",{value:"mango"},"Mango"))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("label",null,"Looping through Array",m.a.createElement("select",null,this.state.countries.map(function(e){return m.a.createElement("option",{key:e.id,value:e.country},e.country)}),console.log(this.state.countries))),m.a.createElement("input",{type:"submit",value:"Submit"}),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("label",null,"Looping through Json File",m.a.createElement("select",null,t.map(function(e){return m.a.createElement("option",{key:e.id,value:e.country},e.country)}),console.log(this.state.countries))),m.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(m.a.Component);d.a.render(m.a.createElement(b,null),document.querySelector("#root"))},16:function(e){e.exports={world:[{id:"1",country:"Cambodia"},{id:"2",country:"Australia"},{id:"3",country:"US"},{id:"4",country:"China"},{id:"5",country:"China"},{id:"6",country:"Cambodia"},{id:"7",country:"China"},{id:"8",country:"Australia"},{id:"9",country:"US"},{id:"10",country:"New Zealand"}]}},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.e02014dc.chunk.js.map