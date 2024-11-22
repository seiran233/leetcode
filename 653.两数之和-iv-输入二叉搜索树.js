/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const vals = []
  const map = new Map()
  const LRD = (node) => {
    if (node.left) LRD(node.left)
    vals.push(node.val)
    map.set(node.val, vals.length - 1)
    if (node.right) LRD(node.right)
  }
  LRD(root)
  for (let i = 0; i < vals.length; i++) {
    const index = map.get(k - vals[i])
    if (index > -1 && index !== i) return true
  }
  return false
};
// @lc code=end

