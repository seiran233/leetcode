/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  const dfs = (node1, node2) => {
    if (!node1 && !node2) return null
    const val1 = node1 ? node1.val : 0
    const val2 = node2 ? node2.val : 0
    const newNode = {}
    newNode.val = val1 + val2
    newNode.left = dfs(node1 ? node1.left : null, node2 ? node2.left : null)
    newNode.right = dfs(node1 ? node1.right : null, node2 ? node2.right : null)
    return newNode
  }
  const mergeTree = dfs(root1, root2)
  return mergeTree
};
// @lc code=end

