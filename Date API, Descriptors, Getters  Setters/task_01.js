let obj = {
  _name: [],
  set name(value) {
    if (typeof value === "string") {
      let names = value.split(", ");
      for (let i = 0; i < names.length; i++) {
        obj._name.push(names[i], names[i].length);
      }
    }
  },
  get name() {
    return obj._name;
  },
};
obj.name = "Vrezh, Artavazd";
console.log(obj.name);
