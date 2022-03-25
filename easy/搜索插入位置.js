// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1


// 输入: nums = [1,3,5,6], target = 7
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log('mid', mid);

        if (nums[mid] > target) {
            right = mid - 1;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }

        console.log('left', left);
        console.log('right', right);
        if (nums[mid] === target) {
            result = mid;
            break;
        }
    }
    if (result === 0) result = left;


    return result;
};

console.log('3213123', searchInsert([1, 3, 5, 8], 1));