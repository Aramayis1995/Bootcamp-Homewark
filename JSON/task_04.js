//Write function that will group by some rule
function getObjectMathFloor(arr, fn) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[fn(arr[i])]) {
      obj[fn(arr[i])].push(arr[i]);
    } else {
      obj[fn(arr[i])] = [arr[i]];
    }
  }
  return obj;
}
console.log(getObjectMathFloor(["aaa", "bbb", "cccc"], (i) => i.length));
