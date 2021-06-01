function getMounts(date1, date2) {
  let arrMonth = [
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
  let [year1, month1] = [date1.getFullYear(), date1.getMonth()];
  let [year2, month2] = [date2.getFullYear(), date2.getMonth()];
  if (month1 > 11 || month2 > 11) {
    return "wrong date";
  }
  if (year1 === year2) {
    for (let i = Number(month1); i <= Number(month2); i++) {
      arrResult.push(arrMonth[i]);
    }
  } else {
    for (let i = Number(month1); i <= 11; i++) {
      arrResult.push(arrMonth[i]);
    }
    for (let n = Number(year1); n < Number(year2 - 1); n++) {
      for (let j = 0; j <= 11; j++) {
        arrResult.push(arrMonth[j]);
      }
    }

    for (let k = 0; k <= month2; k++) {
      arrResult.push(arrMonth[k]);
    }
  }
  return arrResult;
}
console.log(getMounts(new Date(2020, 11, 1), new Date(2020, 8, 1)));
