/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null
  const findNode = (node, target, parent) => {
    if (target < node.val && node.left) return findNode(node.left, target, node)
    if (target > node.val && node.right) return findNode(node.right, target, node)
    if (node.val === target) return { target: node, parent }
    return {
      target: null, parent
    }
  }
  const findPatch = (node, d, parent) => {
    if (node[d]) return findPatch(node[d], d, node)
    if (!node.left && !node.right) {
      if (parent.left === node) parent.left = null
      if (parent.right === node) parent.right = null
      return node
    }
    if (!node[d]) {
      if (d === "left") {
        if (parent.left === node) {
          parent.left = node.right
        }
        if (parent.right === node) {
          parent.right = node.right
        }
        return node
      }
      if (d === "right") {
        if (parent.left === node) {
          parent.left = node.left
        }
        if (parent.right === node) {
          parent.right = node.left
        }
        return node
      }
    }
  }
  const { target, parent } = findNode(root, key, root)
  if (!target) return root
  if (!target.left && !target.right && target !== root) {
    if (parent.left === target) {
      parent.left = null
    } else {
      parent.right = null
    }
    return root
  }
  let patchNode = null
  if (target.right) patchNode = findPatch(target.right, 'left', target)
  else if (target.left) patchNode = findPatch(target.left, 'right', target)
  if (!patchNode) return null
  if (parent === target) {
    patchNode.left = parent.left
    patchNode.right = parent.right
    parent.left = null
    parent.right = null
    return patchNode
  }
  if (parent.val > target.val) {
    parent.left = patchNode
  } else {
    parent.right = patchNode
  }
  if (target.left !== patchNode) patchNode.left = target.left
  if (target.right !== patchNode) {
    patchNode.right = target.right
  }
  return root
};
// @lc code=end

