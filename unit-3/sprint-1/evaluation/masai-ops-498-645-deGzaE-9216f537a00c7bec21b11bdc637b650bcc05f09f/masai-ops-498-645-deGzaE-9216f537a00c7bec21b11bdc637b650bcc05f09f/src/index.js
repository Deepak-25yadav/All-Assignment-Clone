// Problem 1. complete the below function
function school(schoolName,location,established, ...subjects) {

let obj={};
obj.name=schoolName;
// obj.location=location;
// obj.established=established;
// obj.subjects=subjects;

obj.getGeneralInfo=function(){

  return `${schoolName} was established in ${established} at ${location}.`;
}

obj.getSubjectsInfo=function(){

  let res="";
  for(let i=0;i<subjects.length;i++)
  {
    if(i==subjects.length-1)
    {
      res=res+subjects[i];
    }
    else{
      res=res+subjects[i]+","+" ";
    }
    // res=res+subjects[i]+","+" ";
  }

return `At ${schoolName} we teach ${res}.`

}


return obj;
  
}

let schoolDetails= school('ABC School', 'New Delhi', 1991, 'English', 'Hindi', 'Mathematics');

console.log(schoolDetails);





// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];

let outputArray = inputArray.reduce((acc,item)=>{

  let obj={}

  obj.productId=item.idMeal;
  obj.productTitle=item.strMeal;
  for(let key in categoriesDirectory)
  {
    if(key==item.Category)
    {
      obj.Category=categoriesDirectory[key];
    }
  }

  for(let key in areasDirectory)
  {
    if(key==item.Area)
    {
      obj.Area=areasDirectory[key];
    }
  }

acc.push(obj);
return acc

},[])


console.log(outputArray);

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
