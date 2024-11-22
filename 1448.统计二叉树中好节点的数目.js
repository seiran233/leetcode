/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
var goodNodes = function(root) {
  let ret = 0
  if (!root) return ret
  const dfs = (node, currMax) => {
    if (node.val >= currMax) {
      ret++
    currMax = node.val
    }
    if (node.left) dfs(node.left, currMax)
    if (node.right) dfs(node.right, currMax)
  }
  dfs(root, -Infinity)
  return ret
};
// @lc code=end

