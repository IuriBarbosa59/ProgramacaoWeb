let nums = [10, 23, 35, 42, 55];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    nums.push(nums[i] + 1);
  } else {
    nums.splice(i, 1);
    i--;
  }
}

console.log(nums);