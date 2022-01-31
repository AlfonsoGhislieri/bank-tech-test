class Bank {
  constructor() {
    this._clients = [];
  }

  getClients = () => this._clients;

  addClient = (client) => this._clients.push(client);
}

module.exports = Bank;
