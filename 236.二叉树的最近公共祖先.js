/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const path1 = []
  const path2 = []
  const dfs = (node, target, path) => {
    const val = node.val
    const num = target.val
    path.push(node)
    if (val === num) return true
    let ret = false
    if (node.left) {
      ret = dfs(node.left, target, path)
      if (ret) return ret
      else path.pop()
    }
    if (!ret && node.right) {
      ret = dfs(node.right, target, path)
      if (!ret) path.pop()
    }
    return ret
  }
  dfs(root, p, path1)
  dfs(root, q, path2)
  while (path1 && path1.length) {
    const p1 = path1.pop()
    if (path2.includes(p1)) return p1
  }
  return null
};
// @lc code=end

