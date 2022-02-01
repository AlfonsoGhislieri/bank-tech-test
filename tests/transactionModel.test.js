const Transaction = require('../src/transactionModel.js');
var timekeeper = require('timekeeper');
var time = new Date(1643707675097);
timekeeper.freeze(time);

describe('Transaction', () => {

  describe('initialization', () => {
    test('an instance of a transaction stores a deposit with date', () => {
      const transaction = new Transaction({
        credit: 500, 
        debit: null, 
        balance: 500});

      expect(transaction.credit).toEqual(500);
      expect(transaction.debit).toEqual(null);
      expect(transaction.balance).toEqual(500)
      expect(transaction.date).toEqual("01/02/2022")
    });
    
    test('an instance of a transaction stores a withdrawal with date', () => {
      const transaction = new Transaction({
        credit: null, 
        debit: 500, 
        balance: 0 });

      expect(transaction.credit).toEqual(null);
      expect(transaction.debit).toEqual(500);
      expect(transaction.balance).toEqual(0)
      expect(transaction.date).toEqual("01/02/2022")
    });
  });
});
