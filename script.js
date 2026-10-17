const main=document.querySelector("#main");
const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");
let state=0;

b1.addEventListener("click", ()=> {
  main.src="홈화면";
  state=1;
            }
)

b2.addEventListener("click", ()=> {
  main.src="지도";
  state=2
            }
)
  
b3.addEventListener("click", ()=> {
  main.src="목적지-차량";
  state=3
  b4.style.left=700;
  b4.style.top=300;
            }
) 

b4.addEventListener("click", ()=> {
  main.src="목적지-세부";
  state=4
            }
)
  
b5.addEventListener("click", ()=> {
  main.src="홈화면";
  stete=5
            }
)
