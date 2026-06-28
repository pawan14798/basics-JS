class Animal
{
    constructor(name)
    {
        this.name=name;
    }
    eat()
    {
        console.log(this.name+" is eating");
    }

     sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal
{
    constructor(name, breed)
    {
        super();
        this.name=name;
        this.breed=breed;
    }

    getbreed()
    {
        return this.breed;
    }

    getname()
    {
        return this.name;
    }
     bark() {
        console.log(this.name, " is barking!")
    }
}

let dog=new Dog('ella','Labrador');
console.log(dog.getbreed());
console.log(dog.getname());
dog.bark();