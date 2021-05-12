function getFindIndex(arr, funk) {
  for (let i = 0; i < arr.length; i++) {
    if (funk(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(getFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], calculate));

function calculate(n) {
  return n > 5;
}
