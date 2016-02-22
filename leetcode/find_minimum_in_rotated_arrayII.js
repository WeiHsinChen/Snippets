/* Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * Find the minimum element.
 * The array may contain duplicates.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for (var left = 0, right = nums.length - 1; left < right; ) {
        if (nums[left] < nums[right])
            return nums[left];
        var mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > Math.max(nums[left], nums[right]))
            left = mid + 1;
        else if (nums[mid] != nums[left])
            right = mid;
        else
            ++left;
    }
    return nums[left];
};
