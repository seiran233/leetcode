/*
 * @lc app=leetcode.cn id=799 lang=javascript
 *
 * [799] 香槟塔
 */

// @lc code=start
/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  let glassNum = 0
  for(let i = 0; i < query_row; i++) {
    glassNum += (i + 1)
  }
  if (poured <= glassNum) return 0
  let surplus = poured - glassNum
  if (surplus >= (query_row + 1)) return 1
  let per = (surplus / query_row)
  if (query_glass === 0 || query_glass === query_row) return per / 2
  return per
};
// @lc code=end

