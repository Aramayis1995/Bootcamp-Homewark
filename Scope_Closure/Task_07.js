function checkUniqueArray(arr) {
  let resultT = "true";
  let resultF = "false";
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return resultF;
      }
    }
  }
  return resultT;
}
console.log(checkUniqueArray([5, "Ani", 1, "", 15]));
