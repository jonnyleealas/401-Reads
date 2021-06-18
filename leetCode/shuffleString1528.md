# Shuffle String
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

# Simplified
- Create empty string
- Return empty string
- Iterate through indices.length
- Shuffled += add the string to the empty string at position [indices.indexOf[i]]
    - This will go to indices, look for indexOf i. Index of i in indices is 0 which if counted turns out to be index 4. Index 4 of string is c. It will add c as the first index of the empty string.
- What we do is go to indices, find index at i. That index evaluation tells us which index of the string to add to our empty string.

# Code 
```var restoreString = function(s, indices) {
    let shuffled = '';
    
    for(let i=0; i < indices.length; i++){
        shuffled += s[indices.indexOf(i)]
    }
    return shuffled
};
```

# Solution 2
- Solution two is similar to solution one except we have to convert an array to a string with join("")
- We create an empty array binding
- Loop through indices
- equal shuffled index at position indices at i which will be zero ---> so wherever evaluates to 0 in the array called indices we add s[i]. 

```
var restoreString = function(s, indices) {
    let shuffled = [];
    
    for(let i=0; i < indices.length; i++){
        shuffled[indices[i]] = s[i]
    }
    return shuffled.join('')
};
```

# Solution 3
- Using reduce is the same as the other two solutions.
- take our indices array and add reduce to it.
- Accumulator is where we want to store our new string.
- currentValue of our indices array starts at 4. So at index 4 of our accumulator we want to add the string[i] of our loop---> this would add the 0 index of our string to the 4 index of our accumulator.
- We need to concatenate our accumulator array to a string so we use join('')
```
var restoreString = function(s, indices) {
  return indices.reduce((accumulator, currentValue, i)=>{
      accumulator[currentValue] = s[i]

      return acc
  },[].join(''))
};
```
