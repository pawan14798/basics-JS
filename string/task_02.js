
//reverse the words in a string
let str="i love india";
let result=str.split(" ");
console.log(result);
let revarr=[];
for(let i=result.length-1; i>=0;i--)
{
revarr.push(result[i]);
}

console.log(revarr.join(" "));