function openBrowser()
{
    return new Promise(resolve=>{
setTimeout(()=>{resolve("browser opened succesfully")},1000);
    });
    //resolve())
}


openBrowser().then(result=>{console.log(result);
    return "navigate to url";
}
).then((result=>{console.log(result)}));