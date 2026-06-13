let p1=Promise.resolve("API1");
let p2=Promise.reject("API 2");
let p3=Promise.resolve("API 3");

Promise.all([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log(err));

///when it comes to Promise.all it will always consider catch even one reject statement is there!!