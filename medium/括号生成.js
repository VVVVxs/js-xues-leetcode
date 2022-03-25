// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

// 输入：n = 1
// 输出：["()"]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];
    const dfs = (lremain, rrmain, str) => {
        console.log('lremain',lremain);
        console.log('rrmain',rrmain);
        console.log('str',str);
        if (str.length == 2 * n) {
            res.push(str);
        }

        if (lremain > 0) {
            dfs(lremain - 1, rrmain, str + '(')
        }
        if (lremain < rrmain) {
            dfs(lremain, rrmain - 1, str + ')')
        }
    }
    dfs(n, n, '');
    return res;
};

console.log(generateParenthesis(3))