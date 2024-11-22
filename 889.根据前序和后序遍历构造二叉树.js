/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  const dfs = (preorder, postorder) => {
    if (!preorder.length || !postorder.length) return null
    if (preorder.length === 1) return {
      val: preorder[0]
    }
    const rootVal =  preorder[0]
    const postIndex = postorder.indexOf(preorder[1])
    const preIndex = preorder.indexOf(postorder[postorder.length - 2])
    const node = {
      val: rootVal,
      left: dfs(preorder.slice(1, preIndex), postorder.slice(0, postIndex + 1)),
      right: dfs(preorder.slice(preIndex), postorder.slice(postIndex + 1, postorder.length - 1))
    }
    return node
  }
  return dfs(preorder, postorder)
};
// @lc code=end

