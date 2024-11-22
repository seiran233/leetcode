/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  if (!root) return 0
  let tilt = 0
  const dfs = (node) => {
    let leftSum = 0
    let rightSum = 0
    if (node.left) {
      leftSum = dfs(node.left)
    }
    if (node.right) {
      rightSum = dfs(node.right)
    }
    tilt += Math.abs(leftSum - rightSum)
    return node.val + leftSum + rightSum
  }
  dfs(root)
  return tilt
};
// @lc code=end

