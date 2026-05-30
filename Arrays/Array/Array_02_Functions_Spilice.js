let test=["week1","week2","week3"];
console.log(test.splice(0,1,"Wee1-NA"));
console.log(test);

let weedays=Array.of('Mon','wed','thu','fri','sat','sun');
weedays.splice(1,0,'Tue');
console.log(weedays);

let conversion=Array.from("Chandrakant");
console.log(conversion);

let conversion2=Array.of("Pawan");
console.log(conversion2);

let status=["pass","fail","skipp"];
console.log(status.at(-3));
console.log(status.indexOf("fail"));
console.log(status.lastIndexOf("fail"));
console.log(status.includes("fail"));