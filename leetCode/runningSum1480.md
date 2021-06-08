let nums = [1,2,3,4]

// array starts at index 1 and counts every number -1 of the index.
// This will count every number after itself or to the left of its self.
// the array is arranged so that each sum is added it position nums[i]
// running sum means everything to the left. Index 0 doesnt have anything to the left of it so index 1 + index[i -1] will equal itself. So the first number that is summed is positioned in inedex 0. 
// we modify the input

# solution 1 modified input
var runningSum = function(nums) {

    
    for(let i =1; i < nums.length; i++){
      console.log('nums:', nums[i])
       nums[i] += nums[i-1]
       console.log('nums[i]+=:', nums[i])
        
    }
    return nums
    
};




console.log(runningSum(nums))


# version 2 new array

// this sets an empty binding.
// a = position i + a
// push new a = i +a into new array
// return new array
var runningSum = function(nums) {
let a =0, sum = [];
    for(let i of nums){
        a = i + a
        sum.push(a)
    }
    return sum
};