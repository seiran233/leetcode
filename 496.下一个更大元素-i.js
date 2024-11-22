/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ret = new Array(nums1.length).fill(-1)
  let flag = true
  // nums1.sort((a, b) => (a - b))

  for (let i = 0; i < nums1.length; i++) {
    let j = nums2.findIndex(item => item === nums1[i])
    j++
    for (; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        ret[i] = nums2[j]
        break
      }
    }
  }
  return ret
}
// @lc code=end

