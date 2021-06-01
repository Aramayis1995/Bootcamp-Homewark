//Given an array of numbers. Write a recursive function to find its minimal positive element.
//(if such element does not exist, return -1).
let res = Infinity;
function printMinNum(array) {
  let x = array.pop();
  if (res > x && x >= 0) {
    res = x;
  }
  if (array.length === 0 && res !== Infinity) {
    return res;
  } else if (array.length === 0) {
    return -1;
  }

  return printMinNum(array);
}
console.log(printMinNum([56, -9, 87, -23, 0, -105, 55, 1]));
// console.log(printMinNum([45, -9, 15, 5, -78]));
// console.log(printMinNum([-5, -9, -111, -1000, -7]));
