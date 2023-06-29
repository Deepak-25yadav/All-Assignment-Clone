


// let registerData=JSON.parse(localStorage.getItem("registerData")) || [];

// console.log(registerData);

// let loginButton=document.getElementById("loginButton");
// loginButton.addEventListener("click",()=>{

// registerData.forEach((element)=>{
// if(gmail==element.email)
// {
//     // alert("Successfully login");
//     console.log(element.gmail);
//     console.log(gmail);
// }


//     })
    
// })


let registerData=JSON.parse(localStorage.getItem("registerData")) || [];
let loginForm= document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{
e.preventDefault();

let gmail=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

let isPassword=false;
let isGmail=false
registerData.forEach((element,index)=>{
if(element.email==gmail)
{
    isGmail=true;
    if(element.password==password)
    {
        isPassword=true;
    }
}
})
     if(isGmail==true)
     {
        if(isPassword==true)
        {
            alert("Login SuccessFully");
        }
        else{
            alert("Your Password is wrong ")
        }
     }
     else{
        alert("Your Gmail is wrong");
     }

// console.log(isGmail);
// console.log(isPassword);

})



