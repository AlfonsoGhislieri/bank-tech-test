const Bank = require('../lib/bankModel.js')

describe('bankModel', () => {
  let bank;
  const userMock = { getName: "test" };
  beforeEach(() => {
    bank = new Bank();
  });

  describe('initialization', () => {
    test('initialized with an empty array of clients and transactions', () => {
      expect(bank.getClients()).toBeInstanceOf(Array);
      expect(bank.getClients().length).toBe(0);
  
      expect(bank._transactions).toBeInstanceOf(Array);
      expect(bank._transactions.length).toBe(0);
    })
  })

  test('.add client', () => {
    bank.addClient(userMock)
    expect(bank.getClients().length).toBe(1);
    expect(bank.getClients()[0]).toBe(userMock);
  })

});
