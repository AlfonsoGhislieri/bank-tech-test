let Account = require('../src/accountModel.js');

describe('bankModel', () => {
  let account;
  const userMock = { getName: "test" };
  beforeEach(() => {
    account = new Account(userMock);
  });

  describe('initialization', () => {
    test('initialized with an empty array of transactions', () => {
      expect(account._transactions).toBeInstanceOf(Array);
      expect(account._transactions.length).toEqual(0);
    });
    test('initialized with balance of 0', () => {
      expect(account.getBalance()).toEqual(0);
    });
    test('stores owner of account', () => {
      expect(account.getOwner()).toEqual(userMock);
    });
  });

  describe('.deposit', () => {
    test('.deposit adds a transaction to transactions array', () => {
      account.deposit(500);
      expect(account._transactions.length).toEqual(1);
      expect(account._transactions[0]).toEqual({
        transactionType: "Deposit", 
        value: 500,});
    });
    test('.deposit raises balance', () => {
      account.deposit(500);
      expect(account.getBalance()).toEqual(500);
    });
  });
});