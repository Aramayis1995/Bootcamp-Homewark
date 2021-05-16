//Write function that will zip arrays into object
function getZipArray(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === undefined) {
      obj[arr1[i]] = null;
    } else {
      obj[arr1[i]] = arr2[i];
    }
  }
  return obj;
}
console.log(getZipArray(["a", "b", "c"], [1, 2]));
