function getEvery(arr, funk) {
  for (let i = 0; i < arr.length; i++) {
    if (!funk(arr[i])) {
      return false;
    }
  }
  return true;
}
console.log(getEvery([1, 2, 3, 4, 5, 6, 7, 8, 9], calculate));

function calculate(n) {
  return n < 11;
}
