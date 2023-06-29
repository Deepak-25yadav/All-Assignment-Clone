// you can write your js code here

let userData=JSON.parse(localStorage.getItem("book-list"))||[];
let userForm=document.getElementById("user_form");
userForm.addEventListener("submit",submitUser)

function submitUser(e){
e.preventDefault();
const bn=document.getElementById("name").value;
const an=document.getElementById("author").value;
const dp=document.getElementById("desc").value;
const date=document.getElementById("added").value;
const sel=document.getElementById("category").value;
const price=document.getElementById("price").value;
const user={bn,an,dp,date,sel,price}
userData.push(user)
localStorage.setItem("book-list",JSON.stringify(userData));

}





