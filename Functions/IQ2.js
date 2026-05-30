function outer()
{
    let message="Hello";
    console.log('outer function called');
    function inner()
    {
        console.log(message);
    }
    return inner;
}

//console.log(outer());
const innercalled=outer();
innercalled();