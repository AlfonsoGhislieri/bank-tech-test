const Client = require('../lib/clientModel.js')
const Bank = require('../lib/bankModel.js')

describe('Feature', () => {
  test('Feature test', () => {
    let client = new Client({name: 'Test'});
    let bank = new Bank(client);
  })
});