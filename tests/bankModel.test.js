const Bank = require('../src/bankModel.js');

describe('bankModel', () => {
  let bank;
  const userMock = {getName: 'test'};
  beforeEach(() => {
    bank = new Bank();
  });

  describe('initialization', () => {
    test('initialized with an empty array of clients', () => {
      expect(bank.getClients()).toBeInstanceOf(Array);
      expect(bank.getClients().length).toBe(0);
    });
  });

  test('.addClient adds a client to clients array', () => {
    bank.addClient(userMock);
    expect(bank._clients.length).toEqual(1);
    expect(bank._clients[0]).toBe(userMock);
  });

  test('.getClients returns array of all clients', () => {
    const userMock2 = {getName: 'test2'};
    bank.addClient(userMock);
    bank.addClient(userMock2);
    expect(bank.getClients().length).toEqual(2);
    expect(bank.getClients()[0]).toBe(userMock);
    expect(bank.getClients()[1]).toBe(userMock2);
  });
});
