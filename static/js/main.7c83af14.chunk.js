(this.webpackJsonpfilmy=this.webpackJsonpfilmy||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/bg1.8c7bc256.png"},25:function(e,a,t){e.exports=t(64)},30:function(e,a,t){},31:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t.n(r),s=(t(30),t(2)),o=(t(31),t(6)),m=t.n(o),i=t(20),u=t(21),E=t(24),p=t(23),d=(t(49),function(e){Object(E.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-bar"},l.a.createElement("div",{className:"nav-logo"},l.a.createElement("a",{href:"index.html"},l.a.createElement("h1",{className:"my_logo"},"FilmyCanvas"))),l.a.createElement("div",{className:"nav-links"},l.a.createElement("ul",null,l.a.createElement("a",{href:"index.html"},l.a.createElement("li",null,"Demo1")),l.a.createElement("a",{href:"index.html"},l.a.createElement("li",null,"Demo2")),l.a.createElement("a",{href:"index.html"},l.a.createElement("li",null,"Demo3")))))}}]),t}(n.Component));t(50);var v=function(e){var a=e.handleInput,t=e.onKeySearch,n=e.search;return l.a.createElement("div",null,l.a.createElement("div",{className:"title_room"},l.a.createElement("h1",null,"Hello ",l.a.createElement("span",null,"Movie Lovers.")," Let's hope your"," ",l.a.createElement("span",null," Moviehunt")," ends here..."," "),l.a.createElement("h2",null,"Search for a ",l.a.createElement("span",null,"Movie"),"!!!!")),l.a.createElement("div",{className:"search-panel"},l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{type:"text",className:"search-input",placeholder:"Search Movie",onChange:a,onKeyPress:t}),l.a.createElement("a",{className:"search-btn",onClick:n,href:"#"},l.a.createElement("i",{className:"fas fa-search"})))))};t(51);var h=function(e){var a=e.searchResults,t=e.openPopup,n=e.errorMsg;return""!==n?l.a.createElement("section",{className:"results"},l.a.createElement("div",{className:"error"},l.a.createElement("span",null,n))):l.a.createElement("section",{className:"results"},a.map((function(e){return l.a.createElement("div",{className:"clearfix",onClick:function(){return t(e.imdbID)}},l.a.createElement("img",{className:"r_img",src:e.Poster,alt:"Image Not Available"}),l.a.createElement("div",{className:"r-details"},l.a.createElement("h2",{className:"r_title"},e.Title),l.a.createElement("h3",{className:"r_year"},"Year: ",e.Year," "),l.a.createElement("h3",{className:"r_type"},"Type: ",e.Type)))})))},f=(t(52),t(3)),g=t.n(f);var N=function(e){var a=e.movieData,t=e.modalIsOpen,n=e.setModalIsOpen;return l.a.createElement("div",{className:"clearfx",id:"info_container"},l.a.createElement(g.a,{isOpen:t,onRequestClose:function(){return n(!1)},className:"Modal",overlayClassName:"Overlay"},l.a.createElement("div",{className:"movie-details"},l.a.createElement("div",{className:"img-ratings"},l.a.createElement("img",{className:"movie_img",src:a.Poster,alt:"Image Not Availbale"}),l.a.createElement("div",{className:"ratings"},l.a.createElement("p",null,l.a.createElement("span",null,"Metascore: "),a.Metascore),l.a.createElement("p",null,l.a.createElement("span",null,"IMDB Rating: "),a.imdbRating),l.a.createElement("p",null,l.a.createElement("span",null,"IMDB Votes: "),a.imdbVotes))),l.a.createElement("div",{className:"basic_info"},l.a.createElement("p",null,l.a.createElement("span",null,"Title: "),a.Title),l.a.createElement("p",null,l.a.createElement("span",null,"Year: "),a.Year),l.a.createElement("p",null,l.a.createElement("span",null,"Rated: "),a.Rated),l.a.createElement("p",null,l.a.createElement("span",null,"Released: "),a.Released),l.a.createElement("p",null,l.a.createElement("span",null,"Runtime: "),a.Runtime),l.a.createElement("p",null,l.a.createElement("span",null,"Genre: "),a.Genre),l.a.createElement("p",null,l.a.createElement("span",null,"Director: "),a.Director),l.a.createElement("p",null,l.a.createElement("span",null,"Writer: "),a.Writer),l.a.createElement("p",null,l.a.createElement("span",null,"Actors: "),a.Actors),l.a.createElement("p",null,l.a.createElement("span",null,"Language: "),a.Language),l.a.createElement("p",null,l.a.createElement("span",null,"Awards: "),a.Awards),l.a.createElement("p",null,l.a.createElement("span",null,"Plot: "),a.Plot)),l.a.createElement("div",{className:"info-footer"},l.a.createElement("a",{className:"close-btn",id:"search",onClick:function(){return n(!1)}},l.a.createElement("div",null,"Close Window"))))))},b=t(22),y=t.n(b);g.a.setAppElement("#root");var O=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),i=o[0],u=o[1],E=Object(n.useState)({}),p=Object(s.a)(E,2),f=p[0],g=p[1],b=Object(n.useState)(),O=Object(s.a)(b,2),w=O[0],M=O[1],j=Object(n.useState)(!1),I=Object(s.a)(j,2),R=I[0],k=I[1],A="https://www.omdbapi.com/?apikey=39201518&",S=function(){void 0===t?console.log("No Input"):m()(A+"s="+t).then((function(e){var a=e.data;if(console.log(t),a.Error){u([]);M("Movie not Found.Try Again")}else{M("");var n=a.Search;u(n)}}))};return l.a.createElement("div",{className:"canvas"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("img",{className:"bg1",src:y.a,alt:"NA"}),l.a.createElement(d,null),l.a.createElement(v,{handleInput:function(e){var a=e.target.value;void 0===a?alert("Please enter a movie name"):r((function(){return a}))},search:S,onKeySearch:function(e){"Enter"===e.key&&S()}}),console.log(i),console.log(w),l.a.createElement(h,{searchResults:i,openPopup:function(e){m()(A+"i="+e).then((function(e){var a=e.data;console.log(a),g(a)})),console.log(f),k(!0)},errorMsg:w}),"undefined"!=typeof f.Title&&l.a.createElement(N,{movieData:f,modalIsOpen:R,setModalIsOpen:k})),l.a.createElement("footer",null,l.a.createElement("h3",null,"All Rights Reserved @FilmyCanvas")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.7c83af14.chunk.js.map