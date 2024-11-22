/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  if (!root) return []
  const dict = Object.create(null)
  let max = -Infinity
  const dfs = (node) => {
    let leftSum = 0
    let rightSum = 0
    if (node.left) leftSum = dfs(node.left)
    if (node.right) rightSum = dfs(node.right)
    const sum = node.val + leftSum + rightSum
    if (dict[sum]) dict[sum]++
    else dict[sum] = 1
    if (dict[sum] > max) max = dict[sum]
    return sum
  }
  dfs(root)
  const ret = []
  for(const i in dict) {
    if (dict[i] === max) ret.push(i)
  }
  return ret
};
// @lc code=end

