//nnormal function
function validateCode(statuscode)
{
    if(statuscode>=200 && statuscode<=300)
    {
        console.log(`request is fine`);
    }
}

validateCode(200);


//function as a expression


const validateCode1= function(statuscode)
{
    if(statuscode>=200 && statuscode<=300)
    {
         console.log(`request is fine`);
    }
}

validateCode1(200);


//Arrow function
const arrowfunctionresult=(statuscode)=>{
    if(statuscode>=200 && statuscode<=300)
    {
         console.log(`request is fine`);
    }
}
arrowfunctionresult(200);

