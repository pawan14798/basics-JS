//reverse a string

let str="i love my india";
let rev="";
for(let i=str.length; i>=0;i--)
{
    rev=rev+str.charAt(i);
}

console.log(rev);