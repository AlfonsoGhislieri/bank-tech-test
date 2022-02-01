class Transaction {
  constructor({
    amount: amount, 
    transactionType: type, 
    balance: balance,
    date: date}) {
    
    this._amount = amount;
    this._type = type;
    this._balance = balance;
    this._date = date;
  }
}

module.exports = Transaction;