// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

// 输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3

// 输入: dividend = 7, divisor = -3
// 输出: -2
// 解释: 7/-3 = truncate(-2.33333..) = -2

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let restNum = dividend > 0 ? dividend : -dividend;
    let absDivisor = divisor > 0 ? divisor : -divisor;
    let quotient = 0;
    const limit = Math.pow(2, 31);

    while (restNum >= absDivisor) {
        let t = absDivisor;
        let temp = 1;
        while (restNum >= t) {
            restNum -= t;
            temp += temp;
            t += t;
        }
        quotient += temp - 1;
    }
    if (!((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0))) {
        quotient = -quotient;
    }
    if (quotient >= limit) {
        return limit - 1;
    }
    if (dividend < -limit) {
        return -limit;
    }

    return quotient;
};
console.log('333', divide(-2147483648, 2))