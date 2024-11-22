/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return []
  const ret = []
  const dfs = (node) => {
    ret.push(node.val)
    for (const child of node.children) {
      dfs(child)
    }
  }
  dfs(root)
  return ret
};
// @lc code=end

