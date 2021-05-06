# Closure function

---

## Create a function that implements partial sum

```javascript
let sum = (num = 0) => {
  let anotherSum = (anotherNum = 0) => {
    count = num + anotherNum;
    return count;
  };
  return anotherSum;
};
const addOne = sum(1);
const addTen = sum(10);
console.log(addOne(4));
```

---
