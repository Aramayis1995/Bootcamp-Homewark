function getLength(arr) {
  count = 0;
  let x;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (count <= arr[i].length) {
      count = arr[i].length;
      x = arr[i].length;
    }
  }
  console.log(x);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length === x) {
      res.push(arr[j]);
    }
  }
  return res;
}
console.log(getLength(["asdf", "asdfgty", "asfg", "asfdsdg", "asdfgty"]));
