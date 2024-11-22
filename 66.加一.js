/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const last = digits.length - 1
  const add = (digits, index) => {
    if (index < 0) {
      digits.unshift(1)
      return
    }
    if (digits[index] !== 9) {
      digits[index]++
    } else {
      digits[index] = 0
      add(digits, index - 1)
    }
  }
  add(digits, last)
  return digits
};
// @lc code=end

