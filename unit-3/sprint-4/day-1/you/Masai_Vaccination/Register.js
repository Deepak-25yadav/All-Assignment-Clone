
let formData=JSON.parse(localStorage.getItem("vaccineDataStorage")) || [];



let registration_form=document.getElementById("registeration-form")

registration_form.addEventListener("submit",()=>{
    let uniqueId=document.getElementById("unique-Id").value
    let isDuplicate=false;
    formData.forEach((item)=>{
     if(item.uniqueId==uniqueId)
     {
        isDuplicate=true;
     }
    })

     if(isDuplicate==true)
     {
       
     }
     else{

        uniqueId=document.getElementById("unique-Id").value
     }

    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    // let employee=document.getElementById("employee").value
    // let student=document.getElementById("student").value
    let priority=document.getElementById("priority").value
    let vaccine=document.getElementById("vaccine").value
   let x=document.getElementsByName("Designation") 
   let otp=Math.floor(Math.random()*10000); 
   // console.log(otp);      
   x.forEach(radio => {
    if(radio.checked){
        designation=(radio.value);
    }
   })

let detailsObj={uniqueId,name,age,priority,vaccine,designation,otp}
 formData.push(detailsObj);
 localStorage.setItem("vaccineDataStorage",JSON.stringify(formData))
})



let tbody=document.getElementById("tbody");
registration_Table(formData)


function registration_Table(formData){

formData.forEach((element,index)=>{
let trb=document.createElement("tr");
let uniqueId=document.createElement("td");
let name=document.createElement("td");
let age=document.createElement("td");
let designation=document.createElement("td");
let priority=document.createElement("td");
let vaccine=document.createElement("td");
let Delete=document.createElement("td");
let btnD=document.createElement("button");
btnD.textContent="Delete";
// btnD.style.backgroundColor='red';
   btnD.addEventListener("click",()=>{
      tbody.innerHTML=null;
      trb.innerHTML=null;
    let z=formData.splice(index,1)
      // console.log(index);
      // trb.innerHTML=null;
      localStorage.setItem("vaccineDataStorage",JSON.stringify(formData));
      registration_Table(formData);
   })
Delete.append(btnD)
   


let vaccinate=document.createElement("td");
   let btnV=document.createElement("button");
      btnV.textContent="Vaccinate";
   // btnV.style.backgroundColor='green';
   btnV.addEventListener("click",()=>{
      alert(`For Successfully Vaccination Enter to this OTP: ${element.otp}`);
    })
   vaccinate.append(btnV);
//   btnV.addEventListener("click",()=>{
//     alert(element.otp);
//   })

 uniqueId.textContent=element.uniqueId
 name.textContent=element.name;
 age.textContent=element.age;
 designation.textContent=element.designation;
 priority.textContent=element.priority;
 vaccine.textContent=element.vaccine;
//  Delete.textContent=;
//  vaccinate.textContent="Vaccinate";

 trb.append(uniqueId,name,age,designation,priority,vaccine,Delete,vaccinate)
//  let tbody=document.getElementById("tbody");
 tbody.append(trb);

})


}





