class Car{
    constructor(name,engine)
    {
        this.name=name;
        this.engine=engine;
    }

    setEngine(engine)
    {
this.engine=engine;
    }

    getEngine()
    {
        return this.engine;
    }
}

let Carobj=new Car('Tesla','v8');
console.log(Carobj.getEngine());
Carobj.setEngine('v9');
console.log(Carobj.getEngine());