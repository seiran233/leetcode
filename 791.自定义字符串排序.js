/*
 * @lc app=leetcode.cn id=791 lang=javascript
 *
 * [791] 自定义字符串排序
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let ret = ''
  const dict = {}
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) dict[s[i]]++
    else dict[s[i]] = 1
  }
  let i = 0
  while ( i < order.length) {
    if (dict[order[i]]) {
      ret += order[i]
      dict[order[i]]--
    } else {
      delete dict[order[i]]
      i++
    }
  }
  for(const c of Object.keys(dict)) {
    for(let i = 0; i < dict[c]; i++) {
      ret += c
    }
  }
  return ret
};
// @lc code=end

