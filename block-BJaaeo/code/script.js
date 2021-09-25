let root=document.querySelector(".calculation");
let display=document.querySelector(".display");
 function handler(txt){
     display.innerText=txt;

 }
root.addEventListener("click",function(event){
  
    let text=event.target.innerText;
    console.log(text);
    handler(text);

   });