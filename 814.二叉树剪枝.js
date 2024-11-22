/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  const dfs = (node) => {
    const val = node.val
    let leftChildOne = false
    let rightChildOne = false
    if (node.left) leftChildOne = dfs(node.left)
    if (node.right) rightChildOne = dfs(node.right)
    if (val === 0) {
      if (!leftChildOne && !rightChildOne) return false
      if (!leftChildOne) node.left = null
      if (!rightChildOne) node.right = null
      return true
    } else {
      if (!leftChildOne) node.left = null
      if (!rightChildOne) node.right = null
    }
    return true
  }
  const flag = dfs(root)
  if (!flag) return null
  return root
};
// @lc code=end

