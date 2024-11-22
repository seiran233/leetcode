/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function (root) {
  let ans = true
  const queue = [{ node: root }]
  const list = []
  while (queue.length) {
    const curr = queue.shift()
    list.push(curr.node)
    if (!curr.node) continue
    queue.push({ node: curr.node.left, level: curr.level + 1 })
    queue.push({ node: curr.node.right, level: curr.level + 1 })
  }
  let i = list.length - 1
  while (!list[i]) i--
  for(let j = 0; j < i;j++) {
    if (!list[j]) {
      return false
    }
  }
  return ans
};
// @lc code=end

