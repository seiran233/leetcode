/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const dfs = (arr) => {
    if (!arr.length) return null
    const val = arr[0]
    let max = arr.findIndex(item => item > val)
    const node = {
      val: arr[0],
      left: null,
      right: null
    }
    if (max !== -1) {
      node.right = dfs(arr.slice(max, arr.length))
    } else {
      max = arr.length
    }
    node.left = dfs(arr.slice(1, max))
    return node
  }
  return dfs(preorder)
};
// @lc code=end

