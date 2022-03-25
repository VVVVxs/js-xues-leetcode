// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

/**
 * @param {number} x
 * @return {boolean}
 */

// 解法1：
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    if (x === 0) {
        return true
    }

    const arr = [];
    let param = x;
    while (param >= 10) {
        const remainder = param % 10;
        arr.push(remainder);
        param = Math.floor(param / 10)
    }
    arr.push(param)
    return parseInt(arr.join('')) === x;
};

// 解法2：
var isPalindrome2 = function (x) {
    if (x < 0) {
        return false
    }
    x = x.toString();
    length = x.length;
    for (let i = 0; i < length / 2; i++) {
        if (x[i] !== x[length - 1 - i]) {
            return false
        }
    }
    return true;

};
console.log('result', isPalindrome2(121))