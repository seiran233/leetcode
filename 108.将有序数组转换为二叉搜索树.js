/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid], nums.slice(0, mid), nums.slice(mid + 1, nums.length))
  return root
};

function TreeNode(val, left, right) {
  console.log(val, left, right)
  this.val = (val === undefined ? 0 : val)
  const leftMid = Math.floor(left.length / 2)
  const rightMid = Math.floor(right.length / 2)
  if (left.length) this.left = new TreeNode(left[leftMid], left.slice(0, leftMid), left.slice(leftMid + 1, left.length))
  else this.left = null
  if (right.length) this.right = new TreeNode(right[rightMid], right.slice(0, rightMid), right.slice(rightMid + 1, right.length))
  else this.right = null
}
// @lc code=end

