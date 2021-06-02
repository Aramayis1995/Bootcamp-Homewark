function getBrackets(str) {
  debugger;
  if (str.length < 3) {
    return str;
  }
  let x = str[0];
  let y = str[str.length - 1];
  console.log(y);
  console.log(str);
  return x + "(" + getBrackets(str.slice(1, str.length - 1)) + ")" + y;
}
console.log(getBrackets("LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO"));
