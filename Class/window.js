// function getRoom(arr) {
//   let result = arr;
//   let counter = 0;
//   for (let i = 0; i <= result.length; i++) {
//     for (let j = 0; j < result[0].length; j++) {
//       console.log(result[j][i]);
//       counter += result[j][i];
//       if (result[j][i] === 0) {
//         break;
//       }
//     }
//   }
//   return counter;
// }

// let array = [
//   [5, 5, 5, 5, 5, 5, 5],
//   [1, 1, 1, 1, 1, 10, 1],
//   [2, 0, 2, 10, 2, 0, 2],
//   [0, 50, 0, 0, 0, 50, 0],
//   [0, 50, 0, 50, 0, 50, 0],
//   [0, 50, 0, 50, 0, 50, 0],
// ];
// console.log(getRoom(array));

// let res = [];
// function getMaxNumber(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       res.push(arr[i]);
//       continue;
//     }
//     return getMaxNumber(arr[i]);
//   }

//   return res;
// }
// let array = [
//   1,
//   2,
//   3,
//   [
//     [3, 4, 5],
//     [7, 9, 10, [20, 21]],
//   ],
// ];
// console.log(getMaxNumber(ar

// function foo(a, b) {
//   if (b !== undefined) {
//     return a + b;
//   } else {
//     return function (y) {
//       return a + y;
//     };
//   }
// }

// console.log(foo(3, 2));
// console.log(foo(3)(2));

function getArr(arr) {
  arr1 = arr;
  counter = 0;
  if (arr.length < 3) {
    return true;
  }
  for (let i = 0; i < arr.length + 1; i++) {
    console.log(i);

    if (i === arr.length - 1 && arr[i] > arr[i - 1]) {
      return true;
    }

    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      if (counter === 0) {
        counter++;
        arr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
        i -= 1;
        continue;
      } else {
        counter = 0;
        for (let i = 0; i < arr1.length + 1; i++) {
          console.log(i);

          if (i === arr1.length - 1 && arr1[i] > arr1[i - 1]) {
            return true;
          }

          if (arr1[i] < arr1[i + 1]) {
            continue;
          } else {
            if (counter === 0) {
              counter++;
              arr1 = [
                ...arr1.slice(0, i + 1),
                ...arr1.slice(i + 2, arr1.length),
              ];
              i -= 1;
              continue;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
}
console.log(getArr([10, 1, 2, 3, 4, 5]));
