function job(delay, value) {

return new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve(value)
},delay)

})

}

let a1=job(1000,10);
let a2=job(3000,20);
let a3=job(500,30);
let a4=job(1500,40);
// let arr=[a1,a2,a3,a4];

Promise.all([a1, a2, a3,a4]).then((values) => {
    console.log(values); // [3, 1337, "foo"]
  });

var results;

export { job, results };
