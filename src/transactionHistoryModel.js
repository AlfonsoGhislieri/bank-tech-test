class TransactionHistory {
  constructor() {
    this._transactions = [];
  }

  addTransaction = (transaction) => this._transactions.push(transaction);

  viewStatements = () => {
    let result = 'date || credit || debit || balance\n';

    result += this._transactions.reverse()
        .map( (elem) => this.#createStatement(elem)).join('');

    return result;
  };

  #createStatement = (transaction) => {
    const date = transaction['date'];
    const credit = transaction['credit'];
    const debit = transaction['debit'];
    const balance = transaction['balance'];
    return (`${date} || ${credit} || ${debit} || ${balance}\n`);
  };
}

module.exports = TransactionHistory;
