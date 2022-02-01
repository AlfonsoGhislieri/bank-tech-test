const Transaction = require('../src/transactionModel.js');
var timekeeper = require('timekeeper');
var time = new Date(1643707675097);
timekeeper.freeze(time);

describe('Transaction', () => {
  const mockDate = new Date().toLocaleDateString()
  
  describe('initialization', () => {
    test('an instance of a transaction stores a deposit', () => {
      const transaction = new Transaction({
        amount: 500, 
        transactionType: "deposit",
        balance: 500,
        date: mockDate });

      expect(transaction._amount).toEqual(500);
      expect(transaction._type).toEqual("deposit");
      expect(transaction._balance).toEqual(500)
      expect(transaction._date).toEqual("01/02/2022")
    });
    test('an instance of a transaction stores a withdrawal', () => {
      const transaction = new Transaction({
        amount: 500, 
        transactionType: "withdraw",
        balance: 0,
        date: mockDate });

      expect(transaction._amount).toEqual(500);
      expect(transaction._type).toEqual("withdraw");
      expect(transaction._balance).toEqual(0)
      expect(transaction._date).toEqual("01/02/2022")
    });
  });
});
