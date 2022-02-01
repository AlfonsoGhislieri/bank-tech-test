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

      expect(transaction._amount).toEqual(500);
      expect(transaction._type).toEqual("deposit");
      expect(transaction._balance).toEqual(500)
      expect(transaction._date).toEqual("01/02/2022")
    });
    
    test('an instance of a transaction stores a withdrawal with date', () => {
      const transaction = new Transaction({
        amount: 500, 
        transactionType: "withdraw",
        balance: 0 });

      expect(transaction._amount).toEqual(500);
      expect(transaction._type).toEqual("withdraw");
      expect(transaction._balance).toEqual(0)
      expect(transaction._date).toEqual("01/02/2022")
    });
  });
});
