let copyArr = [];
function getMap(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    copyArr[i] = func(arr[i]);
  }
  return copyArr;
}
//test
function calculateSum(el) {
  return el * 2;
}
console.log(getMap([1, 2, 3, 4, 5], calculateSum));
