function runwithLogin(testFn,testName)
{
    let result=testFn();
    return result;
}



function loginTest()
{
    return "pass";
}

function loginTestFailed()
{
    return "fail";
}

runwithLogin(loginTest,'pass tc');
runwithLogin(loginTestFailed,'Failed Tc');
console.log(runwithLogin(loginTest,'pass tc'));
console.log(runwithLogin(loginTestFailed,'Failed Tc'));
