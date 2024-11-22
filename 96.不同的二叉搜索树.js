/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; ++i) {
      for (let j = 1; j <= i; ++j) {
          G[i] += G[j - 1] * G[i - j];
      }
  }
  return G[n];
};
// @lc code=end

