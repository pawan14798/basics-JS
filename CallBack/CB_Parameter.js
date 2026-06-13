// // Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

 bugs.forEach(function (bug, i) {
     console.log("Bug #" + (i + 1) + ": " + bug);
});

 console.log("Total bugs: " + bugs.length);


 //callback with parameters

 function runTest(testName,callback)
 {
    let status="PASS";
    callback(testName,status);
 }

 runTest('loginfunctionality',(test,result)=>{
console.log(test+"-->"+result);
 });
