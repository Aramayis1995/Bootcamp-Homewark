//Write functions that willreturn head and tail of Array
function gethead(arr) {
  let [head] = arr;
  return head;
}
console.log(gethead([1, 2, 3, 4, 5]));

function gettail(arr) {
  let [, ...tail] = arr;
  return tail;
}
console.log(gettail([1, 2, 3, 4, 5]));
