# Split a String Balanced Strings





# Code 
var balancedStringSplit = function(s) {
    let result = 0, countL = 0, countR = 0
    for (const char of s) {
        if (char === 'R') countR++
        if (char === 'L') countL++
        if (countR === countL) result++
    }
    return result
};
