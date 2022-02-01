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
    this.#createTransaction({
      value: value, 
      transactionType: 'deposit',
      balance: this._balance,
      date: new Date().toLocaleTimeString()
    });
  };

  withdraw = (value) => {
    if (this.#balanceBelowZero(value)) {
      return `Insufficient funds - current balance: ${this._balance}`;
    } else if (this.#invalidAmount(value)) {
      return 'Invalid amount';
    } else {
      this._balance -= value;
      this.#createTransaction({
        value: value, 
        transactionType: 'withdraw',
        balance: this._balance,
        date: new Date().toLocaleTimeString()
      });
    }
  };

  #balanceBelowZero = (value) => {
    return this._balance - value < 0
  }

  #invalidAmount = (value) => {
    return value <= 0
  }

  #createTransaction = ({value: value, transactionType: type, balance: balance, date: date}) => {
    this._transactions.push(new this._transactionModel({
      transactionType: type,
      value: value,
      balance: balance,
      date: date
    }));
  };
}

module.exports = Account;
