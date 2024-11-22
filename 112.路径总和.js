/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  const dfs = (node, sum) => {
    sum += node.val
    if ( !node.left && !node.right && sum === targetSum) return true
    let ret=  false
    if ( node.left) ret = dfs(node.left, sum)
    if (ret) return ret
    if (node.right) ret= dfs(node.right, sum)
    return ret
  }
  return dfs(root, 0)
};
// @lc code=end

