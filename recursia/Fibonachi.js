//Write a fib(int) function which returns n-th fibonacci number
function getFibonachi(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    return getFibonachi(num - 1) + getFibonachi(num - 2);
  }
}
console.log(getFibonachi(4));
