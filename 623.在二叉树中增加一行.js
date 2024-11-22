/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    return {
      val,
      left: root,
      right: null
    }
  }
  const queue = [{
    node: root,
    depth: 1
  }]
  while (queue.length) {
    const curr = queue.shift()
    if (curr.depth === depth - 1) {
      const leftTemp = curr.node.left
      const rightTemp = curr.node.right
      curr.node.left = {
        val,
        left: leftTemp,
        right: null
      }
      curr.node.right = {
        val,
        right: rightTemp,
        left: null
      }
    }
    if (curr.node.left && curr.depth + 1 <= depth) {
      queue.push({
        node: curr.node.left,
        depth: curr.depth + 1
      })
    }
    if (curr.node.right && curr.depth + 1 <= depth) {
      queue.push({
        node: curr.node.right,
        depth: curr.depth + 1
      })
    }
  }
  return root
};
// @lc code=end

