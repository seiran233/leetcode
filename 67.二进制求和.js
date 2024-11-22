/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = Math.max(a.length, b.length)
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')
  let isCarry = false
  let ret = []
  for(let i = len - 1; i >= 0; i--) {
    const bitA = Number(a[i] ? a[i] : 0)
    const bitB = Number(b[i] ? b[i] : 0)
    let sum = bitA + bitB
    if (isCarry) {
      sum++
      isCarry = false
    }
    if (sum >= 2) {
      isCarry = true
      ret.unshift(sum - 2)
    } else {
      ret.unshift(sum)
    }
  }
  if (isCarry) ret.unshift(1)
  return ret.join('')
};
// @lc code=end

