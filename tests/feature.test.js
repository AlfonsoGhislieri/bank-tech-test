const Account = require('../src/accountModel.js');
const Client = require('../src/clientModel.js');
const Transaction = require('../src/transactionModel.js');
const TransactionHistory = require('../src/transactionHistoryModel.js');
const timekeeper = require('timekeeper');
const time = new Date(1643707675097);
timekeeper.freeze(time);

describe('Feature', () => {
  test('Feature test', () => {
    const client = new Client({name: 'Test'});
    const account = new Account({client: client});

    expect(account.getOwner()).toEqual(client);
    expect(account.getBalance()).toEqual(0);

    account.deposit(500);
    expect(account.getBalance()).toEqual(500);
    expect(account._transactionHistoryModel._transactions.length).toEqual(1);
    expect(account._transactionHistoryModel._transactions[0])
        .toBeInstanceOf(Transaction);

    account.withdraw(500);
    expect(account.getBalance()).toEqual(0);
    expect(account._transactionHistoryModel._transactions.length).toEqual(2);
    expect(account._transactionHistoryModel._transactions[1])
        .toBeInstanceOf(Transaction);

    console.log = jest.fn();
    expect(account._transactionHistoryModel).toBeInstanceOf(TransactionHistory);
    account.getStatements();
    expect(console.log.mock.calls[0][0])
        .toEqual('date || credit || debit || balance\n' +
      '01/02/2022 ||  || 500 || 0\n' +
      '01/02/2022 || 500 ||  || 500\n');
  });
});
