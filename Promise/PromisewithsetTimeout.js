function getData()
{
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve("Data received:200")},2000)
});
}

getData().then(response=>console.log(response));