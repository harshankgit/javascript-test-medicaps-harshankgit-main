function smallestMissingPositiveInteger(nums) {
  let i = 0;
  const n = nums.length;
  
  
  while (i < n) {
      if (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
          const temp = nums[nums[i] - 1];
          nums[nums[i] - 1] = nums[i];
          nums[i] = temp;
      } else {
          i++;
      }
  }

  
  for (i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  return n + 1; 
}

module.exports = smallestMissingPositiveInteger;
