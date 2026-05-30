let scores=new Array(3);
scores[0]=1;
scores[1]=2;
scores[2]=3;
console.log(scores);

let array1=new Array(1,3,2)
console.log(array1);

let test=Array.of("PAWAN"); 
console.log(test);
let nums = [1, 2, 3, 4, 5];
nums.splice(1, 2, 3, 5);
console.log(nums);
let test2=Array.of(10,20,40,50);
console.log(test2);

let test3=Array.from("hello");
let test4=Array.from("12345");
console.log(test3);
console.log(test4);

let test5=Array.of(10,20,40,50);
console.log(test5);

let status=["pass","fail","skipp"];
console.log(status.at(-4));//undefined
console.log(status.at(-3));
console.log(status[2]);

//modify values in an array
status[0]="passed";
status[1]="failed";
status[2]="skipped";
console.log(status);
console.log(status.pop());
console.log(status);
console.log(status.shift());
console.log(status);
console.log(status.unshift("Fixed"));//2
console.log(status);