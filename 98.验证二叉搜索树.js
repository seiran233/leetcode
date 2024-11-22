/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const dfs = (node, max, min) => {
    if (node.val >= max) return false
    if (node.val <= min) return false
    let ret = true
    if (node.left) ret = dfs(node.left, node.val, min)
    if (ret && node.right) ret = dfs(node.right, max, node.val)
    return ret
  }
  return dfs(root, Infinity, -Infinity)
};
// @lc code=end

