function checkUniqueWard(str) {
  let resultT = "true";
  let resultF = "false";
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return resultF;
      }
    }
  }
  return resultT;
}
console.log(checkUniqueWard("isogram"));
