class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest {
    setup(name) {
        console.log("APITest: open browser");
    }
}

let test = new APIPage();
test.setup();
//Java script doent support traditional method overolading.