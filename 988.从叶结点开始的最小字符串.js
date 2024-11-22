/*
 * @lc app=leetcode.cn id=988 lang=javascript
 *
 * [988] 从叶结点开始的最小字符串
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
var smallestFromLeaf = function (root) {
  if (!root) return ''
  const paths = []
  const dfs = (node, str) => {
    const val = node.val
    if (!node.left && !node.right) {
      paths.unshift(String.fromCharCode(val + 97) + str)
    }
    if (node.left) dfs(node.left, String.fromCharCode(val + 97) + str)
    if (node.right) dfs(node.right, String.fromCharCode(val + 97) + str)
  }
  dfs(root, '')
  let min = paths[0]
  for (let i = 1; i < paths.length; i++) {
    if (paths[i] < min) min = paths[i]
  }
  return min
};
// @lc code=end

