/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let map = {}
  for(const num of nums) {
    map[num] = true
  }
  let min = 1
  while(map[min]) min++
  return min
};
// @lc code=end

