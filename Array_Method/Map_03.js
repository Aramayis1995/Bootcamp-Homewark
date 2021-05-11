//Write a function which parses string integers. If it's not possible to parse, then add null

function parseInteger(arr) {
  result = arr.map((el) => {
    if (Number.isNaN(parseInt(el))) {
      return null;
    }
    return parseInt(el);
  });
  return result;
}
console.log(parseInteger(["1", "2", "34"]));
console.log(parseInteger(["0", "px", "2323"]));
