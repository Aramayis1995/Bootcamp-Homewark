//- Given an array, return the sum of numbers that are 18 or over.\
const array = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347
function subNumbers(arr) {
  return arr.reduce((acc, current) => {
    if (current >= 18) {
      return (acc += current);
    }
    return acc;
  }, 0);
}
console.log(subNumbers(array));
