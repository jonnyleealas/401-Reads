# Valid Palindrome 125
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 # Simplified
 - I the string a palindrome, meaning does it read the same if it is read forward and backwards. 
 - we check to see if anything doesnt match. If it doesn't its an automatic false.

# Code
```
var isPalindrome = function(s) {
    
   
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
    console.log(s);

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
```