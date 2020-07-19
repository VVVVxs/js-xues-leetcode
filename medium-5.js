// 盛最多水的问题

// 示例：

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const currentArea = (right - left) * Math.min(height[left], height[right]);
        if (currentArea > maxArea) {
            maxArea = currentArea;
        }
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return maxArea;
};

console.log('result', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))