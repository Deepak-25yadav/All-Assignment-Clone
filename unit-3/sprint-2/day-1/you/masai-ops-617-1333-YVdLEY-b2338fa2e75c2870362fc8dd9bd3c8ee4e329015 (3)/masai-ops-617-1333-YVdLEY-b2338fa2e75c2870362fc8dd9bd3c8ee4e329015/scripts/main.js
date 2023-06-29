// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];
// let bag = []


window.addEventListener("load",()=>{
    fetchAndRenderCats();
});

function fetchAndRenderCats(){

fetch(`${baseServerURL}/cats`)
.then((res)=>{return res.json()})
.then((data)=>{
    // console.log(data);
    let catsObj=data.map((cat)=>({
     id: cat.id,
     title:cat.name,
     description:cat.description.substring(0,75),
     linkText:null,
     linkUrl:null,
     imageUrl:`${baseServerURL}${cat.image}`,
     additionalInfo:cat.cost


    }));    

  catsData=catsObj;
  renderCardList(catsObj);

    });

}






function renderCardList(cartData){
     //,item.linkText,item.linkUrl
console.log(cartData)
let cardList=`

<div class="card-list">
                                                
${cartData.map((item) => getCard(
    item.id,
    item.title,
    item.description,
    item.linkText,
    item.linkUrl,
    item.imageUrl,
    item.additionalInfo)).join("")}

</div>

`;

mainSection.innerHTML=cardList;

}









function getCard(id,title,desc,linkText,linkUrl,imageUrl,additionalInfo){
// console.log(imgUrl)
let card=`
<div class="card" data-id=${id}>

<div class="card_img">
<img src=${imageUrl} alt="Not found" />
</div>

<div class="card_body">

<h3 class="card_item card_title">${title}</h3>

<div class="card_item card_description">
${desc}
</div>

<div class="card-item card-additional-info">${additionalInfo}</div>
</div>
</div>

`;

return card
// let cardList=`<div class="card-list">${card}</div>`

// mainSection.innerHTML=cardList;



}


