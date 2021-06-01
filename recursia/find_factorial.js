//to find the factorial of a given natural N
function getSumFactorial(num) {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return num;
  }
  return num * getSumFactorial(--num);
}

console.log(getSumFactorial(5));
