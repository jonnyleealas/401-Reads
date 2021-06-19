# Check if two strings match
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.


# Simplified
- .join() first
- .join() second
- first, second ? true : false

# Code

```
var arrayStringsAreEqual =(a,b)=>a.join('') == b.join('') ? true : false
```