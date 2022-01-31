class User {
  constructor({name}) {
    this._name = name;
  }

  getName = () => this._name;
}

module.exports = User;