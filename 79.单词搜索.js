/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board.length) return false
  if (board.length * board[0].length < word.length) return false
  let ret = false
  let path = []
  const dfs = (x, y, index) => {
      if (path.includes(`${x}${y}`)) {
          path.push(`${x}${y}`)
          return
      }
      path.push(`${x}${y}`)
      if (x < 0 || y < 0) return
      if (ret) return
      if (!board[x]) return
      if (board[x][y] === word[index]) {
          if (index === word.length - 1) {
              ret = true
              return
          }
          dfs(x + 1, y, index + 1)
          path.pop()
          dfs(x, y + 1, index + 1)
          path.pop()
          dfs(x - 1, y, index + 1)
          path.pop()
          dfs(x, y - 1, index + 1)
          path.pop()
      }
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          path = []
          if (ret) return ret
          dfs(i, j, 0)
      }
  }
  return ret
};
// @lc code=end

