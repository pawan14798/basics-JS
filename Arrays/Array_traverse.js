let name=["ST","FROM","DARK"];
for(let i=0;i<name.length;i++)
{
    console.log(name[i]);
}

//2nd ways for..of
for(let values of name)
{
    console.log(values);
}

//3rd ways--foreach

name.forEach(element => {
    console.log(element);
    
});

//4th way using for..in
for(let values in name)
{
    console.log(name[values]); 
}

//using map 
name.map(value=>console.log(value));