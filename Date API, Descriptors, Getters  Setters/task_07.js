function getMount(day) {
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
  let arr = day.split("-");
  return arr[2] + " " + arrMount[Number(arr[1] - 1)] + " " + arr[0];
}
console.log(getMount("2020-05-14"));
