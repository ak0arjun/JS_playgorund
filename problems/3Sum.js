// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
//Example:Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  let retArr = [];
  let retMap = {};
  for (let li = 0; li < nums.length; li++) {
    let ptr1 = 0;
    let ptr2 = nums.length - 1;
    while (ptr1 < ptr2) {
      if (ptr1 == li) {
        ptr1++;
        continue;
      }
      if (ptr2 == li) {
        ptr2--;
        continue;
      }
      let sum = nums[li] + nums[ptr1] + nums[ptr2];
      if (sum == 0) {
        let newArr = [];
        newArr.push(nums[li]);
        newArr.push(nums[ptr1]);
        newArr.push(nums[ptr2]);
        let key = newArr.sort().join();
        if (!(key in retMap)) {
          // console.log(newArr);
          retArr.push(newArr);
          retMap[key] = true;
        }
        ptr1++;
        ptr2--;
      } else if (sum < 0) {
        ptr1++;
      } else {
        ptr2--;
      }
    }
  }
  //     console.log(retMap);
  // console.log(retArr);
  return retArr;
};

module.exports = threeSum;