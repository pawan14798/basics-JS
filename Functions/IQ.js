function logTest(name)
{
    console.log(`hello ${name}`);
}

logTest("Pawan");
//what will be the output of the funcrion if we called in a console.log??

//2nd questions
let arr=[1,3,4,5,6]; 
function hasError(...code)
{
    return code.every(c=>c>=2);

}
console.log(hasError(arr));
