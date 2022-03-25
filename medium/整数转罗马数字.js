// 整数转罗马数字
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let str = '';
    for (let i = 0; i < keys.length;) {
        if (num >= keys[i]) {
            str += values[i];
            num-=keys[i];
        } else {
            i++
        }
    }
    return str;
};
console.log('result',intToRoman(58));