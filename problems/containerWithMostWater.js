// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

/**
 * @param {number[]} height
 * @return {number}
 */
 const containMostWater = function(height) {
    let max =0;
     if(height){
         let si=0;
         let ei=height.length-1;
         while(si<ei){
             let h1 = height[si];
             let h2 = height[ei];
             let area = 0;
             if(h1<h2){
                 area = (h1*(ei - si));
                 si++;
             }else{
                 area = (h2*(ei - si));
                 ei--;
             }
             if(area>max){
                 max=area;
             }
         }
     }
     
     return max;
 };

 module.exports = containMostWater;