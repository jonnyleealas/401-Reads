# Jewels and Stones
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

# Simplified
We have "stones" and "jewels"
We need to loop through "stones"
We need to loop through "jewels"
Need a counter to keep track of matching jewels inside of stones
Check if the current jewel[j] is == to current stone[i]
if true counter++
Return the counter


# Code 

```
var numJewelsInStones = function(jewels, stones) {
   let counter = 0 
    for(let i = 0; i < stones.length; i++){
        for(let j = 0; j < jewels.length; j++){
            if(jewels[j] == stones[i]){
                counter ++
            }
        }
    }
    return counter
};

```