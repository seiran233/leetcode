/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
 * @return {number}
 */
var minDiffInBST = function(root) {
  const arr = []
  const LDR = (node) => {
    if (node.left) LDR(node.left)
    arr.push(node.val)
    if (node.right) LDR(node.right)
  }
  LDR(root)
  let ret = Infinity
  let i = 0, j = 1
  for (;i < arr.length - 1 && j < arr.length;) {
    if(ret > Math.abs(arr[j] - arr[i])) {
      ret = Math.abs(arr[j] - arr[i])
    }
    j++
    i++
  }
  return ret
};
// @lc code=end

