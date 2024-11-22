/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
    if (num < val && node.left) dfs(node.left, target, path)
    else if (num > val && node.right) dfs(node.right, target, path)
  }
  dfs(root, p, path1)
  dfs(root, q, path2)
  while (path1.length) {
    const p1 = path1.pop()
    if(path2.includes(p1)) return p1
  }
  return null
};
// @lc code=end

