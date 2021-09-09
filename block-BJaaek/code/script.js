

let box1=document.querySelector(".first");

box1.addEventListener("click",function(){
    let color="#";
    color+=Math.random().toString(16).slice(2,8);
   box1.style.backgroundColor=color;
  
});

let box2=document.querySelector(".second");

box2.addEventListener("mousemove",function(){
    let color="#";
    color+=Math.random().toString(16).slice(2,8);
   box2.style.backgroundColor=color;
  
});



