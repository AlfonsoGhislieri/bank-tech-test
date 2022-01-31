const Bank = require('../src/bankModel.js')

describe('bankModel', () => {
  let bank;
  const userMock = { getName: "test" };
  beforeEach(() => {
    bank = new Bank();
  });

  describe('initialization', () => {
    test('initialized with an empty array of clients', () => {
      expect(bank.getClients()).toBeInstanceOf(Array);
      expect(bank.getClients().length).toBe(0);
    });
    test('initialized with an empty array of transactions', () => {
      expect(bank._transactions).toBeInstanceOf(Array);
      expect(bank._transactions.length).toEqual(0);
    });
  });

  test('.add client', () => {
    bank.addClient(userMock)
    expect(bank.getClients().length).toEqual(1);
    expect(bank.getClients()[0]).toBe(userMock);
  });

  describe('.deposit', () => {
    test('.deposit adds a transaction to transactions array', () => {
      bank.deposit({client: userMock, value: 500});
      expect(bank._transactions.length).toEqual(1)
      expect(bank._transactions[0]).toEqual({client: userMock, transactionType: "Deposit", value: 500})
    })

  });
});
