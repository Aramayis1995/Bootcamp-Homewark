function getStr(str1, str2) {
  counter = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        counter++;
        str2 = [...str2.slice(0, j), ...str2.slice(j + 1, str2.length)];
        break;
      }
    }
  }
  return counter;
}
console.log(getStr("aaadassssdd", "adasdddd"));
