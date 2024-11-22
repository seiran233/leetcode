/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const queue = [{
    node: root,
    level: 0
  }]
  const ans = []
  while (queue.length) {
    const current = queue.shift()
    if (ans[current.level]) {
      ans[current.level].push(current.node.val)
    } else {
      ans[current.level] = [current.node.val]
    }
    const childrenLevel = current.level + 1
    for (let i = 0; i < current.node.children.length; i++) {
      queue.push({
        node: current.node.children[i],
        level: childrenLevel
      })
    }
  }
  return ans
};
// @lc code=end

