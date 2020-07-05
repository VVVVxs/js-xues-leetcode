// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

var lengthOfLongestSubstring = function (s) {
    const len = s.length;
    if (len > 0) {
        const repeatArray = [];
        let str = '';
        for (let i = 0; i < len; i++) {
            const index = str.indexOf(s[i]) + 1
            if (index > 0) {
                repeatArray.push(str.length);
                str = str.substr(index);
            }
            str += s[i];
            if (i + 1 == len) {
                repeatArray.push(str.length);
            }
        }
        return Math.max(...repeatArray)
    }
    return 0;
};
console.log('result', lengthOfLongestSubstring(''));