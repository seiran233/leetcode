/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const recursive = (employees, id) => {
    const target = employees.find(item => item.id === id)
    const importance = target.importance
    return importance + target.subordinates.reduce((acc, curr) => {
      return acc + recursive(employees, curr)
    },0)
  }
  const ans = recursive(employees, id)
  return ans
};
// @lc code=end

