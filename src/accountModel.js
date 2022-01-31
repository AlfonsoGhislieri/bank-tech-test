class Account {
  constructor(client) {
    this._owner = client;
    this._balance = 0;
    this._transactions = [];
  }

  getOwner = () => this._owner;

  deposit = (value) => {
    this._transactions.push({
      transactionType: "Deposit", 
      value: value
    });
  };
}

module.exports = Account;