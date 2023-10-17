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
