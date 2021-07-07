// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。
// 假定每组输入只存在唯一答案。



// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。


// 提示：

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const sortNums = nums.sort((a, b) => a - b);
    let min = +Infinity; //  首先定义一个初始值
    let result = 0; // 定义结果变量

    // 思路：
    // 1、遍历排序过后的数据
    // 2、运用双指针将排序后的数组进行遍历，将遍历的三个数值相加与target进行比较，保存差值
    // 3、如果新的差值比之前的差值小,则保存新的差值和三数只和
    for (let i = 0; i < sortNums.length > 0; i++) {
        let left = i + 1;
        let right = sortNums.length - 1;
        while (left < right) {
            const sum = sortNums[left] + sortNums[i] + sortNums[right];
            const res = target - sum;
            if (Math.abs(res) < min) {
                min = Math.abs(res);
                result = sum;
            }
            if (res >= 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

console.log('result', threeSumClosest([3,4534,1231,23,22],100))