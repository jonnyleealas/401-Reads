# Replace 69 1323
Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 # Simplified 
 - Convert number into string array
 - Find the first 6 and replace with 9
 - Convert back to number
 - Return number





# Code 

```
let maximum69Number  = function(num) {
    return parseInt(num.toString().replace('6', '9'))
};
```