/*✅ Triangle Classifier:

Write a program that classifies a triangle based on its side lengths. Given three 
input values representing the lengths of the sides, determine if the triangle is 
equilateral (all sides are equal), isosceles (exactly two sides are equal), 
or scalene (no sides are equal). Use an if-else statement to classify the triangle.

*/

let side1=10;
let side2=10;
let side3=10;
if(side1===side2&&side2===side3)
{
    console.log("Equilateral Traingle");
}else if(side1==side2||side2==side3||side1==side3)
{
   console.log("isoscale trainfgle"); 
}else{
    console.log("scalane traingle");
}

//Task 2
for(let i=0; i<=100;i++)
{
    if(i%3===0&&i%5===0)
    {
            console.log("FizzBuzz");
    }else if(i%3===0)
    {
        console.log("Fizz");

    }else if(i%5===0)
    {
        console.log("Buzz");
    }else
    {
        console.log(i);
    }
}