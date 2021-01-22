# Native String Search
- Checking for a pattern
- Checking multiple characters against multiple characters
- Checking a long string against a short string
-
# Pseudocode
- Loop over longer string
- Takes larger string and pattern we are looking for
    - Loop over shorter string
    - if char dont mathc break inner loop
    - if char match keep going
    - if complete innner loop and find a match, ++ the count of matches
    - return the count
    ```
    function nativeSearch(array, match){
        for(let i = 0; i < array.length; i++){
         for(let j = 0; j< match.length; j++){
             if(match[j] !== array[i+j]) break
         }
        }
    }