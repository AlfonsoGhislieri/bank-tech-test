class TransactionHistory {
  constructor() {
    this._transactions = [];
  }

  addTransaction = (transaction) => this._transactions.push(transaction);

  viewStatements = () => {
    let result = 'date || credit || debit || balance\n'
    for (const transaction in this._transactions.reverse()) {
      const statement = this.#createStatement(this._transactions[transaction]);
      result += statement 
    }
    return result
  }

  #createStatement = (transaction) => {
    const date = transaction['date']
    const credit = transaction['credit']
    const debit = transaction['debit']
    const balance = transaction['balance']
    return (`${date} || ${credit} || ${debit} || ${balance}\n`)
  }
}

module.exports = TransactionHistory;