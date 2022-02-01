class Account {
  constructor({client, transactionModel, transactionHistoryModel}) {
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
    if (this.#balanceBelowZero(value)) {
      return `Insufficient funds - current balance: ${this._balance}`;
    } else if (this.#invalidAmount(value)) {
      return 'Invalid amount';
    } else {
      this._balance -= value;
      this.#createTransaction({
        debit: value,
        balance: this._balance,
      });
    }
  };

  #balanceBelowZero = (value) => {
    return this._balance - value < 0;
  };

  #invalidAmount = (value) => {
    return value <= 0;
  };

  #createTransaction = ({credit = null, debit = null, balance}) => {
    this._transactionHistoryModel.addTransaction(new this._transactionModel({
      credit: credit,
      debit: debit,
      balance: balance,
    }));
  };
}

module.exports = Account;
