/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ""
  let ret = strs[0]
  for (let i = 1; i < strs.length; i++) {
    if (ret === "") return ret
    for (let j = 0; j < ret.length; j++) {
      if (ret[j] !== strs[i][j]) {
        ret = ret.slice(0, j)
        break
      }
    }
  }
  return ret
};
// @lc code=end

