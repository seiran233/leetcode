/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  const ret = []
  const levels = []
  const queue = [{
    node: root,
    level: 0
  }]
  while (queue.length) {
    const curr = queue.shift()
    if (levels[curr.level] !== undefined) {
      levels[curr.level][0] += curr.node.val
      levels[curr.level][1]++
    } else {
      levels[curr.level] = [curr.node.val, 1]
    }
    ret[curr.level] = levels[curr.level][0] / levels[curr.level][1]
    if (curr.node.left) queue.push({
      node: curr.node.left,
      level: curr.level + 1
    })
    if (curr.node.right) queue.push({
      node: curr.node.right,
      level: curr.level + 1
    })
  }
  return ret
};
// @lc code=end

