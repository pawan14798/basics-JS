function goingtoShop()
{
    console.log("Call me once done");
}

function washCar(callback)
{
    console.log("it will take time");
    callback();
}

washCar(goingtoShop);


function print() {
    console.log("Normal Function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed");
    pramodCallback();
}

// First Way
placeOrder("Pizza", print);
