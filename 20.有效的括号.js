/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (['(', '{', '[',].includes(s[i])) {
      stack.push(s[i])
    } else {
      if (stack.length === 0) {
        return false
      }
      const top = stack[stack.length - 1].codePointAt(0)
      if (s.codePointAt(i) - top === 1 || s.codePointAt(i) - top === 2) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};
// @lc code=end

