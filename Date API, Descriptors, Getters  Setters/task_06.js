function getDayOfYar(date) {
  let arr = date.split("/");
  firstDay1 = arr[2] + "-" + arr[0] + "-" + "01";
  const day1 = new Date(firstDay1).getDay();

  const day2 = new Date(date).getDay();
  let secondDay = arr[2] + "-" + arr[0] + "-" + arr[1];
  firstDay = arr[2] + "-" + arr[0] + "-" + "01";
  let ms = Date.parse(secondDay);
  let ns = Date.parse(firstDay);
  let res = ms - ns;
  a = res / 1000 / 60 / 60 / 24 + 1;
  if (day1 === 0) {
    return Math.ceil(a / 7);
  } else {
    return Math.ceil((a + day1 - 7) / 7 + 1);
  }
}
console.log((x = getDayOfYar("11/30/2021")));
