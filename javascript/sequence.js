/*Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].*/


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1 = nums.slice(0,n);
    let arr2 = nums.slice(n, nums.length);
    let x = arr1.length, i, newarr = [];
    for(i = 0; i < x; i++) {
        newarr.push(arr1[i]);
        newarr.push(arr2[i]);
    }
    return newarr;
};
