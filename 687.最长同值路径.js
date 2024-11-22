/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  if (!root) return 0
  let max = -Infinity
  const dfs = (node) => {
    let path = 1
    let leftPath = 0
    let rightPath = 0
    if (node.left) {
      const count = dfs(node.left)
      if (node.left.val === node.val) {
        leftPath = count
        path += leftPath
      }
    }
    if (node.right) {
      const count = dfs(node.right)
      if (node.right.val === node.val) {
        rightPath = count
        path += rightPath
      }
    }
    if (path > max) max = path
    return Math.max(leftPath, rightPath) + 1
  }
  dfs(root)
  return max - 1
};
// @lc code=end

