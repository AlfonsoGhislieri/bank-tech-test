const User = require('../lib/userModel.js')

describe('userModel', () => {

  test('model stores name of User', () => {
    let user = new User({name: 'Test'});
    expect(user.getName()).toBe('Test')
  })
});
