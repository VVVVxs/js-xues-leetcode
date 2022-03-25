// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 思路
// 先将数组排序
// 指定首项作为起始点
// 在起始点后声明起始点后面的位置以及最后一个位置
// 通过这两个位置来对数组进行一个遍历
// 如果三个数相加为0则将三个数保存起来，将起始点的位置向左继续移动
// 如果得到结果小于等于0，则将较小的left变量往右边移动一位
// 如果得到的结果大于0，则将较大的right变量往左边移动
// 如果出现重复的数，则直接将起始变量,left，right继续按照既定的规则移动
// 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    nums.sort((a,b)=>a-b);
    const size = nums.length;
    if (nums[0] <= 0 && nums[size - 1] >= 0) {
        let i = 0;
        while (i < size - 2) {
            if (nums[i] > 0) break;
            let left = i + 1;
            let right = size - 1;
            while (left < right) {
                if (nums[i] * nums[right] > 0) break;
                const sum = nums[i] + nums[left] + nums[right]
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                }
                if (sum <= 0) {
                    // 
                    while (nums[left] === nums[++left]) continue;
                } else {
                    while (nums[right] === nums[--right]) continue;
                }
            }
            while (nums[i] === nums[++i]) continue;
        }
    }
    return result;
};

console.log('1', threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));