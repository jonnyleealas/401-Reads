# 1684. Count the Number of Consistent Strings
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

# Simplified
- We are given a string and an array of strings
- We the allowed strings contains letters. We have to count how many items in the array contain every letter in the string. 
- If it contains the letters count++
- If it contains letters that are not in the string we don't count


# Code 
- We set a count binding
- Loop through our words array
- Binding for isAllowed = true. If something is true we can add to our count.
- Loop through each letter of a word
- if there is a letter that is not allowed set isAllowed = false
- If all letters are allowed count++

```
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    
    for(let word of words){
        let isAllowed = true;
        for(let letter of word){
            if(!allowed.includes(letter)) isAllowed = false    
        }
        if(isAllowed) count++
    }
    return count
};

```