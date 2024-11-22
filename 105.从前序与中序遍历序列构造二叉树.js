/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  const root = {
    val:preorder[0],
    left: null,
    right: null
  }
  if (preorder.length === 1) return root
  const index = inorder.indexOf(preorder[0])
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1, inorder.length)
  const leftPreorder = preorder.slice(1, leftInorder.length + 1)
  const rightPreorder = preorder.slice(leftInorder.length + 1)
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
};
// @lc code=end

