class Credential
{
   #apikey;
    user;

    constructor(apikey,user)
    {
        this.#apikey=apikey;
        this.user=user;
    }

     pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}
let cred=new Credential("admin", "scret_key_1234");
cred.pramodgetAuthHeader();

// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

const token = cred.pramodgetAuthHeader();
console.log(token);