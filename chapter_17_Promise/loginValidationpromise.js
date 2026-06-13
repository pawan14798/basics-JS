/*function login(username, password){

    return new Promise((resolve, reject)=>{

        if(username === "admin" && password === "1234"){
            resolve("Login successful");
        }
        else{
            reject("Invalid credentials");
        }

    });
}


login("admin","1234")
.then(msg=>console.log(msg))
.catch(err=>console.log(err));*/

function loginValidation(username ,password)
{
    return new Promise((resolve,reject)=>{
        if(username==='Pawan' && password==='myluck#2021')
        {
resolve("login succesful");
        }else
        {
            reject("bad credentials");
        }
    });
}


loginValidation('pawan','pune123').then(result=>console.log(result)).catch(err=>console.log(err));