
//
let account = {
    accountNuber: "123456",
    owner: "Siya",
    balance: 5000,
    transactions: [1000, -500, 2000],

    deposite: function (amount) {
        this.balance = this.balance + amount;
    },

    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
        } else {
            console.log("Insufficient funds");
        }
    },

    showBalance: function () {
        console.log("Balance: ", this.balance);
    }
};
account.deposite(1000);
account.showBalance();
account.withdraw(2000);
account.showBalance();
