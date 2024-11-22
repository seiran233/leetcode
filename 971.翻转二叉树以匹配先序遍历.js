/*
 * @lc app=leetcode.cn id=971 lang=javascript
 *
 * [971] 翻转二叉树以匹配先序遍历
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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
  let ans = []
  if (root.val !== voyage[0]) return [-1]
  const dfs = (node, v) => {
    if (!node) return
    const children = [
      node.left ? node.left.val : null,
      node.right ? node.right.val : null
    ]
    const i = children.indexOf(voyage[0])
    if (i === -1) {
      ans = [-1]
      return
    } if (i === 0) {
      let end = v.length
      if (node.right) end = v.indexOf(node.right.val)
      if (end < 0) {
        ans = [-1]
        return
      }
      dfs(node.left, v.slice(1, end))
      dfs(node.right, v.slice(end))
    } if (i === 1) {
      let end = v.length
      if (node.right) end = v.indexOf(node.right.val)
      if (end < 0) {
        ans = [-1]
        return
      }
      ans.push(node.val)
      dfs(node.left, v.slice(end))
      dfs(node.right, v.slice(1, end))
    }
  }
  dfs(root, voyage.slice(1))
  return ans
};
// @lc code=end

