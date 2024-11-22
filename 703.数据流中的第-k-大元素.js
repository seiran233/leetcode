/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start

let driver = 'bst'
var KthLargest = function (k, nums) {
  this.k = k
  nums.sort((a, b) => a - b)
  this.range = k < nums.length ? nums.slice(nums.length - k) : nums
  if (driver === 'bst') {
    this.bst = new BST(this.range)
    const minNode = this.bst.getMin()
    this.min = minNode ? minNode.val : undefined

  } else if (driver === 'heap') {
    this.k = k
    this.heap = new MinHeap(nums.map(num => ({
      key: num
    })))
    this.min = this.heap.head ? this.heap.head.key : undefined
  }

};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
  if (val < this.min && this.range.length >= this.k) return this.min
  this.range.push(val)
  if (driver === 'bst') {
    this.bst.insert(val)
    if (this.min !== void 0 && this.range.length > this.k) {
      this.bst.delete(this.min)
    }
    const minNode = this.bst.getMin()
    this.min = minNode ? minNode.val : this.min
    return this.min
  } else if (driver === 'heap') {
    this.heap.push({
      key: val
    })
    this.min = this.heap.head
    if (this.range.length > this.k) {
      return this.heap.pop()
    }
    return this.heap.head
  }

};
class MinHeap {
  queue;
  constructor(nums) {
    this.queue = [...nums];
    for (let i = 0; i < this.queue.length; i++) {
      this.#upNode(i);
    }
  }
  #upNode(i) {
    let parent = Math.floor((i - 1) / 2);
    while (this.queue[parent]) {
      if (this.queue[i].key < this.queue[parent].key) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[parent];
        this.queue[parent] = temp;
        i = parent;
        parent = Math.floor((i - 1) / 2);
      } else {
        break;
      }
    }
  }
  #downNode(i) {
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
  pop() {
    if (!this.queue.length)
      return null;
    const temp = this.queue[0];
    const tail = this.queue.pop();
    if (temp !== tail)
      this.queue[0] = tail;
    this.#downNode(0);
    return temp;
  }
  push(node) {
    this.queue.push(node);
    this.#upNode(this.queue.length - 1);
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
class TreeNode {
  val;
  left;
  right;
  count;
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}
class BST {
  root;
  constructor(arr) {
    this.root = null;
    const list = [...arr].sort((a, b) => a - b);
    const dfs = (l, r) => {
      if (l > r)
        return;
      const mid = Math.floor((r - l) / 2) + l;
      this.insert(list[mid]);
      dfs(l, mid - 1);
      dfs(mid + 1, r);
    };
    dfs(0, arr.length - 1);
  }
  insert(val) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
      return;
    }
    const dfs = (node, tree) => {
      if (node.val > tree.val) {
        if (tree.right)
          dfs(node, tree.right);
        else
          tree.right = node;
      }
      else if (node.val < tree.val) {
        if (tree.left)
          dfs(node, tree.left);
        else
          tree.left = node;
      }
      else {
        tree.count++;
      }
    };
    dfs(node, this.root);
    return this.root;
  }
  search(val, hasParent = false) {
    if (!this.root)
      return { target: null };
    const dfs = (val, node, parent) => {
      if (val < node.val) {
        if (node.left)
          return dfs(val, node.left, node);
        else
          return { target: null };
      }
      else if (val > node.val) {
        if (node.right)
          return dfs(val, node.right, node);
        else
          return { target: null };
      }
      else {
        return {
          target: node,
          parent: parent || undefined
        };
      }
    };
    return dfs(val, this.root, null);
  }
  getMin() {
    if (!this.root)
      return null;
    let node = this.root;
    while (node.left)
      node = node.left;
    return node;
  }
  #getLeftMax(node) {
    if (!node.left) {
      return null;
    }
    let target = node.left;
    if (!target.right) {
      return target;
    }
    let right = target.right;
    while (right.right) {
      target = right;
      right = right.right;
    }
    if (right.left) {
      target.right = right.left;
      right.left = null;
    }
    else {
      target.right = null;
    }
    return right;
  }
  #getRightMin(node) {
    if (!node.right) {
      return null;
    }
    let target = node.right;
    if (!target.left) {
      return target;
    }
    let left = target.left;
    while (left.left) {
      target = left;
      left = left.left;
    }
    if (left.right) {
      target.left = left.right;
      left.right = null;
    }
    else {
      target.left = null;
    }
    return left;
  }
  delete(val) {
    const { target, parent } = this.search(val, true);
    if (!target)
      return;
    target.count--;
    if (target.count > 0)
      return;
    let replacement = this.#getLeftMax(target);
    if (!replacement) {
      replacement = this.#getRightMin(target);
      if (replacement) {
        if (target.right === replacement) {
          replacement.left = target.left;
        }
        else {
          replacement.left = target.left;
          replacement.right = target.right;
        }
      }
    }
    else {
      if (target.left === replacement) {
        replacement.right = target.right;
      }
      else {
        replacement.left = target.left;
        replacement.right = target.right;
      }
    }
    target.left = null;
    target.right = null;
    if (!parent) {
      this.root = replacement;
    }
    else if (parent.left === target) {
      parent.left = replacement;
    }
    else if (parent.right === target) {
      parent.right = replacement;
    }
  }
  toArray() {
    const arr = [];
    const LDR = (node) => {
      if (!node)
        return;
      if (node.left)
        LDR(node.left);
      for (let count = 1; count <= node.count; count++)
        arr.push(node.val);
      if (node.right)
        LDR(node.right);
    };
    LDR(this.root);
    return arr;
  }
  toString() {
    return JSON.stringify(this.root || {}, null, 2);
  }
}


// Array(20).fill(1).map((_, i) => i).forEach((_, i) => {
//   bst.insert(i + 1)
//   bst.delete(-10000 + i)
//   console.log(bst.getMin(bst.root, null, false).val)
// })

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// @lc code=end


