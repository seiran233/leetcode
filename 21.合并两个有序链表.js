/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  let val1 = list1.val
  let val2 = list2.val
  let current = val1 <= val2 ? list1 : list2
  let head = current
  let list = val1 > val2 ? list1 : list2
  let temp  = null
  while(true) {
    if (current.next) {
      if (!list) break
      if (current.next.val > list.val) {
        temp = current.next
        current.next = list
        current = current.next
        list = temp
        temp = null
      } else {
        current = current.next
      }
    } else {
      current.next = list
      break
    }
  }
  return head
};
// @lc code=end

