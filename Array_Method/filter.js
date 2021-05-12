let copyArr = [];
function getFilter(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) copyArr.push(arr[i]);
  }
  return copyArr;
}
//test
function calculateSum(el) {
  return el > 2;
}
console.log(getFilter([1, 2, 3, 4, 5], calculateSum));
