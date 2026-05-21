//const { cacheSignal } = require("react");

let status_code=599; 
if(status_code>=200 && status_code<=299)
{
    console.log("Success ");
}else if(status_code>=300 && status_code<=399)
    {
        console.log("Redirection");
    } 
    else if(status_code>=400 && status_code<=499)
    {
        console.log("Client Error"); 
    }
    else if(status_code>=500 && status_code<=599)
    {
        console.log("Server Error");
    }else
    {
        console.log("Invalid");
    }

    //Task 2

    let sev=10; 
if(sev>=1 && sev<=3)
{
    console .log("low ");
}
    else if(sev>=4 && sev<=6)
    {
        console.log("Medium"); 
    }
    else if(sev>= 7 && sev<=8)
    {
        console.log("high");
    }else if(sev>=9  && sev<=10)
    {
        console.log("Criticle");
    }

    //task 3
    let login_attempt=0;
    switch(login_attempt)
    {
         case 0:
            console.log("login unsuccesful");
        break;

        case 2:
            console.log("1 attempt left before lockout");
        break;

        case 3:
            console.log("Account locked ");
        break;
        default:
            console.log("please enter valid number");

}