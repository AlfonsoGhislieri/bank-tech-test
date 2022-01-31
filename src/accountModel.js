class Account {
  constructor(client, transactionModel) {
    this._owner = client;
    this._transactionModel = transactionModel;
    this._balance = 0;
    this._transactions = [];
  }

  getOwner = () => this._owner;

  getBalance = () => this._balance;

  deposit = (value) => {
    this._balance += value;
    this.#addTransaction({value: value, transactionType: 'Deposit'});
  };

  withdraw = (value) => {
    if (this.#balanceBelowZero(value)) {
      return `Insufficient funds - current balance: ${this._balance}`;
    } else if (this.#invalidAmount(value)) {
      return `Invalid amount`;
    } else {
      this._balance -= value;
      this.#addTransaction({value: value, transactionType: 'Withdraw'});
    }
  };

  #balanceBelowZero = (value) => {
    return this._balance - value < 0
  }

  #invalidAmount = (value) => {
    return value <= 0
  }

  #addTransaction = ({value: value, transactionType: type}) => {
    this._transactions.push({
      transactionType: type,
      value: value,
    });
  };
}

module.exports = Account;
