// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N

//  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"

// 输入: s = "LEET ODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    let list = new Array(numRows).fill("");
    const n = 2 * (numRows - 1);
    for (let i = 0; i < s.length; i++) {
        let x = i % n;
        list[x < numRows ? x : n - x] +=s[i];
    }
    return list.join('');
};

// 思路：
// 先生成一个行数长度的数组，然后根据循环周期 2(n-1)，以及余数来计算数组哪一项填充值
console.log('result', convert('LEETCODEISHIRING', 4));