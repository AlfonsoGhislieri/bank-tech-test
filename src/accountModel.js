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

  getStatements = () => {
    console.log(this._transactionHistoryModel.viewStatements());
  };

  deposit = (value) => {
    this.#invalidAmount(value)
    
    this._balance += value;
    return this.#createTransaction({
      credit: value,
      balance: this._balance
    });
  };

  withdraw = (value) => {
    this.#balanceBelowZero(value)
    this.#invalidAmount(value)
     
    this._balance -= value;
    return this.#createTransaction({
      debit: value,
      balance: this._balance,
    });
  };

  #createTransaction = ({credit = null, debit = null, balance}) => {
    this._transactionHistoryModel.addTransaction(new this._transactionModel({
      credit: credit,
      debit: debit,
      balance: balance,
    }));
  };

  #balanceBelowZero = (value) => {
    if (this._balance - value < 0) {
      throw new Error(`Insufficient funds - current balance: ${this._balance}`);
    };
  };

  #invalidAmount = (value) => {
    if (value <= 0) {
      throw new Error('Invalid amount');
    };
  };
};

module.exports = Account;
