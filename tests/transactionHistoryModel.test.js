const TransactionHistory = require('../src/transactionHistoryModel.js');

describe('TransactionHistory', () => {
  const transactionMock = { 
    amount: 500,
    type: "deposit",
    balance: 500,
    date: "01/02/2022"
  };

  let transactionHistory;
  beforeEach(() => {
    transactionHistory = new TransactionHistory();
  });

  test('initialized with empty array of transactions', () => {
    expect(transactionHistory._transactions.length).toEqual(0);
  });

  test('can add transactions to array', () => {
    transactionHistory.addTransaction(transactionMock);
    expect(transactionHistory._transactions.length).toEqual(1);
    expect(transactionHistory._transactions[0]).toEqual(transactionMock);
  });

  test('displays transaction history', () => {
    transactionHistory.addTransaction(transactionMock);
    expect(transactionHistory.viewAllTransactions()).toEqual(
      'date || credit || debit || balance\n01/02/2022 || 500 ||  || 500'
      
      );
  });
})
