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
  b4.style.left=700;
  b4.style.top=340;
  b6.style.left=700;
  b6.style.top=640;
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
  stete=5
  zero();
            }
)  

b6.addEventListener("click", ()=> {
  main.src="목적지-세부";
  stete=5
  zero();
            }
)

function zero {
  b4.style.left=0;
  b4.style.top=0;
  b6.style.left=0;
  b6.style.top=0;
}
