/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

const Node = function (val) {
  this.val = val
  this.next = null
  this.prev = null
}

var MinStack = function () {
  const head = new Node(Infinity)
  const tail = new Node(-Infinity)
  head.next = tail
  tail.prev = head
  head.prev = tail
  tail.next = head
  this.mins = tail
  this.stack = []
  this.nodeMap = new Map()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  const node = new Node(val)
  if (this.nodeMap.has(val)) {
    this.nodeMap.get(val).push(node)
  } else {
    this.nodeMap.set(val, [node])
  }
  let pointer = this.mins
  while (pointer) {
    if (pointer.val < node.val) pointer = pointer.prev
    else {
      break
    }
  }
  node.next = pointer.next
  node.prev = pointer
  pointer.next = node
  node.next.prev = node
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const item = this.stack.pop()
  const node = this.nodeMap.get(item).pop()
  const prev = node.prev
  const next = node.next
  prev.next = next
  next.prev = prev
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.mins.prev.val
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

