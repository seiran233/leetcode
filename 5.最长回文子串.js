/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const results = []
  if (s.length === 1) return s
  for (let i = 0; i < s.length - 1; i++) {
    let right = s.length - 1
    let left = i
    let end = right
    while (true) {
      if (left >= right) {
        results.push(s.substring(i, end + 1))
        break
      }
      if (s[left] === s[right]) {
        left++
        right--
      } else {
        left = i
        right--
        end = right
      }
    }
  }
  let result = ''
  for (let i = 0; i < results.length; i++) {
    if (results[i].length > result.length) result = results[i]
  }
  return result
};
// @lc code=end

