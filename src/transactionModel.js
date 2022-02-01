class Transaction {
  constructor({credit: credit, debit: debit, balance: balance,}) {
    this.date = new Date().toLocaleDateString();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}

module.exports = Transaction;