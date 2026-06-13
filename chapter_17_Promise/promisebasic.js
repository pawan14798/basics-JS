let result=new Promise((resolve,reject)=>{
    let value=false;
    if(value)
    {
        resolve("printing true vale");
    }else
    {
        reject("not a true value");
    }
    
});
result.then(value=>{console.log(value)}).catch(err=>console.log(err));