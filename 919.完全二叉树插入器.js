/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
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
 */
var CBTInserter = function (root) {
  this.list = []
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    this.list.push(node)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const node = new TreeNode(val)
  const index = this.list.length
  const parentIndex = (index - 1) / 2
  if (parentIndex % 1 === 0) {
    this.list[Math.floor(parentIndex)].left = node
  } else {
    this.list[Math.floor(parentIndex)].right = node
  }
  this.list.push(node)
  return this.list[Math.floor(parentIndex)].val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.list[0]
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end

