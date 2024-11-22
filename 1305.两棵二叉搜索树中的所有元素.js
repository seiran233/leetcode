/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const dfs = (node, arr) => {
    if (!node) return
    if (node.left) dfs(node.left, arr)
    arr.push(node.val)
    if (node.right) dfs(node.right, arr)
  }
  const arr1 = []
  const arr2 = []
  dfs(root1, arr1)
  dfs(root2, arr2)
  return megerArr(arr1, arr2)
};

function megerArr(arr1, arr2) {
  const ans = []
  let i = 0
  let j = 0
  while( i < arr1.length || j < arr2.length) {
    const num1 = arr1[i]
    const num2 = arr2[j]
    if (num1 === undefined) {
      ans.push(num2)
      j++
      continue
    }
    if (num2 === undefined) {
      ans.push(num1)
      i++
      continue
    }
    if (num1 <= num2) {
      ans.push(num1)
      i++
    } else {
      ans.push(num2)
      j++
    }
  }
  return ans
}
// @lc code=end

