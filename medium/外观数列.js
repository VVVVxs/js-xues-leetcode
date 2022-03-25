// 外观数列

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 第一项是数字 1 
// 描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
// 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
// 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
// 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"

// 输入：n = 1
// 输出："1"
// 解释：这是一个基本样例。
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    const str = n.toString();
    let temp = 1;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] === str[i]) {
            temp += 1;
        } else {
            result += `${temp}${str[i]}`
        }
    }
    return result;
};
console.log('result',countAndSay(1211));
