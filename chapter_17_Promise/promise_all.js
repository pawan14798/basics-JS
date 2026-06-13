let p1=Promise.resolve("API1");
let p2=Promise.resolve("API 2");
let p3=Promise.resolve("API 3");

Promise.all([p1,p2,p3]).then(result=>console.log(result)).catch(err=>console.log(err));