//Given an array of numbers which is almost sorted in ascending order.
//Find the index where sorting order is violated.
let res = -Infinity;
let i = -1;
function findIndex(arr) {
  i++;
  if (arr[i] >= res) {
    res = arr[i];
  } else {
    return i;
  }
  if (i === arr.length - 1) {
    return -1;
  }
  return findIndex(arr);
}
//console.log(findIndex([-9, -4, -4, 3, 12, 4, 5]));
console.log(findIndex([2, 12, 15, 48, 64]));
