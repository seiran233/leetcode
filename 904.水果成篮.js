/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (fruits.length === 1) return 1
  if (fruits.length === 2) return 2
  let i = 0, j = 1
  while (fruits[j] === fruits[i]) j++
  let map = new Map()
  map.set(fruits[i], j - i)
  map.set(fruits[j], 1)
  let nums = j - i
  let curr = null
  while (j < fruits.length) {
    if (map.size <= 2) {
      j++
      const count = map.get(fruits[j])
      if (count) map.set(fruits[j], count + 1)
      else map.set(fruits[j], 1)
      if (j === fruits.length && j - i > nums) {
        nums = j - i
      }
    } else {
      curr = j - i
      if (curr > nums) nums = curr
      const count = map.get(fruits[i]) - 1
      if (count === 0) map.delete(fruits[i])
      else map.set(fruits[i], count)
      i++
    }
  }
  return nums
};
// @lc code=end

