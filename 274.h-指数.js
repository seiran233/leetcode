/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const count = new Array(citations.length + 1).fill(0)
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length) {
        count[citations.length]++
    } else {
        count[citations[i]]++
    }
    
  }
  let h = 0
  for(let i = count.length - 1; i >= 0; i--) {
    h += count[i]
    if (h >= i) {
      return i
    }
  }
 return 0
};
// @lc code=end

