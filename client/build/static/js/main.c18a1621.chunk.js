(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(63)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"auth",(function(){return g}));var r={};a.r(r),a.d(r,"userSession",(function(){return v})),a.d(r,"logout",(function(){return y}));var c=a(0),l=a.n(c),s=a(31),o=a.n(s),i=a(9),u=a(10),m=a(12),d=a(11),p=a(13),E=a(3),h=a(17),b=a(22),f={apiKey:"AIzaSyAbUuwSnfoJVuPDYossgG7lBye3n_27d8g",authDomain:"locobounce-8b61c.firebaseapp.com",databaseURL:"https://locobounce-8b61c.firebaseio.com",projectId:"locobounce-8b61c",storageBucket:"",messagingSenderId:"946155596066",appId:"1:946155596066:web:03ae31af9d8515a86e5d7b",measurementId:"G-1NDKGCRCZS"};console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DB_KEY:"AIzaSyAbUuwSnfoJVuPDYossgG7lBye3n_27d8g"})),b.apps.length&&b.initializeApp(f),b.initializeApp(f);var g=b.auth(),v=function(e,t,a){return g["".concat(e,"WithEmailAndPassword")](t,a)},y=function(){return g.signOut()},x=Object(c.createContext)(),w=x.Provider,S=x.Consumer,k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:t.defaultProps.currentUser,message:t.defaultProps.message},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;n.auth.onAuthStateChanged((function(t){return t&&e.setState({currentUser:t})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(w,{value:{state:this.state,destroySession:function(){return e.setState({currentUser:t.defaultProps.currentUser})},setMessage:function(t){return e.setState({message:t})},clearMessage:function(){return e.setState({message:t.defaultProps.message})}}},this.props.children)}}]),t}(c.Component);k.defaultProps={currentUser:null,message:null};var B=k,L=a(16),N=a(21),O=a(20),j=(a(51),a(52),a(53),a(54),a(55),a(56),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).email=Object(c.createRef)(),a.password=Object(c.createRef)(),a.handleSuccess=a.handleSuccess.bind(Object(N.a)(a)),a.handleErrors=a.handleErrors.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleSuccess",value:function(){this.resetForm(),this.props.onSuccess&&this.props.onSuccess()}},{key:"handleErrors",value:function(e){this.props.onError&&this.props.onError(e)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.email,a=this.password,n=this.props.action;r.userSession(n,t.current.value,a.current.value).then(this.handleSuccess).catch(this.handleErrors)}},{key:"resetForm",value:function(){if(this.email.current&&this.password.current){var e=t.defaultProps,a=e.email,n=e.password;this.email.current.value=a,this.password.current.value=n}}},{key:"render",value:function(){var e=this;return r.logout(),l.a.createElement(S,null,(function(t){var a=t.state,n=Object(L.a)(t,["state"]);return a.currentUser?l.a.createElement("p",{className:"lead"},"The login session has ended, please click ",l.a.createElement("a",{className:"text-primary",onClick:function(){return function(e){r.logout(),e.destroySession()}(n)}},"here")," to log back in."):l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"ImageSlide"},l.a.createElement("div",{class:"bd-example"},l.a.createElement("div",{id:"carouselExampleFade",class:"carousel slide carousel-fade pointer-event","data-ride":"carousel"},l.a.createElement("div",{class:"carousel-inner"},l.a.createElement("div",{class:"carousel-item active"},l.a.createElement("img",{class:"cityScape img-fluid",src:"https://i.gifer.com/LF0p.gif",alt:"phillyImg"}),l.a.createElement("div",{class:"carousel-caption d-md-block"},l.a.createElement("blockquote",{id:"aboutLocoBounce",class:"blockquote text-center"},l.a.createElement("h1",{className:"display-4"},l.a.createElement("span",{id:"Loco"},"Loco")," ",l.a.createElement("img",{className:"animated bounce",id:"LocoBall",src:"https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true",alt:"locoBall.png"})," ",l.a.createElement("span",{id:"Bounce"},"Bounce")),l.a.createElement("p",null,l.a.createElement("span",{className:"mr-2",id:"relocating"},"Relocating"),"  ",l.a.createElement("span",{id:"easy"},"Made Easy")),l.a.createElement("h2",{id:"appDescribe"},"LocoBounce is an app for people looking to relocate to any city all around the world! We have a dataset including a wide variety of tools and statistics that are essential to know before taking your next big trip. Wether you need to know the cost of living in your city of interest, or average cost of a hotel or apartment is, LocoBounce is an all-in-one solution to assist you in your next big adventure!")))),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{class:"img-fluid",src:"https://media0.giphy.com/media/SbakXQ2r4TiieHIifY/giphy.gif",alt:"pittImg"}),l.a.createElement("div",{class:"carousel-caption d-md-block"},l.a.createElement("blockquote",{id:"aboutLocoBounce",class:"blockquote text-center"},l.a.createElement("h1",{className:"display-4"},l.a.createElement("span",{id:"Loco"},"Loco")," ",l.a.createElement("img",{className:"animated bounce",id:"LocoBall",src:"https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true",alt:"locoBall.png"})," ",l.a.createElement("span",{id:"Bounce"},"Bounce")),l.a.createElement("p",null,l.a.createElement("span",{className:"mr-2",id:"relocating"},"Relocating"),"  ",l.a.createElement("span",{id:"easy"},"Made Easy")),l.a.createElement("h2",{id:"appDescribe"},"LocoBounce is an app for people looking to relocate to any city all around the world! We have a dataset including a wide variety of tools and statistics that are essential to know before taking your next big trip. Wether you need to know the cost of living in your city of interest, or average cost of a hotel or apartment is, LocoBounce is an all-in-one solution to assist you in your next big adventure!")))),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("img",{class:"cityScape img-fluid",src:"https://media.giphy.com/media/kgZfaOsDLCqTlWthCW/giphy.gif",alt:"pittImg"}),l.a.createElement("div",{class:"carousel-caption d-md-block"},l.a.createElement("blockquote",{id:"aboutLocoBounce",class:"blockquote text-center"},l.a.createElement("h1",{className:"display-4"},l.a.createElement("span",{id:"Loco"},"Loco")," ",l.a.createElement("img",{className:"animated bounce",id:"LocoBall",src:"https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true",alt:"locoBall.png"})," ",l.a.createElement("span",{id:"Bounce"},"Bounce")),l.a.createElement("p",null,l.a.createElement("span",{className:"mr-2",id:"relocating"},"Relocating"),"  ",l.a.createElement("span",{id:"easy"},"Made Easy")),l.a.createElement("h2",{id:"appDescribe"},"LocoBounce is an app for people looking to relocate to any city all around the world! We have a dataset including a wide variety of tools and statistics that are essential to know before taking your next big trip. Wether you need to know the cost of living in your city of interest, or average cost of a hotel or apartment is, LocoBounce is an all-in-one solution to assist you in your next big adventure!")))))))),l.a.createElement("div",{id:"CreateForm"},l.a.createElement("div",{className:"container",id:"AccountForm"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"})),l.a.createElement("div",{class:"card border-primary mb-3"},l.a.createElement(O.d,null,l.a.createElement(O.b,null,l.a.createElement(O.a,null,l.a.createElement(E.b,{class:"nav-link",href:"#",to:"/login"},l.a.createElement("i",{class:"fa fa-key","aria-hidden":"true"})," Sign In")),l.a.createElement(O.a,null,l.a.createElement(E.b,{class:"nav-link",href:"#",to:"/signup"},l.a.createElement("i",{class:"fa fa-users","aria-hidden":"true"})," Sign In"))),l.a.createElement(O.c,null,l.a.createElement("div",{class:"tab-pane fade show active"},l.a.createElement("div",{class:"card-body text-primary"},l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("div",{class:"input-group input-group-lg mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text text-white bg-primary"},l.a.createElement("i",{class:"fa fa-envelope","aria-hidden":"true"}))),l.a.createElement("input",{name:"name",type:"email",ref:e.email,class:"form-control",placeholder:"example@email.com"}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("div",{class:"input-group input-group-lg mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text text-white bg-primary"},l.a.createElement("i",{class:"fa fa-key","aria-hidden":"true"}))),l.a.createElement("input",{type:"password",autoComplete:"none",ref:e.password,class:"form-control",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}))),l.a.createElement("div",{class:"form-group form-check"},l.a.createElement("button",{type:"submit",class:"btn btn-primary btn-block float-right mb-3 p-2"},"Sign In")))))),l.a.createElement(O.c,null,l.a.createElement("div",{class:"tab-pane fade show active"},l.a.createElement("div",{class:"card-body text-primary"},l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("div",{class:"input-group input-group-lg mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text text-white bg-primary"},l.a.createElement("i",{class:"fa fa-envelope","aria-hidden":"true"}))),l.a.createElement("input",{name:"name",type:"email",ref:e.email,class:"form-control",placeholder:"example@email.com"}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("div",{class:"input-group input-group-lg mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text text-white bg-primary"},l.a.createElement("i",{class:"fa fa-key","aria-hidden":"true"}))),l.a.createElement("input",{type:"password",autoComplete:"none",ref:e.password,class:"form-control",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}))),l.a.createElement("div",{class:"tab-content"},l.a.createElement("div",{class:"form-group form-check"},l.a.createElement("button",{type:"submit",class:"btn btn-primary btn-block float-right mb-3 p-2"},"Register New Account")))))))))),l.a.createElement("div",{id:"footer",className:"container text-center border-top"},l.a.createElement("div",{class:"mt-5"},l.a.createElement("p",null,l.a.createElement("u",null,"Shawn Luther")," | ",l.a.createElement("u",null,"Patrick Follett")," | ",l.a.createElement("u",null,"Gayah Karmo")),l.a.createElement("a",{class:"github-button",href:"https://github.com/PWFollett/locoBounce-","data-icon":"octicon-star","data-size":"large","data-show-count":"true"},"Star This Project"))))))}))}}]),t}(c.Component));j.defaultProps={errors:"",email:"",password:""};var C=Object(h.f)(j),W=(a(59),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"content",class:"alert alert-info alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,"Session Details: ")," You have been logged out either because you manaully logged out or your session has expired. You are now being redirected back to the landing page.",l.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}}]),t}(l.a.Component)),D=(a(60),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"AccountCreatedCard"},l.a.createElement("div",{class:"container card border-primary p-0"},l.a.createElement("div",{class:"row no-gutters"},l.a.createElement("div",{class:"col-md-4"},l.a.createElement("img",{src:"https://media.giphy.com/media/WQN2jcxMedRl1WV0Iv/giphy.gif",class:"card-img",alt:"WelcomeGif.gif"})),l.a.createElement("div",{class:"col-md-8"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h1",{class:"card-title text-info"},"Account Created!"),l.a.createElement("p",{class:"card-text text-primary"},"Thank you for joining LocoBounce, you are now part of a community of travelers looking to take their next big adventure! You now have complete access to all of our relocating services and can start immediately. Simply click on the 'Continue' button below to get started."),l.a.createElement(E.b,{className:"btn btn-info",to:"/dashboard"},"Continue"))))))}}]),t}(l.a.Component)),F=Object(h.f)((function(e){return l.a.createElement(S,null,(function(t){t.state;var a=Object(L.a)(t,["state"]);return l.a.createElement("div",{id:"tSignIn"},l.a.createElement("div",null,l.a.createElement(C,{action:"signIn",onSuccess:function(){return e.history.push("/dashboard")},onError:function(e){var t=e.message;return a.setMessage("Login failed: ".concat(t))}})))}))})),P=Object(h.f)((function(e){return l.a.createElement(S,null,(function(t){t.state;var a=Object(L.a)(t,["state"]);return l.a.createElement("div",null,l.a.createElement(C,{action:"createUser",title:"Create account",onSuccess:function(){return r.logout().then((function(){a.destroySession(),a.clearMessage(),e.history.push("/accountCreated")}))},onError:function(e){var t=e.message;return a.setMessage("Error occured: ".concat(t))}}))}))})),U=function(){return l.a.createElement(S,null,(function(e){var t=e.state,a=Object(L.a)(e,["state"]);return t.message&&l.a.createElement("small",{className:"flash-message"},l.a.createElement("div",{id:"AlertLoginErr",class:"animated fadeInDown alert alert-danger alert-dismissible fade show",role:"alert"},l.a.createElement("strong",{id:"LoginFailed",className:"font-weight-bold"},l.a.createElement("i",{class:"fa fa-exclamation-triangle","aria-hidden":"true"})," Login Failed: ")," ",t.message="You have entered invalid credentials, please check to make sure you've entered the correct username and password.",l.a.createElement("button",{type:"button",id:"btnRemoveAlert",className:"float-right text-muted",onClick:function(){return a.clearMessage()}},"\xd7")))}))},I=(a(61),a(19)),A=a.n(I);A()(document).ready((function(){A()("#FilterWidgetData").on("keyup",(function(){var e=A()(this).val().toLowerCase();A()("#WidgetsTable tr").filter((function(){A()(this).toggle(A()(this).text().toLowerCase().indexOf(e)>-1)}))}))}));a(62);function R(e){return l.a.createElement("div",null,l.a.createElement("nav",{id:"DashNav",class:"navbar navbar-dark bg-dark flex-md-nowrap p-0"},l.a.createElement(E.b,{to:"/dashboard",class:"navbar-brand col-sm-3 col-md-2 mr-0"},l.a.createElement("h1",{className:"hvr-bounce-in ml-2"},l.a.createElement("span",{id:"loco"},"Loco"),l.a.createElement("img",{class:"animated bounce",id:"locoBall",src:"https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true",alt:"locoBall.png"}),l.a.createElement("span",{id:"bounce"},"Bounce"))),l.a.createElement("ul",{class:"navbar-nav px-3"},l.a.createElement("li",{class:"nav-item text-nowrap"},l.a.createElement("a",{id:"BtnSignOut",class:"nav-link text-dark p-4",href:"/"}," ",l.a.createElement("i",{class:"fa fa-user","aria-hidden":"true"}," Sign Out"))))),l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("nav",{class:"col-md-2 bg-light sidebar"},l.a.createElement("div",{class:"sidebar-sticky mt-4"},l.a.createElement("ul",{class:"nav flex-column text-center"},l.a.createElement("li",{class:"nav-item text-primary font-weight-bold"},l.a.createElement("h5",null,"LocoBounce Toolbelt"),l.a.createElement("hr",{className:"bg-primary"})),l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text",id:"fa-filter-icon"},l.a.createElement("i",{class:"fa fa-search","aria-hidden":"true"}))),l.a.createElement("input",{id:"FilterWidgetData",type:"text",class:"form-control",placeholder:"Search For Tools"})),l.a.createElement("table",{id:"WidgetContainer"},l.a.createElement("tbody",{id:"WidgetsTable"},l.a.createElement("tr",{className:"hvr-bounce-in"},l.a.createElement(E.b,{to:"/Qaulity"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-check text-success","aria-hidden":"true"})," Life Quality Score"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Cost"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-home text-success","aria-hidden":"true"})," Cost of Living"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Salaries"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-money text-success","aria-hidden":"true"})," Job Salary Calculator"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Safety"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-lock text-success","aria-hidden":"true"})," City Safety"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Education"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-graduation-cap text-success","aria-hidden":"true"})," Education"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Lgbt"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-users text-success","aria-hidden":"true"})," LGBT Rights"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Startups"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-building-o text-success","aria-hidden":"true"})," Startup Scene")))))))),l.a.createElement("main",{role:"main",class:"col-md-9 ml-sm-auto col-lg-10 px-4"},l.a.createElement("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},l.a.createElement("h1",null,"City Relocation Statistics")),l.a.createElement("iframe",{id:"iWidget",title:e.title,src:e.src})))))}var T=Object(h.f)((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"DashNav",class:"navbar navbar-dark bg-dark flex-md-nowrap p-0"},l.a.createElement(E.b,{to:"/dashboard",class:"navbar-brand col-sm-3 col-md-2 mr-0"},l.a.createElement("h1",{className:"hvr-bounce-in ml-2"},l.a.createElement("span",{id:"loco"},"Loco"),l.a.createElement("img",{class:"animated bounce",id:"locoBall",src:"https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true",alt:"locoBall.png"}),l.a.createElement("span",{id:"bounce"},"Bounce"))),l.a.createElement("ul",{class:"navbar-nav px-3"},l.a.createElement("li",{class:"nav-item text-nowrap"},l.a.createElement("a",{id:"BtnSignOut",class:"nav-link text-dark p-4",href:"/"}," ",l.a.createElement("i",{class:"fa fa-user","aria-hidden":"true"}," Sign Out"))))),l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("nav",{class:"col-md-2 bg-light sidebar"},l.a.createElement("div",{class:"sidebar-sticky mt-4"},l.a.createElement("ul",{class:"nav flex-column text-center"},l.a.createElement("li",{class:"nav-item text-primary font-weight-bold"},l.a.createElement("h5",null,"LocoBounce Relocation Tools"),l.a.createElement("hr",{className:"bg-primary"})),l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("span",{class:"input-group-text",id:"fa-filter-icon"},l.a.createElement("i",{class:"fa fa-search","aria-hidden":"true"}))),l.a.createElement("input",{id:"FilterWidgetData",type:"text",class:"form-control",placeholder:"Search For Tools"})),l.a.createElement("table",{id:"WidgetContainer"},l.a.createElement("tbody",{id:"WidgetsTable"},l.a.createElement("tr",{className:"hvr-bounce-in"},l.a.createElement(E.b,{to:"/Qaulity"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-check text-success","aria-hidden":"true"})," Life Quality Score"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Cost"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-home text-success","aria-hidden":"true"})," Cost of Living"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Salaries"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-money text-success","aria-hidden":"true"})," Job Salary Calculator"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Safety"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-lock text-success","aria-hidden":"true"})," City Safety"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Education"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-graduation-cap text-success","aria-hidden":"true"})," Education"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Lgbt"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-users text-success","aria-hidden":"true"})," LGBT Rights"))),l.a.createElement("tr",{className:"text-white hvr-bounce-in"},l.a.createElement(E.b,{to:"/Startups"},l.a.createElement("td",null,l.a.createElement("i",{class:"fa fa-building-o text-success","aria-hidden":"true"})," Startup Scene")))))))),l.a.createElement("main",{role:"main",class:"col-md-9 ml-sm-auto col-lg-10 px-4"},l.a.createElement("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},l.a.createElement("h1",null,"Getting Started")))),l.a.createElement("div",{className:"container"})))})),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(B,null,l.a.createElement(E.a,null,l.a.createElement(c.Fragment,null,l.a.createElement(h.a,{exact:!0,path:"/",component:function(){return l.a.createElement(F,null)}}),l.a.createElement(U,null),l.a.createElement(h.a,{exact:!0,path:"/login",component:function(){return l.a.createElement(F,null)}}),l.a.createElement(h.a,{exact:!0,path:"/signup",component:function(){return l.a.createElement(P,null)}}),l.a.createElement(h.a,{exact:!0,path:"/signedOut",component:function(){return l.a.createElement(W,null)}}),l.a.createElement(h.a,{exact:!0,path:"/accountCreated",component:function(){return l.a.createElement(D,null)}}),l.a.createElement(h.a,{exact:!0,path:"/consumer",component:function(){return l.a.createElement(S,null)}}),l.a.createElement(h.a,{exact:!0,path:"/dashboard",component:function(){return l.a.createElement(T,null)}}),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/Safety",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/crime/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Salaries",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/pittsburgh/widget/salaries/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Startups",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/startup/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Lgbt",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/tolerance/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Education",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/education/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Cost",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/costs/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Climate",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/weather/?currency=USD"})}}),l.a.createElement(h.a,{path:"/Qaulity",exact:!0,render:function(){return l.a.createElement(R,{src:"https://teleport.org/cities/philadelphia/widget/scores/?currency=USD"})}}))))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c18a1621.chunk.js.map