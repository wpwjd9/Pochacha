(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{9318:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),s=n(2648),l=n(5391),i=n(6654);function o(e){let{currentCell:t,sec:n}=e;return(0,r.jsxs)("div",{children:["두더지 게임"===t&&(0,r.jsx)(s.default,{}),"훈민정음"===t&&(0,r.jsx)(l.default,{}),"라이어 게임"===t&&(0,r.jsx)(i.default,{})]})}},6654:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),s=n(7294),l=n(5313),i=n(9417),o=n.n(i);function c(){let[e,t]=(0,s.useState)(0),n=(0,s.useRef)(14),i=(0,s.useRef)(null),[c,a]=(0,s.useState)(null);return(0,s.useEffect)(()=>(i.current=setInterval(()=>{t(n.current%60),n.current-=1},1e3),()=>clearInterval(i.current)),[]),(0,s.useEffect)(()=>{n.current<=-1&&(clearInterval(i.current),a(null))}),(0,s.useEffect)(()=>{setTimeout(()=>{a(2)},3e3),setTimeout(()=>{a(3)},6e3),setTimeout(()=>{a(4)},9e3),setTimeout(()=>{a(5)},12e3),setTimeout(()=>{a(null)},14e3)},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{style:{textAlign:"center",position:"absolute",top:"10%",left:"50%",transform:"translate(-50%, -10%)"},children:[(0,r.jsx)("img",{src:"/라이어_로고.png",alt:"Liar game Title",style:{width:"300px",height:"100px"}}),(0,r.jsxs)("div",{className:o().gameContainer,children:[1===c&&(0,r.jsxs)("h2",{children:["주제를 고르고",(0,r.jsx)("br",{}),"한 명씩 제시어를 확인합니다."]}),2===c&&(0,r.jsxs)("h2",{style:{textAlign:"center"},children:["제시어를 확인한 뒤, 순서를 정해",(0,r.jsx)("br",{}),"한 명씩 제시어를 설명합니다."]}),3===c&&(0,r.jsxs)("h2",{style:{textAlign:"center"},children:["라이어가 아닌 사람은",(0,r.jsx)("br",{}),"라이어에게 제시어가 들키지 않도록",(0,r.jsx)("br",{}),"선을 지켜가면서 설명해야 합니다."]}),4===c&&(0,r.jsxs)("h2",{style:{textAlign:"center"},children:["그리고 라이어는 정체가 들키지 않도록",(0,r.jsx)("br",{}),"거짓말을 하면 됩니다."]}),5===c&&(0,r.jsx)("h2",{children:"자 이제 게임을 시작해볼까요!"}),null===c&&(0,r.jsx)(l.default,{})]})]})})}},373:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),s=n(7294),l=n(1649),i=n(8e3),o=n.n(i),c=n(4593),a=n(2825),u=n(1364),d=n(5980),m=n.n(d);let p=()=>({row:Math.floor(3*Math.random()),col:Math.floor(3*Math.random())});function x(e){let{sec:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(h,{sec:t})})}function h(e){let{sec:t}=e,n=(0,l.v9)(e=>e.room.currentRoomId),i=(0,l.v9)(e=>e.player),[d,x]=(0,s.useState)({}),[h,j]=(0,s.useState)(0),[_,g]=(0,s.useState)([]),[v,y]=(0,s.useState)(!1),[S,C]=(0,s.useState)({row:0,col:0}),[b,I]=(0,s.useState)(-1),[w,N]=(0,s.useState)("ready"),[B,G]=(0,s.useState)(null),k=()=>{d.current=c.L.over(()=>{let e=new(o())("http://localhost:80/ws");return e})},T=()=>{d.current.connect({},()=>{d.current.subscribe("/topic/mini/mole/".concat(n),e=>{let t=JSON.parse(e.body);console.log("두더지 게임 집계"),console.log(t),t.finish&&(N("done"),G(t.result))})})};(0,s.useEffect)(()=>{k(),T()},[]);let E=e=>{if(_[e]){j(e=>e+1),y(!0),C(_[e]);let t=[..._];t[e]=null,g(t),setTimeout(()=>{y(!1)},1e3)}};return(0,s.useEffect)(()=>{let e=setInterval(()=>{let e=[,,,].fill(null).map(()=>p());g(e)},1e3);return()=>clearInterval(e)},[]),(0,s.useEffect)(()=>{setTimeout(()=>{N("go")},3e3),setTimeout(()=>{N("game")},5e3)},[]),(0,r.jsxs)("div",{style:{textAlign:"center",position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -20%)"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/두더지_로고.png",style:{marginTop:"20px",width:"400px"}})}),"ready"===w&&(0,r.jsx)(a.default,{}),"go"===w&&(0,r.jsx)(u.default,{}),"game"===w&&t>0&&(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("h3",{style:{marginBottom:"20px"},children:[h,"마리를 잡았어요! ",t,"초 남았습니다!"]}),(0,r.jsxs)("div",{className:m().container,children:[_.map((e,t)=>e&&(0,r.jsx)("img",{src:"/두더지_업.png",onClick:()=>E(t),style:{position:"absolute",top:"".concat(33.33*e.row,"%"),left:"".concat(33.33*e.col,"%"),width:"150px",height:"150px",cursor:"pointer"}},t)),v&&(0,r.jsx)("img",{src:"/두더지_망치후.png",style:{position:"absolute",top:"".concat(33.33*S.row,"%"),left:"".concat(33.33*S.col,"%"),width:"150px",height:"150px"}})]})]}),"game"===w&&t<=0&&(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("h3",{style:{marginBottom:"20px"},children:[h,"마리 잡기 성공!"]}),(0,r.jsx)("h3",{children:"화면을 클릭해 친구들의 점수를 확인하세요!"}),(0,r.jsx)("div",{className:m().end,children:(0,r.jsx)("img",{className:m().bounceInBottom,src:"/두더지_O.png",onClick:()=>{let e={playerId:i.currentPlayerId,score:h};d.current?d.current.send("/mini/mole/".concat(n),{},JSON.stringify(e)):alert("소켓 연결 실패!")}})})]}),"done"===w&&null!=B&&(0,r.jsx)(f,{result:B})]})}function f(e){let t=(0,l.v9)(e=>e.players.tmpPlayers),n=e.result;return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("h2",{style:{marginBottom:"20px"},children:"순위 결과"}),(0,r.jsx)("div",{className:m().resultContainer,children:(0,r.jsx)("div",{className:m().scoreBoard,children:n.map((e,n)=>(0,r.jsxs)("div",{className:m().resultRow,children:[t[e.playerId].nickname,(0,r.jsx)("span",{children:":"}),(0,r.jsx)("span",{style:{fontSize:"xx-large"},children:e.score})]},n))})})]})}},1364:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(5980),l=n.n(s);function i(){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("h3",{style:{marginBottom:"20px"},children:"30초 시작합니다"}),(0,r.jsx)("div",{className:l().container,children:(0,r.jsx)("img",{src:"/두더지_시작.png",style:{width:"450px"}})})]})})}},2825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(5980),l=n.n(s);function i(){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("h3",{style:{marginBottom:"20px"},children:"두더지 잡기 게임"}),(0,r.jsx)("div",{className:l().container,children:(0,r.jsx)("img",{src:"/두더지_준비.png",style:{width:"450px"}})})]})})}},2648:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),s=n(7294),l=n(373);function i(){let[e,t]=(0,s.useState)(0),n=(0,s.useRef)(34),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>(i.current=setInterval(()=>{t(n.current%60),n.current-=1},1e3),()=>clearInterval(i.current)),[]),(0,s.useEffect)(()=>{n.current<=-1&&(console.log("시간 초과"),clearInterval(i.current))}),(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{sec:e})})}},2698:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),s=n(7294),l=n(1649),i=n(1163),o=n(6049),c=n.n(o),a=n(6154),u=n(8e3),d=n.n(u),m=n(4593),p=n(3765),x=n(2515);function h(e){let{sec:t,resetSec:n}=e,o=(0,l.I0)(),[u,h]=(0,s.useState)(!1),[f,j]=(0,s.useState)(!1),[_,g]=(0,s.useState)(""),[v,y]=(0,s.useState)([]),[S]=(0,s.useState)({}),C=(0,l.v9)(e=>e.room.currentRoomId),b=(0,l.v9)(e=>e.players.tmpPlayers),I=(0,l.v9)(e=>e.spell.currentPlayerId),w=(0,l.v9)(e=>e.player.currentPlayerId),{transcript:N,finalTranscript:B,listening:G,resetTranscript:k,browserSupportsSpeechRecognition:T}=(0,x.x6)(),E=(0,i.useRouter)(),M=()=>{let e=!1;for(let t of v)if(N==t){j("이미 입력된 단어입니다."),e=!0;return}e||(S.current?S.current.send("/mini/spell/confirm/".concat(C),{},JSON.stringify({word:N.trim()})):j("소켓이 연결되지 않았습니다."))},A=()=>{(0,a.Z)({url:"https://ohogame.shop/api/game/mini/spell",headers:{Accept:"application/json","Content-type":"application/json;charset=UTF-8"},method:"POST",data:{id:C}}).then(e=>{let t=e.data;k(),o((0,p.Vn)({id:t.currentPlayerId}));let n=t.firstWord+t.secondWord;g(n),o((0,p.t)(n))}).catch(e=>{e.response?E.push({pathname:"/exception",query:{msg:e.response.data}}):console.log(e)})},O=()=>{S.current=m.L.over(()=>{let e=new(d())("https://ohogame.shop/ws");return e})},P=()=>{S.current.connect({},()=>{S.current.subscribe("/topic/mini/spell/".concat(C),async e=>{var t=JSON.parse(e.body);k(),t.correct?([...v,t.inputWord],y(e=>{let n=[...e,t.inputWord];return n}),o((0,p.Vn)({id:t.currentPlayerId})),n()):j(t.inputWord+" : "+t.msg)})})};return(0,s.useEffect)(()=>{O(),P(),A()},[]),(0,s.useEffect)(()=>{setTimeout(()=>{h(!0)},5e3),setTimeout(()=>{j(!1)},3e3)}),(0,s.useEffect)(()=>{N.trim().length>=2&&I==w&&(x.ZP.stopListening(),setTimeout(()=>{M()},500))},[N]),(0,s.useEffect)(()=>{I==w?x.ZP.startListening({continuous:!0}):x.ZP.stopListening()}),(0,r.jsxs)(r.Fragment,{children:[!1==u?(0,r.jsx)("div",{className:c().modalContainer,children:(0,r.jsxs)("div",{className:c().modalContent,children:[(0,r.jsx)("p",{children:"10초 안에 제시된 초성과 일치하는 단어를 입력하세요."}),(0,r.jsx)("p",{children:"*두 글자의 단어만 입력 가능합니다.*"}),(0,r.jsxs)("h4",{children:["제시된 초성: ",_]})]})}):null,f&&(0,r.jsx)("div",{className:c().modalContainer2,children:(0,r.jsx)("div",{className:c().modalContent2,children:(0,r.jsx)("p",{children:f})})}),(0,r.jsxs)("div",{className:c().wrapper,children:[(0,r.jsxs)("div",{className:c().upperContainer,children:[(0,r.jsxs)("div",{style:{fontSize:"25px"},children:[b[I]&&b[I].nickname," 님의 차례입니다."," ",t,"초 남았습니다."]}),I==w&&(0,r.jsx)("input",{type:"text",placeholder:"단어를 입력하세요",value:N,className:c().inputContainer}),G&&(0,r.jsx)("span",{children:"음성 입력 중.."}),(0,r.jsx)("button",{type:"button",onClick:M,style:{marginLeft:"20px"},children:"제출"}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/초성_로고.png",style:{width:"450px"}})})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:c().redBlock,children:[(0,r.jsx)("img",{src:"/초성_세종대왕_기본.png",style:{position:"absolute",left:"60px",width:"350px",marginTop:"-300px"}}),(0,r.jsx)("div",{className:c().miniBlock1}),(0,r.jsx)("div",{className:c().miniBlock2}),(0,r.jsxs)("h3",{style:{fontFamily:"ChosunCentennial",position:"absolute",left:"170px",zIndex:"1"},children:["초성은 ",_]}),(0,r.jsx)("img",{src:"/초성_두루마리.png",style:{position:"absolute",width:"700px",left:"-130px",marginBottom:"-210px",zIndex:"0"}}),(0,r.jsx)("div",{className:c().wordsContainer,children:v.map((e,t)=>(0,r.jsx)("div",{className:c().word,style:{position:"absolute",marginLeft:"20px",marginTop:"195px",fontFamily:"ChosunCentennial",left:"".concat(t%8*50,"px"),top:"".concat(30*Math.floor(t/8),"px")},children:e},t))}),(0,r.jsx)("h1",{children:t}),(0,r.jsxs)("label",{children:["단어를 입력하세요:",(0,r.jsx)("input",{type:"text",value:N})]}),(0,r.jsx)("button",{type:"button",onClick:M,children:"제출"})]})]})]})}},5391:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),s=n(7294),l=n(1649),i=n(1163),o=n(6049),c=n.n(o),a=n(2698);function u(){let[e,t]=(0,s.useState)(!0),[n,o]=(0,s.useState)(0),u=(0,s.useRef)(30),d=(0,s.useRef)(null),m=(0,l.v9)(e=>e.players.tmpPlayers),p=(0,l.v9)(e=>e.spell.currentPlayerId);return(0,s.useEffect)(()=>(d.current=setInterval(()=>{o(u.current%60),u.current-=1},1e3),()=>clearInterval(d.current)),[]),(0,s.useEffect)(()=>{u.current<=-1&&(console.log("시간 초과"),t(!1),clearInterval(d.current))}),(0,r.jsx)("div",{className:c().topSpellCompo,children:e?(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{sec:n,resetSec:()=>{u.current=30,o(30)}})}):(0,r.jsx)(function(){return(0,i.useRouter)(),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:c().gameOver,children:[(0,r.jsx)("img",{src:"/초성_게임오버.png"}),(0,r.jsxs)("h1",{children:["'",m[p].nickname,"' 님의 패배입니다."]})]})})},{})})}},5980:function(e){e.exports={container:"MoleGame_container__Olf6x",end:"MoleGame_end__JHzgf",slideInEllipticBottomFwd:"MoleGame_slideInEllipticBottomFwd__ualx1","slide-in-elliptic-bottom-fwd":"MoleGame_slide-in-elliptic-bottom-fwd__cBDOJ",bounceInBottom:"MoleGame_bounceInBottom__DhSyG","bounce-in-bottom":"MoleGame_bounce-in-bottom__2zrZm",resultContainer:"MoleGame_resultContainer__3OTVA",scoreBoard:"MoleGame_scoreBoard__vtWB1",resultRow:"MoleGame_resultRow__3WuS4"}},6049:function(e){e.exports={topSpellCompo:"SpellGame_topSpellCompo__JGsgr",wrapper:"SpellGame_wrapper__MIls_",upperContainer:"SpellGame_upperContainer__r5ZXB",inputContainer:"SpellGame_inputContainer__tYT5x",redBlock:"SpellGame_redBlock__0tDAq",miniBlock1:"SpellGame_miniBlock1__YvVqj",miniBlock2:"SpellGame_miniBlock2__tDl_z",modalContainer:"SpellGame_modalContainer__cTsAY",modalContainer2:"SpellGame_modalContainer2__eWcOa",modalContent:"SpellGame_modalContent__oIJCC",fadeIn:"SpellGame_fadeIn__821fj",modalContent2:"SpellGame_modalContent2__oNSn8",logoImg:"SpellGame_logoImg__QrZCm",gameOver:"SpellGame_gameOver__hKMEH"}}}]);