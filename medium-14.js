// 下一个排序
// “下一个排列”的定义是：给定数字序列的字典序中下一个更大的排列。
// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

// 我们可以将该问题形式化地描述为：给定若干个数字，将其组合为一个整数。
// 如何将这些数字重新排列，以得到下一个更大的整数。
// 如 123 下一个更大的数为 132。如果没有更大的整数，则输出最小的整数。

function nextPermutation(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        //  这个时候证明不是递减数组
        let j = nums.length - 1; // 求i右边第一个大于num[i]的值，i右边比如是单减
        while (j > 0 && nums[j] <= nums[i]) {
            j--;
            
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 如果为-1，则单减，所以要转成单增；i右边都是单减，全部转成单增
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

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
