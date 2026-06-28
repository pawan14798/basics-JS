//basePage
//login page
//dashboardpage
//cartpage
class basePage
{
    verify()
    {
        console.log("verifying base page");
    }
}

class loginPage extends basePage
{
    verify()
    {
        console.log("verify: usernane field exists");
          console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends basePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}class CartPage extends basePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}
let pages=[new basePage(), new loginPage(), new DashboardPage(), new CartPage()]

pages.forEach(function(page)
{
page.verify();
console.log("----");
})