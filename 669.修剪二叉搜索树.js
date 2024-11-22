/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  const middleOrder = []
  const LDR = (node) => {
    if (node.left) LDR(node.left)
    middleOrder.push(node.val)
    if (node.right) LDR(node.right)
  }
  LDR(root)
  const filterOrder = middleOrder.filter(item => {
    return item >= low && item <= high
  })
  console.log(filterOrder)
  return bstFromPreorder(filterOrder)
};
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

