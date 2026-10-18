const main=document.querySelector("#main");
const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");
const b6=document.querySelector("#b6");
const b7=document.querySelector("#b7");
const b8=document.querySelector("#b8");
const b9=document.querySelector("#b9");
const img = document.querySelector("#img");
let state=0;

b1.addEventListener("click", ()=> {
  main.src="홈화면";
  zero();
            }
)

b2.addEventListener("click", ()=> {
  main.src="지도";
  zero();
            }
)
  
b3.addEventListener("click", ()=> {
  main.src="목적지-차량";
  b4.style.left="700px";
  b4.style.top="340px";
  b6.style.left="700px";
  b6.style.top="460px";
            }
) 

b4.addEventListener("click", ()=> {
  main.src="목적지-세부";
  zero();
            }
)
  
b5.addEventListener("click", ()=> {
  main.src="집으로 갑니다.";
  zero();
  b7.style.left="550px";
  b7.style.top="365px";
  b8.style.left="650px";
  b8.style.top="365px";
            }
)  

b6.addEventListener("click", ()=> {
  main.src="목적지-세부";
  zero();
  b5.style.left="740px";
  b5.style.top="390px";
            }
)

b7.addEventListener("click", ()=> {
  main.src="목적지-세부";
  zero();
  b5.style.left="740px";
  b5.style.top="390px";
            }
)

b8.addEventListener("click", ()=> {
  main.src="목적지-세부";
  zero();
  img.src = "메세지";
  b5.style.left="740px";
  b5.style.top="390px";
  b9.style.left="700px";
  b9.style.top="130px";
  img.style.left="540px";
  img.style.top="120px";
  state=1
            }
)

b9.addEventListener("click", ()=> {
  if(state==1) {
    img.src="111";
    b9.style.left="720px";
    b9.style.top="110px";
    img.style.left="0px";
    img.style.top="0px";
    state=0;
  } else {
    main.src="알림";
  }
})
function zero() {
  b4.style.left="0px";
  b4.style.top="0px";
  b5.style.left="0px";
  b5.style.top="0px";
  b6.style.left="0px";
  b6.style.top="0px";
  b7.style.left="0px";
  b7.style.top="0px";
  b8.style.left="0px";
  b8.style.top="0px";
}
