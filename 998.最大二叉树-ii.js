/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
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
var insertIntoMaxTree = function(root, val) {
  const LDR = (node, arr = []) => {
    if (node.left) {
      LDR(node.left, arr)
    }
    arr.push(node.val)
    if (node.right) {
      LDR(node.right, arr)
    }
    return arr
  }
  const arr =  LDR(root)
  arr.push(val)
  const buildTree = (arr) => {
    if (!arr.length) return null
    const i = findMaxIndex(arr)
    const node = {
      val: arr[i],
      left: buildTree(arr.slice(0, i)),
      right: buildTree(arr.slice(i + 1, arr.length))
    }
    return node
  }
  return buildTree(arr)
};
function findMaxIndex(arr) {
  let max = -Infinity
  let maxIndex = -1
  for (let i = 0 ; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxIndex = i
    }
  }
  return maxIndex
}
// @lc code=end

