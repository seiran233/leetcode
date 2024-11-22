/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let zero = 1
  let one = 1
  let two = 2
  if (n === 0) return zero
  if (n === 1) return one
  if (n === 2) return two
  for (let i = 3; i <= n; i++) {
    let temp = two
    two = one + two
    one = temp
  }
  return two
};
// @lc code=end

