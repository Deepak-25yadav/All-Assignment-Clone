// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;

// let paginationWrapper = document.getElementById("pagination-wrapper");

// let loginUserUsername = document.getElementById("login-user-username");
// let loginUserPassword = document.getElementById("login-user-passowrd");

// let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");
let getRecipe = document.getElementById("fetch-recipes");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

// let userAuthToken = localStorage.getItem("localAccessToken") || null;
// let userId = +localStorage.getItem("userId") || null;
// const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
// const urlTodosBase = `${baseServerURL}/todos/`;


getRecipe.addEventListener("click",()=>{

fetch(recipeIngredientURL)
.then((response)=>response.json())
.then((data)=>{
  console.log(data);
  rcpFun(data);
})

})


function rcpFun(Data){

  Data.forEach((item,index)=>{

  let carddiv=document.createElement("div");
  let imgdiv=document.createElement("div");
  let img=document.createElement("img");
  let h3descdiv=document.createElement("div");
  let descdiv=document.createElement("div")
  let title=document.createElement("h4");

  let linkText=document.createElement("p");

  img.src = `${baseServerURL}${item.image}`;
 title.textContent=item.name;
 descdiv.textContent=item.textContent;
 linkText.textContent="Read more";
 imgdiv.append(img);
 h3descdiv.append(title,descdiv)

 carddiv.append(imgdiv,h3descdiv,linkText);

 mainSection.append(carddiv);

  })
}












