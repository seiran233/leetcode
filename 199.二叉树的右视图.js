/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if (!root) return []
  const queue = [{
    level: 0,
    node: root
  }]
  const ret = []
  while (queue.length) {
    const curr = queue.shift()
    if (Array.isArray(ret[curr.level])) {
      ret[curr.level].push(curr.node)
    } else {
      ret[curr.level] = [curr.node]
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
  const ret2 = [] 
  while(ret.length) {
    const level = ret.shift()
    let tail = level.pop()
    ret2.push(tail.val)
  }
  return ret2
};
// @lc code=end

