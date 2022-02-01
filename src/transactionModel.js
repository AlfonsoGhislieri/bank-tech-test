class Transaction {
  constructor({amount: amount, transactionType: type, balance: balance,}) {
    this._amount = amount;
    this._type = type;
    this._balance = balance;
    this._date = new Date().toLocaleDateString();
  }
}

module.exports = Transaction;