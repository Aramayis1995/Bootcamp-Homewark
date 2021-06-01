let res = [];
let i = 0;
let j = 0;
function spreedArray(arr) {
  if (i === arr.length) {
    return res;
  }
  if (Array.isArray(arr[i])) {
    if (j === arr[i].length) {
      i++;
      return spreedArray(arr);
    }
    res.push(arr[i][j]);
    j++;
    return spreedArray(arr);
  }
  res.push(arr[i]);
  i++;
  return spreedArray(arr);
}
console.log(spreedArray([1, [3, [[2, 4], 1]], 2, 10]));
