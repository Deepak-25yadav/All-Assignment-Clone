// Write code related to Board page here

formDetails=JSON.parse(localStorage.getItem("todos"));
let todobigCard=document.getElementById("todobigCard");
let prog=document.getElementById("prog");
let stk=document.getElementById("stk");
let cmplt=document.getElementById("cmplt");


displaytodo(formDetails);

function displaytodo(formDetails){

formDetails.forEach((element,index)=>{

let carddiv=document.createElement("div");
let textarea=document.createElement("h3");
let name=document.createElement("p");
let addDate=document.createElement("p");
let deadline=document.createElement("p");
let priority=document.createElement("p");
let select=document.createElement("select");
let option1=document.createElement("option");
let option2=document.createElement("option");
let option3=document.createElement("option");
let option4=document.createElement("option");

let Delete=document.createElement("button");

 textarea.innerText=element.textarea;
 name.innerText=element.name;
 addDate.innerText=`Added On:- ${element.addDate}`;
 deadline.innerText=`Deadline:- ${element.deadline}`;
 priority.innerText=element.priority;
 option1.innerText="TODO"
 option2.innerText="PROGRESS"
 option3.innerText="STUCK"
 option4.innerText="COMPLETED"
 select.append(option1,option2,option3,option4)

 Delete.innerText="Delete";

 select.addEventListener("change",()=>{
    if(select.value==option1.innerText)
    {
        todobigCard.append(carddiv);
    }
    else if(select.value==option2.innerText)
    {prog.append(carddiv);

    }
    else if(select.value==option3.innerText)
    {
        stk.append(carddiv);
    }
    else if(select.value==option4.innerText){
        cmplt.append(carddiv);
    }
})

carddiv.append(textarea,name,addDate,deadline,priority,select,Delete)
todobigCard.append(carddiv);
})

// ,addDate,deadline,priority,Delete
}

