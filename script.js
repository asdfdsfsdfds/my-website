const main=document.querySelector("#main");
const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");

b1.addEventListener("click", ()=> {
  main.src="홈화면";
            }
)

b2.addEventListener("click", ()=> {
  main.src="지도";
            }
)
  
b3.addEventListener("click", ()=> {
  main.src="목적지-차량";
            }
) 

b4.addEventListener("click", ()=> {
  main.src="목적지-세부";
            }
)
  
b5.addEventListener("click", ()=> {
  main.src="홈화면";
            }
)
