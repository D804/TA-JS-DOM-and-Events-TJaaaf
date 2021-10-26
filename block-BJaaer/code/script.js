let form =document.querySelector("form");
let userInfo={};
function handler(event){
    event.preventDefault();
  userInfo.text=form.elements.text.value
  userInfo.email=form.elements.email.value
   userInfo.gender=form.elements.gender.value
   userInfo.range=form.elements.range.value
   userInfo.color=form.elements.color.value
   userInfo.terms=form.elements.terms.checked
   console.log(userInfo);
 }
form.addEventListener("submit",handler);
function handleInput(event){
    userInfo.drone=form.elements.drone.value
}
form .addEventListener("input", handleInput)