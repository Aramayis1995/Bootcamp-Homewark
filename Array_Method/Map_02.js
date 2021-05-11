//Write a function which returns array of lengths of user names
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
function getUsernameLengths(arr) {
  return arr.map((el) => el.username.length);
}
console.log(getUsernameLengths(users));
