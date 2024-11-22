/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const ret = []
  const parentMap = {}
  const dfs = (node, parent) => {
    parentMap[node.val] = parent
    if (node.left) dfs(node.left, node)
    if (node.right) dfs(node.right, node)
  }
  dfs(root, null)
  const traversedNode = []
  const find = (node, curr) => {
    traversedNode.push(node)
    if (curr === k) {
      ret.push(node.val)
      return
    }
    const parent = parentMap[node.val]
    if (parent && !traversedNode.includes(parent)) find(parent, curr+1)
    if (node.left && !traversedNode.includes(node.left)) find(node.left, curr+1)
    if (node.right && !traversedNode.includes(node.right)) find(node.right, curr+1)
  }
  find(target, 0)
  return ret
};
// @lc code=end

