/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
  const min  = root.val
  let secondMin = null
  const dfs = (node) => {
    if (secondMin === null && node.val !== min) secondMin = node.val
    if (node.val < secondMin && node.val > min) secondMin = node.val
    if (node.left)  dfs(node.left)
    if (node.right)  dfs(node.right)  
  }
  dfs(root)
  return secondMin || -1
};
// @lc code=end

