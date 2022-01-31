class Account {
  constructor(client) {
    this._owner = client;
    this._balance = 0;
    this._transactions = [];
  }

  getOwner = () => this._owner;

  getBalance = () => this._balance;

  deposit = (value) => {
    this._balance += value

    this._transactions.push({
      transactionType: "Deposit", 
      value: value
    });
  };

  withdraw = (value) => {
    if (this._balance - value < 0) {
      throw new Error(`Insufficient funds - current balance: ${this._balance}`);
    }

    this._balance -= value

    this._transactions.push({
      transactionType: "Withdraw", 
      value: value
    });
  }
}

module.exports = Account;