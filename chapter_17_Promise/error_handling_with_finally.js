let Promiseresult=new Promise((resolve,reject)=>{
    reject("something went wrong");
})

Promiseresult.catch(err=>{console.log(err)}).finally(()=>{
console.log("execution completed");
})