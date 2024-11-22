/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals
  intervals.sort((a ,b) => {
    return a[0] - b[0]
  })
  let r = 1
  const ret = []
  let first = intervals[0]
  while (true) {
    let sceond = intervals[r]
    if (sceond[0] <= first[1] && sceond[0] >= first[0]) {
      first = [first[0], Math.max(first[1], sceond[1])]
      r++
    } else if (first[0] >= sceond[0] && first[0] <= sceond[1]) {
      first = [sceond[0], Math.max(first[1], sceond[1])]
      r++
    } else {
      ret.push(first)
      first = intervals[r]
      r++
    }
    if (r >= intervals.length) {
      ret.push(first)
      break
    }
  }
  return ret
};
// @lc code=end

