/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  const range = []
  for (let i = 0; i < timeSeries.length; i++) {
    const curr = [timeSeries[i], timeSeries[i] + duration - 1]
    if (i > 0) {
      const prevRange = range[range.length - 1]
      if (prevRange[1] >= curr[0]) {
        prevRange[1] = curr[1]
      } else {
        range.push(curr)
      }
    } else {
      range.push(curr)
    }
  }
  let seconds = 0
  for (const time of range) {
    seconds += (time[1] - time[0] + 1)
  }
  return seconds
};
// @lc code=end

