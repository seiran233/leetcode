/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const arr =nums
  let gap = 1
  while (gap < arr.length) {
    for (let i = 0; i < arr.length; i += 2 * gap) {
      let left1 = i
      let right1 = i + gap - 1
      let left2 = i + gap
      let right2 = i + 2 * gap - 1
      let temp = []
      while (left1 <= right1 && left2 <= right2) {
        if (arr[left1] === undefined) break
        if (arr[left1] > arr[left2]) {
          temp.push(arr[left2])
          left2++
        } else {
          temp.push(arr[left1])
          left1++
        }
        if (left1 > right1) {
          while (left2 <= right2 && arr[left2] !== undefined) {
            temp.push(arr[left2])
            left2++
          }
        }
        if (left2 > right2) {
          while (left1 <= right1 && arr[left1] !== undefined) {
            temp.push(arr[left1])
            left1++
          }
        }
      }
      for (let j = 0; j < temp.length; j++) {
        arr[i + j] = temp[j]
      }
    }
    gap *= 2
  }
  return arr
};
// @lc code=end

