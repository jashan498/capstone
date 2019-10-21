(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(94)},52:function(e,t,a){},91:function(e,t){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),i=(a(48),a(50),a(52),a(42)),c=a(1),l=a(2),u=a(4),h=a(3),m=a(5),d=function(){return r.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top navbarMain"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{href:"."},r.a.createElement("h2",{style:{color:"white"}},"Wizzard's Chess"))),r.a.createElement("a",{href:"https://jashansraw.me/single-player-mode/"},r.a.createElement("p",{className:"navText nav ml-auto font-weight-bold"},"Single Player Mode"))))},p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).highlight=function(e){return e?"highlight ":""},a.check=function(e){return e?"check ":""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:this.check(this.props.check)+this.highlight(this.props.high)+"square "+this.props.shade,style:this.props.style,onClick:function(){return e.props.handleClick(e.props.id)}})}}]),t}(n.Component),f=function e(t,a){Object(c.a)(this,e),this.player=t,this.style={backgroundImage:"url('"+a+"')"}},b=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMovePossible",value:function(e,t){return e-9===t||e-8===t||e-7===t||e+1===t||e+9===t||e+8===t||e+7===t||e-1===t}},{key:"getPath",value:function(e,t){return[]}}]),t}(f),v=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMovePossible",value:function(e,t){var a=e%8,n=8-a;return Math.abs(e-t)%9===0||Math.abs(e-t)%7===0||Math.abs(e-t)%8===0||t>=e-a&&t<e+n}},{key:"getPath",value:function(e,t){var a,n,r,s=[];e>t?(a=t,n=e):(a=e,n=t),Math.abs(e-t)%8===0?(r=8,a+=8):Math.abs(e-t)%9===0?(r=9,a+=9):Math.abs(e-t)%7===0?(r=7,a+=7):(r=1,a+=1);for(var o=a;o<n;o+=r)s.push(o);return s}}]),t}(f),k=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg":"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMovePossible",value:function(e,t){return Math.abs(e-t)%9===0||Math.abs(e-t)%7===0}},{key:"getPath",value:function(e,t){var a,n,r,s=[];e>t?(a=t,n=e):(a=e,n=t),Math.abs(e-t)%9===0?(r=9,a+=9):(r=7,a+=7);for(var o=a;o<n;o+=r)s.push(o);return s}}]),t}(f),w=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMovePossible",value:function(e,t){return e-17===t||e-10===t||e+6===t||e+15===t||e-15===t||e-6===t||e+10===t||e+17===t}},{key:"getPath",value:function(){return[]}}]),t}(f),g=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMovePossible",value:function(e,t){var a=e%8,n=8-a;return Math.abs(e-t)%8===0||t>=e-a&&t<e+n}},{key:"getPath",value:function(e,t){var a,n,r,s=[];e>t?(a=t,n=e):(a=e,n=t),Math.abs(e-t)%8===0?(r=8,a+=8):(r=1,a+=1);for(var o=a;o<n;o+=r)s.push(o);return s}}]),t}(f),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg":"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"))).initialPos=[[48,49,50,51,52,53,54,55],[8,9,10,11,12,13,14,15]],a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"isMovePossible",value:function(e,t,a){if(1===this.player){if(t===e-8&&!a||t===e-16&&-1!==this.initialPos[0].indexOf(e))return!0;if(a&&(t===e-9||t===e-7))return!0}else if(2===this.player){if(t===e+8&&!a||t===e+16&&-1!==this.initialPos[1].indexOf(e))return!0;if(a&&(t===e+9||t===e+7))return!0}return!1}},{key:"getPath",value:function(e,t){return t===e-16?[e-8]:t===e+16?[e+8]:[]}}]),t}(f),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).renderSquare=function(e,t){return r.a.createElement(p,{key:e,id:e,shade:t,high:e===a.props.source?1:0,check:a.props.chessBoard[e]instanceof b&&a.props.chessBoard[e].player===a.props.underCheck?1:0,style:a.props.chessBoard[e]?a.props.chessBoard[e].style:null,handleClick:a.props.handleClick})},a.buildBoard=function(){for(var e=[],t=0;t<8;t++){for(var n=[],s=0;s<8;s++){var o=0===(1&(t^s))?"square-white":"square-black";n.push(a.renderSquare(8*t+s,o))}e.push(r.a.createElement("div",{key:t,className:"board-row"},n))}if(2===a.props.player){for(var i=[],c=7;c>=0;c--)i.push(e[c]);return i}return e},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"board"},this.buildBoard())}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.show?"modal display-block":"modal display-none";return r.a.createElement("div",{className:e},r.a.createElement("section",{className:"modal-main"},r.a.createElement("span",{className:"close",onClick:this.props.handleCross},"\xd7"),r.a.createElement("h1",{className:"mtext"},this.props.winner," wins!"),r.a.createElement("button",{className:"btn btn-primary mbutton",onClick:this.props.handleClose},"Rematch")))}}]),t}(n.Component);function O(){for(var e=Array(64).fill(null),t=8;t<16;t++)e[t]=new y(2),e[t+40]=new y(1);return e[4]=new b(2),e[60]=new b(1),e[3]=new v(2),e[59]=new v(1),e[0]=new g(2),e[7]=new g(2),e[56]=new g(1),e[63]=new g(1),e[1]=new w(2),e[6]=new w(2),e[57]=new w(1),e[62]=new w(1),e[2]=new k(2),e[5]=new k(2),e[58]=new k(1),e[61]=new k(1),e}var C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={userName:""},a.onSubmit=function(e){e.preventDefault(),a.props.onclick(a.state.userName)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:this.onSubmit},r.a.createElement("h2",{className:"starth2"},"Join/Create Game"),r.a.createElement("p",null,r.a.createElement("input",{placeholder:"Enter Code...",className:"startInput",onChange:function(t){return e.setState({userName:t.target.value})}})),r.a.createElement("p",{className:"sline"},"Share this code to start playing"),r.a.createElement("button",{type:"submit",className:"startButton"},"Enter Game")))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).lowerText=function(){return"Code to join this Game: "},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.show?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrap-loader"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"box"}),r.a.createElement("div",{className:"box"}),r.a.createElement("div",{className:"box"}),r.a.createElement("div",{className:"box"}),r.a.createElement("div",{className:"wrap-text"},r.a.createElement("div",{className:"text"},r.a.createElement("span",null,"W"),r.a.createElement("span",null,"A"),r.a.createElement("span",null,"I"),r.a.createElement("span",null,"T"),r.a.createElement("span",null,"I"),r.a.createElement("span",null,"N"),r.a.createElement("span",null,"G"),r.a.createElement("span",null,"...")))),r.a.createElement("div",{className:"loader-text"},"Waiting for other Player"),r.a.createElement("div",{className:"loader-text"},r.a.createElement("span",null,this.lowerText()," ",r.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},this.props.roomName))))):null}}]),t}(n.Component),B=a(10),M=a(41),S=a.n(M)()("https://salty-refuge-59199.herokuapp.com"),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={chessBoard:O(),player:null,source:-1,kings:[60,4],underCheck:-1,turn:1,winner:null,show:!1,joinedRoom:!1,showLoading:!1,scoreBoard:[0,0]},a.enterGame=function(e){0===e.length?B.toast.error("Name should have atleast one character"):(S.emit("joinRoom",e.toLowerCase()),a.setState({joinedRoom:e.toLowerCase(),showLoading:!0}),console.log(e))},a.showModal=function(){a.setState({show:!0})},a.handleCross=function(){a.setState({show:!1})},a.rematch=function(){var e={chessBoard:O(),player:a.state.player,source:-1,kings:[60,4],underCheck:-1,turn:1,winner:null,show:!1},t=e.chessBoard,n=e.player,r=e.source,s=e.kings,o=e.underCheck,i=e.turn,c=e.winner,l=e.show;a.setState({chessBoard:t,player:n,source:r,kings:s,underCheck:o,turn:i,winner:c,show:l}),S.emit("rematch")},a.handleEmitClick=function(e){var t=e.source,n=e.dest,r=e.underCheck,s=e.turn,o=e.kings;console.log(s);var i=a.state.chessBoard;i[n]=i[t],i[t]=null,a.setState({chessBoard:i,underCheck:r,turn:s,kings:o})},a.handleClick=function(e){if(a.state.player===a.state.turn&&!a.state.winner)if(-1===a.state.source){var t=a.state.chessBoard[e];if(t){if(a.state.player!==t.player)return;a.setState({source:e})}}else{var n=a.state.chessBoard,r=a.state.source,s=n[r],o=n[e],c=s.isMovePossible(r,e),l=!1;if(s instanceof y){var u=o;c=s.isMovePossible(r,e,u),1===s.player&&e>=0&&e<=7?l=!0:2===s.player&&e>=56&&e<=63&&(l=!0)}if(c)if(!s.getPath(r,e).every(function(e){return null===n[e]})||o&&o.player===s.player)a.setState({source:-1},function(){S.emit("stateChanged",e)});else{var h=Object(i.a)(a.state.kings);s instanceof b&&(h[1===s.player?0:1]=e);var m=a.state.underCheck,d=1===s.player?2:1;n[e]=n[r],n[r]=null,l&&(n[e]=new v(s.player)),(m=a.checkKing(n,a.state.player,h[d-1])?d:-1)===a.state.player&&(a.checkKing(n,d,h[a.state.player-1])||(m=-1)),a.checkKing(n,d,h[a.state.player-1])&&(m=a.state.player);var p=r,f=m;r=-1,a.setState({chessBoard:n,source:r,kings:h,turn:d,underCheck:m},function(){S.emit("stateChanged",{source:p,dest:e,underCheck:f,turn:d,kings:h})})}else a.setState({source:-1},function(){S.emit("stateChanged",e)})}},a.checkKing=function(e,t,a){for(var n=!1,r=0;r<64;r++){if(null!==e[r]&&e[r].player===t&&(e[r].isMovePossible(r,a)||e[r]instanceof y))if(e[r]instanceof y)a!==r+9&&a!==r+7&&a!==r-9&&a!==r-7||(n=e[r].isMovePossible(r,a,e[a]));else if(e[r].getPath(r,a).every(function(t){return null===e[t]})){n=!0;break}}return n},a.renderTurn=function(){return 1===a.state.turn?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"white-dot turn"}),"\xa0",r.a.createElement("span",{className:"black-dot"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"white-dot"}),"\xa0",r.a.createElement("span",{className:"black-dot turn"}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;S.on("roomJoined",function(t){e.setState({player:t})}),S.on("stopLoading",function(){e.setState({showLoading:!1})}),S.on("stateChanged",function(t){e.handleEmitClick(t)}),S.on("loser",function(t){if(!e.state.winner){var a=e.state.scoreBoard;1===t?a[1]=a[1]+1:a[0]=a[0]+1;var n=1===t?"Black":"White";e.setState({winner:n,show:!0,scoreBoard:a})}}),S.on("roomFull",function(t){e.setState({joinedRoom:!1}),Object(B.toast)(t)}),S.on("rematch",function(){var t={chessBoard:O(),player:e.state.player,source:-1,kings:[60,4],underCheck:-1,turn:1,winner:null,show:!1},a=t.chessBoard,n=t.player,r=t.source,s=t.kings,o=t.underCheck,i=t.turn,c=t.winner,l=t.show;e.setState({chessBoard:a,player:n,source:r,kings:s,underCheck:o,turn:i,winner:c,show:l})}),S.on("oppDisconnected",function(){Object(B.toast)("Other player already left the game"),e.setState({joinedRoom:!1,scoreBoard:[0,0]})})}},{key:"componentDidUpdate",value:function(){var e=this.state.chessBoard.filter(function(e){return e instanceof b});if(!this.state.winner&&1===e.length){var t=this.state.scoreBoard,a=1===e[0].player?"White":"Black";"White"===a?t[0]=t[0]+1:t[1]=t[1]+1,this.setState({show:!0,winner:a,scoreBoard:t})}}},{key:"render",value:function(){return this.state.joinedRoom?this.state.showLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(N,{show:this.state.showLoading,roomName:this.state.joinedRoom})):r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(j,{show:this.state.show,handleClose:this.rematch,handleCross:this.handleCross,winner:this.state.winner}),r.a.createElement("nav",{className:"navbar navbarUnder"},r.a.createElement("span",{className:"scoreTurn"},r.a.createElement("h3",null,"Turn: ")),r.a.createElement("span",{className:"turnBoard"},this.renderTurn()),r.a.createElement("span",null,r.a.createElement("span",{className:"badge badge-pill badge-outline lb-lg"},this.state.scoreBoard[0]),r.a.createElement("span",null," - "),r.a.createElement("span",{className:"badge badge-pill badge-outline-dark  lb-lg"},this.state.scoreBoard[1]))),r.a.createElement(E,{chessBoard:this.state.chessBoard,source:this.state.source,underCheck:this.state.underCheck,handleClick:this.handleClick,player:this.state.player})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(B.ToastContainer,null),r.a.createElement(C,{onclick:this.enterGame}))}}]),t}(n.Component);o.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.462bbbc6.chunk.js.map