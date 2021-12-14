let form =document.querySelector("form");
let userError="";
let emailError="";
let numberError="";
let passwordError="";
function numberFind(str){
    return str.split(" ").some(e=>Number(e));
}
function handler(event){
    event.preventDefault();
    let userInfo=event.target.elements.username;
    let userEmail=event.target.elements.email;
    let userNumber=event.target.elements.number;
    let password=event.target.elements.password;
    let cnfPassword=event.target.elements.confirmpassword;
   
 
    
    if(userInfo.value.length < 4){
        userError= `${userInfo.value} Can't be less than 4 character`
    }else if(numberFind(userInfo.value)){
        userError="You can't use number in the name field"
    }
    else if(userEmail.value.length <6){
        emailError="Email must be at least 6 characters"
    }
    else if(userNumber.value.length <7){
      numberError="Length of phone number can't be less than 7"
    }else if(password.value !== cnfPassword.value){
     passwordError="password must be same"

    }

    
    
    else{
        alert(`User Added Successfully!`);
    }
    userInfo.nextElementSibling.innerText=userError;
    userEmail.nextElementSibling.innerText=emailError;
    userNumber.nextElementSibling.innerText=numberError;
    cnfPassword.nextElementSibling.innerText=passwordError;
}

 form.addEventListener("submit",handler);