const Transaction = require('./transactionModel');
const TransactionHistory = require('./transactionHistoryModel');

class Account {
  constructor({client, transactionModel = Transaction, transactionHistoryModel = TransactionHistory}) {
    this._owner = client;
    this._transactionModel = transactionModel;
    this._transactionHistoryModel = new transactionHistoryModel();
    this._balance = 0;
  }

  getOwner = () => this._owner;

  getBalance = () => this._balance;

  getStatements = () => this._transactionHistoryModel.viewStatements();

  deposit = (value) => {
    this._balance += value;
    this.#createTransaction({
      credit: value,
      balance: this._balance,
    });
  };

  withdraw = (value) => {
    const error = this.#checkForErrors(value)

    if (error['error'] === true){
      return error['message']
    }else {
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

  #checkForErrors = (value) => {
    if (this.#balanceBelowZero(value)) {
      return { error: true , message: `Insufficient funds - current balance: ${this._balance}`};
    } else if (this.#invalidAmount(value)) {
      return { error: true , message: 'Invalid amount' };
    } else {
      return { error: false , message: null };
    }
  };

  #balanceBelowZero = (value) => {
    return this._balance - value < 0;
  };

  #invalidAmount = (value) => {
    return value <= 0;
  };
}

module.exports = Account;
