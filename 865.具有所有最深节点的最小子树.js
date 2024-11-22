/*
 * @lc app=leetcode.cn id=865 lang=javascript
 *
 * [865] 具有所有最深节点的最小子树
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
  const dfs = (node) => {
    if (!node) return {
      node,
      deepth: 0
    }
    const leftRet = dfs(node.left)
    const rightRet = dfs(node.right)
    if (leftRet.deepth > rightRet.deepth) return {
      ...leftRet,
      deepth: leftRet.deepth + 1
    }
    if (leftRet.deepth < rightRet.deepth) return {
      ...rightRet,
      deepth: rightRet.deepth + 1
    }
    return {
      node,
      deepth: rightRet.deepth + 1
    }
  }
  return dfs(root).node
};
// @lc code=end

