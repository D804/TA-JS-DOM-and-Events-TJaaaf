let root= document.querySelectorAll(".flip-box");
root.forEach((box,index)=>{
    box.addEventListener("click",(event)=>{
        event.target.classList.remove("flip-box");
    });
});
