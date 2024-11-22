/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  if (!root) return 0
  let ret = Infinity
  const dfs = (node, level) => {
    if (!node.left && !node.right) {
      if (level < ret) ret = level
      return
    }
    if (node.left) {
      dfs(node.left, level + 1)
    }
    if (node.right) {
      dfs(node.right, level + 1)
    }
  }
  dfs(root, 1)
  return ret
};
// @lc code=end

