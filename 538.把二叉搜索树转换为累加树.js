/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST = function (root) {
  if (!root) return null
  const dfs = (node, sum) => {
    if (node.right) sum = dfs(node.right, sum)
    sum += node.val
    node.val = sum
    if (node.left) sum = dfs(node.left, sum)
    return sum
  }
  dfs(root, 0)
  return root
};
// @lc code=end

