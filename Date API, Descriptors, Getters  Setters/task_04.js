function getDayOfYar(date) {
  let arr = date.split("/");
  let secondDay = arr[2] + "-" + arr[0] + "-" + arr[1];
  firstDay = arr[2] + "-" + "01" + "-" + "01";
  let ms = Date.parse(secondDay);
  let ns = Date.parse(firstDay);
  let res = ms - ns;
  return res / 1000 / 60 / 60 / 24 + 1;
}
console.log(getDayOfYar("12/13/2020"));
