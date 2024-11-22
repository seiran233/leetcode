/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) return []
  const ret = []
  const dfs = (node) => {
    for (const child of node.children) {
      dfs(child)
    }
    ret.push(node.val)
  }
  dfs(root)
  return ret
};
// @lc code=end

