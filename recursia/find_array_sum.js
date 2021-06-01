//to find the sum of a given array.
function getArrSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + getArrSum(arr.slice(1));
  }
}
console.log(getArrSum([1, 2, 3, 4, 5]));
