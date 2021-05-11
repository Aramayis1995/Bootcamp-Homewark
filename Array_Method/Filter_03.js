//- Write a function which filters object by field.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
function filterByField(obj, str) {
  return obj.filter((el) => el[str] === true);
}
console.log(filterByField(users, "isAstronaut"));
// [{ username: "Yuri Gagarin",
// lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
// }]
