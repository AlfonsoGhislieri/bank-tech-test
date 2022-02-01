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
    jest.clearAllMocks();
    account = new Account({
      client: Client,
      transactionModel: Transaction,
      transactionHistoryModel: TransactionHistory,
    });
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

    test('transaction and transaction history are called', () => {
      const spy = jest.spyOn(account._transactionHistoryModel, 'addTransaction');

      account.deposit(500);
      expect(Transaction).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledTimes(1);
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

    test('transaction and transaction history are called', () => {
      const spy = jest.spyOn(account._transactionHistoryModel, 'addTransaction');
      account.deposit(500); // deposit so that no error when withdrawing
      account.withdraw(500);

      expect(Transaction).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe('.getStatements', () => {
    TransactionHistory.prototype.viewStatements = jest.fn().mockImplementation(() => {
      return ('date || credit || debit || balance\n' +
      '01/02/2022 ||  || 500 || 0\n' +
      '01/02/2022 || 500 ||  || 500\n');
    });

    test('displays transaction statement from transactionHistory model', () => {
      console.log = jest.fn();
      account.getStatements();
      expect(console.log.mock.calls[0][0])
          .toEqual('date || credit || debit || balance\n' +
          '01/02/2022 ||  || 500 || 0\n' +
          '01/02/2022 || 500 ||  || 500\n');
    });

    test('TransactionHistory class is called', () => {
      const spy = jest.spyOn(TransactionHistory.prototype, 'viewStatements');
      account.getStatements();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
