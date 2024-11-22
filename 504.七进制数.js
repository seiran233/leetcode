/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0"
  let curr = num < 0 ? -num : num
  let ans = ''
  while (curr) {
      ans = curr % 7 + ans
      curr = Math.floor(curr / 7)
  }
  if (num < 0) return '-' + ans
  return ans
};
// @lc code=end

