# 1365 How many numbers are smaller than current number 
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.


# Simplified 
- At each index check count how many number are larger than the current index[i]
- iterate through array
- iterate through array again to compare index to all other numbers.
- if current[i] > numbers[j] count ++
- create empty array to push count ++
- create binder to keep count
- return smallerNumbers array after pushing count.






```
var smallerNumbersThanCurrent = function(nums) {
  let numbers = nums
  let smallerNumbers=[];
    for(let i=0; i < nums.length; i++){
        let count = 0
        for(let j=0; j < numbers.length; j++){
            if(nums[i] > numbers[j]){
              count++   
            }     
        }
        smallerNumbers.push(count)
    }
    return smallerNumbers
    
};
```