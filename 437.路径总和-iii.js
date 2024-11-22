/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0
  let ans = 0
  const find = (node, curr) => {
    let sum = curr + node.val
    if (sum === targetSum) ans++
    if (node.left) find(node.left, sum)
    if (node.right) find(node.right, sum)
  }
  const dfs = (node) => {
    find(node, 0)
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  return ans
};
// @lc code=end

