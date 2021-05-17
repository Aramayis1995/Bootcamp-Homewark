function getBestStudent(obj) {
  let resultAvg = 0;
  let resultName;
  for (let key in obj) {
    let sum = obj[key].reduce((acc, current) => {
      return (acc += current);
    }, 0);
    if (resultAvg < sum / obj[key].length) {
      resultAvg = sum / obj[key].length;
      resultName = key;
    }
  }
  return `${resultName} ${resultAvg}`;
}
console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
