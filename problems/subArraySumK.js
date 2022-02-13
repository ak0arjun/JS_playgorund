//Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.
// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 const subarraySum = function(nums, k) {
    let ret = 0;
    if(nums){
        let sumMap = {0:1};
        let sum = 0;
        for(let li=0;li<nums.length;li++){
            sum = sum + nums[li];
            if((sum-k) in sumMap){
                ret = ret+sumMap[(sum-k)];
            }
            if(!(sum in sumMap)){
                sumMap[sum] = 0;
            }
            sumMap[sum]= sumMap[sum]+1;
        }
    }
    return ret;
};

module.exports = subarraySum;
