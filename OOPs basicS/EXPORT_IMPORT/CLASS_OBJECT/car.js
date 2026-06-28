class car
{
    //constructor
    constructor(model)
    {
        this.model=model;
    }

    //Attributes
    //behaviour
    drive()
    {
        console.log("drive",this.model);
    }
}

let obj1=new car("sonet");
console.log(obj1);
obj1.drive();

const obj2=new car("seltos");
console.log(obj2);
obj2.drive();