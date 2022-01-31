const Client = require('../src/clientModel.js');
const Account = require('../src/accountModel.js');
const Transaction = require('../src/transactionModel.js');
jest.mock('../src/clientModel.js');
jest.mock('../src/transactionModel.js');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account(Client, Transaction);
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
      expect(account.getOwner()).toEqual(Client);
    });

    test('has access to transaction model', () => {
      expect(account._transactionModel).toEqual(Transaction)
    })
    test('can create an instance of a transaction model', () => {
      const transactionInstance = new account._transactionModel({amount: 500, transactionType: "deposit"})
      expect(transactionInstance).toBeInstanceOf(Transaction)
    })
  });

  describe('.deposit', () => {
    test('raises balance', () => {
      account.deposit(500);
      expect(account.getBalance()).toEqual(500);
    });
  });

  describe('.withdraw', () => {
    test('raises error if withdrawing more money than in balance', () => {
      expect(account.withdraw(500)).toEqual('Insufficient funds - current balance: 0');
    });

    test('raises error if withdrawing 0', () => {
      expect(account.withdraw(0)).toEqual('Invalid amount');
    });

    test('raises error if withdrawing less than 0', () => {
      expect(account.withdraw(-1)).toEqual('Invalid amount');
    });

    test('lowers balance', () => {
      account.deposit(500);
      account.withdraw(500);
      expect(account.getBalance()).toEqual(0);
    });
  });
});
