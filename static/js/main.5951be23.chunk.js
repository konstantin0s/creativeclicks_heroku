(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s(0),r=s.n(a),c=s(9),o=s.n(c),i=(s(46),s(10)),l=s(11),d=s(15),h=s(13),u=s(36),j=s.n(u),b=s(37),m=s.n(b),p=s(104),O=s(103),x=s(23),f=s.n(x),v=s(102),g=s(105),C=s(38),y=s.n(C),N=(s(77),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("header",{className:"header",id:"masthead",children:Object(n.jsx)("nav",{className:"links",children:Object(n.jsx)("li",{style:S,className:"link",children:"CreativeClicks"})})})})}}]),s}(a.Component)),S={color:"#fff",textDecoration:"none",marginRight:"20px",marginLeft:"20px"},w=N,M=(s(78),function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"footer-bottom",children:Object(n.jsxs)("p",{className:"text-center",children:[" ",(new Date).getFullYear()," Copyright \xa9 CreativeClicks"," "]})})})}),k=(s(79),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).myRef=r.a.createRef(),n}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{ref:this.myRef,className:"photo-container"})}}]),s}(a.Component)),F=(s(80),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).onChange=function(e){var t=e.target.value,s=t.replace(/06/g,"00316");n.setState({msisdn:s}),""===t&&n.setState({result:{},error:{}})},n.handleFormSubmit=function(e){if(e.preventDefault(),n.validate())n.setState({showModal:!1});else{var t=n.state.msisdn;j()({method:"GET",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With"},url:"https://cors-anywhere.herokuapp.com/https://p.djummer.com/opdracht?msisdn=".concat(t),data:n.state.msisdn}).then((function(e){return"subscribed"===e.data.status?n.setState({showModal:!0,result:e.data,message:e.data.status}):n.setState({showModal:!1,result:e.data,message:e.data.status}),e})).catch((function(e){return n.setState({error:e.message,showModal:!1})}))}n.clearErrors()},n.closeModal=function(){n.setState({showModal:!1})},n.showModalx=function(){n.setState({showModal:!0})},n.validate=function(){var e=n.state.msisdn,t={},s=!0;(e||(s=!1,t.phone="Please enter your phone number."),"undefined"!==typeof e)&&(new RegExp(/^[0-9\b]+$/).test(e)?13!==e.length&&(s=!1,t.phone="Please enter valid phone number."):(s=!1,t.phone="Please enter only number."));s||n.setState({error:t})},n.displayError=function(){return n.state.error.phone?n.state.error.phone:n.state.message?n.state.result.status:void 0},n.clearErrors=function(){setTimeout((function(){n.setState({error:{},message:""})}),15e3)},n.state={msisdn:"",message:"",showModal:!1,error:{},result:{}},n}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.result,s=t.status,a=t.credits,c=t.datesubscribed,o=this.state.msisdn;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(w,{}),Object(n.jsx)(k,{}),Object(n.jsx)("div",{className:"app-container",children:Object(n.jsxs)("form",{action:"#",children:[Object(n.jsx)("label",{htmlFor:"Phone",children:"Phone:"}),Object(n.jsx)("input",{type:"text",name:"msisdn",value:o,onChange:this.onChange,placeholder:"06XXXXXXXX",required:!0}),Object(n.jsx)("div",{className:"text-danger flex-center",children:Object(n.jsx)(f.a,{bottom:!0,cascade:!0,children:this.displayError()})}),Object(n.jsx)("button",{className:"btn btn-success",type:"submit",disabled:this.state.msisdn.length<1,onClick:function(t){return e.handleFormSubmit(t)},name:"submit",children:"Submit"}),Object(n.jsx)("div",{children:this.state.showModal&&Object(n.jsx)(m.a,{className:"modalx",ariaHideApp:!1,isOpen:!0,onRequestClose:this.closeModal,children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)("button",{className:"close-modal",onClick:this.closeModal,children:"X"}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsxs)(f.a,{left:!0,cascade:!0,children:[Object(n.jsx)("h1",{className:"text-center",children:" User details:"}),Object(n.jsx)(p.a,{className:"rcard",children:Object(n.jsx)(O.a,{children:Object(n.jsx)(v.a,{children:Object(n.jsx)("div",{className:"text-danger",children:this.state.error.phone?this.state.error.phone:Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Number: ",o]}),Object(n.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Status: ",s]}),Object(n.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Credits: ",a]}),Object(n.jsxs)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Subscribed: ",c]})]})})})})})]})})]})})})]})}),Object(n.jsx)(M,{})]})}}]),s}(a.Component)),X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,106)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),X()}},[[83,1,2]]]);
//# sourceMappingURL=main.5951be23.chunk.js.map