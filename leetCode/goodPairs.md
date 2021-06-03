let nums = [1,2,3,1,1,3]
// Output
// 2
// Expected
// 4

loop for i
loop for j
if nums[i] == nums[j] && i < j 
keep track of goodPairs ++
return goodPairs outside of loops

var numIdenticalPairs = function(nums) {
    let goodPairs = 0
    for(let i=0;i<nums.length; i++){
      console.log(nums[i],i,"nums")
        for(let j= 0; j< nums.length ; j++){
            if(nums[i]==nums[j]&& i < j){
            goodPairs ++
            } 
        }
    }
        return goodPairs
};

console.log(numIdenticalPairs(nums))