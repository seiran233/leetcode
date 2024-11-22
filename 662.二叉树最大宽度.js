/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function (root) {
  const ret = []
  const dfs = (node, level, i) => {
    const curr = ret[level] ? ret[level] : { left: Infinity, right: -Infinity }
    if (i < curr.left) curr.left = i
    if (i > curr.right) curr.right = i
    ret[level] = curr
    if (node.left) dfs(node.left, level + 1, i * 2n + 1n)
    if (node.right) dfs(node.right, level + 1, i * 2n + 2n)
  }
  dfs(root, 0, 0n)
  let maxWidth = -Infinity
  for (let i = ret.length - 1; i >= 0; i--) {
    const level = ret[i]
    let width = level.right - level.left + 1n
    if (width && width > maxWidth) maxWidth = width
  }
  return maxWidth
};
// @lc code=end

