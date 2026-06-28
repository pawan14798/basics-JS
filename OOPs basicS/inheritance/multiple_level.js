class BasePage{
    constructor(name)
    {
        this.name=name;
    }
    open()
    {
        console.log("[OPEN] " + this.name);
    }
    
}

class AuthPage extends BasePage
{
    login(user)
    {
        console.log("[OPEN] " + user);
    }
}

class AdminPage extends AuthPage
{
    constructor()
    {
        super("Admin panel");
    }

     manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let p1=new AdminPage("Pawan");
p1.open();
p1.login("preadmin");
p1.manageUsers("admin");