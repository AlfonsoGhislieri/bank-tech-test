# bank-tech-test

Completed bank-tech-test with the following requirements:
* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Setup

```
git clone https://github.com/AlfonsoGhislieri/bank-tech-test.git
cd bank-tech-test
npm install
```

### Usage
```
node
const Client = require('./src/clientModel.js');
const Account = require('./src/accountModel.js');

const user = new Client({name: 'User'});
const account = new Account({client: user});

Eg:
_______
account.getOwner()
account.deposit(500)
account.withdraw(250)
account.getStatements()
'date || credit || debit || balance\n' +
  '01/02/2022 ||  || 250 || 250\n' +
  '01/02/2022 || 500 ||  || 500\n'
```

### Tests and seeing coverage
```
npm test \\ runs all tests and shows coverage
```


