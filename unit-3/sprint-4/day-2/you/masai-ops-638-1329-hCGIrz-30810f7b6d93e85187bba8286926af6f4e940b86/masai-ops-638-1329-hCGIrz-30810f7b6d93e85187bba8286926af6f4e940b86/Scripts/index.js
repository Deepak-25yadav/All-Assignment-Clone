// Write code related to Home page here

let formDetails=JSON.parse(localStorage.getItem("todos")) || [];
// let formData=JSON.parse(localStorage.getItem("vaccineDataStorage")) || [];

let form=document.getElementById("todoForm");


form.addEventListener("submit",()=>{


let name=document.getElementById("name").value;
let textarea=document.getElementById("desc").value;
let addDate=document.getElementById("addDate").value;
let deadline=document.getElementById("deadline").value;
let priority=document.getElementById("priority").value;

let objDetails={name,textarea,addDate,deadline,priority}

formDetails.push(objDetails);
localStorage.setItem("todos",JSON.stringify(formDetails));
// localStorage.setItem("vaccineDataStorage",JSON.stringify(formData))

})

// ,textarea,addDate,deadline,priority
