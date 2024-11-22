/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = path.split('/')
  let ret = []
  for(const item of arr) {
    if (!item) continue
    if (item === '.') continue
    else if (item === '..') {
      ret.pop()
    } else {
      ret.push(item)
    }
  }
  return '/' + ret.join('/')
};
// @lc code=end

