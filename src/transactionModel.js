class Transaction {
  constructor({amount: amount, transactionType: type}) {
    this._amount = amount;
    this._type = type;
  }
}

module.exports = Transaction;