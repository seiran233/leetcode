/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const ret = []
  const charList = s.split('')
  const recursion = (s, i) => {
      const str = s.join('')
      if (i === s.length) ret.push(str)
      const newList = [...s]
      if (/^[a-z]$/.test(newList[i])) {
          recursion([...newList], i + 1)
          newList[i] = newList[i].toUpperCase()
          recursion([...newList], i + 1)
      } else if (/^[A-Z]$/.test(newList[i])) {
          recursion([...newList], i + 1)
          newList[i] = newList[i].toLowerCase()
          recursion([...newList], i + 1)
      } else if (newList[i]) {
          recursion([...newList], i + 1)
      }
  }
  recursion(charList, 0)
  return ret
};
// @lc code=end

