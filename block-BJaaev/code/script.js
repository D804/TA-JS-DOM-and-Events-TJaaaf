
let inputElm = document.querySelector("#todolist");
let root=document.querySelector("ul");
let allRoot=JSON.parse(localStorage.getItem("todos"))||[];
function handler(event){
    let value=event.target.value;
    if(event.keyCode=== 13 && value !==""){
        
        let todo={
            name:value,
            isDone:false,
        };
        allRoot.push(todo);
        event.target.value="";
        createUI(root,allRoot);
        localStorage.setItem("todos",JSON.stringify(allRoot));
        }

      
    };
   


function handleDelete(event){
    let id=event.target.dataset.id;
    allRoot.splice(id,1);
    localStorage.setItem("todos",JSON.stringify(allRoot));
    createUI(root,allRoot);

   
   
}
function handleTogle(event){
    let id=event.target.dataset.id;
    allRoot[id].isDone=!allRoot[id].isDone;
    localStorage.setItem("todos",JSON.stringify(allRoot));
    createUI(root,allRoot);

   
}

function createUI(data,rootElm){
    data.innerHTML="";
    rootElm.forEach((todo,index) => {
        
    
let li=document.createElement("li");
let input=document.createElement("input");
input.type= "checkbox";
input.addEventListener("input",handleTogle);
input.setAttribute("data-id",index);
input.checked=todo.isDone;

let p=document.createElement("p");
p.innerText=todo.name;

let span=document.createElement("span");
span.innerText="x";
span.setAttribute("data-id",index);
span.addEventListener("click",handleDelete);

li.append(input,p,span,);
root.append(li);

    });

}
createUI(root,allRoot);
inputElm.addEventListener("keyup",handler);

