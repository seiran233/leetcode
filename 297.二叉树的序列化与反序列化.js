/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const queue = [{
    node: root,
    level: 0
  }]
  const arr = []
  while (queue.length) {
    const item = queue.shift()
    const val = item.node ? item.node.val : null
    if (arr[item.level]) {
      arr[item.level].push(val)
    } else {
      arr[item.level] = [val]
    }
    if (!isNil(val) && item.node.left !== undefined) queue.push({
      node: item.node.left,
      level: item.level + 1
    })
    if (!isNil(val) && item.node.right !== undefined) queue.push({
      node: item.node.right,
      level: item.level + 1
    })
  }
  return JSON.stringify(arr)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = JSON.parse(data)
  const dfs = (vals, level) => {
    const val = vals.shift()
    if (isNil(val)) return null
    const children = arr[level + 1]
    const node = {
      val,
    }
    if (!isNil(val)) {
      node.left = children ? dfs(children, level + 1) : null
      node.right = children ? dfs(children, level + 1) : null
    }
    return node
  }
  const root = dfs(arr[0], 0)
  return root
};

function isNil(value) {
  return value === null || value === void 0
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

