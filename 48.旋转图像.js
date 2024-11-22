/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  for (i = 0; i < n / 2;i++) {
    let temp = matrix[i]
    matrix[i] = matrix[n - i - 1]
    matrix[n - i - 1] = temp
  }
  for (i = 0; i < n ;i++) {
    for (j = i; j < n;j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
};
// @lc code=end

