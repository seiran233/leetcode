/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  const dict = Object.create(null)
  const dfs = (node) => {
    const val = node.val
    if (dict[val]) dict[val]++
    else dict[val] = 1
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  let max = Math.max(...Object.values(dict))
  const ret = []
  for (const item of Object.keys(dict)) {
    if (dict[item] === max) ret.push(item)
  }
  return ret
};
// @lc code=end

