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
console.log(user1.toString());

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value > 100 || value < 0) {
      throw Error("invalid year");
    }
    this._year = value;
  }

  get fee() {
    return this._fee;
  }

  set fee(value) {
    if (typeof value !== "number" || value < 0) {
      throw Error("invalid fee");
    }
    this._fee = value;
  }

  get program() {
    return this._program;
  }

  set program(value) {
    if (!Array.isArray(value)) {
      throw Error("invalid program");
    }
    this._program = value;
  }

  isAllPassed() {
    return this.program.every((el) => el.grade > 50);
  }

  passExam(programName, grade) {
    let index = this.program.findIndex((el) => el.programName === programName);
    if (index === -1) {
      return "invalid program";
    } else {
      this.program[index].grade = grade;
    }
    if (this.isAllPassed()) {
      this.year++;
    }
  }
}
let arr = [
  "Poxos",
  "poxosyan",
  "male",
  10,
  4,
  100000,
  [
    { programName: "math", grade: 10 },
    { programName: "english", grade: undefined },
  ],
];
let Student1 = new Student(...arr);
Student1.passExam("math", 60);
Student1.passExam("english", 70);
console.log(Student1.year);
