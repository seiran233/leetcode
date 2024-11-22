/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!postorder.length) return null
  const root = {
      val: postorder[postorder.length - 1],
      left: null,
      right: null
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  if (postorder.length === 1) return root
  const index = inorder.indexOf(root.val)
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1, inorder.length)
  const leftPostorder = postorder.slice(0, leftInorder.length)
  const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1)
  root.left = buildTree(leftInorder, leftPostorder)
  root.right = buildTree(rightInorder, rightPostorder)
  return root
};
// @lc code=end

