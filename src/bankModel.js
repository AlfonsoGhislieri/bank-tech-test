class Bank {
  constructor(){
    this._clients = [];
    this._transactions = [];
  }

  getClients = () => this._clients;

  addClient = (client) => this._clients.push(client);

  deposit = ({client: client, value: value}) => {
    this._transactions.push({
      client: client, 
      transactionType: "Deposit", 
      value: value
    });
  };
}

module.exports = Bank;