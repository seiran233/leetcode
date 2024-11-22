/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const map = new Map()
  for (const item of times) {
    const val = item[0]
    const child = item[1]
    const time = item[2]
    let node = {
      val,
      time
    }
    if (map.has(val)) {
      node = map.get(val)
    }
    const childNode = map.get(child) || {
      val: child,
      time
    }
    if (childNode === node.right || childNode === node.left) {
      node.time = Math.min(chi)
    }
    if (node.left) node.right = childNode
    else node.left = childNode
    map.set(val, node)
    map.set(child, childNode)
  }
  const node = map.get(k)
  
  let count = 0
  const dfs = (node) => {
    let leftTime = 0
    let rightTime = 0
    count++
    if (node.left) leftTime = dfs(node.left) + node.time
    if (node.right) rightTime = dfs(node.right) + node.time
    return Math.max(leftTime, rightTime) 
  }
  let time = dfs(node)
  console.log(map, count)
  if (count === map.size) return time
  return -1
};
// @lc code=end

