/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

  const dfs = (arr) => {
    let nodes = []
    if (!arr.length) return [null]
    if (arr.length === 1) return [{
      val: arr[0],
      left: null,
      right: null
    }]
    for (let i = 0; i < arr.length; i++) {
      const newArr = [...arr]
      const curr = newArr[i]
      const lefts = dfs(newArr.slice(0, i))
      const rights = dfs(newArr.slice(i + 1, newArr.length))
      for (let j = 0; j < lefts.length; j++) {
        let node = {
          val: curr,
          left: null,
          right: null
        }
        const left = lefts[j]
        node.left = left
        if (!rights.length) nodes.push(node)
        for (let k = 0; k < rights.length; k++) {
          const right = rights[k]
          const newNode = {
            ...node,
            right
          }
          nodes.push(newNode)
        }
      }
    }
    return nodes
  }
  const arr = Array(n).fill(0).map((item, i) => i + 1)
  const ret = dfs(arr)
  return ret
};
// generateTrees(4)
// @lc code=end

