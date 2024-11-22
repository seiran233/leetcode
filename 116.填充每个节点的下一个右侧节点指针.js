/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null
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
  while(ret.length) {
    const level = ret.shift()
    let head = level.shift()
    head.next = null
    while (level.length) {
      const node = level.shift()
      head.next = node
      head = node
    }
  }
  return root
}
// @lc code=end

