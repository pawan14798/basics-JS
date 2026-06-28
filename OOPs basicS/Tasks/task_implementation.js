class calculator
{
    constructor(number1,number2)
    {
        this.num1=number1;
        this.num2=number2;
    }
    addition()
    {
        console.log(`adding numbers ${this.num1} & ${this.num2} =>`,this.num1+this.num2);
    }

    substraction()
    {
        console.log(`substracting numbers ${this.num1} & ${this.num2} =>`,this.num1-this.num2);
    }

     multiply()
    {
        console.log(`multiplying numbers ${this.num1} & ${this.num2} =>`,this.num1*this.num2);
    }

     division()
    {
        console.log(`dividing numbers ${this.num1} by ${this.num2} =>`,this.num1/this.num2);
    }
     findRemainder()
    {
        console.log(`dividing numbers ${this.num1} by ${this.num2} reminder is =>`,this.num1%this.num2);
    }
}
const result=new calculator(20,10);
result.addition();
result.substraction();
result.multiply();
result.division();
result.findRemainder();
