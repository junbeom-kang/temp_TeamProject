(function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],c=0,m=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0f4a":function(e,t,n){"use strict";n("9cd6")},"22a7":function(e,t,n){"use strict";n("d2e2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05"),width:"170"}})])],1),r("div",{staticClass:"menuWrap"},[r("ul",{staticClass:"menu"},[r("li",[r("router-link",{attrs:{to:"/board/list"}},[e._v("글씨체 연습")])],1),r("li",[r("router-link",{attrs:{to:"/board/login"}},[e._v("로그인")])],1)])])])},s=[],u={},l=u,p=(n("22a7"),n("2877")),c=Object(p["a"])(l,i,s,!1,null,"623be202",null),m=c.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("cAllI.cpp")])])}],v={},b=v,g=(n("65ea"),Object(p["a"])(b,d,f,!1,null,"299ddff5",null)),_=g.exports,w={name:"App",components:{Header:m,Footer:_}},h=w,y=(n("034f"),Object(p["a"])(h,o,a,!1,null,null,null)),x=y.exports,j=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jumbotron"},[n("b-jumbotron",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("게시판 main")]},proxy:!0},{key:"lead",fn:function(){return[e._v(" 게시판 만들기 ")]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),n("p",[e._v(" 개발자 : 3명 ")]),n("p",[e._v(" 빠밤! ")])])],1)},N=[],P={name:"jumbotron",props:{msg:String}},C=P,$=(n("0f4a"),Object(p["a"])(C,O,N,!1,null,"18ee5350",null)),k=$.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("인공지능 ")])])}],F={},M=F,T=Object(p["a"])(M,E,S,!1,null,"1280825c",null),A=T.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("div",[n("label",{attrs:{for:"email"}},[e._v("email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"name"}},[e._v("성함")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"password"}},[e._v("비밀번호")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"passwordConfirm"}},[e._v("비밀번호 확인")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"password",id:"passwordConfirm"},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"position"}},[e._v("직책")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",id:"position"},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"teamName"}},[e._v("팀 이름")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"}],attrs:{type:"text",id:"teamName"},domProps:{value:e.teamName},on:{input:function(t){t.target.composing||(e.teamName=t.target.value)}}})]),n("button",{attrs:{type:"submit"}},[e._v("회원가입")])])])},J=[],D={name:"SignupForm",data:function(){return{email:"",name:"",password:"",passwordConfirm:"",position:"",teamName:""}},methods:{submitForm:function(){console.log("dd")}}},I=D,V=Object(p["a"])(I,H,J,!1,null,"5fe3a09f",null),W=V.exports;r["default"].use(j["a"]);var q=new j["a"]({routes:[{path:"/",name:k,component:k},{path:"/board/list",name:A,component:A},{path:"/board/login",name:W,component:W}],rules:{"vue/no-parsing-error":[2,{"x-invalid-end-tag":!1}]}}),z=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(z["a"]),r["default"].config.productionTip=!0,new r["default"]({render:function(e){return e(x)},router:q,rules:{"vue/no-parsing-error":[2,{"x-invalid-end-tag":!1}]}}).$mount("#app")},"65ea":function(e,t,n){"use strict";n("7975")},7975:function(e,t,n){},"85ec":function(e,t,n){},"9cd6":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.df67dd83.png"},d2e2:function(e,t,n){}});
//# sourceMappingURL=app.69a7a041.js.map