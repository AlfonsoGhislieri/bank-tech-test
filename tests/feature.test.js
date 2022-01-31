const Client = require('../src/clientModel.js')
const Bank = require('../src/bankModel.js')

describe('Feature', () => {
  test('Feature test', () => {
    let client = new Client({name: 'Test'});
    let bank = new Bank(client);
  })
});