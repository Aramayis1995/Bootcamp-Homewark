const arr = [{ b: undefined }, null, NaN, undefined, 0, "", 1, () => {}];

const serializedArr = JSON.stringify(arr);
console.log(typeof serializedArr, serializedArr);
const parsedArr = JSON.parse(serializedArr);
console.log(typeof parsedArr, parsedArr.filter(Boolean));
