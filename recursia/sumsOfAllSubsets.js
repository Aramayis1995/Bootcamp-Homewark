const sumOfSubsets = (nums) => {
  const iter = (nums, index, sums) => {
    if (index === nums.length) {
      return sums;
    }
    sums.forEach((el) => sums.push(nums[index] + el));
    return iter(nums, index + 1, sums);
  };
  return iter(nums, 0, [0]);
};
const arr1 = [2, 3];
const arr2 = [2, 3, 4];
console.log(sumOfSubsets(arr1));
console.log(sumOfSubsets(arr2));
