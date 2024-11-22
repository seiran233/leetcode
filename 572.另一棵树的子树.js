/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const LDR = (node, ret) => {
    ret.push('/' + node.val + '/')
    if (node.left) LDR(node.left, ret)
    ret.push('#')
    if (node.right) LDR(node.right, ret)
    ret.push('#')
  }
  const ret1 = []
  const ret2 = []
  LDR(root, ret1)
  LDR(subRoot, ret2)
  const str1 = ret1.join('')
  const str2 = ret2.join('')
  return str1.includes(str2)
};

// @lc code=end

