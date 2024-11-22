/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0
  let min = Infinity
  let max = -Infinity
  nums.forEach(num => {
    if (num > max) max = num
    if (num < min) min = num
  })
  const bucket = Array(max - min + 1).fill(null)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (bucket[num - min]) bucket[num - min].push(num)
    else bucket[num - min] = [num]
  }
  let count = 0
  let maxCount = -Infinity
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) count++
    else {
      if (maxCount < count) maxCount = count
      count = 0
    }
  }
  if (maxCount < count) maxCount = count
  return maxCount
};
// @lc code=end

