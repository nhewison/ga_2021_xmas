(this["webpackJsonpadvent-2021"]=this["webpackJsonpadvent-2021"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),m=n.n(o),a=n(4),i=n.n(a),r=(n(9),n(3)),c=(n(10),n(0)),s=function(e){var t=e.onDoorClick,n=e.number;return Object(c.jsx)("div",{className:"closed-door",onClick:function(){return t()},children:Object(c.jsx)("div",{className:"door-number",children:n})})},l=(n(12),function(e){var t=e.onDoorClick,n=e.image,o=e.number;return Object(c.jsxs)("div",{className:"open-door",onClick:function(){return t()},children:[Object(c.jsx)("img",{alt:"",src:n}),Object(c.jsx)("div",{className:"open-number",children:o})]})}),u=(n(13),function(e){var t=e.data,n=e.onClick;return Object(c.jsx)("div",{className:"door-details-container",onClick:n,children:Object(c.jsxs)("div",{className:"door-details",children:[Object(c.jsx)("img",{alt:"image-here",src:t.img}),Object(c.jsx)("p",{className:"modal-quote",children:t.text}),Object(c.jsx)("p",{className:"modal-name",children:t.name})]})})}),p=function(e){var t=e.data,n=Object(o.useState)(!1),m=Object(r.a)(n,2),a=m[0],i=m[1],p=Object(o.useState)(!1),g=Object(r.a)(p,2),h=g[0],d=g[1],b=(new Date).getDate()-1;Object(o.useEffect)((function(){b>=t.number&&i(!0)}),[]);var j=function(){return d(!h)};return Object(c.jsxs)(c.Fragment,{children:[!a&&Object(c.jsx)(s,{onDoorClick:function(){return i(!a)},number:t.number}),a&&Object(c.jsx)(l,{onDoorClick:j,image:t.img,number:t.number}),h&&Object(c.jsx)(u,{data:t,onClick:j})]})},g=[{number:"2",img:"https://i.imgur.com/vWVhicm.png",text:'"Happy Holidays, Team! Thanks for another great year together :) Can\u2019t wait to tackle 2022 with you all. Much love!"',name:"- JDB"},{number:"5",img:"https://imgur.com/F5bEjR0.png",text:"\u201cMerry Christmas! Woo-hoo!! Where them doughnuts?!\u201d",name:"- Bryce"},{number:"1",img:"https://i.imgur.com/sKMijDj.jpg",text:' "We woof you a merry holidays!"',name:"- Poppy and Chip"},{number:"7",img:"https://i.imgur.com/CUK7RHJ.png",text:'"Goodbyes are never easy, we said farewell to an amazing colleague and friend.',name:"- Fiona W"},{number:"17",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"8",img:"https://i.imgur.com/cRu9AKN.png",text:'"Who wore it best?"',name:"- Stripe edition"},{number:"13",img:"https://i.imgur.com/fuGaZZA.png",text:'"Spoooooky season, Haloween 2021 and the team brought the looks..."',name:"- GA Halloween"},{number:"10",img:"https://i.imgur.com/B1dBKHF.jpg",text:'"Hug your homies in 2022"',name:"- Nat and Ellen"},{number:"3",img:"https://i.imgur.com/FkZFisb.jpg",text:'"Our latest team member arrived in January 2021."',name:"- Astrid and Leo"},{number:"11",img:"https://i.imgur.com/IzeaGxJ.png",text:'"Who wore it best?"',name:"- Delivery Team"},{number:"22",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"9",img:"https://i.imgur.com/pepJKAs.png",text:'"\u201cAdmissions was out of this world\u201d" ',name:"- Team admish"},{number:"12",img:"https://i.imgur.com/lcdP4S1.png",text:'"So good to RECONNECT with everyone at our team on- site.\xa0 Even three of our team from Paris came over, plus some who attended virtually."',name:"- #EnterpriseEurope"},{number:"19",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"14",img:"https://i.imgur.com/TxzERWN.png",text:'"Another incredible effort made for Haloween 2021!"',name:"- UK Delivery Team"},{number:"24",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"15",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"4",img:"https://i.imgur.com/czDaOuY.jpg",text:'"Stay woke"',name:"- Gabe and Gayle"},{number:"16",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"20",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"18",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"6",img:"https://i.imgur.com/pxR6jVr.jpg",text:'"Who can forget Caseys strangest item in her house?"',name:"- Casey and the painting"},{number:"21",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"},{number:"23",img:"https://monkeypuzzlemuswellhill.co.uk/wp-content/uploads/2017/08/coming-soon.jpg",text:'"Check back later"',name:"- TBC"}];n(14);var h=function(){return console.log("\n  _____          \n / ____|   /\\    \n| |  __   /  \\   \n| | |_ | / /\\ \\  \n| |__| |/ ____ \\ \n \\_____/_/    \\_\\ \n\n made by NH 2021.\n  "),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("img",{alt:"ga-logo",src:"https://i.imgur.com/4fSEBUq.png"}),Object(c.jsx)("p",{children:"UK Team Advent Calendar 2021 "})]}),Object(c.jsx)("div",{className:"calendar",children:g.map((function(e,t){return Object(c.jsx)(p,{data:e},t)}))}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/nhewison/",children:" made by NH 2021. "})})]})};i.a.render(Object(c.jsx)(m.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.aadaf334.chunk.js.map