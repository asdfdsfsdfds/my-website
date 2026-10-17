const main=document.querySelector("#main");
const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");
const b6=document.querySelector("#b6");
let state=0;

b1.addEventListener("click", ()=> {
  main.src="홈화면";
  state=1;
  zero();
            }
)

b2.addEventListener("click", ()=> {
  main.src="지도";
  state=2
  zero();
            }
)
  
b3.addEventListener("click", ()=> {
  main.src="목적지-차량";
  state=3
  b4.style.left="700px";
  b4.style.top="340px";
  b6.style.left="700px";
  b6.style.top="440px";
            }
) 

b4.addEventListener("click", ()=> {
  main.src="목적지-세부";
  state=4
  zero();
            }
)
  
b5.addEventListener("click", ()=> {
  main.src="홈화면";
  state=5
  zero();
            }
)  

b6.addEventListener("click", ()=> {
  main.src="목적지-세부";
  state=5
  zero();
            }
)

function zero() {
  b4.style.left="0px";
  b4.style.top="0px";
  b6.style.left="0px";
  b6.style.top="0px";
}
