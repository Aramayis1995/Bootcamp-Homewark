function getForEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
//test
function calculateSum(el) {
  console.log(el);
}
getForEach([1, 2, 3, 4, 5], calculateSum);
