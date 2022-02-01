class TransactionHistory {
  constructor() {
    this._transactions = [];
  }

  addTransaction = (transaction) => this._transactions.push(transaction);

  viewAllTransactions = () => {
    // return `date || credit || debit || balance`
  }




}

module.exports = TransactionHistory;