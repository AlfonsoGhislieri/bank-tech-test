const Account = require('../src/accountModel.js');
const Client = require('../src/clientModel.js');
const Transaction = require('../src/transactionModel.js');
const TransactionHistory = require('../src/transactionHistoryModel.js');
jest.mock('../src/clientModel.js');
jest.mock('../src/transactionModel.js');
jest.mock('../src/transactionHistoryModel.js');

describe('Account', () => {
  TransactionHistory.prototype.addTransaction = jest.fn().mockImplementation(() => null);

  beforeEach(() => {
    Transaction.mockClear();
    account = new Account({
      client: Client,
      transactionModel: Transaction,
      transactionHistoryModel: TransactionHistory});
  });

  describe('initialization', () => {
    test('initialized with balance of 0', () => {
      expect(account.getBalance()).toEqual(0);
    });

    test('stores owner of account', () => {
      expect(account.getOwner()).toEqual(Client);
    });

    test('has access to transaction model', () => {
      expect(account._transactionModel).toEqual(Transaction);
    });

    test('creates an instance of transaction history model', () => {
      expect(account._transactionHistoryModel).toBeInstanceOf(TransactionHistory);
    });
  });

  describe('.deposit', () => {
    test('raises balance', () => {
      expect(account.getBalance()).toEqual(0);
      account.deposit(500);
      expect(account.getBalance()).toEqual(500);
    });

    test('creates transaction instance', () => {
      account.deposit(500);
      expect(account._transactionModel).toHaveBeenCalledTimes(1);
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
      account.deposit(500); // deposit so that no error when withdrawing
      expect(account.getBalance()).toEqual(500);
      account.withdraw(500);
      expect(account.getBalance()).toEqual(0);
    });

    test('creates transaction instance', () => {
      account.deposit(500); // deposit so that no error when withdrawing
      account.withdraw(500);

      expect(account._transactionModel).toHaveBeenCalledTimes(2);
    });
  });

  describe('.getStatements', () => {
    test('displays transaction statement from transactionHistory model', () => {
      TransactionHistory.prototype.viewStatements = jest.fn().mockImplementation(() => {
        return ('date || credit || debit || balance\n' +
        '01/02/2022 ||  || 500 || 0\n' +
        '01/02/2022 || 500 ||  || 500\n');
      });
      expect(account.getStatements())
          .toEqual('date || credit || debit || balance\n' +
          '01/02/2022 ||  || 500 || 0\n' +
          '01/02/2022 || 500 ||  || 500\n');
    });
  });
});
