function makeRetryTracker(max)
{
    let attempts=0;
    function tryagain(testname)
    {
        attempts++;
        if(attempts>max)
        {
            return `${testname} exceeds ${max}`;
        }else
        {
            return `${testname} exceeds ${max}`;
        }
    }
    return tryagain;
}


let tryied=makeRetryTracker(4);
console.log(tryied("data"));
