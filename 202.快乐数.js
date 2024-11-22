/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const calc = (n) => {
    let res = 0
    while (n) {
      res += (n % 10) ** 2
      n = Math.floor(n / 10)
    }
    return res
  }
  while (n !== 1 && n !== 4) {
    n = calc(n)
  }
  return n === 1
};
// @lc code=end

