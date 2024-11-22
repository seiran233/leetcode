/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const queue = [root, root]
  while (queue.length) {
    const l = queue.shift()
    const r = queue.shift()
    if (!l && !r) continue
    if ((!l || !r)) return false
    if (l.val !== r.val) return false
    queue.push(l.left, r.right)
    queue.push(l.right, r.left)
  }
  return true
};
// @lc code=end

