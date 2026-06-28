async function testAPI()
{
   try{
    await Promise.reject("403 error");
} catch(error){
    console.log(error);
}finally{
    console.log("this is regarding Async concepts");
}
}

testAPI();
