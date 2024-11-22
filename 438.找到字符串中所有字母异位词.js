/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s === p) return [0]
  let l = 0
  let r = p.length - 1
  const map = countMap(p)
  const ret = []
  while (r < s.length) {
    const sub = s.substring(l, r + 1)
    const subMap = countMap(sub)
    let flag = true
    for(const char of Object.keys(subMap)) {
      if (subMap[char] !== map[char]) {
        flag = false
        break
      }
    }
    if(flag) ret.push(l)
    l++
    r++
  }
  return ret
};

// @lc code=end

