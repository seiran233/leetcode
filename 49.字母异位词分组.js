/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}
  strs.forEach((str) => {
    const key = str.split('').sort().join('')
    if (map[key]) map[key].push(str)
    else map[key] = [str]
  })
  return Object.values(map)
};
// @lc code=end

