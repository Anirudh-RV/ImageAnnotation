(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(23),c=a.n(l),s=(a(66),a(5)),r=a(6),i=a(8),u=a(7),m=a(9),g=a(3),d=a(24),p=a(20),f=a(11),h=a.n(f),E=a(26),b=(a(30),a(14),n.Component,a(13)),v=a(4),N=a.n(v),k=(a(49),a(50),a(105)),y=(a(52),function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),r=(s[0],s[1],Object(n.useState)(!1)),i=Object(b.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(b.a)(d,2),f=(p[0],p[1],Object(n.useState)(!1)),h=Object(b.a)(f,2),E=h[0],v=h[1],y=Object(n.useState)(!1),O=Object(b.a)(y,2),C=(O[0],O[1],Object(n.useState)(!1)),T=Object(b.a)(C,2),A=T[0],I=T[1],j=Object(n.useState)(!1),x=Object(b.a)(j,2);x[0],x[1];return o.a.createElement("nav",null,o.a.createElement("ul",{className:N.a.NaviText},o.a.createElement("li",{className:N.a.LogoElement},o.a.createElement("button",{id:"btnFile",className:N.a.btnclass},"X-P1")),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){l(1!=a)},onMouseLeave:function(){1==a&&l(!1)}},o.a.createElement("button",{id:"btnFile",className:N.a.btnclass},"Product"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:a},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/"},"Home1")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/about"},"About1")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/contact"},"Contact1"))))),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){m(1!=u)},onMouseLeave:function(){1==u&&m(!1)}},o.a.createElement("button",{className:N.a.btnclass},"Pricing"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:u},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/"},"Home2")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/about"},"About2")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/contact"},"Contact2"))))),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){v(1!=E)},onMouseLeave:function(){1==E&&v(!1)}},o.a.createElement("button",{className:N.a.btnclass},"Resources"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:E},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/"},"Home3")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/about"},"About3")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/contact"},"Contact3"))))),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){I(1!=A)},onMouseLeave:function(){1==A&&I(!1)}},o.a.createElement("button",{className:N.a.btnclass},"Support"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:A},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/"},"Home4")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/about"},"About4")),o.a.createElement("li",null,o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/Contact"},"Contact4"))))),o.a.createElement("li",{className:N.a.Navielements},o.a.createElement(g.c,{class:"navlink",exact:!0,activeClassName:"current",to:"/signup"},"Login"))))}),O=function(){return o.a.createElement("div",null,o.a.createElement(y,null))},C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(O,null),o.a.createElement("h1",null,"HOME PAGE //TODO : ADD INTRODUCTION TO PROJECT"))}}]),t}(n.Component),T=a(103),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).Logout=function(){console.log("inside LOGOUT"),(new p.a).remove("username"),window.location.reload(!1)},a.checkMimeType=function(e){for(var t=e.target.files,a=[],n=["image/png","image/jpeg","image/gif"],o=0;o<t.length;o++)n.every((function(e){return t[o].type!==e}))&&(a[o]=t[o].type+" is not a supported format\n");for(var l=0;l<a.length;l++)e.target.value=null;return!0},a.maxSelectFile=function(e){if(e.target.files.length>10){return e.target.value=null,!1}return!0},a.checkFileSize=function(e){for(var t=e.target.files,a=[],n=0;n<t.length;n++)t[n].size>2e6&&(a[n]=t[n].type+"is too large, please pick a smaller file\n");for(var o=0;o<a.length;o++)e.target.value=null;return!0},a.addToBackendUsingApi=function(e){for(var t=a.props.location.state.userName+",",n=0;n<e.length-1;n++)t=t+e[n].name+",";t+=e[e.length-1].name,console.log("Calling GO API at 8080 : "),console.log(t),h.a.post("http://localhost:8080/insertimagedata",t).then((function(e){console.log("API message : "),console.log(e)})).catch((function(e){console.log(e)}))},a.onChangeHandler=function(e){var t=e.target.files;a.maxSelectFile(e)&&a.checkMimeType(e)&&a.checkFileSize(e)&&a.setState({selectedFile:t,loaded:0})},a.RedirecToEditPage=function(){a.props.location.state.userName;a.props.history.push({pathname:"/EditPage",state:{userName:a.props.location.state.userName}})},a.onClickHandler=function(){for(var e=new FormData,t=a.props.location.state.userName,n=0;n<a.state.selectedFile.length;n++)e.append("file",a.state.selectedFile[n]);h.a.post("http://localhost:4000/upload",e,{headers:{userName:t},onUploadProgress:function(e){a.setState({loaded:e.loaded/e.total*100})}}).then((function(e){a.addToBackendUsingApi(a.state.selectedFile),console.log("Upload success:\n"+e)})).catch((function(e){console.log("Upload fail"+e)}))},a.state={selectedFile:null,loaded:0},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.location.state.userName)}},{key:"render",value:function(){return o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"offset-md-3 col-md-6"},o.a.createElement("div",{class:"form-group files"},o.a.createElement("label",null,"Upload Your File "),o.a.createElement("input",{id:"input_upload",type:"file",class:"form-control",multiple:!0,onChange:this.onChangeHandler})),o.a.createElement("div",{class:"form-group"},o.a.createElement(T.a,{max:"100",color:"success",value:this.state.loaded},Math.round(this.state.loaded,2),"%")),o.a.createElement("button",{type:"button",class:"buttonclass",onClick:this.onClickHandler},"Upload"),o.a.createElement("button",{type:"button",class:"buttonclass",onClick:this.RedirecToEditPage},"View Images"),o.a.createElement("button",{type:"button",class:"buttonclass",onClick:this.Logout},"Log out"))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).testpromises2=function(){var e="";new Promise((function(t,a){setTimeout((function(){console.log("first function executed"),e+="first",console.log(e),t()}),250)})).then((function(){console.log("second function executed"),e+="second",console.log(e)})).then((function(){console.log("third function executed"),e+="third",console.log(e)}))},a.testpromises1=function(){new Promise((function(e,t){setTimeout((function(){e("Success!")}),250)})).then((function(e){console.log("Yay! "+e),a.DataRetrieved.innerHTML="Yay! "+e}))},a.testApifuncvalidateuser=function(){console.log("inside the testApifuncvalidateuser function : "),h.a.post("http://localhost:8080/validateinfo","email,anirudh.rv1234@gmail.com").then((function(e){console.log("API message : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail"),console.log(e)}))},a.testApifuncauthorizeuser=function(){console.log("inside the authorizeuser function : "),h.a.post("http://localhost:8080/authorizeuser","anirudhr1v,password").then((function(e){console.log("API message : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail"),console.log(e)}))},a.testApifuncPost=function(){console.log("inside the testApifuncPost function : "),h.a.post("http://localhost:8080/").then((function(e){console.log("API : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail")}))},a.testApifuncGet=function(){console.log("inside the testApifuncGet function : "),h.a.get("http://localhost:8080/").then((function(e){console.log("API : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail")}))},a.testApifuncPut=function(){console.log("inside the testApifuncPut function : "),h.a.put("http://localhost:8080/").then((function(e){console.log("API : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail")}))},a.testApifuncDelete=function(){console.log("inside the testApifuncDelete function : "),h.a.delete("http://localhost:8080/").then((function(e){console.log("API : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail")}))},a.testApifuncdeleteuser=function(){console.log("inside the testApifuncdeleteuser function : "),h.a.post("http://localhost:8080/deleteuser","profoak").then((function(e){console.log("API : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail")}))},a.testApifuncinsertimagedata=function(){console.log("inside the testApifuncinsertimagedata function : "),h.a.post("http://localhost:8080/insertimagedata","profoak,frontend1,frontend2,frontend3").then((function(e){console.log("API message : "),console.log(e),console.log(e.data.message),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.message)})).catch((function(e){console.log("fail"),console.log(e)}))},a.testApifuncgetimages=function(){console.log("inside the testApifuncgetimages function : "),h.a.post("http://localhost:8080/getimages","user1").then((function(e){console.log("API : "),console.log(e),console.log(e.data.data),a.DataRetrieved&&(a.DataRetrieved.innerHTML=e.data.data)})).catch((function(e){console.log("fail"),console.log(e)}))},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"TESTING API, check developer tools for console."),o.a.createElement("pre",null),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncPost}," CALL POST "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncGet}," CALL GET "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncPut}," CALL PUT "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncDelete},"  CALL DELETE"),o.a.createElement("pre",null),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncinsertimagedata}," CALL insertimagedata "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncgetimages}," CALL getimages "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncdeleteuser},"  DELETE USER (change name in API CALL-incode)"),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncauthorizeuser},"  CHECK AUTHORIZE USER "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testApifuncvalidateuser},"  Validate Info "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testpromises1},"  Test promises1 "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testpromises2},"  Test promises2 "),o.a.createElement("h1",{className:"name",ref:function(t){return e.DataRetrieved=t}}))}}]),t}(n.Component),j=a(25),x=a(104),L=a(106),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(){console.log(a.usercredentials.value);var e=a.usercredentials.value+","+a.Password.value;console.log("inside the testApifunccheckuser function : "),h.a.post("http://192.168.1.8:8080/authorizeuser",e).then((function(e){if(console.log("API message : "),console.log(e),console.log(e.data.message),"No"==e.data.message)a.Error.innerHTML="UserName or Password incorrect.";else{var t=new p.a;t.set("username",a.usercredentials.value,{path:"/"}),console.log(t.get("username")),a.props.history.push({pathname:"/customrouting",state:{usercredentials:a.usercredentials.value,checkval:e.data.message}})}})).catch((function(e){console.log("fail"),console.log(e)}))},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"BackgroundSign"},o.a.createElement("h1",{className:"AppName"},"End-to-end data curation and annotation platform"),o.a.createElement("div",{className:"SignIn"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("p",{class:"SignInHead"},"X-P1"),o.a.createElement("p",{class:"SignUpHead"},"Sign In to make data collection and image annotation easier."),o.a.createElement(x.a,{controlId:"email",bsSize:"large"},o.a.createElement(L.a,{autoFocus:!0,placeholder:"Username, or email",ref:function(t){return e.usercredentials=t}})),o.a.createElement(x.a,{controlId:"password",bsSize:"large"},o.a.createElement(L.a,{placeholder:"Password",ref:function(t){return e.Password=t},type:"password"})),o.a.createElement(j.a,{block:!0,bsSize:"large",onClick:this.handleSubmit,type:"button"},"Log In"))),o.a.createElement("div",{className:"SecondBoxSignIn"},o.a.createElement("p",{className:"ErrorMessage",ref:function(t){return e.Error=t}}),o.a.createElement("p",{className:"LinkToAccount"}," Don't have an account?\xa0",o.a.createElement(g.b,{className:"LinkToSignUp",to:"./signup"},"Sign up"))))}}]),t}(n.Component),P=(n.Component,function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).signupUser=function(){var e=a.emailId.value,t=a.userName.value,n=a.fullName.value,o=a.Password.value;console.log("\n"+e+"\n"+t+"\n"+n+"\n"+o+"\n"),console.log("Calling GO API at 8080 : ");var l=e+","+t+","+n+","+o;h.a.post("http://localhost:8080/addusertodatabase",l).then((function(e){console.log("API message : "),console.log(e),console.log("result : "+e.data.message),a.props.history.push({pathname:"/customrouting",state:{usercredentials:t,checkval:e.data.message}})})).catch((function(e){console.log("fail"),console.log(e)}))},a.len=function(e){return e.length},a.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},a.checkforexistingUsername=function(e,t){var n=e+","+t;console.log("Calling GO API at 8080 : "),h.a.post("http://localhost:8080/validateinfo",n).then((function(e){console.log("API message : "),console.log(e),console.log("result : "+e.data.message),"Yes"==e.data.message?a.userNameError.innerHTML="UserName already taken, please try another.":a.signupUser()})).catch((function(e){console.log("fail"),console.log(e)}))},a.checkforexistingEmail=function(e,t,n){var o=e+","+t;console.log("Calling GO API at 8080 : "),h.a.post("http://localhost:8080/validateinfo",o).then((function(e){console.log("API message : "),console.log(e),console.log("result : "+e.data.message),"Yes"==e.data.message?a.emailError.innerHTML="Already existing email, do you want to login?":a.checkforexistingUsername("username",n)})).catch((function(e){console.log("fail"),console.log(e)}))},a.handleEmail=function(e,t){return a.validateEmail(e)?a.emailError.innerHTML="":(t=!1,console.log("Email Error"),a.emailError.innerHTML="Invalid emailId"),t},a.handleuserName=function(e,t){return a.len(e)>=4?a.userNameError.innerHTML="":(t=!1,console.log("userName Error"),a.userNameError.innerHTML="Invalid Username"),t},a.handlefullName=function(e,t){return 0!=a.len(e)?(a.fullNameError.innerHTML="",console.log(a.len(e))):(t=!1,console.log("fullName Error"),a.fullNameError.innerHTML="Please fill your name"),t},a.handlePassword=function(e,t){return a.len(e)>=6?(a.PasswordError.innerHTML="",console.log(a.len(e))):(t=!1,console.log("fullName Error"),a.PasswordError.innerHTML="Password too weak"),t},a.handleSubmit=function(){var e=a.emailId.value,t=a.userName.value,n=a.fullName.value,o=a.Password.value,l=!0;l=a.handleEmail(e,l),l=a.handleuserName(t,l),l=a.handlefullName(n,l),(l=a.handlePassword(o,l))?a.checkforexistingEmail("email",e,t):console.log("invalid entry")},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.accountexists=!1,this.userNameExists=!1,this.handleEmail.bind(this)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"BackgroundSign"},o.a.createElement("h1",{className:"AppName"},"End-to-end data curation and annotation platform"),o.a.createElement("div",{className:"Login"},o.a.createElement("form",null,o.a.createElement("p",{class:"SignInHead"},"X-P1"),o.a.createElement("p",{class:"SignUpHead"},"Sign up to make data collection and image annotation easier."),o.a.createElement(x.a,{controlId:"email",bsSize:"large"},o.a.createElement(L.a,{autoFocus:!0,placeholder:"Email",ref:function(t){return e.emailId=t}})),o.a.createElement("p",{className:"ErrorMessage",ref:function(t){return e.emailError=t}}),o.a.createElement(x.a,{controlId:"Username",bsSize:"large"},o.a.createElement(L.a,{autoFocus:!0,placeholder:"Username",ref:function(t){return e.userName=t}})),o.a.createElement("p",{className:"ErrorMessage",ref:function(t){return e.userNameError=t}}),o.a.createElement(x.a,{controlId:"Name",bsSize:"large"},o.a.createElement(L.a,{autoFocus:!0,placeholder:"Full Name",ref:function(t){return e.fullName=t}})),o.a.createElement("p",{className:"ErrorMessage",ref:function(t){return e.fullNameError=t}}),o.a.createElement(x.a,{controlId:"password",bsSize:"large"},o.a.createElement(L.a,{placeholder:"Password",ref:function(t){return e.Password=t},type:"password"}),o.a.createElement("p",{className:"ErrorMessage",ref:function(t){return e.PasswordError=t}})),o.a.createElement(j.a,{block:!0,bsSize:"large",onClick:this.handleSubmit,type:"button"},"Sign up"),o.a.createElement("p",{class:"Terms"},"By signing up, you agree to our Terms , Data Policy and Cookies Policy ."))),o.a.createElement("div",{className:"SecondBox"},o.a.createElement("p",{className:"LinkToAccount"},"  Have an account?\xa0",o.a.createElement(g.b,{className:"LinkToSignIn",to:"./signin"},"Log in"))))}}]),t}(n.Component)),w=(n.Component,a(101),function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),r=(s[0],s[1],Object(n.useState)(!1)),i=Object(b.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(!1),p=Object(b.a)(d,2),f=(p[0],p[1],Object(n.useState)(!1)),h=Object(b.a)(f,2),E=h[0],v=h[1],y=Object(n.useState)(!1),O=Object(b.a)(y,2),C=(O[0],O[1],Object(n.useState)(!1)),T=Object(b.a)(C,2),A=T[0],I=T[1],j=Object(n.useState)(!1),x=Object(b.a)(j,2);x[0],x[1];return o.a.createElement("nav",null,o.a.createElement("ul",{className:N.a.NaviText},o.a.createElement("li",{className:N.a.Navielements,onClick:function(){l(1!=a)},onMouseLeave:function(){1==a&&l(!1)}},o.a.createElement("button",{id:"btnFile",className:N.a.btnclass},"FILE"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:a},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/"},"Home1")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/about"},"About1")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/contact"},"Contact1"))))),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){m(1!=u)},onMouseLeave:function(){1==u&&m(!1)}},o.a.createElement("button",{className:N.a.btnclass},"EDIT"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:u},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/"},"Home2")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/about"},"About2")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/contact"},"Contact2"))))),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){v(1!=E)},onMouseLeave:function(){1==E&&v(!1)}},o.a.createElement("button",{className:N.a.btnclass},"VIEW"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:E},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/"},"Home3")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/about"},"About3")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/contact"},"Contact3"))))),o.a.createElement("li",{className:N.a.Navielements,onClick:function(){I(1!=A)},onMouseLeave:function(){1==A&&I(!1)}},o.a.createElement("button",{className:N.a.btnclass},"HELP"),o.a.createElement(k.a,{className:N.a.collapse,isOpen:A},o.a.createElement("ul",{className:N.a.DropdownNavi},o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/"},"Home4")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/about"},"About4")),o.a.createElement("li",null,o.a.createElement(g.c,{exact:!0,activeClassName:"current",to:"/contact"},"Contact4")))))))}),D=function(){return o.a.createElement("div",null,o.a.createElement(w,null))},M=(a(100),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onButton=function(){e.flag=!0,e.initDraw(e.divCanvas,e.flag,e.outputdiv)},e.offButton=function(){e.flag=!1,e.initDraw(e.divCanvas,e.flag,e.outputdiv)},e.initDraw=function(e,t,a){var n={x:0,y:0,startX:0,startY:0},o=null;e.onmousemove=function(e){t&&(!function(e){var t=e||window.event;t.pageX?(n.x=t.pageX,n.y=t.pageY):t.clientX&&(n.x=t.clientX,n.y=t.clientY)}(e),null!==o&&(o.style.width=Math.abs(n.x-n.startX)+"px",o.style.height=Math.abs(n.y-n.startY)+"px",o.style.left=n.x-n.startX<0?n.x+"px":n.startX+"px",o.style.top=n.y-n.startY<0?n.y+"px":n.startY+"px"))},e.onclick=function(l){if(console.log("ONorOFF : "+t),console.log(l),t)if(null!==o){o=null,e.style.cursor="default",console.log("mouse: ENDX : "+n.x),console.log("mouse: ENDY : "+n.y),this.EndX=n.x,this.EndY=n.y-125;var c="("+this.StartX+"|"+this.StartY+") ("+this.EndX+"|"+this.EndY+")</br>";this.imageTextData=c,a.innerHTML=a.innerHTML+"\n"+c,console.log("displaying here : "+this.imageTextData),console.log("finsihed.")}else console.log("begun."),n.startX=n.x,n.startY=n.y,(o=document.createElement("div")).className="rectangle",o.style.left=n.x+"px",o.style.top=n.y+"px",e.appendChild(o),e.style.cursor="crosshair",console.log("mouse: STARTX : "+n.x),console.log("mouse: startY : "+n.y),this.StartX=n.x,this.StartY=n.y-125}},e.NextImage=function(){if(e.divCanvas.innerHTML="",e.divCanvas.appendChild(e.ImageTag),e.state.index>e.state.ImageNames.length-2)console.log("end");else{var t="output_"+e.state.ImageNames[e.state.index]+","+e.outputdiv.innerHTML;console.log(t),h.a.post("http://localhost:8080/saveastextfile",t).then((function(e){console.log("API : "),console.log(e),console.log(e.data.message)})).catch((function(e){console.log("FAIL"),console.log(e)})),e.state.index=e.state.index+1,e.ImageTag&&(e.ImageTag.src="http://localhost:4000/img/"+e.state.ImageNames[e.state.index],console.log(e.ImageTag.width),console.log(e.ImageTag.height),console.log(e.ImageTag.left),console.log(e.ImageTag.top))}e.outputdiv.innerHTML=""},e.PrevImage=function(){e.divCanvas.innerHTML="",e.divCanvas.appendChild(e.ImageTag),0==e.state.index?console.log("start"):(e.state.index=e.state.index-1,e.ImageTag&&(e.ImageTag.src="http://localhost:4000/img/"+e.state.ImageNames[e.state.index])),e.outputdiv.innerHTML=""},e.testSaveText=function(){var t=e.state.ImageNames[e.state.index]+","+e.outputdiv.innerHTML;console.log(t),h.a.post("http://localhost:8080/saveastextfile",t).then((function(e){console.log("API : "),console.log(e),console.log(e.data.message)})).catch((function(e){console.log("FAIL"),console.log(e)}))},e.Apifuncgetimages=function(t){console.log("Calling GO API at 8080 : "),h.a.post("http://localhost:8080/getimages",t).then((function(t){console.log("API : "),console.log(t),console.log(t.data.data);var a=t.data.data.split("</br>");a.pop(),e.state.ImageNames=a,e.ImageTag&&(e.ImageTag.src="http://localhost:4000/img/"+e.state.ImageNames[e.state.index])})).catch((function(e){console.log("FAIL"),console.log(e)}))},e.state={index:0},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.Apifuncgetimages(this.props.name),this.flag=!1,this.startX=0,this.EndX=0,this.StartY=0,this.EndY=0,this.imageTextData=" "}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"columnLeft"},o.a.createElement("p",null,"Left Side"),o.a.createElement("div",{ref:function(t){return e.divCanvas=t}},o.a.createElement("img",{className:"name",ref:function(t){return e.ImageTag=t}}))),o.a.createElement("div",{className:"columnRight"},o.a.createElement("p",null,"Right Side"),o.a.createElement("button",{type:"button",class:"buttonclass",onClick:this.NextImage},"NEXT"),o.a.createElement("button",{type:"button",class:"buttonclass",onClick:this.PrevImage},"PREVIOUS"),o.a.createElement("button",{className:"buttonclass",onClick:this.onButton},"ON"),o.a.createElement("button",{className:"buttonclass",onClick:this.offButton},"OFF"),o.a.createElement("button",{className:"buttonclass",onClick:this.testSaveText},"SEND SOMETHING (TEST)")),o.a.createElement("div",{ref:function(t){return e.outputdiv=t}}))}}]),t}(n.Component)),H=(n.Component,function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("p",{className:"Username",ref:function(t){return e.UserTag=t}},this.props.location.state.userName),o.a.createElement("body",null,o.a.createElement(D,null),o.a.createElement(M,{name:this.props.location.state.userName})))}}]),t}(n.Component)),R=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){console.log("in CustomRouting");try{return"Yes"===this.props.location.state.checkval?o.a.createElement(g.a,null,o.a.createElement("div",null,o.a.createElement(d.d,null),o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/upload",component:A}),o.a.createElement(d.b,{path:"/EditPage",component:H}),o.a.createElement(d.a,{to:{pathname:"/upload",state:{userName:this.props.location.state.usercredentials}}})))):(console.log("failure"),o.a.createElement("div",null,o.a.createElement(d.a,{to:"/"})))}catch(e){return console.log("catch"),o.a.createElement("div",null,o.a.createElement(d.a,{to:"/"}))}}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"BackgroundSign"},o.a.createElement("h1",{className:"AppName"},"404. That\u2019s an error."),o.a.createElement("div",{className:"SignIn"},o.a.createElement("p",{className:"SignInHead"},"Sorry, this page isn't available."),o.a.createElement("p",{className:"LinkToAccount"}," The link you followed may be broken, or the page may have been removed.",o.a.createElement(g.b,{className:"LinkToImageAnnotation",to:"/"},"Go back to Image Annotation."))))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).testmakecookie=function(){var e=new p.a;e.set("username","Pacman",{path:"/"}),console.log(e.get("username")),a.DataRetrieved.innerHTML=e.get("username")},a.testdeletecookie=function(){(new p.a).remove("username")},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new p.a;e.get("username")?this.DataRetrieved.innerHTML=e.get("username"):console.log("No cookie")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"TESTING Cookies, check developer tools for console."),o.a.createElement("pre",null),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testmakecookie}," MAKE COOKIE "),o.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.testdeletecookie}," DELETE COOKIE "),o.a.createElement("h1",{className:"name",ref:function(t){return e.DataRetrieved=t}}))}}]),t}(n.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=new p.a;return e.get("username")?(console.log(e.get("username")),o.a.createElement(g.a,null,o.a.createElement("div",null,o.a.createElement(d.d,null),o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/customrouting",component:R}),o.a.createElement(d.a,{to:{pathname:"/customrouting",state:{usercredentials:e.get("username"),checkval:"Yes"}}}))))):o.a.createElement(g.a,null,o.a.createElement("div",null,o.a.createElement(d.d,null),o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/",component:C}),o.a.createElement(d.b,{path:"/customrouting",component:R}),o.a.createElement(d.b,{path:"/signup",component:P}),o.a.createElement(d.b,{path:"/signin",component:S}),o.a.createElement(d.b,{path:"/testapi",component:I}),o.a.createElement(d.b,{path:"/testcookie",component:U}),o.a.createElement(d.b,{path:"/upload",component:R}),o.a.createElement(d.b,{component:_}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g.a,null,o.a.createElement(F,null)),document.getElementById("root"))},14:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},4:function(e,t,a){e.exports={Left:"mystyle_Left__2Y-Xe",LogoElement:"mystyle_LogoElement__3K32i",Navielements:"mystyle_Navielements__1LKkg",LeftMajor:"mystyle_LeftMajor__1ISya",Right:"mystyle_Right__1f0Nk",RightMinor:"mystyle_RightMinor__1wDfS",collapse:"mystyle_collapse__Im3ML",Body:"mystyle_Body__1k9Nz",Navi:"mystyle_Navi__3Rk2r",NaviText:"mystyle_NaviText__2VsmH",DropdownNavi:"mystyle_DropdownNavi__2Sebx",btnclass:"mystyle_btnclass__n9CVy"}},49:function(e,t,a){},61:function(e,t,a){e.exports=a(102)},66:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.4a657c37.chunk.js.map