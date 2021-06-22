# Highest Altitude 1732

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 # Simplified
 - We are looking for changes in altitude
 - We have to add each change and store it in an array
 - We return the highest number in the new array of changes of altitude.


# Code
```
var largestAltitude = function(gain) {
    let altitudes = [0]
    
    for(let i=0; i < gain.length; i++){
        altitudes.push(altitudes[i] + gain[i]);
    }
    return Math.max(...altitudes);
};
```

# Code 2
- Math.max gives us the largest number in the array
- We spread the gain array and run reduce on it.
- Our params are: accumulator(empty array), cv(current val), and i(current position in loop)
- To our accumulator we push( cv + acc[i])
- We return acc
- We start our accumulator at [0]
```
var largestAltitude = function(gain) {
return Math.max(...gain.reduce((acc, cv, i)=> (acc.push(cv + acc[i]), acc), [0]))
};
```