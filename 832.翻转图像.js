/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  for(let i = 0; i < image.length;i++) {
    const row = image[i]
    const newRow = []
    for (let j = row.length - 1; j >= 0;j--) {
      const num = row[j]
      if (num === 1) {
        newRow.push(0)
      } else {
        newRow.push(1)
      }
    }
    image[i] = newRow
  }
  return image
};
// @lc code=end

