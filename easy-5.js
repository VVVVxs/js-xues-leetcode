// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 输入: ["flower","flow","flight"]
// 输出: "fl"
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    const length = strs.map((val) => {
        return val.length
    })
    let minLength = Math.min(...length);
    let maxCommonstr = strs[0].substring(0, minLength);
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].substring(0, minLength) !== maxCommonstr) {
            minLength--;
            maxCommonstr = maxCommonstr.substring(0, minLength);
        }
    }
    return maxCommonstr;
};
console.log('minLength', longestCommonPrefix(["c","ccc","ccc"]));

