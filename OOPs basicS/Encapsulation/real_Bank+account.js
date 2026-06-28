class BankAccount{
    #child1;
    #child2;
    constructor(name, ch1,ch2)
    {
        this.name=name;
        this.child1=ch1;
        this.child2=ch2;
    }

    setname(newname)
    {
        this.name=newname;
    }
    getname()
    {
        return this.name;
    }
}

let obj=new BankAccount("chandrakant","p1","p2");
console.log(obj);
console.log(obj.name);//chandrakant
obj.setname("Raj");
console.log(obj.getname());//Raj
console.log(obj.name);//Raj