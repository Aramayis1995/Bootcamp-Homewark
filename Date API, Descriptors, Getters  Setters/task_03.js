function getMounts(date1, date2) {
  let arrMount = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let arrResult = [];
  let arr1 = date1.split("/");
  let arr2 = date2.split("/");
  if (arr1[1] > 11 || arr2[1] > 11) {
    return "wrong date";
  }
  if (arr1[0] === arr2[0]) {
    for (let i = Number(arr1[1]); i <= Number(arr2[1]); i++) {
      arrResult.push(arrMount[i]);
    }
  } else {
    for (let i = Number(arr1[1]); i <= 11; i++) {
      arrResult.push(arrMount[i]);
    }
    for (let n = Number(arr1[0]); n < Number(arr2[0] - 1); n++) {
      for (let j = 0; j <= 11; j++) {
        arrResult.push(arrMount[j]);
      }
    }

    for (let k = 0; k <= arr2[1]; k++) {
      arrResult.push(arrMount[k]);
    }
  }
  return arrResult;
}
console.log(getMounts("2020 / 00 / 01", "2021 / 11 / 01"));
