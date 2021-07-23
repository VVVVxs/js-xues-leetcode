// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]


// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const findLeft = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    let result = new Array(2);

    if (findLeft(nums, target) >= nums.length || nums[findLeft(nums, target)] !== target) {
        result = [-1, -1];
    } else {
        result = [findLeft(nums, target), findLeft(nums, target + 1) - 1]
    }
    return result;
};