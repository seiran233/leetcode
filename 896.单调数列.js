/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (!nums.length) return false
  let isIncremented = false
  let isDecreasing = false
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      isIncremented = true
    } else if (nums[i] > nums[i + 1]) {
      isDecreasing = true
    } else if (nums === nums[i + 1]) {
      i++
    }
  }
  if (!isDecreasing && !isIncremented) return true
  return isDecreasing ^ isIncremented
};
// @lc code=end

