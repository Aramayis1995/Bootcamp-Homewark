function coffeeShop(name, menu) {
  this.name = name;
  this.menu = menu;
  this.order = [];
}
let menu = [
  { name: "shawrma", type: "food", price: 1000 },
  { name: "cebab", type: "food", price: 2000 },
  { name: "pepsi", type: "drink", price: 200 },
  { name: "tan", type: "drink", price: 250 },
];
coffeeShop.prototype.addOrder = function addNew(name) {
  let x = this.menu.map((el) => el.name);
  console.log(x);
};

let aaa = new coffeeShop("aaa", menu);
aaa.addOrder("pepsi");
