function getSplice(arr, x, length, ...args) {
  if (length <= 0) {
    return [];
  }
  if (x > arr.length) {
    arr = [...arr, ...args];
    array = arr;
    return [];
  }
  if (x < 0) {
    x = 0;
  }
  if (length > arr.length) {
    length = arr.length;
  }
  arrIndex = [];
  for (let i = x; i < x + length; i++) {
    arrIndex.push(arr[i]);
  }
  arr = [...arr.slice(0, x), ...args, ...arr.slice(x + length)];
  array = arr;

  return arrIndex;
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getSplice(array, -302, -2, 80));
console.log(array);
