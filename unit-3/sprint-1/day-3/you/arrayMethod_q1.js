
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let newArr = users.reduce((acc,item)=>{
    acc[item.name]=item.id;
    return acc;
    
  },{})
  console.log(newArr);