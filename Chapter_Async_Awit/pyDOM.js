//openBrowser
//login
//credential
//click login
function openBrowser()
{
    return new Promise(resolve=>{
        resolve("visiting site");
    })
}

function signup()
{
    return new Promise(resolve=>{
        resolve("siged up!!");
    })
}

function loginscenario()
{
    return new Promise(resolve=>{
        resolve("entered credentialls");
    })
}

function loginscenario()
{
    return new Promise(resolve=>{
        resolve("logged in succesfully!!");
    })
}




/*openBrowser().then(value=>{
    console.log(value);
    return signup()
}).then(value=>{
console.log(value);
return loginscenario()
}).then(value=>{
    console.log(value);
}); */


/*Your code already has dependent steps
 (open browser → signup → login). 
 You're currently using .then() chaining, 
 which works but is harder to read and maintain 
 as the flow grows longer.*/


 //Answer:
 async function E2ECall()
 {
   let step1= await openBrowser();
   console.log(step1+"with async and await");
  let step2=await signup();
   console.log(step2);
  let step3= await loginscenario();
   console.log(step3);
 }

 E2ECall();

 /*No nesting, no return-chaining, no lost context — each step visibly waits for the previous one. 
 For dependent test cases, 
 this is much cleaner when you later add: 
 error handling with try/catch, retries, timeouts,
  or conditional branching between steps.*/