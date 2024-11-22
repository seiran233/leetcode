/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const list = []
  const LDR = (node) => {
    if (node.left) LDR(node.left)
    list.push(node.val)
    if (node.right) LDR(node.right)
  }
  LDR(root)
  list.sort((a, b) => {
    return a - b
  })
  const buildTree = (node) => {
    if (node.left) buildTree(node.left)
    const val = list.shift()
    node.val = val
    if (node.right) buildTree(node.right)
  }
  buildTree(root)
};


// @lc code=end

