class TransactionHistory {
  constructor() {
    this._transactions = [];
  }

  addTransaction = (transaction) => this._transactions.push(transaction);
}

module.exports = TransactionHistory;