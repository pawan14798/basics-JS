function step1(){
return Promise.resolve("step1 executed succesfully");}

function step2()
{
   return Promise.resolve("step 2 is executed succesfully");
}

step1().then(result=>{
    console.log(result);
    return step2();

})
.then(result=>{
    console.log(result);
});