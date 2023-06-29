// document.querySelector("h1").innerText="Deepak"


// fetch("https://639c43c842e3ad69272c3b06.mockapi.io/product")
// .then((responseObject)=>{
// return responseObject.json();
// })
// .then((actualData) =>{
//    console.log(actualData);
//    productdisplay(actualData)
// })

// .catch((error)=>{
//     console.log(error);
// })

// let productContainer= document.getElementById("product_container");

//  function productdisplay(arr){

// arr.forEach((element)=>{

// let carddiv=document.createElement("div");
// let img=document.createElement("img");
// img.setAttribute("src",element.avatar)
// let name=document.createElement("h2");
// name.innerText=element.name;
// let category=document.createElement("h4");
//     category.innerText=element.category; 
// let description=document.createElement("p");
//     description.innerText=element.description;

//     carddiv.append(img,name,category,description);
//     productContainer.append(carddiv);
// })
//  }










fetch("product1.json")
.then((responseObject)=>{
return responseObject.json();
})
.then((actualData) =>{
//    console.log(actualData.product1);
   productdisplay(actualData.product1)
})

.catch((error)=>{
    console.log(error);
})


let productContainer= document.getElementById("product_container");
let allProduct1=document.getElementById("allProduct1");
 function productdisplay(arr){
console.log(arr);
arr.forEach((element)=>{

let carddiv=document.createElement("div");
let image=document.createElement("img");
    image.setAttribute("src",element.image)
let description=document.createElement("p");
    description.innerText=element.description;
let price=document.createElement("h3");
     price.innerText=element.price;
let discount=document.createElement("h4");
    discount.innerText=element.discount;
let category=document.createElement("h6");
    category.innerText=element.category; 
let addToCart=document.createElement("button");
    addToCart.innerText="Add to Cart";


    carddiv.append(image,description,price,discount,addToCart);
    allProduct1.append(carddiv);
    productContainer.append(allProduct1);
})
 }