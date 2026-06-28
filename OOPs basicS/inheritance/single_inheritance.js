class parent
{
    //let bike;
    constructor(bike)
    {
        this.bike=bike;
    }

    getBike()
    {
        return this.bike;
    }
    printParentData()
    {
        console.log("Discover bike is there");
    }

}

class child1 extends parent
{

}

let objchild=new child1();
//console.log(objchild.getBike());
objchild.printParentData();