//Write a recursive function to determine whether all digits of the number are odd or not.
function getDigits(num) {
  let numStr = num + "";
  if (numStr[numStr.length - 1] % 2 === 0) {
    return false;
  }
  if (numStr.length === 1) {
    return true;
  }
  return getDigits(Number(numStr.slice(0, numStr.length - 1)));
}
console.log(getDigits(15013));
