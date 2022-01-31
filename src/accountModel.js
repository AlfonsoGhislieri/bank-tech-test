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
    this.#addTransaction({value: value, transactionType: "Deposit"})
  };

  withdraw = (value) => {
    if (this._balance - value < 0) {
      return `Insufficient funds - current balance: ${this._balance}`;
    }
    else if (value <= 0) {
      return `Invalid amount`;
    }

    this._balance -= value
    this.#addTransaction({value: value, transactionType: "Withdraw"})
  }

  #addTransaction = ({value: value, transactionType: type}) => {
    this._transactions.push({
      transactionType: type, 
      value: value
    });
  }
}

module.exports = Account;