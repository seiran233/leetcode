/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums) {
  const ret = []
  let j = nums.length - 1
  let i = 0
  while (j > i + 1) {
    const num1 = nums[j]
    i = 0
    while (i < j - 1) {
      let temp = []
      const num2 = nums[i]
      for (let k = i + 1; k < j; k++) {
        const num3 = nums[k]
        if (num1 + num2 + num3 === 0) {
          temp.push(num3)
        }
      }
      i++
      for (const num4 of temp) {
        ret.push([num1, num2, num4])
      }
    }
    j--
  }
  return ret
};
// @lc code=end

