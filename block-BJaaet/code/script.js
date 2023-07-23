let moviesName=document.querySelector("#todolist");
let root=document.querySelector("ul");
let allRoot=[];
function handler(event){
    let value=event.target.value;
    if(event.keyCode===13 && value!== ""){
        
        
       let rootValue={
           name:value,
           isDone:false,
       }
       allRoot.push(rootValue);
       event.target.value="";
       createUI();
    }
}
function handleDelete(event){
     let id=event.target.dataset.id;
    allRoot.splice(id,1);
     createUI();
     
}
function createUI(){
    root.innerHTML="";
    allRoot.forEach((rootValue,index)=>{
       
        let li=document.createElement("li");
        let input=document.createElement("input");
        input.type = "checkbox";
        let p =document.createElement("p");
        p.innerText=rootValue.name;
        let span=document.createElement("span");
        span.innerText="X";
        span.addEventListener("click",handleDelete);
        span.setAttribute("data-id",index);
        li.append(input,p,span);
    root.append(li);
      
});
    
}
moviesName.addEventListener("keyup",handler);