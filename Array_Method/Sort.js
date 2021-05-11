function sortBy(arr, str) {
  if (str === "Asc") {
    arr.sort((a, b) => a - b);
    return arr;
  } else if (str === "Desc") {
    arr.sort((a, b) => b - a);
    return arr;
  }
  return arr;
}
console.log(sortBy([4, 3, 2, 1], "Asc")); // [1, 2, 3, 4]
console.log(sortBy([7, 80, 11, 66])); // [7, 80, 11, 66]
console.log(sortBy([7, 8, 11, 66], "Desc")); // [66, 11, 8, 7]
