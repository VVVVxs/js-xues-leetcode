// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;
    if (len === 0) {
        return true;
    }
    // 如果字符串长度不是偶数，那么肯定是不符合条件的
    if (len % 2 !== 0) {
        return false;
    }
    const arr = [];
    for (let i = 0; i < len; i++) {
        const str = s[i];
        switch (str) {
            case '(':
                arr.push(str);
                break;
            case '[':
                arr.push(str);
                break;
            case '{':
                arr.push(str);
                break;
            case ')':
                if (arr.pop() !== '(') return false;
                break;
            case ']':
                if (arr.pop() !== '[') return false;
                break;
            case '}':
                if (arr.pop() !== '{') return false;
                break;
            default:
                break;
        }
    }
    return !arr.length;
};

// 耗时长
// var isValid = function (s) {
//     if (s.length === 0) {
//         return false;
//     }
//     // 如果字符串长度不是偶数，那么肯定是不符合条件的
//     if (s.length % 2 !== 0) {
//         return false;
//     }
//     const condition = ['()', '{}', '[]']
//     // 当字符串的长度还是不等于0就继续循环
//     while (s.length !== 0) {
//         // 记录是否存在
//         let successCount = 0;
//         condition.map((val) => {
//             // 获取首次存在的index
//             let index = s.indexOf(val);
//             if (index > -1) {
//                 successCount++;
//                 if (index - 1 >= 0) {
//                     s = s.substring(0, index) + s.substring(index + 2);
//                 } else {
//                     s = s.substring(index + 2);
//                 }
//             }
//         })
//         // 如果遍历一次不存在，那么直接退出
//         if (successCount === 0) {
//             return false;
//         }
//     }
//     return true;
// };

console.log('result', isValid("(]"));