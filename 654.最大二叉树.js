/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  /**
   * 
   * @param {number[]} arr 
   * @returns 
   */
  const dfs = (arr) => {
    const [max, maxIndex] = getMax(arr)
    const node = {
      val: max,
    }
    const leftArr = arr.slice(0, maxIndex)
    const rightArr = arr.slice(maxIndex + 1, arr.length)
    if (leftArr.length) node.left = dfs(leftArr)
    else node.left = null
    if (rightArr.length) node.right = dfs(rightArr)
    else node.right = null
    return node
  }
  return dfs(nums)
};

function getMax(arr) {
  let max = -Infinity
  let maxIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxIndex = i
    }
  }
  return [max, maxIndex]
}
// @lc code=end

