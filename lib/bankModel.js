class Bank {
  constructor(){
    this._clients = [];
    this._transactions = [];
  }

  getClients = () => this._clients;

  addClient = (client) => this._clients.push(client);
}

module.exports = Bank;