class TransactionHistory {
  constructor() {
    this._transactions = [];
  }

  addTransaction = (transaction) => this._transactions.push(transaction);

  viewStatements = () => {
    let result = this.#statementHeader()

    result += this._transactions.reverse()
        .map( (transaction) => this.#createStatement(transaction))
        .join('');

    return result;
  };

  #createStatement = (transaction) => {
    const credit = transaction['credit'];
    const debit = transaction['debit'];
    const date = transaction['date'];
    const balance = transaction['balance'];

    return (`${date} || ${(credit || '')} || ${(debit || '')} || ${balance}\n`);
  };

  #statementHeader = () => 'date || credit || debit || balance\n';
}

module.exports = TransactionHistory;
