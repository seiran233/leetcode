/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  if (!root) return []
  const queue = [{
    level: 0,
    node: root
  }]
  const ret = []
  while (queue.length) {
    const curr = queue.shift()
    if (Array.isArray(ret[curr.level])) {
      ret[curr.level].push(curr.node.val)
    } else {
      ret[curr.level] = [curr.node.val]
    }
    if (curr.node.left) queue.push({
      level: curr.level + 1,
      node: curr.node.left
    })
    if (curr.node.right) queue.push({
      level: curr.level + 1,
      node: curr.node.right
    })
  }
  const maxList = []
  for(const level of ret) {
    const max = Math.max(...level)
    maxList.push(max)
  }
  return maxList
};
// @lc code=end

