/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  const LDR = (node, arr = []) => {
    if (node.left) {
      LDR(node.left, arr)
    }
    arr.push(node.val)
    if (node.right) {
      LDR(node.right, arr)
    }
    return arr
  }
  const arr =  LDR(root)
  arr.push(val)
  const buildTree = (arr) => {
    if (!arr.length) return null
    const i = findMaxIndex(arr)
    const node = {
      val: arr[i],
      left: buildTree(arr.slice(0, i)),
      right: buildTree(arr.slice(i + 1, arr.length))
    }
    return node
  }
  return buildTree(arr)
};
function findMaxIndex(arr) {
  let max = -Infinity
  let maxIndex = -1
  for (let i = 0 ; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      maxIndex = i
    }
  }
  return maxIndex
}
// @lc code=end

