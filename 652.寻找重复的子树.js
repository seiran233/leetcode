/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = {}
  const ans = []
  const dfs = (node) => {
    const key = JSON.stringify(node)
    if (map[key] === 1) {
      ans.push(node)
      map[key]++
    } else if (map[key] === void 0) {
      map[key] = 1
    }
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
  }
  dfs(root)
  return ans
};
// @lc code=end

