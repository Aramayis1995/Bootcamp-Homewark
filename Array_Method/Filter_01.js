//Given an array, return a new array that only includes the numbers.
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
function filterNumbers(arr) {
  return arr.filter((el) => typeof el === "number" && !isNaN(el));
}
console.log(filterNumbers(arr));
