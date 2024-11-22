/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const numMap = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M"
  }
  const numStr = num.toString()
  const len = numStr.length
  let res = ""
  for (let i = 0; i < len; i++) {
    const n = numStr[i]
    const base = Math.pow(10, len - i - 1)
    const key = n * base
    if (numMap[key]) {
      res += numMap[key]
    } else {
      if (n < 4) {
        res += numMap[base].repeat(n)
      } else {
        res += numMap[5 * base] + numMap[base].repeat(n - 5)
      }
    }
  }
  return res
};
// @lc code=end

