/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */



// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.count = new Array(10 ** 5).fill(null)
  this.capacity = capacity
  this.cache = {}
  this.freqMap = {}
  this.minFreq = 1
  this.currentCapacity = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const node = this.cache[key]
  if (!node) return -1
  this.freqAdd(node)
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    const node = this.cache[key]
    node.value = value
    this.freqAdd(node)
    this.cache[key] = node
  } else {
    if (this.currentCapacity >= this.capacity) {
        this.removeMinFreq(key)
        this.currentCapacity--
    }
    if (!this.freqMap[1]) this.freqMap[1] = new DoubleLinkedList()
    const node = new Node(key, value, 1)
    this.freqMap[1].append(node)
    this.cache[key] = node
    this.minFreq = 1
    this.currentCapacity++
  }
};

LFUCache.prototype.freqAdd = function(node) {
  const freqList = this.freqMap[node.freq]
  freqList.remove(node)
  if (freqList.head.next === freqList.tail && node.freq === this.minFreq) this.minFreq++
  node.freq += 1
  if (!this.freqMap[node.freq]) this.freqMap[node.freq] = new DoubleLinkedList()
  this.freqMap[node.freq].append(node)
}

LFUCache.prototype.removeMinFreq = function(key) {
  const list = this.freqMap[this.minFreq]
  const node = list.shift()
  delete this.cache[node.key]
  if (list.head.next === list.tail) {
    this.minFreq++
  }
}

class Node {
  constructor(key,value) {
    this.key = key
    this.value = value
    this.freq = 1
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor() {
    const head = new Node('head', 'head')
    const tail = new Node('tail', 'tail')
    head.next = tail
    head.prev = tail
    tail.next = head
    tail.prev = head
    this.head = head
    this.tail = tail
  }

  append(node) {
    node.prev = this.tail.prev
    node.next = this.tail
    node.prev.next = node
    this.tail.prev = node
  }

  remove(node) {
    const next = node.next
    const prev = node.prev
    next.prev = prev
    prev.next = next
    node.next = null
    node.prev = null
  }

  shift() {
    if (this.head.next === this.tail) return null
    const node = this.head.next
    this.head.next = node.next
    this.head.next.prev = this.head
    node.next = null
    node.prev = null
    return node
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

