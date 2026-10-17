const main=document.querySelector("#main");
const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");
const b6=document.querySelector("#b6");
const b7=document.querySelector("#b7");
const b8=document.querySelector("#b8");
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
  b7.style.left="700px";
  b7.style.top="400px";
  b8.style.left="800px";
  b8.style.top="400px";
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
  b5.style.left="740px";
  b5.style.top="390px";
            }
)
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
