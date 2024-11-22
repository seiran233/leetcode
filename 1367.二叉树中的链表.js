/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  let ans = false
  const dfs = (node, currHead) => {
    if (node.val !== currHead.val) return false
    if (!currHead.next) return true
    currHead = currHead.next
    let ret = false
    if (node.left) ret = dfs(node.left, currHead)
    if (node.right && !ret) ret = dfs(node.right, currHead)
    return ret
  }
  const dfs2 = (node) => {
    const nodeRet = dfs(node, head)
    if (nodeRet) {
      ans = true
      return
    }
    if (node.left) dfs(node.left, head)
    if (node.right) dfs(node.right, head)
  }
  dfs2(root)
  return ans
};

// @lc code=end

