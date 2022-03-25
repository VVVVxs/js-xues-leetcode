// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let start = 0;
    let maxLength = 1;
    const length = s.length;
    const expand = (left, right) => {
        while (left >= 0 && right < length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < length; i++) {
        expand(i - 1, i + 1);
        expand(i, i + 1)
    }
    return s.substring(start, start + maxLength);
}

console.log('result',longestPalindrome('ababa'))