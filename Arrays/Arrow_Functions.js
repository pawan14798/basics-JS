//find function
const num=[10,20,30,40,50];
let result=num.find(n=>n>30);
console.log(result);

// findIndex Function
let resultindex=num.findIndex(n=>n>30);
console.log(resultindex);

const data=[{id:1, name:"pawan"},{id:2,name:"Raj"},{id:3,name:"soni"}];
console.log(data.find(u=>u.id===2));
console.log(data.findIndex(u=>u.id===2));

//findIndex(), findLastIndex() returns -1 if no element found.