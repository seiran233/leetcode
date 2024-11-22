/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString()
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] === str[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

