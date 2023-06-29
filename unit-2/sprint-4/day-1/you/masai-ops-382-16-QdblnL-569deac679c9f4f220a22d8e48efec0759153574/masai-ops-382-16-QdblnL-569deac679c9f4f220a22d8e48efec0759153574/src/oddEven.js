




function getData(data) {

let promise= new Promise((resolve,reject) =>{

    if(data==NaN)
    {
        reject("error")
    }

    setTimeout(()=>{
     if(data%2==1)
     {
        resolve("odd")
     }

    },2000)
     
    setTimeout(()=>{
        if(data%2==0)
        {
            resolve("even");
        }
    },4000)
})


.catch((err)=>{
alert(err);
console.log(err);
})
.then((res)=>{
    alert(res);
    console.log(err)
})
.then((res)=>{
    alert(res);
    console.log(res);
})

    
}

export default getData
