//Concatenate the two arrays
function ConcatenateArray(firstArr, secondArr) {
  secondArr.forEach((element) => {
    firstArr.push(element);
  });
  return firstArr;
}
console.log(ConcatenateArray([1, 2, 3, 4], [5, 6, 7, 8, 9]));
