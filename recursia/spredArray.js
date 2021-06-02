const flat = (arr) => {
  const iter = (arr, index) => {
    if (index === arr.length) {
      return arr;
    }
    if (Array.isArray(arr[index])) {
      return [
        ...arr.slice(0, index),
        ...iter(arr[index], 0),
        ...arr.slice(index + 1),
      ];
    }
    return iter(arr, index + 1);
  };
  return iter(arr, 0);
};
const arr1 = [1, [3, 4, [1, 2]], 10];
const arr2 = [14, [1, [[[3, []]], 1], 0]];
const arr3 = [1, 2, [3, 4], 5, 6];
console.log(flat(arr1));
console.log(flat(arr2));
console.log(flat(arr3));
