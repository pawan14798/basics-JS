class student
{
    constructor(name,age,mobno)
    {
        this.name=name;
        this.age=age;
        this.mobno=mobno;
    }
    static name1="Pawan";
    static course1="playwright2X";
    static displayCourse()
    {
        console.log("opted course is"+this.course);
    }
}

console.log(student.name1);
console.log(student.course1);
//console.log(new student("p1",28,"08979585"));
let studentObj1=new student("p1",28,"08979585")
student.displayCourse();//we are calling static method here 
console.log(studentObj1.name)