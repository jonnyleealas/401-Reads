You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

 
var replaceDigits = function(s) {
    // to edit a string we need to split the string
    s = s.split('')

   // to replace all the odd digits we start at i = 1. Index 1 will be the first odd index because indexes start at 0. 0 in this case is a character not a digit.

   // then we must make sure to increment i+=2 to skip over the even index and land on the next odd index. 


for(let i=1; i < s.length; i+=2){

    // we set s[i] to be the character code of s[i-1].charCodeAt() 
    // this will go to our previous index, check its character code
    // once we have the character code, we add the number of indexes after.
    // we add + (+s[i])
    s[i] = String.fromCharCode(s[i-1].charCodeAt() + (+s[i]))
    // i am assuming (+s[i]) will convert the index to a number so we can return the correct character code + the spaces after it.
}

once we've replaced every odd index with letters, we can return and rejoin our split string.
    return s.join('')
    
};