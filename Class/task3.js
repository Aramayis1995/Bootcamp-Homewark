class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== "string") {
      throw Error("invalid firstName");
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value === "number") {
      throw Error("invalid lastName");
    }
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    if (value !== male || value !== female) {
      throw Error("invalid gender");
    }
    this._gender = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== "number") {
      throw Error("invalid age");
    }
    this._age = value;
  }
  toString() {
    return `${this.firstName} ${this.lastName} , ${this.age} years old`;
  }
}
let user1 = new Person("Poxos", "Poxosyan", "female", 23);
user1.firstName = "Arthur";
console.log(user1.toString()); // Name Surname, 23 years old.
