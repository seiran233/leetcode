/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null
  const build = (head) => {
    let fast = head
    let slow = head
    if (head.end) return null
    while (fast && fast.next) {
      if (fast.end || fast.next.end) break
      fast = fast.next.next
      slow = slow.next
    }
    const root = {
      val: slow.val,
      left: null,
      right: null
    }
    slow.end = true
    if (slow === fast) return root
    if (slow.next && !slow.next.end)root.right = build(slow.next)
    root.left = build(head)
    return root
  }
  return build(head)
};
// @lc code=end

