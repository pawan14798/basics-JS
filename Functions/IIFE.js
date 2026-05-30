(function()
{
console.log("hi this is IIFE without argument");
})();

//IIFE with parameter
(function(name){
console.log(`Hello ${name}, this is IIFE`);
})("Pawan");