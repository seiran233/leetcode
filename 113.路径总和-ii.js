/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if (!root) return []
  const ret = []
  const dfs = (node, sum, path) => {
    path.push(node.val)
    sum += node.val
    if ( !node.left && !node.right && sum === targetSum) {
      ret.push(path)
    }
    if ( node.left)dfs(node.left, sum, [...path])
    if (node.right) dfs(node.right, sum, [...path])
    return ret
  }
  dfs(root, 0, [])
  return ret
};
// @lc code=end

