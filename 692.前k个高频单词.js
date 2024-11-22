/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const counts = {}
  const arr = []
  for (const word of words) {
    if (counts[word]) counts[word].key++
    else {
      const counter = {
        word,
        key: 1
      }
      counts[word] = counter
      arr.push(counter)
    }
  }
  const maxHeap = new MaxHeap(arr, {
    customSorter: (a,b) => {
      if (a.key !== b.key) return a.key > b.key
      return a.word < b.word
    }
  })
  const ret = []
  for(let i = 0; i < k; i++) {
    ret.push(maxHeap.pop().word)
  }
  return ret
};
class Heap {
  queue;
  options;
  constructor(nums, options) {
      this.queue = [...nums];
      this.options = Object.assign({
          customSorter: () => { }
      }, options);
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
  constructor(nums, options) {
      super(nums, Object.assign({
          customSorter: (a, b) => {
              return a.key > b.key;
          },
      }, options));
  }
  upNode(i) {
      let parent = Math.floor((i - 1) / 2);
      while (this.queue[parent]) {
          if (this.options.customSorter(this.queue[i], this.queue[parent])) {
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
          if (this.queue[r] &&
              this.options.customSorter(this.queue[r], this.queue[maxIndex])) {
              maxIndex = r;
          }
          if (this.options.customSorter(this.queue[maxIndex], this.queue[i])) {
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
// @lc code=end

