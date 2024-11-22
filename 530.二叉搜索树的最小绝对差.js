/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let min = Infinity
  const queue = [root]
  const arr = Array(10000).fill(null)
  while (queue.length) {
    const node = queue.shift()
    const val = node.val
    arr[val] = 1
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  let index = null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      if (index !== null && i - index < min) min = i - index
      index = i
    }
  }
  return min
};
// @lc code=end

