/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
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
 * @return {number}
 */
var maxSumBST = function (root) {
  const sumList = []
  let max = 0
  const dfs = (node) => {
    const val = node.val
    let leftIsBST = true
    let rightIsBST = true
    let leftSum = 0
    let rightSum = 0
    let maxLeft = -Infinity
    let minRight = Infinity
    let leftRet = {}
    let rightRet = {}
    if (node.left) {
      leftRet = dfs(node.left)
      leftIsBST = leftRet.isBST
      leftSum = leftRet.sum
      maxLeft = leftRet.maxLeft
      if (leftIsBST) {
        sumList.push(leftSum)
      }
    }
    if (node.right) {
      rightRet  = dfs(node.right)
      rightIsBST = rightRet.isBST
      rightSum = rightRet.sum
      minRight = rightRet.minRight
      if (rightIsBST) {
        sumList.push(rightSum)
      }
    }
    const ret = {
      isBST: leftIsBST && rightIsBST && val < minRight && val > maxLeft,
      sum: leftSum + rightSum + node.val,
      maxLeft: getMax(node.val, leftRet.maxLeft, rightRet.maxLeft),
      minRight: getMin(node.val, leftRet.minRight ,rightRet.minRight)
    }
    if (!node.right && !node.left) {
      ret.isBST = true
      ret.maxLeft = node.val
      ret.minRight = node.val
    }
    return ret
  }
  const rootRet = dfs(root)
  if (rootRet.isBST) sumList.push(rootRet.sum)
  for (const sum of sumList) {
    if (sum > max) max = sum
  }
  return max
};

function getMax(...args) {
  let max = -Infinity
  for(const num of args) {
    if (num === void 0) continue
    if (num > max) max = num
  }
  return max
}

function getMin(...args) {
  let min = Infinity
  for(const num of args) {
    if (num === void 0) continue
    if (num < min) min = num
  }
  return min
}

// @lc code=end

