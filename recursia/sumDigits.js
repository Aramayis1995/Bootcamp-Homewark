const sumOfDigits = (num) => {
  const iter = (num, sum) => {
    if (num + sum < 10) {
      return num + sum;
    }
    if (num === 0) {
      num = sum;
      sum = 0;
    }
    sum += num % 10;
    return iter((num - (num % 10)) / 10, sum);
  };
  return iter(num, 0);
};
console.log(sumOfDigits(14));
console.log(sumOfDigits(29));
console.log(sumOfDigits(998999999999));
