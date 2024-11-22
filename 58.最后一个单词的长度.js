/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const str = s.trim()
  const len = str.length
  let ret = 0
  for(let i = len - 1; i >= 0;i--) {
    if (str[i] !== ' ') ret++
    else return ret
  }
  return ret
};
// @lc code=end

