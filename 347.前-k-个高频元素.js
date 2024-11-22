/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (k < 1) return []
  const counter = {}
  const minHeap = new MinHeap([])
  for (let i = 0; i < nums.length; i++) {
    let count = counter[nums[i]]
    if (count) counter[nums[i]] = ++count
    else counter[nums[i]] = count = 1
  }
  for (let num in counter) {
    if (minHeap.queue.length >= k) {
      if (minHeap.head.key < counter[num]) {
        minHeap.pop()
        minHeap.push({
          key: counter[num],
          val: num
        })
      }
    } else {
      minHeap.push({
        key: counter[num],
        val: num
      })
    }
  }
  return minHeap.queue.map(item => (Number(item.val)))
};
class Heap {
  queue;
  constructor(nums) {
    this.queue = [...nums];
    for (let i = 0; i < this.queue.length; i++) {
      this.upNode(i);
    }
  }
  upNode(i) {
  }
  downNode(i) {
  }
  pop() {
    if (!this.queue.length)
      return null;
    const temp = this.queue[0];
    const tail = this.queue.pop();
    if (temp !== tail)
      this.queue[0] = tail;
    this.downNode(0);
    return temp;
  }
  push(node) {
    this.queue.push(node);
    this.upNode(this.queue.length - 1);
  }
  get head() {
    return this.queue[0] || null;
  }
  toTree() {
    const dfs = (i) => {
      if (!this.queue[i])
        return null;
      return {
        ...this.queue[i],
        left: dfs(i * 2 + 1),
        right: dfs(i * 2 + 2)
      };
    };
    return dfs(0);
  }
}
class MaxHeap extends Heap {
  constructor(nums) {
    super(nums);
  }
  upNode(i) {
    let parent = Math.floor((i - 1) / 2);
    while (this.queue[parent]) {
      if (this.queue[i].key > this.queue[parent].key) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[parent];
        this.queue[parent] = temp;
        i = parent;
        parent = Math.floor((i - 1) / 2);
      }
      else {
        break;
      }
    }
  }
  downNode(i) {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    while (l < this.queue.length) {
      let maxIndex = l;
      if (this.queue[r] && this.queue[r].key > this.queue[maxIndex].key) {
        maxIndex = r;
      }
      if (this.queue[maxIndex].key > this.queue[i].key) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[maxIndex];
        this.queue[maxIndex] = temp;
        i = maxIndex;
        l = i * 2 + 1;
        r = i * 2 + 2;
      }
      else {
        break;
      }
    }
  }
}
class MinHeap extends Heap {
  constructor(nums) {
    super(nums);
  }
  upNode(i) {
    let parent = Math.floor((i - 1) / 2);
    while (this.queue[parent]) {
      if (this.queue[i].key < this.queue[parent].key) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[parent];
        this.queue[parent] = temp;
        i = parent;
        parent = Math.floor((i - 1) / 2);
      }
      else {
        break;
      }
    }
  }
  downNode(i) {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    while (l < this.queue.length) {
      let minIndex = l;
      if (this.queue[r] && this.queue[r].key < this.queue[minIndex].key) {
        minIndex = r;
      }
      if (this.queue[minIndex].key < this.queue[i].key) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[minIndex];
        this.queue[minIndex] = temp;
        i = minIndex;
        l = i * 2 + 1;
        r = i * 2 + 2;
      }
      else {
        break;
      }
    }
  }
}
// @lc code=end

