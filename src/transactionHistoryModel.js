class TransactionHistory {
  constructor() {
    this._transactions = [];
  }

  addTransaction = (transaction) => this._transactions.push(transaction);

  viewStatements = () => {
    let result = 'date || credit || debit || balance\n';

    result += this._transactions.reverse()
        .map( (transaction) => this.#createStatement(transaction))
        .join('');

    return result;
  };

  #createStatement = (transaction) => {
    let credit = ""
    let debit = ""
    const date = transaction['date'];
    const balance = transaction['balance'];

    if (transaction['credit'] != null) {
      credit = transaction['credit'];
    }

    if (transaction['debit'] != null) {
      debit = transaction['debit'];
    }

    return (`${date} || ${credit} || ${debit} || ${balance}\n`);
  };
}

module.exports = TransactionHistory;
