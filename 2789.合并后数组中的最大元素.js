/*
 * @lc app=leetcode.cn id=2789 lang=javascript
 *
 * [2789] 合并后数组中的最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  if (nums.length === 1) return nums[0];
  while (nums.length > 1) {
    let maxIndex = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] <= nums[i + 1]) maxIndex = i + 1;
    }
    if (maxIndex === 0) break
    nums[maxIndex] = nums[maxIndex] + nums[maxIndex - 1]
    nums.splice(maxIndex - 1, 1);
  }
  let max = -Infinity
  for (const num of nums) {
    max = Math.max(max, num)
  }
  return max
};
// @lc code=end

