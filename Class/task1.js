class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  toString() {
    if (this.gender === "male") {
      return `Mr. ${this.name}`;
    } else {
      return `Mrs. ${this.name}`;
    }
  }
}
let author1 = new Author("Artur", "a@mail.ru", "male");
console.log(author1.toString());
console.log(author1);

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }
  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("invalid title");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string") {
      throw new Error("invalid author");
    }
    this._author = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number") {
      throw new Error("invalid price");
    }
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (typeof value !== "number") {
      throw new Error("invalid quantity");
    }
    this._quantity = value;
  }
  getProfit() {
    return this.price * this.quantity;
  }
  toString() {
    return this.title;
  }
}
let book1 = new Book("my book", author1, 1200, 100);
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
book1.author = 12;
