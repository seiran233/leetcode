/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const ret = []
  const dfs = (node) => {
    if (ret.length >= k) return
    if (node.left) dfs(node.left)
    ret.push(node.val)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  return ret[k - 1]
};
// @lc code=end

