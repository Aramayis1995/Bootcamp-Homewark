//Write a function which returns array of usernames.
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
function getUsernames(arr) {
  return arr.map((el) => el.username);
}
console.log(getUsernames(users));
