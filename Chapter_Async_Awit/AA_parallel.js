//step 2 is depnd on step 1 testResults

function apiCall(name)
{
    return new Promise(resolve=>{
        setTimeout(resolve(name, "200 Ok"),200);
    })
}


async function runTest(){ 
let[step1,step2,step3]=await Promise.all([apiCall("visit website"),
apiCall("sign up"),
apiCall("login ")]); 

console.log(step1);
    console.log(step2);
    console.log(step3);
}

runTest();