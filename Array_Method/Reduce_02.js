//- Write a function which calculates average age of users.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
function getAverageAge(obj) {
  let sum = obj.reduce((acc, current) => {
    return (acc += current.age);
  }, 0);
  return sum / obj.length;
}
console.log(getAverageAge(users)); // 55
