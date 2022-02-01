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

    console.log(result)
    return result;
  };

  #createStatement = (transaction) => {
    let credit = transaction['credit'];
    let debit = transaction['debit'];
    const date = transaction['date'];
    const balance = transaction['balance'];

    return (`${date} || ${(credit || "")} || ${(debit || "")} || ${balance}\n`);
  };
}

module.exports = TransactionHistory;
