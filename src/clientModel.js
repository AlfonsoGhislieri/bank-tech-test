class Client {
  constructor({name}) {
    this._name = name;
  }

  getName = () => this._name;
}

module.exports = Client;
