const Transaction = require('./transactionModel');
const TransactionHistory = require('./transactionHistoryModel');

class Account {
  constructor({
    client,
    transactionModel = Transaction,
    transactionHistoryModel = TransactionHistory,
  }) {
    this._owner = client;
    this._transactionModel = transactionModel;
    this._transactionHistoryModel = new transactionHistoryModel();
    this._balance = 0;
  }

  getOwner = () => this._owner;

  getBalance = () => this._balance;

  getStatements = () => console.log (this._transactionHistoryModel.viewStatements());

  deposit = (value) => {
    if (this.#invalidAmount(value)) {
      return 'Invalid amount'
    } else {
    this._balance += value;
    this.#createTransaction({
      credit: value,
      balance: this._balance });
    };
  };

  withdraw = (value) => {
    if (this.#balanceBelowZero(value)) {
      return `Insufficient funds - current balance: ${this._balance}`
    } else if (this.#invalidAmount(value)) {
      return 'Invalid amount'
    } else {
      this._balance -= value;
      this.#createTransaction({
        debit: value,
        balance: this._balance,
      });
    };
  };

  #createTransaction = ({credit = null, debit = null, balance}) => {
    this._transactionHistoryModel.addTransaction(new this._transactionModel({
      credit: credit,
      debit: debit,
      balance: balance,
    }));
  };

  #balanceBelowZero = (value) => {
    return this._balance - value < 0;
  };

  #invalidAmount = (value) => {
    return value <= 0;
  };
}

module.exports = Account;
