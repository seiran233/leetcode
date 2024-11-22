/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const charMap = {}
  const countMap = {}
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (countMap[c]) countMap[c]++
    else countMap[c] = 1
  }
  const list = Object.entries(countMap).sort((a, b) => b[1] - a[1])
  let ret = ''
  for (let i = 0; i < list.length; i++) {
    const [c,count] = list[i]
    for(let j = 0; j < count;j++) {
      ret += c
    }
  }
  return ret
};
// @lc code=end

