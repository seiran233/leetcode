/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let num = 0
  let sign
  for (let i = 0; i < s.length; i++) {
      if (num > 2**31) break
      if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
          if (!sign) sign = 1
          num = num * 10 + s.charCodeAt(i) - 48
      } else if (!sign && s.charCodeAt(i) === 45) {
          sign = -1
      } else if (!sign && s.charCodeAt(i) === 43) {
          sign = 1
      } else if (!sign && s.charCodeAt(i) === 32) {
          continue
      } else {
          break
      }
  }
  if (!sign) sign = 1
  if (num >= 2**31) {
      if (sign === -1) return -(2**31)
      else return 2**31 -1 
  }
  return num * sign
};
// @lc code=end

