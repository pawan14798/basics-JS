class students{
    constructor(name,age,mobno)
    {
        this.name=name;
        this.age=age;
        this.mobno=mobno
    }
    static course="palywright2x";
    static fee="10,000";
    static printCourseInfo()
    {
        console.log("opted course is "+this.course);
         console.log(`Amount of the course playwright2x batch is `,this.fee);
    }
    
    printstudentData()
    {
        console.log(`here is the details of the student `+this.name+","+this.age+","+this.mobno);
    }
}
students.printCourseInfo();
//students.fetchfeeAmt();
let s1=new students("P1","28","98792734");
let s2=new students("P2","24","987927547634");
let s3=new students("P3","35","98792547734");
let s4=new students("P4","28","98792547ytr734");
let s5=new students("P5","28","98792547ert734");
let s6=new students("P6","20","98792547dfg734");
let s7=new students("P7","28","98792733734");
let s8=new students("P8","28","985679237734");
let s9=new students("P9","38","95474592734");
let s10=new students("P10","28","98792573734");
//calling each students object
s1.printstudentData();
s2.printstudentData();
s3.printstudentData();
s4.printstudentData();
s5.printstudentData();
s6.printstudentData();
s7.printstudentData();
s8.printstudentData();
s9.printstudentData();
s10.printstudentData();
