let btn=document.querySelector(".banner");
let btn2=document.querySelector(".banner");
let box1=document.querySelector(".box first");
let box2=document.querySelector(".box second");
btn.addEventListener("click",function(){
    let color="#";
    color+=Math.random().toString(16).slice(2,8);
    box1.style.backgroundcolor=color;
    console.log(color);
});
btn2.addEventListener("mousemove",function(){
    let color="#";
    color+=Math.random().toString(16).slice(2,8);
    box2.style.backgroundcolor=color;
    console.log(color);
});
console.dir()



