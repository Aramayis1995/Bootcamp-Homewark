function findLargestProduct(arr) {
  let result = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > result) {
      result = arr[i] * arr[i + 1];
    }
  }
  if (result === -0) {
    result = 0;
  }
  return result;
}
console.log(findLargestProduct([-1, 2, -3, 4, -5, 0]));
