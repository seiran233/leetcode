/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function(root) {
  if(!root) return
  const queue = []
  const dfs = (node) => {
    queue.push(node)
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  let head = queue.shift()
  head.left = null
  while(queue.length) {
    const node = queue.shift()
    node.left = null
    head.right = node
    head = node
  }
};
// @lc code=end

