

function getGreeting(firstName, lastName) {
    return `Hi from ${firstName} ${lastName}.`
  }
  
  
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  
  let users = [ john, pete, mary ];
  
  let usersGreetings =users.reduce((acc,item)=>{
                                     
               acc.push(getGreeting(item.name,item.surname));                      
                                     
              return acc;
                                     
                                     
            },[]); 
  
  console.log(usersGreetings)