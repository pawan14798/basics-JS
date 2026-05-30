//Find string is palindrome or not
let str="mam";
let rev="";
for(let i=str.length; i>=0;i--)
{
rev=rev+str.charAt(i);
}
if(rev===str)
{
    console.log("it is")
}else{
    console.log("no its not");
}