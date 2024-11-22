/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = []
  const dfs = (arr, used, i) => {
    if (arr.length === nums.length) {
      const str = arr.join(',')
      if (!ans.includes(str)) ans.push(str)
      return
    }
    for (let j = 0; j < nums.length; j++) {
      const curr = [...arr]
      const currUsed = [...used]
      if (used.includes(j)) continue
      curr.push(nums[j])
      currUsed.push(j)
      dfs(curr, currUsed, i + 1)
    }
  }
  dfs([], [], 0)
  return ans.map(item => item.split(','))
};
// @lc code=end

