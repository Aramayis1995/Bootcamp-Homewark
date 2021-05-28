class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
    this.due = 0;
  }

  drinkOnly() {
    return this.menu.filter((el) => el.type === "drink").map((el) => el.name);
  }
  foodOnly() {
    return this.menu.filter((el) => el.type === "food").map((el) => el.name);
  }

  cheapestItem() {
    let minPrice = Infinity;
    let nameMinPrice = "";
    this.menu.forEach((el) => {
      if (minPrice > el.price) {
        minPrice = el.price;
        nameMinPrice = el.name;
      }
    });
    return nameMinPrice;
  }

  addOrder(str) {
    let nameArr = this.menu.map((el) => el.name);
    let index = nameArr.indexOf(str);
    if (index !== -1) {
      this.orders.push(str);
      this.due += this.menu[index].price;
      return this.orders;
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    } else {
      let x = this.orders.shift();
      let fullfiled = this.menu.filter((el) => {
        return el.name === x;
      });
      this.due = this.due - fullfiled[0].price;

      return `The ${x} is ready!`;
    }
  }

  listOrder() {
    return this.orders;
  }

  dueAmount() {
    return this.due;
  }
}
let menu = [
  { name: "shawrma", type: "food", price: 1000 },
  { name: "cebab", type: "food", price: 800 },
  { name: "pepsi", type: "drink", price: 200 },
  { name: "tan", type: "drink", price: 250 },
];
let bistro = new CoffeeShop("Mayisi mot", menu);
console.log(bistro.foodOnly());
console.log(bistro.drinkOnly());
console.log(bistro.cheapestItem());
console.log(bistro.addOrder("dolma"));
console.log(bistro.addOrder("cebab"));
console.log(bistro.addOrder("shawrma"));
console.log(bistro.addOrder("pepsi"));
console.log(bistro.fulfillOrder());
console.log(bistro.listOrder());
console.log(bistro.dueAmount());
console.log(bistro.fulfillOrder());
console.log(bistro.fulfillOrder());
console.log(bistro.fulfillOrder());
console.log(bistro.dueAmount());
