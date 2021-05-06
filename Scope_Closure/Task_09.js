function findEvenNumbersQuadratic(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i] ** 2;
    }
  }
  if (result === 0) {
    return "no even number";
  }
  return result;
}
console.log(findEvenNumbersQuadratic([1, 2, 3, 4, 5, 6]));
