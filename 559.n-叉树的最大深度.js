/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  let max = -Infinity
  const dfs = (node, curr) => {
    if (curr > max) max = curr
    node.children.forEach(child => {
      dfs(child, curr + 1)
    });
  }
  dfs (root, 1)
  return max
};
// @lc code=end

