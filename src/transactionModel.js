class Transaction {
  constructor({amount: amount, transactionType: type, balance: balance,}) {
    this.amount = amount;
    this.type = type;
    this.balance = balance;
    this.date = new Date().toLocaleDateString();
  }
}

module.exports = Transaction;