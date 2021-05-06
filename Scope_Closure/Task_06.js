function filterByLength(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
