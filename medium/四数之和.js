// 18. 四数之和
// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
// 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
// 注意：答案中不可以包含重复的四元组。

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// 输入：nums = [], target = 0
// 输出：[]

// 提示：

// 0 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

    const numArr = [];
    const result = [];
    const map = {};
    const sum = (a, b) => a + b;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 3; j < nums.length; j++) {
            if (i == j) continue;
            const sortArr = [nums[i], nums[j]].sort((a, b) => a - b);
            if (!map[`${sortArr.join(';')}`]) {
                numArr.push([nums[i], nums[j]])
                map[`${sortArr.join(';')}`] = 1;
            }
        }
    }
    console.log('numArr', numArr);
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArr[i].sort((a, b) => a - b).join(';') === numArr[j].sort((a, b) => a - b).join(';')) continue;
            if (sum(...numArr[i]) + sum(...numArr[j]) === target) {
                const sortArr = [...numArr[i], ...numArr[j]].sort((a, b) => a - b)
                if (!(map[`${sortArr.join(';')}`])) {
                    result.push(sortArr)
                    map[`${sortArr.join(';')}`] = 1;
                }
            }
        }
    }
    return result;
};

console.log('fourSum', fourSum([1, 0, -1, 0, -2, 2], 0))