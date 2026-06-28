 function apicall(name)
 {
return new Promise(resolve=>{
setTimeout(()=>{
     resolve(name, "200 Ok");
},2000)
 })
 }

 async function runTest()
 {
     console.log("Starting of the Test");
    let start = Date.now();
    let ans=await apicall("login");
    console.log(ans);

    let ans1=await apicall("dashboard");
    console.log(ans1);

    let ans2=await apicall("logout");
    console.log(ans2);

    console.log("Time: ~" + (Date.now() - start) + "ms");

 }

 runTest();

