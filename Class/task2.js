class Account {
  static counter = 0;
  static identifyAccounts(accountFirst, accountSecond) {
    return (
      accountFirst.id === accountSecond.id &&
      accountFirst.name === accountSecond.name &&
      accountFirst.balance === accountSecond.balance
    );
  }
  constructor(name, balance) {
    this._id = Account.counter;
    this._name = name;
    this._balance = balance;
    Account.counter++;
  }

  get id() {
    return this._id;
  }
  set id(value) {
    throw Error("invalid id");
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "number") {
      throw Error("invalid price");
    }
    this_name = value;
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
      throw Error("invalid price");
    }
    this._balance = value;
  }
  credit(amount) {
    this.balance += amount;
    return this.balance;
  }
  debit(amount) {
    if (this.balance - amount < 0) {
      throw Error("Amount exceeded balance.");
    }
    this.balance -= amount;
    return this.balance;
  }
  transferTo(anotherAcc, amount) {
    this.debit(amount);
    anotherAcc.credit(amount);
    return cardAcc.balance;
  }
  toString() {
    return `Saving account's account balance is $${savingAcc.balance}.`;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc);
console.log(cardAcc);
console.log(savingAcc.balance);
console.log(savingAcc.credit(400));
console.log(savingAcc.balance);
console.log(savingAcc.debit(1000));
console.log(savingAcc.transferTo(cardAcc, 1000));
console.log(savingAcc.balance);
console.log(cardAcc.balance);
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc));
console.log(Account.identifyAccounts(savingAcc, cardAcc));
console.log(savingAcc.toString());
