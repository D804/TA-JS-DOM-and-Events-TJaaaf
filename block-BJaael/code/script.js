let h2=document.querySelector("h2");
let boxContainer=document.querySelector(".box")
boxContainer.addEventListener("mousemove",()=>{
    let color="#";
    color+=Math.random().toString(16).slice(2,8);
    boxContainer.style.backgroundColor=color;
    h2.innerText=color.slice(1,3);
})