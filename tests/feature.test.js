const Account = require('../src/accountModel.js');
const Client = require('../src/clientModel.js');
const Transaction = require('../src/transactionModel.js');
const TransactionHistory = require('../src/transactionHistoryModel.js');


describe('Feature', () => {
  test('Feature test', () => {
    let client = new Client({name: 'Test'});
    let account = new Account({
      client: client, 
      transactionModel: Transaction,
      transactionHistoryModel: TransactionHistory
    })
    expect(account.getOwner()).toEqual(client)
    expect(account.getBalance()).toEqual(0)

    account.deposit(500)
    expect(account.getBalance()).toEqual(500)
    account.withdraw(500)
    expect(account.getBalance()).toEqual(0)

  })
});