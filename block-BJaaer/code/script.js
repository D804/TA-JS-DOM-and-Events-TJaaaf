let form =document.querySelector("form");
let modal=document.querySelector(".modal");
let modal_info=document.querySelector(".modal_info");

let userInfo={};
form.addEventListener("submit",(event)=> {


    event.preventDefault();
   userInfo.name= event.target.elements.name.value
  userInfo.email=event.target.elements.email.value
  userInfo.choice=event.target.elements.choice.value
  userInfo.color=event.target.elements.color.value
   userInfo.rating=event.target.elements.rating.value
   userInfo.book=event.target.elements.book.value
   userInfo.terms=event.target.elements.terms.checked
modal.classList.add("open");
let close=document.querySelector(".close_btn");
close.addEventListener("click",()=>{
    modal.classList.remove("open");
   
});
display(userInfo);
});


function display(data={}){
    modal_info.innerHTML="";
   
    let h1=document.createElement("h1");
    h1.innerText=`Hello ${data.name}`;

   let emailId=document.createElement("p");
   emailId.innerText=`Email: ${userInfo.email}`;
   
   let choice=document.createElement("p");
   choice.innerText=`Choice: ${userInfo.choice}`;

   let color=document.createElement("p");
   color.innerText=`Color: ${userInfo.color}`;

   let rating=document.createElement("p");
   rating.innerText=`Rating: ${userInfo.rating}`;

   let book=document.createElement("p");
   book.innerText=`Book: ${userInfo.book}`;

  let terms=document.createElement("p");
   terms.innerText=`Terms: ${userInfo.terms}`;

modal_info.append(h1,emailId,choice,color,rating,book,terms);
};
funct
   /*
   let choice=document.createElement("p");
   choice.innerText=`You Love ${data.choice}`;
   let color=document.createElement("p");
   color.innerText=`Color ${data.color}`;
   let rating=document.createElement("p");
   rating.innerText=`Rating ${data.rating}`;
   let book=document.createElement("p");
   book.innerText=`Book ${data.book}`;
   let terms=document.createElement("p");
   terms.innerText=`👉🏿 ${data.terms}`;
}
modal_info.append( email,choice,color,rating,book,terms,);
*/
