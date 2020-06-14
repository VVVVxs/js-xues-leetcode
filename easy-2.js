// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 注意:
// 示例 1:
// 输入: 123
// 输出: 321

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31−1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const isNegative = x < 0;
    const numArr = [];
    let num = Math.abs(x);
    while (num > 10) {
        const remainder = num % 10;
        numArr.push(remainder)
        num = Math.floor(num / 10);
    }
    numArr.push(num)
    const newNum = parseInt(numArr.join(''));
    if (isNegative) {
        if (newNum * -1 < -Math.pow(2, 31) - 1) {
            return 0;
        } else {
            return newNum * -1;
        }
    } else {
        if (newNum > Math.pow(2, 32)) {
            return 0;
        }
    }
    return newNum;
};
console.log('result', reverse(-1232));