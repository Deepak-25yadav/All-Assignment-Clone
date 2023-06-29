function studentData(firstName,lastName,age,marksArray,...hobbies) {
 let obj={};
 obj.fullName=`${firstName} ${lastName}`;
 obj.age=age;
 obj.hobbies=hobbies;
 obj.getInfo=function(){
   return `${firstName} ${lastName}'s age is ${age}.`;
 }
obj.getResult=function(){

  let marksTotal=0;
  let countItem=marksArray.length;
  for(let key of marksArray)
  {
    marksTotal=marksTotal+key;
  }
let avg=marksTotal/countItem;

if(avg<50)
{
  return 'Result: FAIL'
}
else 
{
  return 'Result: PASS'
}

}
return obj;
}

let studentObj=studentData("vivek","Agrawal",38,[45,50,60],'Singing','Coding','Meditating');
console.log(studentObj);

export {
  studentData
}