/*Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let range = [];
    range[0] = nums.indexOf(target);
    range[1] = nums.lastIndexOf(target);
    return range;
};
