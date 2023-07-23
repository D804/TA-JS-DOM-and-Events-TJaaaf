let inputElm= document.querySelector("input");
let root = document.querySelector("ul");
let activeButton  = "all";
let all    = document.querySelector(".all");
let active    = document.querySelector(".active");
let completed   = document.querySelector(".completed");
let clear    = document.querySelector(".clear");
let allTodo = [];
function handler(event){
    if(event.keyCode === 13 && event.target.value !="" ){
        allTodo.push({
            name:event.target.value,
            isDone:false,
        });
        event.target.value="";
        createUI();
    }
}
function handleDelete(event){
let id = event.target.dataset.id;
allTodo.splice(id,1);
createUI();
}
function handleToggle(event){
let id = event.target.dataset.id;
allTodo[id].isDone  = !allTodo[id].isDone;
createUI();
}
active.addEventListener("click",()=>{
    let notCompleted = allTodo.filter((todo)=> !todo.isDone);
   
    createUI(notCompleted);
    activeButton="active";
   
    updateActiveButton()
   
 
});
clear.addEventListener("click",()=>{
    allTodo = allTodo.filter((todo)=>!todo.isDone);
    createUI();
    updateActiveButton()
    
});
completed.addEventListener("click",()=>{
    let allCompleted = allTodo.filter((todo)=>todo.isDone);
    createUI(allCompleted);
    activeButton = "completed";
    updateActiveButton()

    

});
all.addEventListener("click",()=>{
    createUI();
    activeButton  ="all";
    updateActiveButton()
    

});


function createUI(data= allTodo){
    root.innerHTML = "";
    data.forEach((todo,index)=>{
        let li  =document.createElement("li");
        let input = document.createElement("input");
        input.type ="checkbox";
        input.checked = todo.isDone;
        input.addEventListener("click",handleToggle);
        input.setAttribute("data-Id",index);
        let p = document.createElement("p");
        p.innerText = todo.name;
        let span = document.createElement("span");
        span.innerText= "X";
        span.addEventListener("click",handleDelete);
        span.setAttribute("data-Id",index);
        li.append(input,p,span);
        root.append(li);
    })
}
function updateActiveButton(btn = activeButton){
    all.classList.remove("selected");
    active.classList.remove("selected");
    completed.classList.remove("selected");
    clear.classList.remove("selected");
    if(btn === "all"){
        all.classList.add("selected");
    } 
    if(btn === "active"){
        active.classList.add("selected");
    }
    if(btn === "completed"){
        completed.classList.add("selected");
    }
   
    
 }
updateActiveButton();
inputElm.addEventListener("keyup",handler);