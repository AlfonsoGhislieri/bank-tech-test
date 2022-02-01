const TransactionHistory = require('../src/transactionHistoryModel.js');

describe('TransactionHistory', () => {
  const transactionMock = {
    date: '01/02/2022',
    credit: 500,
    debit: null,
    balance: 500,
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
    expect(transactionHistory.viewStatements()).toEqual(
        'date || credit || debit || balance\n01/02/2022 || 500 || null || 500\n',
    );
  });

  test('displays multiple transaction in history by newest', () => {
    const transactionMock2 = {
      date: '03/02/2022',
      credit: null,
      debit: 500,
      balance: 0,
    };
    transactionHistory.addTransaction(transactionMock);
    transactionHistory.addTransaction(transactionMock2);

    expect(transactionHistory.viewStatements()).toEqual(
        'date || credit || debit || balance\n03/02/2022 || null || 500 || 0\n01/02/2022 || 500 || null || 500\n',
    );
  });
});
