const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
let Pagination = {
  init: (arr, n) => {
    let splitArr = [];
    let resArr = [];
    for (let j = 0; j < Math.ceil(alphabetArray.length / n); j++) {
      for (let i = n * j; i < n * j + n; i++) {
        if (arr[i] === undefined) {
          break;
        }
        splitArr.push(arr[i]);
      }
      resArr.push(splitArr);
      splitArr = [];
    }
    return resArr;
  },
  page: 0,
  prevPage: () => {
    if (Pagination.page !== 0) Pagination.page--;
    return Pagination;
  },
  nextPage: () => {
    if (Pagination.page !== Pagination.init(alphabetArray).length)
      Pagination.page++;
    return Pagination;
  },
  firstPage: () => {
    Pagination.page = 0;
  },
  lastPage: () => {
    Pagination.page = Math.floor(alphabetArray.length / 4);
  },
  goToPage: (m) => {
    5;
    Pagination.page = m - 1;
  },
  getPageItems: () => {
    a = Pagination.init(alphabetArray, 4);
    console.log(a[Pagination.page]);
  },
};
let x = Pagination.init(alphabetArray, 4);
console.log(x);
Pagination.nextPage().nextPage().prevPage();
Pagination.goToPage(3);
Pagination.firstPage();
Pagination.lastPage();
Pagination.getPageItems();
