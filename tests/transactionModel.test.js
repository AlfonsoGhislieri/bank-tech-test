const Transaction = require('../src/transactionModel.js');
var timekeeper = require('timekeeper');
var time = new Date(1643707675097);
timekeeper.freeze(time);

describe('Transaction', () => {

  describe('initialization', () => {
    test('an instance of a transaction stores a deposit with date', () => {
      const transaction = new Transaction({
        amount: 500, 
        transactionType: "deposit",
        balance: 500 });

      expect(transaction.amount).toEqual(500);
      expect(transaction.type).toEqual("deposit");
      expect(transaction.balance).toEqual(500)
      expect(transaction.date).toEqual("01/02/2022")
    });
    
    test('an instance of a transaction stores a withdrawal with date', () => {
      const transaction = new Transaction({
        amount: 500, 
        transactionType: "withdraw",
        balance: 0 });

      expect(transaction.amount).toEqual(500);
      expect(transaction.type).toEqual("withdraw");
      expect(transaction.balance).toEqual(0)
      expect(transaction.date).toEqual("01/02/2022")
    });
  });
});
