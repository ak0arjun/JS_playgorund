"use strict";

//Given an array of integers print all possible unique sets of the array. For example
// [1,2,3] ==> [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]];

const decToBinary = (num, setSize) => {
  let binary = "";
  let rem = num % 2;
  while (num > 0) {
    console.log(num + ":" + rem);
    binary = rem + binary;
    num = Math.floor(num / 2);
    rem = num % 2;
  }
  while (binary.length < setSize) {
    binary = "0" + binary;
  }
  return binary;
};

const powerSet = (arr) => {
  let res = [];
  if (arr) {
    let powerSetSize = Math.pow(2, arr.length);
    for (let li = 0; li < powerSetSize; li++) {
      let setNum = li;
      console.log(setNum);
      let binaryStr = decToBinary(setNum, arr.length);
      console.log(binaryStr);
      let subSet = [];
      for (let sli = 0; sli < binaryStr.length; sli++) {
        if (binaryStr[sli] == 1) {
          subSet.push(arr[sli]);
        }
      }
      console.log(subSet);
      res.push(subSet);
    }
  }

  return res;
};

module.exports = powerSet;
