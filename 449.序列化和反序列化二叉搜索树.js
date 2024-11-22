/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 二叉树的序列化与反序列化
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// @lc code=start
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '[]'
  const arr = []
  const DLR = (node) => {
    arr.push(node.val)
    if (node.left) DLR(node.left)
    if (node.right) DLR(node.right)
  }
  DLR(root)
  return JSON.stringify(arr)
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  if (!data) return null
  const arr = JSON.parse(data)
  const middleOrder = [...arr].sort((a, b) => a - b)
  const dfs = (pre, middle) => {
    if (!pre.length) return null
    const node = {
      val: pre[0]
    }
    const i = middle.findIndex(item => item === node.val)
    node.left = dfs(pre.slice(1, i + 1), middle.slice(0, i))
    node.right = dfs(pre.slice(i + 1), middle.slice(i + 1, middle.length))
    return node
  }
  const node = dfs(arr, middleOrder)
  return node
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
// @lc code=end
