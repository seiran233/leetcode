/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
var balanceBST = function(root) {
  if (!root) return null
  const sortVal = []
  const LRD = (ndoe) => {
    if (ndoe.left) LRD(ndoe.left)
    sortVal.push(ndoe.val)
    if (ndoe.right) LRD(ndoe.right)
  }
  LRD(root)
  const buildTree = (arr) => {
    if (!arr.length) return null
    const mid = Math.floor((arr.length - 1) / 2)
    const node = {
      val: arr[mid],
      left: buildTree(arr.slice(0, mid)),
      right: buildTree(arr.slice(mid + 1, arr.length))
    }
    return node
  }
  return buildTree(sortVal)
};
// @lc code=end

