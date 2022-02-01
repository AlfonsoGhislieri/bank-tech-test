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

Eg: (Chosen instead of a img as this a program that works in Node)
_______
account.getOwner()
account.deposit(500)
account.withdraw(250)
account.getStatements() 
--->
  date || credit || debit || balance
  01/02/2022 ||  || 250 || 250
  01/02/2022 || 500 ||  || 500
```

### Tests and seeing coverage
```
npm test \\ runs all tests and shows coverage
```

### Approach

I decided to tackle the tech-test by trying to deconstruct the approach in multiple classes in order to adhere to SRP and allow for the code to be easily changed in the future.

- `Client` class was added but not originally needed. I liked the idea that the account would have to have an owner, and if this was to be scaled this could store all of the information of a client.

- `Account` class takes care of all of the funcationality, it allows a user to deposit, withdraw and view his statements. I wanted this to act as a 'controller' which would tie together all the other classes.
  - `Transaction` is injected into `Account`, everytime the user deposits or withdraws money an instance of transaction is created, and then passed to the `TransactionHistory` class (injected and initialized in `Account`), which takes care of storing all of the transaction instances.
  - `TransactionHistory` also maps all the transactions together and allows the user to see these by using the `.getStatements()` method in the `Account` class.


