// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById(
  "filter-more-than-equal-50"
);

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");
let welcomeUsernameSpan = document.getElementById("welcome-username");

let editRecipeInputId = document.getElementById("edit-recipe-input-id");
let editRecipeInputPrice = document.getElementById("edit-recipe-input-price");
let editRecipeButton = document.getElementById("edit-recipe-button");

let recipeData = [];

let userAuthToken, userInfo;

async function createData(){

try{
  let res = await fetch(`http://localhost:9090/todos`,{

              method: 'post',
              headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0bmFtZSI6IkFkIiwibGFzdG5hbWUiOiJNaW5pc3RlciIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRsTG01THA0MHVCUjlDVXJabjU4Q2RPbDh5dTVHcDJ1bUFPLjZseS52V2NaMGEwdlVLc0hpQyIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzc2Mi5qcGciLCJ1c2VyTGV2ZWwiOjQsImNyZWF0ZWRBdCI6MTY3MDE2NTk4MDYzOCwiaWF0IjoxNjc0MjI0NTE5LCJleHAiOjE2NzQyMzUzMTl9.8laKbRx_1a3yKKAn2LrxyZ_NLJ7NqiZYkcIsmqMtCAk`
              },

            body:JSON.stringify({
               userId:48,
               title:"New loyal Minskin",
               completed:false

            })
  });

if(res.ok){
  let data=await res.json();
  return data;
}
else{
  return `server responded with a ${res.status} error.`
}
} catch (error){
  return 'error';
}

createData.then(dat => console.log(dat));

}

