/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
  if (!root) return ''
  let str = ''
  const dfs = (node) => {
    str += node.val
    if (node.left) {
      str += '('
      if (node.left) dfs(node.left)
      str += ')'
    }
    if (node.right) {
      if (!node.left) str += '()'
      str += '('
      if (node.right) dfs(node.right)
      str += ')'
    }
  }
  dfs(root)
  return str
};
// @lc code=end

