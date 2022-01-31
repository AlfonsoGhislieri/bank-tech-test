const Bank = require('../lib/bankModel.js')

describe('bankModel', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });

  test('initialized with an empty array of clients', () => {
    expect(bank.clients).toBeInstanceOf(Array)
    expect(bank.clients.length).toBe(0)
  })
});
