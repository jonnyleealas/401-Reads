# Algo approaches and patterns
- Devise a plan
- Compare and contrast problem solving patterns.

# Algo is
- Set of steps to accomplish a task.
 
 # How to improve
 - Devise a plan 
 - Master Patterns

 # Patterns
 - Freq counter
 - multiple pointers
 - sliding window
 - Divide and conquer
 - Dynamic programming 
 - Greedy algo
 - Backtracking

 # Frequency Counter
 - Use an Object to collect values and compare 
 - Helps avoid nested loops.
 - Frequency of things that occur

## This checks to see if array 2 contains array 1 but squared
 ```
let arr1 = [1,2,3]
let arr2 = [1,4,9]

/**
 * create empty obj
 * create a variable in the loop for an element
 * loop through array
 * Take array 1 and add the square result to object
 * then we can check the second array and see if it is in the object
 * if it is not in the object return false
 * else return true
 */

let freq = (a,b)=>{
  //check if lengths dont match return false
  if(a.length != b.length){
    return false;
  }
// create empty obj for each array
  let obj1 = {}
  let obj2 = {}
// add array 1
  for(let element of a){
    obj1[element] = (obj1[element] || 0) +1
  }
// add array 2
  for(let element of b){
    obj2[element] = (obj2[element] || 0) +1
  }

// loop through objects and compare for in is for looping objects
for(let key in obj1){
  // this checks to see if the keys squared are in obj2
  if(!(key ** 2 in obj2)){
    return false
  }
  // if the value that is in obj2[key**2] is not the same value in obj1[key]

  // This checks if the values of key squared match the values in obj1. The keys and the values need to match in order to return true.
  if(obj2[key**2] !== obj1[key]){
    return false
   }
 }
  return true
}

```
