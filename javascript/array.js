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

/*
Given an integer array nums and an integer val,
remove all occurrences of val in nums in-place. 
The order of the elements may be changed. 
Then return the number of elements in nums which are not equal to val. */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length;
};


/* Write code that enhances all arrays such 
that you can call the array.last() method on any array and
it will return the last element. If there are no elements
in the array, it should return -1.
You may assume the array is the output of JSON.parse. */


/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    if(this.length && this.length <= 1000)
        return(this[this.length-1]);
    return -1;
};


const arr = [1, 2, 3];
 arr.last(); // 3



/*
Given an array arr and a chunk size size, 
return a chunked array. A chunked array contains the original elements in arr,
but consists of subarrays each of length size. 
The length of the last subarray may be less than size 
if arr.length is not evenly divisible by size.
You */


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.size <= size)
        return [arr];
    let loop = Math.ceil(arr.length / size), i, newArr = [];
    let index = 0;
    for(i = 0; i <loop; i++) {
        newArr.push(arr.slice(index, index + size));
        index += size
    }
    return newArr;
};


/*Given a signed 32-bit integer x, 
return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit 
integer range [-231, 231 - 1], then return 0
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = [], i = 0;
    const isneg = x < 0 ? true : false;
    if(isneg) 
        x = x * -1; 
    while(x > 0) {
        num[i++] = x%10
        x = Math.floor(x/10)
    }
    let newnumber = 0; x = num.length - 1
    for(i = 0; i< num.length; i++) {
        newnumber += (num[i] * (10**x));
        x--;
    }
    if(isneg) 
        newnumber = newnumber * -1;
    if(newnumber < -(2**31) || newnumber > (2**31)-1)
        return 0;
    return newnumber;
};


/*Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = nums.concat(nums);
    return ans;
};