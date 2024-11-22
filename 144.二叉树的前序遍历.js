/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  if (!root) return []
  const stack = [root]
  const ret = []
  while(stack.length) {
    const curr = stack.pop()
    if (curr.val !== undefined) ret.push(curr.val)
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
  }
  return ret
};
// @lc code=end

