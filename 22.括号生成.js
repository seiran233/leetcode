/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const _generate = (list, temp,open, close) => {
    if (temp.length === n * 2) {
      return list.push([...temp].join(''));
    }
    if (open < n) {
      temp.push('(');
      _generate(list, temp, open + 1, close);
      temp.pop();
    }
    if (close < open) {
      temp.push(')');
      _generate(list, temp, open, close + 1);
      temp.pop();
    }
  }
  const list = [];
  const temp = [];
  _generate(list, temp, 0, 0);
  return list;
};
// @lc code=end

