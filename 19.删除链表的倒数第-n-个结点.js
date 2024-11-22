/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let l = 0
  const arr = []
  let curr = head
  while (curr) {
    arr[l] = curr
    curr = curr.next
    l++
  }
  if (arr[arr.length - n] === head) head = head.next
  const prev = arr[arr.length - n - 1]
  const next = arr[arr.length - n].next
  if (prev) prev.next = next
  arr[arr.length - n].next = null
  if (arr.length === 1) return null
  return head
};
// @lc code=end

