(this["webpackJsonptime-since"]=this["webpackJsonptime-since"]||[]).push([[0],{15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(10),r=n.n(s),a=(n(15),n(3)),l=n(0),u=function(e){var t=e.children;return Object(l.jsx)("div",{style:{padding:"10px 40px"},children:t})},d=function(e){var t=e.options,n=void 0===t?[]:t;return Object(l.jsx)(u,{children:n.map((function(e){return Object(l.jsx)("button",{type:"button",onClick:e.handler,style:{padding:"10px"},children:e.id},e.id)}))})},j=function(e){var t=e.handler;return Object(l.jsx)("div",{style:{position:"absolute",top:"0px",left:"0px",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("button",{onClick:t,children:"<"})})},o=n(6),x=n(2),b=n.n(x),h=function(e){var t=e.value,n=e.changeHandler;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"InputDateTime"}),Object(l.jsx)("input",{type:"datetime-local",value:t,onChange:n})]})},O=[{unit:"seconds",value:1e4},{unit:"seconds",value:1e5},{unit:"seconds",value:1e6},{unit:"seconds",value:1e7},{unit:"seconds",value:1e8},{unit:"seconds",value:1e9},{unit:"minutes",value:1e3},{unit:"minutes",value:1e4},{unit:"minutes",value:1e5},{unit:"minutes",value:1e6},{unit:"minutes",value:1e7},{unit:"hours",value:100},{unit:"hours",value:1e3},{unit:"hours",value:1e4},{unit:"hours",value:1e5},{unit:"hours",value:1e6},{unit:"days",value:1},{unit:"days",value:10},{unit:"days",value:100},{unit:"days",value:1e3},{unit:"days",value:1e4},{unit:"weeks",value:1},{unit:"weeks",value:10},{unit:"weeks",value:100},{unit:"weeks",value:1e3},{unit:"months",value:1},{unit:"months",value:10},{unit:"months",value:100},{unit:"months",value:1e3}],v="2021-02-12T05:47",f=new Date(v),m=v,p=function(){var e=Object(i.useState)(m),t=Object(a.a)(e,2),n=t[0],c=t[1],s=function(e){var t=b()(e);return O.map((function(n){var i=b()(e).add(n.value,n.unit);return Object(o.a)(Object(o.a)({},n),{},{valueUnix:i.unix(),display:i.format("dddd, MMMM Do YYYY, h:mm:ss a"),short:i.format("YYYY MMM DD"),future:1e3*i.unix()-Date.now()>0,age:i.from(t,!0)})})).sort((function(e,t){return e.valueUnix-t.valueUnix}))}(n);return Object(l.jsxs)(u,{children:[Object(l.jsx)("h1",{children:"Dates base ten"}),Object(l.jsx)("div",{children:"Zoe's birthdate is:"}),Object(l.jsx)("div",{children:f.valueOf()}),Object(l.jsx)("div",{children:f.toDateString()}),Object(l.jsx)("div",{children:f.toLocaleString()}),Object(l.jsx)("br",{}),Object(l.jsx)(h,{value:n,changeHandler:function(e){var t=e.target.value;c(t)}}),Object(l.jsx)("button",{type:"button",onClick:function(){c(m)},children:"Reset"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Date"}),Object(l.jsx)("th",{children:"Versary Type"}),Object(l.jsx)("th",{children:"Date and Time"}),Object(l.jsx)("th",{children:"Age"})]})}),Object(l.jsx)("tbody",{children:s.map((function(e){return Object(l.jsxs)("tr",{style:{color:"".concat(e.future?"black":"lightgray")},children:[Object(l.jsx)("td",{children:e.short}),Object(l.jsxs)("td",{children:[e.value.toLocaleString()," ",e.unit]}),Object(l.jsx)("td",{children:e.display}),Object(l.jsx)("td",{children:e.age})]},"".concat(e.value).concat(e.unit))}))})]})})]})},g=n(32),y=Object(g.a)({viewBox:{border:"1px solid green"}}),M=function(){var e=y(),t=L();return Object(l.jsxs)(u,{children:[Object(l.jsx)("div",{children:"SVG Experiments 1"}),Object(l.jsx)("div",{children:Object(l.jsx)("svg",{viewBox:"0 0 100 100",className:e.viewBox,children:Object(l.jsx)("g",{stroke:"black",fill:"none",strokeWidth:"0.4px",children:Object(l.jsx)("path",{d:t})})})})]})},L=function(){for(var e=function(e){return 103*e/(e+3)},t=[],n=0;n<101;n++){var i=1*n,c=100-100*e(i)/100;0===n?t.push("M".concat(i,",").concat(c)):t.push("L".concat(i,",").concat(c))}return t.join(" ")},k=Object(g.a)({viewBox:{border:"1px solid black"},sliderBox:{display:"flex",width:"100%"},rangeBox:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%"},topInput:{width:"40px"},rangeInput:{flex:1,minWidth:"300px"}}),w=function(){var e=Object(i.useState)(200),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(113),r=Object(a.a)(s,2),d=r[0],j=r[1],o=k(),x=D({aValue:d});return Object(l.jsxs)(u,{children:[Object(l.jsx)("div",{children:"SVG Experiments 2"}),Object(l.jsxs)("div",{className:o.rangeBox,children:[Object(l.jsx)("div",{children:d}),Object(l.jsxs)("div",{className:o.sliderBox,children:[Object(l.jsx)("div",{children:"100"}),Object(l.jsx)("input",{type:"range",name:"aRange",id:"aRange",min:"100.1",max:"".concat(n),value:d,onChange:function(e){var t=e.target.value;j(t)},step:"0.1",className:o.rangeInput}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"number",name:"topRange",id:"topRange",onChange:function(e){var t=e.target.value;c(t)},value:n,className:o.topInput})})]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("svg",{viewBox:"0 0 100 100",className:o.viewBox,children:[Object(l.jsxs)("g",{stroke:"#dfdfdf",fill:"none",strokeWidth:"0.1px",children:[Object(l.jsx)("path",{d:"M10,0 L10,100 M20,0 L20,100 M30,0 L30,100 M40,0 L40,100 M50,0 L50,100 M60,0 L60,100 M70,0 L70,100 M80,0 L80,100 M90,0 L90,100"}),Object(l.jsx)("path",{d:"M0,10 L100,10 M0,20 L100,20 M0,30 L100,30 M0,40 L100,40 M0,50 L100,50 M0,60 L100,60 M0,70 L100,70 M0,80 L100,80 M0,90 L100,90"})]}),Object(l.jsx)("g",{stroke:"black",fill:"none",strokeWidth:"0.4px",children:Object(l.jsx)("path",{d:x})})]})})]})},D=function(e){for(var t=e.aValue,n=(t-100)/100*100,i=function(e){return t*e/(e+n)},c=[],s=0;s<401;s++){var r=.25*s,a=100-100*i(r)/100;0===s?c.push("M".concat(r,",").concat(a)):c.push("L".concat(r,",").concat(a))}return c.join(" ")},S=Object(g.a)({viewBox:{border:"1px solid black"},sliderBox:{display:"flex",width:"100%"},rangeBox:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%"},topInput:{width:"40px"},rangeInput:{flex:1,minWidth:"300px"}}),T=function(){var e=Object(i.useState)(50),t=Object(a.a)(e,2),n=t[0],c=t[1],s=S(),r=F({aValue:100+Math.exp(.09*(72-n))});return Object(l.jsxs)(u,{children:[Object(l.jsx)("div",{children:"SVG Experiments 3 aValue: 100 + Math.exp((72 - rangeValue) * 0.09)"}),Object(l.jsxs)("div",{className:s.rangeBox,children:[Object(l.jsx)("div",{children:n}),Object(l.jsxs)("div",{className:s.sliderBox,children:[Object(l.jsx)("div",{children:"0"}),Object(l.jsx)("input",{type:"range",name:"aRange",id:"aRange",min:"0",max:"100",value:n,onChange:function(e){var t=e.target.value;c(t)},step:"0.1",className:s.rangeInput}),Object(l.jsx)("div",{children:"100"})]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("svg",{viewBox:"0 0 100 100",className:s.viewBox,children:[Object(l.jsxs)("g",{stroke:"#dfdfdf",fill:"none",strokeWidth:"0.1px",children:[Object(l.jsx)("path",{d:"M10,0 L10,100 M20,0 L20,100 M30,0 L30,100 M40,0 L40,100 M50,0 L50,100 M60,0 L60,100 M70,0 L70,100 M80,0 L80,100 M90,0 L90,100"}),Object(l.jsx)("path",{d:"M0,10 L100,10 M0,20 L100,20 M0,30 L100,30 M0,40 L100,40 M0,50 L100,50 M0,60 L100,60 M0,70 L100,70 M0,80 L100,80 M0,90 L100,90"})]}),Object(l.jsx)("g",{stroke:"black",fill:"none",strokeWidth:"0.4px",children:Object(l.jsx)("path",{d:r})})]})})]})},F=function(e){for(var t=e.aValue,n=(t-100)/100*100,i=function(e){return t*e/(e+n)},c=[],s=0;s<401;s++){var r=.25*s,a=100-100*i(r)/100;0===s?c.push("M".concat(r,",").concat(a)):c.push("L".concat(r,",").concat(a))}return c.join(" ")},B=function(){return Object(l.jsxs)(u,{children:[Object(l.jsx)(T,{}),Object(l.jsx)(w,{}),Object(l.jsx)(M,{})]})},C="2021-02-12T05:47",R=new Date(C).valueOf(),I={zoe:C,callum:"1981-08-09T04:00",lucile:"1987-03-11T05:00"},Y=function(){var e=Object(i.useState)("2021-02-12T05:47"),t=Object(a.a)(e,2),n=t[0],c=t[1],s=function(e){var t=e.target.value;c(I[t])},r=new Date(n),d=b()(r),j=Date.now(),o=j-r.valueOf(),x=[{unit:"Milliseconds",value:o},{unit:"Seconds",value:o/1e3},{unit:"Minutes",value:o/1e3/60},{unit:"Hours",value:o/1e3/60/60},{unit:"Days",value:o/1e3/60/60/24},{unit:"Weeks",value:o/1e3/60/60/24/7},{unit:"Months",value:b()().diff(d,"months",!0)},{unit:"Years",value:b()().diff(d,"years",!0)}];return Object(l.jsxs)(u,{children:["Times From Date",Object(l.jsx)(h,{value:n,changeHandler:function(e){var t=e.target.value;c(t)}}),Object(l.jsx)("button",{type:"button",onClick:s,value:"zoe",children:"Zo\xe9"}),Object(l.jsx)("button",{type:"button",onClick:s,value:"callum",children:"Callum"}),Object(l.jsx)("button",{type:"button",onClick:s,value:"lucile",children:"Lucile"}),Object(l.jsx)("div",{children:d.format("dddd, MMMM Do YYYY, h:mm:ss a")}),Object(l.jsx)("div",{children:R}),Object(l.jsx)("div",{children:j}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Unit"}),Object(l.jsx)("th",{children:"Number"})]})}),Object(l.jsx)("tbody",{children:x.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.unit}),Object(l.jsx)("td",{style:{textAlign:"right"},children:Object(l.jsx)("div",{style:{fontFamily:"Courier"},children:(t=e.value,t.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})})]});var t}))})]})]})},N={textAlign:"right",width:"200px",fontFamily:"courier"},V="2021-02-12T05:47+01:00",W="1981-08-09T04:00+12:00",E="1987-03-11T05:00+01:00",z={zoe:b()(V),callum:b()(W),lucile:b()(E)},H={zoe:"Zoe",callum:"Callum",lucile:"Lucile"},U={DatesBaseTen:p,SVGExperiments:B,TimesFromDate:Y,StopwatchDisplay3:function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(null),r=Object(a.a)(s,2),d=r[0],j=r[1],o=Object(i.useRef)(null),x=Object(i.useRef)(null),h=Object(i.useRef)(null),O=Object(i.useRef)(null),v=Object(i.useRef)(null),f=Object(i.useRef)(null),m=Object(i.useRef)(null),p=Object(i.useRef)(null),g=Object(i.useRef)(null),y=function(e){c(H[e]),j(z[e])};return Object(i.useEffect)((function(){if(d)return o.current=setInterval((function(){var e=function(e){var t=e.now,n=e.dateFrom,i=b()(t),c=i.diff(n,"years"),s=b()(n).add(c,"years"),r=i.diff(s,"months"),a=b()(s).add(r,"months"),l=i.diff(a,"weeks"),u=b()(a).add(l,"weeks"),d=i.diff(u,"days"),j=b()(u).add(d,"days"),o=i.diff(j,"hours"),x=b()(j).add(o,"hours"),h=i.diff(x,"minutes"),O=b()(x).add(h,"minutes"),v=i.diff(O,"seconds"),f=i.diff(n,"seconds"),m=i.diff(n,"minutes",!0),p=i.diff(n,"hours",!0),g=i.diff(n,"days",!0),y=i.diff(n,"weeks",!0),M=i.diff(n,"months",!0),L=i.diff(n,"years",!0);return{split:"".concat(c," years, ").concat(r," months, ").concat(l," weeks, ").concat(d," days, ").concat(o," hours, ").concat(h," minutes, ").concat(v," seconds"),seconds:f.toLocaleString(),minutes:m.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),hours:p.toLocaleString(void 0,{minimumFractionDigits:4,maximumFractionDigits:4}),days:g.toLocaleString(void 0,{minimumFractionDigits:5,maximumFractionDigits:5}),weeks:y.toLocaleString(void 0,{minimumFractionDigits:6,maximumFractionDigits:6}),months:M.toLocaleString(void 0,{minimumFractionDigits:7,maximumFractionDigits:7}),years:L.toLocaleString(void 0,{minimumFractionDigits:8,maximumFractionDigits:8})}}({now:Date.now(),dateFrom:d});x.current.innerText=e.split,h.current.innerText=e.seconds,O.current.innerText=e.minutes,v.current.innerText=e.hours,f.current.innerText=e.days,m.current.innerText=e.weeks,p.current.innerText=e.months,g.current.innerText=e.years}),100),function(){clearInterval(o.current)}}),[d]),Object(l.jsxs)(u,{children:["StopwatchDisplay3",Object(l.jsx)("div",{children:"Time"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",onClick:function(){y("lucile")},children:"Lulu"}),Object(l.jsx)("button",{type:"button",onClick:function(){y("zoe")},children:"Zoe"}),Object(l.jsx)("button",{type:"button",onClick:function(){y("callum")},children:"Callum"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:["Time for ",n]}),Object(l.jsxs)("div",{children:["Time Unix ",Boolean(d)?d.format():""]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{ref:x}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:g,style:N})}),Object(l.jsx)("td",{children:"Years"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:p,style:N})}),Object(l.jsx)("td",{children:"Months"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:m,style:N})}),Object(l.jsx)("td",{children:"Weeks"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:f,style:N})}),Object(l.jsx)("td",{children:"Days"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:v,style:N})}),Object(l.jsx)("td",{children:"Hours"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:O,style:N})}),Object(l.jsx)("td",{children:"Minutes"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{ref:h,style:N})}),Object(l.jsx)("td",{children:"Seconds"})]})]})})})]})]})]})}},A=function(){var e=Object(i.useState)("StopwatchDisplay3"),t=Object(a.a)(e,2),n=t[0],c=t[1],s=U[n],r=function(e){c(e||"")},u=Object.keys(U).map((function(e){return{id:e,handler:function(){return r(e)}}}));return""!==n?Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{handler:function(){return r("")}}),Object(l.jsx)(s,{})]}):Object(l.jsx)(d,{options:u})};var G=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(A,{})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root")),Z()}},[[22,1,2]]]);
//# sourceMappingURL=main.95e1ea26.chunk.js.map