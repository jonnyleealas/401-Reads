# Split a String Balanced Strings
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the m

# Simplified
- Keep track of each letter and save in a count.
- Each time that R and L are the same count we add one to our count.
- Loop through our string.
- Return our count.




# Code 
- Binding for result which we return. Result counts the matches
- Binding for L
- Binding for R
- We keep track and count each L and each R. If at the end there is an even amount of L and R we add a match to our result.
var balancedStringSplit = function(s) {
    let result = 0, countL = 0, countR = 0
    for (const char of s) {
        if (char === 'R') countR++
        if (char === 'L') countL++
        if (countR === countL) result++
    }
    return result
};
