/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let ret = -Infinity
  const dfs = (node) => {
    const leftDeep = node.left ? dfs(node.left) : 0
    const rightDeep = node.right ? dfs(node.right) : 0
    const currDiameter = leftDeep + rightDeep
    if (currDiameter > ret) ret = currDiameter
    return Math.max(leftDeep, rightDeep) + 1
  }
  dfs(root)
  return ret
};
// @lc code=end

