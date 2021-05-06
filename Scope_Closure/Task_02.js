function returnFunction(str) {
  function returnString() {
    return str;
  }
  return returnString;
}

console.log(returnFunction("apple")());
