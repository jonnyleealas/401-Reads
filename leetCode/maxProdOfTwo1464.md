# Find the max product of two numbers in an array
Share
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

# Simplified
- Find the highest number and the second highest number
- Return highest -1 * secondHighest -1

# Code
- Binding for highest and secondHighest to store our two number along the way
- Loop through nums array
- We are going to save our secondHighest number first because we are going to the compare it to our highest number.
    - To find the second highest we have to find the max number of two compared numbers. We compare our current second highest against the minimum number between our current highest and our current val in the loop.
    - Param 1 is our secondHighest and param two find the lowest numbers between our current highest and our current val in loop. 
    - Since the highest can never be the minimum number we will get the secondHighest number.
- We find our highest number and store it.
```
var maxProduct = function(nums) {
  let highest = 0, secondHighest = 0;
    
  for (let val of nums) {
    secondHighest = Math.max(secondHighest, Math.min(highest, val));
    highest = Math.max(highest, val);
  }
  return (highest - 1) * (secondHighest - 1);

};
```