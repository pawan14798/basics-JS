class BankAccount{ 
    #balance=0;
    deposit(amount)
    {
        if(amount>0)
        {
this.#balance+=amount;
        }
    }
    getBalance()
    {
        return this.#balance;
    }

}
let bankRefref=new BankAccount(); 
bankRefref.deposit(300);
console.log(bankRefref.getBalance());
console.log(bankRefref.balance);