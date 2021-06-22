# Remove Outermost Parenthesis
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

# Simplified 
- Iterate through array
- Binding for counter
- Binding for empty string to += new parenthesis 
- if s[i] == ')'  --> counter --
- if counter != 0 --> string += s[i]
- if s[i] == '('  --> counter ++
- Basically we are checking each index. If the counter is anything above or below 0 string[i] will be added to our empty string.


# Code 
```
var removeOuterParentheses = function(s) {
    let string = '';
    let j = 0;
    for(let i = 0; i < s.length; i++){
        
        if(s[i].charCodeAt() == 41 ){
            j--;
        }
        
        if(j != 0){
            string += s[i];
        }
      
        
        if(s[i].charCodeAt() == 40 ){
            j++;
        } 
     
    }
   return string;
};


```