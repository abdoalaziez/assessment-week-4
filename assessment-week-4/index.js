function addNums(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
  
  console.log(addNums([1, 2, 3]));
  console.log(addNums([]));