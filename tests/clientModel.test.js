const Client = require('../src/clientModel.js');

describe('Client', () => {
  test('model stores name of Client', () => {
    const client = new Client({name: 'Test'});
    expect(client.getName()).toBe('Test');
  });
});
