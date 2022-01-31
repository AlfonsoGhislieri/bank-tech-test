const Client = require('../lib/clientModel.js')

describe('clientModel', () => {

  test('model stores name of Client', () => {
    let client = new Client({name: 'Test'});
    expect(client.getName()).toBe('Test')
  })
});
