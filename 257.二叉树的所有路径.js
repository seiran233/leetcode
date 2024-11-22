/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const ret = []
  const dfs = (node, acc) => {
    const val = node.val
    acc += `->${val}`
    if (!node.left && !node.right) return ret.push(acc.substring(2))
    if (node.left) dfs(node.left, acc)
    if (node.right) dfs(node.right, acc)
  }
  dfs(root, '')
  return ret
};
// @lc code=end

