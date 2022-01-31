const Transaction = require('../src/transactionModel.js');

describe('Transaction', () => {
  
  describe('initialization', () => {
    test('an instance of a transaction stores a deposit', () => {
      const transaction = new Transaction({amount: 500, transactionType: "deposit"});

      expect(transaction._amount).toEqual(500);
      expect(transaction._type).toEqual("deposit");
    });
    test('an instance of a transaction stores a withdrawal', () => {
      const transaction = new Transaction({amount: 500, transactionType: "withdraw"});

      expect(transaction._amount).toEqual(500);
      expect(transaction._type).toEqual("withdraw");
    });
  });
});
