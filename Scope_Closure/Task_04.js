let printAfter = (argument) => {
  console.log("hello , warld");
  argument();
};
const print = () => console.log("Elon Musk");
printAfter(print);
