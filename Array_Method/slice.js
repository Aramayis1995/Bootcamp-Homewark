function getSlice(arr, x, y) {
  if (y === undefined || y > arr.length) {
    y = arr.length;
  }
  if (y < 0) {
    y = arr.length + y;
  }
  if (x < -arr.length) {
    x = -arr.length;
  }
  if (x < 0) {
    x = arr.length + x;
  }
  let resArr = [];
  for (i = x; i < y; i++) {
    resArr.push(arr[i]);
  }
  return resArr;
}
console.log(getSlice([1, 2, 3, 4, 5, 6], 1, 1));
