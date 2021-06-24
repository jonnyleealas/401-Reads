# Count Most Consecutive 1446
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.


# Simplified
- We have to keep count of consecutive strings found at each index.
- We create a binding for count and for current count.
- If current count is > than count we update count to equal current count.
- We use a nested loop. Outer loop keeps track of current index and the inner loop checks whether outer loop string matches inner loop string.
- We keep updating currentCount as long as the indexes both == if not we break.
- Next we write an if statement to update our count according to currentCount.

# Code
```
let maxConsecutive = (s) => {
    let count = 0;

    for(let i = 0; i < s.length; i++){
        let currentCount = 0;
        for(let j = 0; j < s.length; j++){
            if(s[i] != s[j])
            break;
            currentCount++
        }
        if(currentCount > count){
            count = currentCount
        }
    }
    return count
}
```