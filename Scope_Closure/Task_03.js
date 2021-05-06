let add_suffix = (str = "") => {
  let anotherAdd_suffix = (anotherStr = "") => {
    ward = anotherStr + str;
    return ward;
  };
  return anotherAdd_suffix;
};
let add_ly = add_suffix("ly");
let add_less = add_suffix("less");
console.log(add_less("ruth"));
