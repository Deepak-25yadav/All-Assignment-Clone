// you can write your js code here

let userData=JSON.parse(localStorage.getItem("book-list"))||[];
let tbody=document.getElementById("tbd");

// let book_count=ducument.getElementById("book-count")
// book_count.textContent=userData.length;
 function ShowUser(){
userData.forEach(function(element,index){

let trb=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
let td5=document.createElement("td");
let td6=document.createElement("td");
let td7=document.createElement("td");
let td8=document.createElement("td");

td1.textContent=element.bn;
td2.textContent=element.an;
td3.textContent=element.dp;
td4.textContent=element.date;
td5.textContent=element.sel;
td6.textContent="Buy";
td7.textContent="Add";
td8.textContent=element.price;
trb.append(td1,td2,td3,td4,td5,td6,td7,td8);
tbody.append(trb);

});
 }
 ShowUser();