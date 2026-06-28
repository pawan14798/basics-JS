class testcase
{
    constructor(name,status, priority)
    {
        this.name=name;
        this.status=status;
        this.priority=priority;
    }

    display()
    {
        console.log(this.name+"->"+this.status+"->"+this.priority);
    }
}

function f1()
{

}

let loginobj=new testcase("loginTC","fail","high");
loginobj.display();

// Function vs Method
// method is functions but inside the class :)