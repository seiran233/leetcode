/*
 * @lc app=leetcode.cn id=655 lang=javascript
 *
 * [655] 输出二叉树
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
 * @return {string[][]}
 */
var printTree = function (root) {
  const calcHeight = (node, currHeight) => {
    let h = currHeight + 1
    let lh = h
    let rh = h
    if (node.left) lh = calcHeight(node.left, currHeight + 1)
    if (node.right) rh = calcHeight(node.right, currHeight + 1)
    if (lh > rh) h = lh
    else h = rh
    return h
  }
  let h = calcHeight(root, 0)
  const m = 2 ** h - 1
  const ret = []
  const dfs = (node, level, start, end) => {
    const curr = ret[level] ? ret[level] : Array(m).fill('')
    let index = Math.floor((end - start) / 2) + start
    curr[index] = node.val + ""
    ret[level] = curr
    if (node.left) dfs(node.left, level + 1, start, index - 1)
    if (node.right) dfs(node.right, level + 1, index + 1, end)
  }
  dfs(root, 0, 0, m - 1)
  return ret
};
// @lc code=end

