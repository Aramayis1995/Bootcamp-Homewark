//Write function that will do reverse operation for Object.entries

function reversEntrise(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}
console.log(
  reversEntrise([
    [3, "c"],
    [1, "a"],
    [2, "b"],
  ])
);
