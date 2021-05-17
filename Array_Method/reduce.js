const reduce = (array, fn, initialState) => {
  let acc, startingIndex;
  if (typeof initialState === "undefined") {
    acc = array[0];
    startingIndex = 1;
  } else {
    acc = initialState;
    startingIndex = 0;
  }
  if (acc === undefined && array.length === 0) {
    console.log("Erorr");
  }
  for (let i = startingIndex; i < array.length; i++) {
    let element = array[i];
    acc = fn(acc, element, i, array);
  }

  return acc;
};
let arr = [1, 2, 3];
result = reduce(arr, function (acc, curent) {
  acc *= curent;
  return acc;
});
console.log(result);
