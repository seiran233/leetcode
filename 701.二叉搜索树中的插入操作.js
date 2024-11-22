/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    return {
      val,
      left: null,
      right: null
    }
  }
  const dfs = (node, val) => {
    if (val < node.val) {
      if (node.left) return dfs(node.left, val)
      node.left = {
        val,
        left: null,
        right: null
      }
    }
    if (val > node.val) {
      if (node.right) return dfs(node.right, val)
      node.right = {
        val,
        left: null,
        right: null
      }
    }
  }
  dfs(root, val)
  return root
};

// @lc code=end

