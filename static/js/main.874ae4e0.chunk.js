(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={slideleft:"work_slideleft__9TcUs",slideright:"work_slideright__2bnJe",centerconleft:"work_centerconleft__3RoKO",centerconright:"work_centerconright__cyBZL",round:"work_round__2iOw_",sp1:"work_sp1__1CLcI",sp2:"work_sp2__2riyo",sp3:"work_sp3__2j46s",sp4:"work_sp4__cG4NE"}},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(61),l=a.n(i),s=a(5),o=a(6),c=a(8),d=a(7),m=a(9),p=a(68),u=a(11),h=a.n(u),b=a(14),g=a(15);function f(){var e=Object(b.a)(["\n\tposition:absolute;\n\tbackground-color:#fff;\n\topacity:0.7;\n\twidth:0px;\n    height:5px;\n    position:absolute;\n    left:50%;\n    top:50%;\n    margin:-2.5px 0 0 -50px;\n\t\n\t -webkit-animation: "," 1s infinite;  \n\t  animation: "," 1s infinite;\n\t  animation-timing-function:linear;\n\t"]);return f=function(){return e},e}function v(){var e=Object(b.a)(["\n\t\t    0%   {\n    \t\t\twidth: 0px;\n    \t\t\tmargin-left:-50px;\n    \t\t}\n    \t\t25%  {\n    \t\t\twidth: 50px;\n    \t\t\tmargin-left:-50px;\n    \t\t}\n    \t\t50% {\n\t\t  \t\twidth:100px;\n\t\t  \t\tmargin-left:-50px;\n    \t\t}\n    \t\t75% {\n    \t\t\tmargin-left:0px;\n\t\t  \t\twidth:50px;\n    \t\t}\n\t\t  \t100% {\n    \t\t\tmargin-left:50px;\n\t\t  \t\twidth:0px;\n\t\t  \t}\n\t"]);return v=function(){return e},e}var E=Object(g.b)(v()),x=g.a.div(f(),E,E),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null)}}]),t}(r.a.Component),k=function(e){return{body:{margin:"0",padding:"0",backgroundColor:"#2fa19b",height:"100vh",width:"100vw"},background:{position:"fixed",height:"100%",width:"100vw",display:"block",top:"0",left:"0",backgroundSize:"cover",backgroundPosition:"center center",backgroundAttachment:"fixed","&:after":{position:"absolute",width:"100vw",height:"100vh",content:'""',display:"block",background:"#e6ffe6",opacity:"0.7"}},icondivdown:{display:"block",position:"fixed",bottom:"0px",width:"100vw",margin:"auto"},icondivup:{display:"block",position:"fixed",top:"50px",width:"100vw",height:"20vh",margin:"auto"}}},y=function(e){return{wrapper:{position:"absolute",width:"100%",height:"100%",margin:"0",padding:"0"},scene:{width:"inherit",height:"inherit",perspective:"1800px"},cube:{position:"relative",width:"inherit",height:"inherit",transform:"translate3d(0,0,-".concat(50,"vh)"),transition:"all 3.85s cubic-bezier(0.175,0.885,0.320,1.275)",transformStyle:"preserve-3d"},cubeface:{width:"inherit",height:"inherit",position:"absolute",backgroundColor:"#fff"},cubefacefront:{transform:"translate3d(0, 0,".concat(50,"vh)")},cubefaceback:{transform:"rotateY(180deg) translate3d(0, 0,".concat(50,"vh)"),backgroundColor:"#fff"},cubefaceleft:{background:"green",transform:"rotateY(-90deg) translate3d(0, 0,".concat(50,"vw)")},cubefaceright:{background:"magenta",transform:"rotateY(90deg) translate3d(0, 0,".concat(50,"vw)")},cubefacetop:{transform:"rotateX(90deg) translate3d(0, 0,".concat(50,"vh)")},cubefacebottom:{transform:"rotateX(-90deg) translate3d(0, 0,".concat(50,"vh)")}}},N=a(4),j=a.n(N),S=function(e){return{subdesc:{fontSize:"1.35em",letterSpacing:"-0.035em",lineHeight:"1em",color:"#fff",textShadow:"rgba(2,2,2,0.1) 0em 0.05em 0.75em",fontFamily:"Yantramanav,sans-serif"},linkcontainer:{width:"60%",margin:"0 auto",marginTop:"100px",height:"70px",display:"flex",justifyContent:"space-around",marginbottom:"5px"},linkbox:{width:"70px",height:"100%",border:"2px solid #fff",borderRadius:"30%",padding:"15px","&:hover,&:focus":{backgroundColor:"rgba(0,0,0,0.2)",boxShadow:"0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"}}}},O=new Array([89,97,100],[83,120,149],[232,140,62],[106,145,129],[60,21,24],[173,43,43],[151,153,19],[88,140,57],[49,135,118]),z=0,q=[8,7,6,2];function _(e,t){var a;do{a=Math.floor(1+Math.random()*(e.length-1))%e.length}while(a in t);return a}var I=function(){var e=O[q[0]],t=O[q[1]],a=O[q[2]],n=O[q[3]],r=1-z,i="rgb("+Math.round(r*e[0]+z*t[0])+","+Math.round(r*e[1]+z*t[1])+","+Math.round(r*e[2]+z*t[2])+")",l="rgb("+Math.round(r*a[0]+z*n[0])+","+Math.round(r*a[1]+z*n[1])+","+Math.round(r*a[2]+z*n[2])+")";if(document.getElementById("aboutbody").style.background="linear-gradient(-45deg, "+i+" , "+l+")",(z+=.0075)>=1){z%=1;var s=[q[1],q[3]];q[0]=q[1],q[2]=q[3],q[1]=_(O,s),q[3]=_(O,s)}};function F(){var e=Object(b.a)(["\n\twidth:80%;\n    height:70%;\n    margin:auto;\n    position:absolute;\n    text-align:center;\n    left:0px;\n    right:0px;\n    top:0px;\n    bottom:0px;\n\n    h1{\n\t    padding:5px;\n\t    font-size:2.55em;\n\t    font-weight:900;\n\t    letter-spacing:0.035em;\n\t    line-height:1.2em;\n\t    color:#fff;\n\t    text-shadow:rgba(2,2,2,0.1) 0em 0.05em 0.75em;\n\t    font-family:Yantramanav,sans-serif;\n    }\n\n    @media only screen and (min-width:768px){\n         height:50%;\n         width:50%;\n         h1{\n\t\t    padding:20px;\n\t\t    font-size:4.35em;\n\t\t    font-weight:900;\n\t\t    letter-spacing:-0.035em;\n\t\t    line-height:1em;\n\t\t    color:#fff;\n\t\t    text-shadow:rgba(2,2,2,0.1) 0em 0.05em 0.75em;\n\t\t    font-family:Yantramanav,sans-serif;\n\t    }\n         \n      }\n"]);return F=function(){return e},e}function B(){var e=Object(b.a)(["\n\tbackground-color:#fff;\n    position:relative;\n    width:100%;\n    height:100%;\n    margin:0;\n    padding:0;\n\t"]);return B=function(){return e},e}var A=g.a.div(B()),C=g.a.div(F()),R=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.intervalID=setInterval(function(){requestAnimationFrame(I)},30)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(A,{id:"aboutbody"},r.a.createElement(C,{className:e.header},r.a.createElement("h1",null,"Suraj Sharma"),r.a.createElement("p",{className:e.subdesc},r.a.createElement("span",null,"Passionate")," \u2022",r.a.createElement("span",null," Innovative")," \u2022",r.a.createElement("span",null," Polyglot")),r.a.createElement("div",{className:e.linkcontainer},r.a.createElement("a",{href:"https://www.linkedin.com/in/surajs787",target:"=_blank"},r.a.createElement("div",{className:e.linkbox},r.a.createElement("svg",{fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:"100%",width:"100%",viewBox:"0 0 40 40",style:{verticalAlign:"middle",color:"white"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m8.3 31.6h5.1v-15.5h-5.1v15.5z m5.5-20.3q0-1.2-0.8-1.9t-2.1-0.8-2.1 0.8-0.8 1.9q0 1.1 0.8 1.9t2 0.8h0.1q1.3 0 2.1-0.8t0.8-1.9z m13 20.3h5.2v-8.9q0-3.5-1.6-5.2t-4.3-1.8q-3.1 0-4.7 2.6h0v-2.2h-5.1q0 1.4 0 15.5h5.1v-8.7q0-0.8 0.2-1.2 0.3-0.8 1-1.4t1.7-0.5q2.5 0 2.5 3.5v8.3z m10.5-22.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"}))))),r.a.createElement("a",{href:"https://github.com/SoeRatch",target:"=_blank"},r.a.createElement("div",{className:e.linkbox},r.a.createElement("svg",{fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:"100%",width:"100%",viewBox:"0 0 40 40",style:{verticalAlign:"middle",color:"white"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6q0 5.6-3.3 10.1t-8.4 6.2q-0.6 0.1-0.9-0.2t-0.3-0.7q0 0 0-1.7t0-3q0-2.1-1.2-3.1 1.3-0.2 2.3-0.4t2.1-0.9 1.8-1.5 1.2-2.3 0.5-3.4q0-2.7-1.8-4.6 0.8-2-0.2-4.5-0.6-0.2-1.8 0.2t-2 1l-0.9 0.5q-2-0.6-4.3-0.6t-4.2 0.6q-0.4-0.2-1-0.6t-1.9-0.8-1.9-0.3q-1 2.5-0.1 4.5-1.8 1.9-1.8 4.6 0 1.9 0.5 3.4t1.1 2.3 1.8 1.5 2.1 0.9 2.3 0.4q-0.9 0.8-1.1 2.3-0.4 0.2-1 0.3t-1.3 0.1-1.4-0.5-1.3-1.4q-0.4-0.7-1-1.1t-1.1-0.6l-0.5 0q-0.5 0-0.6 0.1t-0.1 0.2 0.2 0.3 0.2 0.3l0.2 0.1q0.5 0.2 1 0.9t0.7 1.1l0.2 0.5q0.3 0.9 1 1.4t1.5 0.7 1.5 0.1 1.3-0.1l0.5 0q0 0.8 0 1.9t0 1.2q0 0.5-0.3 0.7t-0.9 0.2q-5.2-1.7-8.4-6.2t-3.3-10.1q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3z m-10.6 24.6q0.1-0.2-0.2-0.3-0.2-0.1-0.2 0.1-0.1 0.1 0.1 0.2 0.2 0.2 0.3 0z m0.7 0.7q0.1-0.1-0.1-0.3-0.2-0.2-0.3-0.1-0.2 0.1 0 0.4 0.3 0.2 0.4 0z m0.7 1q0.2-0.1 0-0.4-0.2-0.3-0.4-0.1-0.2 0.1 0 0.4t0.4 0.1z m0.9 1q0.2-0.2-0.1-0.4-0.3-0.3-0.4-0.1-0.2 0.2 0 0.4 0.3 0.3 0.5 0.1z m1.3 0.5q0-0.2-0.3-0.3-0.4-0.1-0.4 0.1t0.2 0.4q0.4 0.1 0.5-0.2z m1.4 0.1q0-0.2-0.4-0.2-0.4 0-0.4 0.2 0 0.3 0.4 0.3 0.4 0 0.4-0.3z m1.3-0.2q-0.1-0.2-0.4-0.2-0.4 0.1-0.3 0.4t0.4 0.1 0.3-0.3z"}))))),r.a.createElement("a",{href:"https://angel.co/suraj-sharma-14?public_profile=1",target:"=_blank"},r.a.createElement("div",{className:e.linkbox},r.a.createElement("svg",{fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:"100%",width:"100%",viewBox:"0 0 40 40",style:{verticalAlign:"middle",color:"white"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m26.8 8.4l-2.6 7.4 2.6 0.4q3.7-10 3.7-11.5 0-1.3-0.8-1.3-1.3 0-2.9 5z m-6.7 15.4l0.7 1.9q0.9-0.9 1.6-1.5l-0.7-0.1-0.9-0.1-0.7-0.2z m-6.5-20q0 2.2 3.5 11.6 0.4-0.2 1.1-0.2 0.4 0 1.7 0.1l-2.7-7.8q-1.7-5-2.8-5-0.4 0-0.6 0.4t-0.2 0.9z m-1.8 16.9q0 0.8 1.2 2.7t2.6 3.4 2.2 1.5q0.3 0 0.6-0.2t0.2-0.6q0-0.6-0.7-2.3-0.3-0.7-0.7-1.6t-1-2-1.4-1.8-1.4-0.7q-0.4 0-1 0.6t-0.6 1z m-3.5 7.5q0 0.9 0.5 2.3 1.4 3.3 4.1 5.1t6.3 1.8q5.1 0 8.6-3.8 3.3-3.8 3.3-9.5 0-1 0-1.5t-0.2-1.4-0.7-1.2q-1.3-1.1-4.7-1.7t-6.1-0.6q-0.8 0-1.1 0.2-0.2 0.1-0.2 0.8 0 0.8 0.4 1.3t1.3 0.9 1.7 0.6 2 0.2 1.9 0.1 1.5 0h0.5q0.6 0 0.9 0.4 0.4 0.5 0.5 1.3-0.7 0.6-2.2 1.2-1.3 0.5-2.1 1-1.4 1-2.4 2.5t-1 3.1q0 0.7 0.4 2t0.4 1.9l0 0.3q-0.1 0.3-0.1 0.3-3.1-0.2-3.3-4.8-0.1 0-0.9 0 0.1 0.2 0.1 0.5 0 1.2-0.9 2t-2.1 0.8q-1.9 0-3.8-1.7t-1.9-3.6q0-0.7 0.8-1.5 1.1 1.5 1.3 1.7 1.7 2.3 3 2.3 0.3 0 0.6-0.2t0.3-0.4q0-0.8-1.9-3.2t-2.6-2.5q-1 0-1.6 1t-0.6 2z m-2.6 0.2q0-2.3 1-3.6t3-2q-0.6-1.7-0.6-2.3 0-1.4 1.4-2.8t2.7-1.3q0.6 0 1.6 0.3-3.7-10.3-3.7-12.7 0-1.7 0.9-2.9t2.7-1.1q2.9 0 7.3 13 0.1 0.4 0.1 0.5 0.2-0.4 0.7-1.8t0.9-2.6 1.3-2.9 1.4-2.7 1.6-2 1.7-0.8q1.6 0 2.5 1.1t0.9 2.8q0 2.4-3.6 12.2 1.4 0.4 2.3 1.1t1.3 1.7 0.6 2.1 0.1 2.5q0 3.3-1 6.2t-3 5-4.7 3.4-6.2 1.2q-2.5 0-5-0.9-3.3-1.3-5.7-4.3t-2.5-6.4z"}))))))))}}]),t}(r.a.Component),M=h()(S)(R),T=a(2),P=function(e){var t,a;return{backgroundimg:{position:"absolute",height:"100vh",width:"100vw",display:"block",top:"0",left:"0",backgroundSize:"cover",backgroundPosition:"center center",backgroundAttachment:"fixed","&:after":{position:"absolute",width:"100vw",height:"100vh",content:'""',display:"block",background:"#e6ffe6",opacity:"0.7"}},name:(t={position:"absolute",borderTop:"5px solid #000",width:"12vw",padding:"5px",left:"20px",textAlign:"center",fontFamily:"Montserrat,helvetica neue,Helvetica,Arial,sans-serif",fontFeatureSetting:"kern",fontWeight:"700",letterSpacing:"4.6px",zIndex:"2",fontSize:"20px",fontColor:"#293347",textDecorationStyle:"solid",verticalAlign:"middle"},Object(T.a)(t,e.breakpoints.down("md"),{width:"16vw"}),Object(T.a)(t,e.breakpoints.down("sm"),{width:"25vw"}),Object(T.a)(t,e.breakpoints.down("xs"),{width:"40vw",fontSize:"15px"}),t),intro:Object(T.a)({position:"absolute",backgroundColor:"rgba(0,0,0,0.5)",width:"90vw",height:"80vh",padding:"20px",margin:"auto",marginTop:"10vh",left:"0px",right:"0px"},e.breakpoints.down("sm"),{marginTop:"5vh",width:"100vw",height:"90vh",padding:"10px"}),introhead:Object(T.a)({fontFamily:"Rubik,Arial,sans-serif",fontWeight:"400",letterSpacing:"2px",zIndex:"2",fontSize:"3rem",color:"#fff",textDecorationStyle:"solid"},e.breakpoints.down("sm"),{fontSize:"2rem"}),introdesc:(a={fontFamily:"-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, Arial, sans-serif",fontWeight:"400",letterSpacing:"2px",zIndex:"2",fontSize:"1.5rem",color:"#fff",textDecorationStyle:"solid"},Object(T.a)(a,e.breakpoints.down("md"),{fontSize:"1.4rem"}),Object(T.a)(a,e.breakpoints.down("sm"),{fontSize:"1.2rem"}),Object(T.a)(a,e.breakpoints.down("xs"),{fontSize:"1rem"}),a)}},H=a(35),D=a.n(H);function L(){var e=Object(b.a)(["\n  font-family:-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight:400;\n  letter-spacing:2px;\n  z-index:2;\n  color:#fff;\n  text-decoration-style:solid;\n  font-size:0.75rem;\n\n  @media only screen and (min-width:550px){\n         font-size:1.2rem;  \n      }\n\n  @media only screen and (min-width:768px){\n         font-size:1.4rem;  \n      }\n  \n\n\t"]);return L=function(){return e},e}var Y=g.a.p(L()),U=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{style:{transform:"rotateZ(180deg) translate3d(0,-100vh,-100vh"}},void 0!==D.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+D.a+")"}}):null,r.a.createElement("div",{className:e.name},"ABOUT ME"),r.a.createElement("div",{className:e.intro},r.a.createElement("h1",{className:e.introhead},"Hey, I'm Suraj."),r.a.createElement(Y,null,"Suraj Sharma is an inspired soul, versatile in nature and can adapt to any environment.He has been continuously exploring javascript fullstack technologies from more than 2 years and have gained confidence in the same like ",r.a.createElement("span",{style:{color:"#3bafda"}},r.a.createElement("b",null,"React, Node, Express, SSR,code-splitting, Rich and reusable UI, webpack,Mongo,psql, ")),"etc and currently his goal is to gain more technical knowledge and be a better",r.a.createElement("span",{style:{color:"#3bafda"}},r.a.createElement("b",null," Software Engineer with a creative persona ")),"than what he was before .",r.a.createElement("br",null),r.a.createElement("br",null),"Suraj enjoys creating, programming and thinking innovatively in each and every piece of work .",r.a.createElement("br",null),"He is also a strong believer of the fact that success lies in the details and would like to combine his hard technical knowledge with softer business, marketing,design or any other creative and technical skills."),r.a.createElement(Y,null,r.a.createElement("br",null),"Have a project you'd like to discuss or are you looking for hiring? Here is my e-mail id - surajs787@gmail.com")))}}]),t}(r.a.Component),J=h()(P)(U),W=function(e){var t,a;return{body:{backgroundColor:"#fafdf7",width:"100vw",margin:0,padding:0},root:Object(T.a)({flexGrow:1,width:"80vw",top:"5vh",margin:"0 auto",marginTop:"10vh",borderTop:"2px solid #000",padding:"2vw",paddingTop:"13vh"},e.breakpoints.down("sm"),{width:"100vw",top:"5vh",margin:"0px"}),header:{position:"absolute",marginTop:"-80px"},insideheader:Object(T.a)({fontWeight:"900",fontFamily:"Playfair Display,serif",fontStyle:"italic",fontSize:"2.3rem",letterSpacing:"0.05ch"},e.breakpoints.down("sm"),{fontSize:"1.3rem"}),projectBox:Object(T.a)({border:"17px solid #000",height:"300px",padding:"10px",margin:"10px",backgroundColor:"#fff"},e.breakpoints.down("sm"),{border:"8px solid #000",height:"150px",padding:"5px",margin:"5px"}),imageBox:{position:"relative",height:"300px",margin:"10px",border:"17px solid #000",padding:"0px"},subdesc:{position:"absolute",bottom:"0px",height:"100px",width:"100%",backgroundColor:"#2fa19b",transition:"all 0.4s","&:hover":{opacity:"0"}},subdescpara:(t={fontSize:"15px",color:"#fff",fontFamily:"open-sans",paddingLeft:"5px"},Object(T.a)(t,e.breakpoints.down("sm"),{fontSize:"12px"}),Object(T.a)(t,e.breakpoints.down("xs"),{fontSize:"12px"}),t),subdescstack:(a={fontSize:"18px",color:"#fff",fontFamily:"open-sans",paddingLeft:"5px"},Object(T.a)(a,e.breakpoints.down("md"),{fontSize:"17px"}),Object(T.a)(a,e.breakpoints.down("sm"),{fontSize:"14px"}),a),backgroundimg:{position:"absolute",height:"100%",width:"100%",display:"block",top:"0",left:"0",backgroundSize:"cover",backgroundPosition:"center center"},cardcommon:Object(T.a)({position:"absolute",width:"76vw"},e.breakpoints.down("sm"),{width:"96vw"}),cardb:{transform:"rotateY(90deg) translate3d(-38vw, 0,38vw)"}}},K=a(3),X=a.n(K),Z=a(36),G=a.n(Z),Q=a(37),V=a.n(Q),$=a(38),ee=a.n($),te=a(39),ae=a.n(te),ne=a(40),re=a.n(ne),ie=a(41),le=a.n(ie),se=a(10),oe=a.n(se),ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={slidecounter:1},a.slideleft=function(e){e.preventDefault(),5!==a.state.slidecounter&&a.setState({slidecounter:a.state.slidecounter+1},function(){var e;switch(this.state.slidecounter){case 2:e=document.getElementById("cubeb");break;case 3:e=document.getElementById("cubec");break;case 4:e=document.getElementById("cubed");break;case 5:e=document.getElementById("cubee");break;case 6:e=document.getElementById("cubef");break;default:e=document.getElementById("cubeb")}e.style.transform="rotateY(0deg)",e.style.transition="all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)"})},a.slideright=function(e){e.preventDefault(),1!==a.state.slidecounter&&a.setState({slidecounter:a.state.slidecounter-1},function(){var e;switch(this.state.slidecounter){case 1:e=document.getElementById("cubeb");break;case 2:e=document.getElementById("cubec");break;case 3:e=document.getElementById("cubed");break;case 4:e=document.getElementById("cubee");break;case 5:e=document.getElementById("cubef");break;default:e=document.getElementById("cubeb")}e.style.transform="rotateY(90deg) translate3d(-38vw, 0,38vw)",e.style.transition="all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)"})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.slidecounter;return r.a.createElement("div",{className:e.body},r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.header},r.a.createElement("h2",{className:e.insideheader},"Projects")),r.a.createElement("div",{style:{transformStyle:"preserve-3d"}},r.a.createElement("div",{className:j()(e.cardcommon)},r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.projectBox},r.a.createElement("h4",{className:e.insideheader},"MUCH STORY",r.a.createElement("br",null),"A story-telling platform"),r.a.createElement("a",{style:{fontSize:"20px"},href:"http://muchstory.herokuapp.com/",target:"=_blank"},"link"))),r.a.createElement(X.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:e.imageBox},void 0!==V.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+V.a+")"}}):null,r.a.createElement("div",{className:e.subdesc,style:{zIndex:"0"}},r.a.createElement("p",{className:e.subdescpara},"Much Story is a real-time project that allows authorized users to create user-friendly and seo-friendly articles within various defined categories."),r.a.createElement("p",{className:e.subdescstack},r.a.createElement("b",null,"Features:   "),"Server Side Rendering, code-splitting, continuous-development, MERN Stack")))))),r.a.createElement("div",{id:"cubeb",className:j()(e.cardcommon,e.cardb)},r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.projectBox},r.a.createElement("h4",{className:e.insideheader},"PENSHEEL",r.a.createElement("br",null),"A blogging platform"),r.a.createElement("a",{style:{fontSize:"20px"},href:"https://pensheel.herokuapp.com",target:"=_blank"},"link"))),r.a.createElement(X.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:e.imageBox},void 0!==G.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+G.a+")"}}):null,r.a.createElement("div",{className:e.subdesc,style:{zIndex:"0"}},r.a.createElement("p",{className:e.subdescpara},"Pensheel is a real-time project that enables authorized user to write articles/blogs with a rich-text editor built on top of draftjs."),r.a.createElement("p",{className:e.subdescstack},r.a.createElement("b",null,"Stack:   "),"React, Redux, Draftjs, Node, Express, Mongo, Docker, Heroku")))))),r.a.createElement("div",{id:"cubec",className:j()(e.cardcommon,e.cardb)},r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.projectBox},r.a.createElement("h4",{className:e.insideheader},"RESTOFANTS- ",r.a.createElement("br",null),"Restaurant searching application"),r.a.createElement("a",{style:{fontSize:"20px"},href:"https://github.com/SoeRatch/FindRestaurants",target:"=_blank"},"link"))),r.a.createElement(X.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:e.imageBox},void 0!==ee.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+ee.a+")"}}):null,r.a.createElement("div",{className:e.subdesc,style:{zIndex:"1"}},r.a.createElement("p",{className:e.subdescpara},"Restofants is a demo frontend project with minimal backend . It lets user search through available cuisines and restaurants available ."),r.a.createElement("p",{className:e.subdescstack},r.a.createElement("b",null,"Stack:   "),"React, Node, Express, Mongo,Material-UI")))))),r.a.createElement("div",{id:"cubed",className:j()(e.cardcommon,e.cardb)},r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.projectBox},r.a.createElement("h4",{className:e.insideheader},"STOCK CHARTS",r.a.createElement("br",null),"historical stock data application"),r.a.createElement("a",{style:{fontSize:"20px"},href:"https://github.com/SoeRatch/StockCharts",target:"=_blank"},"link"))),r.a.createElement(X.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:e.imageBox},void 0!==ae.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+ae.a+")"}}):null,r.a.createElement("div",{className:e.subdesc,style:{zIndex:"2"}},r.a.createElement("p",{className:e.subdescpara},"Stock Chart is a fullstack demo project which lets user to view historical stock data for various symbols."),r.a.createElement("p",{className:e.subdescstack},r.a.createElement("b",null,"Stack:   "),"React, Node, Express, Mongo, react-stockcharts")))))),r.a.createElement("div",{id:"cubee",className:j()(e.cardcommon,e.cardb)},r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.projectBox},r.a.createElement("h4",{className:e.insideheader},"IF-LOOPZ ",r.a.createElement("br",null),"A tutorial platform"),r.a.createElement("a",{style:{fontSize:"20px"},href:"https://soeratch.github.io/if_loopz",target:"=_blank"},"link"))),r.a.createElement(X.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:e.imageBox},void 0!==re.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+re.a+")"}}):null,r.a.createElement("div",{className:e.subdesc,style:{zIndex:"3"}},r.a.createElement("div",{className:e.subdescpara,style:{paddingTop:"2px"}},"IF-LOOPZ is a realtime frontend project.It is a single-page web application which lets programmers to quickly get started with basics of programming languages like Java,Python "),r.a.createElement("div",{className:e.subdescstack},r.a.createElement("br",null),r.a.createElement("b",null,"Stack:   "),"React")))))),r.a.createElement("div",{id:"cubef",className:j()(e.cardcommon,e.cardb)},r.a.createElement(X.a,{container:!0},r.a.createElement(X.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:e.projectBox},r.a.createElement("h4",{className:e.insideheader},"Jobaaks",r.a.createElement("br",null),"A job hunting application"),r.a.createElement("a",{style:{fontSize:"20px"},href:"https://github.com/SoeRatch/jobaaks",target:"=_blank"},"link"))),r.a.createElement(X.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:e.imageBox},void 0!==le.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+le.a+")"}}):null,r.a.createElement("div",{className:e.subdesc,style:{zIndex:"4"}},r.a.createElement("p",{className:e.subdescpara},"Jobaaks is a frontend demo project listing all available jobs and its details,a profile page and an elegant dashboard where users can view their job application status"),r.a.createElement("p",{className:e.subdescstack},r.a.createElement("b",null,"Stack:   "),"React, Material-UI")))))))),t<6&&r.a.createElement("div",{className:oe.a.slideleft,onClick:this.slideleft},r.a.createElement("div",{className:oe.a.centerconleft},r.a.createElement("div",{className:oe.a.round},r.a.createElement("span",{className:oe.a.sp1}),r.a.createElement("span",{className:oe.a.sp2}),r.a.createElement("span",{className:oe.a.sp3}),r.a.createElement("span",{className:oe.a.sp4})))),t>1&&r.a.createElement("div",{className:oe.a.slideright,onClick:this.slideright},r.a.createElement("div",{className:oe.a.centerconright},r.a.createElement("div",{className:oe.a.round},r.a.createElement("span",{className:oe.a.sp1}),r.a.createElement("span",{className:oe.a.sp2}),r.a.createElement("span",{className:oe.a.sp3}),r.a.createElement("span",{className:oe.a.sp4})))))}}]),t}(r.a.Component),de=h()(W)(ce),me=function(e){var t;return{backgroundimg:{position:"absolute",height:"100vh",width:"100vw",display:"block",top:"0",left:"0",backgroundSize:"cover",backgroundPosition:"center center",backgroundAttachment:"fixed","&:after":{position:"absolute",width:"100vw",height:"100vh",content:'""',display:"block",background:"#e6ffe6",opacity:"0.9"}},name:(t={position:"absolute",borderTop:"5px solid #000",width:"12vw",padding:"5px",left:"20px",textAlign:"center",fontFamily:"Montserrat,helvetica neue,Helvetica,Arial,sans-serif",fontFeatureSetting:"kern",fontWeight:"700",letterSpacing:"4.6px",zIndex:"2",fontSize:"20px",fontColor:"#293347",textDecorationStyle:"solid",verticalAlign:"middle"},Object(T.a)(t,e.breakpoints.down("md"),{width:"16vw"}),Object(T.a)(t,e.breakpoints.down("sm"),{width:"25vw"}),Object(T.a)(t,e.breakpoints.down("xs"),{width:"40vw",fontSize:"15px"}),t),container:Object(T.a)({position:"absolute",width:"90vw",height:"80vh",padding:"20px",margin:"auto",marginTop:"10vh",left:"0px",right:"0px"},e.breakpoints.down("sm"),{top:"5vh",width:"100vw",height:"70vh",padding:"30px",margin:"0px"}),subhead:{margin:"2% 0",textAlign:"center",color:"darkgreen",fontFamily:"cursive",fontWeight:"bold"},skilltext:{textAlign:"center",fontSize:"20px",fontFamily:"sans-serif",marginBottom:"35px"},barwrap:{margin:"0 auto",marginBottom:"20px"},progress:{border:"double",borderColor:"grey",background:"#dff9fb",padding:"0"},progressbar:{background:"darkgreen"},contactwrap:{margin:"0 auto",display:"flex",justifyContent:"space-around"},contactdetails:Object(T.a)({fontSize:"15px"},e.breakpoints.down("xs"),{fontSize:"10px"}),contac:Object(T.a)({position:"absolute",width:"120px",height:"45px",top:"0",right:"10px",background:"none",border:"3px solid #000",borderRadius:"5px",color:"#fff",fontSize:"1.2em",fontWeight:"700",textTransform:"uppercase",overflow:"hidden","&:hover":{cursor:"pointer"},"&:after":{position:"absolute",height:"100%",background:"#fff",width:"0"}},e.breakpoints.down("sm"),{right:"50px",width:"100px",height:"40px",fontSize:"0.8em"}),over:{position:"absolute",fontFamily:"Hammersmith One,sans-serif",color:"#000",zIndex:"999",width:"100%"}}},pe=a(42),ue=a.n(pe),he=a(43),be=a.n(he);function ge(){var e=Object(b.a)(["\n      display:flex;\n      justify-content:space-between;\n      margin-bottom:5px;\n      font-size:12px;\n      font-weight:bold;\n\n  @media only screen and (min-width:550px){\n         font-size:15px;  \n      }\n\n  @media only screen and (min-width:768px){\n         font-size:20px;  \n      }\n  \n\n\t"]);return ge=function(){return e},e}var fe=g.a.div(ge()),ve=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,void 0!==ue.a?r.a.createElement("div",{className:e.backgroundimg,style:{backgroundImage:"url("+ue.a+")"}}):null,r.a.createElement("div",{className:e.name},"MORE"),r.a.createElement("div",{className:e.container},r.a.createElement("h2",{className:e.subhead},"SKILLS"),r.a.createElement("div",{className:e.barwrap,style:{width:"60%"}},r.a.createElement(fe,null,r.a.createElement("div",null,r.a.createElement("span",null,"Javascript Full Stack")),r.a.createElement("div",null,r.a.createElement("span",null,"70%"))),r.a.createElement("div",{className:e.progress,style:{height:"20px"}},r.a.createElement("div",{className:e.progressbar,style:{width:"70%",height:"100%"}}))),r.a.createElement("div",{className:e.barwrap,style:{width:"60%"}},r.a.createElement(fe,null,r.a.createElement("div",null,r.a.createElement("span",null,"Programming and Computer Fundamentals")),r.a.createElement("div",null,r.a.createElement("span",null,"65%"))),r.a.createElement("div",{className:e.progress,style:{height:"20px"}},r.a.createElement("div",{className:e.progressbar,style:{width:"65%",height:"100%"}}))),r.a.createElement("div",{className:e.barwrap,style:{width:"60%"}},r.a.createElement(fe,null,r.a.createElement("div",null,r.a.createElement("span",null,"Frontend and UI/UX")),r.a.createElement("div",null,r.a.createElement("span",null,"65%"))),r.a.createElement("div",{className:e.progress,style:{height:"20px"}},r.a.createElement("div",{className:e.progressbar,style:{width:"65%",height:"100%"}}))),r.a.createElement("div",{className:e.barwrap,style:{width:"60%"}},r.a.createElement(fe,null,r.a.createElement("div",null,r.a.createElement("span",null,"Passion and Self-Motivation")),r.a.createElement("div",null,r.a.createElement("span",null,"95%"))),r.a.createElement("div",{className:e.progress,style:{height:"20px"}},r.a.createElement("div",{className:e.progressbar,style:{width:"95%",height:"100%"}}))),r.a.createElement("div",{className:e.barwrap,style:{width:"60%"}},r.a.createElement(fe,null,r.a.createElement("div",null,r.a.createElement("span",null,"Other programming languages like python, java , c++,etc")),r.a.createElement("div",null,r.a.createElement("span",null,"60%"))),r.a.createElement("div",{className:e.progress,style:{height:"20px"}},r.a.createElement("div",{className:e.progressbar,style:{width:"60%",height:"100%"}}))),r.a.createElement("div",{className:e.barwrap,style:{width:"60%"}},r.a.createElement(fe,null,r.a.createElement("div",null,r.a.createElement("span",null,"Ability to compare and grasp new technologies")),r.a.createElement("div",null,r.a.createElement("span",null,"80%"))),r.a.createElement("div",{className:e.progress,style:{height:"20px"}},r.a.createElement("div",{className:e.progressbar,style:{width:"80%",height:"100%"}}))),r.a.createElement("h2",{className:e.subhead},"Contact Details"),r.a.createElement("div",{className:e.contactwrap,style:{width:"80%",justifyContent:"space-around"}},r.a.createElement("p",{className:e.contactdetails},r.a.createElement("b",null,"Email:")," surajs787@gmail.com"),r.a.createElement("p",{className:e.contactdetails},r.a.createElement("b",null,"Phone number:")," +917002524460"))),r.a.createElement("a",{href:"https://drive.google.com/file/d/1Pd-8jd9I2P-Et-zZPoy0O6QKJAf__Asa/view",target:"=_blank"},r.a.createElement("div",{className:j()(be.a.contac,e.contac)},r.a.createElement("div",{className:j()(be.a.over,e.over)},"View Resume"))))}}]),t}(r.a.Component),Ee=h()(me)(ve),xe=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.wrapper},r.a.createElement("div",{className:e.scene},r.a.createElement("div",{className:e.cube,id:"cube"},r.a.createElement("div",{className:j()(e.cubeface,e.cubefacefront)},r.a.createElement(M,null)),r.a.createElement("div",{className:j()(e.cubeface,e.cubefaceback)},r.a.createElement(J,null)),r.a.createElement("div",{className:j()(e.cubeface,e.cubefacetop)},r.a.createElement(Ee,null)),r.a.createElement("div",{className:j()(e.cubeface,e.cubefacebottom)},r.a.createElement(de,null)))))}}]),t}(r.a.Component),we=h()(y)(xe),ke=a(44),ye=a.n(ke),Ne=a(65),je=a.n(Ne),Se=a(66),Oe=a.n(Se),ze=a(67),qe=a.n(ze),_e=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={initialloading:!0,deg:0},a.handleScroll=function(e){e.deltaY>=0&&a.handlecssdown(window.event),e.deltaY<0&&a.handlecssup(window.event)},a.handleKeyPress=function(){switch(window.event.keyCode){case 37:console.log("left");break;case 38:a.handlecssup(window.event);break;case 39:console.log("right");break;case 40:a.handlecssdown(window.event);break;default:a.handlecssup(window.event)}},a.handlecssdown=function(e){a.setState({deg:a.state.deg+90},function(){var e=document.getElementById("cube");e.style.transform="translate3d(0,0,-50vh) rotateX("+this.state.deg+"deg)",e.style.transition="all 1s cubic-bezier(0.175,0.885,0.320,1.275)"})},a.handlecssup=function(e){a.setState({deg:a.state.deg-90},function(){var e=document.getElementById("cube");e.style.transform="translate3d(0,0,-50vh) rotateX("+this.state.deg+"deg)",e.style.transition="all 1s cubic-bezier(0.175,0.885,0.320,1.275)"})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({initialloading:!1})},2e3),document.addEventListener("keydown",this.handleKeyPress),window.addEventListener("wheel",je.a.debounce(this.handleScroll,50),!0)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=(Object(p.a)(e,["classes"]),this.state),n=a.initialloading,i=a.deg;return r.a.createElement("div",{className:t.body},n&&r.a.createElement(w,null),!n&&r.a.createElement("div",null,r.a.createElement(we,null),!(i%360==0)&&r.a.createElement("div",{className:t.icondivup,onClick:this.handlecssup},r.a.createElement("div",{className:ye.a.arrowup},r.a.createElement("span",{style:{borderTop:"5px solid #FFF",borderLeft:"5px solid #FFF"}}),r.a.createElement("span",{style:{borderTop:"5px solid #06A8FF",borderLeft:"5px solid #06A8FF"}}),r.a.createElement("span",{style:{borderTop:"5px solid #000",borderLeft:"5px solid #000"}}))),r.a.createElement("div",{className:t.icondivdown,onClick:this.handlecssdown},r.a.createElement("div",{className:ye.a.arrowdown},r.a.createElement("span",{style:{borderBottom:"5px solid #FFF",borderRight:"5px solid #FFF"}}),r.a.createElement("span",{style:{borderBottom:"5px solid #06A8FF",borderRight:"5px solid #06A8FF"}}),r.a.createElement("span",{style:{borderBottom:"5px solid #000",borderRight:"5px solid #000"}})))),r.a.createElement("div",{id:"aboutbody",style:{position:"fixed",height:"20px",color:"#000",bottom:"20px",right:"0px",fontFamily:"Montserrat,helvetica neue,Helvetica,Arial,sans-serif",display:"flex",alignItems:"center",background:"white",padding:"5px"}},"scroll or ",r.a.createElement(Oe.a,null)," or ",r.a.createElement(qe.a,null)))}}]),t}(r.a.Component),Ie=h()(k)(_e),Fe=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ie,null))}}]),t}(n.Component);l.a.render(r.a.createElement(Fe,null),document.getElementById("root"))},35:function(e,t,a){e.exports=a.p+"static/media/programming.c1a95f73.svg"},36:function(e,t,a){e.exports=a.p+"static/media/Pensheel.9468d1fe.png"},37:function(e,t,a){e.exports=a.p+"static/media/muchstory.8213ba76.png"},38:function(e,t,a){e.exports=a.p+"static/media/Restofants.fdd68d2a.png"},39:function(e,t,a){e.exports=a.p+"static/media/stockcharts.c2f580f3.png"},40:function(e,t,a){e.exports=a.p+"static/media/ifloopz.51345c9d.png"},41:function(e,t,a){e.exports=a.p+"static/media/jobaaks.bfeea82d.png"},42:function(e,t,a){e.exports=a.p+"static/media/conversation.9b269fe2.svg"},43:function(e,t,a){e.exports={contac:"detail_contac__b1uKU"}},44:function(e,t,a){e.exports={arrowdown:"dashboard_arrowdown__24ik6",animated:"dashboard_animated__2Lhut",arrowup:"dashboard_arrowup__291DJ",animateu:"dashboard_animateu__3kRoX"}},71:function(e,t,a){e.exports=a(159)}},[[71,1,2]]]);
//# sourceMappingURL=main.874ae4e0.chunk.js.map