(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{139:function(e,t,n){e.exports=n(256)},144:function(e,t,n){},149:function(e,t,n){},158:function(e,t){},160:function(e,t){},171:function(e,t){},173:function(e,t){},200:function(e,t){},202:function(e,t){},203:function(e,t){},208:function(e,t){},210:function(e,t){},216:function(e,t){},218:function(e,t){},237:function(e,t){},249:function(e,t){},252:function(e,t){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(50),c=n.n(i),o=(n(144),n(16)),s=n(12),u=n(7),l=n(8),m=n(10),p=n(9),d=(n(149),n(26)),b=n(52),f=n(18),h=n(19),v=n.n(h),g=n(31),E=n(53),y=n.n(E);function O(){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.token);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return w.apply(this,arguments)}function w(){return(w=Object(g.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=5&token=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){return{type:"SEND_TOKEN",token:e}};var N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={email:"",name:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.returnForm=a.returnForm.bind(Object(f.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(b.a)({},t.name,t.value))}},{key:"returnForm",value:function(e,t,n){return r.a.createElement("form",{action:""},r.a.createElement("label",{htmlFor:"input-player-name"},"Nome:",r.a.createElement("input",{onChange:this.handleChange,"data-testid":"input-player-name",type:"text",name:"name",value:e,id:"input-player-name"})),r.a.createElement("label",{htmlFor:"input-gravatar-email"},"Email:",r.a.createElement("input",{onChange:this.handleChange,"data-testid":"input-gravatar-email",type:"email",name:"email",value:t,id:"input-gravatar-email"})),r.a.createElement(s.b,{to:"/game"},r.a.createElement("button",{onClick:function(){var a={player:{name:e,assertions:0,score:0,gravatarEmail:t}};localStorage.setItem("state",JSON.stringify(a)),n({name:e,email:t})},"data-testid":"btn-play",type:"button",disabled:!e||!t},"Jogar")))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=this.props.getToken;return r.a.createElement("div",null,this.returnForm(t,n,a),r.a.createElement(s.b,{to:"/settings"},r.a.createElement("button",{"data-testid":"btn-settings",type:"button"},"Configura\xe7\xf5es")))}}]),n}(a.Component),C=Object(o.b)(null,(function(e){return{getToken:function(t){return e(function(e){var t=e.name,n=e.email;return function(){var e=Object(g.a)(v.a.mark((function e(a){var r,i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:r=e.sent,i=y()(n).toString(),c="https://www.gravatar.com/avatar/".concat(i),a(S(r)),a({type:"LOG_USER",userInfo:{name:t,email:n,picture:c}}),localStorage.setItem("token",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))}}}))(N),I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Configura\xe7\xf5es"))}}]),n}(a.Component),x=n(54),T=n(22),R=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.timer;return r.a.createElement("div",null,e>0?e:"Acabou o tempo!")}}]),n}(a.Component),A=Object(o.b)((function(e){return{timer:e.timerReducer.timer}}),(function(e){return{updateTimer:function(){return e({type:"UPDATE_TIMER"})}}}))(R),q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={loading:!0,questions:[],isButtonVisible:!1,shouldDisable:!1,i:0},a.fetchQuest=a.fetchQuest.bind(Object(f.a)(a)),a.returnGame=a.returnGame.bind(Object(f.a)(a)),a.handleClick=a.handleClick.bind(Object(f.a)(a)),a.handleNextQuest=a.handleNextQuest.bind(Object(f.a)(a)),a.verifyAnswer=a.verifyAnswer.bind(Object(f.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.resetTimer;this.fetchQuest(),e()}},{key:"fetchQuest",value:function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.token,e.next=3,j(t);case 3:n=e.sent,this.setState({questions:n,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"correctAnswer",value:function(){return"correct-answer"}},{key:"verifyAnswer",value:function(e,t){var n=this.props.timer;if(Object.values(e.target.classList).includes(this.correctAnswer())){var a=JSON.parse(localStorage.getItem("state")),r={player:Object(T.a)(Object(T.a)({},a.player),{},{assertions:a.player.assertions+1,score:a.player.score+(10+n*{easy:1,medium:2,hard:3}[t])})};localStorage.setItem("state",JSON.stringify(r))}}},{key:"handleClick",value:function(e){var t=this,n=this.state,a=n.questions,r=n.i,i=e.target.parentNode.children;Object.values(i).forEach((function(e){e.className!==t.correctAnswer()&&"wrong-answer"!==e.className||e.classList.add("".concat(e.className,"-style"))})),this.setState({isButtonVisible:!0,shouldDisable:!0}),this.verifyAnswer(e,a[r].difficulty)}},{key:"retunAnswers",value:function(e,t){return r.a.createElement("div",null,t.sort((function(t,n){return t.key>n.key?1:t.key<n.key?e:0})))}},{key:"handleNextQuest",value:function(){var e=this.props.resetTimer;this.setState((function(e){return{i:e.i+1,isButtonVisible:!1,shouldDisable:!1}})),e()}},{key:"returnNextButton",value:function(){return r.a.createElement("button",{"data-testid":"btn-next",type:"button",onClick:this.handleNextQuest},"Pr\xf3xima")}},{key:"mountPage",value:function(e){var t=e.image,n=e.player,a=e.isButtonVisible,i=e.questions,c=e.i,o=e.negative,u=e.answers,l=e.timer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("img",{"data-testid":"header-profile-picture",src:t,alt:"player avatar"}),r.a.createElement("span",{"data-testid":"header-player-name"},n.name),r.a.createElement("span",{"data-testid":"header-score"},n.score),r.a.createElement("div",null,a?"Confira sua resposta!":r.a.createElement(A,null))),r.a.createElement("span",null,r.a.createElement(s.b,{to:"/feedback"},"feedback")),r.a.createElement("div",null,r.a.createElement("h2",{"data-testid":"question-category"},i[c].category),r.a.createElement("h3",{"data-testid":"question-text"},i[c].question)),this.retunAnswers(o,u),l<=0||!0===a?this.returnNextButton():null)}},{key:"returnGame",value:function(){var e=this,t=this.state,n=t.questions,a=t.i,i=t.isButtonVisible,c=t.shouldDisable;if(5===a)return r.a.createElement(d.a,{to:"/feedback"});var o=this.props,s=o.image,u=o.timer,l=JSON.parse(localStorage.getItem("state")).player,m=n[a],p=[m.correct_answer].concat(Object(x.a)(m.incorrect_answers)).map((function(t,n){var a=0===n?e.correctAnswer():"wrong-answer-".concat(n-1),i=0===n?e.correctAnswer():"wrong-answer";return r.a.createElement("button",{onClick:e.handleClick,className:i,key:t,type:"button","data-testid":a,disabled:c||u<=0},t)}));return this.mountPage({image:s,player:l,isButtonVisible:i,questions:n,i:a,negative:-1,answers:p,timer:u})}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("span",null,"loading..."):this.returnGame()}}]),n}(a.Component),D=Object(o.b)((function(e){return{image:e.loginReducer.picture,questions:e.loginReducer.questions,token:e.loginReducer.token,timer:e.timerReducer.timer}}),(function(e){return{resetTimer:function(){return e({type:"RESET_TIMER"})}}}))(q),J=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,n=e.picture,a=JSON.parse(localStorage.getItem("state")).player.score;localStorage.getItem("ranking")||localStorage.setItem("ranking","[]");var r=[].concat(Object(x.a)(JSON.parse(localStorage.getItem("ranking"))),[{name:t,score:a,picture:n}]);localStorage.setItem("ranking",JSON.stringify(r))}},{key:"render",value:function(){var e=this.props.email,t=y()(e).toString(),n=JSON.parse(localStorage.getItem("state")).player;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("img",{"data-testid":"header-profile-picture",src:"https://www.gravatar.com/avatar/".concat(t),alt:"profile"}),r.a.createElement("h1",{"data-testid":"header-player-name"},n.name),r.a.createElement("p",{"data-testid":"header-score"},n.score)),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("p",{"data-testid":"feedback-text"},n.assertions>=3?"Mandou bem!":"Podia ser melhor...")),r.a.createElement("section",null,r.a.createElement("p",null,"Pontua\xe7\xe3o:\xa0",r.a.createElement("span",{"data-testid":"feedback-total-score"},n.score)),r.a.createElement("p",null,"Acertos:\xa0",r.a.createElement("span",{"data-testid":"feedback-total-question"},n.assertions))),r.a.createElement("section",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{"data-testid":"btn-play-again",type:"button"},"Jogar novamente")),r.a.createElement(s.b,{to:"/ranking"},r.a.createElement("button",{"data-testid":"btn-ranking",type:"button"},"Ver ranking")))))}}]),n}(a.Component),_=Object(o.b)((function(e){return{email:e.loginReducer.email,name:e.loginReducer.name,picture:e.loginReducer.picture}}))(J),B=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")).sort((function(e,t){return t.score-e.score})).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("ul",null,r.a.createElement("li",{"data-testid":"player-name-".concat(t)},e.name),r.a.createElement("li",{"data-testid":"player-score-".concat(t)},e.score)))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("ol",null,e),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{type:"button","data-testid":"btn-go-home"},"Home")))}}]),n}(a.Component),M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateTimer;setInterval((function(){e()}),1e3)}},{key:"render",value:function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:C}),r.a.createElement(d.b,{path:"/settings",component:I}),r.a.createElement(d.b,{path:"/game",component:D}),r.a.createElement(d.b,{path:"/feedback",component:_}),r.a.createElement(d.b,{path:"/ranking",component:B}))}}]),n}(r.a.Component),F=Object(o.b)(null,(function(e){return{updateTimer:function(){return e({type:"UPDATE_TIMER"})}}}))(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(25),P=n(137),V=n(138),G={name:"",email:"",token:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_USER":return Object(T.a)(Object(T.a)({},e),{},{name:t.userInfo.name,email:t.userInfo.email,picture:t.userInfo.picture});case"SEND_TOKEN":return Object(T.a)(Object(T.a)({},e),{},{token:t.token});case"SEND_QUESTIONS":return Object(T.a)(Object(T.a)({},e),{},{questions:t.questions});default:return e}},L={timer:30},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TIMER":return{timer:e.timer-1};case"RESET_TIMER":return{timer:30};default:return e}},K=Object(Q.combineReducers)({loginReducer:U,timerReducer:W}),H=Object(Q.createStore)(K,Object(P.composeWithDevTools)(Object(Q.applyMiddleware)(V.a)));c.a.render(r.a.createElement(o.a,{store:H},r.a.createElement(s.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.464e595b.chunk.js.map