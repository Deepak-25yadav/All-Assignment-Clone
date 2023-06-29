


let cartContainer=document.getElementById("cartContainer");
let cartProduct1=document.getElementById("cartProduct1");

let cartData=JSON.parse(localStorage.getItem("cartProduct"));
// console.log(cartData);
 productdisplay(cartData);


// let cartContainer=document.getElementById("cartContainer");
// let cartProduct=document.getElementById("cartProduct1");


function productdisplay(arr){
    // console.log(arr);
    
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
    let Delete=document.createElement("button");
        Delete.innerText="Delete"; 
        Delete.addEventListener("click",()=>{
           let deleted=arr.filter((el,i)=>{
                if(element.id==el.id)
                {
                    return false;
                }
                else
                {
                    return true;
                }
           })
               cartProduct1.innerHTML=null;
               productdisplay(deleted);
               localStorage.setItem("cartProduct",JSON.stringify(deleted));

        })
    
        
    
    
        carddiv.append(image,description,price,discount,Delete);
        cartProduct1.append(carddiv);
        cartContainer.append(cartProduct1);
    })
     }