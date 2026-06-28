function getToken()
{
    return Promise.resolve("Lgin succesfulo");
}

await function callToken()
{
    let result=await getToken();
    console.log(result);
}

callToken();