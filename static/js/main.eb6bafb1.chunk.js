(this.webpackJsonpsinceyougothere=this.webpackJsonpsinceyougothere||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"name":"sinceyougothere","version":"0.1.0","private":true,"homepage":"https://jerometwell.github.io/sinceyougothere","dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","gh-pages":"^3.1.0","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.3","uuid":"^8.3.1"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(3),s=n.n(i),o=(n(12),n(1)),c=n(4),l=n(5),u=n(16),m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0;Object(c.a)(this,e),this.name=t,this.value=n,this.unit=r,this.isNsfw=!1,this.id=Object(u.a)()}return Object(l.a)(e,[{key:"source",value:function(e){return this.src=e,this}},{key:"per",value:function(t){return this.rate=e.getRateFactor(t),this}},{key:"nsfw",value:function(){return this.isNsfw=!0,this}},{key:"unitsUntil",value:function(e){var t=(+new Date-e)*this.value/this.rate;return t||0}}],[{key:"getRateFactor",value:function(e){switch(e){case"millisecond":return 1;case"second":return 1e3;case"minute":return 6e4;case"hour":return 36e5;case"day":return 864e5;case"month":return 2592e6;case"year":return 31536e6;default:throw new Error("unknown rate unit")}}}]),e}();function p(e){var t=e.timer,n=e.target,i=Object(r.useState)(0),s=Object(o.a)(i,2),c=s[0],l=s[1];window.setTimeout((function(){return l(c+1)}),200);var u=t.unitsUntil(n),m=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}(u>10?Math.ceil(u):u.toPrecision(2));return a.a.createElement("div",{className:"ticker ".concat(t.isNsfw?"ticker--nsfw":"")},a.a.createElement("div",{className:"ticker__name"},t.name),a.a.createElement("div",{className:"ticker__value"},m),a.a.createElement("div",{className:"ticker__unit"},t.unit))}n(13);var d=n(6),h=[new m("Seconds \u231a").per("second"),new m("Minutes \u231a").per("minute"),new m("Hours \u231a").per("hour"),new m("Days \ud83d\udcc6").per("day"),new m("Minimum Wage Pay \ud83d\udcb0",6.71,"GBP").per("hour"),new m("Galactic Years \ud83c\udf0c",4e-9).per("year"),new m("Global Births \ud83d\udc76",1314e5).per("year"),new m("Global Deaths \ud83d\udc80",553e5).per("year").nsfw(),new m("Olympic Swimming Pools full of human Skulls \ud83c\udfca\u200d\u2642\ufe0f",134.643334).per("year").nsfw(),new m("Avg. Human Lifetime \ud83d\udcaf",1.219512195,"%").per("year"),new m("Rainforest Destroyed \ud83c\udf34",1.55,"sq. mi").per("year"),new m("Tons of CO\u2082 Released \ud83c\udf0d",382e8).per("year"),new m("Apple's Global Revenue \ud83c\udf4f",1632e8,"GBP").per("year"),new m("Miles driven @ 70mph \ud83d\ude97",70,"mi").per("hour"),new m("Drives to the moon \ud83c\udf1d",.00029306451).per("hour"),new m("Blood Pumped @ 60bpm \ud83e\ude78",4.2,"litres").per("minute"),new m("Earth Rotation \ud83c\udf10",40075,"km").per("day"),new m("Earth Orbits \ud83d\ude80",94e7,"km").per("year"),new m("Global Tweets \ud83d\udc26",7165).per("second"),new m("Internet Traffic \ud83d\udc69\u200d\ud83d\udcbb",34068,"GB").per("second"),new m("Google Searches \ud83d\udd0e",53640).per("second"),new m("Global Emails \ud83d\udc8c",2479545,"emails").per("second"),new m("Poop \ud83d\udca9",430.9128,"g").per("day").nsfw(),new m("Urine \ud83d\udebd",1600,"ml").per("day").nsfw(),new m("Semen \ud83d\udca6",63645.3,"ml").per("year").nsfw(),new m("Miles walked by the Proclaimers if they were to complete their task in one day \ud83c\udfb8",1e3,"mi").per("day"),new m("Vending Machine Deaths \ud83e\udd5b",10,"\ud83d\udc80").per("year").nsfw(),new m("Individual UK energy use \u26a1",2089,"MW").per("hour"),new m("Individual UK energy use \u26a1",81291,"Pork Pies").per("hour"),new m("Oil Pumped \ud83d\udee2",93e7,"barrels").per("day"),new m("Cars Produced \ud83d\ude98",96e7).per("year"),new m("Cow Farts \ud83d\udc04\ud83d\udca8",30,"balloons").per("day"),new m("Bullets Manufactured \ud83d\udd2b",12e9).per("year"),new m("Deaths Choking on ballpoint pens \ud83d\udd8a",100,"\ud83d\udc80").per("year").nsfw(),new m("Miles driven by average person",16550,"mi").per("year").source("https://www.fhwa.dot.gov/ohim/onh00/bar8.htm"),new m("Percentage Use of your next flat tire @ 70mph",.0672,"%").per("day"),new m("Flat Tires (US)",22e7,"tyres").per("year").source("http://excelmathmike.blogspot.com/2011/04/phooey-on-flats-part-i.html")];var w=function(){var e=Object(r.useState)(+new Date),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(!1),c=Object(o.a)(s,2),l=c[0],u=c[1];return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"Since you arrived ",a.a.createElement("sup",null,a.a.createElement("code",null,"v",d.version))),a.a.createElement("p",null,"From the moment you got here, things have been happening. Take a look!")),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"controls"},a.a.createElement("div",null,"You arrived at:",a.a.createElement("code",{className:"controls__date"},new Date(n).toISOString())),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return i(+new Date)}},"\u274e Reset"),a.a.createElement("button",{onClick:function(e){return u(!l)}},l?"\u274c Hide":"\ud83d\udd1e Show"," NSFW"))),a.a.createElement("div",{className:"tickers"},h.filter((function(e){return!e.isNsfw||l})).map((function(e){return a.a.createElement(p,{key:e.id,timer:e,target:n})})))),a.a.createElement("div",{className:"footer"},"Got something to add? Send us a PR! ",a.a.createElement("a",{href:"https://github.com/jerometwell/sinceyougothere"},"GitHub")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.eb6bafb1.chunk.js.map