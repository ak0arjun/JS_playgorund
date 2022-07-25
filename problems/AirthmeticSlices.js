/**
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.
A subarray is a contiguous subsequence of the array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let count = 0;
  if (nums && nums.length > 2) {
    let currCount = 0;
    for (let li = 2; li < nums.length; li++) {
      if (nums[li] - nums[li - 1] == nums[li - 1] - nums[li - 2]) {
        currCount++;
        count += currCount;
      } else {
        currCount = 0;
      }
    }
  }
  // console.log(count);
  return count;
};
